import { ChevronLeft, ExternalLink } from "lucide-react";
import React from "react";

interface DrawerHeaderProps {
  onClose: () => void;
}

export const DrawerHeader: React.FC<DrawerHeaderProps> = ({ onClose }) => (
  <div className="flex h-[43.76px] items-center justify-between border-b border-neutral-300 px-[15.44px] py-[10.3px]">
    <div className="flex items-center gap-[5.15px]">
      <button
        onClick={onClose}
        className="flex h-[23.16px] w-[52.31px] items-center gap-[5.15px]"
      >
        <div className="flex size-[23.16px] items-center justify-center rounded-[64.35px] border-[0.64px] border-neutral-300">
          <ChevronLeft className="size-[10.3px] text-neutral-900" />
        </div>
        <span className="font-['Inter'] text-[10.3px] font-normal tracking-[0.13px] text-neutral-900">
          back
        </span>
      </button>
    </div>

    <button className="flex items-center gap-[5.15px] rounded-[2.57px] px-2 py-[2.57px] hover:bg-neutral-100">
      <span className="font-['Inter'] text-[10.3px] font-semibold tracking-[0.13px] text-neutral-900">
        Open profile in a new tab
      </span>
      <ExternalLink className="size-[12.87px] text-neutral-900" />
    </button>
  </div>
);
