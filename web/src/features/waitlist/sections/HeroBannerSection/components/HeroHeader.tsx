import type { RoleType } from "@/stores";
import React from "react";
import { HeroContent, RoleSelector } from "./index";

interface HeroHeaderProps {
  selectedRole: RoleType;
  setSelectedRole: (role: RoleType) => void;
  userRoleOptions: readonly { value: RoleType; label: string }[];
  onJoinWaitlistClick?: () => void;
}

const HeroHeaderComponent: React.FC<HeroHeaderProps> = ({
  selectedRole,
  setSelectedRole,
  userRoleOptions,
  onJoinWaitlistClick,
}) => {
  return (
    <div className="relative flex min-h-[50vh] w-full max-w-[672px] flex-col items-center justify-center gap-6 sm:min-h-0 sm:gap-8">
      <RoleSelector
        selectedRole={selectedRole}
        onRoleChange={setSelectedRole}
        options={userRoleOptions}
      />
      <HeroContent
        selectedRole={selectedRole}
        onJoinWaitlistClick={onJoinWaitlistClick}
      />
    </div>
  );
};

export const HeroHeader = React.memo(HeroHeaderComponent);
HeroHeader.displayName = "HeroHeader";
