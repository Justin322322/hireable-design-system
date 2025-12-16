"use client";

import { cn } from "@/lib/utils";
import * as React from "react";

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("w-full", className)} {...props} />
));
ChartContainer.displayName = "ChartContainer";

export { ChartContainer };
