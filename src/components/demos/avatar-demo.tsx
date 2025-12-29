"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui";

import { CodeBlock } from "@/components/docs/code-block";
import { ComponentPreview } from "@/components/docs/component-preview";
import { VERSION } from "@/lib/version";
export default function AvatarPage() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:px-8 overflow-hidden">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">Avatar</h1>
          <span className="text-sm text-muted-foreground">{VERSION}</span>
        </div>
        <p className="text-lg text-muted-foreground">
          An image element with a fallback for representing the user.
        </p>
      </div>
      <Tabs defaultValue="examples" className="space-y-8">
        <TabsList>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
        </TabsList>
        <TabsContent value="examples" className="space-y-8">
          {/* Size Variants */}
          <ComponentPreview title="Sizes">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex flex-col items-center gap-2">
                <Avatar size="xl">
                  <AvatarImage src="/images/john-doe.svg" alt="John Doe" />
                  <AvatarFallback className="text-lg">JD</AvatarFallback>
                </Avatar>
                <span className="text-xs text-muted-foreground">X-Large (80px)</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Avatar size="lg">
                  <AvatarImage src="/images/john-doe.svg" alt="John Doe" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <span className="text-xs text-muted-foreground">Large (40px)</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Avatar size="md">
                  <AvatarImage src="/images/john-doe.svg" alt="John Doe" />
                  <AvatarFallback className="text-[10px]">JD</AvatarFallback>
                </Avatar>
                <span className="text-xs text-muted-foreground">Medium (24px)</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Avatar size="sm">
                  <AvatarImage src="/images/john-doe.svg" alt="John Doe" />
                  <AvatarFallback className="text-[8px]">JD</AvatarFallback>
                </Avatar>
                <span className="text-xs text-muted-foreground">Small (16px)</span>
              </div>
            </div>
          </ComponentPreview>
          <CodeBlock
            code={`import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui";

{/* X-Large - 80px */}
<Avatar size="xl">
  <AvatarImage src="/avatar.png" alt="User" />
  <AvatarFallback className="text-lg">CN</AvatarFallback>
</Avatar>
{/* Large - 40px (default) */}
<Avatar size="lg">
  <AvatarImage src="/avatar.png" alt="User" />
  <AvatarFallback>LR</AvatarFallback>
</Avatar>
{/* Medium - 24px */}
<Avatar size="md">
  <AvatarImage src="/avatar.png" alt="User" />
  <AvatarFallback className="text-[10px]">VC</AvatarFallback>
</Avatar>
{/* Small - 16px */}
<Avatar size="sm">
  <AvatarImage src="/avatar.png" alt="User" />
  <AvatarFallback className="text-[8px]">GR</AvatarFallback>
</Avatar>`}
            language="tsx"
          />
{/* Fallback State */}
          <ComponentPreview title="Fallback States">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex flex-col items-center gap-2">
                <Avatar size="xl">
                  <AvatarFallback className="text-lg">JD</AvatarFallback>
                </Avatar>
                <span className="text-xs text-muted-foreground">X-Large</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Avatar size="lg">
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <span className="text-xs text-muted-foreground">Large</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Avatar size="md">
                  <AvatarFallback className="text-[10px]">JD</AvatarFallback>
                </Avatar>
                <span className="text-xs text-muted-foreground">Medium</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Avatar size="sm">
                  <AvatarFallback className="text-[8px]">JD</AvatarFallback>
                </Avatar>
                <span className="text-xs text-muted-foreground">Small</span>
              </div>
            </div>
          </ComponentPreview>
          <CodeBlock
            code={`import { Avatar, AvatarFallback } from "@/components/ui";

{/* Fallback with initials (no image) */}
<Avatar size="xl">
  <AvatarFallback className="text-lg">JD</AvatarFallback>
</Avatar>
<Avatar size="lg">
  <AvatarFallback>AB</AvatarFallback>
</Avatar>
<Avatar size="md">
  <AvatarFallback className="text-[10px]">CD</AvatarFallback>
</Avatar>
<Avatar size="sm">
  <AvatarFallback className="text-[8px]">EF</AvatarFallback>
</Avatar>`}
            language="tsx"
          />
          {/* Avatar Group */}
          <ComponentPreview title="Avatar Group">
            <div className="flex -space-x-3">
              <Avatar className="border-2 border-background bg-background">
                <AvatarImage src="/images/john-doe.svg" alt="John Doe" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-background bg-background">
                <AvatarImage src="/images/juan-delacruz.svg" alt="Juan Dela Cruz" />
                <AvatarFallback>JC</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-background bg-background">
                <AvatarImage src="/images/john-doe.svg" alt="John Doe" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-background bg-background">
                <AvatarFallback>+3</AvatarFallback>
              </Avatar>
            </div>
          </ComponentPreview>
<CodeBlock
            code={`import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui";

{/* Stacked avatar group with overlap */}
<div className="flex -space-x-3">
  <Avatar className="border-2 border-background bg-background">
    <AvatarImage src="/user1.png" alt="User 1" />
    <AvatarFallback>U1</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background bg-background">
    <AvatarImage src="/user2.png" alt="User 2" />
    <AvatarFallback>U2</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background bg-background">
    <AvatarFallback>+3</AvatarFallback>
  </Avatar>
</div>`}
            language="tsx"
          />
        </TabsContent>
        <TabsContent value="usage" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Guidelines</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">When to use</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Representing users in comments or lists</li>
                    <li>User profiles in navigation headers</li>
                    <li>Team member lists</li>
                    <li>Author attribution in content</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Best practices</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Always provide a meaningful fallback (initials or icon)</li>
                    <li>Use clear, high-quality images</li>
                    <li>Ensure avatars are accessible with alt text</li>
                    <li>Adjust fallback text size for smaller avatars</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
          <section>
            <h2 className="mb-4 text-xl font-semibold">Size Selection</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-3 text-left font-medium">Size</th>
                    <th className="py-3 text-left font-medium">Dimensions</th>
                    <th className="py-3 text-left font-medium">Use Case</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">xl</td>
                    <td className="py-3">80 × 80px</td>
                    <td className="py-3">Profile pages, large cards</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">lg</td>
                    <td className="py-3">40 × 40px</td>
                    <td className="py-3">Default, comments, headers</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">md</td>
                    <td className="py-3">24 × 24px</td>
                    <td className="py-3">Inline mentions, compact lists</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">sm</td>
                    <td className="py-3">16 × 16px</td>
                    <td className="py-3">Dense data, activity feeds</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </TabsContent>
        <TabsContent value="api" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Components</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-3 text-left font-medium">Component</th>
                    <th className="py-3 text-left font-medium">Description</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">Avatar</td>
                    <td className="py-3">Root container element with size variants</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">AvatarImage</td>
                    <td className="py-3">Image element with loading states</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">AvatarFallback</td>
                    <td className="py-3">Fallback content when image fails</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section>
            <h2 className="mb-4 text-xl font-semibold">Avatar Props</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-3 text-left font-medium">Prop</th>
                    <th className="py-3 text-left font-medium">Type</th>
                    <th className="py-3 text-left font-medium">Default</th>
                    <th className="py-3 text-left font-medium">Description</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">size</td>
                    <td className="py-3 font-mono">&quot;xl&quot; | &quot;lg&quot; | &quot;md&quot; | &quot;sm&quot;</td>
                    <td className="py-3">&quot;lg&quot;</td>
                    <td className="py-3">Size variant (80px, 40px, 24px, 16px)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">className</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">-</td>
                    <td className="py-3">Additional CSS classes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section>
            <h2 className="mb-4 text-xl font-semibold">AvatarImage Props</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-3 text-left font-medium">Prop</th>
                    <th className="py-3 text-left font-medium">Type</th>
                    <th className="py-3 text-left font-medium">Default</th>
                    <th className="py-3 text-left font-medium">Description</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">src</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">-</td>
                    <td className="py-3">Image source URL</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">alt</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">-</td>
                    <td className="py-3">Alt text for accessibility</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">onLoadingStatusChange</td>
                    <td className="py-3 font-mono">function</td>
                    <td className="py-3">-</td>
                    <td className="py-3">Callback for loading state changes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section>
            <h2 className="mb-4 text-xl font-semibold">AvatarFallback Props</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-3 text-left font-medium">Prop</th>
                    <th className="py-3 text-left font-medium">Type</th>
                    <th className="py-3 text-left font-medium">Default</th>
                    <th className="py-3 text-left font-medium">Description</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">delayMs</td>
                    <td className="py-3 font-mono">number</td>
                    <td className="py-3">600</td>
                    <td className="py-3">Delay before showing fallback (ms)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">className</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">-</td>
                    <td className="py-3">CSS className(s) applied to the AvatarFallback element</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </TabsContent>
      </Tabs>
    </div>
  );
}
