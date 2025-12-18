"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/docs/code-block";
import { ComponentPreview } from "@/components/docs/component-preview";

export default function TabsPage() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:px-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">Tabs</h1>
          <Badge variant="outline">Stable</Badge>
        </div>
        <p className="text-lg text-muted-foreground">
          Tabs organize content into separate views where only one view is visible at a time.
        </p>
      </div>

      <Tabs defaultValue="examples" className="space-y-8">
        <TabsList>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
        </TabsList>

        <TabsContent value="examples" className="space-y-8">
          <ComponentPreview title="Default Tabs">
            <Tabs defaultValue="tab1" className="w-full max-w-md">
              <TabsList>
                <TabsTrigger value="tab1">Account</TabsTrigger>
                <TabsTrigger value="tab2">Password</TabsTrigger>
                <TabsTrigger value="tab3">Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1" className="p-4">
                <p className="text-sm text-muted-foreground">
                  Manage your account settings and preferences.
                </p>
              </TabsContent>
              <TabsContent value="tab2" className="p-4">
                <p className="text-sm text-muted-foreground">
                  Change your password and security settings.
                </p>
              </TabsContent>
              <TabsContent value="tab3" className="p-4">
                <p className="text-sm text-muted-foreground">
                  Configure application settings.
                </p>
              </TabsContent>
            </Tabs>
          </ComponentPreview>

          <CodeBlock
            code={`<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Account</TabsTrigger>
    <TabsTrigger value="tab2">Password</TabsTrigger>
    <TabsTrigger value="tab3">Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    Account content
  </TabsContent>
  <TabsContent value="tab2">
    Password content
  </TabsContent>
  <TabsContent value="tab3">
    Settings content
  </TabsContent>
</Tabs>`}
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
                    <li>Use to organize related content into sections</li>
                    <li>Use when users don&apos;t need to see all content at once</li>
                    <li>Keep tab labels short and descriptive</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-red-600">Don&apos;t</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Use for navigation between pages</li>
                    <li>Use more than 5-6 tabs</li>
                    <li>Hide critical information in tabs</li>
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
                    <td className="py-3 font-mono text-foreground">Tabs</td>
                    <td className="py-3">Root container with defaultValue prop</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">TabsList</td>
                    <td className="py-3">Container for tab triggers</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">TabsTrigger</td>
                    <td className="py-3">Clickable tab button with value prop</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">TabsContent</td>
                    <td className="py-3">Content panel with matching value prop</td>
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
