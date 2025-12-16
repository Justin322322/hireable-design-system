import { Card, CardContent } from "@/components/ui";
import { AnimatePresence, motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface Application {
  company: string;
  position: string;
  salary: string;
  experience: string;
  status?: string;
  postedTime?: string;
}

interface KanbanColumn {
  title: string;
  count: number;
  applications: Application[];
}

const kanbanData: KanbanColumn[] = [
  {
    title: "Applications Sent",
    count: 5,
    applications: [
      {
        company: "Smith Boutique Corp",
        position: "Regional Sales Director",
        salary: "$110k - $140k/yr",
        experience: "1-3 years experience",
        status: "FULL-TIME",
        postedTime: "Posted 1 day ago.",
      },
      {
        company: "NowTech Industries",
        position: "Account Executive",
        salary: "$90k - $120k/yr",
        experience: "1-3 years experience",
        status: "FULL-TIME",
        postedTime: "Posted 1 day ago.",
      },
      {
        company: "Quantum Loop Enterprises",
        position: "Sales Operations Specialist",
        salary: "$75k - $95k/yr",
        experience: "1-3 years experience",
        status: "FULL-TIME",
        postedTime: "Posted 1 day ago.",
      },
      {
        company: "Ethereal Dynamics Corp",
        position: "Sales Enablement Coordinator",
        salary: "$65k - $85k/yr",
        experience: "1-3 years experience",
        status: "FULL-TIME",
        postedTime: "Posted 1 day ago.",
      },
      {
        company: "Solstice Group",
        position: "Sales Performance Coach",
        salary: "$80k - $100k/yr",
        experience: "1-3 years experience",
        status: "FULL-TIME",
        postedTime: "Posted 1 day ago.",
      },
    ],
  },
  {
    title: "Matched",
    count: 3,
    applications: [
      {
        company: "Bravo Travel Technologies",
        position: "Sales Strategy Analyst",
        salary: "$85k - $110k/yr",
        experience: "< 1-3 years experience",
        status: "95% MATCHED",
        postedTime: "Posted 1 day ago.",
      },
      {
        company: "Quantum Loop Enterprises",
        position: "Business Development Manager",
        salary: "$100k - $130k/yr",
        experience: "< 1-3 years experience",
        status: "98% MATCHED",
        postedTime: "Posted 1 day ago.",
      },
      {
        company: "Celestial Innovations Ltd",
        position: "Client Relationship Manager",
        salary: "$95k - $125k/yr",
        experience: "< 1-3 years experience",
        status: "96% MATCHED",
        postedTime: "Posted 1 day ago.",
      },
    ],
  },
  {
    title: "Offers Received",
    count: 1,
    applications: [
      {
        company: "Versatile Digital Group",
        position: "Final Sales Consultant",
        salary: "$110k - $140k/yr",
        experience: "< 1-3 years experience",
        status: "FULL-TIME",
        postedTime: "Review offer",
      },
    ],
  },
  {
    title: "Interviews",
    count: 1,
    applications: [
      {
        company: "Innoble Sales Representative",
        position: "Innoble Sales Representative",
        salary: "$90k - $120k/yr",
        experience: "< 1-3 years experience",
        status: "FULL-TIME",
        postedTime: "Upcoming interview",
      },
    ],
  },
  {
    title: "Offer Accepted",
    count: 0,
    applications: [],
  },
];

const ApplicationCardComponent: React.FC<{
  application: Application;
  isNew?: boolean;
}> = ({ application, isNew = false }) => (
  <motion.div
    layout
    initial={isNew ? { opacity: 0, y: -60, scale: 0.95 } : false}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{
      layout: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.8,
      },
      opacity: { duration: 0.4, ease: "easeOut" },
      y: {
        type: "spring",
        stiffness: 350,
        damping: 28,
        mass: 0.6,
      },
      scale: { duration: 0.35, ease: [0.34, 1.56, 0.64, 1] },
    }}
    className="relative z-10"
  >
    <Card className="w-[199px] rounded-[5px] border-[0.5px] border-solid border-neutral-300 bg-white p-[7.7px]">
      <CardContent className="flex flex-col items-start gap-[5px] p-0">
        {/* Company & Posted Date Row */}
        <div className="flex w-full items-center justify-between">
          <p className="font-['Inter',Helvetica] text-[6.4px] leading-[1.2] font-normal tracking-[0.13px] text-neutral-700">
            {application.company}
          </p>
          <p className="font-['Inter',Helvetica] text-[6.4px] leading-[1.2] font-normal tracking-[0.13px] text-neutral-700">
            {application.postedTime}
          </p>
        </div>

        {/* Job Title */}
        <p className="w-full truncate font-['Inter',Helvetica] text-[10.3px] leading-normal font-semibold tracking-[0.13px] text-neutral-900">
          {application.position}
        </p>

        {/* Salary & Experience */}
        <div className="flex items-center gap-1 font-['Inter',Helvetica] text-[7.7px] leading-[1.2] font-normal tracking-[0.13px] text-neutral-700">
          <span>{application.salary}</span>
          <span>•</span>
          <span>{application.experience}</span>
        </div>

        {/* Status Pill */}
        {application.status && (
          <div
            className={`rounded-full px-[5px] py-[2.5px] font-['Inter',Helvetica] text-[7.7px] leading-[1.2] font-normal tracking-[0.2px] ${
              application.status.includes("MATCHED")
                ? "text-success bg-[rgba(39,174,96,0.1)]"
                : "text-client bg-[rgba(0,167,248,0.08)]"
            }`}
          >
            {application.status}
          </div>
        )}

        {/* Activity Row */}
        <div className="flex w-full items-center justify-between py-[2.5px]">
          <p className="font-['Inter',Helvetica] text-[7.7px] leading-[1.2] font-normal tracking-[0.13px] text-neutral-900">
            Activity Title
          </p>
          <button className="bg-client flex size-[10.3px] cursor-pointer items-center justify-center rounded-full">
            <svg
              width="6"
              height="6"
              viewBox="0 0 6 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 1.5L4 3L2 4.5"
                stroke="white"
                strokeWidth="0.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const ApplicationCard = React.memo(ApplicationCardComponent);

// Build a flat list of all cards with their column index for global sequencing
const getAllCardsSequence = () => {
  const sequence: {
    columnIndex: number;
    cardIndex: number;
    application: Application;
  }[] = [];

  // Interleave cards from different columns for a more dynamic effect
  const maxCards = Math.max(
    ...kanbanData.map((col) => col.applications.length)
  );

  for (let cardIdx = 0; cardIdx < maxCards; cardIdx++) {
    for (let colIdx = 0; colIdx < kanbanData.length; colIdx++) {
      const application = kanbanData[colIdx].applications[cardIdx];
      if (application) {
        sequence.push({ columnIndex: colIdx, cardIndex: cardIdx, application });
      }
    }
  }

  return sequence;
};

const cardSequence = getAllCardsSequence();

// Component to handle staggered card reveal for a column
const KanbanColumnCardsComponent: React.FC<{
  applications: Application[];
  columnIndex: number;
  revealedCards: Set<string>;
  newestCardKey: string | null;
}> = ({ applications, columnIndex, revealedCards, newestCardKey }) => {
  // Get visible applications and reverse so newest appears at top
  const visibleApplications = applications
    .map((app, idx) => ({ application: app, originalIdx: idx }))
    .filter(({ originalIdx }) =>
      revealedCards.has(`${columnIndex}-${originalIdx}`)
    )
    .reverse(); // Reverse so newest card is at top

  return (
    <div className="kanban-column-bg relative z-0 flex h-[496.71px] w-[209px] flex-col items-start gap-[5px] overflow-hidden rounded-[5px] p-[5px]">
      <AnimatePresence mode="popLayout">
        {visibleApplications.map(({ application, originalIdx }) => {
          const cardKey = `${columnIndex}-${originalIdx}`;
          return (
            <ApplicationCard
              key={`${application.company}-${originalIdx}`}
              application={application}
              isNew={cardKey === newestCardKey}
            />
          );
        })}
      </AnimatePresence>
      {applications.length === 0 && <div className="size-full" />}
    </div>
  );
};

const KanbanColumnCards = React.memo(KanbanColumnCardsComponent);

const TalentKanbanDashboardComponent: React.FC = () => {
  const [revealedCards, setRevealedCards] = useState<Set<string>>(new Set());
  const [newestCardKey, setNewestCardKey] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const revealIndexRef = useRef(0);

  useEffect(() => {
    if (!isInView) return;

    // Reveal cards one by one globally
    const interval = setInterval(() => {
      if (revealIndexRef.current >= cardSequence.length) {
        clearInterval(interval);
        setNewestCardKey(null);
        return;
      }

      const card = cardSequence[revealIndexRef.current];
      const cardKey = `${card.columnIndex}-${card.cardIndex}`;

      setNewestCardKey(cardKey);
      setRevealedCards((prev) => new Set([...prev, cardKey]));

      revealIndexRef.current += 1;
    }, 280); // 280ms between each card for organic pacing

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none relative mb-[-349.80px] flex w-full flex-col items-start gap-4 overflow-hidden rounded-[5.24px] px-5 pt-[15px] pb-10"
    >
      {/* Header Tabs */}
      <div className="relative flex w-full items-center gap-6 self-stretch border-b border-neutral-200">
        <button className="relative cursor-pointer pb-3 font-['Inter',Helvetica] text-[9.2px] leading-[11.0px] font-medium tracking-[0.13px] text-neutral-700 hover:text-neutral-900">
          Browse Jobs
        </button>
        <button className="relative cursor-pointer pb-3 font-['Inter',Helvetica] text-[9.2px] leading-[11.0px] font-medium tracking-[0.13px] text-neutral-900">
          My Applications
          <div className="bg-talent absolute right-0 bottom-0 left-0 h-[2px]" />
        </button>
        <button className="relative cursor-pointer pb-3 font-['Inter',Helvetica] text-[9.2px] leading-[11.0px] font-medium tracking-[0.13px] text-neutral-700 hover:text-neutral-900">
          Saved Jobs
        </button>
      </div>

      {/* Back to Jobs Button */}
      <button className="flex cursor-pointer items-center gap-1 font-['Inter',Helvetica] text-[7.9px] leading-[9.4px] font-normal tracking-[0.13px] text-neutral-700 hover:text-neutral-900">
        <svg
          width="9"
          height="9"
          viewBox="0 0 9 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 7L3 4.5L5 2"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        back to jobs
      </button>

      {/* Kanban Columns */}
      <div className="scrollbar-hide relative flex w-full items-start gap-[10.48px] self-stretch overflow-x-auto">
        {kanbanData.map((column, colIndex) => (
          <div
            key={colIndex}
            className="relative flex flex-col items-start gap-[5px]"
          >
            <div className="relative flex h-[15.71px] items-center gap-[5.24px]">
              <span className="font-['Inter',Helvetica] text-[9.2px] leading-[11.0px] font-semibold tracking-[0.13px] text-neutral-900">
                {column.title}
              </span>
              <span className="flex h-[15.71px] min-w-[15.71px] items-center justify-center rounded-full bg-neutral-100 px-[5.24px] font-['Inter',Helvetica] text-[7.9px] leading-[9.4px] font-medium text-neutral-600">
                {column.count}
              </span>
            </div>
            <KanbanColumnCards
              applications={column.applications}
              columnIndex={colIndex}
              revealedCards={revealedCards}
              newestCardKey={newestCardKey}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export const TalentKanbanDashboard = React.memo(TalentKanbanDashboardComponent);
TalentKanbanDashboard.displayName = "TalentKanbanDashboard";
