import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeBlock } from "@/components/docs/code-block";

export default function DesignTokensPage() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-3xl font-bold">Design Tokens</h1>
        <p className="text-lg text-muted-foreground">
          Design tokens are the visual design atoms of the design system. They store 
          values for colors, typography, spacing, and more.
        </p>
      </div>

      <Tabs defaultValue="colors" className="space-y-8">
        <TabsList>
          <TabsTrigger value="colors">Colors</TabsTrigger>
          <TabsTrigger value="typography">Typography</TabsTrigger>
          <TabsTrigger value="spacing">Spacing</TabsTrigger>
          <TabsTrigger value="radius">Radius</TabsTrigger>
        </TabsList>

        <TabsContent value="colors" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Color Tokens</h2>
            <CodeBlock
              code={`:root {
  /* Background & Foreground */
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  
  /* Primary */
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  
  /* Secondary */
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  
  /* Muted */
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  
  /* Accent */
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  
  /* Destructive */
  --destructive: oklch(0.577 0.245 27.325);
  
  /* Border & Input */
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
}`}
              language="css"
            />
          </section>
        </TabsContent>

        <TabsContent value="typography" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Typography Tokens</h2>
            <CodeBlock
              code={`:root {
  /* Font Families */
  --font-dm-sans: 'DM Sans', sans-serif;
  --font-dm-mono: 'DM Mono', monospace;
}

/* Tailwind Config */
fontFamily: {
  sans: ['var(--font-dm-sans)'],
  mono: ['var(--font-dm-mono)'],
}

/* Font Sizes (Tailwind defaults) */
text-xs:   0.75rem   /* 12px */
text-sm:   0.875rem  /* 14px */
text-base: 1rem      /* 16px */
text-lg:   1.125rem  /* 18px */
text-xl:   1.25rem   /* 20px */
text-2xl:  1.5rem    /* 24px */
text-3xl:  1.875rem  /* 30px */
text-4xl:  2.25rem   /* 36px */`}
              language="css"
            />
          </section>
        </TabsContent>

        <TabsContent value="spacing" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Spacing Tokens</h2>
            <CodeBlock
              code={`/* Spacing Scale (4px base unit) */
0:   0px
1:   4px    (0.25rem)
2:   8px    (0.5rem)
3:   12px   (0.75rem)
4:   16px   (1rem)
5:   20px   (1.25rem)
6:   24px   (1.5rem)
8:   32px   (2rem)
10:  40px   (2.5rem)
12:  48px   (3rem)
16:  64px   (4rem)
20:  80px   (5rem)
24:  96px   (6rem)

/* Usage */
<div className="p-4">   /* 16px padding */
<div className="m-6">   /* 24px margin */
<div className="gap-2"> /* 8px gap */`}
              language="css"
            />
          </section>
        </TabsContent>

        <TabsContent value="radius" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Border Radius Tokens</h2>
            <CodeBlock
              code={`:root {
  --radius: 0.625rem; /* 10px base */
}

/* Computed values */
--radius-sm:  calc(var(--radius) - 4px);  /* 6px */
--radius-md:  calc(var(--radius) - 2px);  /* 8px */
--radius-lg:  var(--radius);              /* 10px */
--radius-xl:  calc(var(--radius) + 4px);  /* 14px */
--radius-2xl: calc(var(--radius) + 8px);  /* 18px */

/* Usage */
<div className="rounded-sm">  /* 6px */
<div className="rounded-md">  /* 8px */
<div className="rounded-lg">  /* 10px */
<div className="rounded-xl">  /* 14px */
<div className="rounded-full"> /* 9999px */`}
              language="css"
            />
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Using Tokens</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">CSS Variables</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Access tokens directly in CSS using <code className="text-sm bg-muted px-1 rounded">var(--token-name)</code>.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Tailwind Classes</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Use semantic Tailwind classes like <code className="text-sm bg-muted px-1 rounded">bg-primary</code>, <code className="text-sm bg-muted px-1 rounded">text-muted-foreground</code>.</p>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>
      </Tabs>
    </div>
  );
}
