"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui";

import * as React from "react";

import { CodeBlock, ComponentPreview } from "@/components/docs";
import { VERSION } from "@/lib/version";

// Import extracted modal patterns
import { UploadPhotoModal, UploadPhotoModalPreview, PostJobModal, PostJobModalPreview, CompleteSetupModal, CompleteSetupModalPreview } from "@/patterns/modals";

// ============================================================================
// MAIN DEMO PAGE
// ============================================================================

export default function ModalDemo() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:px-8 overflow-hidden">
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
                <UploadPhotoModalPreview state="default" />
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
                <UploadPhotoModalPreview state="uploading" />
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
                  <UploadPhotoModal 
                    onUpload={async (file) => {
                      // Simulate upload delay to show spinner
                      console.log("Uploading file...", file?.name);
                      await new Promise(resolve => setTimeout(resolve, 2000));
                      console.log("Upload complete!");
                    }}
                  />
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Code Example */}
          <CodeBlock
            code={`import { UploadPhotoModal } from "@/patterns/modals";

export function MyComponent() {
  const handleUpload = async (file?: File) => {
    if (!file) return;
    
    // Upload to your server
    const formData = new FormData();
    formData.append('file', file);
    
    await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });
  };

  return (
    <UploadPhotoModal
      title="Upload profile photo"
      acceptedFormats=".JPG, .PNG, or .GIF"
      recommendedSize="300 × 300"
      onUpload={handleUpload}
      triggerText="Upload Photo"
      triggerIcon="upload"
    />
  );
}

// Or use with custom trigger
<UploadPhotoModal
  onUpload={handleUpload}
  trigger={
    <Button variant="outline">
      Custom Trigger
    </Button>
  }
/>`}
            language="tsx"
          />

          {/* Post a Job Modal */}
          <section>
            <h2 className="mb-4 text-xl font-semibold">Post a Job Modal</h2>
            <p className="text-sm text-muted-foreground mb-4">
              A modal for selecting job posting type with radio card options. Features a disabled &quot;Full-time&quot; option and an active &quot;Test (30-60-90 Day)&quot; option.
            </p>
            <ComponentPreview title="Post a Job Modal">
              <div className="flex justify-center">
                <PostJobModalPreview />
              </div>
            </ComponentPreview>
          </section>

          {/* Post a Job Modal - Interactive */}
          <section>
            <h2 className="mb-4 text-xl font-semibold">Post a Job Modal - Interactive</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Click the button below to see the Post a Job modal in action.
            </p>
            <Card>
              <CardContent className="py-6">
                <div className="flex flex-col items-center justify-center py-6 gap-4">
                  <p className="text-sm text-muted-foreground">Click button to open Post a Job modal</p>
                  <PostJobModal 
                    onSubmit={(type) => {
                      console.log("Selected job type:", type);
                    }}
                    onCancel={() => {
                      console.log("Cancelled");
                    }}
                  />
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Post a Job Code Example */}
          <CodeBlock
            code={`import { PostJobModal } from "@/patterns/modals";

export function MyComponent() {
  const handleSubmit = (type: "full-time" | "test-30-60-90") => {
    console.log("Selected job type:", type);
    // Navigate to job creation form
  };

  return (
    <PostJobModal
      onSubmit={handleSubmit}
      onCancel={() => console.log("Cancelled")}
    />
  );
}

// Controlled usage
const [open, setOpen] = useState(false);

<PostJobModal
  open={open}
  onOpenChange={setOpen}
  onSubmit={handleSubmit}
  showTrigger={false}
/>`}
            language="tsx"
          />

          {/* Complete Setup Modal */}
          <section>
            <h2 className="mb-4 text-xl font-semibold">Complete Setup Modal</h2>
            <p className="text-sm text-muted-foreground mb-4">
              A modal showing setup requirements before publishing a job post. Features clickable setup cards with chevron icons and an info note.
            </p>
            <ComponentPreview title="Complete Setup Modal">
              <div className="flex justify-center">
                <CompleteSetupModalPreview />
              </div>
            </ComponentPreview>
          </section>

          {/* Complete Setup Modal - Interactive */}
          <section>
            <h2 className="mb-4 text-xl font-semibold">Complete Setup Modal - Interactive</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Click the button below to see the Complete Setup modal in action.
            </p>
            <Card>
              <CardContent className="py-6">
                <div className="flex flex-col items-center justify-center py-6 gap-4">
                  <p className="text-sm text-muted-foreground">Click button to open Complete Setup modal</p>
                  <CompleteSetupModal 
                    onSubmit={() => console.log("Complete Setup clicked")}
                    onCancel={() => console.log("Later clicked")}
                    onItemClick={(id) => console.log("Item clicked:", id)}
                  />
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Complete Setup Code Example */}
          <CodeBlock
            code={`import { CompleteSetupModal } from "@/patterns/modals";

export function MyComponent() {
  const setupItems = [
    { id: "company-profile", title: "Add company profile", description: "Upload your logo" },
    { id: "company-description", title: "Add company description", description: "Tell talents about your company" },
    { id: "billing", title: "Set up billing method", description: "Add payment details required to start tests" },
    { id: "post-job", title: "Post a job", description: "Create your first job post" },
  ];

  return (
    <CompleteSetupModal
      items={setupItems}
      infoMessage="Your job post has been saved as a draft. You can publish it once you complete the setup."
      onSubmit={() => console.log("Complete Setup")}
      onCancel={() => console.log("Later")}
      onItemClick={(id) => navigateTo(id)}
    />
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
