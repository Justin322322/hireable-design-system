"use client";

import * as React from "react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
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
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Drawer, 
  DrawerContent, 
  DrawerTitle, 
  DrawerTrigger,
  DrawerClose
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { 
  ChevronLeft, 
  ChevronRight,
  ExternalLink, 
  MapPin,
  Trash2,
  Sparkles,
  LinkedinIcon,
  Globe
} from "lucide-react";
import { VisuallyHidden } from "@/components/ui/visually-hidden";

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
        <Button size="sm" className="rounded-full w-6 h-6 p-0 bg-client hover:bg-client-active" aria-label="View details">
          <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
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
    <div className="flex items-center gap-2">
      <DrawerClose asChild>
        <button 
          onClick={onClose}
          className="flex items-center gap-2 group"
        >
          <div className="flex size-8 items-center justify-center rounded-full border border-neutral-300 group-hover:bg-neutral-100 transition-colors">
            <ChevronLeft className="size-4 text-neutral-700" />
          </div>
          <span className="text-sm text-foreground">
            back
          </span>
        </button>
      </DrawerClose>
    </div>

    <button className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-neutral-100 transition-colors">
      <span className="hidden text-sm font-medium text-foreground sm:inline-block">
        Open profile in a new tab
      </span>
      <ExternalLink className="size-4 text-neutral-700" />
    </button>
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
        <Badge variant="muted" className="px-2 py-0.5 text-xs rounded-md bg-neutral-100 border-0 normal-case font-medium">
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
        <MapPin className="size-4 text-neutral-600" />
        <span className="text-sm text-neutral-500">
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
      variant="success" 
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
            <Sparkles className="size-4 text-client" />
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

        <button
          onClick={onToggle}
          className="text-client cursor-pointer text-sm underline w-fit hover:text-client-hover transition-colors"
        >
          {isExpanded ? "Show less" : "Show more"}
        </button>
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
          variant="muted"
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
        <LinkedinIcon className="size-4 text-linkedin" />
        LinkedIn
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="gap-2 border-neutral-300"
      >
        <Globe className="size-4 text-neutral-700" />
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
      <Trash2 className="size-4 text-red-500" />
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
// MAIN PAGE COMPONENT
// ============================================================================

export default function DrawerPage() {
  const [isAICardExpanded, setIsAICardExpanded] = useState(false);

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
          <ComponentPreview title="Candidate Profile Drawer">
            <div className="flex justify-center">
              <Drawer>
                <DrawerTrigger asChild>
                  <CandidateCard data={candidateData} />
                </DrawerTrigger>
                <DrawerContent className="sm:max-w-4xl p-0">
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
            code={`// Fetch candidate data from API
const [candidate, setCandidate] = useState<CandidateProfile | null>(null);
const [loading, setLoading] = useState(false);

const fetchCandidate = async (id: string) => {
  setLoading(true);
  const res = await fetch(\`/api/candidates/\${id}\`);
  const data = await res.json();
  setCandidate(data);
  setLoading(false);
};

// Usage
<Drawer onOpenChange={(open) => open && fetchCandidate("94821")}>
  <DrawerTrigger asChild>
    <CandidateCard data={candidatePreview} />
  </DrawerTrigger>
  <DrawerContent>
    {loading ? (
      <LoadingSpinner />
    ) : candidate && (
      <>
        <CandidateHeader data={candidate} />
        <JobDetails application={candidate.application} />
        <AIMatchCard aiMatch={candidate.aiMatch} />
        <AboutSection about={candidate.about} />
        <SkillsSection skills={candidate.skills} />
        <EducationSection education={candidate.education} />
        <CertificatesSection certificates={candidate.certificates} />
        <PersonalMessageSection message={candidate.personalMessage} />
      </>
    )}
  </DrawerContent>
</Drawer>`}
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
