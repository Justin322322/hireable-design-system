"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Icon, IconName } from "@/components/ui";

export interface SidebarMenuItem {
  icon: IconName;
  label: string;
  href?: string;
  active?: boolean;
  expandable?: boolean;
}

export interface SidebarUserProfile {
  name: string;
  email: string;
  avatar?: string;
  initials?: string;
  initialsColor?: string;
}

export interface AppSidebarProps {
  variant?: "talent" | "employer" | "admin";
  className?: string;
}

const talentMenuItems: SidebarMenuItem[] = [
  { icon: "home", label: "Home", href: "#", active: true },
  { icon: "work", label: "Job board", href: "#" },
  { icon: "mail", label: "Messages", href: "#" },
  { icon: "hourglass_empty", label: "Tests", href: "#" },
];

const employerMenuItems: SidebarMenuItem[] = [
  { icon: "home", label: "Home", href: "#", active: true },
  { icon: "person_search", label: "Discover Talent", href: "#" },
  { icon: "work", label: "Jobs", href: "#" },
  { icon: "mail", label: "Messages", href: "#" },
  { icon: "hourglass_empty", label: "Tests", href: "#" },
];

const adminMenuItems: SidebarMenuItem[] = [
  { icon: "home", label: "Home", href: "#", active: true },
  { icon: "group", label: "User management", expandable: true },
  { icon: "work", label: "Job post management", href: "#" },
  { icon: "hourglass_empty", label: "Trial management", href: "#" },
  { icon: "credit_card", label: "Payments & billing", expandable: true },
  { icon: "speed", label: "Performance & scoring", expandable: true },
  { icon: "edit", label: "Content management", href: "#" },
  { icon: "error", label: "Dispute & compliance", href: "#" },
  { icon: "check_circle", label: "KYC & verification", href: "#" },
  { icon: "admin_panel_settings", label: "Admin settings", href: "#" },
];

const userProfiles: Record<string, SidebarUserProfile> = {
  talent: {
    name: "Juan Dela Cruz",
    email: "me@example.com",
    avatar: "/images/juan-delacruz.svg",
  },
  employer: {
    name: "John Doe",
    email: "me@example.com",
    avatar: "/images/john-doe.svg",
  },
  admin: {
    name: "Admin",
    email: "hello@hireable.com",
    initials: "AD",
    initialsColor: "bg-avatar-admin-bg text-avatar-admin-foreground",
  },
};


function SidebarMenuItemComponent({ item, isCollapsed }: { item: SidebarMenuItem, isCollapsed: boolean }) {
  const content = (
    <>
      <div 
        className={cn(
          "flex items-center justify-center size-6",
          item.active ? "text-client" : "text-icon"
        )}
      >
        <Icon icon={item.icon} size={20} filled={item.active} />
      </div>
      {!isCollapsed && (
        <span 
          className="flex-1 text-sm font-secondary leading-[1.2] tracking-[0.2px] text-foreground truncate"
        >
          {item.label}
        </span>
      )}
      {!isCollapsed && item.expandable && (
        <Icon icon="keyboard_arrow_down" size={20} className="text-foreground shrink-0" aria-hidden="true" />
      )}
    </>
  );

  const baseClasses = cn(
    "flex items-center gap-2 px-4 py-2 rounded-lg transition-colors h-10",
    item.active 
      ? "bg-surface-hover" 
      : "bg-background hover:bg-surface-hover",
    isCollapsed && "justify-center px-2"
  );

  // Use Link for navigation, button for expandable items
  if (item.href && !item.expandable) {
    return (
      <Link
        href={item.href}
        className={baseClasses}
        aria-current={item.active ? "page" : undefined}
        title={isCollapsed ? item.label : undefined}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={cn(baseClasses, "w-full text-left cursor-pointer")}
      title={isCollapsed ? item.label : undefined}
    >
      {content}
    </button>
  );
}

function SidebarProfile({ profile, isCollapsed }: { profile: SidebarUserProfile, isCollapsed: boolean }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  // Close menu when clicking outside - only attach listener when menu is open
  React.useEffect(() => {
    if (!isOpen) return;
    
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        className={cn(
          "flex items-center gap-2 px-4 py-2 h-[52px] w-full rounded-lg transition-colors text-left",
          isOpen ? "bg-surface-hover" : "bg-background hover:bg-surface-hover",
          isCollapsed && "justify-center px-0"
        )}
        aria-label="User profile menu"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        title={isCollapsed ? profile.name : undefined}
      >
        <div className={cn("flex items-center gap-2", isCollapsed ? "justify-center" : "flex-1")}>
          {profile.avatar ? (
            <Image
              src={profile.avatar}
              alt=""
              width={36}
              height={36}
              className="size-9 rounded-full object-cover shrink-0"
              aria-hidden="true"
            />
          ) : profile.initials ? (
            <div 
              className={cn(
                "flex items-center justify-center size-9 rounded-full text-[12.6px] font-bold tracking-[0.18px] shrink-0",
                profile.initialsColor
              )}
              aria-hidden="true"
            >
              {profile.initials}
            </div>
          ) : (
            <div className="size-9 rounded-full bg-muted overflow-hidden shrink-0" aria-hidden="true">
              <div className="size-full bg-muted" />
            </div>
          )}
          {!isCollapsed && (
            <div className="flex flex-col gap-1 overflow-hidden">
              <span className="text-sm font-semibold font-secondary leading-[1.2] tracking-[0.2px] text-foreground truncate">
                {profile.name}
              </span>
              <span className="text-xs font-secondary leading-[1.2] tracking-[0.2px] text-icon truncate">
                {profile.email}
              </span>
            </div>
          )}
        </div>
        {!isCollapsed && (
          <Icon 
            icon={isOpen ? "keyboard_arrow_up" : "keyboard_arrow_down"} 
            size={20} 
            className="text-foreground shrink-0" 
            aria-hidden="true" 
          />
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div 
          className={cn(
            "absolute bottom-full left-0 mb-2 w-[264px] flex flex-col p-2 gap-2 bg-background rounded-lg shadow-md border border-border z-50",
            isCollapsed && "left-full ml-2 bottom-0"
          )}
          role="menu"
        >
          {/* Profile Option */}
          <button
            type="button"
            className="flex items-center gap-2 px-3 py-2 w-full rounded-lg bg-background hover:bg-surface-hover transition-colors text-left"
            role="menuitem"
            onClick={() => setIsOpen(false)}
          >
            <div className="flex items-center justify-center size-6 text-icon">
              <Icon icon="person" size={20} />
            </div>
            <span className="text-sm font-secondary leading-[1.2] tracking-[0.2px] text-foreground">
              Profile
            </span>
          </button>

          {/* Divider */}
          <div className="w-full h-px bg-button-tertiary-border" role="separator" />

          {/* Logout Option */}
          <button
            type="button"
            className="flex items-center gap-2 px-3 py-2 w-full rounded-lg bg-background hover:bg-surface-hover transition-colors text-left"
            role="menuitem"
            onClick={() => setIsOpen(false)}
          >
            <div className="flex items-center justify-center size-6 text-icon">
              <Icon icon="logout" size={20} />
            </div>
            <span className="text-sm font-secondary leading-[1.2] tracking-[0.2px] text-foreground">
              Log out
            </span>
          </button>
        </div>
      )}
    </div>
  );
}

function AppSidebar({ variant = "talent", className }: AppSidebarProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const menuItems = variant === "talent" 
    ? talentMenuItems 
    : variant === "employer" 
    ? employerMenuItems 
    : adminMenuItems;
  
  const profile = userProfiles[variant];

  return (
    <nav
      className={cn(
        "flex flex-col h-full bg-background border-r border-button-tertiary-border transition-all duration-300 ease-in-out relative",
        isCollapsed ? "w-[80px]" : "w-[280px]",
        className
      )}
      aria-label={`${variant} navigation`}
    >
      {/* Logo */}
      <div className={cn(
        "flex flex-col justify-center pt-6 pb-4 transition-all duration-300",
        isCollapsed ? "items-center px-0" : "items-start px-6"
      )}>
        <div className="flex items-center gap-2 h-8 overflow-hidden">
          <Image
            src="/Logo.svg"
            alt="Hireable"
            width={24}
            height={24}
            className="shrink-0"
          />
          <div className={cn("transition-all duration-300 origin-left", isCollapsed ? "w-0 opacity-0 scale-x-0" : "w-[82px] opacity-100 scale-x-100")}>
            <Image
              src="/Logo-name.svg"
              alt=""
              width={82}
              height={17}
              aria-hidden="true"
              className="shrink-0"
            />
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="flex-1 w-full overflow-y-auto">
        <ul className="flex flex-col gap-2 p-2" role="list">
          {menuItems.map((item, index) => (
            <li key={index}>
              <SidebarMenuItemComponent item={item} isCollapsed={isCollapsed} />
            </li>
          ))}
        </ul>
      </div>

      {/* User Profile */}
      <div className="flex flex-col px-2 py-4 w-full">
        <SidebarProfile profile={profile} isCollapsed={isCollapsed} />
      </div>

      {/* Collapse Button */}
      <button
        type="button"
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="group absolute -right-3 bottom-[92px] flex size-6 items-center justify-center rounded-lg border border-border bg-surface-hover text-foreground shadow-sm transition-all hover:bg-button-tertiary-hover cursor-pointer z-50"
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        <Icon 
          icon={isCollapsed ? "chevron_right" : "chevron_left"} 
          size={16} 
          className="text-foreground transition-colors group-hover:text-client" 
          aria-hidden="true" 
        />
      </button>
    </nav>
  );
}
export { AppSidebar, SidebarMenuItemComponent, SidebarProfile };
