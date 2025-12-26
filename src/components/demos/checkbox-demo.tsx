import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Checkbox,
  Label,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Toggle,
} from "@/components/ui";


import { CodeBlock, ComponentPreview, PropsTable, VariantsTable } from "@/components/docs";
import { checkboxProps, checkboxSizes, checkboxStates } from "@/data/api/checkbox";
import { VERSION } from "@/lib/version";
export default function CheckboxPage() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:px-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">Checkbox</h1>
          <span className="text-sm text-muted-foreground">{VERSION}</span>
        </div>
        <p className="text-lg text-muted-foreground">
          Checkboxes allow users to select one or more items from a set, or toggle a single option on/off.
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
          {/* Sizes */}
          <ComponentPreview title="Sizes">
            <div className="flex items-center gap-8">
              <div className="flex flex-col items-center gap-2">
                <Checkbox size="sm" />
                <p className="text-xs text-muted-foreground">Small (16px)</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Checkbox size="md" />
                <p className="text-xs text-muted-foreground">Medium (24px)</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Checkbox size="lg" />
                <p className="text-xs text-muted-foreground">Large (28px)</p>
              </div>
            </div>
          </ComponentPreview>
          <CodeBlock
            code={`import { Checkbox } from "@/components/ui";

// Sizes
<Checkbox size="sm" />  // 16px (default)
<Checkbox size="md" />  // 24px
<Checkbox size="lg" />  // 28px`}
            language="tsx"
          />
          {/* States - Small */}
          <ComponentPreview title="States (Small)">
            <div className="flex items-center gap-8">
              <div className="flex flex-col items-center gap-2">
                <Checkbox size="sm" />
                <p className="text-xs text-muted-foreground">Idle</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Checkbox size="sm" checked />
                <p className="text-xs text-muted-foreground">Active</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Checkbox size="sm" checked disabled />
                <p className="text-xs text-muted-foreground">Disabled</p>
              </div>
            </div>
          </ComponentPreview>
          {/* States - Medium */}
          <ComponentPreview title="States (Medium)">
            <div className="flex items-center gap-8">
              <div className="flex flex-col items-center gap-2">
                <Checkbox size="md" />
                <p className="text-xs text-muted-foreground">Idle</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Checkbox size="md" checked />
                <p className="text-xs text-muted-foreground">Active</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Checkbox size="md" checked disabled />
                <p className="text-xs text-muted-foreground">Disabled</p>
              </div>
            </div>
          </ComponentPreview>
          {/* States - Large */}
          <ComponentPreview title="States (Large)">
            <div className="flex items-center gap-8">
              <div className="flex flex-col items-center gap-2">
                <Checkbox size="lg" />
                <p className="text-xs text-muted-foreground">Idle</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Checkbox size="lg" checked />
                <p className="text-xs text-muted-foreground">Active</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Checkbox size="lg" checked disabled />
                <p className="text-xs text-muted-foreground">Disabled</p>
              </div>
            </div>
          </ComponentPreview>
          <CodeBlock
            code={`import { Checkbox } from "@/components/ui";

// States
<Checkbox size="sm" />                 // Idle
<Checkbox size="sm" checked />         // Active (checked)
<Checkbox size="sm" checked disabled /> // Disabled`}
            language="tsx"
          />
          {/* With Label - Small */}
          <ComponentPreview title="With Label (Small)">
            <div className="flex flex-col gap-4">
              <Checkbox size="sm" label="Title text goes here" />
              <Checkbox size="sm" label="Title text goes here" checked />
              <Checkbox size="sm" label="Title text goes here" checked disabled />
            </div>
          </ComponentPreview>
          {/* With Label - Medium */}
          <ComponentPreview title="With Label (Medium)">
            <div className="flex flex-col gap-4">
              <Checkbox size="md" label="Title text goes here" />
              <Checkbox size="md" label="Title text goes here" checked />
              <Checkbox size="md" label="Title text goes here" checked disabled />
            </div>
          </ComponentPreview>
          {/* With Label - Large */}
          <ComponentPreview title="With Label (Large)">
            <div className="flex flex-col gap-4">
              <Checkbox size="lg" label="Title text goes here" />
              <Checkbox size="lg" label="Title text goes here" checked />
              <Checkbox size="lg" label="Title text goes here" checked disabled />
            </div>
          </ComponentPreview>
          <CodeBlock
            code={`import { Checkbox } from "@/components/ui";

// With label
<Checkbox size="sm" label="Title text goes here" />
<Checkbox size="md" label="Title text goes here" />
<Checkbox size="lg" label="Title text goes here" />
// With label - checked
<Checkbox size="md" label="Title text goes here" checked />
// With label - disabled
<Checkbox size="md" label="Title text goes here" checked disabled />`}
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
                    <li>Use checkboxes for multiple selections from a list</li>
                    <li>Use for binary choices (on/off, yes/no)</li>
                    <li>Use when users need to see all available options</li>
                    <li>Group related checkboxes together</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-red-600">Don&apos;t</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Don&apos;t use checkboxes for mutually exclusive options (use radio buttons)</li>
                    <li>Don&apos;t use for actions that take immediate effect (use toggle/switch)</li>
                    <li>Don&apos;t use without a label unless the context is very clear</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>
        <TabsContent value="api" className="space-y-8">
          <PropsTable title="Props" props={checkboxProps} />
          <VariantsTable title="Sizes" variants={checkboxSizes} />
          <VariantsTable title="States" variants={checkboxStates} />
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
                    <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Tab</kbd> - Move focus to the checkbox</li>
                    <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Space</kbd> - Toggle the checkbox state</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">ARIA</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Uses native <code className="text-sm bg-muted px-1 rounded">&lt;input type=&quot;checkbox&quot;&gt;</code> element</li>
                    <li>Disabled state is conveyed via <code className="text-sm bg-muted px-1 rounded">disabled</code> attribute</li>
                    <li>Label is associated with the checkbox via wrapping <code className="text-sm bg-muted px-1 rounded">&lt;label&gt;</code></li>
                    <li>Checked state is conveyed via <code className="text-sm bg-muted px-1 rounded">checked</code> attribute</li>
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
