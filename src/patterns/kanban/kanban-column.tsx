"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * KanbanColumn - Generic container for kanban workflow columns
 * 
 * @example
 * ```tsx
 * <KanbanColumn
 *   title="Applied"
 *   count={12}
 *   items={applications}
 *   renderItem={(app) => <ApplicationCard {...app} />}
 *   emptyState={<p>No applications yet</p>}
 * />
 * ```
 */

export interface KanbanColumnProps<T = unknown> extends React.HTMLAttributes<HTMLDivElement> {
  /** Column title */
  title: string;
  /** Number of items (displayed in badge) */
  count?: number;
  /** Array of items to render */
  items: T[];
  /** Function to render each item */
  renderItem: (item: T, index: number) => React.ReactNode;
  /** Custom empty state component */
  emptyState?: React.ReactNode;
  /** Custom class name */
  className?: string;
  /** Column width */
  width?: number | string;
  /** Show count badge */
  showCount?: boolean;
  /** Custom header component */
  header?: React.ReactNode;
  /** Custom footer component */
  footer?: React.ReactNode;
  /** Gap between items */
  gap?: number;
  /** Loading state */
  loading?: boolean;
  /** Loading skeleton component */
  loadingSkeleton?: React.ReactNode;
  /** Drag and drop handlers */
  onDragOver?: (e: React.DragEvent) => void;
  onDrop?: (e: React.DragEvent) => void;
  /** Item key extractor */
  keyExtractor?: (item: T, index: number) => string | number;
}

export const KanbanColumn = <T,>({
  title,
  count,
  items,
  renderItem,
  emptyState,
  className,
  width = 316,
  showCount = true,
  header,
  footer,
  gap = 8,
  loading = false,
  loadingSkeleton,
  onDragOver,
  onDrop,
  keyExtractor = (_, index) => index,
  ...props
}: KanbanColumnProps<T>) => {
  const displayCount = count !== undefined ? count : items.length;

  const defaultEmptyState = (
    <div className="flex items-center justify-center py-8 text-sm text-muted-foreground">
      No items
    </div>
  );

  const defaultLoadingSkeleton = (
    <div className="space-y-2">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="h-32 bg-muted animate-pulse rounded-lg" />
      ))}
    </div>
  );

  return (
    <div
      className={cn("relative flex flex-col items-start", className)}
      style={{ width: typeof width === "number" ? `${width}px` : width }}
      {...props}
    >
      {/* Header */}
      {header || (
        <div className="relative flex h-6 items-center gap-2 mb-2">
          <span className="text-sm leading-[1.2] font-semibold tracking-[0.2px] text-foreground">
            {title}
          </span>
          {showCount && (
            <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-neutral-subtle px-2 text-xs leading-[1.2] font-medium text-muted-foreground">
              {displayCount}
            </span>
          )}
        </div>
      )}

      {/* Items container */}
      <div
        className="relative z-0 flex w-full flex-col items-start overflow-hidden rounded-lg bg-neutral-subtle p-2"
        onDragOver={onDragOver}
        onDrop={onDrop}
        style={{ gap: `${gap}px` }}
      >
        {loading ? (
          loadingSkeleton || defaultLoadingSkeleton
        ) : items.length === 0 ? (
          emptyState || defaultEmptyState
        ) : (
          items.map((item, index) => (
            <div key={keyExtractor(item, index)} className="w-full">
              {renderItem(item, index)}
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      {footer && <div className="mt-2 w-full">{footer}</div>}
    </div>
  );
};

KanbanColumn.displayName = "KanbanColumn";
