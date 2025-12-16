import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ComponentPreviewProps {
  title: string;
  children: React.ReactNode;
}

export function ComponentPreview({ title, children }: ComponentPreviewProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent className="border-t bg-muted/30 p-6">
        {children}
      </CardContent>
    </Card>
  );
}
