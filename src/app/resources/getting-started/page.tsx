import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
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
          <TabsTrigger value="theming">Theming</TabsTrigger>
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
            <h2 className="mb-4 text-xl font-semibold">Install Dependencies</h2>
            <CodeBlock
              code={`# Using bun
bun add @hireable/design-system

# Using npm
npm install @hireable/design-system

# Using pnpm
pnpm add @hireable/design-system`}
              language="bash"
            />
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Configure Tailwind</h2>
            <p className="mb-4 text-muted-foreground">
              Add the design system to your Tailwind configuration:
            </p>
            <CodeBlock
              code={`// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@hireable/design-system/**/*.js",
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
              code={`import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

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

        <TabsContent value="theming" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">CSS Variables</h2>
            <p className="mb-4 text-muted-foreground">
              Customize the design system by overriding CSS variables:
            </p>
            <CodeBlock
              code={`:root {
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --radius: 0.5rem;
}

.dark {
  --primary: oklch(0.922 0 0);
  --primary-foreground: oklch(0.205 0 0);
}`}
              language="css"
            />
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Dark Mode</h2>
            <p className="mb-4 text-muted-foreground">
              Toggle dark mode by adding the <code className="text-sm bg-muted px-1 rounded">dark</code> class to the HTML element:
            </p>
            <CodeBlock
              code={`<html className="dark">
  ...
</html>`}
              language="html"
            />
          </section>
        </TabsContent>
      </Tabs>
    </div>
  );
}
