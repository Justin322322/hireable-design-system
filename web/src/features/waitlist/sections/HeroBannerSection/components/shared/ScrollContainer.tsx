"use client";

import React from "react";

interface ScrollContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const ScrollContainer: React.FC<ScrollContainerProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`relative min-h-0 overflow-hidden ${className}`}>
      <div className="custom-scrollbar h-full min-h-0 w-full overflow-y-auto pr-2">
        {children}
      </div>
    </div>
  );
};
