import { ChevronDown, Info } from "lucide-react";
import { industries } from "./constants";

export const FiltersSidebar: React.FC = () => (
  <div className="flex w-[234px] flex-col gap-[10px]">
    <h3 className="font-inter text-[13px] leading-normal font-semibold tracking-[0.4px] text-neutral-900">
      Filter
    </h3>

    <div className="flex flex-col gap-[15px]">
      {/* Experience Level */}
      <div className="flex flex-col gap-[10px]">
        <div className="flex items-center gap-[5px]">
          <span className="font-inter text-[9px] leading-[1.2] font-semibold tracking-[0.2px] text-neutral-700">
            Experience Level
          </span>
          <Info className="size-[7px] text-neutral-700" />
        </div>
        <div className="flex flex-col gap-[5px]">
          {[
            "Beginner (0–2 years)",
            "Intermediate (2–5 years)",
            "Advanced (5–8 years)",
            "Expert (8+ years)",
          ].map((level, idx) => (
            <label key={idx} className="flex items-center gap-[5px]">
              <input
                type="checkbox"
                className="size-[10px] rounded-[3.2px] border border-neutral-300 bg-white"
              />
              <span className="font-inter text-[9px] leading-[1.2] font-normal tracking-[0.2px] text-neutral-900">
                {level}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Industry */}
      <div className="flex flex-col gap-[10px]">
        <span className="font-inter text-[9px] leading-[1.2] font-semibold tracking-[0.2px] text-neutral-700">
          Industry
        </span>
        <div className="flex flex-col gap-[5px]">
          {industries.map((industry, idx) => (
            <label key={idx} className="flex items-center gap-[5px]">
              <input
                type="checkbox"
                className="size-[10px] rounded-[3.2px] border border-neutral-300 bg-white"
              />
              <span className="font-inter text-[9px] leading-[1.2] font-normal tracking-[0.2px] text-neutral-900">
                {industry}
              </span>
            </label>
          ))}

          <button className="flex items-center gap-[2.5px]">
            <span className="font-nunito-sans text-client text-[9px] leading-[0.96] font-semibold">
              Show more
            </span>
            <ChevronDown className="text-client size-[11px]" />
          </button>
        </div>
      </div>

      {/* Salary Range */}
      <div className="flex flex-col gap-[10px]">
        <span className="font-inter text-[9px] leading-[1.2] font-semibold tracking-[0.2px] text-neutral-700">
          Salary Range
        </span>
        <div className="flex items-center gap-[5px]">
          <div className="flex h-[28px] flex-1 items-center gap-[5px] rounded-[5px] border border-neutral-300 bg-white px-[10px] py-[8px]">
            <span className="font-inter text-[7px] font-normal text-neutral-900">
              $
            </span>
            <span className="font-inter flex-1 text-[9px] leading-[1.2] font-normal tracking-[0.2px] text-neutral-400">
              Min
            </span>
          </div>
          <div className="flex h-[28px] flex-1 items-center gap-[5px] rounded-[5px] border border-neutral-300 bg-white px-[10px] py-[8px]">
            <span className="font-inter text-[7px] font-normal text-neutral-900">
              $
            </span>
            <span className="font-inter flex-1 text-[9px] leading-[1.2] font-normal tracking-[0.2px] text-neutral-400">
              Max
            </span>
          </div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col gap-[5px]">
        <button className="bg-client flex h-[44px] w-full items-center justify-center rounded-[5px] px-[13px] py-[5px]">
          <span className="font-inter text-[9px] leading-[1.2] font-semibold tracking-[0.2px] text-white">
            Apply filters
          </span>
        </button>
        <button className="flex h-[44px] w-full items-center justify-center rounded-[5px] border border-neutral-300 px-[13px] py-[5px]">
          <span className="font-inter text-[9px] leading-[0.96] font-semibold text-neutral-900">
            Reset filters
          </span>
        </button>
      </div>
    </div>
  </div>
);
