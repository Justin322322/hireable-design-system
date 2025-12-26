import { Tabs, TabsContent, TabsList, TabsTrigger, Card, CardContent, CardHeader, CardTitle } from "@/components/ui";

import { CodeBlock } from "@/components/docs/code-block";

const typeScale = [
  { name: "Display", size: "3.5rem", lineHeight: "1.1", weight: "700", className: "text-[3.5rem] font-bold leading-tight" },
  { name: "Heading 1", size: "2.25rem", lineHeight: "1.2", weight: "700", className: "text-4xl font-bold" },
  { name: "Heading 2", size: "1.875rem", lineHeight: "1.25", weight: "600", className: "text-3xl font-semibold" },
  { name: "Heading 3", size: "1.5rem", lineHeight: "1.3", weight: "600", className: "text-2xl font-semibold" },
  { name: "Heading 4", size: "1.25rem", lineHeight: "1.4", weight: "600", className: "text-xl font-semibold" },
  { name: "Body Large", size: "1.125rem", lineHeight: "1.6", weight: "400", className: "text-lg" },
  { name: "Body", size: "1rem", lineHeight: "1.6", weight: "400", className: "text-base" },
  { name: "Body Small", size: "0.875rem", lineHeight: "1.5", weight: "400", className: "text-sm" },
  { name: "Caption", size: "0.75rem", lineHeight: "1.4", weight: "400", className: "text-xs" },
];

const fontSizes = [
  { name: "text-xs", size: "12px", rem: "0.75rem", sample: "Extra small text" },
  { name: "text-sm", size: "14px", rem: "0.875rem", sample: "Small text" },
  { name: "text-base", size: "16px", rem: "1rem", sample: "Base text" },
  { name: "text-lg", size: "18px", rem: "1.125rem", sample: "Large text" },
  { name: "text-xl", size: "20px", rem: "1.25rem", sample: "Extra large" },
  { name: "text-2xl", size: "24px", rem: "1.5rem", sample: "2X large" },
  { name: "text-3xl", size: "30px", rem: "1.875rem", sample: "3X large" },
  { name: "text-4xl", size: "36px", rem: "2.25rem", sample: "4X large" },
  { name: "text-5xl", size: "48px", rem: "3rem", sample: "5X large" },
  { name: "text-6xl", size: "60px", rem: "3.75rem", sample: "6X large" },
];

const fontWeights = [
  { name: "Regular", weight: "400", className: "font-normal" },
  { name: "Medium", weight: "500", className: "font-medium" },
  { name: "Semibold", weight: "600", className: "font-semibold" },
  { name: "Bold", weight: "700", className: "font-bold" },
];

const fontFamilies = [
  { name: "DM Sans", variable: "--font-dm-sans", usage: "Primary typeface for headings and display text", fontClass: "" },
  { name: "Inter", variable: "--font-inter", usage: "Secondary typeface for body text and UI", fontClass: "font-secondary" },
];

export default function TypographyPage() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-3xl font-bold">Typography</h1>
        <p className="text-lg text-muted-foreground">
          Typography creates hierarchy, organizes information, and guides users 
          through content. Our type system uses DM Sans for its clean, modern aesthetic.
        </p>
      </div>

      <Tabs defaultValue="families" className="space-y-8">
        <TabsList>
          <TabsTrigger value="families">Font Families</TabsTrigger>
          <TabsTrigger value="sizing">Sizing</TabsTrigger>
          <TabsTrigger value="scale">Type Scale</TabsTrigger>
          <TabsTrigger value="weights">Font Weights</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="families" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Font Families</h2>
            <p className="mb-6 text-muted-foreground">
              We use DM Sans as our primary typeface for its excellent readability and modern geometric design.
            </p>
            <div className="space-y-4">
              {fontFamilies.map((font) => (
                <Card key={font.name}>
                  <CardContent className="py-6">
                    <div className="mb-4">
                      <p className={`text-3xl ${font.fontClass}`}>
                        {font.name}
                      </p>
                      <p className={`text-lg ${font.fontClass}`}>
                        ABCDEFGHIJKLMNOPQRSTUVWXYZ
                      </p>
                      <p className={`text-lg ${font.fontClass}`}>
                        abcdefghijklmnopqrstuvwxyz
                      </p>
                      <p className={`text-lg ${font.fontClass}`}>
                        0123456789
                      </p>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{font.usage}</span>
                      <code className="bg-muted px-2 py-1 rounded">{font.variable}</code>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </TabsContent>

        <TabsContent value="sizing" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Font Sizes</h2>
            <p className="mb-6 text-muted-foreground">
              Tailwind CSS font size classes with their pixel and rem values.
            </p>
            <div className="space-y-2">
              {fontSizes.map((item) => (
                <div key={item.name} className="flex items-center gap-4 p-3 rounded-lg border bg-card">
                  <div className="w-24">
                    <p className="font-mono text-sm font-medium">{item.name}</p>
                  </div>
                  <div className="flex-1">
                    <p className={item.name}>{item.sample}</p>
                  </div>
                  <div className="text-right text-sm text-muted-foreground font-mono">
                    <span>{item.size}</span>
                    <span className="text-neutral-400 ml-2">({item.rem})</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </TabsContent>

        <TabsContent value="scale" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Type Scale</h2>
            <p className="mb-6 text-muted-foreground">
              Our type scale provides a range of sizes for different content needs, 
              from large display text to small captions.
            </p>
            <div className="space-y-6">
              {typeScale.map((type) => (
                <Card key={type.name}>
                  <CardContent className="py-6">
                    <div className="flex items-end justify-between gap-4">
                      <div className="flex-1">
                        <p className={type.className}>
                          {type.name}
                        </p>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        <p>{type.size}</p>
                        <p>Line height: {type.lineHeight}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </TabsContent>

        <TabsContent value="weights" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Font Weights</h2>
            <p className="mb-6 text-muted-foreground">
              Use font weights to create emphasis and hierarchy within text content.
            </p>
            <div className="space-y-4">
              {fontWeights.map((weight) => (
                <Card key={weight.name}>
                  <CardContent className="flex items-center justify-between py-6">
                    <p className={`text-2xl ${weight.className}`}>
                      The quick brown fox jumps over the lazy dog
                    </p>
                    <div className="text-right text-sm text-muted-foreground">
                      <p>{weight.name}</p>
                      <p>{weight.weight}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </TabsContent>

        <TabsContent value="usage" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Usage Guidelines</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Hierarchy</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Use type scale to establish clear visual hierarchy. Larger sizes draw attention, while smaller sizes are for supporting content.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Readability</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Body text should use 16px (1rem) minimum for comfortable reading. Line height of 1.5-1.6 improves readability for longer content.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Contrast</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Ensure sufficient color contrast between text and background. WCAG AA requires 4.5:1 for normal text and 3:1 for large text.</p>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="code" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Font Setup</h2>
            <p className="mb-6 text-muted-foreground">
              DM Sans is loaded via Next.js Google Fonts for optimal performance.
            </p>
            <CodeBlock
              code={`// app/layout.tsx
import { DM_Sans, Inter } from "next/font/google";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

<body className={\`\${dmSans.variable} \${inter.variable} font-sans\`}>
  {children}
</body>`}
              language="tsx"
            />
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Usage</h2>
            <CodeBlock
              code={`// Headings (DM Sans)
<h1 className="text-4xl font-bold">Heading 1</h1>
<h2 className="text-3xl font-semibold">Heading 2</h2>
<h3 className="text-2xl font-semibold">Heading 3</h3>

// Body text (Inter)
<p className="font-secondary text-base">Body text</p>
<p className="font-secondary text-sm text-muted-foreground">Small text</p>

// Display text
<span className="text-[3.5rem] font-bold leading-tight">
  Display
</span>`}
              language="tsx"
            />
          </section>
        </TabsContent>
      </Tabs>
    </div>
  );
}
