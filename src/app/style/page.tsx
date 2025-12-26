import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui";

const styleItems = [
  {
    title: "Typography",
    description: "Type scale, font families, and text styles for consistent hierarchy.",
    href: "/style/typography",
  },
  {
    title: "Color",
    description: "Color palette, semantic colors, and accessibility considerations.",
    href: "/style/color",
  },
  {
    title: "Spacing",
    description: "Spacing scale and layout guidelines for consistent rhythm.",
    href: "/style/spacing",
  },
  {
    title: "Corners & Roundness",
    description: "Border radius scale and guidelines for consistent visual softness.",
    href: "/style/corners",
  },
  {
    title: "Icons",
    description: "Icon usage, sizing, and implementation guidelines.",
    href: "/style/icons",
  },
  {
    title: "Motion",
    description: "Animation principles, timing, and easing functions.",
    href: "/style/motion",
  },
];

export default function StylePage() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-3xl font-bold">Style</h1>
        <p className="text-lg text-muted-foreground">
          Foundational design principles and standards that ensure consistency 
          across all products and experiences.
        </p>
      </div>

      <div className="grid gap-4">
        {styleItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <Card className="transition-colors hover:bg-muted/50">
              <CardHeader>
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
