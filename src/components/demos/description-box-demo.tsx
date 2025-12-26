import { Card, CardContent, CardHeader, CardTitle, Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
import { CodeBlock, ComponentPreview } from "@/components/docs";
import { VERSION } from "@/lib/version";

export default function DescriptionBoxPage() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:px-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">Description Box</h1>
          <span className="text-sm text-muted-foreground">{VERSION}</span>
        </div>
        <p className="text-lg text-muted-foreground">
          A container for displaying component or feature descriptions with consistent styling.
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
                <CardTitle className="text-sm font-medium">Description</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                This component provides a consistent way to display descriptions across your application.
              </CardContent>
            </Card>
          </ComponentPreview>

          <CodeBlock
            code={`<Card>
  <CardHeader>
    <CardTitle className="text-sm font-medium">Description</CardTitle>
  </CardHeader>
  <CardContent className="text-sm text-muted-foreground">
    This component provides a consistent way to display descriptions.
  </CardContent>
</Card>`}
            language="tsx"
          />

          <ComponentPreview title="Empty State">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Description</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <span className="italic">No description provided</span>
              </CardContent>
            </Card>
          </ComponentPreview>

          <CodeBlock
            code={`<Card>
  <CardHeader>
    <CardTitle className="text-sm font-medium">Description</CardTitle>
  </CardHeader>
  <CardContent className="text-sm text-muted-foreground">
    <span className="italic">No description provided</span>
  </CardContent>
</Card>`}
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
                    <li>Use to describe components, features, or sections</li>
                    <li>Keep descriptions concise and actionable</li>
                    <li>Show empty state when no description is available</li>
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
