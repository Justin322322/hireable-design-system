import * as React from "react";
import { Icon, type IconName } from "@/components/ui";

export interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  description?: string;
  fieldNotes?: string;
}

export interface NavGroup {
  category: string;
  items: NavItem[];
}

export interface NavSection {
  title: string;
  items?: NavItem[];
  groups?: NavGroup[];
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
  subject: createIconComponent("subject"),
  noteAlt: createIconComponent("note_alt"),
  
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
    ],
    groups: [
      {
        category: "Actions",
        items: [
          { label: "Button", href: "/components/button", icon: icons.smartButton, description: "Trigger actions and events with various styles and states.", fieldNotes: "" },
          { label: "Toggle", href: "/components/toggle", icon: icons.toggleOn, description: "Two-state button for on/off and binary choices.", fieldNotes: "" },
        ],
      },
      {
        category: "Forms",
        items: [
          { label: "Input", href: "/components/input", icon: icons.input, description: "Text input fields for forms and data entry.", fieldNotes: "" },
          { label: "Checkbox", href: "/components/checkbox", icon: icons.checkBox, description: "Selection control for multiple choices.", fieldNotes: "" },
          { label: "Radio Group/Button", href: "/components/radio-button", icon: icons.radioButtonChecked, description: "Single selection from a set of mutually exclusive options.", fieldNotes: "" },
          { label: "Dropdown", href: "/components/dropdown", icon: icons.expandMore, description: "Dropdown selection from a list of options.", fieldNotes: "" },
        ],
      },
      {
        category: "Display",
        items: [
          { label: "Card", href: "/components/card", icon: icons.creditCard, description: "Container for grouping related content and actions.", fieldNotes: "" },
          { label: "Badge", href: "/components/badge", icon: icons.verified, description: "Highlight important information and show status indicators.", fieldNotes: "" },
          { label: "Avatar", href: "/components/avatar", icon: icons.accountCircle, description: "Visual representation of a user or entity.", fieldNotes: "" },
          { label: "Separator", href: "/components/separator", icon: icons.horizontalRule, description: "Visual divider between content sections.", fieldNotes: "" },
          { label: "Description Box", href: "/components/description-box", icon: icons.subject, description: "Display component or feature descriptions.", fieldNotes: "" },
          { label: "Field Notes", href: "/components/field-notes", icon: icons.noteAlt, description: "Contextual notes and annotations for form fields.", fieldNotes: "" },
        ],
      },
      {
        category: "Feedback",
        items: [
          { label: "Dialog", href: "/components/dialog", icon: icons.chatBubble, description: "Overlay dialogs for focused interactions.", fieldNotes: "" },
          { label: "Toast", href: "/components/toast", icon: icons.notifications, description: "Brief notifications that appear temporarily.", fieldNotes: "" },
          { label: "Drawer", href: "/components/drawer", icon: icons.verticalSplit, description: "A panel that slides in from the edge of the screen.", fieldNotes: "" },
        ],
      },
      {
        category: "Navigation",
        items: [
          { label: "Tabs", href: "/components/tabs", icon: icons.tab, description: "Organize content into switchable panels.", fieldNotes: "" },
          { label: "Breadcrumb", href: "/components/breadcrumb", icon: icons.navigateNext, description: "Navigation trail showing the user's location in the site hierarchy.", fieldNotes: "" },
          { label: "Sidebar", href: "/components/sidebar", icon: icons.viewSidebar, description: "Collapsible navigation panel for app layouts.", fieldNotes: "" },
          { label: "Navigation Menu", href: "/components/navigation-menu", icon: icons.menu, description: "List of links for site navigation.", fieldNotes: "" },
        ],
      },
      {
        category: "Data",
        items: [
          { label: "Chart", href: "/components/chart", icon: icons.barChart, description: "Data visualizations for trends and comparisons.", fieldNotes: "" },
          { label: "Kanban", href: "/components/kanban", icon: icons.viewKanban, description: "Board layout for workflow and pipeline visualization.", fieldNotes: "" },
        ],
      },
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
