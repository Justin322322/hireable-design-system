"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeBlock } from "@/components/docs/code-block";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { CheckCircleOutlined, ErrorOutline, WarningAmberOutlined, InfoOutlined, CloseOutlined } from "@mui/icons-material";

function ToastDemo() {
  const { toast } = useToast();

  return (
    <div className="flex flex-wrap gap-4 justify-center p-8 bg-muted/20 rounded-xl border border-dashed">
      <Button
        variant="outline"
        onClick={() => toast({
          title: "Notification",
          description: "This is a default toast message."
        })}
      >
        Default
      </Button>
      <Button
        className="bg-green-600 hover:bg-green-700 text-white border-none"
        onClick={() => toast({
          variant: "success",
          title: "Success",
          description: "Your changes have been saved successfully."
        })}
      >
        Success
      </Button>
      <Button
        variant="destructive"
        onClick={() => toast({
          variant: "destructive",
          title: "Error",
          description: "Something went wrong. Please try again."
        })}
      >
        Destructive
      </Button>
      <Button
        className="bg-amber-500 hover:bg-amber-600 text-white border-none"
        onClick={() => toast({
          variant: "warning",
          title: "Warning",
          description: "Your subscription is about to expire."
        })}
      >
        Warning
      </Button>
      <Button
        className="bg-blue-500 hover:bg-blue-600 text-white border-none"
        onClick={() => toast({
          variant: "info",
          title: "Information",
          description: "A new version is available for download."
        })}
      >
        Info
      </Button>
    </div>
  );
}

export default function ToastPage() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:px-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">Toast</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Toasts provide brief, non-blocking notifications. They appear temporarily and dismiss automatically.
        </p>
      </div>

      <Tabs defaultValue="examples" className="space-y-8">
        <TabsList>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
        </TabsList>

        <TabsContent value="examples" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Interactive Demo</h2>
            <ToastDemo />
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Toast Variants</h2>
            <div className="flex flex-col gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Default</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center p-6">
                  <div className="rounded-lg border bg-background p-4 shadow-lg flex items-start gap-3 w-full max-w-lg">
                    <div className="flex-1">
                      <p className="font-medium text-sm">Notification</p>
                      <p className="text-xs text-muted-foreground">This is a default toast message.</p>
                    </div>
                    <button className="text-muted-foreground hover:text-foreground">
                      <CloseOutlined sx={{ fontSize: 16 }} />
                    </button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-green-600">Success</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center p-6">
                  <div className="rounded-lg border border-green-200 bg-green-50 p-4 shadow-lg flex items-start gap-3 w-full max-w-lg dark:bg-green-950 dark:border-green-900">
                    <CheckCircleOutlined sx={{ fontSize: 20 }} className="text-green-600 dark:text-green-400 mt-0.5" />
                    <div className="flex-1 text-green-900 dark:text-green-400">
                      <p className="font-medium text-sm">Success</p>
                      <p className="text-xs">Your changes have been saved successfully.</p>
                    </div>
                    <button className="text-green-700 hover:text-green-900 dark:text-green-400">
                      <CloseOutlined sx={{ fontSize: 16 }} />
                    </button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-red-600">Error</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center p-6">
                  <div className="rounded-lg border border-red-200 bg-red-50 p-4 shadow-lg flex items-start gap-3 w-full max-w-lg dark:bg-red-950 dark:border-red-900">
                    <ErrorOutline sx={{ fontSize: 20 }} className="text-red-600 dark:text-red-400 mt-0.5" />
                    <div className="flex-1 text-red-900 dark:text-red-400">
                      <p className="font-medium text-sm">Error</p>
                      <p className="text-xs">Something went wrong. Please try again.</p>
                    </div>
                    <button className="text-red-700 hover:text-red-900 dark:text-red-400">
                      <CloseOutlined sx={{ fontSize: 16 }} />
                    </button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-amber-600">Warning</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center p-6">
                  <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 shadow-lg flex items-start gap-3 w-full max-w-lg dark:bg-amber-950 dark:border-amber-900">
                    <WarningAmberOutlined sx={{ fontSize: 20 }} className="text-amber-600 dark:text-amber-400 mt-0.5" />
                    <div className="flex-1 text-amber-900 dark:text-amber-400">
                      <p className="font-medium text-sm">Warning</p>
                      <p className="text-xs">Your subscription is about to expire.</p>
                    </div>
                    <button className="text-amber-700 hover:text-amber-900 dark:text-amber-400">
                      <CloseOutlined sx={{ fontSize: 16 }} />
                    </button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-blue-600">Info</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center p-6">
                  <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 shadow-lg flex items-start gap-3 w-full max-w-lg dark:bg-blue-950 dark:border-blue-900">
                    <InfoOutlined sx={{ fontSize: 20 }} className="text-blue-600 dark:text-blue-400 mt-0.5" />
                    <div className="flex-1 text-blue-900 dark:text-blue-400">
                      <p className="font-medium text-sm">Information</p>
                      <p className="text-xs">A new version is available for download.</p>
                    </div>
                    <button className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
                      <CloseOutlined sx={{ fontSize: 16 }} />
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <CodeBlock
            code={`import { useToast } from "@/hooks/use-toast";

function MyComponent() {
  const { toast } = useToast();

  return (
    <Button
      onClick={() => {
        toast({
          title: "Success",
          description: "Your changes have been saved.",
        });
      }}
    >
      Show Toast
    </Button>
  );
}

// Destructive variant
toast({
  variant: "destructive",
  title: "Error",
  description: "Something went wrong.",
});`}
            language="tsx"
          />
        </TabsContent>

        <TabsContent value="usage" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">When to Use</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-green-600">Do</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Use for success confirmations</li>
                    <li>Use for non-critical errors</li>
                    <li>Keep messages brief and clear</li>
                    <li>Auto-dismiss after 3-5 seconds</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-red-600">Don&apos;t</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Use for critical errors requiring action</li>
                    <li>Stack too many toasts at once</li>
                    <li>Include complex interactions</li>
                    <li>Use for information that needs to persist</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="api" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Toast Options</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-3 text-left font-medium">Option</th>
                    <th className="py-3 text-left font-medium">Type</th>
                    <th className="py-3 text-left font-medium">Default</th>
                    <th className="py-3 text-left font-medium">Description</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">title</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">-</td>
                    <td className="py-3">Toast title text</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">description</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">-</td>
                    <td className="py-3">Toast description/body text</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">variant</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">&quot;default&quot;</td>
                    <td className="py-3">Visual style variant</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">duration</td>
                    <td className="py-3 font-mono">number</td>
                    <td className="py-3">5000</td>
                    <td className="py-3">Auto-dismiss time in milliseconds</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">action</td>
                    <td className="py-3 font-mono">ReactNode</td>
                    <td className="py-3">-</td>
                    <td className="py-3">Action button element</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">onOpenChange</td>
                    <td className="py-3 font-mono">function</td>
                    <td className="py-3">-</td>
                    <td className="py-3">Callback when toast visibility changes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Variants</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-3 text-left font-medium">Variant</th>
                    <th className="py-3 text-left font-medium">Description</th>
                    <th className="py-3 text-left font-medium">Use Case</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">default</td>
                    <td className="py-3">Neutral notification style</td>
                    <td className="py-3">General notifications</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">success</td>
                    <td className="py-3">Green success indicator</td>
                    <td className="py-3">Successful operations</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">destructive</td>
                    <td className="py-3">Red error indicator</td>
                    <td className="py-3">Errors and failures</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">warning</td>
                    <td className="py-3">Amber warning indicator</td>
                    <td className="py-3">Warnings and cautions</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">info</td>
                    <td className="py-3">Blue informational indicator</td>
                    <td className="py-3">Informational messages</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">useToast Hook</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-3 text-left font-medium">Return</th>
                    <th className="py-3 text-left font-medium">Type</th>
                    <th className="py-3 text-left font-medium">Description</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">toast</td>
                    <td className="py-3 font-mono">function</td>
                    <td className="py-3">Function to trigger a toast notification</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">toasts</td>
                    <td className="py-3 font-mono">Toast[]</td>
                    <td className="py-3">Array of active toast objects</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">dismiss</td>
                    <td className="py-3 font-mono">function</td>
                    <td className="py-3">Function to dismiss a specific toast by ID</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </TabsContent>
      </Tabs>
    </div>
  );
}
