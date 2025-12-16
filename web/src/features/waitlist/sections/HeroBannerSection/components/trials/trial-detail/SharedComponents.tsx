import { ChevronDown, ChevronRight, Search } from "lucide-react";
import { TYPOGRAPHY } from "./constants";

// Breadcrumb component
export const Breadcrumbs: React.FC = () => (
  <div className="flex h-[18px] items-center gap-[2.57px]">
    <div className="flex items-center justify-center py-[2.57px]">
      <span className={TYPOGRAPHY.breadcrumb}>Trials</span>
    </div>
    <ChevronRight className="size-[6.86px] text-neutral-700" />
    <div className="flex items-center justify-center py-[2.57px]">
      <span className={TYPOGRAPHY.breadcrumb}>Mikaela Santos</span>
    </div>
  </div>
);

// Search input component
export const SearchInput: React.FC = () => (
  <div className="flex h-[28.31px] w-[248.61px] items-center gap-[2.57px] rounded-[5.15px] border border-neutral-300 bg-white px-[7.72px]">
    <Search className="size-[15.44px] text-neutral-900" />
    <input
      type="text"
      placeholder="Search"
      className="flex-1 bg-transparent font-sans text-[10.3px] leading-[150%] tracking-[0.2px] text-neutral-900 outline-none placeholder:text-[rgba(60,60,67,0.6)]"
    />
  </div>
);

// Filter dropdown component
export const FilterDropdown: React.FC<{ label: string }> = ({ label }) => (
  <div className="flex h-[28.31px] w-[121.73px] items-center justify-between rounded-[5.15px] border border-neutral-300 bg-white px-[10.3px] py-[7.72px]">
    <span className="min-h-px min-w-px flex-1 font-sans text-[9px] leading-[120%] font-normal tracking-[0.2px] whitespace-pre-wrap text-neutral-900">
      {label}
    </span>
    <ChevronDown className="size-[15.44px] text-neutral-900" />
  </div>
);

// Success Advisor floating button
export const SuccessAdvisorButton: React.FC = () => (
  <div className="bg-client absolute right-[-0.49px] bottom-[-4.88px] flex h-[28.31px] items-center justify-center overflow-hidden rounded-full p-[5.15px] shadow-[0px_1.287px_5.148px_0px_rgba(0,0,0,0.1)]">
    <div className="relative size-[28px] overflow-hidden">
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 3.5C8.201 3.5 3.5 8.201 3.5 14C3.5 19.799 8.201 24.5 14 24.5C19.799 24.5 24.5 19.799 24.5 14C24.5 8.201 19.799 3.5 14 3.5ZM14 7C15.933 7 17.5 8.567 17.5 10.5C17.5 12.433 15.933 14 14 14C12.067 14 10.5 12.433 10.5 10.5C10.5 8.567 12.067 7 14 7ZM14 21.7C11.375 21.7 9.044 20.356 7.7 18.305C7.735 16.152 12.25 14.98 14 14.98C15.743 14.98 20.265 16.152 20.3 18.305C18.956 20.356 16.625 21.7 14 21.7Z"
          fill="white"
        />
      </svg>
    </div>
  </div>
);
