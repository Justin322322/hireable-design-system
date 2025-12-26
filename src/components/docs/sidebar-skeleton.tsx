import React from "react";

export function SidebarSkeleton() {
  return (
    <div className="flex-1 bg-muted/30 p-4 space-y-4 overflow-hidden">
      <div className="h-8 w-48 bg-muted rounded" />
      <div className="space-y-3">
        <div className="h-4 w-full bg-muted rounded" />
        <div className="h-4 w-3/4 bg-muted rounded" />
        <div className="h-4 w-1/2 bg-muted rounded" />
      </div>
      <div className="grid grid-cols-3 gap-4 pt-4">
        <div className="h-32 bg-muted rounded" />
        <div className="h-32 bg-muted rounded" />
        <div className="h-32 bg-muted rounded" />
      </div>
      <div className="space-y-3 pt-4">
        <div className="h-4 w-full bg-muted rounded" />
        <div className="h-4 w-5/6 bg-muted rounded" />
        <div className="h-4 w-2/3 bg-muted rounded" />
      </div>
      <div className="grid grid-cols-2 gap-4 pt-4">
        <div className="h-40 bg-muted rounded" />
        <div className="h-40 bg-muted rounded" />
      </div>
      <div className="space-y-3 pt-4">
        <div className="h-4 w-full bg-muted rounded" />
        <div className="h-4 w-4/5 bg-muted rounded" />
        <div className="h-4 w-3/5 bg-muted rounded" />
      </div>
      <div className="h-48 bg-muted rounded mt-4" />
    </div>
  );
}
