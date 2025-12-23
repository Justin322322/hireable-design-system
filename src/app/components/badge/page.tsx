import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { WorktraitTag } from "@/components/ui/worktrait-tag";
import { CodeBlock } from "@/components/docs/code-block";
import { ComponentPreview } from "@/components/docs/component-preview";
import { VERSION } from "@/lib/version";
import { Icon } from "@/components/ui/icon";

export default function BadgePillsPage() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:px-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">Badge & Pills</h1>
          <span className="text-sm text-muted-foreground">{VERSION}</span>
        </div>
        <p className="text-lg text-muted-foreground">
          Badges and pills are used to highlight important information, show status, or categorize content.
        </p>
      </div>

      <Tabs defaultValue="examples" className="space-y-8">
        <TabsList>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
        </TabsList>

        <TabsContent value="examples" className="space-y-8">
          {/* Worktrait Tags Section */}
          <ComponentPreview title="Worktrait Tags">
            <div className="space-y-6">
              {/* Large Size */}
              <div>
                <p className="text-sm text-muted-foreground mb-3">Large</p>
                <div className="flex flex-wrap gap-3">
                  <WorktraitTag
                    variant="decision-making"
                    size="lg"
                    label="Decision Making"
                    icon={<Icon icon="bolt" size={16} className="text-foreground" />}
                  />
                  <WorktraitTag
                    variant="adaptability"
                    size="lg"
                    label="Adaptability"
                    icon={<Icon icon="autorenew" size={16} className="text-foreground" />}
                  />
                  <WorktraitTag
                    variant="responsiveness"
                    size="lg"
                    label="Responsiveness"
                    icon={<Icon icon="mark_chat_read" size={16} className="text-foreground" />}
                  />
                  <WorktraitTag
                    variant="time-management"
                    size="lg"
                    label="Time Management"
                    icon={<Icon icon="schedule" size={16} className="text-foreground" />}
                  />
                  <WorktraitTag
                    variant="cooperativeness"
                    size="lg"
                    label="Cooperativeness"
                    icon={<Icon icon="handshake" size={16} className="text-foreground" />}
                  />
                  <WorktraitTag
                    variant="communication"
                    size="lg"
                    label="Communication"
                    icon={<Icon icon="forum" size={16} className="text-foreground" />}
                  />
                </div>
              </div>
              {/* Medium Size */}
              <div>
                <p className="text-sm text-muted-foreground mb-3">Medium</p>
                <div className="flex flex-wrap gap-3">
                  <WorktraitTag
                    variant="decision-making"
                    size="md"
                    label="Decision Making"
                    icon={<Icon icon="bolt" size={14} className="text-foreground" />}
                  />
                  <WorktraitTag
                    variant="adaptability"
                    size="md"
                    label="Adaptability"
                    icon={<Icon icon="autorenew" size={14} className="text-foreground" />}
                  />
                  <WorktraitTag
                    variant="responsiveness"
                    size="md"
                    label="Responsiveness"
                    icon={<Icon icon="mark_chat_read" size={14} className="text-foreground" />}
                  />
                  <WorktraitTag
                    variant="time-management"
                    size="md"
                    label="Time Management"
                    icon={<Icon icon="schedule" size={14} className="text-foreground" />}
                  />
                  <WorktraitTag
                    variant="cooperativeness"
                    size="md"
                    label="Cooperativeness"
                    icon={<Icon icon="handshake" size={14} className="text-foreground" />}
                  />
                  <WorktraitTag
                    variant="communication"
                    size="md"
                    label="Communication"
                    icon={<Icon icon="forum" size={14} className="text-foreground" />}
                  />
                </div>
              </div>
            </div>
          </ComponentPreview>

          <CodeBlock
            code={`<WorktraitTag
  variant="decision-making"
  size="lg"
  label="Decision Making"
  icon={<Icon icon="bolt" />}
/>
<WorktraitTag
  variant="adaptability"
  size="md"
  label="Adaptability"
  icon={<Icon icon="autorenew" />}
/>`}
            language="tsx"
          />

          {/* Pills Section */}
          <h2 className="text-xl font-semibold pt-4">Pills</h2>

          {/* Pill Flat */}
          <ComponentPreview title="Pill Flat">
            <div className="flex flex-wrap items-center gap-4">
              <Badge shape="pill">Badge</Badge>
              <Badge shape="pill" variant="ontrack">Badge</Badge>
              <Badge shape="pill" variant="atrisk">Badge</Badge>
              <Badge shape="pill" variant="offtrack">Badge</Badge>
              <Badge shape="pill" variant="complete">Badge</Badge>
            </div>
          </ComponentPreview>

          <CodeBlock
            code={`<Badge shape="pill">Badge</Badge>
<Badge shape="pill" variant="ontrack">Badge</Badge>
<Badge shape="pill" variant="atrisk">Badge</Badge>
<Badge shape="pill" variant="offtrack">Badge</Badge>
<Badge shape="pill" variant="complete">Badge</Badge>`}
            language="tsx"
          />

          {/* Pill with Border */}
          <ComponentPreview title="Pill with Border">
            <div className="flex flex-wrap items-center gap-4">
              <Badge shape="pill" hasBorder>Badge</Badge>
              <Badge shape="pill" variant="ontrack" hasBorder>Badge</Badge>
              <Badge shape="pill" variant="atrisk" hasBorder>Badge</Badge>
              <Badge shape="pill" variant="offtrack" hasBorder>Badge</Badge>
              <Badge shape="pill" variant="complete" hasBorder>Badge</Badge>
            </div>
          </ComponentPreview>

          <CodeBlock
            code={`<Badge shape="pill" hasBorder>Badge</Badge>
<Badge shape="pill" variant="ontrack" hasBorder>Badge</Badge>
<Badge shape="pill" variant="atrisk" hasBorder>Badge</Badge>
<Badge shape="pill" variant="offtrack" hasBorder>Badge</Badge>
<Badge shape="pill" variant="complete" hasBorder>Badge</Badge>`}
            language="tsx"
          />

          {/* Pill with Dot */}
          <ComponentPreview title="Pill with Dot">
            <div className="flex flex-wrap items-center gap-4">
              <Badge shape="pill" hasDot>Badge</Badge>
              <Badge shape="pill" variant="ontrack" hasDot>Badge</Badge>
              <Badge shape="pill" variant="atrisk" hasDot>Badge</Badge>
              <Badge shape="pill" variant="offtrack" hasDot>Badge</Badge>
              <Badge shape="pill" variant="complete" hasDot>Badge</Badge>
            </div>
          </ComponentPreview>

          <CodeBlock
            code={`<Badge shape="pill" hasDot>Badge</Badge>
<Badge shape="pill" variant="ontrack" hasDot>Badge</Badge>
<Badge shape="pill" variant="atrisk" hasDot>Badge</Badge>
<Badge shape="pill" variant="offtrack" hasDot>Badge</Badge>
<Badge shape="pill" variant="complete" hasDot>Badge</Badge>`}
            language="tsx"
          />

          {/* Pill with Border & Remove Button */}
          <ComponentPreview title="Pill with Border & Remove Button">
            <div className="flex flex-wrap items-center gap-4">
              <Badge shape="pill" hasBorder hasRemoveButton>Badge</Badge>
              <Badge shape="pill" variant="ontrack" hasBorder hasRemoveButton>Badge</Badge>
              <Badge shape="pill" variant="atrisk" hasBorder hasRemoveButton>Badge</Badge>
              <Badge shape="pill" variant="offtrack" hasBorder hasRemoveButton>Badge</Badge>
              <Badge shape="pill" variant="complete" hasBorder hasRemoveButton>Badge</Badge>
            </div>
          </ComponentPreview>

          <CodeBlock
            code={`<Badge shape="pill" hasBorder hasRemoveButton>Badge</Badge>
<Badge shape="pill" variant="ontrack" hasBorder hasRemoveButton>Badge</Badge>
<Badge shape="pill" variant="atrisk" hasBorder hasRemoveButton>Badge</Badge>
<Badge shape="pill" variant="offtrack" hasBorder hasRemoveButton>Badge</Badge>
<Badge shape="pill" variant="complete" hasBorder hasRemoveButton>Badge</Badge>`}
            language="tsx"
          />

          {/* Badges Section */}
          <h2 className="text-xl font-semibold pt-4">Badges</h2>

          {/* Badge Flat */}
          <ComponentPreview title="Badge Flat">
            <div className="flex flex-wrap items-center gap-4">
              <Badge shape="badge">Badge</Badge>
              <Badge shape="badge" variant="ontrack">Badge</Badge>
              <Badge shape="badge" variant="atrisk">Badge</Badge>
              <Badge shape="badge" variant="offtrack">Badge</Badge>
              <Badge shape="badge" variant="complete">Badge</Badge>
            </div>
          </ComponentPreview>

          <CodeBlock
            code={`<Badge shape="badge">Badge</Badge>
<Badge shape="badge" variant="ontrack">Badge</Badge>
<Badge shape="badge" variant="atrisk">Badge</Badge>
<Badge shape="badge" variant="offtrack">Badge</Badge>
<Badge shape="badge" variant="complete">Badge</Badge>`}
            language="tsx"
          />

          {/* Badge with Border */}
          <ComponentPreview title="Badge with Border">
            <div className="flex flex-wrap items-center gap-4">
              <Badge shape="badge" hasBorder>Badge</Badge>
              <Badge shape="badge" variant="ontrack" hasBorder>Badge</Badge>
              <Badge shape="badge" variant="atrisk" hasBorder>Badge</Badge>
              <Badge shape="badge" variant="offtrack" hasBorder>Badge</Badge>
              <Badge shape="badge" variant="complete" hasBorder>Badge</Badge>
            </div>
          </ComponentPreview>

          <CodeBlock
            code={`<Badge shape="badge" hasBorder>Badge</Badge>
<Badge shape="badge" variant="ontrack" hasBorder>Badge</Badge>
<Badge shape="badge" variant="atrisk" hasBorder>Badge</Badge>
<Badge shape="badge" variant="offtrack" hasBorder>Badge</Badge>
<Badge shape="badge" variant="complete" hasBorder>Badge</Badge>`}
            language="tsx"
          />

          {/* Badge with Dot */}
          <ComponentPreview title="Badge with Dot">
            <div className="flex flex-wrap items-center gap-4">
              <Badge shape="badge" hasDot>Badge</Badge>
              <Badge shape="badge" variant="ontrack" hasDot>Badge</Badge>
              <Badge shape="badge" variant="atrisk" hasDot>Badge</Badge>
              <Badge shape="badge" variant="offtrack" hasDot>Badge</Badge>
              <Badge shape="badge" variant="complete" hasDot>Badge</Badge>
            </div>
          </ComponentPreview>

          <CodeBlock
            code={`<Badge shape="badge" hasDot>Badge</Badge>
<Badge shape="badge" variant="ontrack" hasDot>Badge</Badge>
<Badge shape="badge" variant="atrisk" hasDot>Badge</Badge>
<Badge shape="badge" variant="offtrack" hasDot>Badge</Badge>
<Badge shape="badge" variant="complete" hasDot>Badge</Badge>`}
            language="tsx"
          />

          {/* Badge with Border & Remove Button */}
          <ComponentPreview title="Badge with Border & Remove Button">
            <div className="flex flex-wrap items-center gap-4">
              <Badge shape="badge" hasBorder hasRemoveButton>Badge</Badge>
              <Badge shape="badge" variant="ontrack" hasBorder hasRemoveButton>Badge</Badge>
              <Badge shape="badge" variant="atrisk" hasBorder hasRemoveButton>Badge</Badge>
              <Badge shape="badge" variant="offtrack" hasBorder hasRemoveButton>Badge</Badge>
              <Badge shape="badge" variant="complete" hasBorder hasRemoveButton>Badge</Badge>
            </div>
          </ComponentPreview>

          <CodeBlock
            code={`<Badge shape="badge" hasBorder hasRemoveButton>Badge</Badge>
<Badge shape="badge" variant="ontrack" hasBorder hasRemoveButton>Badge</Badge>
<Badge shape="badge" variant="atrisk" hasBorder hasRemoveButton>Badge</Badge>
<Badge shape="badge" variant="offtrack" hasBorder hasRemoveButton>Badge</Badge>
<Badge shape="badge" variant="complete" hasBorder hasRemoveButton>Badge</Badge>`}
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
                  <li>Use pills (rounded) for softer, less prominent labels</li>
                  <li>Use badges (square corners) for structured data tables</li>
                  <li>Use status colors consistently: ontrack for info, atrisk for warnings, offtrack for errors, complete for success</li>
                  <li>Use worktrait tags for personality/skill categorization</li>
                </ul>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-danger mb-2">Don&apos;t</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Don&apos;t use too many different badge colors in one area</li>
                  <li>Don&apos;t use badges as buttons or interactive elements</li>
                  <li>Don&apos;t mix inconsistent sizes within the same context</li>
                </ul>
              </div>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="api" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Badge Props</h2>
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
                    <td className="py-3 font-mono text-foreground">variant</td>
                    <td className="py-3 font-mono">&quot;default&quot; | &quot;ontrack&quot; | &quot;atrisk&quot; | &quot;offtrack&quot; | &quot;complete&quot;</td>
                    <td className="py-3">&quot;default&quot;</td>
                    <td className="py-3">Status color variant</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">shape</td>
                    <td className="py-3 font-mono">&quot;pill&quot; | &quot;badge&quot;</td>
                    <td className="py-3">&quot;pill&quot;</td>
                    <td className="py-3">Corner radius style</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">hasDot</td>
                    <td className="py-3 font-mono">boolean</td>
                    <td className="py-3">false</td>
                    <td className="py-3">Show status indicator dot</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">hasBorder</td>
                    <td className="py-3 font-mono">boolean</td>
                    <td className="py-3">false</td>
                    <td className="py-3">Show border</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">hasRemoveButton</td>
                    <td className="py-3 font-mono">boolean</td>
                    <td className="py-3">false</td>
                    <td className="py-3">Show remove (X) button</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">onRemove</td>
                    <td className="py-3 font-mono">() =&gt; void</td>
                    <td className="py-3">-</td>
                    <td className="py-3">Callback when remove button is clicked</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">WorktraitTag Props</h2>
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
                    <td className="py-3 font-mono text-foreground">variant</td>
                    <td className="py-3 font-mono">&quot;decision-making&quot; | &quot;adaptability&quot; | &quot;responsiveness&quot; | &quot;time-management&quot; | &quot;cooperativeness&quot; | &quot;communication&quot;</td>
                    <td className="py-3">&quot;decision-making&quot;</td>
                    <td className="py-3">Worktrait category</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">size</td>
                    <td className="py-3 font-mono">&quot;lg&quot; | &quot;md&quot;</td>
                    <td className="py-3">&quot;lg&quot;</td>
                    <td className="py-3">Tag size</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">label</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">-</td>
                    <td className="py-3">Tag text label (required)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">icon</td>
                    <td className="py-3 font-mono">ReactNode</td>
                    <td className="py-3">-</td>
                    <td className="py-3">Optional icon element</td>
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