"use client";

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Icon,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  type IconName,
} from "@/components/ui";

import { CodeBlock } from "@/components/docs/code-block";
import { useToast } from "@/hooks";

interface StaticToastProps {
  variant?: "default" | "success" | "destructive" | "warning" | "info";
  title: string;
  icon?: IconName;
}

function StaticToast({ variant = "default", title, icon }: StaticToastProps) {
  const styles = {
    default: {
      bg: "bg-background border",
      iconColor: "text-foreground",
    },
    success: {
      bg: "bg-toast-success-bg",
      iconColor: "text-success",
    },
    destructive: {
      bg: "bg-toast-error-bg",
      iconColor: "text-danger",
    },
    warning: {
      bg: "bg-toast-warning-bg",
      iconColor: "text-warning",
    },
    info: {
      bg: "bg-toast-info-bg",
      iconColor: "text-client",
    },
  };

  const currentStyle = styles[variant] || styles.default;

  return (
    <div className={`rounded-lg py-4 pl-4 pr-6 shadow-[0px_2px_8px_rgba(0,0,0,0.1)] flex items-center gap-6 w-full max-w-sm h-14 ${currentStyle.bg}`}>
      {icon && <Icon icon={icon} size={24} className={`${currentStyle.iconColor} shrink-0`} />}
      <p className="flex-1 font-primary font-normal text-base leading-[150%] tracking-[0.2px] text-foreground">
        {title}
      </p>
      <Button variant="ghost" size="icon-sm" className="text-foreground hover:text-foreground/80 shrink-0 h-5 w-5">
        <Icon icon="close" size={20} />
      </Button>
    </div>
  );
}

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
        className="bg-success hover:bg-success/90 active:bg-success/80 text-white border-none focus-visible:ring-success/50"
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
        className="bg-warning hover:bg-warning/90 active:bg-warning/80 text-foreground border-none focus-visible:ring-warning/50"
        onClick={() => toast({
          variant: "warning",
          title: "Warning",
          description: "Your subscription is about to expire."
        })}
      >
        Warning
      </Button>
      <Button
        className="bg-client hover:bg-client-hover active:bg-client-active text-white border-none focus-visible:ring-client/50"
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
    <div className="container max-w-4xl py-12 px-4 md:px-8 overflow-hidden">
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
                  <StaticToast title="Notification" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-success">Success</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center p-6">
                  <StaticToast variant="success" title="Success" icon="check_circle" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-danger">Error</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center p-6">
                  <StaticToast variant="destructive" title="Error" icon="error" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-warning">Warning</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center p-6">
                  <StaticToast variant="warning" title="Warning" icon="warning" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-client">Info</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center p-6">
                  <StaticToast variant="info" title="Information" icon="info" />
                </CardContent>
              </Card>
            </div>
          </section>
          <CodeBlock
            code={`import { Button } from "@/components/ui";

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
                  <CardTitle className="text-lg text-success">Do</CardTitle>
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
                  <CardTitle className="text-lg text-danger">Don&apos;t</CardTitle>
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
