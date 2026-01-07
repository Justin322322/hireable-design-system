"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * Material Symbols Icon Sizes (in pixels)
 * Following Material Design 3 optical size specifications
 */
const iconSizes = {
  14: 14,
  16: 16,
  20: 20,
  24: 24,
  40: 40,
  48: 48,
} as const

export type IconSize = keyof typeof iconSizes

/**
 * Available icon names from Google Material Symbols
 * https://fonts.google.com/icons
 */
export type IconName =
  // Navigation & UI
  | "close"
  | "check"
  | "keyboard_arrow_down"
  | "keyboard_arrow_up"
  | "chevron_right"
  | "chevron_left"
  | "expand_more"
  | "expand_less"
  | "arrow_forward"
  | "arrow_back"
  | "arrow_upward"
  | "navigate_next"
  | "menu"
  // Content
  | "add"
  | "delete"
  | "edit"
  | "search"
  | "home"
  | "settings"
  | "work"
  | "description"
  | "text_fields"
  | "input"
  // Social & Communication
  | "person"
  | "person_search"
  | "group"
  | "mail"
  | "chat"
  | "chat_bubble"
  | "notifications"
  | "account_circle"
  // Toggle/State
  | "favorite"
  | "star"
  | "bookmark"
  | "toggle_on"
  | "check_box"
  | "radio_button_checked"
  // Action icons
  | "visibility"
  | "visibility_off"
  | "attach_money"
  | "payments"
  | "warning"
  | "info"
  | "help"
  | "lock"
  | "lock_open"
  | "schedule"
  | "calendar_today"
  | "launch"
  | "done"
  | "done_all"
  | "refresh"
  | "content_copy"
  | "content_paste"
  | "print"
  | "share"
  | "download"
  | "download_2"
  | "upload"
  | "cloud_upload"
  | "cloud_download"
  | "filter_list"
  | "sort"
  | "more_vert"
  | "more_horiz"
  | "swap_vert"
  // Admin/Business icons
  | "bar_chart"
  | "gavel"
  | "attach_file"
  | "verified_user"
  | "verified"
  | "shield"
  | "hourglass_empty"
  | "credit_card"
  | "speed"
  | "error"
  | "check_circle"
  | "admin_panel_settings"
  | "logout"
  // Location & Maps
  | "location_on"
  | "place"
  | "explore"
  // External links
  | "open_in_new"
  | "link"
  // Misc
  | "delete_forever"
  | "auto_awesome"
  | "language"
  | "public"
  // Worktrait icons
  | "bolt"
  | "autorenew"
  | "mark_chat_read"
  | "handshake"
  | "forum"
  // Design/Style icons
  | "palette"
  | "space_bar"
  | "rounded_corner"
  | "emoji_emotions"
  | "animation"
  | "brush"
  | "straighten"
  // Component/Layout icons
  | "grid_view"
  | "widgets"
  | "smart_button"
  | "tab"
  | "layers"
  | "table_chart"
  | "view_sidebar"
  | "view_kanban"
  | "vertical_split"
  | "horizontal_rule"
  // Documentation/Info icons
  | "menu_book"
  | "rocket_launch"
  | "accessibility_new"
  | "subject"
  | "note_alt"
  // Hierarchy/Organization icons
  | "account_tree"
  | "drag_indicator"

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** The Material Symbol icon name (from fonts.google.com/icons) */
  icon: IconName
  /** Icon size: 14, 16, 20, 24, 40, or 48 */
  size?: IconSize
  /** Whether the icon is filled */
  filled?: boolean
  /** Icon weight (100-700, default 400) */
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700
}
/**
 * Material Symbols Icon Component
 * 
 * Uses Google Material Symbols font from fonts.google.com/icons
 * Provides M3-compliant iconography with variable font features.
 * 
 * @example
 * ```tsx
 * <Icon icon="home" />
 * <Icon icon="settings" size={40} />
 * <Icon icon="favorite" filled />
 * ```
 */
const Icon = React.forwardRef<HTMLSpanElement, IconProps>(
  (
    {
      icon,
      size = 24,
      filled = false,
      weight = 400,
      className,
      style,
      ...props
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={cn(
          "material-symbols-outlined shrink-0 select-none leading-none",
          className
        )}
        style={{
          fontSize: iconSizes[size],
          fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' ${weight}, 'GRAD' 0, 'opsz' ${size}`,
          ...style,
        }}
        {...props}
      >
        {icon}
      </span>
    )
  }
)
Icon.displayName = "Icon"

export { Icon, iconSizes }
