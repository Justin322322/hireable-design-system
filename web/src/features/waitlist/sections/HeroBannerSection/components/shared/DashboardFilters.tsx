import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { Search } from "lucide-react";
import React from "react";

const DashboardFiltersComponent: React.FC = () => {
  return (
    <div className="relative flex w-full items-start justify-between self-stretch">
      <div className="flex h-[28.81px] w-[251.18px] items-center gap-[5.24px] rounded-[5.24px] border border-[#C3C3C3] bg-white px-[10.48px] py-[7.86px]">
        <Search className="size-[10.48px] text-neutral-400" />
        <input
          type="text"
          placeholder="Search trials"
          className="flex-1 bg-transparent font-['Inter',Helvetica] text-[9.17px] leading-[120%] font-normal tracking-[0.131px] text-neutral-700 outline-none placeholder:text-neutral-400"
        />
      </div>

      <div className="relative inline-flex items-center gap-[5.24px]">
        <div>
          <Select defaultValue="all-status">
            <SelectTrigger className="h-auto w-fit min-w-[100px] rounded-[3px] border-[0.65px] border-solid border-neutral-200 bg-white px-[10.48px] py-[5.24px] font-['Inter',Helvetica] text-[9.17px] leading-[120%] font-normal tracking-[0.131px] text-neutral-700 shadow-none focus-visible:ring-0">
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-status" className="text-[9.2px]">
                All Status
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Select defaultValue="all-progress">
            <SelectTrigger className="h-auto w-fit min-w-[100px] rounded-[3px] border-[0.65px] border-solid border-neutral-200 bg-white px-[10.48px] py-[5.24px] font-['Inter',Helvetica] text-[9.17px] leading-[120%] font-normal tracking-[0.131px] text-neutral-700 shadow-none focus-visible:ring-0">
              <SelectValue placeholder="All Progress" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-progress" className="text-[9.2px]">
                All Progress
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export const DashboardFilters = React.memo(DashboardFiltersComponent);
DashboardFilters.displayName = "DashboardFilters";
