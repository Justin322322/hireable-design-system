"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button, type ButtonProps } from "./button"
import { Icon, type IconName } from "./icon"

/**
 * IconButton - Circular icon-only button component
 * 
 * Following Figma specs:
 * - Size: 32x32px with 24x24px icon
 * - Default: White (#FFFFFF) background
 * - Hover: Gray (#F2F2F2) background
 * - Border-radius: 100px (circular)
 * - Padding: 4px
 * 
 * @example
 * ```tsx
 * <IconButton icon="close" aria-label="Close" />
 * <IconButton icon="notifications" aria-label="Notifications" />
 * <IconButton icon="delete" aria-label="Delete" />
 * ```
 */

export interface IconButtonProps extends Omit<ButtonProps, "variant" | "size" | "children"> {
  /** The Material Symbol icon name */
  icon: IconName
  /** Accessible label for the button (required for icon-only buttons) */
  "aria-label": string
  /** Whether the icon should be filled */
  filled?: boolean
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, filled = false, className, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant="icon"
        className={cn(
          "size-8 p-1", // 32x32px with 4px padding
          className
        )}
        {...props}
      >
        <Icon icon={icon} size={24} filled={filled} />
      </Button>
    )
  }
)
IconButton.displayName = "IconButton"

/**
 * Pre-configured icon button variants for common use cases
 */

/** Close button - X icon for dismissing modals, drawers, etc. */
const CloseButton = React.forwardRef<
  HTMLButtonElement,
  Omit<IconButtonProps, "icon" | "aria-label"> & { "aria-label"?: string }
>(({ "aria-label": ariaLabel = "Close", ...props }, ref) => (
  <IconButton ref={ref} icon="close" aria-label={ariaLabel} {...props} />
))
CloseButton.displayName = "CloseButton"

/** Notification button - Bell icon for alerts/notifications */
const NotificationButton = React.forwardRef<
  HTMLButtonElement,
  Omit<IconButtonProps, "icon" | "aria-label"> & { "aria-label"?: string }
>(({ "aria-label": ariaLabel = "Notifications", ...props }, ref) => (
  <IconButton ref={ref} icon="notifications" aria-label={ariaLabel} {...props} />
))
NotificationButton.displayName = "NotificationButton"

/** Delete button - Trash icon for removing items */
const DeleteButton = React.forwardRef<
  HTMLButtonElement,
  Omit<IconButtonProps, "icon" | "aria-label"> & { "aria-label"?: string }
>(({ "aria-label": ariaLabel = "Delete", ...props }, ref) => (
  <IconButton ref={ref} icon="delete" aria-label={ariaLabel} {...props} />
))
DeleteButton.displayName = "DeleteButton"

/** Expand button - Chevron icon for expand/collapse actions */
interface ExpandButtonProps extends Omit<IconButtonProps, "icon" | "aria-label"> {
  /** Whether the content is expanded (shows collapse icon) */
  expanded?: boolean
  "aria-label"?: string
}

const ExpandButton = React.forwardRef<HTMLButtonElement, ExpandButtonProps>(
  ({ expanded = false, "aria-label": ariaLabel, ...props }, ref) => {
    const label = ariaLabel ?? (expanded ? "Collapse" : "Expand")
    return (
      <IconButton
        ref={ref}
        icon={expanded ? "expand_less" : "expand_more"}
        aria-label={label}
        aria-expanded={expanded}
        {...props}
      />
    )
  }
)
ExpandButton.displayName = "ExpandButton"

/** Save button - Bookmark icon for saving items */
interface SaveButtonProps extends Omit<IconButtonProps, "icon" | "aria-label"> {
  /** Whether the item is saved (filled icon) */
  saved?: boolean
  "aria-label"?: string
}

const SaveButton = React.forwardRef<HTMLButtonElement, SaveButtonProps>(
  ({ saved = false, "aria-label": ariaLabel, className, ...props }, ref) => {
    const label = ariaLabel ?? (saved ? "Unsave" : "Save")
    return (
      <IconButton
        ref={ref}
        icon="bookmark"
        aria-label={label}
        filled={saved}
        className={cn("text-client hover:text-client", className)}
        {...props}
      />
    )
  }
)
SaveButton.displayName = "SaveButton"

/** Send button - Up arrow with blue background */
const SendButton = React.forwardRef<
  HTMLButtonElement,
  Omit<IconButtonProps, "icon" | "aria-label"> & { "aria-label"?: string }
>(({ "aria-label": ariaLabel = "Send", className, ...props }, ref) => (
  <IconButton
    ref={ref}
    icon="arrow_upward"
    aria-label={ariaLabel}
    className={cn(
      "bg-client text-white hover:bg-client-hover active:bg-client-active shadow-none",
      className
    )}
    {...props}
  />
))
SendButton.displayName = "SendButton"

/** Edit button - Pencil icon for editing content */
const EditButton = React.forwardRef<
  HTMLButtonElement,
  Omit<IconButtonProps, "icon" | "aria-label"> & { "aria-label"?: string }
>(({ "aria-label": ariaLabel = "Edit", ...props }, ref) => (
  <IconButton ref={ref} icon="edit" aria-label={ariaLabel} {...props} />
))
EditButton.displayName = "EditButton"

/** Chevron button - Left/Right chevron for navigation/pagination */
interface ChevronButtonProps extends Omit<IconButtonProps, "icon" | "aria-label"> {
  /** Direction of the chevron */
  direction?: "left" | "right"
  "aria-label"?: string
}

const ChevronButton = React.forwardRef<HTMLButtonElement, ChevronButtonProps>(
  ({ direction = "right", "aria-label": ariaLabel, ...props }, ref) => {
    const label = ariaLabel ?? (direction === "left" ? "Previous" : "Next")
    return (
      <IconButton
        ref={ref}
        icon={direction === "left" ? "chevron_left" : "chevron_right"}
        aria-label={label}
        {...props}
      />
    )
  }
)
ChevronButton.displayName = "ChevronButton"

/** Options button - Vertical ellipsis (kebab menu) for more actions */
const OptionsButton = React.forwardRef<
  HTMLButtonElement,
  Omit<IconButtonProps, "icon" | "aria-label"> & { "aria-label"?: string }
>(({ "aria-label": ariaLabel = "Options", ...props }, ref) => (
  <IconButton ref={ref} icon="more_vert" aria-label={ariaLabel} {...props} />
))
OptionsButton.displayName = "OptionsButton"

/** Open in New button - Arrow top right icon */
const OpenInNewButton = React.forwardRef<
  HTMLButtonElement,
  Omit<IconButtonProps, "icon" | "aria-label"> & { "aria-label"?: string }
>(({ "aria-label": ariaLabel = "Open in new tab", ...props }, ref) => (
  <IconButton ref={ref} icon="open_in_new" aria-label={ariaLabel} {...props} />
))
OpenInNewButton.displayName = "OpenInNewButton"

/** Attach button - Paperclip icon */
const AttachButton = React.forwardRef<
  HTMLButtonElement,
  Omit<IconButtonProps, "icon" | "aria-label"> & { "aria-label"?: string }
>(({ "aria-label": ariaLabel = "Attach", ...props }, ref) => (
  <IconButton ref={ref} icon="attach_file" aria-label={ariaLabel} {...props} />
))
AttachButton.displayName = "AttachButton"

/** File button - Document icon */
const FileButton = React.forwardRef<
  HTMLButtonElement,
  Omit<IconButtonProps, "icon" | "aria-label"> & { "aria-label"?: string }
>(({ "aria-label": ariaLabel = "File", ...props }, ref) => (
  <IconButton ref={ref} icon="description" aria-label={ariaLabel} {...props} />
))
FileButton.displayName = "FileButton"

export {
  IconButton,
  CloseButton,
  NotificationButton,
  DeleteButton,
  ExpandButton,
  SaveButton,
  SendButton,
  EditButton,
  ChevronButton,
  OptionsButton,
  OpenInNewButton,
  AttachButton,
  FileButton,
}
