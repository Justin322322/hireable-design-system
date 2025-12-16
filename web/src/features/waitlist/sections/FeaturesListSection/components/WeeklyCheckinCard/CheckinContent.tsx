import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import type { SuggestedAction } from "../../types";
import { GlassRow } from "../GlassRow";

interface CheckinContentProps {
  showLoadingPhase: boolean;
  showProcessingPhase: boolean;
  showTrendsPhase: boolean;
  showSecondTrendPhase: boolean;
  showThirdTrendPhase: boolean;
  showAnalyzingPhase: boolean;
  showCompletionPhase: boolean;
  showSuggestedActions: boolean;
  suggestedActionsHeight: number;
  currentNameIndex: number;
  checkinNames: string[];
  suggestedActions: SuggestedAction[];
  suggestedActionsRef: React.RefObject<HTMLDivElement | null>;
}

export const CheckinContent = React.memo(
  ({
    showLoadingPhase,
    showProcessingPhase,
    showTrendsPhase,
    showSecondTrendPhase,
    showThirdTrendPhase,
    showAnalyzingPhase,
    showCompletionPhase,
    showSuggestedActions,
    suggestedActionsHeight,
    currentNameIndex,
    checkinNames,
    suggestedActions,
    suggestedActionsRef,
  }: CheckinContentProps) => {
    const isProcessingOrTrends =
      showProcessingPhase ||
      showTrendsPhase ||
      showSecondTrendPhase ||
      showThirdTrendPhase ||
      showAnalyzingPhase;

    return (
      <motion.div
        layout
        className="flex w-full flex-col items-start gap-4 px-4 pb-4"
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {!showLoadingPhase ? (
            <CollectingPhase
              currentNameIndex={currentNameIndex}
              checkinNames={checkinNames}
            />
          ) : isProcessingOrTrends ? (
            <ProcessingPhase
              showProcessingPhase={showProcessingPhase}
              showAnalyzingPhase={showAnalyzingPhase}
              showTrendsPhase={showTrendsPhase}
              showSecondTrendPhase={showSecondTrendPhase}
            />
          ) : showCompletionPhase ? (
            <CompletionPhase
              showSuggestedActions={showSuggestedActions}
              suggestedActionsHeight={suggestedActionsHeight}
              suggestedActions={suggestedActions}
              suggestedActionsRef={suggestedActionsRef}
            />
          ) : null}
        </AnimatePresence>
      </motion.div>
    );
  }
);

CheckinContent.displayName = "CheckinContent";

const CollectingPhase = React.memo(
  ({
    currentNameIndex,
    checkinNames,
  }: {
    currentNameIndex: number;
    checkinNames: string[];
  }) => (
    <motion.div
      key="content-collecting"
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="w-full"
    >
      <GlassRow contentClassName="justify-start items-center">
        <Image
          src="/icons/icon-active-trials.svg"
          alt="User icon"
          width={20}
          height={20}
          className="size-4 shrink-0 sm:size-5"
        />
        <motion.div layout className="flex min-w-0 flex-1 items-center">
          <motion.span
            layout
            key={currentNameIndex}
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-text-s mr-1 text-sm leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) whitespace-nowrap text-neutral-900 [font-style:var(--text-s-font-style)] sm:text-base lg:text-(length:--text-s-font-size)"
          >
            {checkinNames[currentNameIndex]}:
          </motion.span>
          <motion.span
            layout
            className="font-text-s text-client truncate text-sm leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) [font-style:var(--text-s-font-style)] sm:text-base lg:text-(length:--text-s-font-size)"
          >
            submitted their weekly checkin.
          </motion.span>
        </motion.div>
      </GlassRow>
    </motion.div>
  )
);

CollectingPhase.displayName = "CollectingPhase";

const ProcessingPhase = React.memo(
  ({
    showProcessingPhase,
    showAnalyzingPhase,
    showTrendsPhase,
    showSecondTrendPhase,
  }: {
    showProcessingPhase: boolean;
    showAnalyzingPhase: boolean;
    showTrendsPhase: boolean;
    showSecondTrendPhase: boolean;
  }) => (
    <motion.div
      key="content-processing-group"
      layout
      className="w-full"
      transition={{ duration: 0.35 }}
    >
      <GlassRow contentClassName="items-center gap-2 sm:gap-2.5">
        <AnimatePresence mode="popLayout" initial={false}>
          {showProcessingPhase || showAnalyzingPhase ? (
            <SpinnerIcon />
          ) : (
            <TrendIcon />
          )}
        </AnimatePresence>

        <AnimatePresence mode="popLayout" initial={false}>
          {showProcessingPhase ? (
            <ProcessingText>Processing weekly responses...</ProcessingText>
          ) : showAnalyzingPhase ? (
            <ProcessingText>System connecting patterns...</ProcessingText>
          ) : (
            <TrendsPill
              showTrendsPhase={showTrendsPhase}
              showSecondTrendPhase={showSecondTrendPhase}
            />
          )}
        </AnimatePresence>
      </GlassRow>
    </motion.div>
  )
);

ProcessingPhase.displayName = "ProcessingPhase";

const SpinnerIcon = () => (
  <motion.div
    key="spinner-wrapper"
    layout
    className="flex items-center justify-center"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.2 }}
  >
    <svg
      width="20"
      height="20"
      viewBox="0 0 16 16"
      fill="none"
      className="size-5 shrink-0 animate-spin"
    >
      <circle
        cx="8"
        cy="8"
        r="6"
        stroke="#e0e0e0"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M 8 2 A 6 6 0 0 1 14 8"
        stroke="#00a7f8"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  </motion.div>
);

const TrendIcon = () => (
  <motion.div
    key="trend-icon"
    layout
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.2 }}
    className="flex shrink-0 items-center gap-2"
  >
    <div className="relative size-6 shrink-0 overflow-hidden sm:size-8">
      <Image
        src="/icons/yellow-circle.svg"
        alt="Trend indicator"
        width={80}
        height={80}
        className="absolute size-[80px]"
        style={{
          left: "50%",
          top: "calc(50% + 4px)",
          transform: "translate(-50%, -50%)",
          width: "auto",
          height: "auto",
        }}
      />
    </div>
    <span className="font-text-s text-sm leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) text-neutral-900 [font-style:var(--text-s-font-style)] sm:text-base lg:text-(length:--text-s-font-size)">
      Spotting trends:
    </span>
  </motion.div>
);

const ProcessingText = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    layout
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 10 }}
    transition={{ duration: 0.25 }}
    className="flex-1"
  >
    <span className="font-text-s text-base leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) whitespace-nowrap text-neutral-900 [font-style:var(--text-s-font-style)]">
      {children}
    </span>
  </motion.div>
);

const TrendsPill = ({
  showTrendsPhase,
  showSecondTrendPhase,
}: {
  showTrendsPhase: boolean;
  showSecondTrendPhase: boolean;
}) => (
  <motion.div
    layout
    key="pill-container"
    className="flex min-w-0 flex-1 items-center justify-start overflow-hidden rounded-full border border-white bg-[#FFF7E0] px-2.5 py-1 shadow-[inset_0px_0.5px_4px_#FFE390] sm:ml-auto sm:w-auto sm:flex-none sm:justify-center sm:px-3 sm:py-1.5"
    transition={{ layout: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] } }}
  >
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.span
        layout
        key={
          showTrendsPhase
            ? "workload"
            : showSecondTrendPhase
              ? "satisfaction"
              : "availability"
        }
        initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -10, transition: { duration: 0.15 } }}
        transition={{
          opacity: { duration: 0.25 },
          y: { duration: 0.25 },
          filter: { duration: 0.25 },
        }}
        className="font-text-s truncate text-left text-xs leading-[120%] font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) text-[#533E00] [font-style:var(--text-s-font-style)] sm:text-center sm:text-sm sm:whitespace-nowrap"
      >
        {showTrendsPhase
          ? "Workload 30% higher"
          : showSecondTrendPhase
            ? "Satisfaction score dropped 15%"
            : 'Availability marked "Limited"'}
      </motion.span>
    </AnimatePresence>
  </motion.div>
);

const CompletionPhase = React.memo(
  ({
    showSuggestedActions,
    suggestedActionsHeight,
    suggestedActions,
    suggestedActionsRef,
  }: {
    showSuggestedActions: boolean;
    suggestedActionsHeight: number;
    suggestedActions: SuggestedAction[];
    suggestedActionsRef: React.RefObject<HTMLDivElement | null>;
  }) => (
    <motion.div
      key="completion-content"
      layout
      className="feature-capsule-rounded w-full cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <motion.div layout className="relative z-10 flex w-full flex-col">
        <motion.div
          layout
          className="flex h-12 w-full items-center gap-2.5 px-6 py-2"
        >
          <motion.div
            layout
            className="relative size-8 shrink-0 overflow-hidden"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              scale: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
              opacity: { duration: 0.5 },
              layout: { duration: 0.35 },
            }}
          >
            <Image
              src="/icons/green-circle.svg"
              alt="Success indicator"
              width={80}
              height={80}
              className="absolute size-[80px]"
              style={{
                left: "50%",
                top: "calc(50% + 4px)",
                transform: "translate(-50%, -50%)",
                width: "auto",
                height: "auto",
              }}
            />
          </motion.div>
          <motion.span
            layout
            key="completion-text"
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
              layout: { duration: 0.35 },
            }}
            className="font-text-s text-success text-base leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) [font-style:var(--text-s-font-style)]"
          >
            Check our suggested actions.
          </motion.span>
        </motion.div>

        {/* Hidden measurement div */}
        {!showSuggestedActions && (
          <motion.div
            layout
            ref={suggestedActionsRef}
            className="invisible absolute flex w-full flex-col border-t border-white/20 px-6 py-2.5"
            style={{ pointerEvents: "none" }}
          >
            <SuggestedActionsList actions={suggestedActions} />
          </motion.div>
        )}

        <AnimatePresence initial={false}>
          {showSuggestedActions && suggestedActionsHeight > 0 && (
            <motion.div
              layout
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: suggestedActionsHeight }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                height: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
                opacity: {
                  duration: 0.7,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: 0.15,
                },
                layout: { duration: 0.35 },
              }}
              className="flex w-full flex-col overflow-hidden border-t border-white/20 px-6 py-2.5"
            >
              <SuggestedActionsList actions={suggestedActions} animated />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
);

CompletionPhase.displayName = "CompletionPhase";

const SuggestedActionsList = ({
  actions,
  animated = false,
}: {
  actions: SuggestedAction[];
  animated?: boolean;
}) => (
  <motion.div layout className="flex w-full flex-col gap-2.5">
    {actions.map((action, index) => (
      <motion.div
        layout
        key={action.id}
        {...(animated && {
          initial: { opacity: 0, y: -10, filter: "blur(4px)" },
          animate: { opacity: 1, y: 0, filter: "blur(0px)" },
          transition: {
            duration: 0.5,
            delay: index * 0.1,
            ease: [0.25, 0.1, 0.25, 1],
            layout: { duration: 0.35 },
          },
        })}
        className="flex w-full items-start gap-2.5"
      >
        <motion.div
          layout
          className="bg-success mt-0.5 ml-1 flex size-5 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold text-white"
        >
          {action.id}
        </motion.div>
        <motion.div layout className="flex flex-1 flex-col gap-0.5">
          <motion.span
            layout
            className="font-text-s text-xs leading-[150%] font-semibold tracking-(--text-s-letter-spacing) text-neutral-900 [font-style:var(--text-s-font-style)]"
          >
            {action.title}
          </motion.span>
          <motion.p
            layout
            className="text-[11px] leading-[150%] tracking-[0.2px] text-neutral-700"
          >
            {action.description}
          </motion.p>
        </motion.div>
      </motion.div>
    ))}
  </motion.div>
);
