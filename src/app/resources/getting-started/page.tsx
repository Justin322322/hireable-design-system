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
    <div className="container max-w-4xl py-12 px-4 md:px-8">
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

      <Tabs defaultValue="installation" className="space-y-8">
        <TabsList>
          <TabsTrigger value="installation">Installation</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
        </TabsList>

        <TabsContent value="installation" className="space-y-8">
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

          <section>
            <h2 className="mb-4 text-xl font-semibold">Copy Components</h2>
            <p className="mb-4 text-muted-foreground">
              This design system uses a copy-paste approach (similar to shadcn/ui). 
              Use the <strong>Download All Components</strong> button above to get everything at once, 
              or copy individual folders manually:
            </p>
            <CodeBlock
              code={`# Extract the downloaded ZIP to your project
# OR copy folders manually:

# Copy the components folder to your project
cp -r src/components/ui your-project/src/components/

# Copy hooks
cp -r src/hooks your-project/src/

# Copy the utility functions
cp src/lib/utils.ts your-project/src/lib/`}
              language="bash"
            />
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Install Peer Dependencies</h2>
            <p className="mb-4 text-muted-foreground">
              Install the required dependencies for the components:
            </p>
            <CodeBlock
              code={`# Core utilities
bun add clsx tailwind-merge class-variance-authority

# Radix UI primitives (install as needed)
bun add @radix-ui/react-dialog @radix-ui/react-tabs @radix-ui/react-select

# Optional: animations
bun add framer-motion`}
              language="bash"
            />
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Configure Path Aliases</h2>
            <p className="mb-4 text-muted-foreground">
              Set up the <code className="text-sm bg-muted px-1 rounded">@/</code> path alias in your tsconfig.json:
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
            <h2 className="mb-4 text-xl font-semibold">Configure Tailwind</h2>
            <p className="mb-4 text-muted-foreground">
              Make sure your Tailwind configuration includes the component paths:
            </p>
            <CodeBlock
              code={`// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
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
            <h2 className="mb-4 text-xl font-semibold">Import Components</h2>
            <CodeBlock
              code={`



export function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <h2>Welcome</h2>
      </CardHeader>
      <CardContent>
        <Input placeholder="Enter your name" />
        <Button>Submit</Button>
      </CardContent>
    </Card>
  );
}`}
              language="tsx"
            />
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Import Styles</h2>
            <p className="mb-4 text-muted-foreground">
              Import the global styles in your app entry point:
            </p>
            <CodeBlock
              code={`// app/layout.tsx or pages/_app.tsx
import "@/app/globals.css";`}
              language="tsx"
            />
          </section>
        </TabsContent>


      </Tabs>
    </div>
  );
}
