"use client";

import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Icon,
  Separator,
  Spinner,
} from "@/components/ui";
import type { IconName } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

/**
 * UploadPhotoModal - Reusable upload modal with drag-and-drop support
 * 
 * @example
 * ```tsx
 * <UploadPhotoModal
 *   onUpload={(file) => uploadToServer(file)}
 *   title="Upload profile photo"
 *   acceptedFormats=".JPG, .PNG, or .GIF"
 *   recommendedSize="300 × 300"
 * />
 * ```
 */

type UploadState = "idle" | "uploading" | "complete";

export interface UploadPhotoModalProps {
  /** Modal title */
  title?: string;
  /** Accepted file formats description */
  acceptedFormats?: string;
  /** Recommended image size */
  recommendedSize?: string;
  /** Upload handler - receives file and returns promise */
  onUpload?: (file?: File) => Promise<void> | void;
  /** Controlled open state */
  open?: boolean;
  /** Open state change handler */
  onOpenChange?: (open: boolean) => void;
  /** Trigger button text */
  triggerText?: string;
  /** Trigger button icon */
  triggerIcon?: IconName;
  /** Show trigger button */
  showTrigger?: boolean;
  /** Custom trigger element */
  trigger?: React.ReactNode;
  /** Upload duration in ms (for demo/testing) */
  uploadDuration?: number;
  /** Success message duration in ms */
  successDuration?: number;
  /** Custom class name */
  className?: string;
}

export const UploadPhotoModal = React.forwardRef<HTMLDivElement, UploadPhotoModalProps>(
  (
    {
      title = "Upload profile photo",
      acceptedFormats = ".JPG, .PNG, or .GIF",
      recommendedSize = "300 × 300",
      onUpload,
      open: controlledOpen,
      onOpenChange: controlledOnOpenChange,
      triggerText = "Upload Photo",
      triggerIcon = "upload",
      showTrigger = true,
      trigger,
      uploadDuration = 2000,
      successDuration = 1500,
      className,
    },
    ref
  ) => {
    const [internalOpen, setInternalOpen] = useState(false);
    const [uploadState, setUploadState] = useState<UploadState>("idle");
    const [isDragOver, setIsDragOver] = useState(false);

    // Use controlled or uncontrolled state
    const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
    const setIsOpen = controlledOnOpenChange || setInternalOpen;

    // Handle open state change and reset when closing
    const handleOpenChange = (newOpen: boolean) => {
      if (!newOpen) {
        // Reset states when modal closes
        setUploadState("idle");
        setIsDragOver(false);
      }
      setIsOpen(newOpen);
    };

    const handleUpload = async (file?: File) => {
      setUploadState("uploading");
      
      try {
        if (onUpload) {
          await onUpload(file);
        } else {
          // Simulate upload if no handler provided
          await new Promise((resolve) => setTimeout(resolve, uploadDuration));
        }
        
        setUploadState("complete");
        
        // Auto-close after showing success
        setTimeout(() => {
          handleOpenChange(false);
        }, successDuration);
      } catch (error) {
        console.error("Upload failed:", error);
        setUploadState("idle");
      }
    };

    const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(true);
    };

    const handleDragLeave = () => {
      setIsDragOver(false);
    };

    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);
      
      const files = e.dataTransfer.files;
      if (files.length > 0) {
        handleUpload(files[0]);
      }
    };

    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files && files.length > 0) {
        handleUpload(files[0]);
      }
    };

    return (
      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        {showTrigger && !trigger && (
          <DialogTrigger asChild>
            <Button className="bg-client hover:bg-client-hover text-white">
              <Icon icon={triggerIcon} size={16} className="mr-2" />
              {triggerText}
            </Button>
          </DialogTrigger>
        )}
        
        {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}

        <DialogContent 
          ref={ref}
          className={cn("max-w-[592px] p-6 gap-0 rounded-2xl [&>button]:hidden", className)}
        >
          {/* Header - matching Figma specs exactly */}
          <DialogHeader 
            className="flex flex-row justify-between items-center self-stretch"
            style={{ padding: '0px', gap: '21px', height: '32px' }}
          >
            {/* Invisible spacer to balance close button */}
            <div style={{ width: '32px', height: '32px' }} />
            
            {/* Modal Title - centered */}
            <DialogTitle className="font-semibold text-xl leading-[150%] tracking-[0.4px] text-foreground text-center">
              {title}
            </DialogTitle>
            
            {/* Close Button - 32x32px, border-radius 100px */}
            <DialogClose asChild>
              <button 
                className="flex items-center justify-center hover:bg-neutral-100 transition-colors"
                style={{
                  padding: '4px',
                  width: '32px',
                  height: '32px',
                  background: '#FFFFFF',
                  borderRadius: '100px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                <Icon icon="close" size={24} style={{ color: '#212121' }} />
              </button>
            </DialogClose>
          </DialogHeader>

          {/* Divider */}
          <Separator className="my-6 bg-[#C3C3C3]" />

          {/* Content based on state */}
          {uploadState === "idle" && (
            <div 
              className={cn(
                "flex flex-col justify-center items-center self-stretch border-2 border-dashed bg-neutral-100 rounded-lg transition-colors",
                isDragOver ? 'border-client bg-client/5' : 'border-neutral-300'
              )}
              style={{ boxSizing: 'border-box', gap: '24px', height: '312px' }}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className="flex items-center justify-center w-16 h-16">
                <Icon icon="download_2" size={40} weight={600} style={{ color: '#212121' }} />
              </div>
              
              <div className="flex flex-col items-center" style={{ gap: '8px' }}>
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: '20px',
                    lineHeight: '150%',
                    letterSpacing: '0.4px',
                    color: '#212121',
                  }}
                >
                  Drop your image here to upload
                </span>
                <p
                  style={{
                    margin: 0,
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '120%',
                    textAlign: 'center',
                    letterSpacing: '0.2px',
                    color: '#616161',
                  }}
                >
                  Works with any {acceptedFormats} file from the web<br />
                  Recommended size: {recommendedSize}
                </p>
              </div>

              <input
                type="file"
                id="file-upload"
                className="hidden"
                accept="image/*"
                onChange={handleFileInput}
              />
              <Button 
                variant="client" 
                onClick={() => document.getElementById('file-upload')?.click()}
              >
                Upload
              </Button>
            </div>
          )}

          {uploadState === "uploading" && (
            <div className="box-border flex flex-col justify-center items-center gap-6 w-full h-[312px] rounded-lg">
              <div className="flex items-center justify-center w-16 h-16">
                <Spinner size={40} />
              </div>
              
              <div className="flex flex-col items-center gap-2">
                <span className="font-semibold text-xl leading-[150%] tracking-[0.4px] text-foreground">
                  Uploading image
                </span>
              </div>
            </div>
          )}

          {uploadState === "complete" && (
            <div className="box-border flex flex-col justify-center items-center w-full h-[312px] gap-6">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-success/10 shrink-0">
                <motion.svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0"
                >
                  <motion.path
                    d="M5 13L9 17L19 7"
                    stroke="#22c55e" 
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                </motion.svg>
              </div>
              
              <div className="flex flex-col items-center">
                <span className="font-semibold text-xl leading-[150%] tracking-[0.4px] text-foreground text-center">
                  Upload complete!
                </span>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    );
  }
);

UploadPhotoModal.displayName = "UploadPhotoModal";

/**
 * UploadPhotoModalPreview - Static preview component for documentation
 * Shows the modal in a specific state without interactivity
 */
export interface UploadPhotoModalPreviewProps {
  /** Which state to display */
  state?: "default" | "uploading" | "complete";
  /** Modal title */
  title?: string;
  /** Accepted file formats description */
  acceptedFormats?: string;
  /** Recommended image size */
  recommendedSize?: string;
  /** Custom class name */
  className?: string;
}

export const UploadPhotoModalPreview: React.FC<UploadPhotoModalPreviewProps> = ({
  state = "default",
  title = "Upload profile photo",
  acceptedFormats = ".JPG, .PNG, or .GIF",
  recommendedSize = "300 × 300",
  className,
}) => {
  return (
    <div 
      className={cn("flex flex-col items-start bg-white", className)}
      style={{
        padding: '24px',
        width: '592px',
        height: '440px',
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '16px',
      }}
    >
      {/* Header */}
      <div 
        className="flex flex-row justify-between items-center self-stretch"
        style={{ padding: '0px', gap: '21px', height: '32px' }}
      >
        <div style={{ width: '32px', height: '32px' }} />
        
        <div 
          className="flex flex-row justify-center items-center"
          style={{ padding: '0px', gap: '10px', margin: '0 auto', height: '32px' }}
        >
          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '20px',
              lineHeight: '150%',
              letterSpacing: '0.4px',
              color: '#212121',
            }}
          >
            {title}
          </span>
        </div>
        
        <button 
          className="flex flex-row items-center justify-center hover:bg-neutral-100 transition-colors"
          style={{
            padding: '4px',
            gap: '10px',
            width: '32px',
            height: '32px',
            background: '#FFFFFF',
            borderRadius: '100px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <Icon icon="close" size={24} style={{ color: '#212121' }} />
        </button>
      </div>

      {/* Divider */}
      <Separator className="my-6 bg-[#C3C3C3]" />

      {/* Content based on state */}
      {state === "default" && (
        <div 
          className="flex flex-col justify-center items-center self-stretch border-2 border-dashed border-neutral-300 bg-neutral-100 rounded-lg"
          style={{ boxSizing: 'border-box', padding: '0px', gap: '24px', height: '312px' }}
        >
          <Icon icon="download_2" size={40} weight={600} style={{ color: '#212121' }} />
          
          <div className="flex flex-col items-center" style={{ padding: '0px', gap: '8px' }}>
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '20px',
                lineHeight: '150%',
                letterSpacing: '0.4px',
                color: '#212121',
              }}
            >
              Drop your image here to upload
            </span>
            
            <p
              style={{
                margin: 0,
                fontFamily: 'Inter, sans-serif',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '120%',
                textAlign: 'center',
                letterSpacing: '0.2px',
                color: '#616161',
              }}
            >
              Works with any {acceptedFormats} file from the web<br />
              Recommended size: {recommendedSize}
            </p>
          </div>

          <Button variant="client" size="default">
            Upload
          </Button>
        </div>
      )}

      {state === "uploading" && (
        <div 
          className="flex flex-col justify-center items-center self-stretch"
          style={{ boxSizing: 'border-box', padding: '0px', gap: '24px', height: '312px', borderRadius: '8px' }}
        >
          <Spinner size={40} />
          
          <div className="flex flex-col items-center" style={{ padding: '0px', gap: '8px' }}>
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '20px',
                lineHeight: '150%',
                letterSpacing: '0.4px',
                color: '#212121',
              }}
            >
              Uploading image
            </span>
          </div>
        </div>
      )}

      {state === "complete" && (
        <div className="box-border flex flex-col justify-center items-center self-stretch gap-6 h-[312px]">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-success/10 shrink-0">
            <motion.svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <motion.path
                d="M5 13L9 17L19 7"
                stroke="#22c55e" 
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </motion.svg>
          </div>
          
          <div className="flex flex-col items-center">
            <span className="font-semibold text-xl leading-[150%] tracking-[0.4px] text-foreground text-center">
              Upload complete!
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

UploadPhotoModalPreview.displayName = "UploadPhotoModalPreview";
