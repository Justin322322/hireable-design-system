"use client";

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Icon,
  Separator,
  Spinner,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui";

import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

import { CodeBlock, ComponentPreview } from "@/components/docs";
import { VERSION } from "@/lib/version";

// ============================================================================
// UPLOAD MODAL STATIC PREVIEWS - Exact Figma Specs
// ============================================================================

/**
 * Upload Photo Modal - Default State (Property 1=Default)
 * Exact Figma specs: width 592px, height 440px, padding 24px, border-radius 16px
 */
const UploadPhotoDefaultPreview: React.FC = () => (
  <div 
    className="flex flex-col items-start bg-white"
    style={{
      padding: '24px',
      width: '592px',
      height: '440px',
      boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: '16px',
    }}
  >
    {/* Header - width 544px (592-48 padding), height 32px, justify-between, gap 21px */}
    <div 
      className="flex flex-row justify-between items-center self-stretch"
      style={{
        padding: '0px',
        gap: '21px',
        height: '32px',
      }}
    >
      {/* Invisible spacer to balance close button */}
      <div style={{ width: '32px', height: '32px' }} />
      
      {/* Modal Title - centered, width 205px, height 32px */}
      <div 
        className="flex flex-row justify-center items-center"
        style={{
          padding: '0px',
          gap: '10px',
          margin: '0 auto',
          height: '32px',
        }}
      >
        {/* Text - Text-Medium-B: Inter 600, 20px, 150% line-height, 0.4px tracking, #212121 */}
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
          Upload profile photo
        </span>
      </div>
      
      {/* Close Button - 32x32px, padding 4px, border-radius 100px, bg white */}
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
        {/* Icon - 24x24px */}
        <Icon icon="close" size={24} style={{ color: '#212121' }} />
      </button>
    </div>

    {/* Divider */}
    <Separator className="my-6 bg-[#C3C3C3]" />

    {/* Container - Drop Zone - width 544px, height 312px, bg #F2F2F2, border dashed #C3C3C3, radius 8px */}
    <div 
      className="flex flex-col justify-center items-center self-stretch border-2 border-dashed border-neutral-300 bg-neutral-100 rounded-lg"
      style={{
        boxSizing: 'border-box',
        padding: '0px',
        gap: '24px',
        height: '312px',
      }}
    >
      {/* Upload Icon - 40x40px */}
      <Icon icon="download_2" size={40} weight={600} style={{ color: '#212121' }} />
      
      {/* Text Block - gap 8px, width 355px, height 72px */}
      <div 
        className="flex flex-col items-center"
        style={{
          padding: '0px',
          gap: '8px',
        }}
      >
        {/* Upload prompt - Text-Medium-B: Inter 600, 20px, 150%, 0.4px, #212121 */}
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
        
        {/* File format instructions - Text-Paragraph: Inter 400, 14px, 120%, 0.2px, #616161 */}
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
          Works with any .JPG, .PNG, or .GIF file from the web<br />
          Recommended size: 300 × 300
        </p>
      </div>

      {/* Upload Button - using Button component with client variant */}
      <Button variant="client" size="default">
        Upload
      </Button>
    </div>
  </div>
);

/**
 * Upload Photo Modal - Uploading State (Property 1=Uploading)
 * Same container specs as Default, but with spinner instead of drop zone
 */
const UploadPhotoUploadingPreview: React.FC = () => (
  <div 
    className="flex flex-col items-start bg-white"
    style={{
      padding: '24px',
      width: '592px',
      height: '440px',
      boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: '16px',
    }}
  >
    {/* Header - same as Default */}
    <div 
      className="flex flex-row justify-between items-center self-stretch"
      style={{
        padding: '0px',
        gap: '21px',
        height: '32px',
      }}
    >
      <div style={{ width: '32px', height: '32px' }} />
      
      <div 
        className="flex flex-row justify-center items-center"
        style={{
          padding: '0px',
          gap: '10px',
          margin: '0 auto',
          height: '32px',
        }}
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
          Upload profile photo
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

    {/* Container - Uploading State (no background/border, just centered content) */}
    <div 
      className="flex flex-col justify-center items-center self-stretch"
      style={{
        boxSizing: 'border-box',
        padding: '0px',
        gap: '24px',
        height: '312px',
        borderRadius: '8px',
      }}
    >
      <Spinner size={40} />
      
      {/* Text Block - centered */}
      <div 
        className="flex flex-col items-center"
        style={{
          padding: '0px',
          gap: '8px',
        }}
      >
        {/* Upload prompt - same typography as Default */}
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
  </div>
);

// ============================================================================
// INTERACTIVE UPLOAD MODAL
// ============================================================================

type UploadState = "idle" | "uploading" | "complete";

interface InteractiveUploadModalProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const InteractiveUploadModal: React.FC<InteractiveUploadModalProps> = ({
  open,
  onOpenChange,
}) => {
  const [uploadState, setUploadState] = useState<UploadState>("idle");
  const [isDragOver, setIsDragOver] = useState(false);

  // Handle open state change and reset when closing
  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      // Reset states when modal closes
      setUploadState("idle");
      setIsDragOver(false);
    }
    onOpenChange?.(newOpen);
  };

  const handleUpload = () => {
    setUploadState("uploading");
    // Simulate upload completion after 2 seconds
    setTimeout(() => {
      setUploadState("complete");
      setTimeout(() => {
        handleOpenChange(false);
      }, 1500); // Give users a bit more time to see the checkmark animation
    }, 2000);
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
    handleUpload();
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-[592px] p-6 gap-0 rounded-2xl [&>button]:hidden">
        {/* Header - matching static preview exactly */}
        <DialogHeader 
          className="flex flex-row justify-between items-center self-stretch"
          style={{ padding: '0px', gap: '21px', height: '32px' }}
        >
          {/* Invisible spacer to balance close button */}
          <div style={{ width: '32px', height: '32px' }} />
          
          {/* Modal Title - centered */}
          <DialogTitle className="font-semibold text-xl leading-[150%] tracking-[0.4px] text-foreground text-center">
            Upload profile photo
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
            className={`flex flex-col justify-center items-center self-stretch border-2 border-dashed bg-neutral-100 rounded-lg transition-colors ${
              isDragOver ? 'border-client bg-client/5' : 'border-neutral-300'
            }`}
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
                Works with any .JPG, .PNG, or .GIF file from the web<br />
                Recommended size: 300 × 300
              </p>
            </div>

            <Button variant="client" onClick={handleUpload}>
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
};

// ============================================================================
// MAIN DEMO PAGE
// ============================================================================

export default function ModalDemo() {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  return (
    <div className="container max-w-4xl py-12 px-4 md:px-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">Modal</h1>
          <span className="text-sm text-muted-foreground">{VERSION}</span>
        </div>
        <p className="text-lg text-muted-foreground">
          Modals display content in a layer above the page. Use for focused tasks that require user attention like file uploads, confirmations, and data entry.
        </p>
      </div>

      <Tabs defaultValue="examples" className="space-y-8">
        <TabsList>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
        </TabsList>

        {/* Examples Tab */}
        <TabsContent value="examples" className="space-y-8">
          {/* Upload Photo Modal - Default State */}
          <section>
            <h2 className="mb-4 text-xl font-semibold">Upload Photo Modal - Default</h2>
            <p className="text-sm text-muted-foreground mb-4">
              The default state shows a drop zone where users can drag and drop images or click the upload button.
            </p>
                        <ComponentPreview title="Default State">
              <div className="flex justify-center">
                <UploadPhotoDefaultPreview />
              </div>
            </ComponentPreview>
          </section>

          {/* Upload Photo Modal - Uploading State */}
          <section>
            <h2 className="mb-4 text-xl font-semibold">Upload Photo Modal - Uploading</h2>
            <p className="text-sm text-muted-foreground mb-4">
              The uploading state displays a spinner animation while the file is being processed.
            </p>
                        <ComponentPreview title="Uploading State">
              <div className="flex justify-center">
                <UploadPhotoUploadingPreview />
              </div>
            </ComponentPreview>
          </section>

          {/* Interactive Demo */}
          <section>
            <h2 className="mb-4 text-xl font-semibold">Interactive Demo</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Click the button below to see the upload modal in action with state transitions.
            </p>
            <Card>
              <CardContent className="py-6">
                <div className="flex flex-col items-center justify-center py-6 gap-4">
                  <p className="text-sm text-muted-foreground">Click button to open upload modal</p>
                  <Dialog open={isUploadModalOpen} onOpenChange={setIsUploadModalOpen}>
                    <DialogTrigger asChild>
                      <Button className="bg-client hover:bg-client-hover text-white">
                        <Icon icon="upload" size={16} className="mr-2" />
                        Upload Photo
                      </Button>
                    </DialogTrigger>
                  </Dialog>
                  <InteractiveUploadModal 
                    open={isUploadModalOpen} 
                    onOpenChange={setIsUploadModalOpen} 
                  />
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Code Example */}
          <CodeBlock
            code={`import { useState } from "react";
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

export function UploadPhotoModal() {
  const [open, setOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = () => {
    setIsUploading(true);
    // Replace with your actual upload logic
    uploadFile().then(() => {
      setIsUploading(false);
      setOpen(false);
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="client">Upload Photo</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[592px] p-6 gap-0 rounded-2xl">
        {/* Header with centered title */}
        <DialogHeader className="flex flex-row justify-between items-center">
          <div className="flex-1" />
          <DialogTitle className="text-xl font-semibold">
            Upload profile photo
          </DialogTitle>
          <div className="flex-1 flex justify-end">
            <DialogClose asChild>
              <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-neutral-100">
                <Icon icon="close" size={24} />
              </button>
            </DialogClose>
          </div>
        </DialogHeader>

        {/* Divider */}
        <Separator className="my-6 bg-[#C3C3C3]" />

        {/* Content */}
        {!isUploading ? (
          <div className="flex flex-col items-center gap-6 h-[312px] justify-center bg-neutral-100 border-2 border-dashed border-neutral-300 rounded-lg">
            <Icon icon="download_2" size={40} weight={600} />
            <div className="text-center space-y-2">
              <p className="font-semibold text-xl">
                Drop your image here to upload
              </p>
              <p className="text-sm text-muted-foreground">
                Works with any .JPG, .PNG, or .GIF file from the web
                <br />
                Recommended size: 300 × 300
              </p>
            </div>
            <Button variant="client" onClick={handleUpload}>
              Upload
            </Button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-6 h-[312px] justify-center">
            <Spinner size={40} />
            <p className="font-semibold text-xl">Uploading image</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}`}
            language="tsx"
          />
        </TabsContent>

        {/* Usage Tab */}
        <TabsContent value="usage" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">When to Use</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-success">Do</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Use for file upload interactions</li>
                    <li>Use for confirmation dialogs (delete, discard changes)</li>
                    <li>Use for focused forms or quick data entry</li>
                    <li>Use when content requires immediate attention</li>
                    <li>Provide a clear way to close the modal</li>
                    <li>Show loading/progress states for async operations</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-destructive">Don&apos;t</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Use for non-critical information (use Toast instead)</li>
                    <li>Stack multiple modals</li>
                    <li>Use for long-form content (use Drawer instead)</li>
                    <li>Open modals without user action</li>
                    <li>Block the entire page for minor interactions</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Anatomy</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                The Upload Photo modal follows a consistent structure:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li><strong>Header</strong> - Contains the centered title and close button</li>
                <li><strong>Divider</strong> - Visual separator between header and content</li>
                <li><strong>Content Area</strong> - The main interaction zone (drop zone or status)</li>
                <li><strong>Action Buttons</strong> - Primary actions within the content area</li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">States</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="py-4">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold">Default State</h3>
                      <p className="text-sm text-muted-foreground">
                        Shows the drop zone with upload icon, instructional text, and upload button. 
                        The drop zone has a dashed border and subtle background.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Drag Over State</h3>
                      <p className="text-sm text-muted-foreground">
                        When dragging a file over the drop zone, the border color changes to indicate 
                        the valid drop target.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Uploading State</h3>
                      <p className="text-sm text-muted-foreground">
                        Displays a spinner animation and &quot;Uploading image&quot; text while the file 
                        is being processed.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Complete State</h3>
                      <p className="text-sm text-muted-foreground">
                        Shows a success checkmark before automatically closing the modal.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        {/* API Tab */}
        <TabsContent value="api" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Components</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Modal is built using the Dialog primitive from Radix UI. The following components are available:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-3 text-left font-medium">Component</th>
                    <th className="py-3 text-left font-medium">Description</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">Dialog</td>
                    <td className="py-3">Root container that manages open state</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">DialogTrigger</td>
                    <td className="py-3">Element that opens the modal when clicked</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">DialogContent</td>
                    <td className="py-3">Modal content container with overlay backdrop</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">DialogHeader</td>
                    <td className="py-3">Header section for title and close button</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">DialogTitle</td>
                    <td className="py-3">Modal title with proper accessibility</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">DialogClose</td>
                    <td className="py-3">Renders a close button that closes the modal</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">DialogDescription</td>
                    <td className="py-3">Optional description text for accessibility</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">DialogFooter</td>
                    <td className="py-3">Footer section for action buttons</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Dialog Props</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-3 text-left font-medium">Prop</th>
                    <th className="py-3 text-left font-medium">Type</th>
                    <th className="py-3 text-left font-medium">Default</th>
                    <th className="py-3 text-left font-medium">Description</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">open</td>
                    <td className="py-3 font-mono">boolean</td>
                    <td className="py-3">-</td>
                    <td className="py-3">Controlled open state</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">defaultOpen</td>
                    <td className="py-3 font-mono">boolean</td>
                    <td className="py-3">false</td>
                    <td className="py-3">Default open state for uncontrolled usage</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">onOpenChange</td>
                    <td className="py-3 font-mono">(open: boolean) =&gt; void</td>
                    <td className="py-3">-</td>
                    <td className="py-3">Callback when open state changes</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">modal</td>
                    <td className="py-3 font-mono">boolean</td>
                    <td className="py-3">true</td>
                    <td className="py-3">Whether to render as modal with backdrop</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">DialogContent Props</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-3 text-left font-medium">Prop</th>
                    <th className="py-3 text-left font-medium">Type</th>
                    <th className="py-3 text-left font-medium">Default</th>
                    <th className="py-3 text-left font-medium">Description</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">className</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">-</td>
                    <td className="py-3">Additional CSS classes for styling</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">forceMount</td>
                    <td className="py-3 font-mono">boolean</td>
                    <td className="py-3">-</td>
                    <td className="py-3">Force mounting for animation control</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">onEscapeKeyDown</td>
                    <td className="py-3 font-mono">(event) =&gt; void</td>
                    <td className="py-3">-</td>
                    <td className="py-3">Handler for escape key press</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">onPointerDownOutside</td>
                    <td className="py-3 font-mono">(event) =&gt; void</td>
                    <td className="py-3">-</td>
                    <td className="py-3">Handler for clicks outside content</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">onInteractOutside</td>
                    <td className="py-3 font-mono">(event) =&gt; void</td>
                    <td className="py-3">-</td>
                    <td className="py-3">Handler for any interaction outside</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Accessibility</h2>
            <Card>
              <CardContent className="py-4 space-y-3">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Focus is automatically trapped within the modal when open</li>
                  <li>Pressing <code className="text-xs bg-neutral-100 px-1 py-0.5 rounded">Escape</code> closes the modal</li>
                  <li>Clicking outside the modal closes it (unless prevented)</li>
                  <li><code className="text-xs bg-neutral-100 px-1 py-0.5 rounded">DialogTitle</code> is announced by screen readers</li>
                  <li>Use <code className="text-xs bg-neutral-100 px-1 py-0.5 rounded">DialogDescription</code> for additional context</li>
                </ul>
              </CardContent>
            </Card>
          </section>
        </TabsContent>
      </Tabs>
    </div>
  );
}
