import * as React from "react";
import { Icon, type IconName } from "@/components/ui/icon";

export interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

// Helper function to create icon components from icon names
function createIconComponent(iconName: IconName): React.ComponentType<{ className?: string }> {
  const IconComponent = ({ className }: { className?: string }) => 
    React.createElement(Icon, { icon: iconName, size: 20, className });
  IconComponent.displayName = `NavIcon_${iconName}`;
  return IconComponent;
}

// Icon mappings
const icons = {
  // Main nav
  straighten: createIconComponent("straighten"),
  widgets: createIconComponent("widgets"),
  gridView: createIconComponent("grid_view"),
  menuBook: createIconComponent("menu_book"),
  
  // Style
  description: createIconComponent("description"),
  textFields: createIconComponent("text_fields"),
  palette: createIconComponent("palette"),
  spaceBar: createIconComponent("space_bar"),
  roundedCorner: createIconComponent("rounded_corner"),
  emojiEmotions: createIconComponent("emoji_emotions"),
  animation: createIconComponent("animation"),
  link: createIconComponent("link"),
  
  // Components
  smartButton: createIconComponent("smart_button"),
  creditCard: createIconComponent("credit_card"),
  input: createIconComponent("input"),
  expandMore: createIconComponent("expand_more"),
  tab: createIconComponent("tab"),
  chatBubble: createIconComponent("chat_bubble"),
  notifications: createIconComponent("notifications"),
  verified: createIconComponent("verified"),
  navigateNext: createIconComponent("navigate_next"),
  toggleOn: createIconComponent("toggle_on"),
  checkBox: createIconComponent("check_box"),
  radioButtonChecked: createIconComponent("radio_button_checked"),
  viewSidebar: createIconComponent("view_sidebar"),
  accountCircle: createIconComponent("account_circle"),
  horizontalRule: createIconComponent("horizontal_rule"),
  menu: createIconComponent("menu"),
  verticalSplit: createIconComponent("vertical_split"),
  barChart: createIconComponent("bar_chart"),
  viewKanban: createIconComponent("view_kanban"),
  
  // Patterns
  layers: createIconComponent("layers"),
  explore: createIconComponent("explore"),
  tableChart: createIconComponent("table_chart"),
  
  // Resources
  rocketLaunch: createIconComponent("rocket_launch"),
  brush: createIconComponent("brush"),
  accessibilityNew: createIconComponent("accessibility_new"),
};

export const mainNav: NavItem[] = [
  { label: "Style", href: "/style", icon: icons.straighten },
  { label: "Components", href: "/components", icon: icons.widgets },
  { label: "Patterns", href: "/patterns", icon: icons.gridView },
  { label: "Resources", href: "/resources", icon: icons.menuBook },
];

export const sidebarNav: Record<string, NavSection> = {
  style: {
    title: "Style",
    items: [
      { label: "Overview", href: "/style", icon: icons.description },
      { label: "Typography", href: "/style/typography", icon: icons.textFields },
      { label: "Color", href: "/style/color", icon: icons.palette },
      { label: "Spacing", href: "/style/spacing", icon: icons.spaceBar },
      { label: "Corners", href: "/style/corners", icon: icons.roundedCorner },
      { label: "Icons", href: "/style/icons", icon: icons.emojiEmotions },
      { label: "Motion", href: "/style/motion", icon: icons.animation },
      { label: "Border Style", href: "/style/border-style", icon: icons.link },
    ],
  },
  components: {
    title: "Components",
    items: [
      { label: "Overview", href: "/components", icon: icons.gridView },
      { label: "Button", href: "/components/button", icon: icons.smartButton },
      { label: "Card", href: "/components/card", icon: icons.creditCard },
      { label: "Input", href: "/components/input", icon: icons.input },
      { label: "Dropdown", href: "/components/dropdown", icon: icons.expandMore },
      { label: "Tabs", href: "/components/tabs", icon: icons.tab },
      { label: "Dialogue", href: "/components/dialogue", icon: icons.chatBubble },
      { label: "Toast", href: "/components/toast", icon: icons.notifications },
      { label: "Badge", href: "/components/badge", icon: icons.verified },
      { label: "Breadcrumb", href: "/components/breadcrumb", icon: icons.navigateNext },
      { label: "Toggle", href: "/components/toggle", icon: icons.toggleOn },
      { label: "Checkbox", href: "/components/checkbox", icon: icons.checkBox },
      { label: "Radio Group/Button", href: "/components/radio-button", icon: icons.radioButtonChecked },
      { label: "Sidebar", href: "/components/sidebar", icon: icons.viewSidebar },
      { label: "Avatar", href: "/components/avatar", icon: icons.accountCircle },
      { label: "Separator", href: "/components/separator", icon: icons.horizontalRule },
      { label: "Navigation Menu", href: "/components/navigation-menu", icon: icons.menu },
      { label: "Drawer", href: "/components/drawer", icon: icons.verticalSplit },
      { label: "Chart", href: "/components/chart", icon: icons.barChart },
      { label: "Kanban", href: "/components/kanban", icon: icons.viewKanban },
    ],
  },
  patterns: {
    title: "Patterns",
    items: [
      { label: "Overview", href: "/patterns", icon: icons.layers },
      { label: "Forms", href: "/patterns/forms", icon: icons.input },
      { label: "Navigation", href: "/patterns/navigation", icon: icons.explore },
      { label: "Data Display", href: "/patterns/data-display", icon: icons.tableChart },
    ],
  },
  resources: {
    title: "Resources",
    items: [
      { label: "Overview", href: "/resources", icon: icons.menuBook },
      { label: "Getting Started", href: "/resources/getting-started", icon: icons.rocketLaunch },
      { label: "Design Tokens", href: "/resources/design-tokens", icon: icons.brush },
      { label: "Accessibility", href: "/resources/accessibility", icon: icons.accessibilityNew },
    ],
  },
};
