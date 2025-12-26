import { Tabs, TabsContent, TabsList, TabsTrigger, Card, CardContent, CardHeader, CardTitle } from "@/components/ui";

import { CodeBlock } from "@/components/docs/code-block";

const primaryColors = [
  { name: "Primary", variable: "--primary", className: "bg-primary", hex: "#1A1A1A" },
  { name: "Primary Foreground", variable: "--primary-foreground", className: "bg-primary-foreground", hex: "#FAFAFA" },
];

const neutralScale = [
  { name: "neutral-50", className: "bg-neutral-50", hex: "#FAFAFA" },
  { name: "neutral-100", className: "bg-neutral-100", hex: "#F5F5F5" },
  { name: "neutral-200", className: "bg-neutral-200", hex: "#E5E5E5" },
  { name: "neutral-300", className: "bg-neutral-300", hex: "#D4D4D4" },
  { name: "neutral-400", className: "bg-neutral-400", hex: "#A3A3A3" },
  { name: "neutral-500", className: "bg-neutral-500", hex: "#737373" },
  { name: "neutral-600", className: "bg-neutral-600", hex: "#525252" },
  { name: "neutral-700", className: "bg-neutral-700", hex: "#404040" },
  { name: "neutral-800", className: "bg-neutral-800", hex: "#262626" },
  { name: "neutral-900", className: "bg-neutral-900", hex: "#171717" },
  { name: "neutral-950", className: "bg-neutral-950", hex: "#0A0A0A" },
];

const brandColors = [
  { name: "client", className: "bg-client", hex: "#00A7F8" },
  { name: "client-hover", className: "bg-client-hover", hex: "#0085C6" },
  { name: "client-active", className: "bg-client-active", hex: "#0085C6" },
  { name: "success", className: "bg-success", hex: "#27AE60" },
  { name: "warning", className: "bg-warning", hex: "#F2C94C" },
  { name: "danger", className: "bg-danger", hex: "#EB5757" },
  { name: "linkedin", className: "bg-linkedin", hex: "#0A66C2" },
];

const semanticColors = [
  { name: "Background", variable: "--background", className: "bg-background", hex: "#FFFFFF" },
  { name: "Foreground", variable: "--foreground", className: "bg-foreground", hex: "#0A0A0A" },
  { name: "Muted", variable: "--muted", className: "bg-muted", hex: "#F5F5F5" },
  { name: "Muted Foreground", variable: "--muted-foreground", className: "bg-muted-foreground", hex: "#737373" },
  { name: "Card", variable: "--card", className: "bg-card", hex: "#FFFFFF" },
  { name: "Accent", variable: "--accent", className: "bg-accent", hex: "#F5F5F5" },
  { name: "Destructive", variable: "--destructive", className: "bg-destructive", hex: "#DC2626" },
  { name: "Icon", variable: "--icon", className: "bg-icon", hex: "#212121" },
  { name: "Tertiary Text", variable: "--button-tertiary-foreground", className: "bg-button-tertiary-foreground", hex: "#212121" },
];

const borderColors = [
  { name: "Border", variable: "--border", className: "bg-border", hex: "#E5E5E5" },
  { name: "Input", variable: "--input", className: "bg-input", hex: "#E5E5E5" },
  { name: "Ring", variable: "--ring", className: "bg-ring", hex: "#A3A3A3" },
];

export default function ColorPage() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-3xl font-bold">Color</h1>
        <p className="text-lg text-muted-foreground">
          Our color system is built on semantic tokens that adapt to light and dark 
          themes while maintaining accessibility standards.
        </p>
      </div>

      <Tabs defaultValue="palette" className="space-y-8">
        <TabsList>
          <TabsTrigger value="palette">Color Palette</TabsTrigger>
          <TabsTrigger value="semantic">Semantic Colors</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="palette" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Primary Colors</h2>
            <p className="mb-6 text-muted-foreground">
              Primary colors are used for key actions, links, and emphasis.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {primaryColors.map((color) => (
                <div key={color.name} className="rounded-lg border overflow-hidden shadow-sm">
                  <div className={`h-24 ${color.className}`} />
                  <div className="p-4 bg-card border-t">
                    <p className="font-medium">{color.name}</p>
                    <p className="text-xs text-muted-foreground font-mono">{color.hex}</p>
                    <p className="text-xs text-muted-foreground mt-1">{color.variable}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Semantic Colors</h2>
            <p className="mb-6 text-muted-foreground">
              Semantic colors convey meaning and are used consistently across the system.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {semanticColors.map((color) => (
                <div key={color.name} className="rounded-lg border overflow-hidden shadow-sm">
                  <div className={`h-20 ${color.className}`} />
                  <div className="p-4 bg-card border-t">
                    <p className="font-medium text-sm">{color.name}</p>
                    <p className="text-xs text-muted-foreground font-mono">{color.hex}</p>
                    <p className="text-xs text-muted-foreground mt-1">{color.variable}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Border & UI Colors</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {borderColors.map((color) => (
                <div key={color.name} className="rounded-lg border overflow-hidden shadow-sm">
                  <div className={`h-16 ${color.className}`} />
                  <div className="p-4 bg-card border-t">
                    <p className="font-medium text-sm">{color.name}</p>
                    <p className="text-xs text-muted-foreground font-mono">{color.hex}</p>
                    <p className="text-xs text-muted-foreground mt-1">{color.variable}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Neutral Scale</h2>
            <p className="mb-6 text-muted-foreground">
              The neutral scale provides consistent grays for text, backgrounds, and borders.
            </p>
            <div className="space-y-2">
              {neutralScale.map((color) => (
                <div key={color.name} className="flex items-center gap-4 p-2 rounded-lg border bg-card">
                  <div className={`w-10 h-10 rounded-md ${color.className} border`} />
                  <div className="flex-1">
                    <p className="font-medium font-mono text-sm">{color.name}</p>
                  </div>
                  <p className="text-sm text-muted-foreground font-mono">{color.hex}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Brand Colors</h2>
            <p className="mb-6 text-muted-foreground">
              Brand and semantic colors used throughout the design system.
            </p>
            <div className="space-y-2">
              {brandColors.map((color) => (
                <div key={color.name} className="flex items-center gap-4 p-2 rounded-lg border bg-card">
                  <div className={`w-10 h-10 rounded-md ${color.className}`} />
                  <div className="flex-1">
                    <p className="font-medium font-mono text-sm">{color.name}</p>
                  </div>
                  <p className="text-sm text-muted-foreground font-mono">{color.hex}</p>
                </div>
              ))}
            </div>
          </section>
        </TabsContent>

        <TabsContent value="semantic" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Color Tokens</h2>
            <p className="mb-6 text-muted-foreground">
              Semantic color tokens ensure consistent usage across components.
            </p>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Background & Foreground</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Use <code className="text-sm bg-muted px-1 rounded">bg-background</code> for page backgrounds and <code className="text-sm bg-muted px-1 rounded">text-foreground</code> for primary text.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Muted</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Use <code className="text-sm bg-muted px-1 rounded">bg-muted</code> for subtle backgrounds and <code className="text-sm bg-muted px-1 rounded">text-muted-foreground</code> for secondary text.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Destructive</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Use <code className="text-sm bg-muted px-1 rounded">bg-destructive</code> for error states and destructive actions.</p>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="usage" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Accessibility</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Contrast Requirements</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground space-y-2">
                  <p>All color combinations must meet WCAG 2.1 AA standards:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Normal text: 4.5:1 contrast ratio</li>
                    <li>Large text (18px+ or 14px+ bold): 3:1 contrast ratio</li>
                    <li>UI components and graphics: 3:1 contrast ratio</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Color Blindness</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Never rely on color alone to convey information. Always pair color with text, icons, or patterns.</p>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="code" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">CSS Variables</h2>
            <p className="mb-6 text-muted-foreground">
              Colors are defined as CSS custom properties for easy theming.
            </p>
            <CodeBlock
              code={`:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --destructive: oklch(0.577 0.245 27.325);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  /* ... */
}`}
              language="css"
            />
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Tailwind Usage</h2>
            <CodeBlock
              code={`// Background colors
<div className="bg-background">...</div>
<div className="bg-primary">...</div>
<div className="bg-muted">...</div>

// Text colors
<p className="text-foreground">Primary text</p>
<p className="text-muted-foreground">Secondary text</p>
<p className="text-destructive">Error text</p>`}
              language="tsx"
            />
          </section>
        </TabsContent>
      </Tabs>
    </div>
  );
}
