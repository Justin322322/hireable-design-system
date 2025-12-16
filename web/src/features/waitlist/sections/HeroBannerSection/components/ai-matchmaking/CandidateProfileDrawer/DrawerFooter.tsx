import { Trash2 } from "lucide-react";
import React from "react";

export const DrawerFooter: React.FC = () => (
  <div className="flex h-[61.77px] items-center gap-[7.72px] border-t border-neutral-300 bg-white p-[15.44px]">
    <button className="border-error flex h-[30.89px] w-[118.18px] items-center justify-center gap-[2.57px] rounded-[5.15px] border-[0.64px] bg-white">
      <Trash2 className="text-error size-[12.87px]" />
      <span className="text-error font-['Inter'] text-[10.3px] font-semibold">
        Drop candidate
      </span>
    </button>
    <div className="flex flex-1 gap-[5.15px]">
      <button className="flex h-[30.89px] flex-1 items-center justify-center gap-[5.15px] rounded-[5.15px] border-[0.64px] border-neutral-300">
        <span className="font-['Inter'] text-[10.3px] font-semibold text-neutral-900">
          Invite interview
        </span>
      </button>
      <button className="bg-client flex h-[30.89px] flex-1 items-center justify-center gap-[5.15px] rounded-[5.15px]">
        <span className="font-['Inter'] text-[10.3px] font-semibold text-white">
          Send offer
        </span>
      </button>
    </div>
  </div>
);
