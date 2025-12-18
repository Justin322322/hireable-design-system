"use client";

import * as React from "react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/docs/code-block";
import { ComponentPreview } from "@/components/docs/component-preview";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
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
  Linkedin,
  Globe
} from "lucide-react";
import { VisuallyHidden } from "@/components/ui/visually-hidden";

// ============================================================================
// PROFILE DRAWER COMPONENTS
// ============================================================================

// Candidate Trigger Card Component (Ported from Profile Card)
const CandidateCard = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-col items-start gap-2.5 p-4 bg-white border border-[#C3C3C3] rounded-lg w-96 transition-colors hover:bg-[#F2F2F2] hover:border-[#C3C3C3] cursor-pointer",
        className
      )}
      {...props}
    >
      {/* Profile Section */}
      <div className="flex flex-row items-center gap-2.5 w-full">
        <Avatar className="w-14 h-14 flex-shrink-0">
          <AvatarImage src="https://randomuser.me/api/portraits/women/44.jpg" alt="Mikaela Santos" />
          <AvatarFallback className="bg-gray-300">MS</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start gap-1 flex-1">
          <p className="font-semibold text-sm text-[#212121] leading-[120%]">Mikaela Santos</p>
          <p className="font-normal text-xs text-[#212121] leading-[120%]">Sales Representative</p>
        </div>
      </div>

      {/* Metadata Section */}
      <div className="flex flex-row items-center gap-6 w-full text-xs text-[#212121]">
        <span>$2,200 /mo</span>
        <span>5-8 years</span>
      </div>

      {/* Activity Section */}
      <div className="flex flex-row items-center justify-between gap-4 w-full">
        <span className="text-xs text-[#212121]">Activity Title</span>
        <Button size="sm" className="rounded-full w-6 h-6 p-0 bg-[#00A7F8] hover:bg-[#0085C6]">
          <ChevronRight className="w-3.5 h-3.5" />
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
            <ChevronLeft className="size-4 text-neutral-900" />
          </div>
          <span className="text-sm text-neutral-900">
            back
          </span>
        </button>
      </DrawerClose>
    </div>

    <button className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-neutral-100 transition-colors">
      <span className="hidden text-sm font-medium text-neutral-900 sm:inline-block">
        Open profile in a new tab
      </span>
      <ExternalLink className="size-4 text-neutral-900" />
    </button>
  </div>
);

// Candidate Header Component
const CandidateHeader: React.FC = () => (
  <div className="flex items-center gap-4">
    <Avatar className="size-16 border-2 border-white shadow-md">
      <AvatarImage src="https://randomuser.me/api/portraits/women/44.jpg" alt="Mikaela Santos" />
      <AvatarFallback>MS</AvatarFallback>
    </Avatar>

    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold tracking-tight text-neutral-900">
          Mikaela Santos
        </h1>
        <Badge variant="muted" className="px-2 py-0.5 text-xs rounded-md bg-neutral-100 border-0 normal-case font-medium">
          ID: 94821
        </Badge>
        <Badge className="px-2 py-0.5 text-xs bg-green-50 text-green-700 border-0">
          Active
        </Badge>
      </div>

      <p className="text-sm font-medium text-neutral-600">
        Sales Representative
      </p>

      <div className="flex items-center gap-1">
        <MapPin className="size-4 text-neutral-400" />
        <span className="text-sm text-neutral-400">
          Manila, Philippines
        </span>
      </div>
    </div>
  </div>
);

// Job Details Component
const JobDetails: React.FC = () => (
  <div className="flex flex-col gap-3 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
    <div className="flex items-center gap-2">
      <span className="text-sm text-neutral-500">Applied for:</span>
      <span className="text-sm font-semibold text-neutral-900">
        Sales Representative
      </span>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-sm text-neutral-500">Applied:</span>
      <span className="text-sm font-semibold text-neutral-900">
        2 days ago
      </span>
    </div>
  </div>
);

// AI Match Card Component
interface AIMatchCardProps {
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
      className="w-fit px-3 py-1 text-xs uppercase bg-[#00a7f814] text-[#00a7f8] border-0 rounded-md font-medium"
    >
      {title}
    </Badge>
    <p className="text-sm leading-relaxed text-neutral-700">
      {children}
    </p>
  </div>
);

const AIMatchCard: React.FC<AIMatchCardProps> = ({ isExpanded, onToggle }) => (
  <div className="w-full">
    <div className="flex w-full flex-col rounded-lg border border-[#00a7f8] bg-white">
      <div className="flex w-full items-start justify-between p-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <Sparkles className="size-4 text-[#00a7f8]" />
            <span className="text-sm font-semibold uppercase tracking-wide text-neutral-900">
              AI Matchmaker
            </span>
          </div>
          <span className="text-xs text-neutral-600">
            Why is this candidate a good match?
          </span>
        </div>
        <div className="flex h-7 items-center justify-center rounded-md border border-green-600 bg-green-50 px-3">
          <span className="text-xs font-medium uppercase text-green-700">
            92% MATCHED
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4 px-4 pb-4">
        <MatchSection title="WORK STYLE FIT">
          Mikaela&apos;s collaborative and results-driven personality aligns
          with your team&apos;s preference for structured problem solvers who
          thrive in cross-functional environments.
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
                In her previous role, Mikaela successfully delivered objectives in
                sales prospecting and pipeline growth, which directly match your
                current objectives for lead generation and revenue expansion.
              </MatchSection>

              <MatchSection title="JOB DESCRIPTION FIT">
                With 4+ years of experience in B2B sales operations and a track
                record of implementing productivity-enhancing strategies,
                Mikaela&apos;s background matches the role requirements for a
                Sales Representative.
              </MatchSection>
            </div>
          </div>
        </div>

        <button
          onClick={onToggle}
          className="text-[#00a7f8] cursor-pointer text-sm underline w-fit hover:text-[#0096de] transition-colors"
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
      className="border-[#00a7f8] bg-[#00a7f814] text-[#00a7f8] hover:bg-[#00a7f824] font-semibold"
    >
      Overview
    </Button>
    <Button 
      variant="outline" 
      size="sm"
      className="border-neutral-300 text-neutral-900 font-semibold"
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
      <span className="text-sm font-semibold text-neutral-900">
        {title}
      </span>
    </div>
    <CardContent className="p-4 pt-2">
      {children}
    </CardContent>
  </Card>
);

// About Section
const AboutSection: React.FC = () => (
  <SectionCard title="About">
    <p className="text-sm leading-relaxed text-neutral-700">
      I am a dedicated sales operations manager with a knack for optimizing
      processes and driving team success. My experience spans across managing
      sales strategies and implementing effective solutions that enhance
      productivity. I thrive on collaboration and am always looking for
      innovative ways to support my team and improve our sales performance. My
      goal is to leverage my skills to contribute to the growth and efficiency
      of the organization.
    </p>
  </SectionCard>
);

// Skills Section
const SKILLS = [
  "Talent skills",
  "Sales Operations",
  "CRM",
  "Data Analysis",
  "Team Leadership",
  "Process Optimization",
  "Strategy",
];

const SkillsSection: React.FC = () => (
  <SectionCard title="Skills">
    <div className="flex flex-wrap gap-2">
      {SKILLS.map((skill, i) => (
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
interface EducationItem {
  degree: string;
  school: string;
  years: string;
}

const EDUCATION: EducationItem[] = [
  {
    degree: "Master of Business Administration",
    school: "De La Salle University, Manila",
    years: "2014-2018",
  },
  {
    degree: "Bachelor of Science in Marketing Management",
    school: "De La Salle University, Manila",
    years: "2010-2014",
  },
];

const EducationSection: React.FC = () => (
  <SectionCard title="Education">
    <div className="flex flex-col gap-3">
      {EDUCATION.map((item, i) => (
        <React.Fragment key={i}>
          {i > 0 && <Separator className="bg-neutral-200" />}
          <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold text-neutral-900">
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
interface CertificateItem {
  name: string;
  issuer: string;
  year: string;
}

const CERTIFICATES: CertificateItem[] = [
  {
    name: "Digital Marketing Certification",
    issuer: "Google Digital Garage",
    year: "2020",
  },
  {
    name: "HubSpot Content Marketing Certification",
    issuer: "HubSpot Academy",
    year: "2019",
  },
];

const CertificatesSection: React.FC = () => (
  <SectionCard title="Certificates">
    <div className="flex flex-col gap-3">
      {CERTIFICATES.map((cert, i) => (
        <React.Fragment key={i}>
          {i > 0 && <Separator className="bg-neutral-200" />}
          <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold text-neutral-900">
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
        <Linkedin className="size-4" />
        LinkedIn
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="gap-2 border-neutral-300"
      >
        <Globe className="size-4" />
        Portfolio
      </Button>
    </div>
  </SectionCard>
);

// Personal Message Section
const PersonalMessageSection: React.FC = () => (
  <Card className="rounded-lg border-neutral-200 shadow-sm">
    <CardContent className="p-4 flex flex-col gap-3">
      <span className="text-sm font-semibold text-neutral-900">
        Personal Message
      </span>
      <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
        <p className="text-sm leading-relaxed text-neutral-600">
          I am excited to apply for this Sales Manager position. With my background in 
          sales operations and team leadership, I believe I can contribute significantly 
          to your organization's growth objectives...
        </p>
      </div>
    </CardContent>
  </Card>
);

// Drawer Footer Component
const ProfileDrawerFooter: React.FC = () => (
  <div className="flex flex-col-reverse gap-3 border-t border-neutral-200 bg-white p-4 sm:flex-row sm:items-center">
    <Button
      variant="outline"
      className="w-full gap-2 border-red-200 text-red-500 hover:bg-red-50 hover:border-red-300 sm:w-auto"
    >
      <Trash2 className="size-4" />
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
        className="flex-1 bg-[#00a7f8] hover:bg-[#0096de] text-white font-semibold"
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
          <Badge variant="outline">Stable</Badge>
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
                  <CandidateCard />
                </DrawerTrigger>
                <DrawerContent className="sm:max-w-4xl p-0">
                  <VisuallyHidden>
                    <DrawerTitle>Candidate Profile - Mikaela Santos</DrawerTitle>
                  </VisuallyHidden>
                  
                  <div className="flex flex-col h-full bg-white overflow-hidden">
                    {/* Header */}
                    <ProfileDrawerHeader />

                    {/* Scrollable Content */}
                    <div className="flex-1 overflow-y-auto">
                      {/* Top Section */}
                      <div className="flex flex-col gap-5 border-b border-neutral-200 p-6">
                        <CandidateHeader />
                        <JobDetails />
                        <AIMatchCard
                          isExpanded={isAICardExpanded}
                          onToggle={() => setIsAICardExpanded(!isAICardExpanded)}
                        />
                        <ProfileTabs />
                      </div>

                      {/* Bottom Section - Profile Details */}
                      <div className="flex flex-col gap-4 p-6">
                        <AboutSection />
                        <SkillsSection />
                        <EducationSection />
                        <CertificatesSection />
                        <LinksSection />
                        <PersonalMessageSection />
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
            code={`<Drawer>
  <DrawerTrigger asChild>
    <CandidateCard />
  </DrawerTrigger>
  <DrawerContent className="sm:max-w-2xl">
    <VisuallyHidden>
      <DrawerTitle>Candidate Profile - Mikaela Santos</DrawerTitle>
    </VisuallyHidden>
    
    <div className="flex flex-col h-full">
      <ProfileDrawerHeader />
      
      <div className="flex-1 overflow-y-auto">
        <CandidateHeader />
        <JobDetails />
        <AIMatchCard />
        <ProfileTabs />
        
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <CertificatesSection />
        <LinksSection />
        <PersonalMessageSection />
      </div>
      
      <ProfileDrawerFooter />
    </div>
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
          <section>
            <h2 className="mb-4 text-xl font-semibold">API</h2>
            <p className="text-sm text-muted-foreground">
              Built using Radix UI Dialog primitives. Follows the standard trigger/content pattern.
            </p>
          </section>
        </TabsContent>
      </Tabs>
    </div>
  );
}
