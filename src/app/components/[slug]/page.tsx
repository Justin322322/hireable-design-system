import { notFound } from "next/navigation";
import { componentRegistry } from "@/config/component-registry";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(componentRegistry).map((slug) => ({
    slug,
  }));
}

export default async function ComponentPage({ params }: PageProps) {
  const { slug } = await params;
  const Component = componentRegistry[slug];

  if (!Component) {
    notFound();
  }

  return <Component />;
}
