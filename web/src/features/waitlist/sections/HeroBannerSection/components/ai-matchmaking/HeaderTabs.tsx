import React from "react";

// Memoized header tabs component to prevent re-renders
export const HeaderTabs = React.memo(() => (
  <div className="relative flex w-full items-center gap-6 self-stretch border-b border-neutral-200">
    <button className="relative cursor-pointer pb-3 font-['Inter',Helvetica] text-[9.2px] leading-[11.0px] font-medium tracking-[0.13px] text-neutral-700 hover:text-neutral-900">
      Overview
    </button>
    <button className="relative cursor-pointer pb-3 font-['Inter',Helvetica] text-[9.2px] leading-[11.0px] font-medium tracking-[0.13px] text-neutral-900">
      Candidates
      <div className="bg-client absolute right-0 bottom-0 left-0 h-[2px]" />
    </button>
    <button className="relative cursor-pointer pb-3 font-['Inter',Helvetica] text-[9.2px] leading-[11.0px] font-medium tracking-[0.13px] text-neutral-700 hover:text-neutral-900">
      Dropped
    </button>
  </div>
));

HeaderTabs.displayName = "HeaderTabs";
