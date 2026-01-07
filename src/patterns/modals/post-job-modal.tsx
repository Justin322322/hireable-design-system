"use client";

import * as React from "react";
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Icon,
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui";
import { cn } from "@/lib/utils";

/**
 * PostJobModal - Modal for selecting job posting type
 * 
 * @example
 * ```tsx
 * <PostJobModal
 *   onSubmit={(type) => console.log('Selected:', type)}
 * />
 * ```
 */

export type JobPostType = "full-time" | "test-30-60-90";

export interface PostJobModalProps {
  /** Submit handler - receives selected job type */
  onSubmit?: (type: JobPostType) => void;
  /** Cancel handler */
  onCancel?: () => void;
  /** Controlled open state */
  open?: boolean;
  /** Open state change handler */
  onOpenChange?: (open: boolean) => void;
  /** Show trigger button */
  showTrigger?: boolean;
  /** Custom trigger element */
  trigger?: React.ReactNode;
  /** Custom class name */
  className?: string;
}

export const PostJobModal = React.forwardRef<HTMLDivElement, PostJobModalProps>(
  (
    {
      onSubmit,
      onCancel,
      open: controlledOpen,
      onOpenChange: controlledOnOpenChange,
      showTrigger = true,
      trigger,
      className,
    },
    ref
  ) => {
    const [internalOpen, setInternalOpen] = useState(false);
    const [selectedType, setSelectedType] = useState<JobPostType>("test-30-60-90");

    const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
    const setIsOpen = controlledOnOpenChange || setInternalOpen;

    const handleOpenChange = (newOpen: boolean) => {
      if (!newOpen) {
        setSelectedType("test-30-60-90");
      }
      setIsOpen(newOpen);
    };

    const handleSubmit = () => {
      onSubmit?.(selectedType);
      handleOpenChange(false);
    };

    const handleCancel = () => {
      onCancel?.();
      handleOpenChange(false);
    };

    return (
      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        {showTrigger && !trigger && (
          <DialogTrigger asChild>
            <Button className="bg-client hover:bg-client-hover text-white">
              <Icon icon="add" size={16} className="mr-2" />
              Post a Job
            </Button>
          </DialogTrigger>
        )}
        
        {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}

        <DialogContent 
          ref={ref}
          hideDefaultClose
          className={cn(
            "flex flex-col items-start w-[592px] max-w-[592px] p-6 gap-0 rounded-[16px] bg-white shadow-[0px_2px_8px_rgba(0,0,0,0.1)]",
            className
          )}
        >
          {/* Header */}
          <DialogHeader className="flex flex-row justify-between items-center self-stretch p-0 h-8">
            <DialogTitle className="font-semibold text-xl leading-[150%] tracking-[0.4px] text-foreground">
              Post a Job
            </DialogTitle>
            
            <DialogClose asChild>
              <button 
                className="flex items-center justify-center hover:bg-surface-hover transition-colors p-1 w-8 h-8 bg-background rounded-full border-none cursor-pointer"
                aria-label="Close modal"
              >
                <Icon icon="close" size={24} className="text-foreground" />
              </button>
            </DialogClose>
          </DialogHeader>

          {/* Divider */}
          <div className="py-6 w-full">
            <div className="w-full h-px bg-neutral-muted" />
          </div>

          {/* Radio Cards Container */}
          <RadioGroup 
            value={selectedType} 
            onValueChange={(value) => setSelectedType(value as JobPostType)}
            className="flex flex-col items-start gap-4 w-full"
          >
            {/* Full-time Option (Disabled) */}
            <label
              className={cn(
                "box-border flex flex-row items-start p-4 gap-6 w-full rounded-lg border transition-all text-left cursor-not-allowed",
                "border-neutral-muted"
              )}
            >
              <div className="flex flex-col items-start gap-1 flex-1">
                <span className="font-semibold text-sm leading-[120%] tracking-[0.2px] text-neutral-300">
                  Full-time (Coming Soon)
                </span>
                <span className="text-sm font-normal leading-[120%] tracking-[0.2px] text-neutral-300">
                  Hire for a long-term role with defined responsibilities, strong collaboration, and room for growth.
                </span>
              </div>
              <RadioGroupItem value="full-time" disabled className="mt-0.5" />
            </label>

            {/* Test 30-60-90 Option */}
            <label
              className={cn(
                "box-border flex flex-row items-start p-4 gap-6 w-full rounded-lg border transition-all text-left cursor-pointer",
                selectedType === "test-30-60-90"
                  ? "border-button-primary-default"
                  : "border-neutral-muted hover:border-button-primary-default/50"
              )}
            >
              <div className="flex flex-col items-start gap-1 flex-1">
                <span className="font-semibold text-sm leading-[120%] tracking-[0.2px] text-foreground">
                  Test (30-60-90 Day)
                </span>
                <span className="text-sm font-normal leading-[120%] tracking-[0.2px] text-muted-foreground">
                  Run a paid, short-term trial on real work to evaluate performance and fit before committing to a full-time hire.
                </span>
              </div>
              <RadioGroupItem value="test-30-60-90" className="mt-0.5" />
            </label>
          </RadioGroup>

          {/* Divider */}
          <div className="py-6 w-full">
            <div className="w-full h-px bg-neutral-muted" />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-row items-center gap-2 w-full">
            <Button 
              className="bg-button-primary-default hover:bg-button-primary-hover text-button-primary-foreground rounded-[8px] h-11 px-5"
              onClick={handleSubmit}
            >
              Create Job Post
            </Button>
            <Button 
              variant="outline"
              onClick={handleCancel}
              className="h-11 px-5"
            >
              Cancel
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }
);

PostJobModal.displayName = "PostJobModal";

/**
 * PostJobModalPreview - Static preview component for documentation
 */
export interface PostJobModalPreviewProps {
  /** Custom class name */
  className?: string;
}

export const PostJobModalPreview: React.FC<PostJobModalPreviewProps> = ({
  className,
}) => {
  return (
    <div 
      className={cn(
        "flex flex-col items-start bg-white p-6 w-[592px] shadow-[0px_2px_8px_rgba(0,0,0,0.1)] rounded-[16px]",
        className
      )}
    >
      {/* Header */}
      <div className="flex flex-row justify-between items-center self-stretch p-0 h-8 w-full">
        <span className="font-semibold text-[20px] leading-[150%] tracking-[0.4px] text-foreground font-['Inter']">
          Post a Job
        </span>
        
        <button 
          className="flex items-center justify-center p-1 w-8 h-8 bg-background rounded-full border-none cursor-default"
          aria-label="Close (non-functional in preview)"
          disabled
        >
          <Icon icon="close" size={24} className="text-foreground" />
        </button>
      </div>

      {/* Divider */}
      <div className="py-6 w-full">
        <div className="w-full h-px bg-neutral-muted" />
      </div>

      {/* Radio Cards Container */}
      <RadioGroup defaultValue="test-30-60-90" className="flex flex-col items-start gap-4 w-full">
        {/* Full-time Option (Disabled) */}
        <label className="box-border flex flex-row items-start p-4 gap-6 w-full rounded-lg border border-neutral-muted cursor-not-allowed">
          <div className="flex flex-col items-start gap-1 flex-1">
            <span className="font-semibold text-sm leading-[120%] tracking-[0.2px] text-neutral-300">
              Full-time (Coming Soon)
            </span>
            <span className="text-sm font-normal leading-[120%] tracking-[0.2px] text-neutral-300">
              Hire for a long-term role with defined responsibilities, strong collaboration, and room for growth.
            </span>
          </div>
          <RadioGroupItem value="full-time" disabled className="mt-0.5" />
        </label>

        {/* Test 30-60-90 Option (Selected) */}
        <label className="box-border flex flex-row items-start p-4 gap-6 w-full rounded-lg border border-button-primary-default cursor-pointer">
          <div className="flex flex-col items-start gap-1 flex-1">
            <span className="font-semibold text-sm leading-[120%] tracking-[0.2px] text-foreground">
              Test (30-60-90 Day)
            </span>
            <span className="text-sm font-normal leading-[120%] tracking-[0.2px] text-muted-foreground">
              Run a paid, short-term trial on real work to evaluate performance and fit before committing to a full-time hire.
            </span>
          </div>
          <RadioGroupItem value="test-30-60-90" className="mt-0.5" />
        </label>
      </RadioGroup>

      {/* Divider */}
      <div className="py-6 w-full">
        <div className="w-full h-px bg-neutral-muted" />
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-row items-center gap-2 w-full">
        <Button className="bg-button-primary-default hover:bg-button-primary-hover text-button-primary-foreground rounded-[8px] h-11 px-5">
          Create Job Post
        </Button>
        <Button variant="outline" className="h-11 px-5">
          Cancel
        </Button>
      </div>
    </div>
  );
};

PostJobModalPreview.displayName = "PostJobModalPreview";
