"use client";

import { Toaster as Sonner, toast } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      position="top-center"
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            "w-full max-w-[400px] flex items-center gap-3 p-4 rounded-xl bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.08)] border border-neutral-200 font-['Inter']",
          title: "text-sm font-semibold text-neutral-900",
          description: "text-sm text-neutral-600 mt-0.5",
          actionButton:
            "bg-client hover:bg-client-hover text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors",
          cancelButton:
            "bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors",
          closeButton:
            "absolute top-3 right-3 text-neutral-400 hover:text-neutral-600 transition-colors",
          success: "!bg-[#f0fdf4] !border-[#86efac]",
          error: "!bg-[#fef2f2] !border-[#fca5a5]",
          warning: "!bg-[#fffbeb] !border-[#fcd34d]",
          info: "!bg-[#f0f9ff] !border-[#7dd3fc]",
        },
      }}
      icons={{
        success: (
          <div className="bg-success flex size-8 shrink-0 items-center justify-center rounded-full">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.5 8L6.5 11L12.5 5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        ),
        error: (
          <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#EF4444]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 4L12 12M12 4L4 12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        ),
        warning: (
          <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#F59E0B]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 3L8 9"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="8" cy="12" r="1" fill="white" />
            </svg>
          </div>
        ),
        info: (
          <div className="bg-client flex size-8 shrink-0 items-center justify-center rounded-full">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8" cy="4" r="1" fill="white" />
              <path
                d="M8 7L8 12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        ),
      }}
      {...props}
    />
  );
};

export { toast, Toaster };
