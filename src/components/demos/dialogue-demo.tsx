import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Stack,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui";


import { CodeBlock } from "@/components/docs/code-block";
import { VERSION } from "@/lib/version";
export default function DialoguePage() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:px-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">Dialogue</h1>
          <span className="text-sm text-muted-foreground">{VERSION}</span>
        </div>
        <p className="text-lg text-muted-foreground">
          Dialogues display content in a layer above the page. Use for confirmations and focused tasks that require user attention.
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
            <h2 className="mb-4 text-xl font-semibold">Confirmation Dialogue</h2>
            <Card>
              <CardContent className="py-6">
                <div className="flex flex-col items-center justify-center py-6">
                  <p className="text-sm text-muted-foreground mb-4">Click button to show dialogue</p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">Leave Page</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Are you sure?</DialogTitle>
                        <DialogDescription>
                          You have unsaved changes that will be lost if you leave now. If you&apos;d like to keep your work, please save before continuing.
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <Button variant="outline">Cancel</Button>
                        <Button>Continue</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          </section>
          <CodeBlock
            code={`import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui";

<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Leave Page</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogDescription>
        You have unsaved changes that will be lost if you leave now. 
        If you'd like to keep your work, please save before continuing.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button>Continue</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
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
                    <li>Use for confirmation dialogs (delete, discard changes)</li>
                    <li>Use for focused forms or tasks</li>
                    <li>Use when content requires immediate attention</li>
                    <li>Provide a clear way to close the dialogue</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-destructive">Don&apos;t</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Use for non-critical information</li>
                    <li>Stack multiple dialogues</li>
                    <li>Use for long-form content</li>
                    <li>Open dialogues without user action</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>
        <TabsContent value="api" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Components</h2>
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
                    <td className="py-3">Root container</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">DialogTrigger</td>
                    <td className="py-3">Element that opens the dialogue</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">DialogContent</td>
                    <td className="py-3">Dialogue content container</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">DialogHeader</td>
                    <td className="py-3">Header section</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">DialogTitle</td>
                    <td className="py-3">Dialogue title</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">DialogDescription</td>
                    <td className="py-3">Dialogue description</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">DialogFooter</td>
                    <td className="py-3">Footer with actions</td>
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
                    <td className="py-3">Default open state</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">onOpenChange</td>
                    <td className="py-3 font-mono">function</td>
                    <td className="py-3">-</td>
                    <td className="py-3">Callback when open state changes</td>
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
