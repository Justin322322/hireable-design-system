import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/docs/code-block";

export default function DataDisplayPatternPage() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-3xl font-bold">Data Display</h1>
        <p className="text-lg text-muted-foreground">
          Patterns for tables, lists, and other ways to display structured data effectively.
        </p>
      </div>

      <Tabs defaultValue="tables" className="space-y-8">
        <TabsList>
          <TabsTrigger value="tables">Tables</TabsTrigger>
          <TabsTrigger value="lists">Lists</TabsTrigger>
          <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
        </TabsList>

        <TabsContent value="tables" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Table Example</h2>
            <Card>
              <CardContent className="py-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="py-3 text-left font-medium">Name</th>
                        <th className="py-3 text-left font-medium">Status</th>
                        <th className="py-3 text-left font-medium">Role</th>
                        <th className="py-3 text-right font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3">John Doe</td>
                        <td className="py-3"><Badge variant="default">Active</Badge></td>
                        <td className="py-3 text-muted-foreground">Admin</td>
                        <td className="py-3 text-right">
                          <button className="text-sm text-primary hover:underline">Edit</button>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">Jane Smith</td>
                        <td className="py-3"><Badge variant="default">Active</Badge></td>
                        <td className="py-3 text-muted-foreground">Editor</td>
                        <td className="py-3 text-right">
                          <button className="text-sm text-primary hover:underline">Edit</button>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">Bob Wilson</td>
                        <td className="py-3"><Badge variant="default" hasBorder>Inactive</Badge></td>
                        <td className="py-3 text-muted-foreground">Viewer</td>
                        <td className="py-3 text-right">
                          <button className="text-sm text-primary hover:underline">Edit</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </section>

          <CodeBlock
            code={`<table className="w-full text-sm">
  <thead>
    <tr className="border-b">
      <th className="py-3 text-left font-medium">Name</th>
      <th className="py-3 text-left font-medium">Status</th>
      <th className="py-3 text-left font-medium">Role</th>
      <th className="py-3 text-right font-medium">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-b">
      <td className="py-3">John Doe</td>
      <td className="py-3"><Badge>Active</Badge></td>
      <td className="py-3 text-muted-foreground">Admin</td>
      <td className="py-3 text-right">
        <button className="text-primary">Edit</button>
      </td>
    </tr>
  </tbody>
</table>`}
            language="tsx"
          />
        </TabsContent>

        <TabsContent value="lists" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">List Example</h2>
            <Card>
              <CardContent className="py-6">
                <ul className="divide-y">
                  <li className="py-4 flex items-center justify-between">
                    <div>
                      <p className="font-medium">Project Alpha</p>
                      <p className="text-sm text-muted-foreground">Updated 2 hours ago</p>
                    </div>
                    <Badge>In Progress</Badge>
                  </li>
                  <li className="py-4 flex items-center justify-between">
                    <div>
                      <p className="font-medium">Project Beta</p>
                      <p className="text-sm text-muted-foreground">Updated yesterday</p>
                    </div>
                    <Badge variant="default">Complete</Badge>
                  </li>
                  <li className="py-4 flex items-center justify-between">
                    <div>
                      <p className="font-medium">Project Gamma</p>
                      <p className="text-sm text-muted-foreground">Updated 3 days ago</p>
                    </div>
                    <Badge variant="default" hasBorder>Pending</Badge>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <CodeBlock
            code={`<ul className="divide-y">
  <li className="py-4 flex items-center justify-between">
    <div>
      <p className="font-medium">Project Alpha</p>
      <p className="text-sm text-muted-foreground">Updated 2 hours ago</p>
    </div>
    <Badge>In Progress</Badge>
  </li>
  <li className="py-4 flex items-center justify-between">
    <div>
      <p className="font-medium">Project Beta</p>
      <p className="text-sm text-muted-foreground">Updated yesterday</p>
    </div>
    <Badge variant="default">Complete</Badge>
  </li>
</ul>`}
            language="tsx"
          />
        </TabsContent>

        <TabsContent value="guidelines" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Best Practices</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Tables vs Lists</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Use tables for comparing data across multiple attributes</li>
                    <li>Use lists for simpler data with fewer attributes</li>
                    <li>Consider cards for rich content with images</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Sorting & Filtering</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Provide sorting and filtering options for large datasets. Make it clear which column is sorted and in which direction.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Pagination</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Use pagination for large datasets. Show 10-25 items per page. Provide clear navigation between pages.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Empty States</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Always handle empty states gracefully. Explain why there&apos;s no data and provide a call to action if appropriate.</p>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>
      </Tabs>
    </div>
  );
}
