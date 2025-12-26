import { Card, CardContent, CardHeader, CardTitle, Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
import { CodeBlock, ComponentPreview } from "@/components/docs";
import { VERSION } from "@/lib/version";

export default function FieldNotesPage() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:px-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">Field Notes</h1>
          <span className="text-sm text-muted-foreground">{VERSION}</span>
        </div>
        <p className="text-lg text-muted-foreground">
          Contextual notes and annotations for form fields and components.
        </p>
      </div>

      <Tabs defaultValue="examples" className="space-y-8">
        <TabsList>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
        </TabsList>

        <TabsContent value="examples" className="space-y-8">
          <ComponentPreview title="Default">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Field Notes</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Additional context or instructions for this field. Use this to provide helpful guidance.
              </CardContent>
            </Card>
          </ComponentPreview>

          <CodeBlock
            code={`<Card>
  <CardHeader>
    <CardTitle className="text-sm font-medium">Field Notes</CardTitle>
  </CardHeader>
  <CardContent className="text-sm text-muted-foreground">
    Additional context or instructions for this field.
  </CardContent>
</Card>`}
            language="tsx"
          />

          <ComponentPreview title="Empty State">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Field Notes</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <span className="italic">No field notes</span>
              </CardContent>
            </Card>
          </ComponentPreview>

          <CodeBlock
            code={`<Card>
  <CardHeader>
    <CardTitle className="text-sm font-medium">Field Notes</CardTitle>
  </CardHeader>
  <CardContent className="text-sm text-muted-foreground">
    <span className="italic">No field notes</span>
  </CardContent>
</Card>`}
            language="tsx"
          />

          <ComponentPreview title="With Form Field">
            <div className="space-y-4 max-w-sm">
              <div className="space-y-2">
                <label htmlFor="username" className="text-sm font-medium">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  placeholder="Enter username"
                  className="flex h-11 w-full rounded-lg border border-input bg-background px-4 py-3 font-secondary text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-border-focused"
                />
              </div>
              <Card className="bg-muted/30">
                <CardContent className="pt-4 text-xs text-muted-foreground">
                  <p className="font-medium mb-1">Field Notes</p>
                  <p>Username must be 3-20 characters and can only contain letters, numbers, and underscores.</p>
                </CardContent>
              </Card>
            </div>
          </ComponentPreview>

          <CodeBlock
            code={`<div className="space-y-4">
  <div className="space-y-2">
    <label htmlFor="username" className="text-sm font-medium">
      Username
    </label>
    <input
      id="username"
      type="text"
      placeholder="Enter username"
      className="flex h-11 w-full rounded-lg border border-input bg-background px-4 py-3 font-secondary text-sm"
    />
  </div>
  <Card className="bg-muted/30">
    <CardContent className="pt-4 text-xs text-muted-foreground">
      <p className="font-medium mb-1">Field Notes</p>
      <p>Username must be 3-20 characters and can only contain letters, numbers, and underscores.</p>
    </CardContent>
  </Card>
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
                    <li>Use to provide additional context for form fields</li>
                    <li>Include validation requirements or format hints</li>
                    <li>Keep notes brief and scannable</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-red-600">Don&apos;t</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Don&apos;t use for critical error messages</li>
                    <li>Don&apos;t repeat information already in the label</li>
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
