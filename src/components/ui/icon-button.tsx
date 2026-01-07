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

/** Save button - Check icon with blue color */
const SaveButton = React.forwardRef<
  HTMLButtonElement,
  Omit<IconButtonProps, "icon" | "aria-label"> & { "aria-label"?: string }
>(({ "aria-label": ariaLabel = "Save", className, ...props }, ref) => (
  <IconButton
    ref={ref}
    icon="check"
    aria-label={ariaLabel}
    className={cn("text-[#00A7F8] hover:text-[#00A7F8]", className)}
    {...props}
  />
))
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

export {
  IconButton,
  CloseButton,
  NotificationButton,
  DeleteButton,
  ExpandButton,
  SaveButton,
  SendButton,
}
