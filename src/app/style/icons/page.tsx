import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeBlock } from "@/components/docs/code-block";
import {
  Plus,
  Check,
  AlertTriangle,
  Search,
  Home,
  Settings,
  Trash2,
  Pencil,
  User,
  Mail,
  Bell,
  Heart,
  Star,
  ChevronRight,
  ArrowRight,
  X,
} from "lucide-react";

const iconSizes = [
  { name: "xxs", size: "10px", className: "size-2.5", container: "size-8" },
  { name: "xs", size: "12px", className: "size-3", container: "size-8" },
  { name: "sm", size: "16px", className: "size-4", container: "size-10" },
  { name: "md", size: "20px", className: "size-5", container: "size-10" },
  { name: "lg", size: "24px", className: "size-6", container: "size-12" },
  { name: "xl", size: "32px", className: "size-8", container: "size-14" },
  { name: "xxl", size: "40px", className: "size-10", container: "size-16" },
];

const sampleIcons = [
  { icon: Plus, name: "Plus", label: "Add" },
  { icon: Check, name: "Check", label: "Check" },
  { icon: AlertTriangle, name: "AlertTriangle", label: "Warning" },
  { icon: Search, name: "Search", label: "Search" },
  { icon: Home, name: "Home", label: "Home" },
  { icon: Settings, name: "Settings", label: "Settings" },
  { icon: Trash2, name: "Trash2", label: "Delete" },
  { icon: Pencil, name: "Pencil", label: "Edit" },
  { icon: User, name: "User", label: "User" },
  { icon: Mail, name: "Mail", label: "Mail" },
  { icon: Bell, name: "Bell", label: "Bell" },
  { icon: Heart, name: "Heart", label: "Heart" },
  { icon: Star, name: "Star", label: "Star" },
  { icon: ChevronRight, name: "ChevronRight", label: "Chevron" },
  { icon: ArrowRight, name: "ArrowRight", label: "Arrow" },
  { icon: X, name: "X", label: "Close" },
];

export default function IconsPage() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-3xl font-bold">Icons</h1>
        <p className="text-lg text-muted-foreground">
          Icons communicate meaning quickly and reinforce actions. We use Lucide React
          for consistent, accessible iconography across all interfaces.
        </p>
      </div>

      <Tabs defaultValue="sizing" className="space-y-8">
        <TabsList>
          <TabsTrigger value="sizing">Sizing</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="sizing" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Icon Sizes</h2>
            <p className="mb-6 text-muted-foreground">
              Use consistent icon sizes that align with the spacing scale.
            </p>
            <div className="space-y-4">
              {iconSizes.map((item) => (
                <Card key={item.name}>
                  <CardContent className="flex items-center gap-6 py-6">
                    <div className={`flex items-center justify-center rounded-lg bg-muted ${item.container}`}>
                      <Plus className={item.className} />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">{item.size}</p>
                    </div>
                    <code className="text-sm bg-muted px-2 py-1 rounded">{item.className}</code>
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
                    <div key={item.name} className="flex flex-col items-center gap-2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                        <item.icon className="size-6 text-neutral-700" />
                      </div>
                      <span className="text-xs text-muted-foreground text-center">{item.label}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        </TabsContent>

        <TabsContent value="usage" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Usage Guidelines</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader><CardTitle className="text-lg">Pairing with Text</CardTitle></CardHeader>
                <CardContent className="text-muted-foreground space-y-3">
                  <p>When pairing icons with text, use these size combinations:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Small text (14px): size-4 (16px) icons</li>
                    <li>Body text (16px): size-5 (20px) icons</li>
                    <li>Large text (18px+): size-6 (24px) icons</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="text-lg">Stroke Width</CardTitle></CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Lucide icons default to a stroke width of 2. You can adjust this with the <code className="text-sm bg-muted px-1 rounded">strokeWidth</code> prop for lighter or bolder appearances.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="text-lg">Color</CardTitle></CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Icons inherit the current text color by default. Use Tailwind classes like <code className="text-sm bg-muted px-1 rounded">text-neutral-700</code> or <code className="text-sm bg-muted px-1 rounded">text-primary</code> to apply specific colors.</p>
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
                  <p>Icons that are purely decorative (paired with text) should be hidden from screen readers:</p>
                  <code className="block mt-2 text-sm bg-muted px-2 py-1 rounded">aria-hidden=&quot;true&quot;</code>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="text-lg">Meaningful Icons</CardTitle></CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Icons that convey meaning without text need accessible labels:</p>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Use <code className="text-sm bg-muted px-1 rounded">aria-label</code> on the icon or button</li>
                    <li>Or use visually hidden text alongside the icon</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="text-lg">Focus States</CardTitle></CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Interactive icons (buttons) must have visible focus indicators that meet WCAG 2.1 requirements.</p>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="code" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Installation</h2>
            <p className="mb-4 text-muted-foreground">
              Install Lucide React (v0.561.0):
            </p>
            <CodeBlock
              code={`bun add lucide-react`}
              language="bash"
            />
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Basic Usage</h2>
            <CodeBlock
              code={`import { Home, Settings, Trash2 } from "lucide-react";

// Basic usage
<Home className="size-6" />
<Settings className="size-6" />
<Trash2 className="size-6" />

// With custom size
<Home className="size-4" />  // 16px
<Home className="size-5" />  // 20px
<Home className="size-6" />  // 24px
<Home className="size-8" />  // 32px

// With color
<Home className="size-6 text-primary" />
<Trash2 className="size-6 text-red-500" />`}
              language="tsx"
            />
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Stroke Width</h2>
            <CodeBlock
              code={`import { Home } from "lucide-react";

// Default stroke width is 2
<Home className="size-6" />

// Lighter stroke
<Home className="size-6" strokeWidth={1.5} />

// Bolder stroke
<Home className="size-6" strokeWidth={2.5} />`}
              language="tsx"
            />
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Icon Button</h2>
            <CodeBlock
              code={`import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

// Icon-only button with accessible label
<Button size="icon" aria-label="Add item">
  <Plus className="size-4" />
</Button>

// Icon with text
<Button>
  <Plus className="size-4 mr-2" aria-hidden="true" />
  Add Item
</Button>`}
              language="tsx"
            />
          </section>
        </TabsContent>
      </Tabs>
    </div>
  );
}
