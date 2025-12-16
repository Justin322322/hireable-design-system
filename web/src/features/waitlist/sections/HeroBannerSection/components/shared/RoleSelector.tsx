import { type RoleType } from "@/stores";
import { motion } from "framer-motion";
import React from "react";
import { ROLE_COLORS } from "../../constants";

interface RoleSelectorProps {
  selectedRole: RoleType;
  onRoleChange: (role: RoleType) => void;
  options: readonly { value: RoleType; label: string }[];
}

const RoleSelectorComponent: React.FC<RoleSelectorProps> = ({
  selectedRole,
  onRoleChange,
  options,
}) => {
  // Handle hydration - ensure client is pre-selected on mount
  // Removed hydration check as store persistence is disabled and default state is consistent

  return (
    <div className="relative flex w-auto items-center justify-center">
      <div className="feature-capsule h-[44px] w-[175px] p-1">
        <div className="relative z-10 flex w-full items-center">
          {options.map((option) => {
            const isSelected = selectedRole === option.value;
            const isClient = option.value === "client";
            const roleType = isClient ? "client" : "talent";

            // Balanced widths: both roles get equal space when selected
            // Selected state: 95px, Unselected state: 72px
            let widthClass = "";
            if (isSelected) {
              widthClass = "w-[95px]";
            } else {
              widthClass = "w-[72px]";
            }

            return (
              <button
                key={option.value}
                onClick={() => onRoleChange(option.value)}
                data-role={option.value}
                data-active={isSelected}
                className={`group relative z-10 inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-full transition-colors duration-200 ${widthClass}`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="selectedBackground"
                    className={`absolute inset-0 rounded-full border border-solid border-white ${ROLE_COLORS.backgroundColors[roleType]} ${ROLE_COLORS.shadowColors[roleType]}`}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10 inline-flex items-center justify-center gap-2">
                  {isSelected && (
                    <div
                      className={`relative size-2.5 rounded-[5px] ${ROLE_COLORS.indicatorShadows[roleType]} ${ROLE_COLORS.indicatorGradients[roleType]}`}
                    />
                  )}
                  <span
                    className={`text-center font-['Inter',Helvetica] text-sm leading-[16.8px] font-normal tracking-[0.20px] whitespace-nowrap transition-all duration-200 ${
                      isSelected
                        ? ROLE_COLORS.textColors[roleType]
                        : "text-neutral-300 group-hover:text-neutral-500"
                    }`}
                  >
                    {option.label}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const RoleSelector = React.memo(RoleSelectorComponent);
RoleSelector.displayName = "RoleSelector";
