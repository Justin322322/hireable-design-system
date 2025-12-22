"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Icon, IconName } from "@/components/ui/icon";

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
  { icon: "hourglass_empty", label: "Trials", href: "#" },
];

const employerMenuItems: SidebarMenuItem[] = [
  { icon: "home", label: "Home", href: "#", active: true },
  { icon: "person_search", label: "Discover Talent", href: "#" },
  { icon: "work", label: "Jobs", href: "#" },
  { icon: "mail", label: "Messages", href: "#" },
  { icon: "hourglass_empty", label: "Trials", href: "#" },
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
    initialsColor: "bg-[#FFE5CC] text-[#FF8112]",
  },
};

function SidebarMenuItemComponent({ item }: { item: SidebarMenuItem }) {
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
      <span 
        className="flex-1 text-sm font-secondary leading-[1.2] tracking-[0.2px] text-foreground"
      >
        {item.label}
      </span>
      {item.expandable && (
        <Icon icon="keyboard_arrow_down" size={20} className="text-foreground" aria-hidden="true" />
      )}
    </>
  );

  const baseClasses = cn(
    "flex items-center gap-2 px-4 py-2 rounded-lg transition-colors",
    item.active 
      ? "bg-surface-hover" 
      : "bg-background hover:bg-surface-hover"
  );

  // Use Link for navigation, button for expandable items
  if (item.href && !item.expandable) {
    return (
      <Link
        href={item.href}
        className={baseClasses}
        aria-current={item.active ? "page" : undefined}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={cn(baseClasses, "w-full text-left cursor-pointer")}
    >
      {content}
    </button>
  );
}

function SidebarProfile({ profile }: { profile: SidebarUserProfile }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        className={cn(
          "flex items-center gap-2 px-4 py-2 h-[52px] w-full rounded-lg transition-colors text-left",
          isOpen ? "bg-surface-hover" : "bg-background hover:bg-surface-hover"
        )}
        aria-label="User profile menu"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center flex-1 gap-2">
          {profile.avatar ? (
            <Image
              src={profile.avatar}
              alt=""
              width={36}
              height={36}
              className="size-9 rounded-full object-cover"
              aria-hidden="true"
            />
          ) : profile.initials ? (
            <div 
              className={cn(
                "flex items-center justify-center size-9 rounded-full text-[12.6px] font-bold tracking-[0.18px]",
                profile.initialsColor
              )}
              aria-hidden="true"
            >
              {profile.initials}
            </div>
          ) : (
            <div className="size-9 rounded-full bg-muted overflow-hidden" aria-hidden="true">
              <div className="size-full bg-muted" />
            </div>
          )}
          <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold font-secondary leading-[1.2] tracking-[0.2px] text-foreground">
              {profile.name}
            </span>
            <span className="text-xs font-secondary leading-[1.2] tracking-[0.2px] text-icon">
              {profile.email}
            </span>
          </div>
        </div>
        <Icon 
          icon={isOpen ? "keyboard_arrow_up" : "keyboard_arrow_down"} 
          size={20} 
          className="text-foreground" 
          aria-hidden="true" 
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div 
          className="absolute bottom-full left-0 mb-2 w-[264px] flex flex-col p-2 gap-2 bg-background rounded-lg shadow-[0px_2px_4px_rgba(0,0,0,0.25)]"
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
  const menuItems = variant === "talent" 
    ? talentMenuItems 
    : variant === "employer" 
    ? employerMenuItems 
    : adminMenuItems;
  
  const profile = userProfiles[variant];

  return (
    <nav
      className={cn(
        "flex flex-col w-[280px] h-full bg-background border-r border-button-tertiary-border",
        className
      )}
      aria-label={`${variant} navigation`}
    >
      {/* Logo */}
      <div className="flex flex-col items-start justify-center px-6 pt-6 pb-4">
        <div className="flex items-center gap-2 h-8">
          <Image
            src="/Logo.svg"
            alt="Hireable"
            width={24}
            height={24}
          />
          <Image
            src="/Logo-name.svg"
            alt=""
            width={82}
            height={17}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="flex-1 flex flex-col relative">
        <ul className="flex flex-col gap-2 p-2" role="list">
          {menuItems.map((item, index) => (
            <li key={index}>
              <SidebarMenuItemComponent item={item} />
            </li>
          ))}
        </ul>

        {/* Collapse Button */}
        <button
          type="button"
          className="absolute right-[-12px] bottom-2 flex items-center justify-center size-6 rounded-lg bg-surface-hover hover:bg-button-tertiary-hover transition-colors"
          aria-label="Collapse sidebar"
        >
          <Icon icon="chevron_left" size={16} className="text-foreground" aria-hidden="true" />
        </button>
      </div>

      {/* User Profile */}
      <div className="flex flex-col px-2 py-4">
        <SidebarProfile profile={profile} />
      </div>
    </nav>
  );
}

export { AppSidebar, SidebarMenuItemComponent, SidebarProfile };
