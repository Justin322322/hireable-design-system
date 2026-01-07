import { Tabs, TabsContent, TabsList, TabsTrigger, Card, CardContent, CardHeader, CardTitle, Button } from "@/components/ui";


import { CodeBlock } from "@/components/docs/code-block";
import { ComponentPreview } from "@/components/docs/component-preview";

export default function FormsPatternPage() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-3xl font-bold">Forms</h1>
        <p className="text-lg text-muted-foreground">
          Best practices for form layout, validation, and error handling to create 
          accessible and user-friendly forms.
        </p>
      </div>

      <Tabs defaultValue="layout" className="space-y-8">
        <TabsList>
          <TabsTrigger value="layout">Layout</TabsTrigger>
          <TabsTrigger value="validation">Validation</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
        </TabsList>

        <TabsContent value="layout" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Form Layout Guidelines</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Single Column</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">Use single-column layouts for most forms. They&apos;re easier to scan and complete.</p>
                  <div className="rounded-lg border bg-neutral-50 p-4">
                    <div className="space-y-3 max-w-xs">
                      <div className="space-y-1">
                        <div className="h-3 w-16 bg-neutral-300 rounded" />
                        <div className="h-9 w-full bg-background border border-neutral-200 rounded-md" />
                      </div>
                      <div className="space-y-1">
                        <div className="h-3 w-12 bg-neutral-300 rounded" />
                        <div className="h-9 w-full bg-background border border-neutral-200 rounded-md" />
                      </div>
                      <div className="space-y-1">
                        <div className="h-3 w-20 bg-neutral-300 rounded" />
                        <div className="h-9 w-full bg-background border border-neutral-200 rounded-md" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Label Placement</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">Place labels above inputs for better readability. Left-aligned labels work well for longer forms.</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg border bg-neutral-50 p-4">
                      <p className="text-xs font-medium text-green-600 mb-2">✓ Recommended</p>
                      <div className="space-y-1">
                        <div className="h-3 w-12 bg-neutral-400 rounded" />
                        <div className="h-8 w-full bg-background border border-neutral-200 rounded-md" />
                      </div>
                    </div>
                    <div className="rounded-lg border bg-neutral-50 p-4">
                      <p className="text-xs font-medium text-neutral-500 mb-2">Alternative</p>
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-12 bg-neutral-300 rounded shrink-0" />
                        <div className="h-8 flex-1 bg-background border border-neutral-200 rounded-md" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Grouping</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">Group related fields together using fieldsets or visual spacing. This helps users understand the form structure.</p>
                  <div className="rounded-lg border bg-neutral-50 p-4">
                    <div className="space-y-4 max-w-sm">
                      <div className="space-y-2">
                        <p className="text-xs font-semibold text-neutral-600">Personal Info</p>
                        <div className="space-y-2 pl-2 border-l-2 border-blue-200">
                          <div className="h-8 w-full bg-background border border-neutral-200 rounded-md" />
                          <div className="h-8 w-full bg-background border border-neutral-200 rounded-md" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-xs font-semibold text-neutral-600">Contact</p>
                        <div className="space-y-2 pl-2 border-l-2 border-blue-200">
                          <div className="h-8 w-full bg-background border border-neutral-200 rounded-md" />
                          <div className="h-8 w-full bg-background border border-neutral-200 rounded-md" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Button Placement</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">Place primary actions on the left, aligned with form fields. Secondary actions (Cancel) go to the right of primary.</p>
                  <div className="rounded-lg border bg-neutral-50 p-4">
                    <div className="space-y-3 max-w-xs">
                      <div className="h-8 w-full bg-background border border-neutral-200 rounded-md" />
                      <div className="h-8 w-full bg-background border border-neutral-200 rounded-md" />
                      <div className="flex gap-2 pt-2">
                        <div className="h-9 w-20 bg-button-primary-default rounded-md flex items-center justify-center">
                          <span className="text-xs text-white font-medium">Submit</span>
                        </div>
                        <div className="h-9 w-20 bg-background border border-neutral-300 rounded-md flex items-center justify-center">
                          <span className="text-xs text-neutral-600 font-medium">Cancel</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="validation" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Validation Guidelines</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Inline Validation</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Validate fields on blur (when user leaves the field). Show errors immediately below the field.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Error Messages</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Be specific about what went wrong</li>
                    <li>Explain how to fix the error</li>
                    <li>Use plain language, not error codes</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Required Fields</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Mark required fields with an asterisk (*) or indicate optional fields. Be consistent throughout the form.</p>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="examples" className="space-y-8">
          <ComponentPreview title="Basic Form">
            <form className="space-y-4 max-w-md">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name <span className="text-destructive">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  placeholder="Enter your name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email <span className="text-destructive">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  placeholder="you@example.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  placeholder="Your message..."
                />
              </div>
              <div className="flex gap-2">
                <Button type="submit">Submit</Button>
                <Button type="button" variant="outline">Cancel</Button>
              </div>
            </form>
          </ComponentPreview>

          <CodeBlock
            code={`<form className="space-y-4">
  <div className="space-y-2">
    <label htmlFor="name" className="text-sm font-medium">
      Name <span className="text-destructive">*</span>
    </label>
    <input
      id="name"
      type="text"
      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
    />
  </div>
  
  <div className="space-y-2">
    <label htmlFor="email" className="text-sm font-medium">
      Email <span className="text-destructive">*</span>
    </label>
    <input
      id="email"
      type="email"
      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
    />
  </div>
  
  <div className="flex gap-2">
    <Button type="submit">Submit</Button>
    <Button type="button" variant="outline">Cancel</Button>
  </div>
</form>`}
            language="tsx"
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
