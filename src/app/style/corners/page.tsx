import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeBlock } from "@/components/docs/code-block";

const cornerRadii = [
  { name: "None", value: "0px", className: "rounded-none" },
  { name: "XS", value: "2px", className: "rounded-sm" },
  { name: "SM", value: "4px", className: "rounded" },
  { name: "MD", value: "6px", className: "rounded-md" },
  { name: "LG", value: "8px", className: "rounded-lg" },
  { name: "XL", value: "12px", className: "rounded-xl" },
  { name: "2XL", value: "16px", className: "rounded-2xl" },
  { name: "3XL", value: "24px", className: "rounded-3xl" },
  { name: "Full", value: "9999px", className: "rounded-full" },
];

export default function CornersPage() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-3xl font-bold">Corners & Roundness</h1>
        <p className="text-lg text-muted-foreground">
          Border radius values create visual softness and hierarchy. Our corner scale 
          provides consistent roundness across all components and surfaces.
        </p>
      </div>

      <Tabs defaultValue="scale" className="space-y-8">
        <TabsList>
          <TabsTrigger value="scale">Corner Scale</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="scale" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Corner Radius Scale</h2>
            <p className="mb-6 text-muted-foreground">
              The corner radius scale provides consistent values for border-radius across components.
            </p>
            <div className="space-y-4">
              {cornerRadii.map((corner) => (
                <div key={corner.name} className="flex items-center gap-4">
                  <div className="w-20 text-sm font-mono text-muted-foreground">{corner.name}</div>
                  <div className="w-16 text-sm text-muted-foreground">{corner.value}</div>
                  <div className="flex-1">
                    <div className={`h-16 w-32 bg-primary border border-border ${corner.className}`} />
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
                <CardHeader><CardTitle className="text-lg">Sharp Corners (None)</CardTitle></CardHeader>
                <CardContent className="text-muted-foreground space-y-2">
                  <p>Use for:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Dividers and separators</li>
                    <li>Minimal, technical interfaces</li>
                    <li>Grid layouts with no visual softness</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="text-lg">Small Roundness (XS - SM)</CardTitle></CardHeader>
                <CardContent className="text-muted-foreground space-y-2">
                  <p>Use for:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Badges and small UI elements</li>
                    <li>Input fields and form controls</li>
                    <li>Subtle visual softness</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="text-lg">Medium Roundness (MD - LG)</CardTitle></CardHeader>
                <CardContent className="text-muted-foreground space-y-2">
                  <p>Use for:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Buttons and interactive elements</li>
                    <li>Cards and containers</li>
                    <li>Modals and dialogs</li>
                    <li>Most UI components</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="text-lg">Large Roundness (XL - 3XL)</CardTitle></CardHeader>
                <CardContent className="text-muted-foreground space-y-2">
                  <p>Use for:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Large containers and sections</li>
                    <li>Hero sections and featured areas</li>
                    <li>Prominent visual elements</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="text-lg">Full Roundness (Full)</CardTitle></CardHeader>
                <CardContent className="text-muted-foreground space-y-2">
                  <p>Use for:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Circular avatars and profile images</li>
                    <li>Icon buttons</li>
                    <li>Pill-shaped elements</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="code" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Tailwind Classes</h2>
            <CodeBlock
              code={`// Individual corners
<div className="rounded-none">No roundness</div>
<div className="rounded-sm">2px</div>
<div className="rounded">4px</div>
<div className="rounded-md">6px</div>
<div className="rounded-lg">8px</div>
<div className="rounded-xl">12px</div>
<div className="rounded-2xl">16px</div>
<div className="rounded-3xl">24px</div>
<div className="rounded-full">Full circle</div>

// Specific corners
<div className="rounded-t-lg">Top corners only</div>
<div className="rounded-b-lg">Bottom corners only</div>
<div className="rounded-l-lg">Left corners only</div>
<div className="rounded-r-lg">Right corners only</div>

// Common component patterns
<button className="rounded-lg px-4 py-2">Button</button>
<div className="rounded-lg border p-6">Card</div>
<input className="rounded-md border px-3 py-2" />
<img className="rounded-full w-12 h-12" />`}
              language="tsx"
            />
          </section>
        </TabsContent>
      </Tabs>
    </div>
  );
}
