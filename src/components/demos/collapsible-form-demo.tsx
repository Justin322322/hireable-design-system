"use client";

import * as React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  CollapsibleForm,
  type CollapsibleFormState,
  type CollapsibleFormType,
} from "@/components/ui";

import { CodeBlock } from "@/components/docs/code-block";
import { ComponentPreview } from "@/components/docs/component-preview";
import { VERSION } from "@/lib/version";

export default function CollapsibleFormDemo() {
  const [formStates, setFormStates] = React.useState<Record<CollapsibleFormType, CollapsibleFormState>>({
    "job-details": "expanded",
    "test-objectives": "collapsed",
    "budget-duration": "collapsed",
  });

  const handleToggle = (type: CollapsibleFormType) => {
    setFormStates((prev) => ({
      ...prev,
      [type]: prev[type] === "expanded" ? "collapsed" : "expanded",
    }));
  };

  const handleNext = (type: CollapsibleFormType) => {
    const order: CollapsibleFormType[] = ["job-details", "test-objectives", "budget-duration"];
    const currentIndex = order.indexOf(type);
    
    setFormStates((prev) => {
      const newStates = { ...prev };
      newStates[type] = "completed";
      if (currentIndex < order.length - 1) {
        newStates[order[currentIndex + 1]] = "expanded";
      }
      return newStates;
    });
  };

  return (
    <div className="container max-w-6xl py-12 px-4 md:px-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">Collapsible Form</h1>
          <span className="text-sm text-muted-foreground">{VERSION}</span>
        </div>
        <p className="text-lg text-muted-foreground">
          Multi-step collapsible forms for guided user input. Each section can be expanded, collapsed, or marked as completed.
        </p>
      </div>

      <Tabs defaultValue="examples" className="space-y-8">
        <TabsList>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
        </TabsList>

        <TabsContent value="examples" className="space-y-8">
          {/* Interactive Multi-Step Form */}
          <div id="interactive-form" className="scroll-mt-20 space-y-4">
            <ComponentPreview title="Interactive Multi-Step Form">
              <div className="flex flex-col gap-4 w-full items-center">
                <CollapsibleForm
                  type="job-details"
                  state={formStates["job-details"]}
                  stepNumber={1}
                  onToggle={() => handleToggle("job-details")}
                  onNext={() => handleNext("job-details")}
                />
                <CollapsibleForm
                  type="test-objectives"
                  state={formStates["test-objectives"]}
                  stepNumber={2}
                  onToggle={() => handleToggle("test-objectives")}
                  onNext={() => handleNext("test-objectives")}
                />
                <CollapsibleForm
                  type="budget-duration"
                  state={formStates["budget-duration"]}
                  stepNumber={3}
                  onToggle={() => handleToggle("budget-duration")}
                  onNext={() => handleNext("budget-duration")}
                />
              </div>
            </ComponentPreview>
            <CodeBlock
              code={`import { CollapsibleForm } from "@/components/ui";

// Multi-step form with state management
const [formStates, setFormStates] = useState({
  "job-details": "expanded",
  "test-objectives": "collapsed",
  "budget-duration": "collapsed",
});

<CollapsibleForm
  type="job-details"
  state={formStates["job-details"]}
  stepNumber={1}
  onToggle={() => handleToggle("job-details")}
  onNext={() => handleNext("job-details")}
/>
<CollapsibleForm
  type="test-objectives"
  state={formStates["test-objectives"]}
  stepNumber={2}
  onToggle={() => handleToggle("test-objectives")}
  onNext={() => handleNext("test-objectives")}
/>
<CollapsibleForm
  type="budget-duration"
  state={formStates["budget-duration"]}
  stepNumber={3}
  onToggle={() => handleToggle("budget-duration")}
  onNext={() => handleNext("budget-duration")}
/>`}
              language="tsx"
            />
          </div>

          {/* States */}
          <div id="states" className="scroll-mt-20 space-y-4">
            <ComponentPreview title="Form States">
              <div className="flex flex-col gap-6 w-full items-center">
                <div className="space-y-2 w-full flex flex-col items-center">
                  <h4 className="text-sm font-medium text-muted-foreground self-start">Collapsed</h4>
                  <CollapsibleForm
                    type="job-details"
                    state="collapsed"
                    stepNumber={1}
                  />
                </div>
                <div className="space-y-2 w-full flex flex-col items-center">
                  <h4 className="text-sm font-medium text-muted-foreground self-start">Expanded</h4>
                  <CollapsibleForm
                    type="job-details"
                    state="expanded"
                    stepNumber={1}
                  />
                </div>
                <div className="space-y-2 w-full flex flex-col items-center">
                  <h4 className="text-sm font-medium text-muted-foreground self-start">Completed</h4>
                  <CollapsibleForm
                    type="job-details"
                    state="completed"
                    stepNumber={1}
                  />
                </div>
              </div>
            </ComponentPreview>
            <CodeBlock
              code={`// Collapsed state
<CollapsibleForm type="job-details" state="collapsed" stepNumber={1} />

// Expanded state
<CollapsibleForm type="job-details" state="expanded" stepNumber={1} />

// Completed state
<CollapsibleForm type="job-details" state="completed" stepNumber={1} />`}
              language="tsx"
            />
          </div>

          {/* Form Types */}
          <div id="form-types" className="scroll-mt-20 space-y-4">
            <ComponentPreview title="Form Types (Expanded)">
              <div className="flex flex-col gap-6 w-full items-center">
                <div className="space-y-2 w-full flex flex-col items-center">
                  <h4 className="text-sm font-medium text-muted-foreground self-start">Job Details</h4>
                  <CollapsibleForm
                    type="job-details"
                    state="expanded"
                    stepNumber={1}
                  />
                </div>
                <div className="space-y-2 w-full flex flex-col items-center">
                  <h4 className="text-sm font-medium text-muted-foreground self-start">Test Objectives</h4>
                  <CollapsibleForm
                    type="test-objectives"
                    state="expanded"
                    stepNumber={2}
                  />
                </div>
                <div className="space-y-2 w-full flex flex-col items-center">
                  <h4 className="text-sm font-medium text-muted-foreground self-start">Budget & Duration</h4>
                  <CollapsibleForm
                    type="budget-duration"
                    state="expanded"
                    stepNumber={3}
                  />
                </div>
              </div>
            </ComponentPreview>
            <CodeBlock
              code={`// Job Details form
<CollapsibleForm type="job-details" state="expanded" stepNumber={1} />

// Test Objectives form
<CollapsibleForm type="test-objectives" state="expanded" stepNumber={2} />

// Budget & Duration form
<CollapsibleForm type="budget-duration" state="expanded" stepNumber={3} />`}
              language="tsx"
            />
          </div>
        </TabsContent>

        <TabsContent value="usage" className="space-y-6">
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <h2>Usage</h2>
            <p>
              The CollapsibleForm component is designed for multi-step form flows where users need to complete
              sections in sequence. Each form section can be in one of three states: collapsed, expanded, or completed.
            </p>

            <h3>Basic Usage</h3>
            <CodeBlock
              code={`import { CollapsibleForm } from "@/components/ui";

function JobPostingForm() {
  return (
    <div className="flex flex-col gap-4">
      <CollapsibleForm
        type="job-details"
        state="expanded"
        stepNumber={1}
        onToggle={() => {}}
        onNext={() => {}}
      />
    </div>
  );
}`}
              language="tsx"
            />

            <h3>With Custom Content</h3>
            <p>
              You can provide custom content by passing children to the CollapsibleForm component.
              This allows you to customize the form fields while maintaining the collapsible behavior.
            </p>
            <CodeBlock
              code={`<CollapsibleForm
  type="job-details"
  state="expanded"
  stepNumber={1}
>
  <div className="flex flex-col gap-4">
    <Input placeholder="Custom field" />
    <Textarea placeholder="Custom description" />
  </div>
</CollapsibleForm>`}
              language="tsx"
            />
          </div>
        </TabsContent>

        <TabsContent value="api" className="space-y-6">
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <h2>API Reference</h2>

            <h3>CollapsibleForm Props</h3>
            <table className="w-full">
              <thead>
                <tr>
                  <th>Prop</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>type</code></td>
                  <td><code>&quot;job-details&quot; | &quot;test-objectives&quot; | &quot;budget-duration&quot;</code></td>
                  <td>Required</td>
                  <td>The type of form section to render</td>
                </tr>
                <tr>
                  <td><code>state</code></td>
                  <td><code>&quot;collapsed&quot; | &quot;expanded&quot; | &quot;completed&quot;</code></td>
                  <td><code>&quot;collapsed&quot;</code></td>
                  <td>The current state of the form section</td>
                </tr>
                <tr>
                  <td><code>stepNumber</code></td>
                  <td><code>number</code></td>
                  <td><code>1</code></td>
                  <td>The step number displayed in the header</td>
                </tr>
                <tr>
                  <td><code>onToggle</code></td>
                  <td><code>() =&gt; void</code></td>
                  <td>-</td>
                  <td>Callback when the expand/collapse button is clicked</td>
                </tr>
                <tr>
                  <td><code>onNext</code></td>
                  <td><code>() =&gt; void</code></td>
                  <td>-</td>
                  <td>Callback when the Next button is clicked</td>
                </tr>
                <tr>
                  <td><code>children</code></td>
                  <td><code>React.ReactNode</code></td>
                  <td>-</td>
                  <td>Custom content to render instead of default form fields</td>
                </tr>
                <tr>
                  <td><code>className</code></td>
                  <td><code>string</code></td>
                  <td>-</td>
                  <td>Additional CSS classes</td>
                </tr>
              </tbody>
            </table>

            <h3>Exported Components</h3>
            <ul>
              <li><code>CollapsibleForm</code> - Main collapsible form component</li>
              <li><code>StepIndicator</code> - Step status indicator (idle, active, completed)</li>
              <li><code>DurationOption</code> - Duration selection button (30, 60, 90 days)</li>
              <li><code>ObjectiveItem</code> - Objective list item with badge</li>
            </ul>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
