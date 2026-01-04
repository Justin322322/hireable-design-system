"use client"

import * as React from "react"
import { createPortal } from "react-dom"
import {
  Button,
  Header,
  Icon,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui"

import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { VERSION } from "@/lib/version"

type HeaderType = "Dashboard" | "With Tab" | "Post Job"

export default function HeaderPage() {
  const [activeTab, setActiveTab] = React.useState("tab1")
  const [previewType, setPreviewType] = React.useState<HeaderType | null>(null)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const tabs = [
    { value: "tab1", label: "Insert toolbar title" },
    { value: "tab2", label: "Insert toolbar title" },
  ]

  const showPreview = (type: HeaderType) => {
    setPreviewType(type)
  }

  const closePreview = () => {
    setPreviewType(null)
  }

  return (
    <div className="container max-w-4xl py-12 px-4 md:px-8 overflow-hidden">
      {/* Real header preview - positioned below site header, to the right of sidebar */}
      {previewType && mounted && createPortal(
        <div className="fixed inset-0 z-[60]">
          {/* Backdrop - only covers the main content area */}
          <div 
            className="absolute inset-0 bg-black/50"
            onClick={closePreview}
          />
          {/* Header Preview Container - positioned below site header (h-14 = 56px), right of sidebar (w-64 = 256px) */}
          <div className="absolute top-14 left-0 right-0 lg:left-64">
            <div className="bg-background border-b border-border">
              <Header
                type={previewType}
                button={true}
                subheading={true}
                title="Page Title"
                subtitle="Page sub-title"
                buttonText={previewType === "Post Job" ? "Review job post" : "Enabled"}
                secondaryButtonText="Save as draft"
                tabs={previewType === "With Tab" ? tabs : undefined}
                activeTab={activeTab}
                onTabChange={setActiveTab}
              />
            </div>
            {/* Close button - below the header */}
            <div className="flex justify-center py-4">
              <Button variant="tertiary" size="sm" onClick={closePreview}>
                <Icon icon="close" size={16} />
                Close preview
              </Button>
            </div>
          </div>
        </div>,
        document.body
      )}
      
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">Header</h1>
          <span className="text-sm text-muted-foreground">{VERSION}</span>
        </div>
        <p className="text-lg text-muted-foreground">
          Page headers display the title, optional subtitle, and actions for a page or section.
        </p>
      </div>

      <Tabs defaultValue="examples" className="space-y-8">
        <TabsList>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
        </TabsList>

        <TabsContent value="examples" className="space-y-8">
          {/* Dashboard Variant */}
          <ComponentPreview 
            title="Dashboard"
            action={
              <Button variant="tertiary" size="sm" onClick={() => showPreview("Dashboard")}>
                <Icon icon="launch" size={16} />
                Show preview
              </Button>
            }
          >
            <Header
              type="Dashboard"
              button={true}
              subheading={true}
              title="Page Title"
              subtitle="Page sub-title"
              buttonText="Enabled"
            />
          </ComponentPreview>
          <CodeBlock
            code={`import { Header } from "@/components/ui";

<Header
  type="Dashboard"
  button={true}
  subheading={true}
  title="Page Title"
  subtitle="Page sub-title"
  buttonText="Enabled"
/>`}
            language="tsx"
          />

          {/* Dashboard without subheading */}
          <ComponentPreview 
            title="Dashboard (no subheading)"
            action={
              <Button variant="tertiary" size="sm" onClick={() => showPreview("Dashboard")}>
                <Icon icon="launch" size={16} />
                Show preview
              </Button>
            }
          >
            <Header
              type="Dashboard"
              button={true}
              subheading={false}
              title="Page Title"
              buttonText="Enabled"
            />
          </ComponentPreview>
          <CodeBlock
            code={`import { Header } from "@/components/ui";

<Header
  type="Dashboard"
  button={true}
  subheading={false}
  title="Page Title"
  buttonText="Enabled"
/>`}
            language="tsx"
          />

          {/* Dashboard without button */}
          <ComponentPreview 
            title="Dashboard (no button)"
            action={
              <Button variant="tertiary" size="sm" onClick={() => showPreview("Dashboard")}>
                <Icon icon="launch" size={16} />
                Show preview
              </Button>
            }
          >
            <Header
              type="Dashboard"
              button={false}
              subheading={true}
              title="Page Title"
              subtitle="Page sub-title"
            />
          </ComponentPreview>
          <CodeBlock
            code={`import { Header } from "@/components/ui";

<Header
  type="Dashboard"
  button={false}
  subheading={true}
  title="Page Title"
  subtitle="Page sub-title"
/>`}
            language="tsx"
          />

          {/* With Tab Variant */}
          <ComponentPreview 
            title="With Tab"
            action={
              <Button variant="tertiary" size="sm" onClick={() => showPreview("With Tab")}>
                <Icon icon="launch" size={16} />
                Show preview
              </Button>
            }
          >
            <Header
              type="With Tab"
              button={true}
              title="Page Title"
              buttonText="Enabled"
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          </ComponentPreview>
          <CodeBlock
            code={`import { Header } from "@/components/ui";

const tabs = [
  { value: "tab1", label: "Insert toolbar title" },
  { value: "tab2", label: "Insert toolbar title" },
];

<Header
  type="With Tab"
  button={true}
  title="Page Title"
  buttonText="Enabled"
  tabs={tabs}
  activeTab={activeTab}
  onTabChange={setActiveTab}
/>`}
            language="tsx"
          />

          {/* Post Job Variant */}
          <ComponentPreview 
            title="Post Job"
            action={
              <Button variant="tertiary" size="sm" onClick={() => showPreview("Post Job")}>
                <Icon icon="launch" size={16} />
                Show preview
              </Button>
            }
          >
            <Header
              type="Post Job"
              buttonText="Review job post"
              secondaryButtonText="Save as draft"
            />
          </ComponentPreview>
          <CodeBlock
            code={`import { Header } from "@/components/ui";

<Header
  type="Post Job"
  buttonText="Review job post"
  secondaryButtonText="Save as draft"
/>`}
            language="tsx"
          />
        </TabsContent>

        <TabsContent value="usage" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">When to Use</h2>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-success mb-2">Do</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Use Dashboard type for standard page headers with title and actions</li>
                  <li>Use With Tab type when content is organized into sections</li>
                  <li>Use Post Job type for focused flows with logo and CTAs</li>
                  <li>Keep titles concise and descriptive</li>
                </ul>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-danger mb-2">Don&apos;t</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Don&apos;t use multiple headers on the same page</li>
                  <li>Don&apos;t hide critical navigation in the header</li>
                  <li>Don&apos;t use long subtitles that wrap to multiple lines</li>
                </ul>
              </div>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="api" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Header Props</h2>
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
                    <td className="py-3 font-mono text-foreground">type</td>
                    <td className="py-3 font-mono">&quot;Dashboard&quot; | &quot;With Tab&quot; | &quot;Post Job&quot;</td>
                    <td className="py-3">&quot;Dashboard&quot;</td>
                    <td className="py-3">Header variant type</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">button</td>
                    <td className="py-3 font-mono">boolean</td>
                    <td className="py-3">true</td>
                    <td className="py-3">Show primary action button</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">subheading</td>
                    <td className="py-3 font-mono">boolean</td>
                    <td className="py-3">true</td>
                    <td className="py-3">Show subtitle (Dashboard only)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">title</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">&quot;Page Title&quot;</td>
                    <td className="py-3">Page title text</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">subtitle</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">&quot;Page sub-title&quot;</td>
                    <td className="py-3">Page subtitle text</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">buttonText</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">&quot;Enabled&quot;</td>
                    <td className="py-3">Primary button label</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">tabs</td>
                    <td className="py-3 font-mono">HeaderTab[]</td>
                    <td className="py-3">[]</td>
                    <td className="py-3">Tab items for With Tab variant</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">activeTab</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">-</td>
                    <td className="py-3">Currently active tab value</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">onTabChange</td>
                    <td className="py-3 font-mono">(value: string) =&gt; void</td>
                    <td className="py-3">-</td>
                    <td className="py-3">Tab change callback</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">secondaryButtonText</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">&quot;Save as draft&quot;</td>
                    <td className="py-3">Secondary button label (Post Job only)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">HeaderTab Interface</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-3 text-left font-medium">Property</th>
                    <th className="py-3 text-left font-medium">Type</th>
                    <th className="py-3 text-left font-medium">Description</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">value</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Unique identifier for the tab</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">label</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Display text for the tab</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </TabsContent>
      </Tabs>
    </div>
  )
}
