"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  RadioGroup,
  RadioGroupItem,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui";

import { CodeBlock, ComponentPreview, PropsTable, VariantsTable } from "@/components/docs";
import { radioGroupProps, radioGroupItemProps, radioSizes, radioStates } from "@/data/api/radio-group";
import { VERSION } from "@/lib/version";
export default function RadioButtonPage() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:px-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">Radio Button</h1>
          <span className="text-sm text-muted-foreground">{VERSION}</span>
        </div>
        <p className="text-lg text-muted-foreground">
          Radio buttons allow users to select a single option from a set of mutually exclusive choices.
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
          {/* Static Examples */}
          <ComponentPreview title="Static Examples (Non-Interactive)">
            <div className="space-y-8">
              <p className="text-sm text-muted-foreground">
                Static visual representations of the radio button states as defined in the design spec.
              </p>
              {/* With Label - 3 Sizes */}
              <div className="space-y-4">
                <h4 className="text-sm font-medium">With Label</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Small */}
                  <div className="space-y-3">
                    <span className="text-xs text-muted-foreground">Small (16px)</span>
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-2">
                        <div className="size-4 rounded-full border border-button-tertiary-border bg-background" />
                        <span className="font-secondary text-sm text-foreground">Option idle</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="size-4 rounded-full border border-button-primary-default bg-background" />
                        <span className="font-secondary text-sm text-foreground">Option hover</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="size-4 rounded-full border border-button-primary-default bg-background flex items-center justify-center">
                          <svg width="10" height="10" viewBox="0 0 10 10" className="text-button-primary-default"><circle cx="5" cy="5" r="5" fill="currentColor" /></svg>
                        </div>
                        <span className="font-secondary text-sm text-foreground">Option active</span>
                      </div>
                    </div>
                  </div>
                  {/* Medium */}
                  <div className="space-y-3">
                    <span className="text-xs text-muted-foreground">Medium (24px)</span>
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-2">
                        <div className="size-6 rounded-full border border-button-tertiary-border bg-background" />
                        <span className="font-secondary text-sm text-foreground">Option idle</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="size-6 rounded-full border border-button-primary-default bg-background" />
                        <span className="font-secondary text-sm text-foreground">Option hover</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="size-6 rounded-full border border-button-primary-default bg-background flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 16 16" className="text-button-primary-default"><circle cx="8" cy="8" r="8" fill="currentColor" /></svg>
                        </div>
                        <span className="font-secondary text-sm text-foreground">Option active</span>
                      </div>
                    </div>
                  </div>
                  {/* Large */}
                  <div className="space-y-3">
                    <span className="text-xs text-muted-foreground">Large (28px)</span>
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                        <div className="size-7 rounded-full border border-button-tertiary-border bg-background" />
                        <span className="font-secondary text-base text-foreground">Option idle</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="size-7 rounded-full border border-button-primary-default bg-background" />
                        <span className="font-secondary text-base text-foreground">Option hover</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="size-7 rounded-full border border-button-primary-default bg-background flex items-center justify-center">
                          <svg width="18" height="18" viewBox="0 0 18 18" className="text-button-primary-default"><circle cx="9" cy="9" r="9" fill="currentColor" /></svg>
                        </div>
                        <span className="font-secondary text-base text-foreground">Option active</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* With Label and Description - 3 Sizes */}
              <div className="space-y-4">
                <h4 className="text-sm font-medium">With Label and Description</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Small */}
                  <div className="space-y-3">
                    <span className="text-xs text-muted-foreground">Small (16px)</span>
                    <div className="flex flex-col gap-3">
                      <div className="flex items-start gap-2">
                        <span className="pt-1 shrink-0">
                          <div className="size-4 rounded-full border border-button-tertiary-border bg-background" />
                        </span>
                        <span className="flex flex-col gap-0.5">
                          <span className="font-secondary text-sm text-foreground">Title idle</span>
                          <span className="font-secondary text-sm text-muted-foreground">Secondary text</span>
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="pt-1 shrink-0">
                          <div className="size-4 rounded-full border border-button-primary-default bg-background" />
                        </span>
                        <span className="flex flex-col gap-0.5">
                          <span className="font-secondary text-sm text-foreground">Title hover</span>
                          <span className="font-secondary text-sm text-muted-foreground">Secondary text</span>
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="pt-1 shrink-0">
                          <div className="size-4 rounded-full border border-button-primary-default bg-background flex items-center justify-center">
                            <svg width="10" height="10" viewBox="0 0 10 10" className="text-button-primary-default"><circle cx="5" cy="5" r="5" fill="currentColor" /></svg>
                          </div>
                        </span>
                        <span className="flex flex-col gap-0.5">
                          <span className="font-secondary text-sm text-foreground">Title active</span>
                          <span className="font-secondary text-sm text-muted-foreground">Secondary text</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Medium */}
                  <div className="space-y-3">
                    <span className="text-xs text-muted-foreground">Medium (24px)</span>
                    <div className="flex flex-col gap-3">
                      <div className="flex items-start gap-2">
                        <span className="pt-1 shrink-0">
                          <div className="size-6 rounded-full border border-button-tertiary-border bg-background" />
                        </span>
                        <span className="flex flex-col gap-0.5">
                          <span className="font-secondary text-sm text-foreground">Title idle</span>
                          <span className="font-secondary text-sm text-muted-foreground">Secondary text</span>
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="pt-1 shrink-0">
                          <div className="size-6 rounded-full border border-button-primary-default bg-background" />
                        </span>
                        <span className="flex flex-col gap-0.5">
                          <span className="font-secondary text-sm text-foreground">Title hover</span>
                          <span className="font-secondary text-sm text-muted-foreground">Secondary text</span>
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="pt-1 shrink-0">
                          <div className="size-6 rounded-full border border-button-primary-default bg-background flex items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 16 16" className="text-button-primary-default"><circle cx="8" cy="8" r="8" fill="currentColor" /></svg>
                          </div>
                        </span>
                        <span className="flex flex-col gap-0.5">
                          <span className="font-secondary text-sm text-foreground">Title active</span>
                          <span className="font-secondary text-sm text-muted-foreground">Secondary text</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Large */}
                  <div className="space-y-3">
                    <span className="text-xs text-muted-foreground">Large (28px)</span>
                    <div className="flex flex-col gap-3">
                      <div className="flex items-start gap-3">
                        <span className="pt-1.5 shrink-0">
                          <div className="size-7 rounded-full border border-button-tertiary-border bg-background" />
                        </span>
                        <span className="flex flex-col gap-0.5">
                          <span className="font-secondary text-base text-foreground">Title idle</span>
                          <span className="font-secondary text-sm text-muted-foreground">Secondary text</span>
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="pt-1.5 shrink-0">
                          <div className="size-7 rounded-full border border-button-primary-default bg-background" />
                        </span>
                        <span className="flex flex-col gap-0.5">
                          <span className="font-secondary text-base text-foreground">Title hover</span>
                          <span className="font-secondary text-sm text-muted-foreground">Secondary text</span>
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="pt-1.5 shrink-0">
                          <div className="size-7 rounded-full border border-button-primary-default bg-background flex items-center justify-center">
                            <svg width="18" height="18" viewBox="0 0 18 18" className="text-button-primary-default"><circle cx="9" cy="9" r="9" fill="currentColor" /></svg>
                          </div>
                        </span>
                        <span className="flex flex-col gap-0.5">
                          <span className="font-secondary text-base text-foreground">Title active</span>
                          <span className="font-secondary text-sm text-muted-foreground">Secondary text</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Horizontal Layout - 3 Sizes */}
              <div className="space-y-4">
                <h4 className="text-sm font-medium">Horizontal Layout</h4>
                <div className="space-y-4">
                  {/* Small */}
                  <div className="space-y-2">
                    <span className="text-xs text-muted-foreground">Small (16px)</span>
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2">
                        <div className="size-4 rounded-full border border-button-tertiary-border bg-background" />
                        <span className="font-secondary text-sm text-foreground">Idle</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="size-4 rounded-full border border-button-primary-default bg-background" />
                        <span className="font-secondary text-sm text-foreground">Hover</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="size-4 rounded-full border border-button-primary-default bg-background flex items-center justify-center">
                          <svg width="10" height="10" viewBox="0 0 10 10" className="text-button-primary-default"><circle cx="5" cy="5" r="5" fill="currentColor" /></svg>
                        </div>
                        <span className="font-secondary text-sm text-foreground">Active</span>
                      </div>
                    </div>
                  </div>
                  {/* Medium */}
                  <div className="space-y-2">
                    <span className="text-xs text-muted-foreground">Medium (24px)</span>
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2">
                        <div className="size-6 rounded-full border border-button-tertiary-border bg-background" />
                        <span className="font-secondary text-sm text-foreground">Idle</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="size-6 rounded-full border border-button-primary-default bg-background" />
                        <span className="font-secondary text-sm text-foreground">Hover</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="size-6 rounded-full border border-button-primary-default bg-background flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 16 16" className="text-button-primary-default"><circle cx="8" cy="8" r="8" fill="currentColor" /></svg>
                        </div>
                        <span className="font-secondary text-sm text-foreground">Active</span>
                      </div>
                    </div>
                  </div>
                  {/* Large */}
                  <div className="space-y-2">
                    <span className="text-xs text-muted-foreground">Large (28px)</span>
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-3">
                        <div className="size-7 rounded-full border border-button-tertiary-border bg-background" />
                        <span className="font-secondary text-base text-foreground">Idle</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="size-7 rounded-full border border-button-primary-default bg-background" />
                        <span className="font-secondary text-base text-foreground">Hover</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="size-7 rounded-full border border-button-primary-default bg-background flex items-center justify-center">
                          <svg width="18" height="18" viewBox="0 0 18 18" className="text-button-primary-default"><circle cx="9" cy="9" r="9" fill="currentColor" /></svg>
                        </div>
                        <span className="font-secondary text-base text-foreground">Active</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ComponentPreview>
          {/* Interactive Sizes */}
          <ComponentPreview title="Sizes & States (Interactive)">
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <span className="text-xs text-muted-foreground w-12">16px</span>
                <RadioGroup defaultValue="active-sm" className="flex-row gap-4">
                  <RadioGroupItem value="idle-sm" size="sm" />
                  <RadioGroupItem value="active-sm" size="sm" />
                </RadioGroup>
                <span className="text-xs text-muted-foreground">(hover to see state)</span>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-xs text-muted-foreground w-12">24px</span>
                <RadioGroup defaultValue="active-md" className="flex-row gap-4">
                  <RadioGroupItem value="idle-md" size="md" />
                  <RadioGroupItem value="active-md" size="md" />
                </RadioGroup>
                <span className="text-xs text-muted-foreground">(hover to see state)</span>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-xs text-muted-foreground w-12">28px</span>
                <RadioGroup defaultValue="active-lg" className="flex-row gap-4">
                  <RadioGroupItem value="idle-lg" size="lg" />
                  <RadioGroupItem value="active-lg" size="lg" />
                </RadioGroup>
                <span className="text-xs text-muted-foreground">(hover to see state)</span>
              </div>
              <div className="flex items-center gap-6 pt-2 border-t">
                <span className="text-xs text-muted-foreground w-12"></span>
                <span className="text-xs text-muted-foreground">Idle</span>
                <span className="text-xs text-muted-foreground ml-2">Active</span>
              </div>
            </div>
          </ComponentPreview>
          <CodeBlock
            code={`import { RadioGroup, RadioGroupItem } from "@/components/ui";

// Sizes (16px, 24px, 28px)
<RadioGroup defaultValue="option1">
  <RadioGroupItem value="option1" size="sm" />  // 16px
  <RadioGroupItem value="option2" size="md" />  // 24px
  <RadioGroupItem value="option3" size="lg" />  // 28px
</RadioGroup>
// States: Idle (gray border), Hovered (blue border), Active (blue fill)
// Hover state is automatic on mouse over`}
            language="tsx"
          />
          {/* With Label */}
          <ComponentPreview title="With Label">
            <div className="space-y-6">
              <div className="flex flex-col gap-3">
                <span className="text-xs text-muted-foreground">Small (16px)</span>
                <RadioGroup defaultValue="sm-2">
                  <RadioGroupItem value="sm-1" size="sm" label="Option one" />
                  <RadioGroupItem value="sm-2" size="sm" label="Option two" />
                  <RadioGroupItem value="sm-3" size="sm" label="Option three" />
                </RadioGroup>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-xs text-muted-foreground">Medium (24px)</span>
                <RadioGroup defaultValue="md-1">
                  <RadioGroupItem value="md-1" size="md" label="Option one" />
                  <RadioGroupItem value="md-2" size="md" label="Option two" />
                  <RadioGroupItem value="md-3" size="md" label="Option three" />
                </RadioGroup>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-xs text-muted-foreground">Large (28px)</span>
                <RadioGroup defaultValue="lg-3">
                  <RadioGroupItem value="lg-1" size="lg" label="Option one" />
                  <RadioGroupItem value="lg-2" size="lg" label="Option two" />
                  <RadioGroupItem value="lg-3" size="lg" label="Option three" />
                </RadioGroup>
              </div>
            </div>
          </ComponentPreview>
          <CodeBlock
            code={`import { RadioGroup, RadioGroupItem } from "@/components/ui";

// With label
<RadioGroup defaultValue="option1">
  <RadioGroupItem value="option1" label="Option one" />
  <RadioGroupItem value="option2" label="Option two" />
  <RadioGroupItem value="option3" label="Option three" />
</RadioGroup>`}
            language="tsx"
          />
          {/* With Description */}
          <ComponentPreview title="With Label and Description">
            <div className="space-y-6">
              <RadioGroup defaultValue="plan-pro">
                <RadioGroupItem
                  value="plan-basic"
                  size="sm"
                  label="Basic Plan"
                  description="Perfect for individuals getting started"
                />
                <RadioGroupItem
                  value="plan-pro"
                  size="sm"
                  label="Pro Plan"
                  description="Best for growing teams and businesses"
                />
                <RadioGroupItem
                  value="plan-enterprise"
                  size="sm"
                  label="Enterprise Plan"
                  description="Advanced features for large organizations"
                />
              </RadioGroup>
            </div>
          </ComponentPreview>
          <CodeBlock
            code={`import { RadioGroup, RadioGroupItem } from "@/components/ui";

// With label and description
<RadioGroup defaultValue="plan-pro">
  <RadioGroupItem
    value="plan-basic"
    label="Basic Plan"
    description="Perfect for individuals getting started"
  />
  <RadioGroupItem
    value="plan-pro"
    label="Pro Plan"
    description="Best for growing teams and businesses"
  />
  <RadioGroupItem
    value="plan-enterprise"
    label="Enterprise Plan"
    description="Advanced features for large organizations"
  />
</RadioGroup>`}
            language="tsx"
          />
          {/* Horizontal Layout */}
          <ComponentPreview title="Horizontal Layout">
            <RadioGroup defaultValue="weekly" className="flex-row gap-6">
              <RadioGroupItem value="daily" size="md" label="Daily" />
              <RadioGroupItem value="weekly" size="md" label="Weekly" />
              <RadioGroupItem value="monthly" size="md" label="Monthly" />
            </RadioGroup>
          </ComponentPreview>
          <CodeBlock
            code={`import { RadioGroup, RadioGroupItem } from "@/components/ui";

// Horizontal layout
<RadioGroup defaultValue="weekly" className="flex-row gap-6">
  <RadioGroupItem value="daily" label="Daily" />
  <RadioGroupItem value="weekly" label="Weekly" />
  <RadioGroupItem value="monthly" label="Monthly" />
</RadioGroup>`}
            language="tsx"
          />
          {/* Answer Card Example */}
          <ComponentPreview title="Answer Card">
            <div className="space-y-6">
              <p className="text-sm text-muted-foreground">
                Answer cards are used for quiz or survey-style selections where each option is presented as a card.
              </p>
              <div className="flex flex-col gap-6">
                {/* Default State */}
                <div className="flex flex-row items-center p-6 gap-4 bg-background border border-button-tertiary-border rounded-lg cursor-pointer hover:border-foreground transition-colors">
                  <div className="size-4 rounded-full border border-button-tertiary-border bg-background shrink-0" />
                  <span className="font-primary font-semibold text-base leading-normal tracking-normal text-foreground flex-1">
                    Example choice of answer (Default)
                  </span>
                </div>
                {/* Hover State */}
                <div className="flex flex-row items-center p-6 gap-4 bg-background border border-foreground rounded-lg cursor-pointer">
                  <div className="size-4 rounded-full border border-button-tertiary-border bg-background shrink-0" />
                  <span className="font-primary font-semibold text-base leading-normal tracking-normal text-foreground flex-1">
                    Example choice of answer (Hover)
                  </span>
                </div>
                {/* Focused/Selected State */}
                <div className="flex flex-row items-center p-6 gap-4 bg-button-primary-default/4 border-2 border-border-focused rounded-lg cursor-pointer">
                  <div className="size-4 rounded-full border border-button-primary-default bg-background flex items-center justify-center shrink-0">
                    <svg width="10" height="10" viewBox="0 0 10 10" className="text-button-primary-default"><circle cx="5" cy="5" r="5" fill="currentColor" /></svg>
                  </div>
                  <span className="font-primary font-semibold text-base leading-normal tracking-normal text-foreground flex-1">
                    Example choice of answer (Selected)
                  </span>
                </div>
              </div>
            </div>
          </ComponentPreview>
          <CodeBlock
            code={`import { Card, RadioGroupItem } from "@/components/ui";

// Answer Card Pattern
<div className="flex flex-row items-center p-6 gap-4 bg-background border border-button-tertiary-border rounded-lg cursor-pointer hover:border-foreground">
  <RadioGroupItem value="answer-1" size="sm" />
  <span className="font-semibold text-base">Example choice of answer</span>
</div>
// Selected state adds:
// - bg-button-primary-default/4 (light blue background)
// - border-2 border-border-focused (2px blue border)`}
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
                    <li>Use radio buttons for mutually exclusive options</li>
                    <li>Use when users need to see all available options at once</li>
                    <li>Use for 2-5 options (use select for more)</li>
                    <li>Always have one option selected by default when possible</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-danger">Don&apos;t</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Don&apos;t use radio buttons for multiple selections (use checkboxes)</li>
                    <li>Don&apos;t use for binary on/off choices (use toggle/switch)</li>
                    <li>Don&apos;t use without a label unless the context is very clear</li>
                    <li>Don&apos;t use for more than 5 options (use select dropdown)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>
        <TabsContent value="api" className="space-y-8">
          <PropsTable title="RadioGroup Props" props={radioGroupProps} />
          <PropsTable title="RadioGroupItem Props" props={radioGroupItemProps} />
          <VariantsTable title="Sizes" variants={radioSizes} />
          <VariantsTable title="States" variants={radioStates} />
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
                    <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Tab</kbd> - Move focus to the radio group</li>
                    <li><kbd className="px-2 py-1 bg-muted rounded text-xs">↑</kbd> <kbd className="px-2 py-1 bg-muted rounded text-xs">↓</kbd> - Navigate between options</li>
                    <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Space</kbd> - Select the focused option</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">ARIA</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Uses <code className="text-sm bg-muted px-1 rounded">role=&quot;radiogroup&quot;</code> on the container</li>
                    <li>Uses native <code className="text-sm bg-muted px-1 rounded">&lt;input type=&quot;radio&quot;&gt;</code> elements</li>
                    <li>Disabled state is conveyed via <code className="text-sm bg-muted px-1 rounded">disabled</code> attribute</li>
                    <li>Label is associated with the radio via wrapping <code className="text-sm bg-muted px-1 rounded">&lt;label&gt;</code></li>
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
