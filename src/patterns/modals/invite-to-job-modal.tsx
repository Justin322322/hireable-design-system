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
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
} from "@/components/ui";
import { cn } from "@/lib/utils";

/**
 * InviteToJobModal - Modal for inviting talent to a job post
 * 
 * @example
 * ```tsx
 * <InviteToJobModal
 *   onSubmit={(data) => console.log('Invited:', data)}
 * />
 * ```
 */

export interface InviteToJobData {
  jobId: string;
  message: string;
}

export interface InviteToJobModalProps {
  /** Submit handler */
  onSubmit?: (data: InviteToJobData) => void;
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
  /** List of active jobs */
  jobs?: Array<{ id: string; title: string }>;
}

export const InviteToJobModal = React.forwardRef<HTMLDivElement, InviteToJobModalProps>(
  (
    {
      onSubmit,
      onCancel,
      open: controlledOpen,
      onOpenChange: controlledOnOpenChange,
      showTrigger = true,
      trigger,
      className,
      jobs = [
        { id: "1", title: "Senior Product Designer" },
        { id: "2", title: "Frontend Developer" },
        { id: "3", title: "Product Manager" },
      ],
    },
    ref
  ) => {
    const [internalOpen, setInternalOpen] = useState(false);
    const [jobId, setJobId] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
    const setIsOpen = controlledOnOpenChange || setInternalOpen;

    const handleOpenChange = (newOpen: boolean) => {
      if (!newOpen) {
        setJobId("");
        setMessage("");
      }
      setIsOpen(newOpen);
    };

    const handleSubmit = () => {
      onSubmit?.({ jobId, message });
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
            <Button className="bg-button-primary-default hover:bg-button-primary-hover text-button-primary-foreground">
              Invite to Job
            </Button>
          </DialogTrigger>
        )}
        
        {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}

        <DialogContent 
          ref={ref}
          hideDefaultClose
          className={cn(
            "flex flex-col items-start w-[592px] max-w-[592px] p-6 gap-0 rounded-[16px] bg-background shadow-[0px_2px_8px_rgba(0,0,0,0.1)]",
            className
          )}
        >
          {/* Header */}
          <DialogHeader className="flex flex-row justify-between items-center self-stretch p-0 h-8">
            <DialogTitle className="font-semibold text-[20px] leading-[150%] tracking-[0.4px] text-foreground font-['Inter']">
              Invite to Job
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
            <div className="w-full h-px bg-border-strong" />
          </div>

          {/* Content */}
          <div className="flex flex-col w-full gap-6">
            {/* Job Selection */}
            <div className="space-y-2 text-left">
              <Label htmlFor="job-select" className="text-sm font-semibold leading-[120%] tracking-[0.2px] text-button-tertiary-foreground">
                Select Job Post
              </Label>
              <Select value={jobId} onValueChange={setJobId}>
                <SelectTrigger id="job-select" className="w-full text-muted-foreground h-[44px] bg-background border-border-strong rounded-[8px] px-4 py-3">
                  <SelectValue placeholder="Choose an active job post" />
                </SelectTrigger>
                <SelectContent>
                  {jobs.map((job) => (
                    <SelectItem key={job.id} value={job.id}>
                      {job.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Message */}
            <div className="space-y-2 text-left">
              <Label htmlFor="message" className="text-sm font-semibold leading-[120%] tracking-[0.2px] text-button-tertiary-foreground">
                Personalized Message <span className="font-normal text-muted-foreground">(Optional)</span>
              </Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write a short note to encourage talent to apply..."
                className="min-h-[155px] resize-none border-border-strong rounded-[8px] p-2 placeholder:text-muted-foreground"
                maxLength={500}
              />
            </div>
          </div>

          {/* Divider */}
          <div className="py-6 w-full">
            <div className="w-full h-px bg-border-strong" />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-row items-center gap-2 w-full">
            <Button 
              className="bg-button-primary-default hover:bg-button-primary-hover text-button-primary-foreground rounded-[8px] h-[44px] px-5 font-medium text-sm"
              onClick={handleSubmit}
            >
              Send Invitation
            </Button>
            <Button 
              variant="outline"
              onClick={handleCancel}
              className="h-[44px] px-5 border-border-strong text-button-tertiary-foreground font-medium text-sm hover:bg-surface-hover"
            >
              Cancel
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }
);

InviteToJobModal.displayName = "InviteToJobModal";

/**
 * InviteToJobModalPreview - Static preview component for documentation
 */
export interface InviteToJobModalPreviewProps {
  /** Custom class name */
  className?: string;
}

export const InviteToJobModalPreview: React.FC<InviteToJobModalPreviewProps> = ({
  className,
}) => {
  return (
    <div 
      className={cn(
        "flex flex-col items-start bg-background p-6 w-[592px] shadow-[0px_2px_8px_rgba(0,0,0,0.1)] rounded-[16px]",
        className
      )}
    >
      {/* Header */}
      <div className="flex flex-row justify-between items-center self-stretch p-0 h-8 w-full">
        <span className="font-semibold text-[20px] leading-[150%] tracking-[0.4px] text-foreground font-['Inter']">
          Invite to Job
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
        <div className="w-full h-px bg-border-strong" />
      </div>

      {/* Content */}
      <div className="flex flex-col w-full gap-6">
        {/* Job Selection */}
        <div className="space-y-2 text-left w-full">
          <Label className="text-sm font-semibold leading-[120%] tracking-[0.2px] text-button-tertiary-foreground">
            Select Job Post
          </Label>
          <div className={cn(
            "flex h-[44px] w-full items-center justify-between rounded-[8px] border border-border-strong bg-background px-4 py-3 text-sm text-muted-foreground",
          )}>
            <span>Choose an active job post</span>
            <Icon icon="expand_more" size={24} className="opacity-50" />
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col space-y-2 text-left w-full">
          <Label className="text-sm font-semibold leading-[120%] tracking-[0.2px] text-button-tertiary-foreground">
            Personalized Message <span className="font-normal text-muted-foreground">(Optional)</span>
          </Label>
          <div className="flex min-h-[155px] w-full rounded-[8px] border border-border-strong bg-background p-2 text-sm text-muted-foreground">
            Write a short note to encourage talent to apply...
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="py-6 w-full">
        <div className="w-full h-px bg-border-strong" />
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-row items-center gap-2 w-full">
        <Button className="bg-button-primary-default hover:bg-button-primary-hover text-button-primary-foreground rounded-[8px] h-[44px] px-5 font-medium text-sm">
          Send Invitation
        </Button>
        <Button variant="outline" className="h-[44px] px-5 border-border-strong text-button-tertiary-foreground font-medium text-sm hover:bg-surface-hover">
          Cancel
        </Button>
      </div>
    </div>
  );
};

InviteToJobModalPreview.displayName = "InviteToJobModalPreview";
