// Navigation Menu API Documentation Data

export const navigationMenuComponents = [
  { name: "NavigationMenu", description: "Root container" },
  { name: "NavigationMenuList", description: "Container for menu items" },
  { name: "NavigationMenuItem", description: "Individual menu item wrapper" },
  { name: "NavigationMenuTrigger", description: "Button that opens dropdown content" },
  { name: "NavigationMenuContent", description: "Dropdown content container" },
  { name: "NavigationMenuLink", description: "Navigation link element" },
];

export const navigationMenuProps = [
  { name: "value", type: "string", description: "Controlled active item value" },
  { name: "defaultValue", type: "string", description: "Default active item value" },
  { name: "onValueChange", type: "function", description: "Callback when active item changes" },
  { name: "delayDuration", type: "number", default: "200", description: "Delay before opening on hover (ms)" },
  { name: "skipDelayDuration", type: "number", default: "300", description: "Delay skip duration when moving between items" },
];
