import { MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

export const CandidateHeader: React.FC = () => {
  return (
    <div className="flex items-center gap-[10.3px]">
      {/* Avatar */}
      <div className="relative size-[51.48px] overflow-hidden rounded-full border-[1.29px] border-white shadow-sm">
        <Image
          src="/images/Camille-Mercado.svg"
          alt="Camille"
          fill
          className="object-cover"
          onError={(e) => {
            // Fallback to initials if image fails
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
            target.parentElement!.style.backgroundColor = "#E5E7EB";
          }}
        />
        {/* Fallback specific visual if image is missing/broken */}
        <div className="absolute inset-0 -z-10 flex items-center justify-center bg-neutral-200 text-lg font-bold text-neutral-500">
          C
        </div>
      </div>

      <div className="flex flex-col gap-[2.57px]">
        <div className="flex items-center gap-[5.15px]">
          <h1 className="font-['Inter'] text-[15.44px] font-bold tracking-[-0.31px] text-neutral-900">
            Camille
          </h1>
          <div className="bg-neutral-150 flex h-[15.44px] items-center justify-center rounded-[2.57px] px-[5.15px]">
            <span className="font-['Inter'] text-[9px] font-medium tracking-[0.13px] text-neutral-600">
              ID: 94821
            </span>
          </div>
          <div className="flex h-[15.44px] items-center justify-center rounded-[2.57px] bg-green-50 px-[5.15px]">
            <span className="font-['Inter'] text-[9px] font-medium tracking-[0.13px] text-green-700">
              Active
            </span>
          </div>
        </div>

        <p className="font-['Inter'] text-[10.3px] font-medium tracking-[0.13px] text-neutral-600">
          Sales Operations Manager
        </p>

        <div className="flex items-center gap-[2.57px]">
          <MapPin className="size-[10.3px] text-neutral-400" />
          <span className="font-['Inter'] text-[10.3px] text-neutral-400">
            Manila, Philippines
          </span>
        </div>
      </div>
    </div>
  );
};

export const JobDetails: React.FC = () => {
  return (
    <div className="flex items-center justify-between rounded-[5.15px] border-[0.48px] border-neutral-300 bg-neutral-50 p-[7.72px]">
      <div className="flex items-center gap-[5.15px]">
        <span className="font-['Inter'] text-[9px] text-neutral-500">
          Applied for:
        </span>
        <span className="font-['Inter'] text-[9px] font-semibold text-neutral-900">
          Sales Prospecting Specialist
        </span>
      </div>
      <div className="flex items-center gap-[5.15px]">
        <span className="font-['Inter'] text-[9px] text-neutral-500">
          Applied:
        </span>
        <span className="font-['Inter'] text-[9px] font-semibold text-neutral-900">
          2 days ago
        </span>
      </div>
    </div>
  );
};
