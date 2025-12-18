import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeBlock } from "@/components/docs/code-block";

export default function AccessibilityPage() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-3xl font-bold">Accessibility</h1>
        <p className="text-lg text-muted-foreground">
          Guidelines for building accessible interfaces that work for everyone, 
          following WCAG 2.1 AA standards.
        </p>
      </div>

      <Tabs defaultValue="principles" className="space-y-8">
        <TabsList>
          <TabsTrigger value="principles">Principles</TabsTrigger>
          <TabsTrigger value="keyboard">Keyboard</TabsTrigger>
          <TabsTrigger value="color">Color</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="principles" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">WCAG Principles</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Perceivable</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Information must be presentable in ways users can perceive. Provide text alternatives for images, captions for videos, and sufficient color contrast.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Operable</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Interface components must be operable. All functionality should be available via keyboard. Provide enough time for users to read and interact.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Understandable</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Information and operation must be understandable. Use clear language, consistent navigation, and helpful error messages.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Robust</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Content must be robust enough to work with assistive technologies. Use semantic HTML and valid markup.</p>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="keyboard" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Keyboard Navigation</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Focus Management</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>All interactive elements must be focusable</li>
                    <li>Focus order should follow visual order</li>
                    <li>Focus indicators must be visible (2px minimum)</li>
                    <li>Don&apos;t trap focus (except in modals)</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Common Keyboard Shortcuts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="py-2 text-left font-medium">Key</th>
                          <th className="py-2 text-left font-medium">Action</th>
                        </tr>
                      </thead>
                      <tbody className="text-muted-foreground">
                        <tr className="border-b">
                          <td className="py-2"><kbd className="px-2 py-1 bg-muted rounded text-xs">Tab</kbd></td>
                          <td className="py-2">Move to next focusable element</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2"><kbd className="px-2 py-1 bg-muted rounded text-xs">Shift + Tab</kbd></td>
                          <td className="py-2">Move to previous focusable element</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2"><kbd className="px-2 py-1 bg-muted rounded text-xs">Enter</kbd></td>
                          <td className="py-2">Activate buttons and links</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2"><kbd className="px-2 py-1 bg-muted rounded text-xs">Space</kbd></td>
                          <td className="py-2">Activate buttons, toggle checkboxes</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2"><kbd className="px-2 py-1 bg-muted rounded text-xs">Escape</kbd></td>
                          <td className="py-2">Close modals and menus</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2"><kbd className="px-2 py-1 bg-muted rounded text-xs">Arrow keys</kbd></td>
                          <td className="py-2">Navigate within components</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="color" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Color & Contrast</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Contrast Requirements</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Normal text: 4.5:1 minimum contrast ratio</li>
                    <li>Large text (18px+ or 14px+ bold): 3:1 minimum</li>
                    <li>UI components and graphics: 3:1 minimum</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Color Independence</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Never use color as the only way to convey information. Always pair color with text, icons, or patterns.</p>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="code" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Accessible Code Patterns</h2>
            <CodeBlock
              code={`// Semantic HTML
<button>Click me</button>  // ✓ Good
<div onClick={...}>Click me</div>  // ✗ Bad

// Labels for inputs
<label htmlFor="email">Email</label>
<input id="email" type="email" />

// Alt text for images
<img src="..." alt="Description of image" />
<img src="..." alt="" /> // Decorative only

// ARIA for custom components
<button aria-expanded={isOpen} aria-controls="menu">
  Menu
</button>
<div id="menu" role="menu" hidden={!isOpen}>
  ...
</div>

// Skip links
<a href="#main-content" className="sr-only focus:not-sr-only">
  Skip to main content
</a>

// Screen reader only text
<span className="sr-only">Opens in new tab</span>`}
              language="tsx"
            />
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Testing</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Manual Testing</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Navigate using only keyboard</li>
                    <li>Test with screen readers (NVDA, VoiceOver)</li>
                    <li>Zoom to 200% and check layout</li>
                    <li>Test with reduced motion preference</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Automated Tools</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>axe DevTools browser extension</li>
                    <li>Lighthouse accessibility audit</li>
                    <li>eslint-plugin-jsx-a11y</li>
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
