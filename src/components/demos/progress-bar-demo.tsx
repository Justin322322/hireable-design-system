"use client";

import { ProgressBar, Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
import { CodeBlock } from "@/components/docs/code-block";
import { ComponentPreview } from "@/components/docs/component-preview";
import { OnThisPageNav } from "@/components/docs/on-this-page-nav";
import { VERSION } from "@/lib/version";

const progressBarNavItems = [
  { id: "simple", label: "Simple" },
  { id: "with-label", label: "With Label" },
];

export default function ProgressBarDemo() {
  return (
    <div className="container max-w-6xl py-12 px-4 md:px-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">Progress Bar</h1>
          <span className="text-sm text-muted-foreground">{VERSION}</span>
        </div>
        <p className="text-lg text-muted-foreground">
          Progress bars visualize the completion status of a task or process with different status variants.
        </p>
      </div>
      <Tabs defaultValue="examples" className="space-y-8">
        <TabsList>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
        </TabsList>
        <TabsContent value="examples" className="space-y-0">
          <div className="flex gap-8 items-start">
            <div className="flex-1 min-w-0 space-y-8">
              {/* Simple Progress Bar */}
              <div id="simple" className="scroll-mt-20 space-y-4">
                <ComponentPreview title="Simple Progress Bar">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="w-24 text-sm text-muted-foreground">Neutral</span>
                      <ProgressBar variant="neutral" value={43} />
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="w-24 text-sm text-muted-foreground">Not Started</span>
                      <ProgressBar variant="notstarted" value={0} />
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="w-24 text-sm text-muted-foreground">On Track</span>
                      <ProgressBar variant="ontrack" value={43} />
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="w-24 text-sm text-muted-foreground">Success</span>
                      <ProgressBar variant="success" value={100} />
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="w-24 text-sm text-muted-foreground">At Risk</span>
                      <ProgressBar variant="atrisk" value={65} />
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="w-24 text-sm text-muted-foreground">Off Track</span>
                      <ProgressBar variant="offtrack" value={33} />
                    </div>
                  </div>
                </ComponentPreview>
                <CodeBlock
                  code={`import { ProgressBar } from "@/components/ui";

<ProgressBar variant="neutral" value={43} />
<ProgressBar variant="notstarted" value={0} />
<ProgressBar variant="ontrack" value={43} />
<ProgressBar variant="success" value={100} />
<ProgressBar variant="atrisk" value={65} />
<ProgressBar variant="offtrack" value={33} />`}
                  language="tsx"
                />
              </div>

              {/* Progress Bar with Label */}
              <div id="with-label" className="scroll-mt-20 space-y-4">
                <ComponentPreview title="Progress Bar with Label">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="w-24 text-sm text-muted-foreground">Neutral</span>
                      <ProgressBar variant="neutral" value={43} showLabel />
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="w-24 text-sm text-muted-foreground">Not Started</span>
                      <ProgressBar variant="notstarted" value={0} showLabel />
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="w-24 text-sm text-muted-foreground">On Track</span>
                      <ProgressBar variant="ontrack" value={43} showLabel />
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="w-24 text-sm text-muted-foreground">Success</span>
                      <ProgressBar variant="success" value={100} showLabel />
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="w-24 text-sm text-muted-foreground">At Risk</span>
                      <ProgressBar variant="atrisk" value={65} showLabel />
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="w-24 text-sm text-muted-foreground">Off Track</span>
                      <ProgressBar variant="offtrack" value={33} showLabel />
                    </div>
                  </div>
                </ComponentPreview>
                <CodeBlock
                  code={`import { ProgressBar } from "@/components/ui";

<ProgressBar variant="neutral" value={43} showLabel />
<ProgressBar variant="notstarted" value={0} showLabel />
<ProgressBar variant="ontrack" value={43} showLabel />
<ProgressBar variant="success" value={100} showLabel />
<ProgressBar variant="atrisk" value={65} showLabel />
<ProgressBar variant="offtrack" value={33} showLabel />`}
                  language="tsx"
                />
              </div>
            </div>
            <OnThisPageNav items={progressBarNavItems} />
          </div>
        </TabsContent>
        <TabsContent value="usage" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">When to Use</h2>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-success mb-2">Do</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Use to show completion status of tasks, goals, or processes</li>
                  <li>Use status colors consistently: ontrack for healthy progress, atrisk for warnings, offtrack for critical</li>
                  <li>Use the label variant when exact percentage is important</li>
                  <li>Use success variant when task is 100% complete</li>
                </ul>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-danger mb-2">Don&apos;t</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Don&apos;t use for indeterminate loading states (use a spinner instead)</li>
                  <li>Don&apos;t mix different progress bar widths in the same context</li>
                  <li>Don&apos;t use without proper ARIA attributes for accessibility</li>
                </ul>
              </div>
            </div>
          </section>
        </TabsContent>
        <TabsContent value="api" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">ProgressBar Props</h2>
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
                    <td className="py-3 font-mono">&quot;neutral&quot; | &quot;ontrack&quot; | &quot;atrisk&quot; | &quot;offtrack&quot; | &quot;success&quot; | &quot;notstarted&quot;</td>
                    <td className="py-3">&quot;neutral&quot;</td>
                    <td className="py-3">Status color variant</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">value</td>
                    <td className="py-3 font-mono">number</td>
                    <td className="py-3">0</td>
                    <td className="py-3">Progress value (0-100)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">showLabel</td>
                    <td className="py-3 font-mono">boolean</td>
                    <td className="py-3">false</td>
                    <td className="py-3">Show percentage label</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">width</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">&quot;180px&quot;</td>
                    <td className="py-3">Width of the progress bar container</td>
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
