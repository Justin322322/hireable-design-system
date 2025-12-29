"use client";

import * as React from "react";
import { Badge } from "./badge";
import { Icon } from "./icon";
import { cn } from "@/lib/utils";

// ============================================================================
// DRAGGABLE LIST ITEM - Static (non-sortable) version
// ============================================================================

export interface DraggableListItemProps {
  /** Main text content */
  title: string;
  /** Optional badge text displayed next to the title */
  badgeText?: string;
  /** Additional className for styling */
  className?: string;
}

/**
 * A static list item with a drag indicator icon.
 * For sortable drag-and-drop functionality, use SortableListItem instead.
 */
export const DraggableListItem: React.FC<DraggableListItemProps> = ({
  title,
  badgeText,
  className,
}) => (
  <div
    className={cn(
      "flex flex-row items-center p-1 gap-6 w-full bg-background rounded hover:bg-neutral-50 cursor-grab transition-colors group",
      className
    )}
  >
    <div className="flex flex-row items-center gap-2 flex-1">
      <Icon
        icon="drag_indicator"
        size={20}
        className="text-muted-foreground group-hover:text-foreground shrink-0"
      />
      <div className="flex flex-row items-center gap-2.5 flex-1 py-2 px-2 rounded">
        <span className="text-sm leading-[120%] tracking-[0.2px] text-foreground">
          {title}
        </span>
        {badgeText && (
          <Badge
            variant="default"
            className="px-2 py-0.5 text-xs bg-neutral-100 text-muted-foreground rounded-full font-normal"
          >
            {badgeText}
          </Badge>
        )}
      </div>
    </div>
  </div>
);

DraggableListItem.displayName = "DraggableListItem";
