"use client"

import * as React from "react"
import { SvgIconProps } from "@mui/material"
import {
  // Navigation & UI
  CloseOutlined,
  CheckOutlined,
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
  ChevronRightOutlined,
  ArrowForwardOutlined,
  // Content
  AddOutlined,
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
  HomeOutlined,
  SettingsOutlined,
  // Social & Communication
  PersonOutlined,
  MailOutlined,
  NotificationsOutlined,
  // Toggle/State
  FavoriteOutlined,
  FavoriteBorderOutlined,
  StarOutlined,
  StarBorderOutlined,
  BookmarkBorderOutlined,
  // Action icons
  VisibilityOutlined,
  VisibilityOffOutlined,
  AttachMoneyOutlined,
  WarningAmberOutlined,
  InfoOutlined,
  HelpOutlineOutlined,
  LockOutlined,
  LockOpenOutlined,
  ScheduleOutlined,
  OpenInNewOutlined,
  LaunchOutlined,
  DoneOutlined,
  DoneAllOutlined,
  RefreshOutlined,
  ContentCopyOutlined,
  ContentPasteOutlined,
  PrintOutlined,
  ShareOutlined,
  DownloadOutlined,
  UploadOutlined,
  CloudUploadOutlined,
  CloudDownloadOutlined,
  FilterListOutlined,
  SortOutlined,
  MoreVertOutlined,
  MoreHorizOutlined,
} from "@mui/icons-material"

import { cn } from "@/lib/utils"

/**
 * Material 3 Icon Sizes (in pixels)
 * Following M3 optical size specifications
 */
const iconSizes = {
  20: { fontSize: 20 },
  24: { fontSize: 24 },
  40: { fontSize: 40 },
  48: { fontSize: 48 },
} as const

export type IconSize = keyof typeof iconSizes

/**
 * Map of icon names to MUI icon components
 */
const iconMap = {
  // Navigation & UI
  close: CloseOutlined,
  check: CheckOutlined,
  keyboard_arrow_down: KeyboardArrowDownOutlined,
  keyboard_arrow_up: KeyboardArrowUpOutlined,
  chevron_right: ChevronRightOutlined,
  arrow_forward: ArrowForwardOutlined,
  // Content
  add: AddOutlined,
  delete: DeleteOutlined,
  edit: EditOutlined,
  search: SearchOutlined,
  home: HomeOutlined,
  settings: SettingsOutlined,
  // Social & Communication
  person: PersonOutlined,
  mail: MailOutlined,
  notifications: NotificationsOutlined,
  // Toggle/State
  favorite: FavoriteOutlined,
  favorite_border: FavoriteBorderOutlined,
  star: StarOutlined,
  star_border: StarBorderOutlined,
  bookmark: BookmarkBorderOutlined,
  // Action icons
  visibility: VisibilityOutlined,
  visibility_off: VisibilityOffOutlined,
  attach_money: AttachMoneyOutlined,
  warning: WarningAmberOutlined,
  info: InfoOutlined,
  help: HelpOutlineOutlined,
  lock: LockOutlined,
  lock_open: LockOpenOutlined,
  schedule: ScheduleOutlined,
  open_in_new: OpenInNewOutlined,
  launch: LaunchOutlined,
  done: DoneOutlined,
  done_all: DoneAllOutlined,
  refresh: RefreshOutlined,
  content_copy: ContentCopyOutlined,
  content_paste: ContentPasteOutlined,
  print: PrintOutlined,
  share: ShareOutlined,
  download: DownloadOutlined,
  upload: UploadOutlined,
  cloud_upload: CloudUploadOutlined,
  cloud_download: CloudDownloadOutlined,
  filter_list: FilterListOutlined,
  sort: SortOutlined,
  more_vert: MoreVertOutlined,
  more_horiz: MoreHorizOutlined,
} as const

export type IconName = keyof typeof iconMap

export interface IconProps extends Omit<SvgIconProps, "fontSize" | "fill"> {
  /** The Material icon name */
  icon: IconName
  /** M3 optical size: 20, 24, 40, or 48 */
  size?: IconSize
  /** Whether the icon is filled (for icons with fill variants) */
  filled?: boolean
}

/**
 * Material 3 Icon Component
 * 
 * A wrapper around MUI icons providing M3-compliant iconography
 * with standardized sizing following Material Design 3 optical sizes.
 * 
 * @example
 * ```tsx
 * <Icon icon="home" />
 * <Icon icon="settings" size={40} />
 * <Icon icon="favorite" filled />
 * ```
 */
const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  (
    {
      icon,
      size = 24,
      filled = false,
      className,
      ...props
    },
    ref
  ) => {
    // Handle fill variant for icons that have it
    let iconKey: IconName = icon
    if (icon === "favorite" && !filled) {
      iconKey = "favorite_border" as IconName
    } else if (icon === "star" && !filled) {
      iconKey = "star_border" as IconName
    }

    const IconComponent = iconMap[iconKey]
    
    if (!IconComponent) {
      console.warn(`Icon "${icon}" not found in icon map`)
      return null
    }

    return (
      <IconComponent
        ref={ref}
        sx={iconSizes[size]}
        className={cn("shrink-0 select-none text-icon", className)}
        {...props}
      />
    )
  }
)
Icon.displayName = "Icon"

export { Icon, iconSizes, iconMap }
