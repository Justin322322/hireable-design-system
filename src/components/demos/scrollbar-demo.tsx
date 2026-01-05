"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import { ComponentPreview, CodeBlock } from "@/components/docs";
import { VERSION } from "@/lib/version";

export default function ScrollbarDemo() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:px-8 overflow-hidden">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">Scrollbar</h1>
          <span className="text-sm text-muted-foreground">{VERSION}</span>
        </div>
        <p className="text-lg text-muted-foreground">
          Custom pill-shaped scrollbar styles that replace the native browser scrollbar 
          for a consistent, modern look across the application.
        </p>
      </div>

      <div className="space-y-8">
        {/* Vertical Scrollbar */}
        <ComponentPreview title="Vertical Scrollbar">
          <div className="flex gap-8 items-start flex-wrap">
            <div className="w-64 h-48 overflow-y-auto border border-border rounded-lg bg-background p-4">
              <div className="space-y-3">
                <p className="text-sm text-foreground font-medium">Scroll down to see the pill-shaped scrollbar →</p>
                {Array.from({ length: 15 }, (_, i) => (
                  <div key={i} className="p-2 bg-muted rounded text-sm">
                    Item {i + 1}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-medium text-muted-foreground uppercase">Usage</span>
              <code className="text-sm bg-muted px-3 py-1.5 rounded font-mono">overflow-y-auto</code>
              <p className="text-xs text-muted-foreground mt-2 max-w-xs">
                Default pill-shaped scrollbar for vertical overflow content. Applied globally via CSS.
              </p>
            </div>
          </div>
        </ComponentPreview>

        <CodeBlock
          code={`{/* Vertical scrolling container - uses global scrollbar styles automatically */}
<div className="h-48 overflow-y-auto">
  {/* Your content here */}
</div>`}
          language="tsx"
        />

        {/* Horizontal Scrollbar */}
        <ComponentPreview title="Horizontal Scrollbar">
          <div className="flex gap-8 items-start flex-wrap">
            <div className="w-80 overflow-x-auto border border-border rounded-lg bg-background p-4">
              <div className="flex gap-3 w-max">
                <p className="text-sm text-foreground whitespace-nowrap font-medium">Scroll right →</p>
                {Array.from({ length: 10 }, (_, i) => (
                  <div key={i} className="p-3 bg-muted rounded text-sm whitespace-nowrap min-w-[100px] text-center">
                    Card {i + 1}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-medium text-muted-foreground uppercase">Usage</span>
              <code className="text-sm bg-muted px-3 py-1.5 rounded font-mono">overflow-x-auto</code>
              <p className="text-xs text-muted-foreground mt-2 max-w-xs">
                Same pill-shaped scrollbar for horizontal overflow content.
              </p>
            </div>
          </div>
        </ComponentPreview>

        <CodeBlock
          code={`{/* Horizontal scrolling container */}
<div className="overflow-x-auto">
  <div className="flex gap-3 w-max">
    {/* Your horizontally scrolling content */}
  </div>
</div>`}
          language="tsx"
        />

        {/* Hidden Scrollbar */}
        <ComponentPreview title="Hidden Scrollbar">
          <div className="flex gap-8 items-start flex-wrap">
            <div className="w-64 h-48 overflow-y-auto no-scrollbar border border-border rounded-lg bg-background p-4">
              <div className="space-y-3">
                <p className="text-sm text-foreground font-medium">Scroll here - no scrollbar visible but scrolling works!</p>
                {Array.from({ length: 15 }, (_, i) => (
                  <div key={i} className="p-2 bg-muted rounded text-sm">
                    Item {i + 1}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-medium text-muted-foreground uppercase">Usage</span>
              <code className="text-sm bg-muted px-3 py-1.5 rounded font-mono">overflow-y-auto no-scrollbar</code>
              <p className="text-xs text-muted-foreground mt-2 max-w-xs">
                Completely hidden scrollbar while maintaining scroll functionality.
              </p>
            </div>
          </div>
        </ComponentPreview>

        <CodeBlock
          code={`{/* Hidden scrollbar - scrollable but no visible scrollbar */}
<div className="h-48 overflow-y-auto no-scrollbar">
  {/* Your content here */}
</div>`}
          language="tsx"
        />

        {/* CSS Reference */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">CSS Reference</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Global Styles (Automatic)</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="text-sm mb-3">Applied to all scrollbars by default:</p>
                <ul className="text-sm space-y-1">
                  <li>• Width/Height: <code className="bg-muted px-1 rounded">8px</code></li>
                  <li>• Track: <code className="bg-muted px-1 rounded">#F2F2F2</code></li>
                  <li>• Thumb: <code className="bg-muted px-1 rounded">#969696</code></li>
                  <li>• Border-radius: <code className="bg-muted px-1 rounded">100px</code> (pill shape)</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Utility Classes</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <div className="space-y-3 text-sm">
                  <div>
                    <code className="bg-muted px-2 py-0.5 rounded">.no-scrollbar</code>
                    <p className="mt-1">Hides scrollbar completely while keeping scroll functionality</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
