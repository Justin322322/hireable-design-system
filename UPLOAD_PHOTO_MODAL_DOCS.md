# Upload Photo Modal - Design System Component

A reusable upload modal with drag-and-drop support, loading states, and success animations.

## Dependencies

```bash
npm install framer-motion @radix-ui/react-dialog clsx tailwind-merge
```

## Required Files

Your team needs these files from the design system:

1. `src/patterns/modals/upload-photo-modal.tsx` - Main component
2. `src/components/ui/dialog.tsx` - Dialog primitives
3. `src/components/ui/button.tsx` - Button component
4. `src/components/ui/icon.tsx` - Icon component
5. `src/components/ui/separator.tsx` - Separator component
6. `src/components/ui/spinner.tsx` - Loading spinner
7. `src/lib/utils.ts` - Utility functions (cn helper)

---

## Component Code

### upload-photo-modal.tsx

```tsx
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
  type IconName,
} from "@/components/ui";
import { cn } from "@/lib/utils";

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

    const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
    const setIsOpen = controlledOnOpenChange || setInternalOpen;

    const handleOpenChange = (newOpen: boolean) => {
      if (!newOpen) {
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
          await new Promise((resolve) => setTimeout(resolve, uploadDuration));
        }
        
        setUploadState("complete");
        
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
          hideDefaultClose
          className={cn(
            "flex flex-col items-start w-[592px] max-w-[592px] h-[440px] p-6 gap-0 rounded-[16px] bg-white shadow-[0px_2px_8px_rgba(0,0,0,0.1)]",
            className
          )}
        >
          <DialogHeader className="flex flex-row justify-between items-center self-stretch p-0 gap-[21px] h-8">
            <div className="w-8 h-8" />
            
            <DialogTitle className="font-semibold text-xl leading-[150%] tracking-[0.4px] text-[#212121] text-center">
              {title}
            </DialogTitle>
            
            <DialogClose asChild>
              <button 
                className="flex items-center justify-center hover:bg-neutral-100 transition-colors p-1 w-8 h-8 bg-white rounded-full border-none cursor-pointer"
                aria-label="Close upload modal"
              >
                <Icon icon="close" size={24} className="text-[#212121]" />
              </button>
            </DialogClose>
          </DialogHeader>

          <Separator className="my-6 w-full h-px bg-[#C3C3C3]" />

          {uploadState === "idle" && (
            <div 
              className={cn(
                "flex flex-col justify-center items-center self-stretch border border-dashed bg-[#F2F2F2] rounded-lg transition-colors box-border p-0 gap-6 w-[544px] h-[312px]",
                isDragOver ? 'border-[#00A7F8] bg-[#00A7F8]/5' : 'border-[#C3C3C3]'
              )}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <Icon icon="download_2" size={40} weight={600} className="text-[#212121]" />
              
              <div className="flex flex-col items-center gap-2">
                <span className="font-secondary font-semibold text-xl leading-[150%] tracking-[0.4px] text-[#212121]">
                  Drop your image here to upload
                </span>
                <p className="m-0 font-secondary font-normal text-sm leading-[120%] text-center tracking-[0.2px] text-[#616161]">
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
                className="bg-[#00A7F8] hover:bg-[#0090D5] text-white rounded-lg h-11 px-5"
                onClick={() => document.getElementById('file-upload')?.click()}
              >
                Upload
              </Button>
            </div>
          )}

          {uploadState === "uploading" && (
            <div className="box-border flex flex-col justify-center items-center gap-6 w-[544px] h-[312px] rounded-lg">
              <Spinner size={40} className="text-[#00A7F8]" />
              <span className="font-semibold text-xl leading-[150%] tracking-[0.4px] text-[#212121]">
                Uploading image
              </span>
            </div>
          )}

          {uploadState === "complete" && (
            <div className="box-border flex flex-col justify-center items-center w-[544px] h-[312px] gap-6">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-success/10 shrink-0">
                <motion.svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <motion.path
                    d="M5 13L9 17L19 7"
                    stroke="var(--color-success)" 
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                </motion.svg>
              </div>
              <span className="font-semibold text-xl leading-[150%] tracking-[0.4px] text-[#212121] text-center">
                Upload complete!
              </span>
            </div>
          )}
        </DialogContent>
      </Dialog>
    );
  }
);

UploadPhotoModal.displayName = "UploadPhotoModal";
```

---

## Usage Examples

### Basic Usage

```tsx
import { UploadPhotoModal } from "@/patterns/modals/upload-photo-modal";

function ProfilePage() {
  const handleUpload = async (file?: File) => {
    if (file) {
      const formData = new FormData();
      formData.append("photo", file);
      await fetch("/api/upload", { method: "POST", body: formData });
    }
  };

  return <UploadPhotoModal onUpload={handleUpload} />;
}
```

### Controlled State

```tsx
import { useState } from "react";
import { UploadPhotoModal } from "@/patterns/modals/upload-photo-modal";

function ProfilePage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Change Photo</button>
      <UploadPhotoModal
        open={isOpen}
        onOpenChange={setIsOpen}
        showTrigger={false}
        onUpload={async (file) => {
          // Handle upload
        }}
      />
    </>
  );
}
```

### Custom Trigger

```tsx
<UploadPhotoModal
  trigger={<Avatar className="cursor-pointer hover:opacity-80" />}
  title="Update your avatar"
  onUpload={handleUpload}
/>
```

### Custom Configuration

```tsx
<UploadPhotoModal
  title="Upload company logo"
  acceptedFormats=".PNG or .SVG"
  recommendedSize="512 × 512"
  triggerText="Upload Logo"
  triggerIcon="image"
  uploadDuration={3000}
  successDuration={2000}
  onUpload={handleLogoUpload}
/>
```

---

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `"Upload profile photo"` | Modal title |
| `acceptedFormats` | `string` | `".JPG, .PNG, or .GIF"` | Accepted formats text |
| `recommendedSize` | `string` | `"300 × 300"` | Recommended size text |
| `onUpload` | `(file?: File) => Promise<void> \| void` | - | Upload handler |
| `open` | `boolean` | - | Controlled open state |
| `onOpenChange` | `(open: boolean) => void` | - | Open state handler |
| `triggerText` | `string` | `"Upload Photo"` | Trigger button text |
| `triggerIcon` | `IconName` | `"upload"` | Trigger button icon |
| `showTrigger` | `boolean` | `true` | Show default trigger |
| `trigger` | `ReactNode` | - | Custom trigger element |
| `uploadDuration` | `number` | `2000` | Upload simulation duration (ms) |
| `successDuration` | `number` | `1500` | Success message duration (ms) |
| `className` | `string` | - | Custom class name |

---

## CSS Variables Required

```css
:root {
  --color-success: #22c55e;
  --color-client: #00A7F8;
  --color-client-hover: #0090D5;
}
```

---

## States

The modal has three visual states:

1. **Idle** - Drag-and-drop zone with upload button
2. **Uploading** - Spinner with "Uploading image" text
3. **Complete** - Animated checkmark with "Upload complete!" text

The modal auto-closes after showing the success state.
