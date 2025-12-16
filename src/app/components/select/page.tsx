import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CodeBlock } from "@/components/docs/code-block";
import { ComponentPreview } from "@/components/docs/component-preview";

export default function SelectPage() {
  return (
    <div className="container max-w-4xl py-12 px-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">Select</h1>
          <Badge>Stable</Badge>
        </div>
        <p className="text-lg text-muted-foreground">
          Select allows users to choose from a list of options. Use when there are more than 5 options.
        </p>
      </div>

      <Tabs defaultValue="examples" className="space-y-8">
        <TabsList>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
        </TabsList>

        <TabsContent value="examples" className="space-y-8">
          <ComponentPreview title="Default Select">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Option 1</SelectItem>
                <SelectItem value="2">Option 2</SelectItem>
                <SelectItem value="3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </ComponentPreview>

          <CodeBlock
            code={`<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select an option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="1">Option 1</SelectItem>
    <SelectItem value="2">Option 2</SelectItem>
    <SelectItem value="3">Option 3</SelectItem>
  </SelectContent>
</Select>`}
            language="tsx"
          />

          <ComponentPreview title="With Label">
            <div className="space-y-2">
              <label htmlFor="country" className="text-sm font-medium">
                Country
              </label>
              <Select>
                <SelectTrigger id="country" className="w-[280px]">
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="au">Australia</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </ComponentPreview>

          <ComponentPreview title="Disabled">
            <Select disabled>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Disabled select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Option 1</SelectItem>
              </SelectContent>
            </Select>
          </ComponentPreview>
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
                    <li>Use for 5+ options</li>
                    <li>Use when space is limited</li>
                    <li>Use for mutually exclusive choices</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-red-600">Don&apos;t</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Use for fewer than 5 options (use radio buttons)</li>
                    <li>Use for multi-select (use checkboxes)</li>
                    <li>Hide critical options in a select</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="api" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Props</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-3 text-left font-medium">Prop</th>
                    <th className="py-3 text-left font-medium">Type</th>
                    <th className="py-3 text-left font-medium">Description</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">value</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">The value of the select</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">onValueChange</td>
                    <td className="py-3 font-mono">function</td>
                    <td className="py-3">Event handler for value changes</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">defaultValue</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">The default value of the select</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">disabled</td>
                    <td className="py-3 font-mono">boolean</td>
                    <td className="py-3">Disable the select</td>
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
