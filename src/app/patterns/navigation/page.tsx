import { Tabs, TabsContent, TabsList, TabsTrigger, Card, CardContent, CardHeader, CardTitle } from "@/components/ui";

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
                <nav className="w-56 space-y-1">
                  <a href="#" className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-normal tracking-wide bg-secondary text-foreground">
                    <svg className="h-5 w-5 shrink-0 text-client" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                    <span>Dashboard</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-normal tracking-wide text-muted-foreground hover:bg-secondary hover:text-foreground">
                    <svg className="h-5 w-5 shrink-0 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
                    <span>Projects</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-normal tracking-wide text-muted-foreground hover:bg-secondary hover:text-foreground">
                    <svg className="h-5 w-5 shrink-0 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                    <span>Team</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-normal tracking-wide text-muted-foreground hover:bg-secondary hover:text-foreground">
                    <svg className="h-5 w-5 shrink-0 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <span>Settings</span>
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
