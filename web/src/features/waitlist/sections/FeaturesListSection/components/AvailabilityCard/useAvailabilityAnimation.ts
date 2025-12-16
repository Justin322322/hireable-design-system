"use client";

import { useInViewWithDelay } from "@/hooks";
import { useEffect, useRef, useState } from "react";

interface UseAvailabilityAnimationProps {
  isMobile: boolean;
}

/**
 * Hook to manage the complex animation state machine for AvailabilityCard
 */
export function useAvailabilityAnimation({
  isMobile,
}: UseAvailabilityAnimationProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  // Use delayed exit to prevent jarring resets when scrolling
  const isCardInView = useInViewWithDelay(cardRef, {
    amount: 0.3,
    exitDelay: 800,
  });
  const [isHovered, setIsHovered] = useState(false);
  const hasTriggeredRef = useRef(false);

  // Animation phases
  const [buttonClicked, setButtonClicked] = useState(false);
  const [showAvailability, setShowAvailability] = useState(false);
  const [showExpandedAvailability, setShowExpandedAvailability] =
    useState(false);
  const [showSendInvites, setShowSendInvites] = useState(false);
  const [isIsolating, setIsIsolating] = useState(false);
  const [showCandidateSelects, setShowCandidateSelects] = useState(false);
  const [isCandidateSelected, setIsCandidateSelected] = useState(false);
  const [showMeetingDetails, setShowMeetingDetails] = useState(false);
  const [showConfirmedCandidate, setShowConfirmedCandidate] = useState(false);
  const [showCallScreen, setShowCallScreen] = useState(false);
  const [isJoinMeetingPressed, setIsJoinMeetingPressed] = useState(false);

  const shouldTrigger = isMobile ? isCardInView : isHovered;

  // Phase 1: Initial button click animation
  useEffect(() => {
    // Prevent re-triggering while animation is running
    if (shouldTrigger && hasTriggeredRef.current) return;

    if (shouldTrigger && !showAvailability) {
      hasTriggeredRef.current = true;
      const timer = setTimeout(() => {
        setButtonClicked(true);
        setTimeout(() => setShowAvailability(true), 200);
      }, 1000);
      return () => clearTimeout(timer);
    }

    if (!shouldTrigger) {
      // Reset when leaving viewport (mobile) or unhover (desktop)
      hasTriggeredRef.current = false;
      setShowAvailability(false);
      setShowExpandedAvailability(false);
      setButtonClicked(false);
    }
  }, [shouldTrigger, showAvailability]);

  // Phase 2: Expand availability panel
  useEffect(() => {
    if (showAvailability && !showExpandedAvailability) {
      const timer = setTimeout(() => setShowExpandedAvailability(true), 900);
      return () => clearTimeout(timer);
    } else if (!showAvailability) {
      setShowExpandedAvailability(false);
    }
  }, [showAvailability, showExpandedAvailability]);

  // Phase 3: Show send invites
  useEffect(() => {
    if (showExpandedAvailability) {
      const isolateTimer = setTimeout(() => setIsIsolating(true), 2500);
      const timer = setTimeout(() => setShowSendInvites(true), 3500);
      return () => {
        clearTimeout(timer);
        clearTimeout(isolateTimer);
      };
    } else {
      setShowSendInvites(false);
      setIsIsolating(false);
    }
  }, [showExpandedAvailability]);

  // Phase 4: Candidate selection and meeting flow
  useEffect(() => {
    if (showSendInvites) {
      // Use a single timeline array for cleaner cleanup
      const timers: NodeJS.Timeout[] = [];

      // All timers relative to showSendInvites becoming true
      timers.push(setTimeout(() => setIsCandidateSelected(true), 3200));
      timers.push(setTimeout(() => setShowCandidateSelects(true), 4500));
      timers.push(setTimeout(() => setShowMeetingDetails(true), 5000)); // 4500 + 500
      timers.push(setTimeout(() => setShowConfirmedCandidate(true), 6500)); // 4500 + 2000
      timers.push(setTimeout(() => setIsJoinMeetingPressed(true), 9000)); // 4500 + 4500
      timers.push(setTimeout(() => setShowCallScreen(true), 9500)); // 4500 + 5000

      return () => timers.forEach((t) => clearTimeout(t));
    } else {
      setShowCandidateSelects(false);
      setIsCandidateSelected(false);
      setShowMeetingDetails(false);
      setShowConfirmedCandidate(false);
      setShowCallScreen(false);
      setIsJoinMeetingPressed(false);
    }
  }, [showSendInvites]);

  return {
    cardRef,
    isCardInView,
    isHovered,
    setIsHovered,
    buttonClicked,
    showAvailability,
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
    isMobile,
  };
}
