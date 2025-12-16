import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Card,
  CardContent,
} from "@/components/ui";
import Image from "next/image";
import React from "react";

interface JobListing {
  company: string;
  position: string;
  logo: string;
  salary: string;
  benefits: string;
  status?: string;
  postedTime?: string;
}

interface KanbanColumn {
  title: string;
  count: number;
  jobs: JobListing[];
}

const kanbanData: KanbanColumn[] = [
  {
    title: "Available Jobs",
    count: 5,
    jobs: [
      {
        company: "Smith Boutique Corp",
        position: "Regional Sales Director",
        logo: "/images/roles/analyst.svg",
        salary: "$110k - $140k/yr",
        benefits: "Health + Equipment",
        status: "FULL BENEFITS",
        postedTime: "Posted 1 day ago",
      },
      {
        company: "NowTech Industries",
        position: "Account Executive",
        logo: "/images/roles/developer.svg",
        salary: "$90k - $120k/yr",
        benefits: "Health + Internet",
        status: "FULL BENEFITS",
        postedTime: "Posted 1 day ago",
      },
      {
        company: "Quantum Loop Enterprises",
        position: "Sales Operations Specialist",
        logo: "/images/roles/marketers.svg",
        salary: "$75k - $95k/yr",
        benefits: "Health + Mental",
        status: "FULL BENEFITS",
        postedTime: "Posted 1 day ago",
      },
      {
        company: "Ethereal Dynamics Corp",
        position: "Sales Enablement Coordinator",
        logo: "/images/roles/designers.svg",
        salary: "$65k - $85k/yr",
        benefits: "Health + Equipment",
        status: "PARTIAL",
        postedTime: "Posted 1 day ago",
      },
      {
        company: "Solstice Group",
        position: "Sales Performance Coach",
        logo: "/images/roles/writer.svg",
        salary: "$80k - $100k/yr",
        benefits: "Health + Internet",
        status: "FULL BENEFITS",
        postedTime: "Posted 1 day ago",
      },
    ],
  },
  {
    title: "Benefits Matched",
    count: 3,
    jobs: [
      {
        company: "Bravo Travel Technologies",
        position: "Sales Strategy Analyst",
        logo: "/images/roles/va.svg",
        salary: "$85k - $110k/yr",
        benefits: "All Benefits Included",
        status: "95% MATCHED",
        postedTime: "Posted 1 day ago",
      },
      {
        company: "Quantum Loop Enterprises",
        position: "Business Development Manager",
        logo: "/images/roles/marketers.svg",
        salary: "$100k - $130k/yr",
        benefits: "All Benefits Included",
        status: "98% MATCHED",
        postedTime: "Posted 1 day ago",
      },
      {
        company: "Celestial Innovations Ltd",
        position: "Client Relationship Manager",
        logo: "/images/roles/analyst.svg",
        salary: "$95k - $125k/yr",
        benefits: "All Benefits Included",
        status: "96% MATCHED",
        postedTime: "Posted 1 day ago",
      },
    ],
  },
  {
    title: "Benefits Active",
    count: 1,
    jobs: [
      {
        company: "Versatile Digital Group",
        position: "Final Sales Consultant",
        logo: "/images/roles/developer.svg",
        salary: "$110k - $140k/yr",
        benefits: "$160/mo in benefits",
        status: "ENROLLED",
        postedTime: "Benefits active",
      },
    ],
  },
  {
    title: "Pending Enrollment",
    count: 1,
    jobs: [
      {
        company: "Innoble Sales Representative",
        position: "Innoble Sales Representative",
        logo: "/images/roles/designers.svg",
        salary: "$90k - $120k/yr",
        benefits: "Health + Equipment",
        status: "PENDING",
        postedTime: "Enrollment pending",
      },
    ],
  },
  {
    title: "Completed",
    count: 0,
    jobs: [],
  },
];

const JobCardComponent: React.FC<{ job: JobListing }> = ({ job }) => (
  <Card className="h-[90px] w-[199px] rounded-[4px] border-[0.5px] border-solid border-neutral-300 bg-white">
    <CardContent className="flex flex-col items-start gap-[6px] p-[8px]">
      <div className="relative flex w-full items-start justify-between self-stretch">
        <div className="relative flex h-[26.19px] flex-1 grow items-center gap-[5.24px]">
          <Avatar className="size-[26.19px] rounded-[4px]">
            <AvatarImage src={job.logo} alt={job.company} />
            <AvatarFallback>{job.company.charAt(0)}</AvatarFallback>
          </Avatar>

          <div className="relative flex flex-1 grow flex-col items-start gap-[2.62px]">
            <div className="relative mt-[-0.65px] w-fit font-['Inter',Helvetica] text-[9.2px] leading-[11.0px] font-semibold tracking-[0.13px] whitespace-nowrap text-neutral-900">
              {job.company}
            </div>
            <div className="relative self-stretch font-['Inter',Helvetica] text-[7.9px] leading-[9.4px] font-normal tracking-[0.13px] text-neutral-700">
              {job.position}
            </div>
          </div>
        </div>

        <button className="flex size-4 cursor-pointer items-center justify-center text-neutral-300 hover:text-neutral-700">
          <Image
            src="/icons/icon-components-3.svg"
            alt="Menu"
            width={13}
            height={13}
          />
        </button>
      </div>

      <div className="relative flex w-full items-center justify-between gap-2 self-stretch">
        <div className="flex items-center gap-[3.93px] font-['Inter',Helvetica] text-[7.9px] leading-[9.4px] font-normal tracking-[0.13px] text-neutral-700">
          <span>{job.salary}</span>
          <span>•</span>
          <span>{job.benefits}</span>
        </div>
        {job.status && (
          <span
            className={`${
              job.status.includes("MATCHED")
                ? "status-badge-matched"
                : job.status === "ENROLLED"
                  ? "status-badge-client"
                  : job.status === "PENDING"
                    ? "status-badge-warning"
                    : "status-badge-talent"
            }`}
          >
            {job.status}
          </span>
        )}
      </div>

      <div className="relative flex w-full items-center justify-between self-stretch">
        <div className="font-['Inter',Helvetica] text-[7.9px] leading-[9.4px] font-normal tracking-[0.13px] text-neutral-400">
          {job.postedTime}
        </div>
        <button className="flex size-4 cursor-pointer items-center justify-center rounded-full bg-neutral-100">
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 2L5 4L3 6"
              stroke="#9e9e9e"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </CardContent>
  </Card>
);

const JobCard = React.memo(JobCardComponent);
JobCard.displayName = "JobCard";

const KanbanColumnCardsComponent: React.FC<{ jobs: JobListing[] }> = ({
  jobs,
}) => (
  <div className="kanban-column-bg relative z-0 flex h-[496.71px] w-[209px] flex-col items-start gap-[5px] overflow-hidden rounded-[5px] p-[5px]">
    {jobs.map((job, idx) => (
      <JobCard key={`${job.company}-${idx}`} job={job} />
    ))}
    {jobs.length === 0 && <div className="size-full" />}
  </div>
);

const KanbanColumnCards = React.memo(KanbanColumnCardsComponent);
KanbanColumnCards.displayName = "KanbanColumnCards";

const WorkerBenefitsDashboardComponent: React.FC = () => {
  return (
    <div className="pointer-events-none relative mb-[-349.80px] flex w-full flex-col items-start gap-6 overflow-hidden rounded-[5.24px] px-5 pt-0 pb-10">
      {/* Header Tabs */}
      <div className="relative flex w-full items-center gap-6 self-stretch border-b border-neutral-200">
        <button className="relative cursor-pointer pb-3 font-['Inter',Helvetica] text-[9.2px] leading-[11.0px] font-medium tracking-[0.13px] text-neutral-700 hover:text-neutral-900">
          Browse Jobs
        </button>
        <button className="relative cursor-pointer pb-3 font-['Inter',Helvetica] text-[9.2px] leading-[11.0px] font-medium tracking-[0.13px] text-neutral-900">
          Benefits Tracker
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
              <span className="count-badge">{column.count}</span>
            </div>
            <KanbanColumnCards jobs={column.jobs} />
          </div>
        ))}
      </div>
    </div>
  );
};

export const WorkerBenefitsDashboard = React.memo(
  WorkerBenefitsDashboardComponent
);
WorkerBenefitsDashboard.displayName = "WorkerBenefitsDashboard";
