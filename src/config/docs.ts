import DescriptionOutlined from "@mui/icons-material/DescriptionOutlined";
import TextFieldsOutlined from "@mui/icons-material/TextFieldsOutlined";
import PaletteOutlined from "@mui/icons-material/PaletteOutlined";
import SpaceBarOutlined from "@mui/icons-material/SpaceBarOutlined";
import RoundedCornerOutlined from "@mui/icons-material/RoundedCornerOutlined";
import EmojiEmotionsOutlined from "@mui/icons-material/EmojiEmotionsOutlined";
import AnimationOutlined from "@mui/icons-material/AnimationOutlined";
import GridViewOutlined from "@mui/icons-material/GridViewOutlined";
import SmartButtonOutlined from "@mui/icons-material/SmartButtonOutlined";
import CreditCardOutlined from "@mui/icons-material/CreditCardOutlined";
import ExpandMoreOutlined from "@mui/icons-material/ExpandMoreOutlined";
import TabOutlined from "@mui/icons-material/TabOutlined";
import ChatBubbleOutlineOutlined from "@mui/icons-material/ChatBubbleOutlineOutlined";
import NotificationsOutlined from "@mui/icons-material/NotificationsOutlined";
import LayersOutlined from "@mui/icons-material/LayersOutlined";
import InputOutlined from "@mui/icons-material/InputOutlined";
import ExploreOutlined from "@mui/icons-material/ExploreOutlined";
import TableChartOutlined from "@mui/icons-material/TableChartOutlined";
import MenuBookOutlined from "@mui/icons-material/MenuBookOutlined";
import RocketLaunchOutlined from "@mui/icons-material/RocketLaunchOutlined";
import BrushOutlined from "@mui/icons-material/BrushOutlined";
import AccessibilityNewOutlined from "@mui/icons-material/AccessibilityNewOutlined";
import ToggleOnOutlined from "@mui/icons-material/ToggleOnOutlined";
import VerifiedOutlined from "@mui/icons-material/VerifiedOutlined";
import BarChartOutlined from "@mui/icons-material/BarChartOutlined";
import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import HorizontalRuleOutlined from "@mui/icons-material/HorizontalRuleOutlined";
import MenuOutlined from "@mui/icons-material/MenuOutlined";
import VerticalSplitOutlined from "@mui/icons-material/VerticalSplitOutlined";
import ViewKanbanOutlined from "@mui/icons-material/ViewKanbanOutlined";
import StraightenOutlined from "@mui/icons-material/StraightenOutlined";
import WidgetsOutlined from "@mui/icons-material/WidgetsOutlined";
import LinkOutlined from "@mui/icons-material/LinkOutlined";

import type { SvgIconComponent } from "@mui/icons-material";

export interface NavItem {
  label: string;
  href: string;
  icon: SvgIconComponent;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const mainNav: NavItem[] = [
  { label: "Style", href: "/style", icon: StraightenOutlined },
  { label: "Components", href: "/components", icon: WidgetsOutlined },
  { label: "Patterns", href: "/patterns", icon: GridViewOutlined },
  { label: "Resources", href: "/resources", icon: MenuBookOutlined },
];

export const sidebarNav: Record<string, NavSection> = {
  style: {
    title: "Style",
    items: [
      { label: "Overview", href: "/style", icon: DescriptionOutlined },
      { label: "Typography", href: "/style/typography", icon: TextFieldsOutlined },
      { label: "Color", href: "/style/color", icon: PaletteOutlined },
      { label: "Spacing", href: "/style/spacing", icon: SpaceBarOutlined },
      { label: "Corners", href: "/style/corners", icon: RoundedCornerOutlined },
      { label: "Icons", href: "/style/icons", icon: EmojiEmotionsOutlined },
      { label: "Motion", href: "/style/motion", icon: AnimationOutlined },
      { label: "Border Style", href: "/style/border-style", icon: LinkOutlined },
    ],
  },
  components: {
    title: "Components",
    items: [
      { label: "Overview", href: "/components", icon: GridViewOutlined },
      { label: "Button", href: "/components/button", icon: SmartButtonOutlined },
      { label: "Card", href: "/components/card", icon: CreditCardOutlined },
      { label: "Input", href: "/components/input", icon: InputOutlined },
      { label: "Select", href: "/components/select", icon: ExpandMoreOutlined },
      { label: "Tabs", href: "/components/tabs", icon: TabOutlined },
      { label: "Dialogue", href: "/components/dialogue", icon: ChatBubbleOutlineOutlined },
      { label: "Toast", href: "/components/toast", icon: NotificationsOutlined },
      { label: "Badge", href: "/components/badge", icon: VerifiedOutlined },
      { label: "Toggle", href: "/components/toggle", icon: ToggleOnOutlined },
      { label: "Avatar", href: "/components/avatar", icon: AccountCircleOutlined },
      { label: "Separator", href: "/components/separator", icon: HorizontalRuleOutlined },
      { label: "Navigation Menu", href: "/components/navigation-menu", icon: MenuOutlined },
      { label: "Drawer", href: "/components/drawer", icon: VerticalSplitOutlined },
      { label: "Chart", href: "/components/chart", icon: BarChartOutlined },
      { label: "Kanban", href: "/components/kanban", icon: ViewKanbanOutlined },
    ],
  },
  patterns: {
    title: "Patterns",
    items: [
      { label: "Overview", href: "/patterns", icon: LayersOutlined },
      { label: "Forms", href: "/patterns/forms", icon: InputOutlined },
      { label: "Navigation", href: "/patterns/navigation", icon: ExploreOutlined },
      { label: "Data Display", href: "/patterns/data-display", icon: TableChartOutlined },
    ],
  },
  resources: {
    title: "Resources",
    items: [
      { label: "Overview", href: "/resources", icon: MenuBookOutlined },
      { label: "Getting Started", href: "/resources/getting-started", icon: RocketLaunchOutlined },
      { label: "Design Tokens", href: "/resources/design-tokens", icon: BrushOutlined },
      { label: "Accessibility", href: "/resources/accessibility", icon: AccessibilityNewOutlined },
    ],
  },
};
