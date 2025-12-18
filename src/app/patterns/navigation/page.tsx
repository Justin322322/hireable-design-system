import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeBlock } from "@/components/docs/code-block";

export default function NavigationPatternPage() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-3xl font-bold">Navigation</h1>
        <p className="text-lg text-muted-foreground">
          Patterns for navigation menus, breadcrumbs, and wayfinding to help users 
          move through your application.
        </p>
      </div>

      <Tabs defaultValue="types" className="space-y-8">
        <TabsList>
          <TabsTrigger value="types">Types</TabsTrigger>
          <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
        </TabsList>

        <TabsContent value="types" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Navigation Types</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Top Navigation</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Horizontal navigation at the top of the page. Best for sites with 5-7 main sections. Use for primary navigation.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Side Navigation</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Vertical navigation on the left side. Ideal for applications with many sections or deep hierarchies. Supports nested items.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Breadcrumbs</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Shows the user&apos;s location in the site hierarchy. Helps users navigate back to parent pages.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Tabs</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>For switching between views within the same context. Content changes without page navigation.</p>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="guidelines" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Best Practices</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Clear Labels</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Use clear, concise labels that describe the destination. Avoid jargon or internal terminology.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Current Location</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Always indicate the user&apos;s current location with visual highlighting (active state).</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Consistency</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Keep navigation consistent across all pages. Users should always find navigation in the same place.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Mobile Considerations</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Use hamburger menus or bottom navigation on mobile. Ensure touch targets are at least 44x44px.</p>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="examples" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Breadcrumb Example</h2>
            <Card>
              <CardContent className="py-6">
                <nav className="flex items-center space-x-2 text-sm">
                  <a href="#" className="text-muted-foreground hover:text-foreground">Home</a>
                  <span className="text-muted-foreground">/</span>
                  <a href="#" className="text-muted-foreground hover:text-foreground">Components</a>
                  <span className="text-muted-foreground">/</span>
                  <span className="text-foreground">Button</span>
                </nav>
              </CardContent>
            </Card>
          </section>

          <CodeBlock
            code={`<nav className="flex items-center space-x-2 text-sm">
  <a href="/" className="text-muted-foreground hover:text-foreground">
    Home
  </a>
  <span className="text-muted-foreground">/</span>
  <a href="/components" className="text-muted-foreground hover:text-foreground">
    Components
  </a>
  <span className="text-muted-foreground">/</span>
  <span className="text-foreground">Button</span>
</nav>`}
            language="tsx"
          />

          <section>
            <h2 className="mb-4 text-xl font-semibold">Side Navigation Example</h2>
            <Card>
              <CardContent className="py-6">
                <nav className="w-48 space-y-1">
                  <a href="#" className="block px-3 py-2 rounded-md bg-primary text-primary-foreground text-sm">
                    Dashboard
                  </a>
                  <a href="#" className="block px-3 py-2 rounded-md text-muted-foreground hover:bg-muted text-sm">
                    Projects
                  </a>
                  <a href="#" className="block px-3 py-2 rounded-md text-muted-foreground hover:bg-muted text-sm">
                    Team
                  </a>
                  <a href="#" className="block px-3 py-2 rounded-md text-muted-foreground hover:bg-muted text-sm">
                    Settings
                  </a>
                </nav>
              </CardContent>
            </Card>
          </section>
        </TabsContent>
      </Tabs>
    </div>
  );
}
