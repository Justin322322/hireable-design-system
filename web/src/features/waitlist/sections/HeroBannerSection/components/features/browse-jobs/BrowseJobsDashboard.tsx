import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import React, { useState } from "react";
import { ScrollContainer } from "../../shared/ScrollContainer";
import { FiltersSidebar } from "./FiltersSidebar";
import { JobCard } from "./JobCard";
import { jobsData } from "./constants";

export const BrowseJobsDashboard: React.FC = () => {
  const [jobs, setJobs] = useState(jobsData);

  const toggleJobExpand = (index: number) => {
    setJobs((prev) =>
      prev.map((job, i) =>
        i === index ? { ...job, expanded: !job.expanded } : job
      )
    );
  };

  return (
    <ScrollContainer className="pointer-events-auto relative mb-[-349.80px] h-[602px] w-full bg-white">
      <div className="flex w-full flex-col items-start gap-[15px] px-5 pt-[15px] pb-10">
        {/* Header Tabs */}
        <div className="flex w-full items-start gap-[15px] border-b border-neutral-300">
          <button className="border-client relative flex h-[23px] flex-col items-center justify-center border-b-[1.3px] px-0 py-[5px]">
            <span className="font-nunito-sans text-[9px] leading-[1.2] font-semibold tracking-[0.2px] text-neutral-900">
              Browse Jobs
            </span>
          </button>
          <button className="flex h-[23px] flex-col items-center justify-center px-0 py-[5px]">
            <span className="font-nunito-sans text-[9px] leading-[1.2] font-semibold tracking-[0.2px] text-neutral-700">
              My Applications
            </span>
          </button>
          <button className="flex h-[23px] flex-col items-center justify-center px-0 py-[5px]">
            <span className="font-nunito-sans text-[9px] leading-[1.2] font-semibold tracking-[0.2px] text-neutral-700">
              Saved Jobs
            </span>
          </button>
        </div>

        {/* Main Content */}
        <div className="flex w-full items-start gap-[20px]">
          {/* Jobs List Column */}
          <div className="flex flex-1 flex-col gap-[10px]">
            {/* Search Bar */}
            <div className="flex h-[28px] w-full items-center gap-[5px] rounded-[5px] border border-neutral-300 bg-white px-[10px] py-[8px]">
              <Search className="size-[16px] text-neutral-900" />
              <span className="font-inter flex-1 text-[9px] leading-[1.2] font-normal tracking-[0.2px] text-neutral-700">
                Search
              </span>
            </div>

            {/* Jobs List */}
            <div className="flex flex-col gap-[10px] pb-[15px]">
              {jobs.map((job, index) => (
                <JobCard
                  key={index}
                  job={job}
                  index={index}
                  onToggleExpand={() => toggleJobExpand(index)}
                  showPulsingButton={index === 0}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center gap-[5px]">
              <button className="flex size-[21px] items-center justify-center rounded-[4px] border border-neutral-200 bg-white">
                <ChevronLeft className="size-[15px] text-neutral-900" />
              </button>
              <button className="border-client flex size-[21px] items-center justify-center rounded-[4px] border bg-white">
                <span className="font-nunito-sans text-[14px] leading-[20px] font-medium text-neutral-900">
                  1
                </span>
              </button>
              <button className="flex size-[21px] items-center justify-center rounded-[4px] border border-neutral-200 bg-white">
                <span className="font-nunito-sans text-[9px] leading-[13px] font-medium text-neutral-900">
                  2
                </span>
              </button>
              <button className="flex size-[21px] items-center justify-center rounded-[4px] border border-neutral-200 bg-white">
                <span className="font-nunito-sans text-[9px] leading-[13px] font-medium text-neutral-900">
                  ...
                </span>
              </button>
              <button className="flex size-[21px] items-center justify-center rounded-[4px] border border-neutral-200 bg-white">
                <span className="font-nunito-sans text-[9px] leading-[13px] font-medium text-neutral-900">
                  9
                </span>
              </button>
              <button className="flex size-[21px] items-center justify-center rounded-[4px] border border-neutral-200 bg-white">
                <span className="font-nunito-sans text-[9px] leading-[13px] font-medium text-neutral-900">
                  10
                </span>
              </button>
              <button className="flex size-[21px] items-center justify-center rounded-[4px] border border-neutral-200 bg-white">
                <ChevronRight className="size-[15px] text-neutral-900" />
              </button>
            </div>
          </div>

          {/* Filters Sidebar */}
          <FiltersSidebar />
        </div>
      </div>
    </ScrollContainer>
  );
};
