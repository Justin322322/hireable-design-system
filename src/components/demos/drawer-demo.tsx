"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Card,
  CardContent,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
  FieldNote,
  Icon,
  Input,
  Label,
  RadioCard,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  VisuallyHidden,
} from "@/components/ui";

import * as React from "react";
import { useState } from "react";

// DnD Kit imports
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
// import { CSS } from "@dnd-kit/utilities";
import Image from "next/image";

import { 
  CodeBlock, 
  ComponentPreview,
  ComponentsTable,
  InterfaceTable 
} from "@/components/docs";
import { VERSION } from "@/lib/version";
import {
  drawerComponents,
  candidateProfileInterface,
  aiMatchInterface,
  educationInterface,
  certificateInterface,
} from "@/data/api/drawer";

import { cn } from "@/lib/utils";

// Import JSON data (simulates API response)
import drawerData from "@/data/drawer.json";

// ============================================================================
// TYPE DEFINITIONS - Backend-ready interfaces
// ============================================================================

interface Education {
  id: string;
  degree: string;
  school: string;
  years: string;
}

interface Certificate {
  id: string;
  name: string;
  issuer: string;
  year: string;
}

interface AIMatch {
  percentage: number;
  workStyleFit: string;
  performanceHistory: string;
  jobDescriptionFit: string;
}

interface Application {
  position: string;
  appliedDate: string;
}

interface Links {
  linkedin?: string;
  portfolio?: string;
}

interface CandidateProfile {
  id: string;
  name: string;
  role: string;
  avatar: string;
  salary: string;
  experience: string;
  location: string;
  status: string;
  activityTitle: string;
  application: Application;
  aiMatch: AIMatch;
  about: string;
  skills: string[];
  education: Education[];
  certificates: Certificate[];
  links: Links;
  personalMessage: string;
}

// Cast imported JSON to typed data
const candidateData = drawerData.candidateProfile as CandidateProfile;

// ============================================================================
// PROFILE DRAWER COMPONENTS
// ============================================================================

// Candidate Trigger Card Component (Ported from Profile Card)
interface CandidateCardProps extends React.ComponentProps<"div"> {
  data: CandidateProfile;
}

const CandidateCard = React.forwardRef<HTMLDivElement, CandidateCardProps>(
  ({ className, data, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-col items-start gap-2.5 p-4 bg-background border border-neutral-300 rounded-lg w-96 transition-colors hover:bg-neutral-100 hover:border-neutral-300 cursor-pointer",
        className
      )}
      {...props}
    >
      {/* Profile Section */}
      <div className="flex flex-row items-center gap-2.5 w-full">
        <Avatar className="w-14 h-14 shrink-0">
          <AvatarImage src={data.avatar} alt={data.name} />
          <AvatarFallback className="bg-muted">
            {data.name.split(" ").map(n => n[0]).join("")}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start gap-1 flex-1">
          <p className="font-semibold text-sm text-foreground leading-[120%]">{data.name}</p>
          <p className="font-normal text-xs text-foreground leading-[120%]">{data.role}</p>
        </div>
      </div>

      {/* Metadata Section */}
      <div className="flex flex-row items-center gap-6 w-full text-xs text-foreground">
        <span>{data.salary}</span>
        <span>{data.experience}</span>
      </div>

      {/* Activity Section */}
      <div className="flex flex-row items-center justify-between gap-4 w-full">
        <span className="text-xs text-foreground">{data.activityTitle}</span>
        <Button size="sm" className="rounded-full w-6 h-6 p-0 bg-client hover:bg-client-active" aria-label="View candidate profile">
          <Icon icon="chevron_right" size={16} className="text-white" aria-hidden="true" />
        </Button>
      </div>
    </div>
  )
);
CandidateCard.displayName = "CandidateCard";

// Drawer Header Component
interface ProfileDrawerHeaderProps {
  onClose?: () => void;
}

const ProfileDrawerHeader: React.FC<ProfileDrawerHeaderProps> = ({ onClose }) => (
  <div className="flex h-14 items-center justify-between border-b border-neutral-200 px-6 py-3">
    <DrawerClose asChild>
      <Button 
        variant="ghost"
        onClick={onClose}
        className="flex items-center gap-2 px-0 hover:bg-transparent"
      >
        <div className="flex size-8 items-center justify-center rounded-full border border-border hover:bg-muted transition-colors">
          <Icon icon="chevron_left" size={16} className="text-icon" />
        </div>
        <span className="text-sm text-foreground">
          back
        </span>
      </Button>
    </DrawerClose>

    <Button 
      variant="ghost"
      className="flex items-center gap-2"
      aria-label="Open profile in a new tab"
    >
      <span className="hidden text-sm font-medium text-foreground sm:inline-block">
        Open profile in a new tab
      </span>
      <Icon icon="open_in_new" size={16} className="text-icon" aria-hidden="true" />
    </Button>
  </div>
);

// Candidate Header Component
interface CandidateHeaderProps {
  data: CandidateProfile;
}

const CandidateHeader: React.FC<CandidateHeaderProps> = ({ data }) => (
  <div className="flex items-center gap-4">
    <Avatar className="size-16 border-2 border-white shadow-md">
      <AvatarImage src={data.avatar} alt={data.name} />
      <AvatarFallback>{data.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
    </Avatar>

    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold tracking-tight text-foreground">
          {data.name}
        </h1>
        <Badge variant="default" className="px-2 py-0.5 text-xs rounded-md bg-neutral-100 border-0 normal-case font-medium">
          ID: {data.id.split("-")[1]}
        </Badge>
        <Badge className="px-2 py-0.5 text-xs bg-green-50 text-green-700 border-0">
          {data.status}
        </Badge>
      </div>

      <p className="text-sm font-medium text-neutral-600">
        {data.role}
      </p>

      <div className="flex items-center gap-1">
        <Icon icon="location_on" size={16} className="text-muted-foreground" />
        <span className="text-sm text-muted-foreground">
          {data.location}
        </span>
      </div>
    </div>
  </div>
);

// Job Details Component
interface JobDetailsProps {
  application: Application;
}

const JobDetails: React.FC<JobDetailsProps> = ({ application }) => (
  <div className="flex flex-col gap-3 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
    <div className="flex items-center gap-2">
      <span className="text-sm text-neutral-500">Applied for:</span>
      <span className="text-sm font-semibold text-foreground">
        {application.position}
      </span>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-sm text-neutral-500">Applied:</span>
      <span className="text-sm font-semibold text-foreground">
        {application.appliedDate}
      </span>
    </div>
  </div>
);

// AI Match Card Component
interface AIMatchCardProps {
  aiMatch: AIMatch;
  isExpanded: boolean;
  onToggle: () => void;
}

const MatchSection: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div className="flex flex-col gap-2">
    <Badge 
      variant="default" 
      className="w-fit px-3 py-1 text-xs uppercase bg-client/10 text-client border-0 rounded-md font-medium"
    >
      {title}
    </Badge>
    <p className="text-sm leading-relaxed text-neutral-700">
      {children}
    </p>
  </div>
);

const AIMatchCard: React.FC<AIMatchCardProps> = ({ aiMatch, isExpanded, onToggle }) => (
  <div className="w-full">
    <div className="flex w-full flex-col rounded-lg border border-client bg-background">
      <div className="flex w-full items-start justify-between p-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <Image
              src="/icons/AI-Matchmaker-icon.svg"
              alt="AI Matchmaker"
              width={16}
              height={16}
              className="shrink-0"
              aria-hidden="true"
            />
            <span className="text-sm font-semibold uppercase tracking-wide text-foreground">
              AI Matchmaker
            </span>
          </div>
          <span className="text-xs text-neutral-600">
            Why is this candidate a good match?
          </span>
        </div>
        <div className="flex h-7 items-center justify-center rounded-md border border-green-600 bg-green-50 px-3">
          <span className="text-xs font-medium uppercase text-green-700">
            {aiMatch.percentage}% MATCHED
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4 px-4 pb-4">
        <MatchSection title="WORK STYLE FIT">
          {aiMatch.workStyleFit}
        </MatchSection>

        {/* Animated expand/collapse section */}
        <div 
          className="grid transition-all duration-300 ease-in-out"
          style={{ 
            gridTemplateRows: isExpanded ? '1fr' : '0fr',
          }}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-4">
              <MatchSection title="PERFORMANCE HISTORY">
                {aiMatch.performanceHistory}
              </MatchSection>

              <MatchSection title="JOB DESCRIPTION FIT">
                {aiMatch.jobDescriptionFit}
              </MatchSection>
            </div>
          </div>
        </div>

        <Button
          variant="link"
          onClick={onToggle}
          className="text-client p-0 h-auto underline hover:text-client-hover justify-start"
        >
          {isExpanded ? "Show less" : "Show more"}
        </Button>
      </div>
    </div>
  </div>
);

// Profile Tabs Component
const ProfileTabs: React.FC = () => (
  <div className="flex items-center gap-2">
    <Button 
      variant="outline" 
      size="sm"
      className="border-client bg-client/10 text-client hover:bg-client/15 font-semibold"
    >
      Overview
    </Button>
    <Button 
      variant="outline" 
      size="sm"
      className="border-neutral-300 text-foreground font-semibold"
    >
      Resume
    </Button>
  </div>
);

// Section Card Component
const SectionCard: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <Card className="rounded-lg border-neutral-200 shadow-none">
    <div className="flex items-center px-4 pt-4">
      <span className="text-sm font-semibold text-foreground">
        {title}
      </span>
    </div>
    <CardContent className="p-4 pt-2">
      {children}
    </CardContent>
  </Card>
);

// About Section
interface AboutSectionProps {
  about: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ about }) => (
  <SectionCard title="About">
    <p className="text-sm leading-relaxed text-neutral-700">
      {about}
    </p>
  </SectionCard>
);

// Skills Section
interface SkillsSectionProps {
  skills: string[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => (
  <SectionCard title="Skills">
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, i) => (
        <Badge
          key={i}
          variant="default"
          className="px-3 py-1 text-xs bg-neutral-100 border-0 normal-case rounded-md font-medium"
        >
          {skill}
        </Badge>
      ))}
    </div>
  </SectionCard>
);

// Education Section
interface EducationSectionProps {
  education: Education[];
}

const EducationSection: React.FC<EducationSectionProps> = ({ education }) => (
  <SectionCard title="Education">
    <div className="flex flex-col gap-3">
      {education.map((item, i) => (
        <React.Fragment key={item.id}>
          {i > 0 && <Separator className="bg-neutral-200" />}
          <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold text-foreground">
              {item.degree}
            </span>
            <div className="flex items-center gap-4">
              <span className="text-sm text-neutral-600">
                {item.school}
              </span>
              <span className="text-sm text-neutral-500">
                {item.years}
              </span>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  </SectionCard>
);

// Certificates Section
interface CertificatesSectionProps {
  certificates: Certificate[];
}

const CertificatesSection: React.FC<CertificatesSectionProps> = ({ certificates }) => (
  <SectionCard title="Certificates">
    <div className="flex flex-col gap-3">
      {certificates.map((cert, i) => (
        <React.Fragment key={cert.id}>
          {i > 0 && <Separator className="bg-neutral-200" />}
          <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold text-foreground">
              {cert.name}
            </span>
            <div className="flex items-center gap-4">
              <span className="text-sm text-neutral-600">
                {cert.issuer}
              </span>
              <span className="text-sm text-neutral-500">
                {cert.year}
              </span>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  </SectionCard>
);

// Links Section
const LinksSection: React.FC = () => (
  <SectionCard title="Links">
    <div className="flex gap-2">
      <Button
        variant="outline"
        size="sm"
        className="gap-2 border-neutral-300"
      >
        <svg
          width={16}
          height={16}
          viewBox="0 0 24 24"
          fill="currentColor"
          className="shrink-0 text-linkedin"
          aria-hidden="true"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
        LinkedIn
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="gap-2 border-neutral-300"
      >
        <Icon icon="public" size={16} className="text-icon" />
        Portfolio
      </Button>
    </div>
  </SectionCard>
);

// Personal Message Section
interface PersonalMessageSectionProps {
  message: string;
}

const PersonalMessageSection: React.FC<PersonalMessageSectionProps> = ({ message }) => (
  <Card className="rounded-lg border-neutral-200 shadow-sm">
    <CardContent className="p-4 flex flex-col gap-3">
      <span className="text-sm font-semibold text-foreground">
        Personal Message
      </span>
      <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
        <p className="text-sm leading-relaxed text-neutral-600">
          {message}
        </p>
      </div>
    </CardContent>
  </Card>
);

// Drawer Footer Component
const ProfileDrawerFooter: React.FC = () => (
  <div className="flex flex-col-reverse gap-3 border-t border-neutral-200 bg-background p-4 sm:flex-row sm:items-center">
    <Button
      variant="outline"
      className="w-full gap-2 border-red-200 text-red-500 hover:bg-red-50 hover:border-red-300 sm:w-auto"
    >
      <Icon icon="delete" size={16} className="text-red-500" />
      Drop candidate
    </Button>
    <div className="flex flex-1 gap-2">
      <Button
        variant="outline"
        className="flex-1 border-neutral-300"
      >
        Invite interview
      </Button>
      <Button
        className="flex-1 bg-client hover:bg-client-hover text-white font-semibold"
      >
        Send offer
      </Button>
    </div>
  </div>
);

// ============================================================================
// STATIC CREATE OBJECTIVE DRAWER
// ============================================================================

// Key Results Progress Bar Component
const KeyResultsProgress: React.FC<{ current: number; total: number }> = ({ current, total }) => (
  <div className="flex flex-row items-center gap-3">
    <Icon icon="account_tree" size={20} className="text-muted-foreground" />
    <span className="font-semibold text-sm leading-[120%] tracking-[0.2px] text-muted-foreground">
      Key Results
    </span>
    <span className="text-sm leading-[120%] tracking-[0.2px] text-muted-foreground">
      {current} / {total}
    </span>
    <div className="w-[120px] h-2 bg-neutral-100 rounded-full overflow-hidden">
      <div 
        className="h-full bg-client rounded-full" 
        style={{ width: `${(current / total) * 100}%` }}
      />
    </div>
  </div>
);

// Key Result interface for DnD
interface KeyResult {
  id: string;
  title: string;
  badgeText: string;
}

// Default key results data
const defaultKeyResults: KeyResult[] = [
  { id: "kr-1", title: "Increase quarterly sales by 20%", badgeText: "Percent" },
  { id: "kr-2", title: "Complete user research interviews", badgeText: "Number" },
];

// Sortable Key Result Item Component
interface SortableKeyResultItemProps {
  id: string;
  title: string;
  badgeText?: string;
}

const SortableKeyResultItem: React.FC<SortableKeyResultItemProps> = ({ id, title, badgeText }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    // Restrict movement to Y-axis only (no horizontal drift)
    transform: transform ? `translate3d(0, ${transform.y}px, 0)` : undefined,
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 1000 : 1,
  };

  return (
    <div 
      ref={setNodeRef} 
      style={style}
      className={cn(
        "flex flex-row items-center p-1 gap-6 w-full bg-background rounded hover:bg-neutral-50 transition-colors group",
        isDragging && "shadow-lg bg-white"
      )}
    >
      <div className="flex flex-row items-center gap-2 flex-1">
        <button
          {...attributes}
          {...listeners}
          className="flex items-center justify-center cursor-grab active:cursor-grabbing touch-none p-1"
        >
          <Icon icon="drag_indicator" size={20} className="text-muted-foreground group-hover:text-foreground" />
        </button>
        <div className="flex flex-row items-center gap-2.5 flex-1">
          <span className="text-sm leading-normal tracking-[0.2px] text-foreground">
            {title}
          </span>
          {badgeText && (
            <Badge variant="default" className="px-2 py-0.5 text-xs bg-neutral-100 text-muted-foreground rounded-full font-normal">
              {badgeText}
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
};

// Static Draggable List Item Component (for static previews)
interface DraggableListItemProps {
  title: string;
  badgeText?: string;
}

const DraggableListItem: React.FC<DraggableListItemProps> = ({ title, badgeText }) => (
  <div className="flex flex-row items-center p-1 gap-6 w-full bg-background rounded hover:bg-neutral-50 cursor-grab transition-colors group">
    <div className="flex flex-row items-center gap-2 flex-1">
      <Icon icon="drag_indicator" size={20} className="text-muted-foreground group-hover:text-foreground shrink-0" />
      <div className="flex flex-row items-center gap-2.5 flex-1 py-2 px-2 rounded">
        <span className="text-sm leading-[120%] tracking-[0.2px] text-foreground">
          {title}
        </span>
        {badgeText && (
          <Badge variant="default" className="px-2 py-0.5 text-xs bg-neutral-100 text-muted-foreground rounded-full font-normal">
            {badgeText}
          </Badge>
        )}
      </div>
    </div>
  </div>
);

// Static Create Objective Drawer Preview - Unified component with all states
interface CreateObjectiveDrawerPreviewProps {
  selectedMethod?: "automatic" | "manual" | null;
}

const CreateObjectiveDrawerPreview: React.FC<CreateObjectiveDrawerPreviewProps> = ({ 
  selectedMethod = null 
}) => (
  <div className="relative w-full max-w-[800px] h-auto min-h-[700px] bg-background border border-neutral-200 rounded-lg shadow-lg overflow-hidden flex flex-col">
    {/* Header */}
    <div className="box-border flex flex-row justify-between items-start px-6 py-4 w-full h-16 border-b border-neutral-300 shrink-0">
      <span className="font-semibold text-xl leading-[150%] tracking-[0.4px] text-foreground">
        Create Objective
      </span>
      <Button variant="ghost" size="icon" className="size-8">
        <Icon icon="close" size={24} className="text-muted-foreground" />
      </Button>
    </div>

    {/* Container - Scrollable content */}
    <div className="flex flex-col items-start p-4 gap-8 flex-1 overflow-y-auto">
      {/* Objective Title Input */}
      <Input
        size="lg"
        placeholder="Write objective title"
        className="w-full h-14"
      />

      {/* Description Box */}
      <div className="flex flex-col items-start gap-2 w-full">
        <Label className="font-semibold text-sm leading-[120%] tracking-[0.2px] text-foreground">
          Description
        </Label>
        <Textarea
          placeholder="Write description here"
          className="w-full min-h-[131px]"
        />
      </div>

      {/* Update Method Section */}
      <div className="flex flex-col items-start gap-6 w-full">
        {/* Radiocard Option */}
        <div className="flex flex-col items-start gap-4 w-full">
          <Label className="font-semibold text-sm leading-[120%] tracking-[0.2px] text-foreground">
            Update method
          </Label>
          
          {/* Radio Cards */}
          <div className="flex flex-row items-center gap-4 w-full">
            <RadioCard
              value="automatic"
              title="Automatic"
              description="Automatically track the progress of your objective from connected Key results"
              selected={selectedMethod === "automatic"}
            />
            <RadioCard
              value="manual"
              title="Manual"
              description="Manually track the progress of your objective from the current to target value."
              selected={selectedMethod === "manual"}
            />
          </div>
        </div>

        {/* Key Results Section - Visible when Automatic is selected */}
        {selectedMethod === "automatic" && (
          <div className="flex flex-col items-start gap-4 w-full">
            <KeyResultsProgress current={1} total={3} />
            
            {/* Draggable List Items */}
            <div className="flex flex-col gap-1 w-full">
              <DraggableListItem title="Increase quarterly sales by 20%" badgeText="Percent" />
              <DraggableListItem title="Complete user research interviews" badgeText="Number" />
            </div>
            
            {/* Add Key Result Button */}
            <Button 
              variant="secondary"
              size="md"
              className="gap-2 bg-[#CCEDFF] hover:bg-[#B8E4FF] text-[#006593]"
            >
              <Icon icon="add" size={14} />
              Add Key result
            </Button>
          </div>
        )}

        {/* Value Inputs Section - Visible when Manual is selected */}
        {selectedMethod === "manual" && (
          <div className="flex flex-row items-start gap-4 w-full">
            {/* Unit Type Dropdown */}
            <div className="flex flex-col items-start gap-2 flex-1">
              <Label className="font-semibold text-sm leading-[120%] tracking-[0.2px] text-foreground">
                Unit type
              </Label>
              <Select defaultValue="percent">
                <SelectTrigger className="h-11">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="percent">Percent</SelectItem>
                  <SelectItem value="number">Number</SelectItem>
                  <SelectItem value="currency">Currency</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Divider - Vertically centered with input fields */}
            <div className="flex flex-col justify-center items-center self-stretch pt-[25px]">
              <Separator className="w-4" />
            </div>

            {/* Current Value Input */}
            <div className="flex flex-col items-start gap-2 flex-1">
              <Label className="font-semibold text-sm leading-[120%] tracking-[0.2px] text-foreground">
                Current value
              </Label>
              <Input placeholder="0" className="w-full h-11" />
            </div>

            {/* Target Value Input */}
            <div className="flex flex-col items-start gap-2 flex-1">
              <Label className="font-semibold text-sm leading-[120%] tracking-[0.2px] text-foreground">
                Target value
              </Label>
              <Input placeholder="100" className="w-full h-11" />
            </div>
          </div>
        )}

        {/* Field Note - Show when no selection or Automatic */}
        {selectedMethod !== "manual" && (
          <FieldNote variant="info">
            If your objective is not measurable (e.g. qualitative outcomes or binary tasks), you may skip selecting a measurement type. The goal will be tracked using status updates only (Not Started, In Progress, Completed).
          </FieldNote>
        )}
      </div>
    </div>

    {/* CTA Footer */}
    <div className="flex flex-row justify-end items-center px-6 py-4 gap-3 w-full border-t border-neutral-200 bg-background shrink-0">
      <Button variant="outline" className="border-neutral-300">
        Cancel
      </Button>
      <Button className="bg-client hover:bg-client-hover text-white font-medium">
        Save objective
      </Button>
    </div>
  </div>
);

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================


export default function DrawerPage() {
  const [isAICardExpanded, setIsAICardExpanded] = useState(false);
  const [updateMethod, setUpdateMethod] = useState<"automatic" | "manual" | null>(null);
  const [keyResults, setKeyResults] = useState<KeyResult[]>(defaultKeyResults);

  // DnD sensors configuration
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // Handle drag end for reordering
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    
    if (over && active.id !== over.id) {
      setKeyResults((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <div className="container max-w-4xl py-12 px-4 md:px-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">Drawer</h1>
          <span className="text-sm text-muted-foreground">{VERSION}</span>
        </div>
        <p className="text-lg text-muted-foreground">
          A panel that slides in from the right side of the screen. Built with Radix UI and CSS animations.
        </p>
      </div>

      <Tabs defaultValue="examples" className="space-y-8">
        <TabsList>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
        </TabsList>

        <TabsContent value="examples" className="space-y-8">
          {/* Interactive Candidate Profile Drawer */}
          <ComponentPreview title="Candidate Profile Drawer">
            <div className="flex flex-col items-center gap-3">
              <p className="text-sm text-muted-foreground">
                Click the card below to open the drawer
              </p>
              <Drawer>
                <DrawerTrigger asChild>
                  <CandidateCard data={candidateData} />
                </DrawerTrigger>
                <DrawerContent className="sm:max-w-4xl p-0" showCloseButton={false}>
                  <VisuallyHidden>
                    <DrawerTitle>Candidate Profile - {candidateData.name}</DrawerTitle>
                  </VisuallyHidden>

                  <div className="flex flex-col h-full bg-background overflow-hidden">
                    {/* Header */}
                    <ProfileDrawerHeader />

                    {/* Scrollable Content */}
                    <div className="flex-1 overflow-y-auto">
                      {/* Top Section */}
                      <div className="flex flex-col gap-5 border-b border-neutral-200 p-6">
                        <CandidateHeader data={candidateData} />
                        <JobDetails application={candidateData.application} />
                        <AIMatchCard
                          aiMatch={candidateData.aiMatch}
                          isExpanded={isAICardExpanded}
                          onToggle={() => setIsAICardExpanded(!isAICardExpanded)}
                        />
                        <ProfileTabs />
                      </div>

                      {/* Bottom Section - Profile Details */}
                      <div className="flex flex-col gap-4 p-6">
                        <AboutSection about={candidateData.about} />
                        <SkillsSection skills={candidateData.skills} />
                        <EducationSection education={candidateData.education} />
                        <CertificatesSection certificates={candidateData.certificates} />
                        <LinksSection />
                        <PersonalMessageSection message={candidateData.personalMessage} />
                      </div>
                    </div>

                    {/* Footer */}
                    <ProfileDrawerFooter />
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          </ComponentPreview>

          <CodeBlock
            code={`import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger, VisuallyHidden } from "@/components/ui";

// Candidate Profile Drawer Example
export function CandidateProfileDrawer({ candidateId }: { candidateId: string }) {
  const [candidate, setCandidate] = useState<CandidateProfile | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchCandidate = async (id: string) => {
    setLoading(true);
    const res = await fetch(\`/api/candidates/\${id}\`);
    const data = await res.json();
    setCandidate(data);
    setLoading(false);
  };

  return (
    <Drawer onOpenChange={(open) => open && fetchCandidate(candidateId)}>
      <DrawerTrigger asChild>
        <CandidateCard candidateId={candidateId} />
      </DrawerTrigger>
      <DrawerContent className="sm:max-w-4xl p-0" showCloseButton={false}>
        <VisuallyHidden>
          <DrawerTitle>Candidate Profile</DrawerTitle>
        </VisuallyHidden>
        
        {loading ? (
          <LoadingSpinner />
        ) : candidate && (
          <div className="flex flex-col h-full">
            <ProfileDrawerHeader />
            <div className="flex-1 overflow-y-auto">
              <CandidateHeader data={candidate} />
              <AIMatchCard aiMatch={candidate.aiMatch} />
              <AboutSection about={candidate.about} />
              <SkillsSection skills={candidate.skills} />
            </div>
            <ProfileDrawerFooter />
          </div>
        )}
      </DrawerContent>
    </Drawer>
  );
}`}
            language="tsx"
          />

          {/* Interactive Create Objective Drawer */}
          <ComponentPreview title="Create Objective Drawer (Interactive)">
            <div className="flex flex-col items-center gap-3">
              <p className="text-sm text-muted-foreground">
                Click the button below to open the Create Objective drawer
              </p>
              <Drawer onOpenChange={(open) => !open && setUpdateMethod(null)}>
                <DrawerTrigger asChild>
                  <Button>Create Objective</Button>
                </DrawerTrigger>
                <DrawerContent className="sm:max-w-[800px] p-0" showCloseButton={false}>
                  <VisuallyHidden>
                    <DrawerTitle>Create Objective</DrawerTitle>
                  </VisuallyHidden>

                  <div className="flex flex-col h-full bg-background overflow-hidden">
                    {/* Header */}
                    <div className="box-border flex flex-row justify-between items-start px-6 py-4 w-full h-16 border-b border-neutral-300 shrink-0">
                      <span className="font-semibold text-xl leading-[150%] tracking-[0.4px] text-foreground">
                        Create Objective
                      </span>
                      <DrawerClose asChild>
                        <button className="flex items-center justify-center p-1 w-8 h-8 bg-background rounded-full hover:bg-muted transition-colors">
                          <Icon icon="close" size={24} className="text-muted-foreground" />
                        </button>
                      </DrawerClose>
                    </div>

                    {/* Container - Scrollable content */}
                    <div className="flex flex-col items-start p-4 gap-8 flex-1 overflow-y-auto">
                      {/* Objective Title Input */}
                      <Input
                        size="lg"
                        placeholder="Write objective title"
                        className="w-full h-14"
                      />

                      {/* Description Box */}
                      <div className="flex flex-col items-start gap-2 w-full">
                        <Label className="font-semibold text-sm leading-[120%] tracking-[0.2px] text-foreground">
                          Description
                        </Label>
                        <Textarea
                          placeholder="Write description here"
                          className="w-full min-h-[131px]"
                        />
                      </div>

                      {/* Update Method Section */}
                      <div className="flex flex-col items-start gap-6 w-full">
                        {/* Radiocard Option */}
                        <div className="flex flex-col items-start gap-4 w-full">
                          <Label className="font-semibold text-sm leading-[120%] tracking-[0.2px] text-foreground">
                            Update method
                          </Label>
                          
                          {/* Clickable Radio Cards */}
                          <div className="flex flex-row items-center gap-4 w-full">
                            <RadioCard
                              value="automatic"
                              title="Automatic"
                              description="Automatically track the progress of your objective from connected Key results"
                              selected={updateMethod === "automatic"}
                              onSelect={() => setUpdateMethod("automatic")}
                            />
                            <RadioCard
                              value="manual"
                              title="Manual"
                              description="Manually track the progress of your objective from the current to target value."
                              selected={updateMethod === "manual"}
                              onSelect={() => setUpdateMethod("manual")}
                            />
                          </div>
                        </div>

                        {/* Conditional content based on selection */}
                        {updateMethod === "automatic" && (
                          <div className="flex flex-col items-start gap-4 w-full">
                            <KeyResultsProgress current={keyResults.length} total={3} />
                            <DndContext
                              sensors={sensors}
                              collisionDetection={closestCenter}
                              onDragEnd={handleDragEnd}
                            >
                              <SortableContext
                                items={keyResults.map((kr) => kr.id)}
                                strategy={verticalListSortingStrategy}
                              >
                                <div className="flex flex-col gap-1 w-full">
                                  {keyResults.map((keyResult) => (
                                    <SortableKeyResultItem
                                      key={keyResult.id}
                                      id={keyResult.id}
                                      title={keyResult.title}
                                      badgeText={keyResult.badgeText}
                                    />
                                  ))}
                                </div>
                              </SortableContext>
                            </DndContext>
                            <Button 
                              variant="secondary"
                              size="md"
                              className="gap-2 bg-[#CCEDFF] hover:bg-[#B8E4FF] text-[#006593]"
                              onClick={() => {
                                const newId = `kr-${Date.now()}`;
                                setKeyResults([...keyResults, { id: newId, title: "New key result", badgeText: "Percent" }]);
                              }}
                            >
                              <Icon icon="add" size={14} />
                              Add Key result
                            </Button>
                          </div>
                        )}

                        {updateMethod === "manual" && (
                          <div className="flex flex-row items-start gap-4 w-full">
                            {/* Unit Type Dropdown */}
                            <div className="flex flex-col items-start gap-2 flex-1">
                              <Label className="font-semibold text-sm leading-[120%] tracking-[0.2px] text-foreground">
                                Unit type
                              </Label>
                              <Select defaultValue="percent">
                                <SelectTrigger className="h-11">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="percent">Percent</SelectItem>
                                  <SelectItem value="number">Number</SelectItem>
                                  <SelectItem value="currency">Currency</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            {/* Divider */}
                            <div className="flex flex-col justify-center items-center self-stretch pt-[25px]">
                              <div className="w-4 h-px bg-neutral-300" />
                            </div>

                            {/* Current Value Input */}
                            <div className="flex flex-col items-start gap-2 flex-1">
                              <Label className="font-semibold text-sm leading-[120%] tracking-[0.2px] text-foreground">
                                Current value
                              </Label>
                              <Input placeholder="0" className="w-full h-11" />
                            </div>

                            {/* Target Value Input */}
                            <div className="flex flex-col items-start gap-2 flex-1">
                              <Label className="font-semibold text-sm leading-[120%] tracking-[0.2px] text-foreground">
                                Target value
                              </Label>
                              <Input placeholder="100" className="w-full h-11" />
                            </div>
                          </div>
                        )}

                        {/* Field Note - Show when no selection or Automatic */}
                        {updateMethod !== "manual" && (
                          <FieldNote variant="info">
                            If your objective is not measurable (e.g. qualitative outcomes or binary tasks), you may skip selecting a measurement type. The goal will be tracked using status updates only (Not Started, In Progress, Completed).
                          </FieldNote>
                        )}
                      </div>
                    </div>

                    {/* CTA Footer */}
                    <div className="flex flex-row justify-end items-center px-6 py-4 gap-3 w-full border-t border-neutral-200 bg-background shrink-0">
                      <DrawerClose asChild>
                        <Button variant="outline" className="border-neutral-300">
                          Cancel
                        </Button>
                      </DrawerClose>
                      <Button className="bg-client hover:bg-client-hover text-white font-medium">
                        Save objective
                      </Button>
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          </ComponentPreview>

          <ComponentPreview title="Create Objective Drawer - Default">
            <div className="flex flex-col items-center gap-3">
              <p className="text-sm text-muted-foreground">
                Default state with no update method selected. Shows input fields, radio cards, and info field note.
              </p>
              <CreateObjectiveDrawerPreview />
            </div>
          </ComponentPreview>

          <ComponentPreview title="Create Objective Drawer - Automatic Selected">
            <div className="flex flex-col items-center gap-3">
              <p className="text-sm text-muted-foreground">
                Automatic update method selected. Shows Key Results section with progress bar and draggable list items.
              </p>
              <CreateObjectiveDrawerPreview selectedMethod="automatic" />
            </div>
          </ComponentPreview>

          <ComponentPreview title="Create Objective Drawer - Manual Selected">
            <div className="flex flex-col items-center gap-3">
              <p className="text-sm text-muted-foreground">
                Manual update method selected. Shows Unit type dropdown, Current value, and Target value input fields.
              </p>
              <CreateObjectiveDrawerPreview selectedMethod="manual" />
            </div>
          </ComponentPreview>

          <CodeBlock
            code={`import { 
  Drawer, 
  DrawerContent, 
  DrawerTrigger, 
  DrawerClose,
  Button,
  Input,
  Textarea,
  Label,
  FieldNote,
  Icon
} from "@/components/ui";

// Create Objective Drawer Example
export function CreateObjectiveDrawer() {
  const [updateMethod, setUpdateMethod] = useState<"automatic" | "manual" | null>(null);

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Create Objective</Button>
      </DrawerTrigger>
      <DrawerContent className="sm:max-w-[800px] p-0">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <span className="font-semibold text-xl">Create Objective</span>
          <DrawerClose asChild>
            <button className="p-1 rounded-full hover:bg-muted">
              <Icon icon="close" size={24} />
            </button>
          </DrawerClose>
        </div>

        {/* Form Content */}
        <div className="flex flex-col p-4 gap-8 overflow-y-auto">
          <Input size="lg" placeholder="Write objective title" />

          <div className="flex flex-col gap-2">
            <Label>Description</Label>
            <Textarea placeholder="Write description here" />
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <Label>Update method</Label>
              <div className="flex gap-4">
                <RadioCard
                  title="Automatic"
                  description="Track from connected Key results"
                  selected={updateMethod === "automatic"}
                  onClick={() => setUpdateMethod("automatic")}
                />
                <RadioCard
                  title="Manual"
                  description="Track from current to target value"
                  selected={updateMethod === "manual"}
                  onClick={() => setUpdateMethod("manual")}
                />
              </div>
            </div>

            {/* Show Key Results section when Automatic is selected */}
            {updateMethod === "automatic" && (
              <KeyResultsSection />
            )}

            <FieldNote variant="info">
              Skip measurement type for qualitative outcomes. 
              Status updates only: Not Started, In Progress, Completed.
            </FieldNote>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 px-6 py-4 border-t">
          <Button variant="outline">Cancel</Button>
          <Button>Save objective</Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
}`}
            language="tsx"
          />
        </TabsContent>

        <TabsContent value="usage" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Guidelines</h2>
            <Card>
              <CardContent className="pt-6 text-muted-foreground">
                <ul className="list-disc list-inside space-y-2">
                  <li>Slides in from the right edge, creating a side-panel experience.</li>
                  <li>Use for secondary tasks or detailed views that require focus.</li>
                  <li>Maintains context while providing deep-dive information.</li>
                  <li>Uses the system&apos;s standard CSS animations for performance.</li>
                </ul>
              </CardContent>
            </Card>
          </section>
        </TabsContent>

        <TabsContent value="api" className="space-y-8">
          <ComponentsTable title="Drawer Components" components={drawerComponents} />
          <InterfaceTable title="CandidateProfile Interface" properties={candidateProfileInterface} />
          <InterfaceTable title="AIMatch Interface" properties={aiMatchInterface} />
          <InterfaceTable title="Education Interface" properties={educationInterface} />
          <InterfaceTable title="Certificate Interface" properties={certificateInterface} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
