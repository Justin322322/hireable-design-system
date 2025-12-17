import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { CodeBlock } from "@/components/docs/code-block";
import { ComponentPreview } from "@/components/docs/component-preview";
import { ChevronRight } from "lucide-react";

export default function CardPage() {
  return (
    <div className="container max-w-4xl py-12 px-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">Card</h1>
          <Badge variant="outline">Stable</Badge>
        </div>
        <p className="text-lg text-muted-foreground">
          Cards group related content and actions. Use them to create visual hierarchy and organize information.
        </p>
      </div>

      <Tabs defaultValue="examples" className="space-y-8">
        <TabsList>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
        </TabsList>

        <TabsContent value="examples" className="space-y-8">
          <ComponentPreview title="Basic Card">
            <div className="flex justify-center">
              <Card className="w-[350px]">
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card description goes here.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Card content with any elements you need.</p>
                </CardContent>
                <CardFooter>
                  <Button>Action</Button>
                </CardFooter>
              </Card>
            </div>
          </ComponentPreview>

          <CodeBlock
            code={`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content with any elements you need.</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`}
            language="tsx"
          />

          <ComponentPreview title="Simple Card">
            <div className="flex justify-center">
              <Card className="w-[350px]">
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Push notifications</span>
                    <Switch defaultChecked aria-label="Toggle push notifications" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Email notifications</span>
                    <Switch aria-label="Toggle email notifications" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </ComponentPreview>

          <CodeBlock
            code={`<Card className="w-[350px]">
  <CardHeader>
    <CardTitle>Notifications</CardTitle>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium">Push notifications</span>
      <Switch defaultChecked aria-label="Toggle push notifications" />
    </div>
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium">Email notifications</span>
      <Switch aria-label="Toggle email notifications" />
    </div>
  </CardContent>
</Card>`}
            language="tsx"
          />

          <ComponentPreview title="Profile Card">
            <div className="flex justify-center">
              <div className="flex flex-col items-start gap-2.5 p-4 bg-white border border-[#C3C3C3] rounded-lg w-96 transition-colors hover:bg-[#F2F2F2] hover:border-[#C3C3C3] cursor-pointer">
                {/* Profile Section */}
                <div className="flex flex-row items-center gap-2.5 w-full">
                  <div className="w-14 h-14 rounded-full bg-gray-300 flex-shrink-0" />
                  <div className="flex flex-col items-start gap-1 flex-1">
                    <p className="font-semibold text-sm text-[#212121] leading-[120%]">Mikaela Santos</p>
                    <p className="font-normal text-xs text-[#212121] leading-[120%]">Sales Representative</p>
                  </div>
                </div>

                {/* Metadata Section */}
                <div className="flex flex-row items-center gap-6 w-full text-xs text-[#212121]">
                  <span>$2,200 /mo</span>
                  <span>5-8 years</span>
                </div>

                {/* Activity Section */}
                <div className="flex flex-row items-center justify-between gap-4 w-full">
                  <span className="text-xs text-[#212121]">Activity Title</span>
                  <Button size="sm" className="rounded-full w-6 h-6 p-0 bg-[#00A7F8] hover:bg-[#0085C6]">
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            </div>
          </ComponentPreview>

          <CodeBlock
            code={`import { ChevronRight } from "lucide-react";

<div className="flex flex-col items-start gap-2.5 p-4 bg-white border border-[#C3C3C3] rounded-lg w-96 transition-colors hover:bg-[#F2F2F2] hover:border-[#C3C3C3] cursor-pointer">
  {/* Profile Section */}
  <div className="flex flex-row items-center gap-2.5 w-full">
    <div className="w-14 h-14 rounded-full bg-gray-300 flex-shrink-0" />
    <div className="flex flex-col items-start gap-1 flex-1">
      <p className="font-semibold text-sm text-[#212121] leading-[120%]">Mikaela Santos</p>
      <p className="font-normal text-xs text-[#212121] leading-[120%]">Sales Representative</p>
    </div>
  </div>

  {/* Metadata Section */}
  <div className="flex flex-row items-center gap-6 w-full text-xs text-[#212121]">
    <span>$2,200 /mo</span>
    <span>5-8 years</span>
  </div>

  {/* Activity Section */}
  <div className="flex flex-row items-center justify-between gap-4 w-full">
    <span className="text-xs text-[#212121]">Activity Title</span>
    <Button size="sm" className="rounded-full w-6 h-6 p-0 bg-[#00A7F8] hover:bg-[#0085C6]">
      <ChevronRight className="w-3.5 h-3.5" />
    </Button>
  </div>
</div>`}
            language="tsx"
          />

          <ComponentPreview title="Goals Card">
            <div className="flex justify-center">
              <div className="flex flex-col items-start gap-5 p-4 bg-white border border-[#C3C3C3] rounded-lg w-96 transition-colors hover:bg-[#F2F2F2] hover:border-[#C3C3C3] cursor-pointer">
                {/* Header Section */}
                <div className="flex items-start justify-between w-full">
                  <div className="flex-1 flex items-center">
                    <p className="font-semibold text-sm text-[#212121] leading-[1.5] tracking-[0.02em]">
                      Increase Weekly Qualified Leads
                    </p>
                  </div>
                  <span className="bg-[#F2F2F2] border border-[#E0E0E0] px-2 py-0.5 rounded-full text-[10px] text-[#616161] font-medium whitespace-nowrap">
                    Automatic
                  </span>
                </div>

                {/* Progress Section */}
                <div className="flex flex-col gap-2 w-full">
                  {/* Progress Value */}
                  <div className="flex items-center">
                    <span className="font-semibold text-2xl text-[#212121] leading-[1.2]">
                      50%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="flex items-center w-full h-2">
                    <div className="flex-1 bg-[#F2F2F2] rounded-full h-1.5 overflow-hidden">
                      <div className="bg-[#00A7F8] h-full rounded-full" style={{ width: '50%' }} />
                    </div>
                  </div>

                  {/* Status Row */}
                  <div className="flex items-center justify-between w-full">
                    <span className="text-xs text-[#616161] leading-[1.2] tracking-[0.02em]">
                      2 of 4 key results completed
                    </span>
                    <span className="text-xs text-[#616161] leading-[1.2] tracking-[0.02em]">
                      Nov 30, 2025
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </ComponentPreview>

          <CodeBlock
            code={`<div className="flex flex-col items-start gap-5 p-4 bg-white border border-[#C3C3C3] rounded-lg w-96 transition-colors hover:bg-[#F2F2F2] hover:border-[#C3C3C3] cursor-pointer">
  {/* Header Section */}
  <div className="flex items-start justify-between w-full">
    <div className="flex-1 flex items-center">
      <p className="font-semibold text-sm text-[#212121] leading-[1.5] tracking-[0.02em]">
        Increase Weekly Qualified Leads
      </p>
    </div>
    <span className="bg-[#F2F2F2] border border-[#E0E0E0] px-2 py-0.5 rounded-full text-[10px] text-[#616161] font-medium whitespace-nowrap">
      Automatic
    </span>
  </div>

  {/* Progress Section */}
  <div className="flex flex-col gap-2 w-full">
    {/* Progress Value */}
    <div className="flex items-center">
      <span className="font-semibold text-2xl text-[#212121] leading-[1.2]">
        50%
      </span>
    </div>

    {/* Progress Bar */}
    <div className="flex items-center w-full h-2">
      <div className="flex-1 bg-[#F2F2F2] rounded-full h-1.5 overflow-hidden">
        <div className="bg-[#00A7F8] h-full rounded-full" style={{ width: '50%' }} />
      </div>
    </div>

    {/* Status Row */}
    <div className="flex items-center justify-between w-full">
      <span className="text-xs text-[#616161] leading-[1.2] tracking-[0.02em]">
        2 of 4 key results completed
      </span>
      <span className="text-xs text-[#616161] leading-[1.2] tracking-[0.02em]">
        Nov 30, 2025
      </span>
    </div>
  </div>
</div>`}
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
                    <li>Group related content together</li>
                    <li>Create visual separation between sections</li>
                    <li>Display items in a grid or list</li>
                    <li>Contain forms or interactive elements</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-red-600">Don&apos;t</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Nest cards within cards</li>
                    <li>Use cards for single pieces of text</li>
                    <li>Overload cards with too much content</li>
                  </ul>
                </CardContent>
              </Card>
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
                    <td className="py-3 font-mono text-foreground">Card</td>
                    <td className="py-3">Container element</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">CardHeader</td>
                    <td className="py-3">Header section with title and description</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">CardTitle</td>
                    <td className="py-3">Title text</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">CardDescription</td>
                    <td className="py-3">Subtitle or description text</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">CardContent</td>
                    <td className="py-3">Main content area</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">CardFooter</td>
                    <td className="py-3">Footer with actions</td>
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
