import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";

interface ComponentPreviewProps {
  title: string;
  description?: string;
  fieldNotes?: string;
  children: React.ReactNode;
  allowOverflow?: boolean;
  action?: React.ReactNode;
}

export function ComponentPreview({ title, description, fieldNotes, children, allowOverflow, action }: ComponentPreviewProps) {
  return (
    <Card className={allowOverflow ? "overflow-visible" : undefined}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between gap-4">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          {action}
        </div>
        {description !== undefined && (
          <p className="text-sm text-muted-foreground mt-1">
            {description || <span className="italic">No description provided</span>}
          </p>
        )}
      </CardHeader>
      <CardContent className={`border-t bg-muted/30 p-4 md:p-6 ${allowOverflow ? "overflow-visible" : "overflow-x-auto"}`}>
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
