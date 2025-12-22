
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/docs/code-block";
import { ComponentPreview } from "@/components/docs/component-preview";
import { ChevronRight } from "lucide-react";
import { VERSION } from "@/lib/version";

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

// ============================================================================
// COMPONENTS
// ============================================================================

function ProfileCard({ name, role, salary, experience, activityTitle }: Omit<Profile, "id" | "avatar">) {
  return (
    <div className="flex flex-col items-start gap-2.5 p-4 bg-background border border-neutral-300 rounded-lg w-96 transition-colors hover:bg-neutral-100 hover:border-neutral-300 cursor-pointer">
      <div className="flex flex-row items-center gap-2.5 w-full">
        <div className="w-14 h-14 rounded-full bg-gray-300 shrink-0" />
        <div className="flex flex-col items-start gap-1 flex-1">
          <p className="font-semibold text-sm text-neutral-900 leading-[120%]">{name}</p>
          <p className="font-normal text-xs text-neutral-900 leading-[120%]">{role}</p>
        </div>
      </div>
      <div className="flex flex-row items-center gap-6 w-full text-xs text-neutral-900">
        <span>{salary}</span>
        <span>{experience}</span>
      </div>
      <div className="flex flex-row items-center justify-between gap-4 w-full">
        <span className="text-xs text-neutral-900">{activityTitle}</span>
        <Button size="sm" className="rounded-full w-6 h-6 p-0 bg-client hover:bg-client-active">
          <ChevronRight className="w-3.5 h-3.5" />
        </Button>
      </div>
    </div>
  );
}

function GoalCard({ title, type, progress, completedResults, totalResults, dueDate }: Omit<Goal, "id">) {
  return (
    <div className="flex flex-col items-start gap-5 p-4 bg-background border border-neutral-300 rounded-lg w-96 transition-colors hover:bg-neutral-100 hover:border-neutral-300 cursor-pointer">
      <div className="flex items-start justify-between w-full">
        <div className="flex-1 flex items-center">
          <p className="font-semibold text-sm text-neutral-900 leading-normal tracking-[0.02em]">
            {title}
          </p>
        </div>
        <span className="bg-neutral-100 border border-neutral-200 px-2 py-0.5 rounded-full text-[10px] text-neutral-600 font-medium whitespace-nowrap">
          {type}
        </span>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center">
          <span className="font-semibold text-2xl text-neutral-900 leading-[1.2]">
            {progress}%
          </span>
        </div>
        <div className="flex items-center w-full h-2">
          <div className="flex-1 bg-neutral-100 rounded-full h-1.5 overflow-hidden">
            <div className="bg-client h-full rounded-full" style={{ width: `${progress}%` }} />
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          <span className="text-xs text-neutral-600 leading-[1.2] tracking-[0.02em]">
            {completedResults} of {totalResults} key results completed
          </span>
          <span className="text-xs text-neutral-600 leading-[1.2] tracking-[0.02em]">
            {dueDate}
          </span>
        </div>
      </div>
    </div>
  );
}

interface UserRoleCardProps {
  role: "talent" | "employer";
  title: string;
  description: string;
  image: string;
  variant?: "enabled" | "hover" | "pressed";
}

function UserRoleCard({ role, title, description, image, variant = "enabled" }: UserRoleCardProps) {
  return (
    <div
      className={cn(
        "relative flex w-full max-w-[720px] items-center gap-4 rounded-2xl border p-2 transition-all cursor-pointer",
        // Height 192px from Figma
        "h-[192px]",
        // Dynamic styles based on variant using semantic tokens
        variant === "enabled" && "border-button-tertiary-border bg-background",
        variant === "hover" && "border-button-tertiary-border bg-button-tertiary-hover",
        variant === "pressed" && "border-border-focused bg-button-secondary-default"
      )}
    >
      <div className="flex flex-1 items-center gap-4 rounded-lg bg-background py-0 pl-6 pr-10 h-full">
        <div className="flex flex-1 flex-col gap-3">
          <h3 className={cn(
            "text-xl leading-[150%] tracking-[0.4px] text-foreground",
            role === "talent" ? "font-nunito font-bold" : "font-secondary font-semibold"
          )}>
            {title}
          </h3>
          <p className={cn(
            "text-sm font-normal leading-[120%] tracking-[0.2px] text-muted-foreground",
            role === "talent" ? "font-nunito" : "font-secondary"
          )}>
            {description}
          </p>
        </div>
        <div className="shrink-0">
          <Image
            src={image}
            alt={role}
            width={140}
            height={140}
            className="h-[140px] w-[140px]"
          />
        </div>
      </div>
    </div>
  );
}

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
              <ProfileCard {...profileData} />
            </div>
          </ComponentPreview>

          <CodeBlock
            code={`import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface ProfileCardProps {
  name: string;
  role: string;
  salary: string;
  experience: string;
  activityTitle?: string;
}

function ProfileCard({ name, role, salary, experience, activityTitle }: ProfileCardProps) {
  return (
    <div className="flex flex-col items-start gap-2.5 p-4 bg-background border border-neutral-300 rounded-lg w-96 transition-colors hover:bg-neutral-100 hover:border-neutral-300 cursor-pointer">
      <div className="flex flex-row items-center gap-2.5 w-full">
        <div className="w-14 h-14 rounded-full bg-gray-300 shrink-0" />
        <div className="flex flex-col items-start gap-1 flex-1">
          <p className="font-semibold text-sm text-neutral-900 leading-[120%]">{name}</p>
          <p className="font-normal text-xs text-neutral-900 leading-[120%]">{role}</p>
        </div>
      </div>
      <div className="flex flex-row items-center gap-6 w-full text-xs text-neutral-900">
        <span>{salary}</span>
        <span>{experience}</span>
      </div>
      <div className="flex flex-row items-center justify-between gap-4 w-full">
        <span className="text-xs text-neutral-900">{activityTitle}</span>
        <Button size="sm" className="rounded-full w-6 h-6 p-0 bg-client hover:bg-client-active">
          <ChevronRight className="w-3.5 h-3.5" />
        </Button>
      </div>
    </div>
  );
}`}
            language="tsx"
          />

          <ComponentPreview title="User Role Selection">
            <div className="flex flex-col gap-6 w-full max-w-[720px] mx-auto">
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-muted-foreground">Example: Remote Talent</h4>
                <UserRoleCard
                  role="talent"
                  title="I'm a Remote Talent"
                  description="Find global opportunities and work with great teams that fit your style."
                  image="/images/talent-select.svg"
                  variant="enabled"
                />
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-medium text-muted-foreground">Example: Employer</h4>
                <UserRoleCard
                  role="employer"
                  title="I'm an Employer"
                  description="Post jobs, manage trials, and hire top remote talent with confidence."
                  image="/images/employer-select.svg"
                  variant="enabled"
                />
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-medium text-muted-foreground">State: Hover</h4>
                <UserRoleCard
                  role="talent"
                  title="I'm a Remote Talent"
                  description="Find global opportunities and work with great teams that fit your style."
                  image="/images/talent-select.svg"
                  variant="hover"
                />
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-medium text-muted-foreground">State: Pressed</h4>
                <UserRoleCard
                  role="talent"
                  title="I'm a Remote Talent"
                  description="Find global opportunities and work with great teams that fit your style."
                  image="/images/talent-select.svg"
                  variant="pressed"
                />
              </div>
            </div>
          </ComponentPreview>

          <CodeBlock
            code={`import Image from "next/image";
import { cn } from "@/lib/utils";

interface UserRoleCardProps {
  role: "talent" | "employer";
  title: string;
  description: string;
  image: string;
  variant?: "enabled" | "hover" | "pressed";
}

function UserRoleCard({ role, title, description, image, variant = "enabled" }: UserRoleCardProps) {
  return (
    <div
      className={cn(
        "relative flex w-full max-w-[720px] items-center gap-4 rounded-2xl border p-2 transition-all cursor-pointer",
        // Height 192px from Figma
        "h-[192px]",
        // Dynamic styles based on variant using semantic tokens
        variant === "enabled" && "border-button-tertiary-border bg-background",
        variant === "hover" && "border-button-tertiary-border bg-button-tertiary-hover",
        variant === "pressed" && "border-border-focused bg-button-secondary-default"
      )}
    >
      <div className="flex flex-1 items-center gap-4 rounded-lg bg-background py-0 pl-6 pr-10 h-full">
        <div className="flex flex-1 flex-col gap-3">
          <h3 className={cn(
            "text-xl leading-[150%] tracking-[0.4px] text-foreground",
            role === "talent" ? "font-nunito font-bold" : "font-secondary font-semibold"
          )}>
            {title}
          </h3>
          <p className={cn(
            "text-sm font-normal leading-[120%] tracking-[0.2px] text-muted-foreground",
            role === "talent" ? "font-nunito" : "font-secondary"
          )}>
            {description}
          </p>
        </div>
        <div className="shrink-0">
          <Image
            src={image}
            alt={role}
            width={140}
            height={140}
            className="h-[140px] w-[140px]"
          />
        </div>
      </div>
    </div>
  );
}`}
            language="tsx"
          />



          <ComponentPreview title="Goals Card">
            <div className="flex justify-center">
              <GoalCard {...goalData} />
            </div>
          </ComponentPreview>

          <CodeBlock
            code={`interface GoalCardProps {
  title: string;
  type: "Automatic" | "Manual";
  progress: number;
  completedResults: number;
  totalResults: number;
  dueDate: string;
}

function GoalCard({ title, type, progress, completedResults, totalResults, dueDate }: GoalCardProps) {
  return (
    <div className="flex flex-col items-start gap-5 p-4 bg-background border border-neutral-300 rounded-lg w-96 transition-colors hover:bg-neutral-100 hover:border-neutral-300 cursor-pointer">
      <div className="flex items-start justify-between w-full">
        <div className="flex-1 flex items-center">
          <p className="font-semibold text-sm text-neutral-900 leading-normal tracking-[0.02em]">
            {title}
          </p>
        </div>
        <span className="bg-neutral-100 border border-neutral-200 px-2 py-0.5 rounded-full text-[10px] text-neutral-600 font-medium whitespace-nowrap">
          {type}
        </span>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center">
          <span className="font-semibold text-2xl text-neutral-900 leading-[1.2]">
            {progress}%
          </span>
        </div>
        <div className="flex items-center w-full h-2">
          <div className="flex-1 bg-neutral-100 rounded-full h-1.5 overflow-hidden">
            <div className="bg-client h-full rounded-full" style={{ width: \`\${progress}%\` }} />
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          <span className="text-xs text-neutral-600 leading-[1.2] tracking-[0.02em]">
            {completedResults} of {totalResults} key results completed
          </span>
          <span className="text-xs text-neutral-600 leading-[1.2] tracking-[0.02em]">
            {dueDate}
          </span>
        </div>
      </div>
    </div>
  );
}`}
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
