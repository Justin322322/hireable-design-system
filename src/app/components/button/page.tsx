import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CodeBlock, ComponentPreview, PropsTable, VariantsTable } from "@/components/docs";
import { buttonProps, buttonVariants, buttonSizes } from "@/data/api/button";
import { VERSION } from "@/lib/version";

export default function ButtonPage() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:px-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">Button</h1>
          <span className="text-sm text-muted-foreground">{VERSION}</span>
        </div>
        <p className="text-lg text-muted-foreground">
          Buttons trigger actions and events. Use different variants to indicate 
          hierarchy and importance.
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
          <ComponentPreview title="Variants">
            <div className="flex flex-wrap gap-4">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
          </ComponentPreview>

          <CodeBlock
            code={`<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button variant="destructive">Destructive</Button>`}
            language="tsx"
          />

          <ComponentPreview title="Sizes">
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </div>
          </ComponentPreview>

          <CodeBlock
            code={`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>`}
            language="tsx"
          />

          <CodeBlock
            code={`<Button>Primary</Button>
<Button className="hover:bg-[#0085C6]">Hover</Button>
<Button className="bg-[#006593] hover:bg-[#006593]">Active</Button>
<Button disabled>Disabled</Button>`}
            language="tsx"
          />

          <ComponentPreview title="States">
            <div className="flex flex-wrap gap-4">
              <Button>Primary</Button>
              <Button className="hover:bg-[#0085C6]">Hover</Button>
              <Button className="bg-[#006593] hover:bg-[#006593]">Active</Button>
              <Button disabled>Disabled</Button>
            </div>
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
                    <li>Use primary buttons for the main action on a page</li>
                    <li>Use secondary buttons for less important actions</li>
                    <li>Use destructive buttons for delete or remove actions</li>
                    <li>Keep button labels concise and action-oriented</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-red-600">Don&apos;t</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Don&apos;t use multiple primary buttons in the same area</li>
                    <li>Don&apos;t use buttons for navigation (use links instead)</li>
                    <li>Don&apos;t disable buttons without explanation</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="api" className="space-y-8">
          <PropsTable title="Props" props={buttonProps} />
          <VariantsTable title="Variants" variants={buttonVariants} />
          <VariantsTable title="Sizes" variants={buttonSizes} />
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
                    <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Tab</kbd> - Move focus to the button</li>
                    <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Enter</kbd> or <kbd className="px-2 py-1 bg-muted rounded text-xs">Space</kbd> - Activate the button</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">ARIA</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Uses native <code className="text-sm bg-muted px-1 rounded">&lt;button&gt;</code> element</li>
                    <li>Disabled state is conveyed via <code className="text-sm bg-muted px-1 rounded">disabled</code> attribute</li>
                    <li>Icon-only buttons should include <code className="text-sm bg-muted px-1 rounded">aria-label</code></li>
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
