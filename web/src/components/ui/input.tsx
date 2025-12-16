import { cn } from "@/lib/utils";
import * as React from "react";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "focus-visible:ring-ring flex h-[44px] w-full rounded-[8px] border border-[#C3C3C3] bg-white px-4 py-3 text-sm font-normal text-neutral-900 shadow-none placeholder:text-neutral-700 focus-visible:ring-1 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
