"use client";

import * as React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
  Icon,
  Separator,
  VisuallyHidden,
  WorktraitTag,
} from "@/components/ui";
import { ProfileCard } from "@/patterns/cards";

// TYPE DEFINITIONS
// ============================================================================

import { type CandidateProfile } from "@/types/api-contracts";

// Extended types for the new content structure
export interface PerformanceReview {
  id: string;
  role: string;
  isTest?: boolean;
  date: string;
  rating: number;
  review: string;
}

// ============================================================================
// TRIGGER CARD - Uses ProfileCard
// ============================================================================

interface CandidateCardProps extends React.ComponentProps<"div"> {
  data: CandidateProfile;
}

export const CandidateCard = React.forwardRef<HTMLDivElement, CandidateCardProps>(
  ({ className, data, ...props }, ref) => (
    <ProfileCard
      ref={ref}
      name={data.name}
      role={data.role}
      avatar={data.avatar}
      metadata={[
        { value: data.salary },
        { value: data.experience }
      ]}
      footer={{
        label: data.activityTitle
      }}
      className={className}
      {...props}
    />
  )
);
CandidateCard.displayName = "CandidateCard";

// ============================================================================
// DRAWER HEADER
// ============================================================================

const ProfileDrawerHeader: React.FC<{ title?: string }> = ({ title = "Talent Profile" }) => (
  <div className="flex flex-row justify-between items-start px-6 py-4 w-full h-16 border-b border-neutral-300 shrink-0">
    <div className="flex flex-row items-center gap-2 flex-1">
      <span className="font-semibold text-xl leading-[150%] tracking-[0.4px] text-[#181D27]">
        {title}
      </span>
    </div>
    <DrawerClose asChild>
      <button className="flex items-center justify-center p-1 w-8 h-8 bg-background rounded-full hover:bg-muted transition-colors">
        <Icon icon="close" size={24} className="text-muted-foreground" />
      </button>
    </DrawerClose>
  </div>
);

// ============================================================================
// DRAWER FOOTER
// ============================================================================

const ProfileDrawerFooter: React.FC = () => (
  <div className="flex flex-row justify-end items-center px-6 py-6 gap-3 w-full border-t border-neutral-300 bg-background shrink-0">
    <DrawerClose asChild>
      <Button
        variant="outline"
        className="h-11 px-5 border-neutral-300 text-foreground font-medium text-sm capitalize shadow-none"
      >
        Close
      </Button>
    </DrawerClose>
    <Button className="h-11 px-5 bg-client hover:bg-client-hover text-white font-medium text-sm capitalize shadow-none">
      Invite to job
    </Button>
  </div>
);


// ============================================================================
// CANDIDATE INFO SECTION
// ============================================================================

const CandidateInfo: React.FC<{ data: CandidateProfile }> = ({ data }) => (
  <div className="flex flex-col gap-2 w-full">
    <div className="flex items-start justify-between w-full">
      <Avatar className="size-20 rounded-full bg-neutral-200 border-2 border-white shadow-md">
        <AvatarImage src={data.avatar} alt={data.name} />
        <AvatarFallback className="text-lg">
          {data.name.split(" ").map((n) => n[0]).join("")}
        </AvatarFallback>
      </Avatar>
      <div className="flex gap-2 items-center">
        <Button
          variant="secondary"
          className="h-9 px-3 py-2 bg-[#ccedff] text-[#006593] text-xs font-medium capitalize rounded-lg hover:bg-[#b8e4ff] shadow-none"
        >
          Invite to interview
        </Button>
        <Button className="h-9 px-3 py-2 bg-client hover:bg-client-hover text-white text-xs font-medium capitalize rounded-lg shadow-none">
          Send offer
        </Button>
      </div>
    </div>

    <div className="flex flex-col gap-2 w-full">
      <h2 className="font-semibold text-[32px] leading-[150%] text-foreground font-['DM_Sans']">
        {data.name}
      </h2>
      <div className="flex gap-2 items-center flex-wrap text-sm text-secondary-foreground tracking-[0.2px]">
        <span>{data.role}</span>
        <span>•</span>
        <span>{data.salary}</span>
        <span>•</span>
        <span>{data.experience}</span>
        <span>•</span>
        <span>{data.location}</span>
      </div>
    </div>

    <div className="py-1">
      <Badge className="h-6 px-2 py-2 bg-[#eef9f2] text-[#27ae60] text-xs font-normal rounded-full border-0">
        {data.aiMatch?.percentage || 80}% matched
      </Badge>
    </div>
  </div>
);

// ============================================================================
// BIO SECTION
// ============================================================================

const BioSection: React.FC<{ bio: string }> = ({ bio }) => (
  <div className="flex flex-col gap-4 w-full">
    <h3 className="font-semibold text-base leading-[150%] tracking-[0.2px] text-foreground">
      Bio
    </h3>
    <p className="text-sm leading-[1.2] tracking-[0.2px] text-foreground">
      {bio}
    </p>
  </div>
);

// ============================================================================
// WORKPLACE TAGS SECTION
// ============================================================================

type WorktraitVariant = "decision-making" | "adaptability" | "responsiveness" | "time-management" | "cooperativeness" | "communication";

const defaultTraits: { label: string; variant: WorktraitVariant; icon: React.ReactNode }[] = [
  { label: "Proactive", variant: "decision-making", icon: <Icon icon="bolt" size={16} className="text-foreground" /> },
  { label: "Adaptive", variant: "adaptability", icon: <Icon icon="autorenew" size={16} className="text-foreground" /> },
  { label: "Dependable", variant: "responsiveness", icon: <Icon icon="mark_chat_read" size={16} className="text-foreground" /> },
  { label: "Versatile", variant: "time-management", icon: <Icon icon="schedule" size={16} className="text-foreground" /> },
  { label: "Confident", variant: "cooperativeness", icon: <Icon icon="handshake" size={16} className="text-foreground" /> },
  { label: "Responsive", variant: "communication", icon: <Icon icon="forum" size={16} className="text-foreground" /> },
];

const WorkplaceTagsSection: React.FC = () => (
  <div className="flex flex-col gap-4 w-full">
    <h3 className="font-semibold text-base leading-[150%] tracking-[0.2px] text-foreground">
      Workplace Tags
    </h3>
    <div className="flex flex-wrap gap-2 w-full">
      {defaultTraits.map((trait, index) => (
        <WorktraitTag
          key={index}
          variant={trait.variant}
          size="lg"
          label={trait.label}
          icon={trait.icon}
        />
      ))}
    </div>
  </div>
);

// ============================================================================
// LINKS SECTION
// ============================================================================

const LinksSection: React.FC<{ links?: string[] }> = ({ links = ["LinkedIn Profile", "My Portfolio", "My Website"] }) => (
  <div className="flex flex-col gap-4 w-full">
    <h3 className="font-semibold text-base leading-[150%] tracking-[0.2px] text-foreground">
      Links
    </h3>
    <div className="flex gap-2 flex-wrap">
      {links.map((link, index) => (
        <span
          key={index}
          className="h-8 px-3 py-2 bg-neutral-100 border border-neutral-300 text-foreground text-sm font-normal rounded cursor-pointer hover:bg-neutral-200 inline-flex items-center"
        >
          {link}
        </span>
      ))}
    </div>
  </div>
);

// ============================================================================
// SKILLS SECTION
// ============================================================================

const SkillsSection: React.FC<{ skills: string[] }> = ({ skills }) => (
  <div className="flex flex-col gap-4 w-full">
    <h3 className="font-semibold text-base leading-[150%] tracking-[0.2px] text-foreground">
      Skills
    </h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="h-8 px-3 py-2 bg-neutral-100 border border-neutral-300 text-secondary-foreground text-sm font-normal rounded inline-flex items-center"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);


// ============================================================================
// PERFORMANCE HISTORY SECTION
// ============================================================================

const StarRating: React.FC<{ rating: number; maxRating?: number }> = ({ rating, maxRating = 5 }) => (
  <div className="flex gap-[2.667px] items-center">
    {Array.from({ length: maxRating }).map((_, index) => (
      <Icon
        key={index}
        icon="star"
        size={16}
        className={index < rating ? "text-yellow-500 fill-current" : "text-neutral-300 fill-current"}
        style={{ fontVariationSettings: "'FILL' 1" }}
      />
    ))}
  </div>
);

const PerformanceCard: React.FC<{ review: PerformanceReview }> = ({ review }) => (
  <div className="flex flex-col gap-3 p-6 bg-background w-full">
    <div className="flex gap-2 items-center w-full">
      <span className="font-semibold text-xl leading-[150%] tracking-[0.4px] text-foreground">
        {review.role}
      </span>
      {review.isTest && (
        <Badge className="h-6 px-2 py-1 bg-[#fff5ec] text-[#ff8112] text-xs font-normal rounded border border-[#ff8112]">
          TEST
        </Badge>
      )}
    </div>
    <div className="flex gap-6 items-center">
      <span className="text-sm leading-[1.2] tracking-[0.2px] text-secondary-foreground">
        {review.date}
      </span>
      <StarRating rating={review.rating} />
    </div>
    <p className="text-sm leading-[1.2] tracking-[0.2px] text-foreground">
      {review.review}
    </p>
  </div>
);

const defaultPerformanceHistory: PerformanceReview[] = [
  {
    id: "perf-1",
    role: "Sales Representative",
    isTest: true,
    date: "January 1, 2020",
    rating: 5,
    review: "John consistently met company goals by delivering high-quality web development projects and enhancing the website's performance.",
  },
  {
    id: "perf-2",
    role: "Sales Representative",
    isTest: true,
    date: "January 1, 2020",
    rating: 5,
    review: "John consistently met company goals by delivering high-quality web development projects and enhancing the website's performance.",
  },
  {
    id: "perf-3",
    role: "Sales Representative",
    isTest: true,
    date: "January 1, 2020",
    rating: 5,
    review: "John consistently met company goals by delivering high-quality web development projects and enhancing the website's performance.",
  },
];

const PerformanceHistorySection: React.FC<{ reviews?: PerformanceReview[] }> = ({
  reviews = defaultPerformanceHistory,
}) => (
  <div className="flex flex-col gap-4 w-full">
    <h3 className="font-semibold text-base leading-[150%] tracking-[0.2px] text-foreground">
      Performance History
    </h3>
    <div className="flex flex-col w-full">
      {reviews.map((review, index) => (
        <React.Fragment key={review.id}>
          <PerformanceCard review={review} />
          {index < reviews.length - 1 && (
            <div className="py-6">
              <Separator className="bg-neutral-300" />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
);

// ============================================================================
// REFERENCE SECTION
// ============================================================================

const ReferenceSection: React.FC<{ references?: string[] }> = ({ 
  references = ["Maria Dela Cruz", "Josefina Aquino", "Manuel Lopez"] 
}) => (
  <div className="flex flex-col gap-4 w-full">
    <h3 className="font-semibold text-base leading-[150%] tracking-[0.2px] text-foreground">
      Reference
    </h3>
    <div className="flex gap-2 flex-wrap">
      {references.map((name, index) => (
        <span
          key={index}
          className="h-8 px-3 py-2 bg-neutral-100 border border-neutral-300 text-foreground text-sm font-normal rounded cursor-pointer hover:bg-neutral-200 inline-flex items-center"
        >
          {name}
        </span>
      ))}
    </div>
  </div>
);

// ============================================================================
// MAIN DRAWER COMPONENT
// ============================================================================

export interface CandidateProfileDrawerProps {
  data: CandidateProfile;
  children?: React.ReactNode;
}

export function CandidateProfileDrawer({ data, children }: CandidateProfileDrawerProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        {children || <CandidateCard data={data} />}
      </DrawerTrigger>
      <DrawerContent className="sm:max-w-[800px] p-0" showCloseButton={false}>
        <VisuallyHidden>
          <DrawerTitle>Candidate Profile - {data.name}</DrawerTitle>
        </VisuallyHidden>

        <div className="flex flex-col h-full bg-background overflow-hidden">
          {/* Header */}
          <ProfileDrawerHeader title="Talent Profile" />

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="flex flex-col gap-0 p-6 w-full">
              {/* Candidate Info */}
              <CandidateInfo data={data} />

              {/* Divider */}
              <div className="py-6">
                <Separator className="bg-neutral-300" />
              </div>

              {/* Content Sections */}
              <div className="flex flex-col gap-10 w-full">
                <BioSection bio={data.about} />
                <WorkplaceTagsSection />
                <LinksSection />
                <SkillsSection skills={data.skills} />
                <PerformanceHistorySection />
                <ReferenceSection />
              </div>
            </div>
          </div>

          {/* Footer */}
          <ProfileDrawerFooter />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
