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
import { OnThisPageNav } from "@/components/docs/on-this-page-nav";
import { VERSION } from "@/lib/version";

// Import extracted patterns
import { ProfileCard, GoalCard, UserRoleCard, EmptyStateCard, TalentCard, ChecklistCard, SetupCard } from "@/patterns/cards";
import CasesOutlined from "@mui/icons-material/CasesOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import PercentOutlinedIcon from "@mui/icons-material/PercentOutlined";

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
// Navigation items for the right sidebar


export default function CardPage() {
  return (
    <div className="container max-w-6xl py-12 px-4 md:px-8">
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
        <TabsContent value="examples" className="space-y-0">
          <div className="flex gap-8 items-start">
            {/* Main Content Area */}
            <div className="flex-1 min-w-0 space-y-8">
<div id="profile-card" className="scroll-mt-20 space-y-4">
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
</div>
<div id="user-role-card" className="scroll-mt-20 space-y-4">
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
</div>
<div id="goals-card" className="scroll-mt-20 space-y-4">
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
</div>
<div id="empty-state-card" className="scroll-mt-20 space-y-4">
          <ComponentPreview title="Empty State Card">
              <div className="flex flex-col gap-6 items-center">
                {/* Enabled State */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-muted-foreground">State: Enabled</h4>
                  <EmptyStateCard
                    icon={<CasesOutlined sx={{ width: 24, height: 24 }} />}
                    title="No active tests yet"
                    description="Post a job to start attracting talent and launch your first test when you're ready."
                    action={{ label: "Post a job", onClick: () => console.log("Post a job clicked") }}
                    state="enabled"
                    className="w-full max-w-[280px]"
                  />
                </div>
                {/* Hover State */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-muted-foreground">State: Hover</h4>
                  <EmptyStateCard
                    icon={<CasesOutlined sx={{ width: 24, height: 24 }} />}
                    title="No active tests yet"
                    description="Post a job to start attracting talent and launch your first test when you're ready."
                    action={{ label: "Post a job", onClick: () => console.log("Post a job clicked") }}
                    state="hover"
                    className="w-full max-w-[280px]"
                  />
                </div>
                {/* Pressed State */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-muted-foreground">State: Pressed</h4>
                  <EmptyStateCard
                    icon={<CasesOutlined sx={{ width: 24, height: 24 }} />}
                    title="No active tests yet"
                    description="Post a job to start attracting talent and launch your first test when you're ready."
                    action={{ label: "Post a job", onClick: () => console.log("Post a job clicked") }}
                    state="pressed"
                    className="w-full max-w-[280px]"
                  />
                </div>
              </div>
          </ComponentPreview>
          <CodeBlock
            code={`import { EmptyStateCard } from "@/patterns/cards";
import CasesOutlined from "@mui/icons-material/CasesOutlined";

<EmptyStateCard
  icon={<CasesOutlined sx={{ width: 24, height: 24 }} />}
  title="No active tests yet"
  description="Post a job to start attracting talent and launch your first test when you're ready."
  action={{ label: "Post a job", onClick: () => handlePostJob() }}
  state="enabled" // or "hover" | "pressed"
/>`}
            language="tsx"
          />
</div>
<div id="base-card" className="scroll-mt-20 space-y-4">
          <ComponentPreview title="Empty State Card (What's Next)">
              <div className="flex flex-col gap-6 items-center">
                {/* Enabled State */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-muted-foreground">State: Enabled</h4>
                  <EmptyStateCard
                    label="What's next"
                    title="Browse Talents"
                    description="Find talent that fits your role and invite them to apply when ready."
                    action={{ label: "Browse talents", onClick: () => console.log("Browse talents clicked") }}
                    state="enabled"
                    className="w-full max-w-[390px]"
                  />
                </div>
                {/* Hover State */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-muted-foreground">State: Hover</h4>
                  <EmptyStateCard
                    label="What's next"
                    title="Browse Talents"
                    description="Find talent that fits your role and invite them to apply when ready."
                    action={{ label: "Browse talents", onClick: () => console.log("Browse talents clicked") }}
                    state="hover"
                    className="w-full max-w-[390px]"
                  />
                </div>
                {/* Pressed State */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-muted-foreground">State: Pressed</h4>
                  <EmptyStateCard
                    label="What's next"
                    title="Browse Talents"
                    description="Find talent that fits your role and invite them to apply when ready."
                    action={{ label: "Browse talents", onClick: () => console.log("Browse talents clicked") }}
                    state="pressed"
                    className="w-full max-w-[390px]"
                  />
                </div>
              </div>
          </ComponentPreview>
          <CodeBlock
            code={`import { EmptyStateCard } from "@/patterns/cards";

// Empty State Card - What's Next variant (uses label instead of icon)
<EmptyStateCard
  label="What's next"
  title="Browse Talents"
  description="Find talent that fits your role and invite them to apply when ready."
  action={{ label: "Browse talents", onClick: () => handleBrowse() }}
  state="enabled" // or "hover" | "pressed"
/>`}
            language="tsx"
          />
</div>
<div id="talent-card" className="scroll-mt-20 space-y-4">
          <ComponentPreview title="Talent Card">
              <div className="flex flex-col gap-6 items-center">
                {/* Enabled State */}
                <div className="space-y-2 w-full max-w-[320px]">
                  <h4 className="text-sm font-medium text-muted-foreground">State: Enabled</h4>
                  <TalentCard
                    name="Juan Dela Cruz"
                    role="Sales Manager"
                    avatar="/images/juan-delacruz.svg"
                    state="enabled"
                    onCardClick={() => console.log("Talent clicked")}
                    className="w-full max-w-[320px]"
                  />
                </div>
                {/* Hover State */}
                <div className="space-y-2 w-full max-w-[320px]">
                  <h4 className="text-sm font-medium text-muted-foreground">State: Hover</h4>
                  <TalentCard
                    name="Juan Dela Cruz"
                    role="Sales Manager"
                    avatar="/images/juan-delacruz.svg"
                    state="hover"
                    onCardClick={() => console.log("Talent clicked")}
                    className="w-full max-w-[320px]"
                  />
                </div>
                {/* Pressed State */}
                <div className="space-y-2 w-full max-w-[320px]">
                  <h4 className="text-sm font-medium text-muted-foreground">State: Pressed</h4>
                  <TalentCard
                    name="Juan Dela Cruz"
                    role="Sales Manager"
                    avatar="/images/juan-delacruz.svg"
                    state="pressed"
                    onCardClick={() => console.log("Talent clicked")}
                    className="w-full max-w-[320px]"
                  />
                </div>
              </div>
          </ComponentPreview>
          <CodeBlock
            code={`import { TalentCard } from "@/patterns/cards";

<TalentCard
  name="Juan Dela Cruz"
  role="Sales Manager"
  avatar="/images/juan-delacruz.svg"
  onCardClick={() => viewProfile()}
  state="enabled" // or "hover" | "pressed"
/>`}
            language="tsx"
          />
</div>
<div id="active-test-card" className="scroll-mt-20 space-y-4">
          <ComponentPreview title="Active Test Card">
              <div className="flex flex-col gap-6 items-center">
                {/* Enabled State */}
                <div className="space-y-2 w-full max-w-[320px]">
                  <h4 className="text-sm font-medium text-muted-foreground">State: Enabled</h4>
                  <TalentCard
                    name="Sales Manager"
                    role="Nairobi"
                    avatar="/icons/nairobi.svg"
                    state="enabled"
                    onCardClick={() => console.log("Test clicked")}
                    className="w-full max-w-[320px]"
                  />
                </div>
                {/* Hover State */}
                <div className="space-y-2 w-full max-w-[320px]">
                  <h4 className="text-sm font-medium text-muted-foreground">State: Hover</h4>
                  <TalentCard
                    name="Sales Manager"
                    role="Nairobi"
                    avatar="/icons/nairobi.svg"
                    state="hover"
                    onCardClick={() => console.log("Test clicked")}
                    className="w-full max-w-[320px]"
                  />
                </div>
                {/* Pressed State */}
                <div className="space-y-2 w-full max-w-[320px]">
                  <h4 className="text-sm font-medium text-muted-foreground">State: Pressed</h4>
                  <TalentCard
                    name="Sales Manager"
                    role="Nairobi"
                    avatar="/icons/nairobi.svg"
                    state="pressed"
                    onCardClick={() => console.log("Test clicked")}
                    className="w-full max-w-[320px]"
                  />
                </div>
              </div>
          </ComponentPreview>
          <CodeBlock
            code={`import { TalentCard } from "@/patterns/cards";

// Active Test Card - uses TalentCard with icon avatar
<TalentCard
  name="Sales Manager"
  role="Nairobi"
  avatar="/icons/nairobi.svg"
  onCardClick={() => viewTest()}
  state="enabled" // or "hover" | "pressed"
/>`}
            language="tsx"
          />
</div>
<div id="employer-checklist-card" className="scroll-mt-20 space-y-4">
          <ComponentPreview title="Employer Checklist Card">
              <div className="flex flex-col gap-6 w-full max-w-[643px] mx-auto">
                {/* Enabled State */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-muted-foreground">State: Enabled</h4>
                  <ChecklistCard
                    icon={<PersonOutlineIcon sx={{ fontSize: 32 }} />}
                    title="Add company profile"
                    description="Upload your logo"
                    state="enabled"
                    onCardClick={() => console.log("Profile clicked")}
                    className="w-full"
                  />
                </div>
                {/* Hover State */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-muted-foreground">State: Hover</h4>
                  <ChecklistCard
                    icon={<DescriptionOutlinedIcon sx={{ fontSize: 32 }} />}
                    title="Add company description"
                    description="Tell talents about your company"
                    state="hover"
                    onCardClick={() => console.log("Description clicked")}
                    className="w-full"
                  />
                </div>
                {/* Pressed State */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-muted-foreground">State: Pressed</h4>
                  <ChecklistCard
                    icon={<PaymentOutlinedIcon sx={{ fontSize: 32 }} />}
                    title="Set up billing method"
                    description="Add payment details required to start tests"
                    state="pressed"
                    onCardClick={() => console.log("Billing clicked")}
                    className="w-full"
                  />
                </div>
                {/* Another example */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-muted-foreground">Example: Post a job</h4>
                  <ChecklistCard
                    icon={<CasesOutlined sx={{ fontSize: 32 }} />}
                    title="Post a job"
                    description="Create your first job post"
                    state="enabled"
                    onCardClick={() => console.log("Job clicked")}
                    className="w-full"
                  />
                </div>
              </div>
          </ComponentPreview>
          <CodeBlock
            code={`import { ChecklistCard } from "@/patterns/cards";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

<ChecklistCard
  icon={<PersonOutlineIcon sx={{ fontSize: 32 }} />}
  title="Add company profile"
  description="Upload your logo"
  onCardClick={() => handleSetup()}
  state="enabled" // or "hover" | "pressed"
/>`}
            language="tsx"
          />
</div>
<div id="talent-checklist-card" className="scroll-mt-20 space-y-4">
          <ComponentPreview title="Talent Checklist Card">
              <div className="flex flex-col gap-6 w-full max-w-[643px] mx-auto">
                {/* Add profile photo */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-muted-foreground">State: Enabled</h4>
                  <ChecklistCard
                    icon={<PersonOutlineIcon sx={{ fontSize: 32 }} />}
                    title="Add profile photo"
                    description="Upload a photo to build trust with clients"
                    state="enabled"
                    onCardClick={() => console.log("Photo clicked")}
                    className="w-full"
                  />
                </div>
                {/* Add bio */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-muted-foreground">State: Hover</h4>
                  <ChecklistCard
                    icon={<DescriptionOutlinedIcon sx={{ fontSize: 32 }} />}
                    title="Add bio"
                    description="Write about yourself and your experience"
                    state="hover"
                    onCardClick={() => console.log("Bio clicked")}
                    className="w-full"
                  />
                </div>
                {/* Add links */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-muted-foreground">State: Pressed</h4>
                  <ChecklistCard
                    icon={<LinkOutlinedIcon sx={{ fontSize: 32 }} />}
                    title="Add links"
                    description="Link your portfolio, website, or profiles"
                    state="pressed"
                    onCardClick={() => console.log("Links clicked")}
                    className="w-full"
                  />
                </div>
                {/* Additional examples */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-muted-foreground">Example: Add references</h4>
                  <ChecklistCard
                    icon={<GroupOutlinedIcon sx={{ fontSize: 32 }} />}
                    title="Add references"
                    description="Add contact and background to link"
                    state="enabled"
                    onCardClick={() => console.log("References clicked")}
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-muted-foreground">Example: Set up payout</h4>
                  <ChecklistCard
                    icon={<PaymentOutlinedIcon sx={{ fontSize: 32 }} />}
                    title="Set up payout method"
                    description="Add payout method to receive payments"
                    state="enabled"
                    onCardClick={() => console.log("Payout clicked")}
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-muted-foreground">Example: Verify identity</h4>
                  <ChecklistCard
                    icon={<CheckCircleOutlinedIcon sx={{ fontSize: 32 }} />}
                    title="Verify identity"
                    description="Verify your identification for billing"
                    state="enabled"
                    onCardClick={() => console.log("Verify clicked")}
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-muted-foreground">Example: Acknowledge responsibility</h4>
                  <ChecklistCard
                    icon={<PercentOutlinedIcon sx={{ fontSize: 32 }} />}
                    title="Acknowledge tax responsibility"
                    description="Confirm tax obligations for your work"
                    state="enabled"
                    onCardClick={() => console.log("Acknowledge clicked")}
                    className="w-full"
                  />
                </div>
              </div>
          </ComponentPreview>
          <CodeBlock
            code={`import { ChecklistCard } from "@/patterns/cards";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

// Talent Checklist Items - same component, different content
<ChecklistCard
  icon={<PersonOutlineIcon sx={{ fontSize: 32 }} />}
  title="Add profile photo"
  description="Upload a photo to build trust with clients"
  onCardClick={() => handleUpload()}
  state="enabled"
/>`}
            language="tsx"
          />
</div>
<div id="complete-setup-card" className="scroll-mt-20 space-y-4">
          <ComponentPreview title="Complete Setup Card">
              <div className="flex flex-col gap-6 w-full max-w-[584px] mx-auto">
                {/* Enabled State */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-muted-foreground">State: Enabled</h4>
                  <SetupCard
                    title="Add company profile"
                    description="Upload your logo"
                    state="enabled"
                    onCardClick={() => console.log("Profile clicked")}
                    className="w-full"
                  />
                </div>
                {/* Hover State */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-muted-foreground">State: Hover</h4>
                  <SetupCard
                    title="Add company profile"
                    description="Upload your logo"
                    state="hover"
                    onCardClick={() => console.log("Profile clicked")}
                    className="w-full"
                  />
                </div>
                {/* Pressed State */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-muted-foreground">State: Pressed</h4>
                  <SetupCard
                    title="Add company profile"
                    description="Upload your logo"
                    state="pressed"
                    onCardClick={() => console.log("Profile clicked")}
                    className="w-full"
                  />
                </div>
                {/* Completed State */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-muted-foreground">State: Completed</h4>
                  <SetupCard
                    title="Add company profile"
                    description="Upload your logo"
                    state="completed"
                    onCardClick={() => console.log("Profile clicked")}
                    className="w-full"
                  />
                </div>
              </div>
          </ComponentPreview>
          <CodeBlock
            code={`import { SetupCard } from "@/patterns/cards";

<SetupCard
  title="Add company profile"
  description="Upload your logo"
  state="completed" // or "enabled" | "hover" | "pressed"
  onCardClick={() => handleSetup()}
/>`}
            language="tsx"
          />
</div>
            </div>
            {/* Right Sidebar Navigation */}
            <OnThisPageNav items={[]} />
          </div>
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
            <h2 className="mb-4 text-xl font-semibold">Card Primitives</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground mb-4">
                The base Card components are built on top of standard HTML <code>div</code> elements and accept all standard HTML attributes.
              </p>              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 text-left font-medium">Component</th>
                      <th className="py-3 text-left font-medium">Description</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b">
                      <td className="py-3 font-mono text-foreground">Card</td>
                      <td className="py-3">Root container with background, border, and shadow</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-mono text-foreground">CardHeader</td>
                      <td className="py-3">Header section, usually containing Title and Description</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-mono text-foreground">CardTitle</td>
                      <td className="py-3">Heading element for the card title</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-mono text-foreground">CardDescription</td>
                      <td className="py-3">Muted text for explaining the card&apos;s purpose</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-mono text-foreground">CardContent</td>
                      <td className="py-3">Main content area with standard padding</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-mono text-foreground">CardFooter</td>
                      <td className="py-3">Footer area for actions or summary</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">ProfileCard</h2>
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
                    <td className="py-3 font-mono text-foreground">name</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Profile name</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">role</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Profile role/title</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">avatar</td>
                    <td className="py-3 font-mono">string | ReactNode</td>
                    <td className="py-3">Avatar image URL or component</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">metadata</td>
                    <td className="py-3 font-mono">ProfileCardMetadata[]</td>
                    <td className="py-3">Array of key-value pairs (e.g. salary, experience)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">footer</td>
                    <td className="py-3 font-mono">ProfileCardFooter</td>
                    <td className="py-3">Bottom section configuration with label and action</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">UserRoleCard</h2>
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
                    <td className="py-3 font-mono text-foreground">title</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Main title of the role card</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">description</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Description text explaining the role</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">image</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Path to the illustration image</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">variant</td>
                    <td className="py-3 font-mono">&quot;enabled&quot; | &quot;hover&quot; | &quot;pressed&quot; | &quot;selected&quot;</td>
                    <td className="py-3">Visual state of the card</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">selected</td>
                    <td className="py-3 font-mono">boolean</td>
                    <td className="py-3">Whether the card is in selected state</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">EmptyStateCard</h2>
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
                    <td className="py-3 font-mono text-foreground">icon</td>
                    <td className="py-3 font-mono">ReactNode</td>
                    <td className="py-3">Icon to display above the title</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">label</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Small label text (e.g. &quot;WHAT&apos;S NEXT&quot;)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">title</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Main heading text</td>
                  </tr>
                   <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">description</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Body text explaining the empty state</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">action</td>
                    <td className="py-3 font-mono">EmptyStateCardAction</td>
                    <td className="py-3">Button configuration {`{ label, onClick }`}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">state</td>
                    <td className="py-3 font-mono">&quot;enabled&quot; | &quot;hover&quot; | &quot;pressed&quot;</td>
                    <td className="py-3">Visual state variant</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">TalentCard</h2>
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
                    <td className="py-3 font-mono text-foreground">name</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Primary text (name or title)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">role</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Secondary text (role or subtitle)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">avatar</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">URL for the avatar image</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">avatarIcon</td>
                    <td className="py-3 font-mono">ReactNode</td>
                    <td className="py-3">Custom icon element (overrides image)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">state</td>
                    <td className="py-3 font-mono">&quot;enabled&quot; | &quot;hover&quot; | &quot;pressed&quot;</td>
                    <td className="py-3">Visual state variant</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">onCardClick</td>
                    <td className="py-3 font-mono">() =&gt; void</td>
                    <td className="py-3">Handler for card click events</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">ChecklistCard</h2>
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
                    <td className="py-3 font-mono text-foreground">icon</td>
                    <td className="py-3 font-mono">ReactNode</td>
                    <td className="py-3">Icon element to display (32x32 recommended)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">title</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Title text</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">description</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Description text</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">state</td>
                    <td className="py-3 font-mono">&quot;enabled&quot; | &quot;hover&quot; | &quot;pressed&quot;</td>
                    <td className="py-3">Visual state variant</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">onCardClick</td>
                    <td className="py-3 font-mono">() =&gt; void</td>
                    <td className="py-3">Handler for card click events</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">SetupCard</h2>
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
                    <td className="py-3 font-mono text-foreground">title</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Title text</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">description</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Description text</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">state</td>
                    <td className="py-3 font-mono">&quot;enabled&quot; | &quot;hover&quot; | &quot;pressed&quot; | &quot;completed&quot;</td>
                    <td className="py-3">Visual state variant</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">completed</td>
                    <td className="py-3 font-mono">boolean</td>
                    <td className="py-3">Overrides state to show checked status</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">onCardClick</td>
                    <td className="py-3 font-mono">() =&gt; void</td>
                    <td className="py-3">Handler for card click events</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">GoalCard</h2>
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
                    <td className="py-3 font-mono text-foreground">title</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Goal title</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">badge</td>
                    <td className="py-3 font-mono">GoalCardBadge</td>
                    <td className="py-3">Badge configuration {`{ label, variant }`}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">progress</td>
                    <td className="py-3 font-mono">number</td>
                    <td className="py-3">Progress percentage (0-100)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">metrics</td>
                    <td className="py-3 font-mono">GoalCardMetric[]</td>
                    <td className="py-3">Array of sub-metrics to display</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Sub-Interfaces</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">ProfileCardMetadata</h3>
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
                        <td className="py-3 font-mono text-foreground">label</td>
                        <td className="py-3 font-mono">string</td>
                        <td className="py-3">Optional label (e.g. &quot;Salary&quot;)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 font-mono text-foreground">value</td>
                        <td className="py-3 font-mono">string</td>
                        <td className="py-3">Value text (e.g. &quot;$120k&quot;)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 font-mono text-foreground">icon</td>
                        <td className="py-3 font-mono">IconName</td>
                        <td className="py-3">Icon to display next to the value</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">ProfileCardFooter</h3>
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
                        <td className="py-3 font-mono text-foreground">label</td>
                        <td className="py-3 font-mono">string</td>
                        <td className="py-3">Footer text (e.g. &quot;Last active&quot;)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 font-mono text-foreground">action</td>
                        <td className="py-3 font-mono">{`{ label?: string; onClick?: () => void }`}</td>
                        <td className="py-3">Action button configuration</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

               <div className="space-y-2">
                <h3 className="text-lg font-medium">GoalCardMetric</h3>
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
                        <td className="py-3 font-mono text-foreground">label</td>
                        <td className="py-3 font-mono">string</td>
                        <td className="py-3">Metric label</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 font-mono text-foreground">current</td>
                        <td className="py-3 font-mono">number</td>
                        <td className="py-3">Current progress value (optional)</td>
                      </tr>
                       <tr className="border-b">
                        <td className="py-3 font-mono text-foreground">total</td>
                        <td className="py-3 font-mono">number</td>
                        <td className="py-3">Total target value (optional)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 font-mono text-foreground">value</td>
                        <td className="py-3 font-mono">string</td>
                        <td className="py-3">Direct value string (if not using current/total)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

               <div className="space-y-2">
                <h3 className="text-lg font-medium">GoalCardBadge</h3>
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
                        <td className="py-3 font-mono text-foreground">label</td>
                        <td className="py-3 font-mono">string</td>
                        <td className="py-3">Badge text</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 font-mono text-foreground">variant</td>
                        <td className="py-3 font-mono">&quot;default&quot; | &quot;ontrack&quot; | &quot;atrisk&quot;...</td>
                        <td className="py-3">Visual style of the badge</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

               <div className="space-y-2">
                <h3 className="text-lg font-medium">EmptyStateCardAction</h3>
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
                        <td className="py-3 font-mono text-foreground">label</td>
                        <td className="py-3 font-mono">string</td>
                        <td className="py-3">Button text</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 font-mono text-foreground">onClick</td>
                        <td className="py-3 font-mono">() =&gt; void</td>
                        <td className="py-3">Click handler</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </TabsContent>
      </Tabs>
    </div>
  );
}
