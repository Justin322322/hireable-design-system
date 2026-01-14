"use client";

import { LoadingScreen, Button, Tabs, TabsContent, TabsList, TabsTrigger, Card, CardContent } from "@/components/ui";
import { useState, useEffect } from "react";
import { CodeBlock, ComponentPreview, PropsTable, VariantsTable } from "@/components/docs";
import { loadingScreenProps, loadingScreenVariants } from "@/data/api/loading-screen";
import { VERSION } from "@/lib/version";

export default function LoadingScreenPage() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLoading(false);
      }
    };

    if (loading) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [loading]);

  return (
    <div className="container max-w-4xl py-12 px-4 md:px-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">Loading Screen</h1>
          <span className="text-sm text-muted-foreground">{VERSION}</span>
        </div>
        <p className="text-lg text-muted-foreground">
          Full-screen or container-filling loading indicator with the Hireable brand loader.
        </p>
      </div>

      <Tabs defaultValue="examples" className="space-y-8">
        <TabsList>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
        </TabsList>

        <TabsContent value="examples" className="space-y-8">
          <ComponentPreview title="Full Screen Loader">
            <div className="flex justify-center p-8">
              <Button onClick={() => setLoading(true)} size="lg">
                Show Loading Screen
              </Button>
            </div>
            {loading && (
              <>
                <LoadingScreen />
                <Button 
                  variant="outline" 
                  className="fixed bottom-20 left-1/2 -translate-x-1/2 z-60 bg-background/50 backdrop-blur-sm border-primary/20 hover:bg-background/80 transition-colors"
                  onClick={() => setLoading(false)}
                >
                  Stop Loading (Esc)
                </Button>
              </>
            )}
          </ComponentPreview>
          <CodeBlock
            code={`import { LoadingScreen } from "@/components/ui";
import { useAuth } from "@/hooks/use-auth";

export default function Dashboard() {
  const { user, isLoading } = useAuth();

  // 1. Show loader automatically while fetching data
  if (isLoading) {
    return <LoadingScreen message="Verifying credentials..." />; 
  }

  // 2. Once finished, render the content
  return (
    <div>
      <h1>Welcome back, {user.name}</h1>
    </div>
  );
}`}
            language="tsx"
          />
        </TabsContent>

        <TabsContent value="usage" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Guidelines</h2>
            <Card>
              <CardContent className="pt-6 text-muted-foreground">
                <ul className="list-disc list-inside space-y-2">
                  <li>Indicates a wait time for content to load or actions to process.</li>
                  <li>Blocks user interaction with the background content to prevent errors.</li>
                  <li>Can be customized with a message to provide context to the user.</li>
                  <li>Supports a full-screen overlay mode for blocking the entire application.</li>
                </ul>
              </CardContent>
            </Card>
          </section>


        </TabsContent>

        <TabsContent value="api" className="space-y-8">
          <div className="space-y-8">
            <div>
              <PropsTable title="Props" props={loadingScreenProps} />
            </div>
            <div>
              <VariantsTable title="Variants" variants={loadingScreenVariants} />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
