import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeBlock } from "@/components/docs/code-block";

const spacingScale = [
  { name: "0", value: "0px", className: "w-0" },
  { name: "1", value: "4px", className: "w-1" },
  { name: "2", value: "8px", className: "w-2" },
  { name: "3", value: "12px", className: "w-3" },
  { name: "4", value: "16px", className: "w-4" },
  { name: "5", value: "20px", className: "w-5" },
  { name: "6", value: "24px", className: "w-6" },
  { name: "8", value: "32px", className: "w-8" },
  { name: "10", value: "40px", className: "w-10" },
  { name: "12", value: "48px", className: "w-12" },
  { name: "16", value: "64px", className: "w-16" },
  { name: "20", value: "80px", className: "w-20" },
  { name: "24", value: "96px", className: "w-24" },
];

export default function SpacingPage() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-3xl font-bold">Spacing</h1>
        <p className="text-lg text-muted-foreground">
          Consistent spacing creates visual rhythm and hierarchy. Our spacing scale 
          is based on a 4px base unit for precise alignment.
        </p>
      </div>

      <Tabs defaultValue="scale" className="space-y-8">
        <TabsList>
          <TabsTrigger value="scale">Spacing Scale</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="scale" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Spacing Scale</h2>
            <p className="mb-6 text-muted-foreground">
              The spacing scale provides consistent values for margins, padding, and gaps.
            </p>
            <div className="space-y-3">
              {spacingScale.map((space) => (
                <div key={space.name} className="flex items-center gap-4">
                  <div className="w-16 text-sm font-mono text-muted-foreground">
                    {space.name}
                  </div>
                  <div className="w-16 text-sm text-muted-foreground">
                    {space.value}
                  </div>
                  <div className="flex-1">
                    <div className={`h-4 bg-primary rounded ${space.className}`} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </TabsContent>

        <TabsContent value="usage" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Usage Guidelines</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Component Spacing</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground space-y-2">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Use <code className="text-sm bg-muted px-1 rounded">gap-4</code> (16px) for spacing between related elements</li>
                    <li>Use <code className="text-sm bg-muted px-1 rounded">gap-6</code> (24px) for spacing between sections</li>
                    <li>Use <code className="text-sm bg-muted px-1 rounded">gap-8</code> (32px) or more for major section breaks</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Padding</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground space-y-2">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Buttons: <code className="text-sm bg-muted px-1 rounded">px-4 py-2</code></li>
                    <li>Cards: <code className="text-sm bg-muted px-1 rounded">p-6</code></li>
                    <li>Containers: <code className="text-sm bg-muted px-1 rounded">px-4</code> to <code className="text-sm bg-muted px-1 rounded">px-8</code></li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Layout</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Use consistent spacing throughout layouts. Avoid mixing arbitrary values—stick to the scale.</p>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="code" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Tailwind Classes</h2>
            <CodeBlock
              code={`// Margin
<div className="m-4">All sides</div>
<div className="mx-4">Horizontal</div>
<div className="my-4">Vertical</div>
<div className="mt-4 mb-8">Top and bottom</div>

// Padding
<div className="p-6">All sides</div>
<div className="px-4 py-2">Horizontal and vertical</div>

// Gap (for flex/grid)
<div className="flex gap-4">...</div>
<div className="grid gap-6">...</div>

// Space between children
<div className="space-y-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>`}
              language="tsx"
            />
          </section>
        </TabsContent>
      </Tabs>
    </div>
  );
}
