import { Card, CardContent, PulsingButton } from "@/components/ui";
import { motion } from "framer-motion";
import { Bookmark } from "lucide-react";
import Image from "next/image";
import type { AIMatchReason, Job } from "./types";

const AIMatchCard: React.FC<{
  reasons: AIMatchReason[];
  expanded: boolean;
  onToggle: () => void;
  showPulsingButton?: boolean;
}> = ({ reasons, expanded, onToggle, showPulsingButton = false }) => (
  <div className="relative w-full">
    <div className="w-full rounded-[5.15px] bg-neutral-100">
      <div className="flex items-center gap-1 px-[10px] pt-[10px] pb-[5px]">
        <Image
          src="/icons/AI-Matchmaker-icon.svg"
          alt="AI Matchmaker"
          width={12}
          height={12}
          className="size-[12px]"
        />
        <span className="font-inter text-[10px] leading-normal font-semibold tracking-[0.3px] whitespace-nowrap text-neutral-900">
          Why is this job a good match for you?
        </span>
      </div>
      <div className="flex flex-col gap-[12px] px-[10px] pt-[5px] pb-[10px]">
        {(expanded ? reasons : reasons.slice(0, 1)).map((reason, idx) => (
          <div key={idx} className="flex flex-col gap-[8px]">
            <span className="font-inter text-client inline-flex w-fit items-center rounded-[5px] bg-[rgba(0,167,248,0.08)] px-[8px] py-[5px] text-[8px] leading-[1.2] font-normal tracking-[0.2px] uppercase">
              {reason.category}
            </span>
            <p className="font-inter text-[9px] leading-[1.2] font-normal tracking-[0.2px] text-neutral-900">
              {reason.description}
            </p>
          </div>
        ))}

        <div className="relative flex w-fit items-center">
          <button
            onClick={onToggle}
            className="font-inter text-client w-fit text-[9px] leading-[1.2] font-normal tracking-[0.2px] underline"
          >
            {expanded ? "less" : "more"}
          </button>
          {showPulsingButton && !expanded && (
            <div className="relative h-0 w-[30px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <PulsingButton
                  onClick={onToggle}
                  color="#00A7F8"
                  ariaLabel="Expand AI match details"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

interface JobCardProps {
  job: Job;
  index: number;
  onToggleExpand: () => void;
  showPulsingButton?: boolean;
}

export const JobCard: React.FC<JobCardProps> = ({
  job,
  index,
  onToggleExpand,
  showPulsingButton = false,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{
      duration: 0.5,
      delay: index * 0.05,
      ease: [0.16, 1, 0.3, 1],
    }}
    className="relative"
  >
    <Card className="w-full rounded-[5px] border-[0.644px] border-solid border-neutral-300 bg-white">
      <CardContent className="flex flex-col items-start gap-[10px] p-[10px]">
        {/* Header Row */}
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <h3 className="font-inter text-[13px] leading-normal font-semibold tracking-[0.26px] text-neutral-900">
              {job.title}
            </h3>
            <div className="flex items-center gap-[5px]">
              <span className="font-inter text-client rounded-full bg-[rgba(0,167,248,0.08)] px-[5px] py-[2.5px] text-[8px] leading-[1.2] font-normal tracking-[0.2px]">
                {job.status}
              </span>
              <span className="font-inter text-success rounded-full bg-[rgba(39,174,96,0.08)] px-[5px] py-[2.5px] text-[8px] leading-[1.2] font-normal tracking-[0.2px]">
                {job.matchPercentage}
              </span>
            </div>
          </div>
          <button
            aria-label="Save job"
            className="text-client flex size-[21px] items-center justify-center rounded-full border border-neutral-300"
          >
            <Bookmark className="size-[15px]" />
          </button>
        </div>

        {/* Details Row */}
        <div className="font-inter flex items-center gap-[5px] text-[9px] leading-[1.2] font-normal tracking-[0.13px] text-neutral-700">
          <span>Budget: {job.budget}</span>
          <span>•</span>
          <span>Duration: {job.duration}</span>
          <span>•</span>
          <span>Experience: {job.experience}</span>
        </div>

        {/* Skills Row */}
        {job.skills.length > 0 && (
          <div className="flex flex-wrap gap-[5px]">
            {job.skills.map((skill, idx) => (
              <span
                key={idx}
                className="font-inter flex h-[15px] items-center justify-center rounded-[2.5px] border-[0.32px] border-neutral-300 bg-neutral-100 px-[5px] py-[2.5px] text-[8px] leading-[1.2] font-normal tracking-[0.2px] text-neutral-700"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        {/* Company & Date Row */}
        <div className="font-inter flex w-full items-center justify-between text-[9px] leading-[1.2] font-normal tracking-[0.13px] text-neutral-700">
          <span>{job.company}</span>
          <span>{job.postedTime}</span>
        </div>

        {/* AI Match Card */}
        <AIMatchCard
          reasons={job.aiMatchReasons}
          expanded={job.expanded || false}
          onToggle={onToggleExpand}
          showPulsingButton={showPulsingButton}
        />
      </CardContent>
    </Card>
  </motion.div>
);
