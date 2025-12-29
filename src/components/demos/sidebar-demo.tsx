import {
  AppSidebar,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui";


import { CodeBlock, ComponentPreview, PropsTable, VariantsTable, SidebarSkeleton } from "@/components/docs";
import { sidebarProps, sidebarVariants, sidebarMenuItemProps } from "@/data/api/sidebar";
import { VERSION } from "@/lib/version";
export default function SidebarPage() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:px-8 overflow-x-hidden">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">Sidebar</h1>
          <span className="text-sm text-muted-foreground">{VERSION}</span>
        </div>
        <p className="text-lg text-muted-foreground">
          Application sidebar navigation component with role-based variants for Talent, Employer, and Admin users.
        </p>
      </div>
      <Tabs defaultValue="examples" className="space-y-8">
        <TabsList>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
          <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
        </TabsList>
        <TabsContent value="examples" className="space-y-8">
          {/* Talent Sidebar */}
          <ComponentPreview title="Talent Sidebar">
            <div className="border border-border rounded-lg overflow-auto h-[982px] max-h-[80vh] flex bg-background">
              <div className="shrink-0 h-full">
                <AppSidebar variant="talent" />
              </div>
              <SidebarSkeleton />
            </div>
          </ComponentPreview>
          <CodeBlock
            code={`import { AppSidebar, Avatar } from "@/components/ui";

// Talent variant - for job seekers
<AppSidebar variant="talent" />
// Menu items: Home, Job board, Messages, Trials
// Profile: Avatar image with user name and email`}
            language="tsx"
          />
          {/* Employer Sidebar */}
          <ComponentPreview title="Employer Sidebar">
            <div className="border border-border rounded-lg overflow-auto h-[982px] max-h-[80vh] flex bg-background">
              <div className="shrink-0 h-full">
                <AppSidebar variant="employer" />
              </div>
              <SidebarSkeleton />
            </div>
          </ComponentPreview>
          <CodeBlock
            code={`import { AppSidebar, Avatar } from "@/components/ui";

// Employer variant - for hiring managers
<AppSidebar variant="employer" />
// Menu items: Home, Discover Talent, Jobs, Messages, Trials
// Profile: Avatar image with company name and email`}
            language="tsx"
          />
          {/* Admin Sidebar */}
          <ComponentPreview title="Admin Sidebar">
            <div className="border border-border rounded-lg overflow-auto h-[982px] max-h-[80vh] flex bg-background">
              <div className="shrink-0 h-full">
                <AppSidebar variant="admin" />
              </div>
              <SidebarSkeleton />
            </div>
          </ComponentPreview>
          <CodeBlock
            code={`import { AppSidebar } from "@/components/ui";

// Admin variant - for platform administrators
<AppSidebar variant="admin" />
// Menu items: Home, User management, Job post management,
// Trial management, Payments & billing, Performance & scoring,
// Content management, Dispute & compliance, KYC & verification,
// Admin settings
// Profile: Initials avatar with admin name and email`}
            language="tsx"
          />
          {/* Structure */}
          <ComponentPreview title="Sidebar Structure">
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>The sidebar consists of three main sections:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-foreground">Logo</strong> - Brand logo at the top (72px height)</li>
                <li><strong className="text-foreground">Navigation Menu</strong> - Role-specific menu items (grow)</li>
                <li><strong className="text-foreground">User Profile</strong> - User info with dropdown at the bottom (84px height)</li>
              </ul>
            </div>
          </ComponentPreview>
          <CodeBlock
            code={`import { Avatar, Icon } from "@/components/ui";

// Sidebar dimensions (from Figma)
// Width: 280px
// Height: 982px (full height)
// Menu item dimensions
// Width: 264px, Height: 40px
// Padding: 8px 16px, Gap: 8px
// Icon: 20px inside 24px container
// Profile section
// Width: 280px, Height: 52px
// Avatar: 36x36px`}
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
                    <li>Use for main application navigation</li>
                    <li>Use the appropriate variant based on user role</li>
                    <li>Keep menu items consistent across the application</li>
                    <li>Include user profile for quick access to account settings</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-red-600">Don&apos;t</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Don&apos;t overload with too many menu items</li>
                    <li>Don&apos;t mix navigation patterns (use consistent icons)</li>
                    <li>Don&apos;t hide critical navigation in submenus</li>
                    <li>Don&apos;t use for marketing or landing pages</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
          <section>
            <h2 className="mb-4 text-xl font-semibold">Role-Based Navigation</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Talent</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Home, Job board, Messages, Trials</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Employer</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Home, Discover Talent, Jobs, Messages, Trials</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Admin</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Home, User management, Job post management, Trial management, Payments & billing, Performance & scoring, Content management, Dispute & compliance, KYC & verification, Admin settings</p>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>
        <TabsContent value="api" className="space-y-8">
          <PropsTable title="AppSidebar Props" props={sidebarProps} />
          <VariantsTable title="Variants" variants={sidebarVariants} />
          <PropsTable title="SidebarMenuItem Props" props={sidebarMenuItemProps} />
        </TabsContent>
        <TabsContent value="accessibility" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Accessibility</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Keyboard Navigation</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Tab</kbd> - Navigate between menu items</li>
                    <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Enter</kbd> - Activate menu item or expand submenu</li>
                    <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Escape</kbd> - Close expanded submenus</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">ARIA</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Use <code className="text-sm bg-muted px-1 rounded">role=&quot;navigation&quot;</code> on the sidebar container</li>
                    <li>Use <code className="text-sm bg-muted px-1 rounded">aria-current=&quot;page&quot;</code> for active menu item</li>
                    <li>Use <code className="text-sm bg-muted px-1 rounded">aria-expanded</code> for expandable menu items</li>
                    <li>Include <code className="text-sm bg-muted px-1 rounded">aria-label</code> for icon-only buttons</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>
      </Tabs>
    </div>
  );
}
