import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const SectionCard: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div className="flex flex-col gap-[5.15px] rounded-[5.15px] border-[0.48px] border-neutral-300 bg-white">
    <div className="flex h-[26.58px] items-center px-[11.58px] pt-[11.58px]">
      <span className="font-['Inter'] text-[10.3px] font-semibold tracking-[0.13px] text-neutral-900">
        {title}
      </span>
    </div>
    {children}
  </div>
);

export const AboutSection: React.FC = () => (
  <SectionCard title="About">
    <div className="flex flex-col gap-[7.72px] px-[11.58px] pt-[3.86px] pb-[11.58px]">
      <p className="font-['Inter'] text-[9px] leading-[120%] tracking-[0.13px] text-neutral-900">
        I am a dedicated sales operations manager with a knack for optimizing
        processes and driving team success. My experience spans across managing
        sales strategies and implementing effective solutions that enhance
        productivity. I thrive on collaboration and am always looking for
        innovative ways to support my team and improve our sales performance. My
        goal is to leverage my skills to contribute to the growth and efficiency
        of the organization.
      </p>
    </div>
  </SectionCard>
);

const SKILLS = [
  "Talent skills",
  "Sales Operations",
  "CRM",
  "Data Analysis",
  "Team Leadership",
  "Process Optimization",
  "Strategy",
];

export const SkillsSection: React.FC = () => (
  <SectionCard title="Skills">
    <div className="flex flex-wrap gap-[3.86px] px-[11.58px] pt-[3.86px] pb-[11.58px]">
      {SKILLS.map((skill, i) => (
        <div
          key={i}
          className="bg-neutral-150 flex h-[20.59px] items-center justify-center gap-[5.15px] rounded-[3.43px] px-[7.72px]"
        >
          <span className="font-['Inter'] text-[9px] tracking-[0.13px] text-neutral-900">
            {skill}
          </span>
        </div>
      ))}
    </div>
  </SectionCard>
);

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

export const EducationSection: React.FC = () => (
  <SectionCard title="Education">
    <div className="flex flex-col gap-[7.72px] p-[11.58px]">
      {EDUCATION.map((item, i) => (
        <React.Fragment key={i}>
          {i > 0 && <div className="h-[0.48px] w-full bg-neutral-200" />}
          <div className="flex flex-col gap-[5.79px]">
            <span className="font-['Inter'] text-[9px] font-semibold tracking-[0.13px] text-neutral-900">
              {item.degree}
            </span>
            <div className="flex items-center gap-[11.58px]">
              <span className="font-['Inter'] text-[9px] tracking-[0.13px] text-neutral-700">
                {item.school}
              </span>
              <span className="font-['Inter'] text-[9px] tracking-[0.13px] text-neutral-600">
                {item.years}
              </span>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  </SectionCard>
);

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

export const CertificatesSection: React.FC = () => (
  <SectionCard title="Certificates">
    <div className="flex flex-col gap-[7.72px] p-[11.58px]">
      {CERTIFICATES.map((cert, i) => (
        <React.Fragment key={i}>
          {i > 0 && <div className="h-[0.48px] w-full bg-neutral-200" />}
          <div className="flex flex-col gap-[5.79px]">
            <span className="font-['Inter'] text-[9px] font-semibold tracking-[0.13px] text-neutral-900">
              {cert.name}
            </span>
            <div className="flex items-center gap-[11.58px]">
              <span className="font-['Inter'] text-[9px] tracking-[0.13px] text-neutral-700">
                {cert.issuer}
              </span>
              <span className="font-['Inter'] text-[9px] tracking-[0.13px] text-neutral-600">
                {cert.year}
              </span>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  </SectionCard>
);

export const LinksSection: React.FC = () => (
  <SectionCard title="Links">
    <div className="flex gap-[3.86px] p-[11.58px]">
      <div className="flex h-[25.74px] items-center gap-[4px] rounded-[3.43px] border-[0.64px] border-neutral-300 px-[5.15px]">
        <FaLinkedinIn className="size-[10px] shrink-0 text-neutral-900" />
        <span className="font-['Inter'] text-[9px] leading-none tracking-[0.13px] text-neutral-900">
          LinkedIn
        </span>
      </div>
      <div className="flex h-[25.74px] items-center gap-[4px] rounded-[3.43px] border-[0.64px] border-neutral-300 px-[5.15px]">
        <TbWorld className="size-[10px] shrink-0 text-neutral-900" />
        <span className="font-['Inter'] text-[9px] leading-none tracking-[0.13px] text-neutral-900">
          Portfolio
        </span>
      </div>
    </div>
  </SectionCard>
);

export const PersonalMessageSection: React.FC = () => (
  <div className="flex flex-col gap-[7.72px] rounded-[6.43px] border-[0.64px] border-neutral-300 bg-white p-[10.3px] shadow-sm">
    <span className="font-['Inter'] text-[9px] font-semibold tracking-[0.13px] text-neutral-900">
      Personal Message
    </span>
    <div className="flex flex-col items-start rounded-[5.15px] border border-stone-300 bg-white px-2.5 py-2.5 md:flex-row">
      <p className="font-['Inter'] text-[9px] leading-[120%] tracking-[0.13px] text-neutral-700">
        I am excited to apply for this Sales Manager position...
      </p>
    </div>
  </div>
);
