"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger, Card, CardContent, CardHeader, CardTitle, Button } from "@/components/ui";


import { CodeBlock } from "@/components/docs/code-block";

const durations = [
  { name: "Instant", value: "75ms", className: "duration-75", description: "Micro-interactions, toggles" },
  { name: "Fast", value: "150ms", className: "duration-150", description: "Buttons, small elements" },
  { name: "Normal", value: "200ms", className: "duration-200", description: "Default transitions" },
  { name: "Moderate", value: "300ms", className: "duration-300", description: "Modals, panels" },
  { name: "Slow", value: "500ms", className: "duration-500", description: "Page transitions, large elements" },
];

const easings = [
  { name: "ease-out", className: "ease-out", description: "Elements entering the screen" },
  { name: "ease-in", className: "ease-in", description: "Elements leaving the screen" },
  { name: "ease-in-out", className: "ease-in-out", description: "Elements moving on screen" },
  { name: "linear", className: "ease-linear", description: "Continuous animations (spinners)" },
];

function DurationDemo({ duration, className }: { duration: string; className: string }) {
  const [animate, setAnimate] = useState(false);
  return (
    <div className="flex items-center gap-4">
      <Button variant="outline" size="sm" onClick={() => setAnimate(!animate)}>Play</Button>
      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
        <div className={`h-full bg-client rounded-full transition-all ${className} ease-out`} style={{ width: animate ? "100%" : "0%" }} />
      </div>
      <span className="text-sm text-muted-foreground w-16">{duration}</span>
    </div>
  );
}

function EasingDemo({ easing, className }: { easing: string; className: string }) {
  const [animate, setAnimate] = useState(false);
  return (
    <div className="flex items-center gap-4">
      <Button variant="outline" size="sm" onClick={() => setAnimate(!animate)}>Play</Button>
      <div className="flex-1 h-10 bg-muted rounded-lg relative overflow-hidden">
        <div className={`absolute top-1 bottom-1 w-8 bg-client rounded transition-all duration-500 ${className}`} style={{ left: animate ? "calc(100% - 2.5rem)" : "0.25rem" }} />
      </div>
      <span className="text-sm text-muted-foreground w-24">{easing}</span>
    </div>
  );
}

export default function MotionPage() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-3xl font-bold">Motion</h1>
        <p className="text-lg text-muted-foreground">
          Motion brings interfaces to life, provides feedback, and guides attention. 
          Use animation purposefully to enhance—not distract from—the user experience.
        </p>
      </div>

      <Tabs defaultValue="duration" className="space-y-8">
        <TabsList>
          <TabsTrigger value="duration">Duration</TabsTrigger>
          <TabsTrigger value="easing">Easing</TabsTrigger>
          <TabsTrigger value="principles">Principles</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="duration" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Duration Scale</h2>
            <p className="mb-6 text-muted-foreground">
              Choose duration based on the size and importance of the animated element.
            </p>
            <div className="space-y-6">
              {durations.map((d) => (
                <Card key={d.name}>
                  <CardContent className="py-6">
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium">{d.name}</span>
                        <code className="text-sm bg-muted px-2 py-1 rounded">{d.className}</code>
                      </div>
                      <p className="text-sm text-muted-foreground">{d.description}</p>
                    </div>
                    <DurationDemo duration={d.value} className={d.className} />
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </TabsContent>

        <TabsContent value="easing" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Easing Functions</h2>
            <p className="mb-6 text-muted-foreground">
              Easing determines the rate of change during an animation. Choose based on the type of motion.
            </p>
            <div className="space-y-6">
              {easings.map((e) => (
                <Card key={e.name}>
                  <CardContent className="py-6">
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium">{e.name}</span>
                        <code className="text-sm bg-muted px-2 py-1 rounded">{e.className}</code>
                      </div>
                      <p className="text-sm text-muted-foreground">{e.description}</p>
                    </div>
                    <EasingDemo easing={e.name} className={e.className} />
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </TabsContent>

        <TabsContent value="principles" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Motion Principles</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader><CardTitle className="text-lg">Purposeful</CardTitle></CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Every animation should serve a purpose—guiding attention, providing feedback, or showing relationships between elements. Avoid animation for decoration alone.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="text-lg">Quick</CardTitle></CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Animations should feel responsive. Most UI transitions should complete in 150-300ms. Longer animations can feel sluggish and slow down workflows.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="text-lg">Natural</CardTitle></CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Use easing functions that mimic real-world physics. Elements should accelerate and decelerate naturally, not move at constant speeds.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="text-lg">Accessible</CardTitle></CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Respect user preferences for reduced motion. Use the <code className="text-sm bg-muted px-1 rounded">prefers-reduced-motion</code> media query to disable or reduce animations.</p>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="code" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Tailwind Transitions</h2>
            <CodeBlock
              code={`// Basic transition
<button className="transition-colors duration-150 hover:bg-primary">
  Hover me
</button>

// Transform transition
<div className="transition-transform duration-200 hover:scale-105">
  Scale on hover
</div>

// Multiple properties
<div className="transition-all duration-300 ease-out">
  Animate all properties
</div>`}
              language="tsx"
            />
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Reduced Motion</h2>
            <CodeBlock
              code={`/* CSS */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}

/* Tailwind */
<div className="motion-safe:transition-transform motion-safe:hover:scale-105">
  Only animates if motion is allowed
</div>`}
              language="css"
            />
          </section>
        </TabsContent>
      </Tabs>
    </div>
  );
}
