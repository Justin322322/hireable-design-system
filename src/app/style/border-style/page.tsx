import { Card, CardContent } from "@/components/ui";

export default function BorderStylePage() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-3xl font-bold">Border Style</h1>
        <p className="text-lg text-muted-foreground">
          Border and text link tokens for interactive UI elements.
        </p>
      </div>

      <div className="space-y-12">
        {/* TEXT_Text Link */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Text Link</h2>
          <p className="mb-6 text-muted-foreground">
            Text links use the client brand color for clickable content.
          </p>
          <Card>
            <CardContent className="py-6 space-y-6">
              <div className="flex items-center gap-8">
                <div className="flex flex-col items-center gap-3">
                  <a href="#" className="text-client font-medium">
                    Text Link
                  </a>
                  <span className="text-sm text-muted-foreground">Default</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <a href="#" className="text-client underline font-medium">
                    Text Link
                  </a>
                  <span className="text-sm text-muted-foreground">Hover</span>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t">
                <div className="w-6 h-6 rounded bg-client" />
                <div>
                  <code className="text-sm font-medium">text-client</code>
                  <span className="text-sm text-muted-foreground ml-2">— #00A7F8</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* BORDER_Hover */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Border Hover</h2>
          <p className="mb-6 text-muted-foreground">
            Border hover state for interactive elements.
          </p>
          <Card>
            <CardContent className="py-6 space-y-6">
              <div className="flex items-center gap-8">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-48 h-11 rounded-lg border border-input bg-background" />
                  <span className="text-sm text-muted-foreground">Default</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-48 h-11 rounded-lg border border-foreground/30 bg-background" />
                  <span className="text-sm text-muted-foreground">Hover</span>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t">
                <div className="w-6 h-6 rounded border border-border-hover" />
                <div>
                  <code className="text-sm font-medium">hover:border-border-hover</code>
                  <span className="text-sm text-muted-foreground ml-2">— Token: var(--border-hover)</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* BORDER_Focused */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Border Focused</h2>
          <p className="mb-6 text-muted-foreground">
            Focus border state uses the client brand color.
          </p>
          <Card>
            <CardContent className="py-6 space-y-6">
              <div className="flex items-center gap-8">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-48 h-11 rounded-lg border border-input bg-background" />
                  <span className="text-sm text-muted-foreground">Default</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-48 h-11 rounded-lg border border-border-focused bg-background" />
                  <span className="text-sm text-muted-foreground">Focused</span>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t">
                <div className="w-6 h-6 rounded border border-border-focused" />
                <div>
                  <code className="text-sm font-medium">focus-visible:border-border-focused</code>
                  <span className="text-sm text-muted-foreground ml-2">— #00A7F8</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
