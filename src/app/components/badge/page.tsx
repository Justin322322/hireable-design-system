import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/docs/code-block";
import { ComponentPreview } from "@/components/docs/component-preview";

export default function BadgePage() {
  return (
    <div className="container max-w-4xl py-12 px-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">Badge</h1>
          <Badge variant="outline">Stable</Badge>
        </div>
        <p className="text-lg text-muted-foreground">
          Badges are used to highlight important information, show status, or categorize content.
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
          <ComponentPreview title="Variants">
            <div className="flex flex-wrap items-center gap-4">
              <Badge>Default</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="danger">Danger</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="muted">Muted</Badge>
            </div>
          </ComponentPreview>

          <CodeBlock
            code={`<Badge>Default</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="danger">Danger</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="muted">Muted</Badge>`}
            language="tsx"
          />

          <ComponentPreview title="Size Comparison">
            <div className="flex flex-wrap items-center gap-4">
              <Badge>Small Badge</Badge>
              <Badge variant="outline">Large Badge with Border</Badge>
            </div>
          </ComponentPreview>

          <CodeBlock
            code={`<Badge>Small Badge</Badge>
<Badge variant="outline">Large Badge with Border</Badge>`}
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
                    <li>Use badges to show status or state information</li>
                    <li>Use outline badges for larger, more prominent labels</li>
                    <li>Keep badge text short and descriptive</li>
                    <li>Use consistent colors for similar types of information</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-red-600">Don&apos;t</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Don&apos;t use badges for long text content</li>
                    <li>Don&apos;t use too many different badge colors in one area</li>
                    <li>Don&apos;t use badges as buttons or interactive elements</li>
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
                    <td className="py-3 font-mono text-foreground">className</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">-</td>
                    <td className="py-3">Additional CSS classes</td>
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
                    <td className="py-3">Small green badge with light background</td>
                    <td className="py-3">General status indicators</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">outline</td>
                    <td className="py-3">Larger badge with green border and background</td>
                    <td className="py-3">Prominent labels and categories</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">success</td>
                    <td className="py-3">Success state indicator</td>
                    <td className="py-3">Positive status messages</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">danger</td>
                    <td className="py-3">Error or danger state</td>
                    <td className="py-3">Error messages and warnings</td>
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
                  <CardTitle className="text-lg">Color and Contrast</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Badge colors meet WCAG contrast requirements</li>
                    <li>Don&apos;t rely solely on color to convey information</li>
                    <li>Use descriptive text alongside color coding</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Screen Readers</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Badge text is automatically read by screen readers</li>
                    <li>Use <code className="text-sm bg-muted px-1 rounded">aria-label</code> for additional context if needed</li>
                    <li>Ensure badge content is meaningful without visual context</li>
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