import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/docs/code-block";
import { ComponentPreview } from "@/components/docs/component-preview";

export default function CardPage() {
  return (
    <div className="container max-w-4xl py-12 px-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">Card</h1>
          <Badge>Stable</Badge>
        </div>
        <p className="text-lg text-muted-foreground">
          Cards group related content and actions. Use them to create visual hierarchy and organize information.
        </p>
      </div>

      <Tabs defaultValue="examples" className="space-y-8">
        <TabsList>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
        </TabsList>

        <TabsContent value="examples" className="space-y-8">
          <ComponentPreview title="Basic Card">
            <Card className="w-[350px]">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card description goes here.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card content with any elements you need.</p>
              </CardContent>
              <CardFooter>
                <Button>Action</Button>
              </CardFooter>
            </Card>
          </ComponentPreview>

          <CodeBlock
            code={`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content with any elements you need.</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`}
            language="tsx"
          />

          <ComponentPreview title="Simple Card">
            <Card className="w-[350px]">
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Push notifications</span>
                  <Badge variant="secondary">On</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Email notifications</span>
                  <Badge variant="outline">Off</Badge>
                </div>
              </CardContent>
            </Card>
          </ComponentPreview>
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
                    <li>Group related content together</li>
                    <li>Create visual separation between sections</li>
                    <li>Display items in a grid or list</li>
                    <li>Contain forms or interactive elements</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-red-600">Don&apos;t</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Nest cards within cards</li>
                    <li>Use cards for single pieces of text</li>
                    <li>Overload cards with too much content</li>
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
                    <td className="py-3 font-mono text-foreground">Card</td>
                    <td className="py-3">Container element</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">CardHeader</td>
                    <td className="py-3">Header section with title and description</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">CardTitle</td>
                    <td className="py-3">Title text</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">CardDescription</td>
                    <td className="py-3">Subtitle or description text</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">CardContent</td>
                    <td className="py-3">Main content area</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">CardFooter</td>
                    <td className="py-3">Footer with actions</td>
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
