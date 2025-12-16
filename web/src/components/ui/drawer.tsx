"use client";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  width?: string;
  showBackdrop?: boolean;
}

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  children,
  width = "664px",
  showBackdrop = true,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {showBackdrop && (
        <motion.div
          key="drawer-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="pointer-events-auto absolute inset-0 z-40 bg-black/20 backdrop-blur-sm"
          onClick={onClose}
        />
      )}
      <motion.div
        key="drawer-panel"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        style={{ width }}
        className="pointer-events-auto absolute top-0 right-0 z-50 flex h-full flex-col bg-white shadow-2xl"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
