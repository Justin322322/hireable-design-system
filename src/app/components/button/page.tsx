import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { CodeBlock, ComponentPreview, PropsTable, VariantsTable } from "@/components/docs";
import { buttonProps, buttonVariants, buttonSizes } from "@/data/api/button";

const BUTTON_VERSION = "v1.1";

export default function ButtonPage() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:px-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">Button</h1>
          <span className="text-sm text-muted-foreground">{BUTTON_VERSION}</span>
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
          {/* Sizes - First */}
          <ComponentPreview title="Sizes">
            <div className="flex flex-wrap items-end gap-4">
              <div className="text-center">
                <Button size="lg">Large</Button>
                <p className="text-xs text-muted-foreground mt-2">48px</p>
              </div>
              <div className="text-center">
                <Button size="base">Base</Button>
                <p className="text-xs text-muted-foreground mt-2">44px</p>
              </div>
              <div className="text-center">
                <Button size="md">Medium</Button>
                <p className="text-xs text-muted-foreground mt-2">40px</p>
              </div>
              <div className="text-center">
                <Button size="sm">Small</Button>
                <p className="text-xs text-muted-foreground mt-2">36px</p>
              </div>
            </div>
          </ComponentPreview>

          <CodeBlock
            code={`// Sizes
<Button size="lg">Large</Button>   // 48px
<Button size="base">Base</Button>  // 44px (default)
<Button size="md">Medium</Button>  // 40px
<Button size="sm">Small</Button>   // 36px

// Icon-only sizes (circular)
<Button size="icon-lg" aria-label="Add"><Icon icon="add" size={20} /></Button>
<Button size="icon-base" aria-label="Add"><Icon icon="add" size={20} /></Button>
<Button size="icon-md" aria-label="Add"><Icon icon="add" size={20} /></Button>
<Button size="icon-sm" aria-label="Add"><Icon icon="add" size={20} /></Button>`}
            language="tsx"
          />

          {/* Primary Buttons */}
          <ComponentPreview title="Primary">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-4 items-center">
                <span className="text-xs text-muted-foreground w-12">48px</span>
                <Button variant="primary" size="lg">Enabled</Button>
                <Button variant="primary" size="lg" disabled>Disabled</Button>
                <Button variant="primary" size="lg">
                  <Icon icon="add" size={20} className="text-white" aria-hidden />
                  Icon + Text
                </Button>
                <Button variant="primary" size="icon-lg" aria-label="Add">
                  <Icon icon="add" size={20} className="text-white" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-4 items-center">
                <span className="text-xs text-muted-foreground w-12">44px</span>
                <Button variant="primary" size="base">Enabled</Button>
                <Button variant="primary" size="base" disabled>Disabled</Button>
                <Button variant="primary" size="base">
                  <Icon icon="add" size={20} className="text-white" aria-hidden />
                  Icon + Text
                </Button>
                <Button variant="primary" size="icon-base" aria-label="Add">
                  <Icon icon="add" size={20} className="text-white" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-4 items-center">
                <span className="text-xs text-muted-foreground w-12">40px</span>
                <Button variant="primary" size="md">Enabled</Button>
                <Button variant="primary" size="md" disabled>Disabled</Button>
                <Button variant="primary" size="md">
                  <Icon icon="add" size={20} className="text-white" aria-hidden />
                  Icon + Text
                </Button>
                <Button variant="primary" size="icon-md" aria-label="Add">
                  <Icon icon="add" size={20} className="text-white" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-4 items-center">
                <span className="text-xs text-muted-foreground w-12">36px</span>
                <Button variant="primary" size="sm">Enabled</Button>
                <Button variant="primary" size="sm" disabled>Disabled</Button>
                <Button variant="primary" size="sm">
                  <Icon icon="add" size={20} className="text-white" aria-hidden />
                  Icon + Text
                </Button>
                <Button variant="primary" size="icon-sm" aria-label="Add">
                  <Icon icon="add" size={20} className="text-white" />
                </Button>
              </div>
            </div>
          </ComponentPreview>

          <CodeBlock
            code={`// Primary button - text only
<Button variant="primary" size="lg">Enabled</Button>

// Primary button - with icon
<Button variant="primary" size="lg">
  <Icon icon="add" size={20} className="text-white" aria-hidden />
  Icon + Text
</Button>

// Primary button - icon only (circular)
<Button variant="primary" size="icon-lg" aria-label="Add">
  <Icon icon="add" size={20} className="text-white" />
</Button>

// Disabled state
<Button variant="primary" size="lg" disabled>Disabled</Button>`}
            language="tsx"
          />

          {/* Secondary Buttons */}
          <ComponentPreview title="Secondary">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-4 items-center">
                <span className="text-xs text-muted-foreground w-12">48px</span>
                <Button variant="secondary" size="lg">Enabled</Button>
                <Button variant="secondary" size="lg" disabled>Disabled</Button>
                <Button variant="secondary" size="lg">
                  <Icon icon="add" size={20} className="text-button-secondary-foreground" aria-hidden />
                  Icon + Text
                </Button>
                <Button variant="secondary" size="icon-lg" aria-label="Add">
                  <Icon icon="add" size={20} className="text-button-secondary-foreground" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-4 items-center">
                <span className="text-xs text-muted-foreground w-12">44px</span>
                <Button variant="secondary" size="base">Enabled</Button>
                <Button variant="secondary" size="base" disabled>Disabled</Button>
                <Button variant="secondary" size="base">
                  <Icon icon="add" size={20} className="text-button-secondary-foreground" aria-hidden />
                  Icon + Text
                </Button>
                <Button variant="secondary" size="icon-base" aria-label="Add">
                  <Icon icon="add" size={20} className="text-button-secondary-foreground" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-4 items-center">
                <span className="text-xs text-muted-foreground w-12">40px</span>
                <Button variant="secondary" size="md">Enabled</Button>
                <Button variant="secondary" size="md" disabled>Disabled</Button>
                <Button variant="secondary" size="md">
                  <Icon icon="add" size={20} className="text-button-secondary-foreground" aria-hidden />
                  Icon + Text
                </Button>
                <Button variant="secondary" size="icon-md" aria-label="Add">
                  <Icon icon="add" size={20} className="text-button-secondary-foreground" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-4 items-center">
                <span className="text-xs text-muted-foreground w-12">36px</span>
                <Button variant="secondary" size="sm">Enabled</Button>
                <Button variant="secondary" size="sm" disabled>Disabled</Button>
                <Button variant="secondary" size="sm">
                  <Icon icon="add" size={20} className="text-button-secondary-foreground" aria-hidden />
                  Icon + Text
                </Button>
                <Button variant="secondary" size="icon-sm" aria-label="Add">
                  <Icon icon="add" size={20} className="text-button-secondary-foreground" />
                </Button>
              </div>
            </div>
          </ComponentPreview>

          <CodeBlock
            code={`// Secondary button - text only
<Button variant="secondary" size="lg">Enabled</Button>

// Secondary button - with icon
<Button variant="secondary" size="lg">
  <Icon icon="add" size={20} className="text-button-secondary-foreground" aria-hidden />
  Icon + Text
</Button>

// Secondary button - icon only (circular)
<Button variant="secondary" size="icon-lg" aria-label="Add">
  <Icon icon="add" size={20} className="text-button-secondary-foreground" />
</Button>`}
            language="tsx"
          />

          {/* Tertiary Buttons */}
          <ComponentPreview title="Tertiary">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-4 items-center">
                <span className="text-xs text-muted-foreground w-12">48px</span>
                <Button variant="tertiary" size="lg">Enabled</Button>
                <Button variant="tertiary" size="lg" disabled>Disabled</Button>
                <Button variant="tertiary" size="lg">
                  <Icon icon="add" size={20} aria-hidden />
                  Icon + Text
                </Button>
                <Button variant="tertiary" size="icon-lg" aria-label="Add">
                  <Icon icon="add" size={20} />
                </Button>
              </div>
              <div className="flex flex-wrap gap-4 items-center">
                <span className="text-xs text-muted-foreground w-12">44px</span>
                <Button variant="tertiary" size="base">Enabled</Button>
                <Button variant="tertiary" size="base" disabled>Disabled</Button>
                <Button variant="tertiary" size="base">
                  <Icon icon="add" size={20} aria-hidden />
                  Icon + Text
                </Button>
                <Button variant="tertiary" size="icon-base" aria-label="Add">
                  <Icon icon="add" size={20} />
                </Button>
              </div>
              <div className="flex flex-wrap gap-4 items-center">
                <span className="text-xs text-muted-foreground w-12">40px</span>
                <Button variant="tertiary" size="md">Enabled</Button>
                <Button variant="tertiary" size="md" disabled>Disabled</Button>
                <Button variant="tertiary" size="md">
                  <Icon icon="add" size={20} aria-hidden />
                  Icon + Text
                </Button>
                <Button variant="tertiary" size="icon-md" aria-label="Add">
                  <Icon icon="add" size={20} />
                </Button>
              </div>
              <div className="flex flex-wrap gap-4 items-center">
                <span className="text-xs text-muted-foreground w-12">36px</span>
                <Button variant="tertiary" size="sm">Enabled</Button>
                <Button variant="tertiary" size="sm" disabled>Disabled</Button>
                <Button variant="tertiary" size="sm">
                  <Icon icon="add" size={20} aria-hidden />
                  Icon + Text
                </Button>
                <Button variant="tertiary" size="icon-sm" aria-label="Add">
                  <Icon icon="add" size={20} />
                </Button>
              </div>
            </div>
          </ComponentPreview>

          <CodeBlock
            code={`// Tertiary button - text only
<Button variant="tertiary" size="lg">Enabled</Button>

// Tertiary button - with icon (uses default text-icon color)
<Button variant="tertiary" size="lg">
  <Icon icon="add" size={20} aria-hidden />
  Icon + Text
</Button>

// Tertiary button - icon only (circular)
<Button variant="tertiary" size="icon-lg" aria-label="Add">
  <Icon icon="add" size={20} />
</Button>`}
            language="tsx"
          />

          {/* Other Variants */}
          <ComponentPreview title="Other Variants">
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="destructive">Destructive</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </ComponentPreview>

          <CodeBlock
            code={`<Button variant="destructive">Destructive</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`}
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
                    <li>Use <strong>Primary</strong> buttons for the main action on a page</li>
                    <li>Use <strong>Secondary</strong> buttons for important but secondary actions</li>
                    <li>Use <strong>Tertiary</strong> buttons for low-emphasis actions</li>
                    <li>Use destructive buttons for delete or remove actions</li>
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
