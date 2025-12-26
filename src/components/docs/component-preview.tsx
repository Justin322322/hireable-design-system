import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";

interface ComponentPreviewProps {
  title: string;
  description?: string;
  fieldNotes?: string;
  children: React.ReactNode;
}

export function ComponentPreview({ title, description, fieldNotes, children }: ComponentPreviewProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {description !== undefined && (
          <p className="text-sm text-muted-foreground mt-1">
            {description || <span className="italic">No description provided</span>}
          </p>
        )}
      </CardHeader>
      <CardContent className="border-t bg-muted/30 p-6">
        {children}
      </CardContent>
      {fieldNotes !== undefined && (
        <div className="border-t px-6 py-4">
          <p className="text-xs font-medium text-muted-foreground mb-1">Field Notes</p>
          <p className="text-sm text-muted-foreground">
            {fieldNotes || <span className="italic">No field notes</span>}
          </p>
        </div>
      )}
    </Card>
  );
}
