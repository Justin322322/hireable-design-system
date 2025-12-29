"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger, Card, CardContent, Button, Icon } from "@/components/ui";

import { CodeBlock } from "@/components/docs/code-block";

function DownloadButton() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const response = await fetch("/api/download-components");
      if (!response.ok) throw new Error("Download failed");
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "hireable-design-system.zip";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    } catch (error) {
      console.error("Download error:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Button 
      onClick={handleDownload} 
      disabled={isDownloading}
      size="lg"
      className="gap-2"
    >
      <Icon icon={isDownloading ? "autorenew" : "download"} className={isDownloading ? "animate-spin" : ""} />
      {isDownloading ? "Downloading..." : "Download All Components"}
    </Button>
  );
}

export default function GettingStartedPage() {
  return (
    <div className="container max-w-4xl mx-auto py-12 px-4 md:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-3xl font-bold">Getting Started</h1>
        <p className="text-lg text-muted-foreground">
          Everything you need to start using the Hireable Design System in your project.
        </p>
        
        {/* Quick Download Section */}
        <Card className="mt-6 bg-muted/50">
          <CardContent className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6">
            <div>
              <h3 className="font-semibold text-lg">Quick Start</h3>
              <p className="text-sm text-muted-foreground">
                Download all components, hooks, and utilities as a ZIP file.
              </p>
            </div>
            <DownloadButton />
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="whats-included" className="space-y-8">
        <TabsList>
          <TabsTrigger value="whats-included">What&apos;s Included</TabsTrigger>
          <TabsTrigger value="installation">Installation</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
        </TabsList>

        <TabsContent value="whats-included" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Package Contents</h2>
            <p className="mb-4 text-muted-foreground">
              The downloaded ZIP contains a complete, production-ready design system in Next.js format:
            </p>
            <CodeBlock
              code={`hireable-design-system/
├── src/
│   ├── components/ui/       # 30+ UI components
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   ├── patterns/            # Composite patterns
│   └── app/
│       └── globals.css      # Design tokens
├── public/
│   ├── icons/               # Icon assets
│   ├── images/              # Image assets
│   ├── Logo.svg
│   ├── Logo-name.svg
│   └── auth-pillars.svg
└── README.md`}
              language="bash"
            />
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Folder Structure</h2>
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">src/components/ui/</h3>
                  <p className="text-sm text-muted-foreground">
                    Core UI primitives (Button, Input, Card, Dialog, etc.) - All components use design tokens, 
                    fully accessible with ARIA attributes, and TypeScript with full type safety.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">src/hooks/</h3>
                  <p className="text-sm text-muted-foreground">
                    Custom React hooks: useDisclosure (modal/drawer state), useToggle (boolean state), useToast (notifications)
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">src/patterns/</h3>
                  <p className="text-sm text-muted-foreground">
                    Composite components built from UI primitives: cards, drawers, modals, kanban, form-field, modal-layout
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">src/app/globals.css</h3>
                  <p className="text-sm text-muted-foreground">
                    Design tokens (CSS variables) - SOURCE OF TRUTH. 3-layer token architecture with light/dark mode support.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">public/</h3>
                  <p className="text-sm text-muted-foreground">
                    Static assets: icons, images, logos (Logo.svg, Logo-name.svg, auth-pillars.svg)
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Prerequisites</h2>
            <Card>
              <CardContent className="pt-6 text-muted-foreground">
                <ul className="list-disc list-inside space-y-1">
                  <li>Node.js 18.0 or later</li>
                  <li>React 18.0 or later</li>
                  <li>Tailwind CSS 4.0 or later</li>
                </ul>
              </CardContent>
            </Card>
          </section>
        </TabsContent>

        <TabsContent value="installation" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Option 1: Copy to Existing Next.js Project</h2>
            <p className="mb-4 text-muted-foreground">
              Extract the downloaded ZIP and copy folders to your existing project:
            </p>
            <CodeBlock
              code={`# Copy src folder contents
cp -r src/* your-project/src/

# Copy public assets
cp -r public/* your-project/public/`}
              language="bash"
            />
            <p className="mt-4 text-muted-foreground">
              Then import globals.css in your layout:
            </p>
            <CodeBlock
              code={`// app/layout.tsx
import "@/app/globals.css"`}
              language="tsx"
            />
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Option 2: Start Fresh</h2>
            <p className="mb-4 text-muted-foreground">
              Extract the ZIP to your project root - the folder structure is ready to use!
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Install Dependencies</h2>
            <p className="mb-4 text-muted-foreground">
              Install the required dependencies for the components:
            </p>
            <CodeBlock
              code={`# Core utilities (REQUIRED)
bun add clsx tailwind-merge class-variance-authority

# Material Symbols font (REQUIRED for icons)
bun add material-symbols

# Radix UI primitives (REQUIRED for most components)
bun add @radix-ui/react-dialog @radix-ui/react-tabs @radix-ui/react-select
bun add @radix-ui/react-checkbox @radix-ui/react-radio-group @radix-ui/react-switch
bun add @radix-ui/react-label @radix-ui/react-avatar @radix-ui/react-separator
bun add @radix-ui/react-navigation-menu @radix-ui/react-slot @radix-ui/react-toggle
bun add @radix-ui/react-accordion @radix-ui/react-progress @radix-ui/react-visually-hidden

# Drawer component (REQUIRED for drawers)
bun add vaul

# Toast notifications (REQUIRED for toasts)
bun add sonner

# Form handling (RECOMMENDED)
bun add react-hook-form @hookform/resolvers zod

# Animations (RECOMMENDED)
bun add framer-motion

# Drag and drop (OPTIONAL - for Kanban, sortable lists)
bun add @dnd-kit/core @dnd-kit/sortable @dnd-kit/utilities

# Charts (OPTIONAL - for data visualization)
bun add recharts`}
              language="bash"
            />
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Configure Material Symbols Font</h2>
            <p className="mb-4 text-muted-foreground">
              Import the Material Symbols font in your layout.tsx:
            </p>
            <CodeBlock
              code={`// app/layout.tsx
import "material-symbols";

// The Icon component will now work with all Material Symbols icons
// Browse icons at: https://fonts.google.com/icons`}
              language="tsx"
            />
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Configure Path Aliases</h2>
            <p className="mb-4 text-muted-foreground">
              Ensure your tsconfig.json has the <code className="text-sm bg-muted px-1 rounded">@/</code> alias:
            </p>
            <CodeBlock
              code={`{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}`}
              language="json"
            />
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Configure Tailwind CSS</h2>
            <p className="mb-4 text-muted-foreground">
              Make sure your tailwind.config.ts includes the component paths:
            </p>
            <CodeBlock
              code={`import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/patterns/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;`}
              language="typescript"
            />
          </section>
        </TabsContent>

        <TabsContent value="usage" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Import Components from Barrel Exports</h2>
            <CodeBlock
              code={`import { Button, Input, Card, CardHeader, CardContent } from "@/components/ui";
import { useDisclosure, useToast } from "@/hooks";
import { FormField } from "@/patterns";

export function MyComponent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <Card>
      <CardHeader>
        <h2>Welcome</h2>
      </CardHeader>
      <CardContent>
        <FormField label="Email" helperText="We'll never share your email">
          <Input type="email" placeholder="m@example.com" />
        </FormField>
        <Button variant="primary" onClick={onOpen}>
          Submit
        </Button>
      </CardContent>
    </Card>
  );
}`}
              language="tsx"
            />
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Use Patterns for Complex Components</h2>
            <CodeBlock
              code={`import { ProfileCard, GoalCard } from "@/patterns/cards";
import { CandidateProfileDrawer } from "@/patterns/drawers";
import { UploadPhotoModal } from "@/patterns/modals";`}
              language="tsx"
            />
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Design Tokens</h2>
            <p className="mb-4 text-muted-foreground">
              All components use CSS variables from globals.css. Never use hardcoded colors - always use design tokens for consistency:
            </p>
            <CodeBlock
              code={`/* Example tokens */
--color-primary: #00A7F8;
--color-background: #FFFFFF;
--button-primary-default: var(--color-primary);
--spacing-4: 1rem;`}
              language="css"
            />
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Accessibility</h2>
            <Card>
              <CardContent className="pt-6 text-muted-foreground">
                <p className="mb-2">All components follow WCAG 2.1 AA standards:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Proper ARIA attributes</li>
                  <li>Keyboard navigation</li>
                  <li>Focus management</li>
                  <li>Screen reader support</li>
                </ul>
              </CardContent>
            </Card>
          </section>
        </TabsContent>
      </Tabs>
    </div>
  );
}
