import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { CodeBlock, ComponentPreview, PropsTable, VariantsTable } from "@/components/docs";
import { breadcrumbProps, breadcrumbItemProps, breadcrumbVariants, breadcrumbSeparators } from "@/data/api/breadcrumb";
import { VERSION } from "@/lib/version";

export default function BreadcrumbPage() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:px-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">Breadcrumb</h1>
          <span className="text-sm text-muted-foreground">{VERSION}</span>
        </div>
        <p className="text-lg text-muted-foreground">
          Breadcrumbs show the user&apos;s current location within a site hierarchy and allow navigation to parent pages.
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
          {/* One Item */}
          <ComponentPreview title="One Item">
            <Breadcrumb items={[{ label: "Home" }]} />
          </ComponentPreview>

          {/* Two Items */}
          <ComponentPreview title="Two Items">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Components" },
              ]}
            />
          </ComponentPreview>

          {/* Three Items */}
          <ComponentPreview title="Three Items">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Components", href: "/components" },
                { label: "Breadcrumb" },
              ]}
            />
          </ComponentPreview>

          <CodeBlock
            code={`// One item
<Breadcrumb items={[{ label: "Home" }]} />

// Two items
<Breadcrumb
  items={[
    { label: "Home", href: "/" },
    { label: "Components" },
  ]}
/>

// Three items
<Breadcrumb
  items={[
    { label: "Home", href: "/" },
    { label: "Components", href: "/components" },
    { label: "Breadcrumb" },
  ]}
/>`}
            language="tsx"
          />

          {/* Multiple Items with Collapse */}
          <ComponentPreview title="Multiple Items (Collapsed)">
            <Breadcrumb
              maxItems={3}
              items={[
                { label: "Home", href: "/" },
                { label: "Components", href: "/components" },
                { label: "Navigation", href: "/components/navigation" },
                { label: "Breadcrumb", href: "/components/breadcrumb" },
                { label: "Examples" },
              ]}
            />
          </ComponentPreview>

          <CodeBlock
            code={`// Multiple items with collapse
<Breadcrumb
  maxItems={3}
  items={[
    { label: "Home", href: "/" },
    { label: "Components", href: "/components" },
    { label: "Navigation", href: "/components/navigation" },
    { label: "Breadcrumb", href: "/components/breadcrumb" },
    { label: "Examples" },
  ]}
/>`}
            language="tsx"
          />

          {/* Separator Variants */}
          <ComponentPreview title="Separator Variants">
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <span className="text-xs text-muted-foreground">Chevron (default)</span>
                <Breadcrumb
                  separator="chevron"
                  items={[
                    { label: "Home", href: "/" },
                    { label: "Components", href: "/components" },
                    { label: "Breadcrumb" },
                  ]}
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xs text-muted-foreground">Slash</span>
                <Breadcrumb
                  separator="slash"
                  items={[
                    { label: "Home", href: "/" },
                    { label: "Components", href: "/components" },
                    { label: "Breadcrumb" },
                  ]}
                />
              </div>
            </div>
          </ComponentPreview>

          <CodeBlock
            code={`// Chevron separator (default)
<Breadcrumb
  separator="chevron"
  items={[...]}
/>

// Slash separator
<Breadcrumb
  separator="slash"
  items={[...]}
/>`}
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
                    <li>Use breadcrumbs for sites with hierarchical navigation</li>
                    <li>Place breadcrumbs at the top of the page, below the header</li>
                    <li>Keep labels short and descriptive</li>
                    <li>Use collapse for deep hierarchies (more than 4 levels)</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-danger">Don&apos;t</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Don&apos;t use breadcrumbs for flat site structures</li>
                    <li>Don&apos;t make the current page a link</li>
                    <li>Don&apos;t use breadcrumbs as the primary navigation</li>
                    <li>Don&apos;t include the current page in the breadcrumb if space is limited</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="api" className="space-y-8">
          <PropsTable title="Breadcrumb Props" props={breadcrumbProps} />
          <PropsTable title="BreadcrumbItem Props" props={breadcrumbItemProps} />
          <VariantsTable title="Variants" variants={breadcrumbVariants} />
          <VariantsTable title="Separators" variants={breadcrumbSeparators} />
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
                    <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Tab</kbd> - Move focus between breadcrumb links</li>
                    <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Enter</kbd> - Activate the focused link</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">ARIA</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Uses <code className="text-sm bg-muted px-1 rounded">&lt;nav&gt;</code> element with <code className="text-sm bg-muted px-1 rounded">aria-label=&quot;Breadcrumb&quot;</code></li>
                    <li>Current page has <code className="text-sm bg-muted px-1 rounded">aria-current=&quot;page&quot;</code></li>
                    <li>Separators are hidden from screen readers with <code className="text-sm bg-muted px-1 rounded">aria-hidden=&quot;true&quot;</code></li>
                    <li>Uses semantic <code className="text-sm bg-muted px-1 rounded">&lt;ol&gt;</code> list structure</li>
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
