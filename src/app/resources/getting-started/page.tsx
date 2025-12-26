import { Tabs, TabsContent, TabsList, TabsTrigger, Card, CardContent } from "@/components/ui";

import { CodeBlock } from "@/components/docs/code-block";

export default function GettingStartedPage() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-3xl font-bold">Getting Started</h1>
        <p className="text-lg text-muted-foreground">
          Everything you need to start using the Hireable Design System in your project.
        </p>
      </div>

      <Tabs defaultValue="installation" className="space-y-8">
        <TabsList>
          <TabsTrigger value="installation">Installation</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
        </TabsList>

        <TabsContent value="installation" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Prerequisites</h2>
            <Card>
              <CardContent className="pt-6 text-muted-foreground">
                <ul className="list-disc list-inside space-y-1">
                  <li>Node.js 18.0 or later</li>
                  <li>React 18.0 or later</li>
                  <li>Tailwind CSS 4.0 or later</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Copy Components</h2>
            <p className="mb-4 text-muted-foreground">
              This design system uses a copy-paste approach (similar to shadcn/ui). Copy the components you need directly into your project:
            </p>
            <CodeBlock
              code={`# Copy the components folder to your project
cp -r src/components/ui your-project/src/components/

# Copy the utility functions
cp src/lib/utils.ts your-project/src/lib/`}
              language="bash"
            />
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Install Peer Dependencies</h2>
            <p className="mb-4 text-muted-foreground">
              Install the required dependencies for the components:
            </p>
            <CodeBlock
              code={`# Core utilities
bun add clsx tailwind-merge class-variance-authority

# Radix UI primitives (install as needed)
bun add @radix-ui/react-dialog @radix-ui/react-tabs @radix-ui/react-select

# Optional: animations
bun add framer-motion`}
              language="bash"
            />
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Configure Path Aliases</h2>
            <p className="mb-4 text-muted-foreground">
              Set up the <code className="text-sm bg-muted px-1 rounded">@/</code> path alias in your tsconfig.json:
            </p>
            <CodeBlock
              code={`{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}`}
              language="json"
            />
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Configure Tailwind</h2>
            <p className="mb-4 text-muted-foreground">
              Make sure your Tailwind configuration includes the component paths:
            </p>
            <CodeBlock
              code={`// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;`}
              language="typescript"
            />
          </section>
        </TabsContent>

        <TabsContent value="usage" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Import Components</h2>
            <CodeBlock
              code={`



export function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <h2>Welcome</h2>
      </CardHeader>
      <CardContent>
        <Input placeholder="Enter your name" />
        <Button>Submit</Button>
      </CardContent>
    </Card>
  );
}`}
              language="tsx"
            />
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Import Styles</h2>
            <p className="mb-4 text-muted-foreground">
              Import the global styles in your app entry point:
            </p>
            <CodeBlock
              code={`// app/layout.tsx or pages/_app.tsx
import "@/app/globals.css";`}
              language="tsx"
            />
          </section>
        </TabsContent>


      </Tabs>
    </div>
  );
}
