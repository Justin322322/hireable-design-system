import { Card, CardContent } from "@/components/ui";
import { PulsingButton } from "@/components/ui/PulsingButton";
import { motion } from "framer-motion";
import { ANIMATION_CONFIG, GOALS_DATA, TYPOGRAPHY } from "./constants";

interface GoalCardProps {
  goal: (typeof GOALS_DATA)[0];
  delay: number;
  showPulsingButton?: boolean;
  onPulsingButtonClick?: () => void;
  onCardClick?: () => void;
}

export const GoalCard: React.FC<GoalCardProps> = ({
  goal,
  delay,
  showPulsingButton = false,
  onPulsingButtonClick,
  onCardClick,
}) => (
  <motion.div
    {...ANIMATION_CONFIG}
    transition={{ ...ANIMATION_CONFIG.transition, delay }}
  >
    <Card
      className={`relative flex h-[101.67px] w-full flex-col justify-between rounded-[5.15px] border-[0.64px] border-neutral-300 bg-white p-[10.3px] ${showPulsingButton ? "hover-neutral pointer-events-auto cursor-pointer" : ""}`}
      onClick={showPulsingButton ? onCardClick : undefined}
      role={showPulsingButton ? "button" : undefined}
      tabIndex={showPulsingButton ? 0 : undefined}
      onKeyDown={
        showPulsingButton
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onCardClick?.();
              }
            }
          : undefined
      }
    >
      {/* Pulsing Button Overlay */}
      {showPulsingButton && (
        <PulsingButton
          onClick={(e) => {
            e.stopPropagation();
            onPulsingButtonClick?.();
          }}
          className="absolute top-[8px] left-[70px] z-10"
          ariaLabel="View Close New Deals details"
        />
      )}
      <CardContent className="flex h-full flex-col p-0">
        {/* Title and badge */}
        <div className="flex min-h-px min-w-px flex-1 items-start justify-between">
          <div className="flex min-h-px min-w-px flex-1 items-center justify-center">
            <span
              className={`${TYPOGRAPHY.goalTitle} min-h-px min-w-px flex-1 overflow-hidden text-ellipsis whitespace-pre-wrap`}
            >
              {goal.title}
            </span>
          </div>
          <span className="inline-flex items-center justify-center rounded-full border-[0.32px] border-[rgba(195,195,195,0.4)] bg-[rgba(195,195,195,0.08)] px-[5.15px] py-[2.57px]">
            <span className={TYPOGRAPHY.pillBadgeLarge}>{goal.type}</span>
          </span>
        </div>

        {/* Value and progress */}
        <div className="flex w-full flex-col gap-[5.15px]">
          {goal.value && (
            <div className="flex h-[14.16px] w-full items-center">
              <span className={TYPOGRAPHY.goalValue}>{goal.value}</span>
            </div>
          )}

          {/* Progress bar */}
          <div className="flex h-[10.3px] w-full items-center">
            <div className="flex h-[5.15px] w-full flex-1 flex-col items-start justify-center overflow-hidden rounded-full bg-neutral-100">
              <div
                className="h-[5.15px] min-h-px min-w-px rounded-full"
                style={{
                  width: `${goal.progress}%`,
                  backgroundColor: goal.progressColor,
                }}
              />
            </div>
          </div>

          {/* Status row */}
          <div className="flex h-[12.87px] w-full items-center justify-between">
            <div className="flex items-center justify-center gap-[2.57px]">
              {goal.growth && (
                <>
                  <span className="text-success font-sans text-[6.43px] leading-[120%] tracking-[0.13px]">
                    {goal.growth}
                  </span>
                  <span className={TYPOGRAPHY.bodySmall}>from last update</span>
                </>
              )}
              {goal.status && (
                <span className={TYPOGRAPHY.bodySmall}>{goal.status}</span>
              )}
            </div>
            <div className="flex items-center justify-center gap-[6.44px]">
              <span className={TYPOGRAPHY.bodySmall}>{goal.date}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);
