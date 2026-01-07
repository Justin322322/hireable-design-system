import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Icon,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui";


import { CodeBlock, ComponentPreview, PropsTable, VariantsTable } from "@/components/docs";
import { buttonProps, buttonVariants as apiButtonVariants, buttonSizes } from "@/data/api/button";
import { VERSION } from "@/lib/version";
export default function ButtonPage() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:px-8 overflow-hidden">
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
            code={`import { Button, Icon } from "@/components/ui";

// Sizes
<Button size="lg">Large</Button>   // 48px
<Button size="base">Base</Button>  // 44px (default)
<Button size="md">Medium</Button>  // 40px
<Button size="sm">Small</Button>   // 36px
// Icon-only sizes (circular)
<Button size="icon-lg" aria-label="Add"><Icon icon="add" size={20} aria-hidden="true" /></Button>
<Button size="icon-base" aria-label="Add"><Icon icon="add" size={20} aria-hidden="true" /></Button>
<Button size="icon-md" aria-label="Add"><Icon icon="add" size={20} aria-hidden="true" /></Button>
<Button size="icon-sm" aria-label="Add"><Icon icon="add" size={20} aria-hidden="true" /></Button>`}
            language="tsx"
          />
          {/* Primary Buttons */}
          <ComponentPreview title="Primary">
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 pb-6 border-b">
                <div className="w-16 shrink-0 text-sm font-medium text-muted-foreground">Large</div>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button variant="primary" size="lg">Enabled</Button>
                  <Button variant="primary" size="lg" disabled>Disabled</Button>
                  <Button variant="primary" size="lg">
                    <Icon icon="add" size={20} className="text-button-primary-foreground" aria-hidden="true" />
                    Icon + Text
                  </Button>
                  <Button variant="primary" size="icon-lg" aria-label="Add">
                    <Icon icon="add" size={20} className="text-button-primary-foreground" aria-hidden="true" />
                  </Button>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 pb-6 border-b">
                <div className="w-16 shrink-0 text-sm font-medium text-muted-foreground">Base</div>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button variant="primary" size="base">Enabled</Button>
                  <Button variant="primary" size="base" disabled>Disabled</Button>
                  <Button variant="primary" size="base">
                    <Icon icon="add" size={20} className="text-button-primary-foreground" aria-hidden="true" />
                    Icon + Text
                  </Button>
                  <Button variant="primary" size="icon-base" aria-label="Add">
                    <Icon icon="add" size={20} className="text-button-primary-foreground" aria-hidden="true" />
                  </Button>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 pb-6 border-b">
                <div className="w-16 shrink-0 text-sm font-medium text-muted-foreground">Medium</div>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button variant="primary" size="md">Enabled</Button>
                  <Button variant="primary" size="md" disabled>Disabled</Button>
                  <Button variant="primary" size="md">
                    <Icon icon="add" size={20} className="text-button-primary-foreground" aria-hidden="true" />
                    Icon + Text
                  </Button>
                  <Button variant="primary" size="icon-md" aria-label="Add">
                    <Icon icon="add" size={20} className="text-button-primary-foreground" aria-hidden="true" />
                  </Button>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="w-16 shrink-0 text-sm font-medium text-muted-foreground">Small</div>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button variant="primary" size="sm">Enabled</Button>
                  <Button variant="primary" size="sm" disabled>Disabled</Button>
                  <Button variant="primary" size="sm">
                    <Icon icon="add" size={20} className="text-button-primary-foreground" aria-hidden="true" />
                    Icon + Text
                  </Button>
                  <Button variant="primary" size="icon-sm" aria-label="Add">
                    <Icon icon="add" size={20} className="text-button-primary-foreground" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </div>
          </ComponentPreview>
          <CodeBlock
            code={`import { Button, Icon } from "@/components/ui";

// Primary button - text only
<Button variant="primary" size="lg">Enabled</Button>
// Primary button - with icon
<Button variant="primary" size="lg">
  <Icon icon="add" size={20} className="text-button-primary-foreground" aria-hidden="true" />
  Icon + Text
</Button>
// Primary button - icon only (circular)
<Button variant="primary" size="icon-lg" aria-label="Add">
  <Icon icon="add" size={20} className="text-button-primary-foreground" aria-hidden="true" />
</Button>
// Disabled state
<Button variant="primary" size="lg" disabled>Disabled</Button>`}
            language="tsx"
          />
          {/* Secondary Buttons */}
          <ComponentPreview title="Secondary">
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 pb-6 border-b">
                <div className="w-16 shrink-0 text-sm font-medium text-muted-foreground">Large</div>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button variant="secondary" size="lg">Enabled</Button>
                  <Button variant="secondary" size="lg" disabled>Disabled</Button>
                  <Button variant="secondary" size="lg">
                    <Icon icon="add" size={20} className="text-button-secondary-foreground" aria-hidden="true" />
                    Icon + Text
                  </Button>
                  <Button variant="secondary" size="icon-lg" aria-label="Add">
                    <Icon icon="add" size={20} className="text-button-secondary-foreground" aria-hidden="true" />
                  </Button>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 pb-6 border-b">
                <div className="w-16 shrink-0 text-sm font-medium text-muted-foreground">Base</div>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button variant="secondary" size="base">Enabled</Button>
                  <Button variant="secondary" size="base" disabled>Disabled</Button>
                  <Button variant="secondary" size="base">
                    <Icon icon="add" size={20} className="text-button-secondary-foreground" aria-hidden="true" />
                    Icon + Text
                  </Button>
                  <Button variant="secondary" size="icon-base" aria-label="Add">
                    <Icon icon="add" size={20} className="text-button-secondary-foreground" aria-hidden="true" />
                  </Button>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 pb-6 border-b">
                <div className="w-16 shrink-0 text-sm font-medium text-muted-foreground">Medium</div>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button variant="secondary" size="md">Enabled</Button>
                  <Button variant="secondary" size="md" disabled>Disabled</Button>
                  <Button variant="secondary" size="md">
                    <Icon icon="add" size={20} className="text-button-secondary-foreground" aria-hidden="true" />
                    Icon + Text
                  </Button>
                  <Button variant="secondary" size="icon-md" aria-label="Add">
                    <Icon icon="add" size={20} className="text-button-secondary-foreground" aria-hidden="true" />
                  </Button>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="w-16 shrink-0 text-sm font-medium text-muted-foreground">Small</div>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button variant="secondary" size="sm">Enabled</Button>
                  <Button variant="secondary" size="sm" disabled>Disabled</Button>
                  <Button variant="secondary" size="sm">
                    <Icon icon="add" size={20} className="text-button-secondary-foreground" aria-hidden="true" />
                    Icon + Text
                  </Button>
                  <Button variant="secondary" size="icon-sm" aria-label="Add">
                    <Icon icon="add" size={20} className="text-button-secondary-foreground" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </div>
          </ComponentPreview>
          <CodeBlock
            code={`import { Button, Icon } from "@/components/ui";

// Secondary button - text only
<Button variant="secondary" size="lg">Enabled</Button>
// Secondary button - with icon
<Button variant="secondary" size="lg">
  <Icon icon="add" size={20} className="text-button-secondary-foreground" aria-hidden="true" />
  Icon + Text
</Button>
// Secondary button - icon only (circular)
<Button variant="secondary" size="icon-lg" aria-label="Add">
  <Icon icon="add" size={20} className="text-button-secondary-foreground" aria-hidden="true" />
</Button>`}
            language="tsx"
          />
          {/* Tertiary Buttons */}
          <ComponentPreview title="Tertiary">
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 pb-6 border-b">
                <div className="w-16 shrink-0 text-sm font-medium text-muted-foreground">Large</div>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button variant="tertiary" size="lg">Enabled</Button>
                  <Button variant="tertiary" size="lg" disabled>Disabled</Button>
                  <Button variant="tertiary" size="lg">
                    <Icon icon="add" size={20} className="text-button-tertiary-foreground" aria-hidden="true" />
                    Icon + Text
                  </Button>
                  <Button variant="tertiary" size="icon-lg" aria-label="Add">
                    <Icon icon="add" size={20} className="text-button-tertiary-foreground" aria-hidden="true" />
                  </Button>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 pb-6 border-b">
                <div className="w-16 shrink-0 text-sm font-medium text-muted-foreground">Base</div>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button variant="tertiary" size="base">Enabled</Button>
                  <Button variant="tertiary" size="base" disabled>Disabled</Button>
                  <Button variant="tertiary" size="base">
                    <Icon icon="add" size={20} className="text-button-tertiary-foreground" aria-hidden="true" />
                    Icon + Text
                  </Button>
                  <Button variant="tertiary" size="icon-base" aria-label="Add">
                    <Icon icon="add" size={20} className="text-button-tertiary-foreground" aria-hidden="true" />
                  </Button>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 pb-6 border-b">
                <div className="w-16 shrink-0 text-sm font-medium text-muted-foreground">Medium</div>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button variant="tertiary" size="md">Enabled</Button>
                  <Button variant="tertiary" size="md" disabled>Disabled</Button>
                  <Button variant="tertiary" size="md">
                    <Icon icon="add" size={20} className="text-button-tertiary-foreground" aria-hidden="true" />
                    Icon + Text
                  </Button>
                  <Button variant="tertiary" size="icon-md" aria-label="Add">
                    <Icon icon="add" size={20} className="text-button-tertiary-foreground" aria-hidden="true" />
                  </Button>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="w-16 shrink-0 text-sm font-medium text-muted-foreground">Small</div>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button variant="tertiary" size="sm">Enabled</Button>
                  <Button variant="tertiary" size="sm" disabled>Disabled</Button>
                  <Button variant="tertiary" size="sm">
                    <Icon icon="add" size={20} className="text-button-tertiary-foreground" aria-hidden="true" />
                    Icon + Text
                  </Button>
                  <Button variant="tertiary" size="icon-sm" aria-label="Add">
                    <Icon icon="add" size={20} className="text-button-tertiary-foreground" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </div>
          </ComponentPreview>
          <CodeBlock
            code={`import { Button, Icon } from "@/components/ui";

// Tertiary button - text only
<Button variant="tertiary" size="lg">Enabled</Button>
// Tertiary button - with icon
<Button variant="tertiary" size="lg">
  <Icon icon="add" size={20} className="text-button-tertiary-foreground" aria-hidden="true" />
  Icon + Text
</Button>
// Tertiary button - icon only (circular)
<Button variant="tertiary" size="icon-lg" aria-label="Add">
  <Icon icon="add" size={20} className="text-button-tertiary-foreground" aria-hidden="true" />
</Button>`}
            language="tsx"
          />
          {/* Text Link */}
          <ComponentPreview title="Text Link">
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 pb-6 border-b">
                <div className="w-16 shrink-0 text-sm font-medium text-muted-foreground">Large</div>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button variant="link" size="lg" className="justify-start px-0"><span className="hover:underline">Text Link</span></Button>
                  <Button variant="link" size="lg" disabled className="justify-start px-0"><span>Disabled</span></Button>
                  <Button variant="link" size="lg" className="justify-start px-0">
                    <Icon icon="open_in_new" size={20} aria-hidden="true" />
                    <span className="hover:underline">External Link</span>
                  </Button>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 pb-6 border-b">
                <div className="w-16 shrink-0 text-sm font-medium text-muted-foreground">Base</div>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button variant="link" size="base" className="justify-start px-0"><span className="hover:underline">Text Link</span></Button>
                  <Button variant="link" size="base" disabled className="justify-start px-0"><span>Disabled</span></Button>
                  <Button variant="link" size="base" className="justify-start px-0">
                    <Icon icon="open_in_new" size={20} aria-hidden="true" />
                    <span className="hover:underline">External Link</span>
                  </Button>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 pb-6 border-b">
                <div className="w-16 shrink-0 text-sm font-medium text-muted-foreground">Medium</div>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button variant="link" size="md" className="justify-start px-0"><span className="hover:underline">Text Link</span></Button>
                  <Button variant="link" size="md" disabled className="justify-start px-0"><span>Disabled</span></Button>
                  <Button variant="link" size="md" className="justify-start px-0">
                    <Icon icon="open_in_new" size={20} aria-hidden="true" />
                    <span className="hover:underline">External Link</span>
                  </Button>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="w-16 shrink-0 text-sm font-medium text-muted-foreground">Small</div>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button variant="link" size="sm" className="justify-start px-0"><span className="hover:underline">Text Link</span></Button>
                  <Button variant="link" size="sm" disabled className="justify-start px-0"><span>Disabled</span></Button>
                  <Button variant="link" size="sm" className="justify-start px-0">
                    <Icon icon="open_in_new" size={16} aria-hidden="true" />
                    <span className="hover:underline">External Link</span>
                  </Button>
                </div>
              </div>
            </div>
          </ComponentPreview>
          <CodeBlock
            code={`import { Button, Icon } from "@/components/ui";

// Text link - with zero padding for alignment
<Button variant="link" size="lg" className="justify-start px-0">
  <span className="hover:underline">Text Link</span>
</Button>

// Text link - with icon
<Button variant="link" size="lg" className="justify-start px-0">
  <Icon icon="open_in_new" size={20} aria-hidden="true" />
  <span className="hover:underline">External Link</span>
</Button>

// Text link - disabled
<Button variant="link" size="lg" disabled className="justify-start px-0">
  <span>Disabled</span>
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
            code={`import { Button } from "@/components/ui";

<Button variant="destructive">Destructive</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`}
            language="tsx"
          />
          {/* Control Buttons */}
          <ComponentPreview title="Control Buttons">
            <div className="space-y-6">
              <p className="text-sm text-muted-foreground pb-4">
                Circular icon-only buttons for common actions. 32×32px with 24×24px icons.
                White background by default, gray on hover.
              </p>
              
              {/* Table Layout */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Button</th>
                      <th className="text-center py-3 px-4 font-medium text-muted-foreground">Default</th>
                      <th className="text-center py-3 px-4 font-medium text-muted-foreground">Hover</th>
                      <th className="text-center py-3 px-4 font-medium text-muted-foreground">Disabled</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Close */}
                    <tr className="border-b">
                      <td className="py-4 px-4 font-medium">Close</td>
                      <td className="py-4 px-4 text-center">
                        <div className="inline-flex justify-center">
                          <span className="size-8 p-1 rounded-full bg-background border inline-flex items-center justify-center pointer-events-none">
                            <Icon icon="close" size={24} className="text-icon" />
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="inline-flex justify-center">
                          <span className="size-8 p-1 rounded-full bg-surface-hover border inline-flex items-center justify-center pointer-events-none">
                            <Icon icon="close" size={24} className="text-icon" />
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="inline-flex justify-center">
                          <span className="size-8 p-1 rounded-full bg-background border inline-flex items-center justify-center opacity-50 pointer-events-none">
                            <Icon icon="close" size={24} className="text-icon" />
                          </span>
                        </div>
                      </td>
                    </tr>
                    {/* Notification */}
                    <tr className="border-b">
                      <td className="py-4 px-4 font-medium">Notification</td>
                      <td className="py-4 px-4 text-center">
                        <div className="inline-flex justify-center">
                          <span className="size-8 p-1 rounded-full bg-background border inline-flex items-center justify-center pointer-events-none">
                            <Icon icon="notifications" size={24} className="text-icon" />
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="inline-flex justify-center">
                          <span className="size-8 p-1 rounded-full bg-surface-hover border inline-flex items-center justify-center pointer-events-none">
                            <Icon icon="notifications" size={24} className="text-icon" />
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="inline-flex justify-center">
                          <span className="size-8 p-1 rounded-full bg-background border inline-flex items-center justify-center opacity-50 pointer-events-none">
                            <Icon icon="notifications" size={24} className="text-icon" />
                          </span>
                        </div>
                      </td>
                    </tr>
                    {/* Delete */}
                    <tr className="border-b">
                      <td className="py-4 px-4 font-medium">Delete</td>
                      <td className="py-4 px-4 text-center">
                        <div className="inline-flex justify-center">
                          <span className="size-8 p-1 rounded-full bg-background border inline-flex items-center justify-center pointer-events-none">
                            <Icon icon="delete" size={24} className="text-icon" />
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="inline-flex justify-center">
                          <span className="size-8 p-1 rounded-full bg-surface-hover border inline-flex items-center justify-center pointer-events-none">
                            <Icon icon="delete" size={24} className="text-icon" />
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="inline-flex justify-center">
                          <span className="size-8 p-1 rounded-full bg-background border inline-flex items-center justify-center opacity-50 pointer-events-none">
                            <Icon icon="delete" size={24} className="text-icon" />
                          </span>
                        </div>
                      </td>
                    </tr>
                    {/* Expand (Collapsed) */}
                    <tr className="border-b">
                      <td className="py-4 px-4 font-medium">Expand (Collapsed)</td>
                      <td className="py-4 px-4 text-center">
                        <div className="inline-flex justify-center">
                          <span className="size-8 p-1 rounded-full bg-background border inline-flex items-center justify-center pointer-events-none">
                            <Icon icon="expand_more" size={24} className="text-icon" />
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="inline-flex justify-center">
                          <span className="size-8 p-1 rounded-full bg-surface-hover border inline-flex items-center justify-center pointer-events-none">
                            <Icon icon="expand_more" size={24} className="text-icon" />
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="inline-flex justify-center">
                          <span className="size-8 p-1 rounded-full bg-background border inline-flex items-center justify-center opacity-50 pointer-events-none">
                            <Icon icon="expand_more" size={24} className="text-icon" />
                          </span>
                        </div>
                      </td>
                    </tr>
                    {/* Expand (Expanded) */}
                    <tr className="border-b">
                      <td className="py-4 px-4 font-medium">Expand (Expanded)</td>
                      <td className="py-4 px-4 text-center">
                        <div className="inline-flex justify-center">
                          <span className="size-8 p-1 rounded-full bg-background border inline-flex items-center justify-center pointer-events-none">
                            <Icon icon="expand_less" size={24} className="text-icon" />
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="inline-flex justify-center">
                          <span className="size-8 p-1 rounded-full bg-surface-hover border inline-flex items-center justify-center pointer-events-none">
                            <Icon icon="expand_less" size={24} className="text-icon" />
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="inline-flex justify-center">
                          <span className="size-8 p-1 rounded-full bg-background border inline-flex items-center justify-center opacity-50 pointer-events-none">
                            <Icon icon="expand_less" size={24} className="text-icon" />
                          </span>
                        </div>
                      </td>
                    </tr>
                    {/* Custom (Outlined) */}
                    <tr className="border-b">
                      <td className="py-4 px-4 font-medium">Custom (Outlined)</td>
                      <td className="py-4 px-4 text-center">
                        <div className="inline-flex justify-center">
                          <span className="size-8 p-1 rounded-full bg-background border inline-flex items-center justify-center pointer-events-none">
                            <Icon icon="settings" size={24} className="text-icon" />
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="inline-flex justify-center">
                          <span className="size-8 p-1 rounded-full bg-surface-hover border inline-flex items-center justify-center pointer-events-none">
                            <Icon icon="settings" size={24} className="text-icon" />
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="inline-flex justify-center">
                          <span className="size-8 p-1 rounded-full bg-background border inline-flex items-center justify-center opacity-50 pointer-events-none">
                            <Icon icon="settings" size={24} className="text-icon" />
                          </span>
                        </div>
                      </td>
                    </tr>
                    {/* Custom (Filled) */}
                    <tr>
                      <td className="py-4 px-4 font-medium">Custom (Filled)</td>
                      <td className="py-4 px-4 text-center">
                        <div className="inline-flex justify-center">
                          <span className="size-8 p-1 rounded-full bg-background border inline-flex items-center justify-center pointer-events-none">
                            <Icon icon="search" size={24} filled className="text-icon" />
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="inline-flex justify-center">
                          <span className="size-8 p-1 rounded-full bg-surface-hover border inline-flex items-center justify-center pointer-events-none">
                            <Icon icon="search" size={24} filled className="text-icon" />
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="inline-flex justify-center">
                          <span className="size-8 p-1 rounded-full bg-background border inline-flex items-center justify-center opacity-50 pointer-events-none">
                            <Icon icon="search" size={24} filled className="text-icon" />
                          </span>
                        </div>
                      </td>
                    </tr>
                    {/* Save */}
                    <tr className="border-b">
                      <td className="py-4 px-4 font-medium">Save</td>
                      <td className="py-4 px-4 text-center">
                        <div className="inline-flex justify-center">
                          <span className="size-8 p-1 rounded-full bg-background border inline-flex items-center justify-center pointer-events-none">
                            <Icon icon="check" size={24} className="text-[#00A7F8]" />
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="inline-flex justify-center">
                          <span className="size-8 p-1 rounded-full bg-surface-hover border inline-flex items-center justify-center pointer-events-none">
                            <Icon icon="check" size={24} className="text-[#00A7F8]" />
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="inline-flex justify-center">
                          <span className="size-8 p-1 rounded-full bg-background border inline-flex items-center justify-center opacity-50 pointer-events-none">
                            <Icon icon="check" size={24} className="text-[#00A7F8]" />
                          </span>
                        </div>
                      </td>
                    </tr>
                    {/* Send */}
                    <tr>
                      <td className="py-4 px-4 font-medium">Send</td>
                      <td className="py-4 px-4 text-center">
                        <div className="inline-flex justify-center">
                          <span className="size-8 p-1 rounded-full bg-[#00A7F8] inline-flex items-center justify-center pointer-events-none">
                            <Icon icon="arrow_upward" size={24} className="text-white" />
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="inline-flex justify-center">
                          <span className="size-8 p-1 rounded-full bg-[#0085C6] inline-flex items-center justify-center pointer-events-none">
                            <Icon icon="arrow_upward" size={24} className="text-white" />
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="inline-flex justify-center">
                          <span className="size-8 p-1 rounded-full bg-[#00A7F8] inline-flex items-center justify-center opacity-50 pointer-events-none">
                            <Icon icon="arrow_upward" size={24} className="text-white" />
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </ComponentPreview>
          <CodeBlock
            code={`import { 
  CloseButton, 
  NotificationButton, 
  DeleteButton, 
  ExpandButton,
  SaveButton,
  SendButton,
  IconButton 
} from "@/components/ui";

// Pre-configured icon buttons
<CloseButton />                    // X icon
<NotificationButton />             // Bell icon
<DeleteButton />                   // Trash icon
<SaveButton />                     // Check icon (Blue)
<SendButton />                     // Arrow Up icon (Blue Background)
<ExpandButton expanded={false} />  // Chevron down
<ExpandButton expanded={true} />   // Chevron up

// Custom icon button
<IconButton icon="settings" aria-label="Settings" />
<IconButton icon="search" aria-label="Search" filled />`}
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
          <VariantsTable title="Variants" variants={apiButtonVariants} />
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
