"use client";

import * as React from "react";
import { useState } from "react";
import Image from "next/image";
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
  Icon,
  Separator,
  VisuallyHidden,
} from "@/components/ui";
import { ProfileCard } from "@/patterns/cards";

// ============================================================================
// TYPE DEFINITIONS
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

export interface CandidateProfile {
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
// DRAWER SECTIONS
// ============================================================================

const ProfileDrawerHeader: React.FC<{ onClose?: () => void }> = ({ onClose }) => (
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
        <span className="text-sm text-foreground">back</span>
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

const CandidateHeader: React.FC<{ data: CandidateProfile }> = ({ data }) => (
  <div className="flex items-center gap-4">
    <Avatar className="size-16 border-2 border-white shadow-md">
      <AvatarImage src={data.avatar} alt={data.name} />
      <AvatarFallback>{data.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
    </Avatar>

    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold tracking-tight text-foreground">{data.name}</h1>
        <Badge variant="default" className="px-2 py-0.5 text-xs rounded-md bg-neutral-100 border-0 normal-case font-medium">
          ID: {data.id.split("-")[1]}
        </Badge>
        <Badge className="px-2 py-0.5 text-xs bg-green-50 text-green-700 border-0">
          {data.status}
        </Badge>
      </div>
      <p className="text-sm font-medium text-neutral-600">{data.role}</p>
      <div className="flex items-center gap-1">
        <Icon icon="location_on" size={16} className="text-muted-foreground" />
        <span className="text-sm text-muted-foreground">{data.location}</span>
      </div>
    </div>
  </div>
);

const JobDetails: React.FC<{ application: Application }> = ({ application }) => (
  <div className="flex flex-col gap-3 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
    <div className="flex items-center gap-2">
      <span className="text-sm text-neutral-500">Applied for:</span>
      <span className="text-sm font-semibold text-foreground">{application.position}</span>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-sm text-neutral-500">Applied:</span>
      <span className="text-sm font-semibold text-foreground">{application.appliedDate}</span>
    </div>
  </div>
);

const MatchSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="flex flex-col gap-2">
    <Badge 
      variant="default" 
      className="w-fit px-3 py-1 text-xs uppercase bg-client/10 text-client border-0 rounded-md font-medium"
    >
      {title}
    </Badge>
    <p className="text-sm leading-relaxed text-neutral-700">{children}</p>
  </div>
);

const AIMatchCard: React.FC<{ aiMatch: AIMatch; isExpanded: boolean; onToggle: () => void }> = ({ 
  aiMatch, 
  isExpanded, 
  onToggle 
}) => (
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
        <MatchSection title="WORK STYLE FIT">{aiMatch.workStyleFit}</MatchSection>

        <div 
          className="grid transition-all duration-300 ease-in-out"
          style={{ gridTemplateRows: isExpanded ? '1fr' : '0fr' }}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-4">
              <MatchSection title="PERFORMANCE HISTORY">{aiMatch.performanceHistory}</MatchSection>
              <MatchSection title="JOB DESCRIPTION FIT">{aiMatch.jobDescriptionFit}</MatchSection>
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

const SectionCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <Card className="rounded-lg border-neutral-200 shadow-none">
    <div className="flex items-center px-4 pt-4">
      <span className="text-sm font-semibold text-foreground">{title}</span>
    </div>
    <CardContent className="p-4 pt-2">{children}</CardContent>
  </Card>
);

const AboutSection: React.FC<{ about: string }> = ({ about }) => (
  <SectionCard title="About">
    <p className="text-sm leading-relaxed text-neutral-700">{about}</p>
  </SectionCard>
);

const SkillsSection: React.FC<{ skills: string[] }> = ({ skills }) => (
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

const EducationSection: React.FC<{ education: Education[] }> = ({ education }) => (
  <SectionCard title="Education">
    <div className="flex flex-col gap-3">
      {education.map((item, i) => (
        <React.Fragment key={item.id}>
          {i > 0 && <Separator className="bg-neutral-200" />}
          <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold text-foreground">{item.degree}</span>
            <div className="flex items-center gap-4">
              <span className="text-sm text-neutral-600">{item.school}</span>
              <span className="text-sm text-neutral-500">{item.years}</span>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  </SectionCard>
);

const CertificatesSection: React.FC<{ certificates: Certificate[] }> = ({ certificates }) => (
  <SectionCard title="Certificates">
    <div className="flex flex-col gap-3">
      {certificates.map((cert, i) => (
        <React.Fragment key={cert.id}>
          {i > 0 && <Separator className="bg-neutral-200" />}
          <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold text-foreground">{cert.name}</span>
            <div className="flex items-center gap-4">
              <span className="text-sm text-neutral-600">{cert.issuer}</span>
              <span className="text-sm text-neutral-500">{cert.year}</span>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  </SectionCard>
);

const LinksSection: React.FC = () => (
  <SectionCard title="Links">
    <div className="flex gap-2">
      <Button variant="outline" size="sm" className="gap-2 border-neutral-300">
        <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" className="shrink-0 text-linkedin" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
        LinkedIn
      </Button>
      <Button variant="outline" size="sm" className="gap-2 border-neutral-300">
        <Icon icon="public" size={16} className="text-icon" />
        Portfolio
      </Button>
    </div>
  </SectionCard>
);

const PersonalMessageSection: React.FC<{ message: string }> = ({ message }) => (
  <Card className="rounded-lg border-neutral-200 shadow-sm">
    <CardContent className="p-4 flex flex-col gap-3">
      <span className="text-sm font-semibold text-foreground">Personal Message</span>
      <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
        <p className="text-sm leading-relaxed text-neutral-600">{message}</p>
      </div>
    </CardContent>
  </Card>
);

const ProfileDrawerFooter: React.FC = () => (
  <div className="flex flex-col-reverse gap-3 border-t border-neutral-200 bg-background p-4 sm:flex-row sm:items-center">
    <Button variant="outline" className="w-full gap-2 border-red-200 text-red-500 hover:bg-red-50 hover:border-red-300 sm:w-auto">
      <Icon icon="delete" size={16} className="text-red-500" />
      Drop candidate
    </Button>
    <div className="flex flex-1 gap-2">
      <Button variant="outline" className="flex-1 border-neutral-300">Invite interview</Button>
      <Button className="flex-1 bg-client hover:bg-client-hover text-white font-semibold">Send offer</Button>
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
  const [isAICardExpanded, setIsAICardExpanded] = useState(false);

  return (
    <Drawer>
      <DrawerTrigger asChild>
        {children || <CandidateCard data={data} />}
      </DrawerTrigger>
      <DrawerContent className="sm:max-w-4xl p-0" showCloseButton={false}>
        <VisuallyHidden>
          <DrawerTitle>Candidate Profile - {data.name}</DrawerTitle>
        </VisuallyHidden>

        <div className="flex flex-col h-full bg-background overflow-hidden">
          <ProfileDrawerHeader />

          <div className="flex-1 overflow-y-auto">
            <div className="flex flex-col gap-5 border-b border-neutral-200 p-6">
              <CandidateHeader data={data} />
              <JobDetails application={data.application} />
              <AIMatchCard
                aiMatch={data.aiMatch}
                isExpanded={isAICardExpanded}
                onToggle={() => setIsAICardExpanded(!isAICardExpanded)}
              />
              <ProfileTabs />
            </div>

            <div className="flex flex-col gap-4 p-6">
              <AboutSection about={data.about} />
              <SkillsSection skills={data.skills} />
              <EducationSection education={data.education} />
              <CertificatesSection certificates={data.certificates} />
              <LinksSection />
              <PersonalMessageSection message={data.personalMessage} />
            </div>
          </div>

          <ProfileDrawerFooter />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
