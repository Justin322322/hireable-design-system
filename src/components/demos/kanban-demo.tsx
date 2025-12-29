"use client";

import {
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

// Import extracted patterns
import { ApplicationCard, CandidateCard, KanbanColumn } from "@/patterns/kanban";

// Import JSON data (simulates API response)
import kanbanData from "@/data/kanban.json";
// ============================================================================
// TYPE DEFINITIONS - Backend-ready interfaces
// ============================================================================
interface Application {
  id: string;
  company: string;
  position: string;
  salary: string;
  experience: string;
  status: "FULL-TIME" | "PART-TIME" | "CONTRACT" | string;
  postedTime: string;
}
interface Candidate {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  salary: string;
  experience: string;
  matchStatus?: string;
}
interface KanbanColumnData<T> {
  id: string;
  title: string;
  count: number;
  items: T[];
}
// Cast imported JSON to typed data
const applicationsColumnData = kanbanData.applicationsColumn as KanbanColumnData<Application>;
const candidatesColumnData = kanbanData.candidatesColumn as KanbanColumnData<Candidate>;

// Note: ApplicationCard, CandidateCard, and KanbanColumn are now imported from @/patterns/kanban
// This demonstrates the extracted, reusable patterns in action
export default function KanbanPage() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:px-8 overflow-hidden">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">Kanban</h1>
          <span className="text-sm text-muted-foreground">{VERSION}</span>
        </div>
        <p className="text-lg text-muted-foreground">
          Kanban columns organize items into stages. Ideal for tracking workflows, pipelines, and progress.
        </p>
      </div>
      <Tabs defaultValue="examples" className="space-y-8">
        <TabsList>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
        </TabsList>
        <TabsContent value="examples" className="space-y-8">
          <ComponentPreview title="Job Applications Column">
            <div className="flex justify-center p-4">
              <KanbanColumn
                title={applicationsColumnData.title}
                items={applicationsColumnData.items}
                renderItem={(app) => (
                  <ApplicationCard
                    company={app.company}
                    position={app.position}
                    metadata={[{ value: app.salary }, { value: app.experience }]}
                    badge={{ label: app.status, matched: app.status.includes("MATCHED") }}
                    timestamp={app.postedTime}
                    footer={{ label: "Activity Title", action: { onClick: () => {} } }}
                  />
                )}
                keyExtractor={(app) => app.id}
              />
            </div>
          </ComponentPreview>
          <ComponentPreview title="Candidates Column (Profile Cards)">
            <div className="flex justify-center p-4">
              <KanbanColumn
                title={candidatesColumnData.title}
                items={candidatesColumnData.items}
                renderItem={(candidate) => (
                  <CandidateCard
                    name={candidate.name}
                    role={candidate.role}
                    metadata={[{ value: candidate.salary }, { value: candidate.experience }]}
                    badge={candidate.matchStatus ? { label: candidate.matchStatus, variant: "ontrack" } : undefined}
                    footer={{ label: "Activity Title", actions: { menu: { onClick: () => {} }, details: { onClick: () => {} } } }}
                  />
                )}
                keyExtractor={(candidate) => candidate.id}
              />
            </div>
          </ComponentPreview>
          <CodeBlock
            code={`import { KanbanColumn, ApplicationCard } from "@/patterns/kanban";

<KanbanColumn
  title="Applied"
  items={applications}
  renderItem={(app) => (
    <ApplicationCard
      company={app.company}
      position={app.position}
      metadata={[{ value: app.salary }, { value: app.experience }]}
      badge={{ label: app.status }}
      timestamp={app.postedTime}
    />
  )}
/>`}
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
                    <li>Use for workflow visualization (job pipelines, project stages)</li>
                    <li>Show clear status indicators on cards</li>
                    <li>Keep column count manageable (4-6 max)</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-red-600">Don&apos;t</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Overload cards with too much information</li>
                    <li>Use for simple lists without stages</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>
        <TabsContent value="api" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">KanbanColumnData&lt;T&gt;</h2>
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
                    <td className="py-3 font-mono text-foreground">id</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Unique column identifier</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">title</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Column header text</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">count</td>
                    <td className="py-3 font-mono">number</td>
                    <td className="py-3">Number of items in column</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">items</td>
                    <td className="py-3 font-mono">T[]</td>
                    <td className="py-3">Array of card data objects</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section>
            <h2 className="mb-4 text-xl font-semibold">Application Interface</h2>
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
                    <td className="py-3 font-mono text-foreground">id</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Unique application identifier</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">company</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Company name</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">position</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Job position title</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">salary</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Salary range</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">experience</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Experience requirement</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">status</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">FULL-TIME, PART-TIME, CONTRACT, etc.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">postedTime</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Posted time text</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section>
            <h2 className="mb-4 text-xl font-semibold">Candidate Interface</h2>
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
                    <td className="py-3 font-mono text-foreground">id</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Unique candidate identifier</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">name</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Candidate full name</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">role</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Job role/title</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">avatar</td>
                    <td className="py-3 font-mono">string?</td>
                    <td className="py-3">Avatar image URL (optional)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">salary</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Salary expectation</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">experience</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Years of experience</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">matchStatus</td>
                    <td className="py-3 font-mono">string?</td>
                    <td className="py-3">Match percentage (optional)</td>
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
