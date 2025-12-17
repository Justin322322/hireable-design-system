import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const guidelines = [
  {
    title: "Typography",
    description: "Type scale, font families, and text styles for consistent hierarchy.",
    href: "/guidelines/typography",
  },
  {
    title: "Color",
    description: "Color palette, semantic colors, and accessibility considerations.",
    href: "/guidelines/color",
  },
  {
    title: "Spacing",
    description: "Spacing scale and layout guidelines for consistent rhythm.",
    href: "/guidelines/spacing",
  },
  {
    title: "Corners & Roundness",
    description: "Border radius scale and guidelines for consistent visual softness.",
    href: "/guidelines/corners",
  },
  {
    title: "Icons",
    description: "Icon usage, sizing, and implementation guidelines.",
    href: "/guidelines/icons",
  },
  {
    title: "Motion",
    description: "Animation principles, timing, and easing functions.",
    href: "/guidelines/motion",
  },
];

export default function GuidelinesPage() {
  return (
    <div className="container max-w-4xl py-12 px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-3xl font-bold">Guidelines</h1>
        <p className="text-lg text-muted-foreground">
          Foundational design principles and standards that ensure consistency 
          across all products and experiences.
        </p>
      </div>

      <div className="grid gap-4">
        {guidelines.map((item) => (
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
