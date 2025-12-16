import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/docs/code-block";

export default function ToastPage() {
  return (
    <div className="container max-w-4xl py-12 px-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">Toast</h1>
          <Badge variant="secondary">Draft</Badge>
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
            <h2 className="mb-4 text-xl font-semibold">Toast Variants</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="py-4">
                  <div className="rounded-lg border bg-background p-4 shadow-lg flex items-start gap-3">
                    <div className="flex-1">
                      <p className="font-medium">Success</p>
                      <p className="text-sm text-muted-foreground">Your changes have been saved.</p>
                    </div>
                    <button className="text-muted-foreground hover:text-foreground">×</button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="py-4">
                  <div className="rounded-lg border border-destructive bg-background p-4 shadow-lg flex items-start gap-3">
                    <div className="flex-1">
                      <p className="font-medium text-destructive">Error</p>
                      <p className="text-sm text-muted-foreground">Something went wrong. Please try again.</p>
                    </div>
                    <button className="text-muted-foreground hover:text-foreground">×</button>
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
                    <th className="py-3 text-left font-medium">Description</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">title</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Toast title</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">description</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Toast description</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">variant</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">&quot;default&quot; | &quot;destructive&quot;</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">duration</td>
                    <td className="py-3 font-mono">number</td>
                    <td className="py-3">Auto-dismiss time in ms</td>
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
