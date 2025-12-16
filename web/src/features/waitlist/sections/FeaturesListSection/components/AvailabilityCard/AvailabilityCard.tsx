"use client";

import { AnimatePresence } from "framer-motion";
import React from "react";
import { AvailabilitySlotsPhase } from "./AvailabilitySlotsPhase";
import { CalendarConnectPhase } from "./CalendarConnectPhase";
import { CallScreenPhase } from "./CallScreenPhase";
import { CandidateInvitesPhase } from "./CandidateInvitesPhase";
import { MeetingDetailsPhase } from "./MeetingDetailsPhase";
import { PhaseHeader } from "./PhaseHeader";
import { useAvailabilityAnimation } from "./useAvailabilityAnimation";

interface AvailabilityCardProps {
  isMobile: boolean;
}

export const AvailabilityCard = React.memo(
  ({ isMobile }: AvailabilityCardProps): React.ReactElement => {
    const {
      cardRef,
      isCardInView,
      isHovered,
      setIsHovered,
      buttonClicked,
      showExpandedAvailability,
      showSendInvites,
      isIsolating,
      showCandidateSelects,
      isCandidateSelected,
      showMeetingDetails,
      showConfirmedCandidate,
      showCallScreen,
      isJoinMeetingPressed,
      setIsJoinMeetingPressed,
      setShowCallScreen,
    } = useAvailabilityAnimation({ isMobile });

    const shouldShowConnect = isMobile ? isCardInView : isHovered;

    return (
      <div
        ref={cardRef}
        className="flex h-[350px] w-full items-start justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="feature-card flex w-full max-w-[380px] flex-col items-center gap-0! overflow-hidden p-0! sm:max-w-[460px] lg:max-w-[500px]"
          style={{
            height: showExpandedAvailability ? "350px" : "auto",
            minHeight: "260px",
            transition: "height 0.3s ease",
          }}
        >
          {/* Phase 1: Calendar Connect */}
          <CalendarConnectPhase
            isVisible={!showExpandedAvailability}
            shouldShowConnect={shouldShowConnect}
            buttonClicked={buttonClicked}
          />

          {/* Expanded Phases */}
          {showExpandedAvailability && (
            <div className="flex size-full flex-col items-start gap-3 p-5 sm:gap-4 sm:p-6">
              <PhaseHeader
                showSendInvites={showSendInvites}
                showCandidateSelects={showCandidateSelects}
                showCallScreen={showCallScreen}
              />

              <AnimatePresence>
                {!showSendInvites ? (
                  <AvailabilitySlotsPhase isIsolating={isIsolating} />
                ) : !showCandidateSelects ? (
                  <CandidateInvitesPhase
                    showSendInvites={showSendInvites}
                    showCandidateSelects={showCandidateSelects}
                    isCandidateSelected={isCandidateSelected}
                  />
                ) : !showCallScreen ? (
                  <MeetingDetailsPhase
                    showConfirmedCandidate={showConfirmedCandidate}
                    showMeetingDetails={showMeetingDetails}
                    isJoinMeetingPressed={isJoinMeetingPressed}
                    onJoinMeeting={() => {
                      setIsJoinMeetingPressed(true);
                      setTimeout(() => setShowCallScreen(true), 500);
                    }}
                  />
                ) : (
                  <CallScreenPhase />
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    );
  }
);

AvailabilityCard.displayName = "AvailabilityCard";
