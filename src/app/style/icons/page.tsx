import { Tabs, TabsContent, TabsList, TabsTrigger, Card, CardContent, CardHeader, CardTitle, Icon, IconSize, IconName } from "@/components/ui";

import { CodeBlock } from "@/components/docs/code-block";


const iconSizes: { name: string; size: IconSize; description: string }[] = [
  { name: "16", size: 16, description: "Small UI elements, badges" },
  { name: "20", size: 20, description: "Compact UI elements" },
  { name: "24", size: 24, description: "Default size (recommended)" },
  { name: "40", size: 40, description: "Prominent UI, illustrations" },
  { name: "48", size: 48, description: "Large displays, hero sections" },
];

const iconWeights: { name: string; weight: 100 | 200 | 300 | 400 | 500 | 600 | 700; description: string }[] = [
  { name: "Thin", weight: 100, description: "Ultra light, decorative use" },
  { name: "Extra Light", weight: 200, description: "Very light weight" },
  { name: "Light", weight: 300, description: "Light weight, subtle emphasis" },
  { name: "Regular", weight: 400, description: "Default weight (recommended)" },
  { name: "Medium", weight: 500, description: "Slightly heavier than regular" },
  { name: "Semi Bold", weight: 600, description: "Bold emphasis" },
  { name: "Bold", weight: 700, description: "Maximum emphasis" },
];

// Action icons from Material UI
const sampleIcons: { icon: IconName; label: string }[] = [
  // Navigation & UI
  { icon: "close", label: "Close" },
  { icon: "check", label: "Check" },
  { icon: "chevron_right", label: "Chevron Right" },
  { icon: "arrow_forward", label: "Arrow Forward" },
  // Content
  { icon: "add", label: "Add" },
  { icon: "delete", label: "Delete" },
  { icon: "edit", label: "Edit" },
  { icon: "search", label: "Search" },
  { icon: "home", label: "Home" },
  { icon: "settings", label: "Settings" },
  // Social & Communication
  { icon: "person", label: "Person" },
  { icon: "mail", label: "Mail" },
  { icon: "notifications", label: "Notifications" },
  // Toggle/State
  { icon: "favorite", label: "Favorite" },
  { icon: "star", label: "Star" },
  { icon: "bookmark", label: "Bookmark" },
  // Action Icons
  { icon: "visibility", label: "Visibility" },
  { icon: "visibility_off", label: "Visibility Off" },
  { icon: "warning", label: "Warning" },
  { icon: "info", label: "Info" },
  { icon: "help", label: "Help" },
  { icon: "lock", label: "Lock" },
  { icon: "lock_open", label: "Lock Open" },
  { icon: "schedule", label: "Schedule" },
  { icon: "open_in_new", label: "Open In New" },
  { icon: "launch", label: "Launch" },
  { icon: "done", label: "Done" },
  { icon: "done_all", label: "Done All" },
  { icon: "refresh", label: "Refresh" },
  { icon: "content_copy", label: "Copy" },
  { icon: "print", label: "Print" },
  { icon: "share", label: "Share" },
  { icon: "download", label: "Download" },
  { icon: "upload", label: "Upload" },
  { icon: "filter_list", label: "Filter" },
  { icon: "sort", label: "Sort" },
  { icon: "more_vert", label: "More Vert" },
  { icon: "more_horiz", label: "More Horiz" },
];

export default function IconsPage() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-3xl font-bold">Icons</h1>
        <p className="text-lg text-muted-foreground mb-4">
          Material 3 icons communicate meaning and reinforce actions. We use MUI Material Icons
          with M3 optical sizing for consistent iconography.
        </p>
        <p className="text-muted-foreground">
          Browse the complete icon library at{" "}
          <a 
            href="https://fonts.google.com/icons" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-client hover:underline font-medium"
          >
            Material Symbols and Icons →
          </a>
        </p>
      </div>

      <Tabs defaultValue="sizing" className="space-y-8">
        <TabsList>
          <TabsTrigger value="sizing">Sizing</TabsTrigger>
          <TabsTrigger value="weight">Weight</TabsTrigger>
          <TabsTrigger value="fill">Fill</TabsTrigger>
          <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="sizing" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Material 3 Icon Sizes</h2>
            <p className="mb-6 text-muted-foreground">
              M3 defines four optical sizes that adjust icon detail appropriately.
            </p>
            <div className="space-y-4">
              {iconSizes.map((item) => (
                <Card key={item.name}>
                  <CardContent className="flex items-center gap-6 py-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-muted">
                      <Icon icon="home" size={item.size} />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{item.name}dp</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <code className="text-sm bg-muted px-2 py-1 rounded">size={`{${item.size}}`}</code>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Sample Icons</h2>
            <Card>
              <CardContent className="py-6">
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-4">
                  {sampleIcons.map((item) => (
                    <div key={item.icon} className="flex flex-col items-center gap-2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                        <Icon icon={item.icon} size={24} className="text-icon" />
                      </div>
                      <span className="text-xs text-muted-foreground text-center">{item.label}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        </TabsContent>

        <TabsContent value="weight" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Icon Weights</h2>
            <p className="mb-6 text-muted-foreground">
              Material Symbols support variable weight from 100 (thin) to 700 (bold). 
              Use weight to create visual hierarchy and emphasis.
            </p>
            <div className="space-y-4">
              {iconWeights.map((item) => (
                <Card key={item.name}>
                  <CardContent className="flex items-center gap-6 py-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-muted">
                      <Icon icon="home" size={24} weight={item.weight} />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <code className="text-sm bg-muted px-2 py-1 rounded">weight={`{${item.weight}}`}</code>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Weight Comparison</h2>
            <Card>
              <CardContent className="py-6">
                <div className="flex items-center justify-center gap-6">
                  {([100, 300, 400, 500, 700] as const).map((w) => (
                    <div key={w} className="flex flex-col items-center gap-2">
                      <Icon icon="settings" size={40} weight={w} />
                      <span className="text-xs text-muted-foreground">{w}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <div className="space-y-4">
              <Card>
                <CardHeader><CardTitle className="text-lg">When to Use Different Weights</CardTitle></CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>100-300:</strong> Decorative elements, light themes, large icons</li>
                    <li><strong>400:</strong> Default for most UI icons</li>
                    <li><strong>500-600:</strong> Emphasis, active states, important actions</li>
                    <li><strong>700:</strong> Maximum emphasis, alerts, critical states</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="fill" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Filled vs Outlined</h2>
            <p className="mb-6 text-muted-foreground">
              Toggle fill to indicate selection state or visual emphasis.
            </p>
            <Card>
              <CardContent className="py-6">
                <div className="flex items-center justify-center gap-12">
                  <div className="flex flex-col items-center gap-2">
                    <Icon icon="favorite" size={48} filled={false} />
                    <span className="text-sm text-muted-foreground">Outlined</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Icon icon="favorite" size={48} filled />
                    <span className="text-sm text-muted-foreground">Filled</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="mt-6 space-y-4">
              <Card>
                <CardHeader><CardTitle className="text-lg">When to Use Fill</CardTitle></CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Selected/active states (e.g., favorited items)</li>
                    <li>Navigation items for current page</li>
                    <li>Toggle states (on vs off)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Active State Colors</h2>
            <p className="mb-6 text-muted-foreground">
              Icons use semantic color tokens to indicate default and active states.
            </p>
            <Card>
              <CardContent className="py-6">
                <div className="flex items-center justify-center gap-12">
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-muted">
                      <Icon icon="home" size={24} className="text-icon" />
                    </div>
                    <div className="text-center">
                      <span className="block text-sm font-medium">Default</span>
                      <code className="text-xs text-muted-foreground">text-icon</code>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-muted">
                      <Icon icon="home" size={24} filled className="text-icon-active" />
                    </div>
                    <div className="text-center">
                      <span className="block text-sm font-medium">Active</span>
                      <code className="text-xs text-muted-foreground">text-icon-active</code>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="mt-6 space-y-4">
              <Card>
                <CardHeader><CardTitle className="text-lg">Color Tokens</CardTitle></CardHeader>
                <CardContent className="text-muted-foreground space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded bg-icon" />
                    <div>
                      <code className="text-sm">--icon</code>
                      <span className="text-sm ml-2">— Default icon color (#616161 per Figma spec)</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded bg-icon-active" />
                    <div>
                      <code className="text-sm">--icon-active</code>
                      <span className="text-sm ml-2">— Active icon color (brand blue)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="text-lg">Usage Guidelines</CardTitle></CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Use <code className="text-sm bg-muted px-1 rounded">text-icon</code> for default/inactive icons</li>
                    <li>Use <code className="text-sm bg-muted px-1 rounded">text-icon-active</code> for selected or active icons</li>
                    <li>Combine with <code className="text-sm bg-muted px-1 rounded">filled</code> prop for stronger emphasis</li>
                    <li>Active state typically uses brand color for recognition</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="accessibility" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Accessibility</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader><CardTitle className="text-lg">Decorative Icons</CardTitle></CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Icons paired with text should be hidden from screen readers:</p>
                  <code className="block mt-2 text-sm bg-muted px-2 py-1 rounded">aria-hidden=&quot;true&quot;</code>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="text-lg">Meaningful Icons</CardTitle></CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Icons conveying meaning without text need accessible labels:</p>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Use <code className="text-sm bg-muted px-1 rounded">aria-label</code> on the icon or button</li>
                    <li>Or use visually hidden text alongside the icon</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="code" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Basic Usage</h2>
            <CodeBlock
              code={`

// Basic usage with M3 sizes
<Icon icon="home" />
<Icon icon="home" size={20} />
<Icon icon="home" size={24} />  // default
<Icon icon="home" size={40} />
<Icon icon="home" size={48} />

// Filled variant
<Icon icon="favorite" filled />

// With custom styling
<Icon icon="home" className="text-primary" />`}
              language="tsx"
            />
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Icon Button</h2>
            <CodeBlock
              code={`


// Icon-only button with accessible label
<Button size="icon" aria-label="Add item">
  <Icon icon="add" size={20} />
</Button>

// Icon with text
<Button>
  <Icon icon="add" size={20} aria-hidden="true" />
  Add Item
</Button>`}
              language="tsx"
            />
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Available Icons</h2>
            <p className="mb-4 text-muted-foreground">
              Current icons in the design system (Action icons from Material UI):
            </p>
            <CodeBlock
              code={`// Available icon names
type IconName = 
  // Navigation & UI
  | "close" | "check" | "chevron_right" | "chevron_left" | "arrow_forward"
  | "keyboard_arrow_down" | "keyboard_arrow_up"
  // Content
  | "add" | "delete" | "edit" | "search" | "home" | "settings"
  | "work" | "description"
  // Social & Communication
  | "person" | "person_search" | "group" | "mail" | "chat" | "notifications"
  // Toggle/State
  | "favorite" | "star" | "bookmark"
  // Action Icons
  | "visibility" | "visibility_off" | "attach_money" | "payments"
  | "warning" | "info" | "help" | "lock" | "lock_open" | "schedule"
  | "open_in_new" | "launch" | "done" | "done_all" | "refresh"
  | "content_copy" | "print" | "share" | "download" | "upload"
  | "filter_list" | "sort" | "more_vert" | "more_horiz"
  // Admin/Business
  | "bar_chart" | "gavel" | "verified_user" | "shield"`}
              language="tsx"
            />
          </section>
        </TabsContent>
      </Tabs>
    </div>
  );
}
