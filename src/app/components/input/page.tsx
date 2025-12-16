import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/docs/code-block";
import { ComponentPreview } from "@/components/docs/component-preview";

export default function InputPage() {
  return (
    <div className="container max-w-4xl py-12 px-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">Input</h1>
          <Badge>Stable</Badge>
        </div>
        <p className="text-lg text-muted-foreground">
          Input fields allow users to enter and edit text. Use appropriate types and validation for better UX.
        </p>
      </div>

      <Tabs defaultValue="examples" className="space-y-8">
        <TabsList>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
        </TabsList>

        <TabsContent value="examples" className="space-y-8">
          <ComponentPreview title="Default Input">
            <input
              type="text"
              placeholder="Enter text..."
              className="flex h-10 w-full max-w-sm rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </ComponentPreview>

          <CodeBlock
            code={`<input
  type="text"
  placeholder="Enter text..."
  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
/>`}
            language="tsx"
          />

          <ComponentPreview title="With Label">
            <div className="space-y-2 max-w-sm">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
          </ComponentPreview>

          <ComponentPreview title="Disabled">
            <input
              type="text"
              placeholder="Disabled input"
              disabled
              className="flex h-10 w-full max-w-sm rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
            />
          </ComponentPreview>

          <ComponentPreview title="With Error">
            <div className="space-y-2 max-w-sm">
              <label htmlFor="error-input" className="text-sm font-medium">
                Username
              </label>
              <input
                id="error-input"
                type="text"
                className="flex h-10 w-full rounded-md border border-destructive bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-destructive"
              />
              <p className="text-sm text-destructive">Username is required</p>
            </div>
          </ComponentPreview>
        </TabsContent>

        <TabsContent value="usage" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Guidelines</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Labels</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Always provide a visible label for inputs. Labels should be concise and describe the expected input.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Placeholders</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Use placeholders to show example input, not as a replacement for labels. Placeholders disappear when typing.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Validation</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Show validation errors below the input with clear, actionable messages. Use the destructive color for error states.</p>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="api" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Props</h2>
            <p className="mb-4 text-muted-foreground">
              Input accepts all standard HTML input attributes plus custom styling classes.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-3 text-left font-medium">Prop</th>
                    <th className="py-3 text-left font-medium">Type</th>
                    <th className="py-3 text-left font-medium">Description</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">type</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Input type (text, email, password, etc.)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">placeholder</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Placeholder text</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">disabled</td>
                    <td className="py-3 font-mono">boolean</td>
                    <td className="py-3">Disable the input</td>
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
