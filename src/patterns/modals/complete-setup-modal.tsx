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
  DialogDescription,
  DialogTrigger,
  Icon,
  Separator,
} from "@/components/ui";
import { cn } from "@/lib/utils";

/**
 * CompleteSetupModal - Modal showing setup requirements before publishing a job post
 */

export interface SetupItem {
  id: string;
  title: string;
  description: string;
  completed?: boolean;
}

export interface CompleteSetupModalProps {
  /** Setup items to display */
  items?: SetupItem[];
  /** Info message to display */
  infoMessage?: string;
  /** Submit handler */
  onSubmit?: () => void;
  /** Cancel/Later handler */
  onCancel?: () => void;
  /** Item click handler */
  onItemClick?: (itemId: string) => void;
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

const defaultItems: SetupItem[] = [
  { id: "company-profile", title: "Add company profile", description: "Upload your logo" },
  { id: "company-description", title: "Add company description", description: "Tell talents about your company" },
  { id: "billing", title: "Set up billing method", description: "Add payment details required to start tests" },
  { id: "post-job", title: "Post a job", description: "Create your first job post" },
];

export const CompleteSetupModal = React.forwardRef<HTMLDivElement, CompleteSetupModalProps>(
  (
    {
      items = defaultItems,
      infoMessage = "Your job post has been saved as a draft. You can publish it once you complete the setup.",
      onSubmit,
      onCancel,
      onItemClick,
      open: controlledOpen,
      onOpenChange: controlledOnOpenChange,
      showTrigger = true,
      trigger,
      className,
    },
    ref
  ) => {
    const [internalOpen, setInternalOpen] = useState(false);

    const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
    const setIsOpen = controlledOnOpenChange || setInternalOpen;

    const handleSubmit = () => {
      onSubmit?.();
      setIsOpen(false);
    };

    const handleCancel = () => {
      onCancel?.();
      setIsOpen(false);
    };

    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        {showTrigger && !trigger && (
          <DialogTrigger asChild>
            <Button className="bg-client hover:bg-client-hover text-white">
              Complete Setup
            </Button>
          </DialogTrigger>
        )}
        
        {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}

        <DialogContent 
          ref={ref}
          hideDefaultClose
          className={cn(
            "flex flex-col items-start w-[--modal-width-lg] max-w-[--modal-width-lg] p-6 gap-0 rounded-[16px] bg-white shadow-[--modal-shadow]",
            className
          )}
        >
          {/* Header */}
          <DialogHeader className="flex flex-row justify-between items-start self-stretch p-0 gap-[21px]">
            <div className="flex flex-col items-start gap-1 flex-1">
              <DialogTitle className="font-semibold text-xl leading-[150%] tracking-[0.4px] text-foreground">
                Complete Your Setup
              </DialogTitle>
              <DialogDescription className="text-sm font-normal leading-[120%] tracking-[0.2px] text-muted-foreground">
                You need to complete the following requirements before publishing your job post.
              </DialogDescription>
            </div>
            
            <DialogClose asChild>
              <button 
                className="flex items-center justify-center hover:bg-neutral-100 transition-colors p-1 w-8 h-8 bg-white rounded-full border-none cursor-pointer"
                aria-label="Close modal"
              >
                <Icon icon="close" size={24} className="text-neutral-850" />
              </button>
            </DialogClose>
          </DialogHeader>

          {/* Divider */}
          <Separator className="my-6 w-full h-px bg-border" />

          {/* Setup Cards Container */}
          <div className="flex flex-col items-start gap-4 w-full">
            {items.map((item) => (
              <SetupCard
                key={item.id}
                title={item.title}
                description={item.description}
                onClick={() => onItemClick?.(item.id)}
              />
            ))}

            {/* Info Note */}
            {infoMessage && (
              <div className="flex flex-row items-start p-4 gap-4 w-full bg-fieldnote-info-bg rounded-lg">
                <Icon icon="info" size={20} className="text-fieldnote-info-text shrink-0" />
                <span className="text-sm font-normal leading-[120%] tracking-[0.2px] text-fieldnote-info-text flex-1">
                  {infoMessage}
                </span>
              </div>
            )}
          </div>

          {/* Divider */}
          <Separator className="my-6 w-full h-px bg-border" />

          {/* CTA Buttons */}
          <div className="flex flex-row items-center gap-2 w-full">
            <Button 
              variant="client"
              onClick={handleSubmit}
              className="h-11 px-5"
            >
              Complete Setup
            </Button>
            <Button 
              variant="outline"
              onClick={handleCancel}
              className="h-11 px-5"
            >
              Later
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }
);

CompleteSetupModal.displayName = "CompleteSetupModal";

/* Setup Card - Internal component */
interface SetupCardProps {
  title: string;
  description: string;
  onClick?: () => void;
}

const SetupCard: React.FC<SetupCardProps> = ({ title, description, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="box-border flex flex-row items-center p-4 gap-6 w-full bg-white border border-neutral-300 rounded-lg cursor-pointer hover:border-neutral-400 transition-colors text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-client focus-visible:ring-offset-2"
    >
      <div className="flex flex-col items-start gap-2 flex-1">
        <span className="font-semibold text-base leading-[150%] tracking-[0.2px] text-foreground">
          {title}
        </span>
        <span className="text-sm font-normal leading-[120%] tracking-[0.2px] text-muted-foreground">
          {description}
        </span>
      </div>
      <Icon icon="chevron_right" size={24} className="text-neutral-850 shrink-0" />
    </button>
  );
};

/**
 * CompleteSetupModalPreview - Static preview for documentation
 */
export interface CompleteSetupModalPreviewProps {
  className?: string;
}

export const CompleteSetupModalPreview: React.FC<CompleteSetupModalPreviewProps> = ({
  className,
}) => {
  return (
    <div 
      className={cn(
        "flex flex-col items-start bg-white p-6 w-[--modal-width-lg] shadow-[--modal-shadow] rounded-[16px]",
        className
      )}
    >
      {/* Header */}
      <div className="flex flex-row justify-between items-start self-stretch p-0 gap-[21px]">
        <div className="flex flex-col items-start gap-1 flex-1">
          <span className="font-semibold text-xl leading-[150%] tracking-[0.4px] text-neutral-850">
            Complete Your Setup
          </span>
          <span className="text-sm font-normal leading-[120%] tracking-[0.2px] text-muted-foreground">
            You need to complete the following requirements before publishing your job post.
          </span>
        </div>
        
        <button 
          className="flex items-center justify-center p-1 w-8 h-8 bg-white rounded-full border-none cursor-default"
          disabled
        >
          <Icon icon="close" size={24} className="text-neutral-850" />
        </button>
      </div>

      {/* Divider */}
      <Separator className="my-6 w-full h-px bg-border" />

      {/* Setup Cards */}
      <div className="flex flex-col items-start gap-4 w-full">
        {defaultItems.map((item) => (
          <div
            key={item.id}
            className="box-border flex flex-row items-center p-4 gap-6 w-full bg-white border border-neutral-300 rounded-lg"
          >
            <div className="flex flex-col items-start gap-2 flex-1">
              <span className="font-semibold text-base leading-[150%] tracking-[0.2px] text-foreground">
                {item.title}
              </span>
              <span className="text-sm font-normal leading-[120%] tracking-[0.2px] text-muted-foreground">
                {item.description}
              </span>
            </div>
            <Icon icon="chevron_right" size={24} className="text-neutral-850 shrink-0" />
          </div>
        ))}

        {/* Info Note */}
        <div className="flex flex-row items-start p-4 gap-4 w-full bg-fieldnote-info-bg rounded-lg">
          <Icon icon="info" size={20} className="text-fieldnote-info-text shrink-0" />
          <span className="text-sm font-normal leading-[120%] tracking-[0.2px] text-fieldnote-info-text flex-1">
            Your job post has been saved as a draft. You can publish it once you complete the setup.
          </span>
        </div>
      </div>

      {/* Divider */}
      <Separator className="my-6 w-full h-px bg-border" />

      {/* CTA Buttons */}
      <div className="flex flex-row items-center gap-2 w-full">
        <Button variant="client" className="h-11 px-5">
          Complete Setup
        </Button>
        <Button variant="outline" className="h-11 px-5">
          Later
        </Button>
      </div>
    </div>
  );
};

CompleteSetupModalPreview.displayName = "CompleteSetupModalPreview";
