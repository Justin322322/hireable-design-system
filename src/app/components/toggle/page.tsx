import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Toggle } from "@/components/ui/toggle";
import { Switch } from "@/components/ui/switch";
import { CodeBlock } from "@/components/docs/code-block";
import { ComponentPreview } from "@/components/docs/component-preview";
import { Bold, Italic, Underline } from "lucide-react";
import { VERSION } from "@/lib/version";

export default function TogglePage() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:px-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">Toggle</h1>
          <span className="text-sm text-muted-foreground">{VERSION}</span>
        </div>
        <p className="text-lg text-muted-foreground">
          A two-state button that can be either on or off. Perfect for settings, 
          preferences, and binary choices.
        </p>
      </div>

      <Tabs defaultValue="examples" className="space-y-8">
        <TabsList>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
          <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
        </TabsList>

        <TabsContent value="examples" className="space-y-8">
          <ComponentPreview title="Basic Toggle">
            <div className="flex flex-wrap gap-4">
              <Toggle aria-label="Toggle bold">
                <Bold className="h-4 w-4" />
              </Toggle>
              <Toggle aria-label="Toggle italic">
                <Italic className="h-4 w-4" />
              </Toggle>
              <Toggle aria-label="Toggle underline">
                <Underline className="h-4 w-4" />
              </Toggle>
            </div>
          </ComponentPreview>

          <CodeBlock
            code={`<Toggle aria-label="Toggle bold">
  <Bold className="h-4 w-4" />
</Toggle>
<Toggle aria-label="Toggle italic">
  <Italic className="h-4 w-4" />
</Toggle>
<Toggle aria-label="Toggle underline">
  <Underline className="h-4 w-4" />
</Toggle>`}
            language="tsx"
          />

          <ComponentPreview title="Variants">
            <div className="flex flex-wrap gap-4">
              <Toggle variant="default" aria-label="Default toggle">
                <Bold className="h-4 w-4" />
              </Toggle>
              <Toggle variant="outline" aria-label="Outline toggle">
                <Bold className="h-4 w-4" />
              </Toggle>
            </div>
          </ComponentPreview>

          <CodeBlock
            code={`<Toggle variant="default" aria-label="Default toggle">
  <Bold className="h-4 w-4" />
</Toggle>
<Toggle variant="outline" aria-label="Outline toggle">
  <Bold className="h-4 w-4" />
</Toggle>`}
            language="tsx"
          />

          <ComponentPreview title="Sizes">
            <div className="flex flex-wrap items-center gap-4">
              <Toggle size="sm" aria-label="Small toggle">
                <Bold className="h-3 w-3" />
              </Toggle>
              <Toggle size="default" aria-label="Default toggle">
                <Bold className="h-4 w-4" />
              </Toggle>
              <Toggle size="lg" aria-label="Large toggle">
                <Bold className="h-5 w-5" />
              </Toggle>
            </div>
          </ComponentPreview>

          <CodeBlock
            code={`<Toggle size="sm" aria-label="Small toggle">
  <Bold className="h-3 w-3" />
</Toggle>
<Toggle size="default" aria-label="Default toggle">
  <Bold className="h-4 w-4" />
</Toggle>
<Toggle size="lg" aria-label="Large toggle">
  <Bold className="h-5 w-5" />
</Toggle>`}
            language="tsx"
          />

          <ComponentPreview title="With Text">
            <div className="flex flex-wrap gap-4">
              <Toggle aria-label="Toggle notifications">
                Notifications
              </Toggle>
              <Toggle variant="outline" aria-label="Toggle dark mode">
                Dark Mode
              </Toggle>
            </div>
          </ComponentPreview>

          <CodeBlock
            code={`<Toggle aria-label="Toggle notifications">
  Notifications
</Toggle>
<Toggle variant="outline" aria-label="Toggle dark mode">
  Dark Mode
</Toggle>`}
            language="tsx"
          />

          <ComponentPreview title="Notification Settings">
            <div className="space-y-4 max-w-md">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Push notifications</span>
                <Switch defaultChecked aria-label="Toggle push notifications" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Email notifications</span>
                <Switch aria-label="Toggle email notifications" />
              </div>
            </div>
          </ComponentPreview>

          <CodeBlock
            code={`<div className="space-y-4 max-w-md">
  <div className="flex items-center justify-between">
    <span className="text-sm font-medium">Push notifications</span>
    <Switch defaultChecked aria-label="Toggle push notifications" />
  </div>
  <div className="flex items-center justify-between">
    <span className="text-sm font-medium">Email notifications</span>
    <Switch aria-label="Toggle email notifications" />
  </div>
</div>`}
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
                    <li>Use for binary settings (on/off, enabled/disabled)</li>
                    <li>Use for formatting options (bold, italic, underline)</li>
                    <li>Use when the state change is immediate</li>
                    <li>Always include proper aria-label for accessibility</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-red-600">Don&apos;t</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Don&apos;t use for actions that require confirmation</li>
                    <li>Don&apos;t use when multiple options are available</li>
                    <li>Don&apos;t use without clear visual feedback for state</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="api" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Props</h2>
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
                    <td className="py-3 font-mono text-foreground">variant</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">&quot;default&quot;</td>
                    <td className="py-3">Visual style variant</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">size</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">&quot;default&quot;</td>
                    <td className="py-3">Toggle size</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">pressed</td>
                    <td className="py-3 font-mono">boolean</td>
                    <td className="py-3">false</td>
                    <td className="py-3">Controlled pressed state</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">defaultPressed</td>
                    <td className="py-3 font-mono">boolean</td>
                    <td className="py-3">false</td>
                    <td className="py-3">Default pressed state</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">onPressedChange</td>
                    <td className="py-3 font-mono">function</td>
                    <td className="py-3">-</td>
                    <td className="py-3">Callback when pressed state changes</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">disabled</td>
                    <td className="py-3 font-mono">boolean</td>
                    <td className="py-3">false</td>
                    <td className="py-3">Disable the toggle</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="accessibility" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Accessibility</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Keyboard Navigation</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Tab</kbd> - Move focus to the toggle</li>
                    <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Enter</kbd> or <kbd className="px-2 py-1 bg-muted rounded text-xs">Space</kbd> - Toggle the pressed state</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">ARIA</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Uses <code className="text-sm bg-muted px-1 rounded">aria-pressed</code> to indicate state</li>
                    <li>Always include <code className="text-sm bg-muted px-1 rounded">aria-label</code> for icon-only toggles</li>
                    <li>State changes are announced to screen readers</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>
      </Tabs>
    </div>
  );
}