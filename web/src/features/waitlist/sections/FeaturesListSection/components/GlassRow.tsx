import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

interface GlassRowProps {
  className?: string;
  contentClassName?: string;
  children: React.ReactNode;
}

export const GlassRow = ({
  className,
  contentClassName,
  children,
}: GlassRowProps): React.ReactElement => (
  <motion.div layout className="w-full">
    <motion.div layout className={cn("feature-capsule w-full", className)}>
      <motion.div
        layout
        className={cn("flex w-full items-center gap-2", contentClassName)}
      >
        {children}
      </motion.div>
    </motion.div>
  </motion.div>
);
