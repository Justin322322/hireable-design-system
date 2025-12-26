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
import { ProfileCard, GoalCard, UserRoleCard } from "@/patterns/cards";

// Import JSON data (simulates API response)
import cardsData from "@/data/cards.json";

// ============================================================================
// TYPE DEFINITIONS - Backend-ready interfaces
// ============================================================================
interface Profile {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  salary: string;
  experience: string;
  activityTitle?: string;
}
interface Goal {
  id: string;
  title: string;
  type: "Automatic" | "Manual";
  progress: number;
  completedResults: number;
  totalResults: number;
  dueDate: string;
}
// Cast imported JSON to typed data
const profileData = cardsData.profile as Profile;
const goalData = cardsData.goal as Goal;
// Note: ProfileCard, GoalCard, and UserRoleCard are now imported from @/patterns/cards
// This demonstrates the extracted, reusable patterns in action
export default function CardPage() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:px-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">Card</h1>
          <span className="text-sm text-muted-foreground">{VERSION}</span>
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
<ComponentPreview title="Profile Card">
            <div className="flex justify-center">
              <ProfileCard
                name={profileData.name}
                role={profileData.role}
                metadata={[
                  { value: profileData.salary },
                  { value: profileData.experience }
                ]}
                footer={{
                  label: profileData.activityTitle,
                  action: { onClick: () => console.log("View profile") }
                }}
              />
            </div>
          </ComponentPreview>
          <CodeBlock
            code={`import { ProfileCard } from "@/patterns/cards";

<ProfileCard
  name="Sarah Johnson"
  role="Senior Product Designer"
  metadata={[
    { value: "$100k - $130k" },
    { value: "8+ years" }
  ]}
  footer={{
    label: "Last active 1 hour ago",
    action: { onClick: () => viewProfile() }
  }}
/>`}
            language="tsx"
          />
          <ComponentPreview title="User Role Selection">
            <div className="flex flex-col gap-6 w-full max-w-[720px] mx-auto">
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-muted-foreground">Example: Remote Talent</h4>
                <UserRoleCard
                  title="I'm a Remote Talent"
                  description="Find global opportunities and work with great teams that fit your style."
                  image="/images/talent-select.svg"
                  titleFont="primary"
                />
              </div>
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-muted-foreground">Example: Employer</h4>
                <UserRoleCard
                  title="I'm an Employer"
                  description="Post jobs, manage trials, and hire top remote talent with confidence."
                  image="/images/employer-select.svg"
                  titleFont="secondary"
                />
              </div>
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-muted-foreground">State: Hover</h4>
                <UserRoleCard
                  title="I'm a Remote Talent"
                  description="Find global opportunities and work with great teams that fit your style."
                  image="/images/talent-select.svg"
                  variant="hover"
                />
              </div>
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-muted-foreground">State: Selected</h4>
                <UserRoleCard
                  title="I'm a Remote Talent"
                  description="Find global opportunities and work with great teams that fit your style."
                  image="/images/talent-select.svg"
                  selected={true}
                />
              </div>
            </div>
          </ComponentPreview>
          <CodeBlock
            code={`import { UserRoleCard } from "@/patterns/cards";

<UserRoleCard
  title="I'm a Remote Talent"
  description="Find global opportunities."
  image="/images/talent-select.svg"
  onClick={() => selectRole('talent')}
/>`}
            language="tsx"
          />
<ComponentPreview title="Goals Card">
            <div className="flex justify-center">
              <GoalCard
                title={goalData.title}
                badge={{ label: goalData.type }}
                progress={goalData.progress}
                metrics={[
                  { label: "key results completed", current: goalData.completedResults, total: goalData.totalResults },
                  { label: "Due", value: goalData.dueDate }
                ]}
              />
            </div>
          </ComponentPreview>
          <CodeBlock
            code={`import { GoalCard } from "@/patterns/cards";

<GoalCard
  title="Increase user engagement by 25%"
  badge={{ label: "Automatic" }}
  progress={68}
  metrics={[
    { label: "key results completed", current: 3, total: 5 },
    { label: "Due", value: "Dec 31, 2024" }
  ]}
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
            <h2 className="mb-4 text-xl font-semibold">Profile Interface</h2>
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
                    <td className="py-3">Unique identifier</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">name</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Full name</td>
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
                    <td className="py-3">Salary amount</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">experience</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Years of experience</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section>
            <h2 className="mb-4 text-xl font-semibold">Goal Interface</h2>
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
                    <td className="py-3">Unique identifier</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">title</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Goal title</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">type</td>
                    <td className="py-3 font-mono">&quot;Automatic&quot; | &quot;Manual&quot;</td>
                    <td className="py-3">Goal tracking type</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">progress</td>
                    <td className="py-3 font-mono">number</td>
                    <td className="py-3">Progress percentage (0-100)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">completedResults</td>
                    <td className="py-3 font-mono">number</td>
                    <td className="py-3">Number of completed key results</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">totalResults</td>
                    <td className="py-3 font-mono">number</td>
                    <td className="py-3">Total number of key results</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">dueDate</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Due date string</td>
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
