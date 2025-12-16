import { Drawer } from "@/components/ui";
import React, { useState } from "react";
import { ScrollContainer } from "../../shared/ScrollContainer";
import { AIMatchCard } from "./AIMatchCard";
import { CandidateHeader, JobDetails } from "./CandidateHeader";
import { DrawerFooter } from "./DrawerFooter";
import { DrawerHeader } from "./DrawerHeader";
import {
  AboutSection,
  CertificatesSection,
  EducationSection,
  LinksSection,
  PersonalMessageSection,
  SkillsSection,
} from "./ProfileSections";

interface CandidateProfileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  candidateName?: string;
}

export const CandidateProfileDrawer: React.FC<CandidateProfileDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  const [isAICardExpanded, setIsAICardExpanded] = useState(false);

  return (
    <Drawer isOpen={isOpen} onClose={onClose} width="664px">
      <DrawerHeader onClose={onClose} />

      {/* Scrollable Content */}
      <ScrollContainer className="flex-1">
        {/* Top Section */}
        <div className="flex flex-col gap-[20.59px] border-b border-neutral-300 p-[15.44px]">
          <div className="flex flex-col gap-[15.44px]">
            <CandidateHeader />
            <JobDetails />
            <AIMatchCard
              isExpanded={isAICardExpanded}
              onToggle={() => setIsAICardExpanded(!isAICardExpanded)}
            />

            {/* Tabs */}
            <div className="flex h-[25.74px] items-start gap-[3.86px]">
              <div className="border-client bg-client/10 flex h-[25.74px] w-[62.59px] items-center justify-center gap-[2.57px] rounded-[5.15px] border-[0.64px]">
                <span className="text-client font-['Inter'] text-[9px] font-semibold">
                  Overview
                </span>
              </div>
              <div className="flex h-[25.74px] w-[68.59px] items-center justify-center gap-[2.57px] rounded-[5.15px] border-[0.64px] border-neutral-300 bg-white">
                <span className="font-['Inter'] text-[9px] font-semibold text-neutral-900">
                  Resume
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-[10.3px] p-[15.44px]">
          <AboutSection />
          <SkillsSection />
          <EducationSection />
          <CertificatesSection />
          <LinksSection />
          <PersonalMessageSection />
        </div>
      </ScrollContainer>

      <DrawerFooter />
    </Drawer>
  );
};
