import { Card, CardContent } from "@/components/ui/card";
import { useInViewWithDelay } from "@/hooks";
import React, { useEffect, useReducer, useRef, useState } from "react";

interface WellnessScoreCardProps {
  isMobile: boolean;
}

// Status based on score - using CSS variables where possible
const getStatus = (score: number) => {
  if (score >= 8)
    return {
      label: "Good",
      color: "var(--color-matched-green)",
      bg: "rgba(5, 150, 105, 0.08)",
    };
  if (score >= 5)
    return {
      label: "Poor",
      color: "var(--color-warning)",
      bg: "rgba(245, 158, 11, 0.08)",
    };
  return {
    label: "Critical",
    color: "var(--color-error)",
    bg: "var(--color-error-light)",
  };
};

// Bar widths from Figma
const barWidthPercents = [19.72, 20.53, 19.51, 20.33, 19.92];

// Chart rows from Figma - bottom to top
// Using CSS variable references for client color and trial orange
const CLIENT_COLOR = "var(--color-client)";
const CLIENT_LIGHT = "#99DBFF";
const TRIAL_ORANGE = "var(--color-trial-orange)";
const TRIAL_LIGHT = "#FFC299";

const chartRows = [
  {
    bottom: 10,
    colors: [
      CLIENT_COLOR,
      CLIENT_COLOR,
      CLIENT_COLOR,
      CLIENT_COLOR,
      CLIENT_LIGHT,
    ],
  },
  {
    bottom: 36,
    colors: [
      CLIENT_LIGHT,
      CLIENT_COLOR,
      CLIENT_COLOR,
      CLIENT_COLOR,
      CLIENT_COLOR,
    ],
  },
  {
    bottom: 62,
    colors: [
      CLIENT_COLOR,
      CLIENT_COLOR,
      CLIENT_COLOR,
      CLIENT_LIGHT,
      CLIENT_LIGHT,
    ],
  },
  {
    bottom: 88,
    colors: [
      CLIENT_LIGHT,
      CLIENT_LIGHT,
      CLIENT_COLOR,
      CLIENT_COLOR,
      CLIENT_COLOR,
    ],
  },
  {
    bottom: 114,
    colors: [
      CLIENT_LIGHT,
      CLIENT_LIGHT,
      CLIENT_LIGHT,
      TRIAL_LIGHT,
      TRIAL_LIGHT,
    ],
  },
  {
    bottom: 140,
    colors: [CLIENT_LIGHT, TRIAL_LIGHT, TRIAL_LIGHT, TRIAL_LIGHT, TRIAL_ORANGE],
  },
  {
    bottom: 166,
    colors: [
      TRIAL_ORANGE,
      TRIAL_ORANGE,
      TRIAL_LIGHT,
      TRIAL_LIGHT,
      TRIAL_ORANGE,
    ],
  },
  {
    bottom: 192,
    colors: [TRIAL_ORANGE, TRIAL_ORANGE, TRIAL_ORANGE, TRIAL_LIGHT, null],
  },
];

const verticalLines = [97, 198, 294, 394];
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

// Pre-calculate score for each cell to avoid recalculation during animation
const TOTAL_CELLS = 40;
const PHASE1_CELLS = 25;

const getScoreForCell = (cellIndex: number): number => {
  if (cellIndex < PHASE1_CELLS) {
    const phase1Progress = cellIndex / PHASE1_CELLS;
    return Math.round(10 * easeOutCubic(phase1Progress));
  }
  const phase2Progress =
    (cellIndex - PHASE1_CELLS) / (TOTAL_CELLS - PHASE1_CELLS);
  return Math.round(10 - 6 * easeInOutCubic(phase2Progress));
};

// Animation state type for batched updates
interface AnimationState {
  cellIndex: number;
  score: number;
  status: ReturnType<typeof getStatus>;
}

type AnimationAction =
  | { type: "UPDATE"; cellIndex: number }
  | { type: "RESET" };

const initialAnimationState: AnimationState = {
  cellIndex: -1,
  score: 0,
  status: getStatus(0),
};

// Reducer batches all animation state updates into single dispatch
const animationReducer = (
  state: AnimationState,
  action: AnimationAction
): AnimationState => {
  switch (action.type) {
    case "UPDATE": {
      const score = getScoreForCell(action.cellIndex);
      return {
        cellIndex: action.cellIndex,
        score,
        status: getStatus(score),
      };
    }
    case "RESET":
      return initialAnimationState;
    default:
      return state;
  }
};

export const WellnessScoreCard = React.memo(
  ({ isMobile }: WellnessScoreCardProps): React.ReactElement => {
    const cardRef = useRef<HTMLDivElement>(null);
    const isCardInView = useInViewWithDelay(cardRef, {
      amount: 0.3,
      exitDelay: 800,
    });
    const [isHovered, setIsHovered] = useState(false);

    // Use reducer for batched animation state updates (3 states → 1 dispatch)
    const [animationState, dispatch] = useReducer(
      animationReducer,
      initialAnimationState
    );

    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const isAnimatingRef = useRef(false);

    const shouldAnimate = isMobile ? isCardInView : isHovered;

    useEffect(() => {
      if (shouldAnimate && isAnimatingRef.current) return;

      if (!shouldAnimate) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        isAnimatingRef.current = false;
        dispatch({ type: "RESET" });
        return;
      }

      isAnimatingRef.current = true;
      let currentCell = 0;

      // Use setInterval instead of RAF - fires every 300ms instead of every frame
      // Single dispatch replaces 3 setState calls
      intervalRef.current = setInterval(() => {
        if (currentCell >= TOTAL_CELLS) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          return;
        }

        dispatch({ type: "UPDATE", cellIndex: currentCell });
        currentCell++;
      }, 300);

      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }, [shouldAnimate]);

    // Helper to check if a cell should be visible
    const isCellVisible = (rowIndex: number, colIndex: number) => {
      const cellIndex = rowIndex * 5 + colIndex;
      return cellIndex <= animationState.cellIndex;
    };

    return (
      <div
        ref={cardRef}
        className="flex w-full justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="feature-card flex h-[310px] w-full max-w-[524px] flex-col items-start gap-4 p-4">
          <Card className="relative flex h-full w-full flex-col items-start gap-4 border-0 bg-transparent p-0 shadow-none">
            <CardContent className="flex flex-wrap items-center gap-2 p-0 sm:gap-3">
              <div className="flex h-8 shrink-0 items-center justify-center gap-2 rounded-full border border-neutral-300 bg-(--color-neutral-100) px-3 py-1">
                <span className="font-['Inter'] text-sm leading-[150%] font-normal tracking-[0.2px] whitespace-nowrap text-neutral-900 sm:text-base">
                  Wellness Score:
                </span>
                <span className="inline-block w-5 text-center font-['Inter'] text-sm leading-[150%] font-semibold tracking-[0.2px] text-neutral-900 tabular-nums sm:text-base">
                  {animationState.score}
                </span>
              </div>
              <div
                className="flex h-8 shrink-0 items-center justify-center rounded-full border px-3 py-1 transition-all duration-300 ease-out sm:px-4"
                style={{
                  backgroundColor: animationState.status.bg,
                  borderColor: `color-mix(in srgb, ${animationState.status.color} 30%, transparent)`,
                }}
              >
                <span
                  className="font-['Inter'] text-sm leading-[150%] font-medium tracking-[0.2px] whitespace-nowrap transition-colors duration-300"
                  style={{ color: animationState.status.color }}
                >
                  {animationState.status.label}
                </span>
              </div>
            </CardContent>

            <CardContent className="relative w-full p-0">
              {/* Chart container with border on all sides */}
              <div
                className="relative w-full rounded-lg border border-neutral-300 bg-(--color-neutral-100)"
                style={{ height: "222px" }}
              >
                {/* Bar rows */}
                {chartRows.map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="absolute left-0 flex h-[18px] w-full flex-row items-center"
                    style={{ bottom: `${row.bottom}px` }}
                  >
                    {row.colors.map((color, colIndex) => {
                      if (color === null)
                        return (
                          <div
                            key={colIndex}
                            style={{
                              width: `${barWidthPercents[colIndex]}%`,
                            }}
                          />
                        );
                      const visible = isCellVisible(rowIndex, colIndex);
                      return (
                        <div
                          key={colIndex}
                          className="h-[18px] shrink-0 transition-opacity duration-300 ease-out"
                          style={{
                            width: `${barWidthPercents[colIndex]}%`,
                            backgroundColor: color,
                            opacity: visible ? 1 : 0,
                          }}
                        />
                      );
                    })}
                  </div>
                ))}

                {/* Vertical grid lines - rendered after bars to appear on top */}
                {verticalLines.map((left, i) => (
                  <div
                    key={i}
                    className="absolute top-0 z-10 h-full w-px bg-neutral-300"
                    style={{ left: `${(left / 492) * 100}%` }}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
);

WellnessScoreCard.displayName = "WellnessScoreCard";
