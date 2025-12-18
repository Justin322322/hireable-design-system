import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeBlock } from "@/components/docs/code-block";

const iconSizes = [
  { name: "xs", size: "12px", className: "h-3 w-3" },
  { name: "sm", size: "16px", className: "h-4 w-4" },
  { name: "md", size: "20px", className: "h-5 w-5" },
  { name: "lg", size: "24px", className: "h-6 w-6" },
  { name: "xl", size: "32px", className: "h-8 w-8" },
];

const SampleIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
);

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const AlertIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

const SearchIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

export default function IconsPage() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-3xl font-bold">Icons</h1>
        <p className="text-lg text-muted-foreground">
          Icons communicate meaning quickly and reinforce actions. Use them consistently 
          to improve usability and visual hierarchy.
        </p>
      </div>

      <Tabs defaultValue="sizing" className="space-y-8">
        <TabsList>
          <TabsTrigger value="sizing">Sizing</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="sizing" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Icon Sizes</h2>
            <p className="mb-6 text-muted-foreground">
              Use consistent icon sizes that align with the spacing scale.
            </p>
            <div className="space-y-4">
              {iconSizes.map((icon) => (
                <Card key={icon.name}>
                  <CardContent className="flex items-center gap-6 py-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                      <SampleIcon className={icon.className} />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{icon.name}</p>
                      <p className="text-sm text-muted-foreground">{icon.size}</p>
                    </div>
                    <code className="text-sm bg-muted px-2 py-1 rounded">{icon.className}</code>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Sample Icons</h2>
            <Card>
              <CardContent className="py-6">
                <div className="flex flex-wrap gap-6">
                  {[SampleIcon, CheckIcon, AlertIcon, SearchIcon].map((Icon, i) => (
                    <div key={i} className="flex flex-col items-center gap-2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        </TabsContent>

        <TabsContent value="usage" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Usage Guidelines</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Pairing with Text</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground space-y-3">
                  <p>When pairing icons with text, use these size combinations:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Small text (14px): 16px icons (h-4 w-4)</li>
                    <li>Body text (16px): 20px icons (h-5 w-5)</li>
                    <li>Large text (18px+): 24px icons (h-6 w-6)</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Stroke Width</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Use a consistent stroke width of 2px for all icons. This ensures visual consistency across the interface.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Color</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Icons inherit the current text color by default. Use <code className="text-sm bg-muted px-1 rounded">currentColor</code> for stroke/fill to ensure proper theming.</p>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="accessibility" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Accessibility</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Decorative Icons</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Icons that are purely decorative (paired with text) should be hidden from screen readers:</p>
                  <code className="block mt-2 text-sm bg-muted px-2 py-1 rounded">aria-hidden=&quot;true&quot;</code>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Meaningful Icons</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Icons that convey meaning without text need accessible labels:</p>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Use <code className="text-sm bg-muted px-1 rounded">aria-label</code> on the icon or button</li>
                    <li>Or use visually hidden text alongside the icon</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Focus States</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Interactive icons (buttons) must have visible focus indicators that meet WCAG 2.1 requirements.</p>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="code" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Implementation</h2>
            <CodeBlock
              code={`// Inline SVG icon
<svg 
  className="h-5 w-5" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
  aria-hidden="true"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M12 6v6m0 0v6m0-6h6m-6 0H6" 
  />
</svg>`}
              language="tsx"
            />
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Icon Button</h2>
            <CodeBlock
              code={`import { Button } from "@/components/ui/button";

// Icon-only button with accessible label
<Button size="icon" aria-label="Add item">
  <PlusIcon className="h-4 w-4" />
</Button>

// Icon with text
<Button>
  <PlusIcon className="h-4 w-4 mr-2" aria-hidden="true" />
  Add Item
</Button>`}
              language="tsx"
            />
          </section>
        </TabsContent>
      </Tabs>
    </div>
  );
}
