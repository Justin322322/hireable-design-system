"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, Tabs, TabsContent, TabsList, TabsTrigger, Textarea, Label } from "@/components/ui";
import { CodeBlock, ComponentPreview, PropsTable } from "@/components/docs";
import { VERSION } from "@/lib/version";

// Props data for API tab
const textareaProps = [
  { name: "variant", type: '"default" | "filled" | "ghost"', defaultValue: '"default"', description: "Visual variant of the textarea" },
  { name: "placeholder", type: "string", defaultValue: "-", description: "Placeholder text for the textarea" },
  { name: "disabled", type: "boolean", defaultValue: "false", description: "Whether the textarea is disabled" },
  { name: "value", type: "string", defaultValue: "-", description: "Controlled value of the textarea" },
  { name: "onChange", type: "function", defaultValue: "-", description: "Callback when value changes" },
  { name: "className", type: "string", defaultValue: "-", description: "Additional classes for the textarea" },
];

export default function DescriptionBoxDemo() {
  const [value, setValue] = useState("");

  return (
    <div className="container max-w-4xl py-12 px-4 md:px-8 overflow-hidden">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">Description Box</h1>
          <span className="text-sm text-muted-foreground">{VERSION}</span>
        </div>
        <p className="text-lg text-muted-foreground">
          A pattern for multi-line text input using the <code className="text-sm bg-muted px-1 rounded">Textarea</code> primitive with a <code className="text-sm bg-muted px-1 rounded">Label</code>.
        </p>
      </div>

      <Tabs defaultValue="examples" className="space-y-8">
        <TabsList>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
        </TabsList>

        <TabsContent value="examples" className="space-y-8">
          {/* Static States - Non-Interactive */}
          <ComponentPreview title="Static States (Non-Interactive)">
            <div className="space-y-8">
              <p className="text-sm text-muted-foreground">
                Static visual representations of the textarea states as defined in the design spec.
              </p>
              <div className="space-y-6 w-full max-w-xl mx-auto">
                {/* Enabled State */}
                <div className="space-y-2">
                  <span className="text-xs text-muted-foreground">Enabled</span>
                  <span className="block font-secondary text-sm font-semibold leading-[120%] tracking-[0.2px] text-foreground">Description</span>
                  <div className="w-full">
                    <Textarea 
                      placeholder="Write description here" 
                      className="min-h-[131px]"
                      readOnly
                    />
                  </div>
                </div>
                
                {/* Hover State */}
                <div className="space-y-2">
                  <span className="text-xs text-muted-foreground">Hover</span>
                  <span className="block font-secondary text-sm font-semibold leading-[120%] tracking-[0.2px] text-foreground">Description</span>
                  <div className="w-full">
                    <Textarea 
                      placeholder="Write description here" 
                      className="min-h-[131px] border-foreground hover:border-foreground"
                      readOnly
                    />
                  </div>
                </div>
                
                {/* Focused State */}
                <div className="space-y-2">
                  <span className="text-xs text-muted-foreground">Focused</span>
                  <span className="block font-secondary text-sm font-semibold leading-[120%] tracking-[0.2px] text-foreground">Description</span>
                  <div className="w-full">
                    <Textarea 
                      placeholder="Write description here" 
                      className="min-h-[131px] border-border-focused"
                      readOnly
                    />
                  </div>
                </div>
                
                {/* Filled State */}
                <div className="space-y-2">
                  <span className="text-xs text-muted-foreground">Filled</span>
                  <span className="block font-secondary text-sm font-semibold leading-[120%] tracking-[0.2px] text-foreground">Description</span>
                  <div className="w-full">
                    <Textarea 
                      defaultValue="Lorem Ipsum Dolor sit Amet" 
                      className="min-h-[131px]"
                      readOnly
                    />
                  </div>
                </div>
                
                {/* Disabled State */}
                <div className="space-y-2">
                  <span className="text-xs text-muted-foreground">Disabled</span>
                  <span className="block font-secondary text-sm font-semibold leading-[120%] tracking-[0.2px] text-neutral-muted">Description</span>
                  <div className="w-full">
                    <Textarea 
                      placeholder="Write description here" 
                      className="min-h-[131px] cursor-not-allowed"
                      disabled
                    />
                  </div>
                </div>
              </div>
            </div>
          </ComponentPreview>

          {/* Interactive Example */}
          <ComponentPreview title="Interactive">
            <div className="w-full max-w-xl mx-auto space-y-2">
              <Label className="font-semibold">Description</Label>
              <Textarea 
                placeholder="Write description here" 
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
          </ComponentPreview>

          <CodeBlock
            code={`import { Textarea, Label } from "@/components/ui";

<div className="space-y-2">
  <Label className="font-semibold">Description</Label>
  <Textarea placeholder="Write description here" />
</div>`}
            language="tsx"
          />
        </TabsContent>

        <TabsContent value="usage" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Pattern Composition</h2>
            <p className="text-muted-foreground mb-4">
              The Description Box is a <strong>pattern</strong>, not a single component. It combines two primitives:
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-6">
              <li><code className="text-sm bg-muted px-1 rounded">Label</code> - The label above the textarea</li>
              <li><code className="text-sm bg-muted px-1 rounded">Textarea</code> - The multi-line input field</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">When to Use</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-green-600">Do</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Use for multi-line text input like descriptions, notes, or comments</li>
                    <li>Use when you need more than a single line of text</li>
                    <li>Provide helpful placeholder text that describes expected input</li>
                    <li>Keep labels short and descriptive</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-red-600">Don&apos;t</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Don&apos;t use for single-line inputs - use Input instead</li>
                    <li>Don&apos;t hide the label without providing alternative context</li>
                    <li>Don&apos;t make the component too small to read or type comfortably</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="api" className="space-y-8">
          <PropsTable title="Textarea Props" props={textareaProps} />

          <section>
            <h2 className="mb-4 text-xl font-semibold">Import</h2>
            <CodeBlock
              code={`import { Textarea, Label } from "@/components/ui";`}
              language="tsx"
            />
          </section>
        </TabsContent>
      </Tabs>
    </div>
  );
}
