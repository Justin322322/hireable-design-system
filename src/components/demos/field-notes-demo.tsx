"use client";

import { Card, CardContent, CardHeader, CardTitle, Tabs, TabsContent, TabsList, TabsTrigger, FieldNote, Icon } from "@/components/ui";
import { CodeBlock, ComponentPreview, PropsTable, VariantsTable } from "@/components/docs";
import { VERSION } from "@/lib/version";

// Props data for API tab
const fieldNoteProps = [
  { name: "variant", type: '"info" | "warning" | "success" | "error"', defaultValue: '"info"', description: "Visual variant of the field note" },
  { name: "hideIcon", type: "boolean", defaultValue: "false", description: "Whether to hide the icon" },
  { name: "children", type: "ReactNode", defaultValue: "-", description: "Content of the field note" },
  { name: "className", type: "string", defaultValue: "-", description: "Additional classes" },
];

const fieldNoteVariants = [
  { name: "info", description: "Blue background for informational messages", useCase: "Helpful tips, context, guidance" },
  { name: "warning", description: "Yellow background for warning messages", useCase: "Cautions, potential issues" },
  { name: "success", description: "Green background for success messages", useCase: "Confirmations, completed actions" },
  { name: "error", description: "Red background for error messages", useCase: "Validation errors, failures" },
];

export default function FieldNotesDemo() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:px-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">Field Notes</h1>
          <span className="text-sm text-muted-foreground">{VERSION}</span>
        </div>
        <p className="text-lg text-muted-foreground">
          Contextual callouts for displaying information, warnings, success, and error messages.
        </p>
      </div>

      <Tabs defaultValue="examples" className="space-y-8">
        <TabsList>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
        </TabsList>

        <TabsContent value="examples" className="space-y-8">
          {/* Variants */}
          <ComponentPreview title="Variants">
            <div className="space-y-6 w-full max-w-xl mx-auto">
              {/* Information */}
              <div className="space-y-2">
                <span className="text-xs text-muted-foreground">info</span>
                <FieldNote variant="info">
                  Lorem ipsum dolor sit amet consectetur. Urna ac ullamcorper aliquet id nullam ut. Maecenas ipsum sed suspendisse enim dolor pellentesque.
                </FieldNote>
              </div>
              
              {/* Warning */}
              <div className="space-y-2">
                <span className="text-xs text-muted-foreground">warning</span>
                <FieldNote variant="warning">
                  Lorem ipsum dolor sit amet consectetur. Urna ac ullamcorper aliquet id nullam ut. Maecenas ipsum sed suspendisse enim dolor pellentesque.
                </FieldNote>
              </div>
              
              {/* Success */}
              <div className="space-y-2">
                <span className="text-xs text-muted-foreground">success</span>
                <FieldNote variant="success">
                  Lorem ipsum dolor sit amet consectetur. Urna ac ullamcorper aliquet id nullam ut. Maecenas ipsum sed suspendisse enim dolor pellentesque.
                </FieldNote>
              </div>
              
              {/* Error */}
              <div className="space-y-2">
                <span className="text-xs text-muted-foreground">error</span>
                <FieldNote variant="error">
                  Lorem ipsum dolor sit amet consectetur. Urna ac ullamcorper aliquet id nullam ut. Maecenas ipsum sed suspendisse enim dolor pellentesque.
                </FieldNote>
              </div>
            </div>
          </ComponentPreview>

          <CodeBlock
            code={`import { FieldNote } from "@/components/ui";

<FieldNote variant="info">
  This is an informational message.
</FieldNote>

<FieldNote variant="warning">
  This is a warning message.
</FieldNote>

<FieldNote variant="success">
  This is a success message.
</FieldNote>

<FieldNote variant="error">
  This is an error message.
</FieldNote>`}
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
                    <li>Use to provide additional context for form fields</li>
                    <li>Use for inline validation feedback</li>
                    <li>Use to communicate status or state changes</li>
                    <li>Keep messages brief and scannable</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-red-600">Don&apos;t</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Don&apos;t use for transient notifications - use Toast instead</li>
                    <li>Don&apos;t overload with multiple field notes</li>
                    <li>Don&apos;t use error variant for non-critical issues</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="api" className="space-y-8">
          <PropsTable title="FieldNote Props" props={fieldNoteProps} />
          <VariantsTable title="Variants" variants={fieldNoteVariants} />

          <section>
            <h2 className="mb-4 text-xl font-semibold">Import</h2>
            <CodeBlock
              code={`import { FieldNote } from "@/components/ui";`}
              language="tsx"
            />
          </section>
        </TabsContent>
      </Tabs>
    </div>
  );
}
