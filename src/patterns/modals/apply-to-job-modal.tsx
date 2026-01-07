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
  Textarea,
} from "@/components/ui";
import { cn } from "@/lib/utils";
import Image from "next/image";

/**
 * ApplyToJobModal - Modal for applying to a job with trial objectives
 * 
 * @example
 * ```tsx
 * <ApplyToJobModal
 *   onSubmit={(data) => console.log('Applied:', data)}
 * />
 * ```
 */

export interface TrialObjective {
  id: string;
  title: string;
  type: "Default" | "Automatic" | "Manual";
  description?: string;
  placeholder?: string;
}

export interface ApplyToJobData {
  jobId: string;
  responses: Record<string, string>;
}

export interface ApplyToJobModalProps {
  /** Submit handler */
  onSubmit?: (data: ApplyToJobData) => void;
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
  /** Job details */
  job?: {
    id: string;
    title: string;
    type: string;
    duration: string;
    salary: string;
    icon?: string;
  };
  /** Trial objectives */
  objectives?: TrialObjective[];
}

export const ApplyToJobModal = React.forwardRef<HTMLDivElement, ApplyToJobModalProps>(
  (
    {
      onSubmit,
      onCancel,
      open: controlledOpen,
      onOpenChange: controlledOnOpenChange,
      showTrigger = true,
      trigger,
      className,
      job = {
        id: "1",
        title: "Sales Manager",
        type: "Test",
        duration: "30 Days",
        salary: "$ 1,600 /month",
        icon: "/icons/nairobi.svg"
      },
      objectives = [
        { 
          id: "1", 
          title: "Improve Follow-Up & Tracking", 
          type: "Default",
          placeholder: "Discuss your approach, suggest modifications, or propose alternative metrics..."
        },
        { 
          id: "2", 
          title: "Improve Follow-Up & Tracking", 
          type: "Automatic",
          placeholder: "Discuss your approach, suggest modifications, or propose alternative metrics..."
        },
        { 
          id: "3", 
          title: "Improve Follow-Up & Tracking", 
          type: "Manual",
          placeholder: "Discuss your approach, suggest modifications, or propose alternative metrics..."
        }
      ],
    },
    ref
  ) => {
    const [internalOpen, setInternalOpen] = useState(false);
    const [responses, setResponses] = useState<Record<string, string>>({});

    const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
    const setIsOpen = controlledOnOpenChange || setInternalOpen;

    const handleOpenChange = (newOpen: boolean) => {
      if (!newOpen) {
        setResponses({});
      }
      setIsOpen(newOpen);
    };

    const handleSubmit = () => {
      onSubmit?.({ jobId: job.id, responses });
      handleOpenChange(false);
    };

    const handleCancel = () => {
      onCancel?.();
      handleOpenChange(false);
    };

    const handleResponseChange = (id: string, value: string) => {
      setResponses(prev => ({ ...prev, [id]: value }));
    };

    return (
      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        {showTrigger && !trigger && (
          <DialogTrigger asChild>
            <Button className="bg-button-primary-default hover:bg-button-primary-hover text-button-primary-foreground">
              Apply to Job
            </Button>
          </DialogTrigger>
        )}
        
        {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}

        <DialogContent 
          ref={ref}
          hideDefaultClose
          className={cn(
            "flex flex-col items-start w-[672px] max-w-[672px] p-6 gap-0 rounded-[16px] bg-background shadow-[0px_2px_8px_rgba(0,0,0,0.1)]",
            className
          )}
        >
          {/* Header */}
          <DialogHeader className="flex flex-row justify-between items-center self-stretch p-0 h-8">
            <DialogTitle className="font-semibold text-[20px] leading-[150%] tracking-[0.4px] text-foreground font-['Inter']">
              Apply to Job
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
            
            {/* Active Test Card */}
            <div className="box-border flex flex-row items-center p-4 gap-2 w-full h-[72px] bg-background border border-border-strong rounded-[8px]">
              {job.icon ? (
                <Image 
                  src={job.icon} 
                  alt="Job Icon" 
                  width={40} 
                  height={40} 
                  className="rounded-full object-contain" 
                />
              ) : (
                <div className="flex items-center justify-center w-10 h-10 bg-avatar-job-bg rounded-full">
                  <Icon icon="work" size={24} className="text-white" />
                </div>
              )}
              
              <div className="flex flex-col items-start gap-1 flex-1 h-[35px]">
                <span className="font-semibold text-[14px] leading-[120%] tracking-[0.2px] text-button-tertiary-foreground">
                  {job.title}
                </span>
                <div className="flex flex-row items-center gap-2 h-[14px]">
                  <div className="flex flex-row items-center gap-1">
                    <span className="font-normal text-[12px] leading-[120%] tracking-[0.2px] text-muted-foreground">{job.type}</span>
                    <span className="font-normal text-[12px] leading-[120%] tracking-[0.2px] text-muted-foreground">•</span>
                  </div>
                  <div className="flex flex-row items-center gap-1">
                    <span className="font-normal text-[12px] leading-[120%] tracking-[0.2px] text-muted-foreground">{job.duration}</span>
                    <span className="font-normal text-[12px] leading-[120%] tracking-[0.2px] text-muted-foreground">•</span>
                  </div>
                  <span className="font-normal text-[12px] leading-[120%] tracking-[0.2px] text-muted-foreground">{job.salary}</span>
                </div>
              </div>

              <div className="flex items-center justify-center w-8 h-8 bg-background rounded-full">
                <Icon icon="open_in_new" size={24} className="text-button-tertiary-foreground" />
              </div>
            </div>

            {/* Trial Objectives Section */}
            <div className="flex flex-col items-start gap-4 w-full">
              <h3 className="font-semibold text-[14px] leading-[120%] tracking-[0.2px] text-foreground">
                Trial Objectives You&apos;ll Need to Achieve
              </h3>

              <div className="flex flex-col gap-4 w-full">
                {objectives.map((objective) => (
                  <div key={objective.id} className="box-border flex flex-col items-start p-4 gap-3 w-full bg-background border border-border-strong rounded-[8px]">
                    <div className="flex flex-row justify-between items-center w-full h-[22px]">
                      <span className="font-semibold text-[14px] leading-[120%] tracking-[0.2px] text-foreground">
                        {objective.title}
                      </span>
                      <div className="box-border flex flex-col justify-center items-center px-2 py-1 gap-2.5 h-[22px] bg-badge-subtle-bg border-[0.5px] border-badge-subtle-border rounded-full">
                         <span className="font-normal text-[12px] leading-[120%] tracking-[0.2px] text-muted-foreground">
                           {objective.type}
                         </span>
                      </div>
                    </div>
                    
                    <Textarea 
                      placeholder={objective.placeholder}
                      value={responses[objective.id] || ""}
                      onChange={(e) => handleResponseChange(objective.id, e.target.value)}
                      className="w-full min-h-[72px] bg-background border border-border-strong rounded-[8px] p-4 text-[14px] leading-[120%] tracking-[0.2px] text-muted-foreground resize-none focus-visible:ring-0 focus-visible:border-button-primary-default"
                    />
                  </div>
                ))}
              </div>
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

ApplyToJobModal.displayName = "ApplyToJobModal";

/**
 * ApplyToJobModalPreview - Static preview component for documentation
 */
export interface ApplyToJobModalPreviewProps {
  /** Custom class name */
  className?: string;
}

export const ApplyToJobModalPreview: React.FC<ApplyToJobModalPreviewProps> = ({
  className,
}) => {
  const job = {
    title: "Sales Manager",
    type: "Test",
    duration: "30 Days",
    salary: "$ 1,600 /month",
    icon: "/icons/nairobi.svg"
  };

  const objectives: TrialObjective[] = [
    { 
      id: "1", 
      title: "Improve Follow-Up & Tracking", 
      type: "Default",
      placeholder: "Discuss your approach, suggest modifications, or propose alternative metrics..."
    },
    { 
      id: "2", 
      title: "Improve Follow-Up & Tracking", 
      type: "Automatic",
      placeholder: "Discuss your approach, suggest modifications, or propose alternative metrics..."
    },
    { 
      id: "3", 
      title: "Improve Follow-Up & Tracking", 
      type: "Manual",
      placeholder: "Discuss your approach, suggest modifications, or propose alternative metrics..."
    }
  ];

  return (
    <div 
      className={cn(
        "flex flex-col items-start bg-background p-6 w-[672px] shadow-[0px_2px_8px_rgba(0,0,0,0.1)] rounded-[16px]",
        className
      )}
    >
      {/* Header */}
      <div className="flex flex-row justify-between items-center self-stretch p-0 h-8 w-full">
        <span className="font-semibold text-[20px] leading-[150%] tracking-[0.4px] text-foreground font-['Inter']">
          Apply to Job
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
        
        {/* Active Test Card */}
        <div className="box-border flex flex-row items-center p-4 gap-2 w-full h-[72px] bg-background border border-border-strong rounded-[8px]">
          {job.icon ? (
            <Image 
              src={job.icon} 
              alt="Job Icon" 
              width={40} 
              height={40} 
              className="rounded-full object-contain" 
            />
          ) : (
            <div className="flex items-center justify-center w-10 h-10 bg-avatar-job-bg rounded-full">
              <Icon icon="work" size={24} className="text-white" />
            </div>
          )}
          
          <div className="flex flex-col items-start gap-1 flex-1 h-[35px]">
            <span className="font-semibold text-[14px] leading-[120%] tracking-[0.2px] text-button-tertiary-foreground">
              {job.title}
            </span>
            <div className="flex flex-row items-center gap-2 h-[14px]">
              <div className="flex flex-row items-center gap-1">
                <span className="font-normal text-[12px] leading-[120%] tracking-[0.2px] text-muted-foreground">{job.type}</span>
                <span className="font-normal text-[12px] leading-[120%] tracking-[0.2px] text-muted-foreground">•</span>
              </div>
              <div className="flex flex-row items-center gap-1">
                <span className="font-normal text-[12px] leading-[120%] tracking-[0.2px] text-muted-foreground">{job.duration}</span>
                <span className="font-normal text-[12px] leading-[120%] tracking-[0.2px] text-muted-foreground">•</span>
              </div>
              <span className="font-normal text-[12px] leading-[120%] tracking-[0.2px] text-muted-foreground">{job.salary}</span>
            </div>
          </div>

          <div className="flex items-center justify-center w-8 h-8 bg-background rounded-full">
            <Icon icon="open_in_new" size={24} className="text-button-tertiary-foreground" />
          </div>
        </div>

        {/* Trial Objectives Section */}
        <div className="flex flex-col items-start gap-4 w-full">
          <h3 className="font-semibold text-[14px] leading-[120%] tracking-[0.2px] text-foreground">
            Trial Objectives You&apos;ll Need to Achieve
          </h3>

          <div className="flex flex-col gap-4 w-full">
            {objectives.map((objective) => (
              <div key={objective.id} className="box-border flex flex-col items-start p-4 gap-3 w-full bg-background border border-border-strong rounded-[8px]">
                <div className="flex flex-row justify-between items-center w-full h-[22px]">
                  <span className="font-semibold text-[14px] leading-[120%] tracking-[0.2px] text-foreground">
                    {objective.title}
                  </span>
                  <div className="box-border flex flex-col justify-center items-center px-2 py-1 gap-2.5 h-[22px] bg-badge-subtle-bg border-[0.5px] border-badge-subtle-border rounded-full">
                      <span className="font-normal text-[12px] leading-[120%] tracking-[0.2px] text-muted-foreground">
                        {objective.type}
                      </span>
                  </div>
                </div>
                
                <div className="w-full min-h-[72px] bg-background border border-border-strong rounded-[8px] p-4 text-[14px] leading-[120%] tracking-[0.2px] text-muted-foreground">
                  {objective.placeholder}
                </div>
              </div>
            ))}
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

ApplyToJobModalPreview.displayName = "ApplyToJobModalPreview";
