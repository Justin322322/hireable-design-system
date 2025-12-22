import { cn } from "@/lib/utils";
import Image from "next/image";
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
  { icon: "home", label: "Home", active: true },
  { icon: "work", label: "Job board" },
  { icon: "chat", label: "Messages" },
  { icon: "schedule", label: "Trials" },
];

const employerMenuItems: SidebarMenuItem[] = [
  { icon: "home", label: "Home", active: true },
  { icon: "person_search", label: "Discover Talent" },
  { icon: "work", label: "Jobs" },
  { icon: "chat", label: "Messages" },
  { icon: "schedule", label: "Trials" },
];

const adminMenuItems: SidebarMenuItem[] = [
  { icon: "home", label: "Home", active: true },
  { icon: "group", label: "User management", expandable: true },
  { icon: "work", label: "Job post management" },
  { icon: "schedule", label: "Trial management" },
  { icon: "payments", label: "Payments & billing", expandable: true },
  { icon: "bar_chart", label: "Performance & scoring", expandable: true },
  { icon: "description", label: "Content management" },
  { icon: "shield", label: "Dispute & compliance" },
  { icon: "verified_user", label: "KYC & verification" },
  { icon: "settings", label: "Admin settings" },
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
  return (
    <div
      className={cn(
        "flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer",
        "bg-background hover:bg-button-tertiary-hover transition-colors"
      )}
    >
      <div className="flex items-center justify-center size-6 text-icon">
        <Icon icon={item.icon} size={20} />
      </div>
      <span className="flex-1 text-sm font-secondary leading-[1.2] tracking-[0.2px] text-foreground">
        {item.label}
      </span>
      {item.expandable && (
        <Icon icon="keyboard_arrow_down" size={20} className="text-foreground" />
      )}
    </div>
  );
}

function SidebarProfile({ profile }: { profile: SidebarUserProfile }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 h-[52px] rounded-lg bg-background">
      <div className="flex items-center flex-1 gap-2">
        {profile.avatar ? (
          <Image
            src={profile.avatar}
            alt={profile.name}
            width={36}
            height={36}
            className="size-9 rounded-full object-cover"
          />
        ) : profile.initials ? (
          <div className={cn(
            "flex items-center justify-center size-9 rounded-full text-[12.6px] font-bold tracking-[0.18px]",
            profile.initialsColor
          )}>
            {profile.initials}
          </div>
        ) : (
          <div className="size-9 rounded-full bg-muted overflow-hidden">
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
      <Icon icon="keyboard_arrow_down" size={20} className="text-foreground" />
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
    <div
      className={cn(
        "flex flex-col w-[280px] h-full bg-background border-r border-button-tertiary-border",
        className
      )}
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
            alt="Hireable"
            width={82}
            height={17}
          />
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="flex-1 flex flex-col relative">
        <div className="flex flex-col gap-2 p-2">
          {menuItems.map((item, index) => (
            <SidebarMenuItemComponent key={index} item={item} />
          ))}
        </div>

        {/* Collapse Button */}
        <div className="absolute right-[-12px] bottom-2 flex items-center justify-center size-6 rounded-lg bg-surface-hover cursor-pointer">
          <Icon icon="chevron_left" size={16} className="text-foreground" />
        </div>
      </div>

      {/* User Profile */}
      <div className="flex flex-col px-2 py-4">
        <SidebarProfile profile={profile} />
      </div>
    </div>
  );
}

export { AppSidebar, SidebarMenuItemComponent, SidebarProfile };
