import { Card, CardContent } from "@/components/ui";
import { motion } from "framer-motion";
import { ANIMATION_CONFIG, TYPOGRAPHY } from "./constants";

export const JobDetailsCard: React.FC = () => (
  <motion.div
    {...ANIMATION_CONFIG}
    transition={{ ...ANIMATION_CONFIG.transition, delay: 0.15 }}
    className="min-h-px min-w-px flex-1 self-stretch"
  >
    <Card className="flex h-full flex-col rounded-[5.15px] border-[0.64px] border-neutral-300 bg-white p-[10.3px]">
      <CardContent className="flex h-full flex-col p-0">
        {/* Role and type */}
        <div className="flex items-center gap-[5.15px]">
          <span className={TYPOGRAPHY.cardTitle}>Sales Manager</span>
          <span className="trial-badge">
            <span className="trial-badge-text">TRIAL DRIVE</span>
          </span>
        </div>

        {/* Description */}
        <div className="mt-[10.3px] flex flex-col items-start justify-center gap-[2.57px]">
          <p className="overflow-hidden font-sans text-[9px] leading-[120%] font-normal tracking-[0.2px] text-ellipsis whitespace-pre-wrap text-neutral-900">
            We are looking for a results-driven Sales Manager to lead our sales
            efforts in the Marketing and Advertising industry. This role
            involves setting sales strategies, managing a high-performing team,
            and driving revenue growth. The ideal candidate combines strategic
            thinking with hands-on leadership and has a proven track record in
            sales and client relationship management, ideally in a fast-paced,
            remote-friendly environment.
          </p>
          <button className="text-client font-sans text-[9px] leading-[120%] font-normal tracking-[0.2px] underline">
            more
          </button>
        </div>

        <div className="flex-1" />

        {/* Job details row */}
        <div className="flex items-center gap-[20.59px]">
          <div className="flex items-center gap-[2.57px] text-center text-[9px] leading-[120%] tracking-[0.13px]">
            <span className="font-sans font-semibold text-neutral-900">
              Budget:
            </span>
            <span className="font-sans font-normal text-neutral-700">
              $1600.00 /mo
            </span>
          </div>
          <div className="flex items-center gap-[2.57px] text-center text-[9px] leading-[120%] tracking-[0.13px]">
            <span className="font-sans font-semibold text-neutral-900">
              Duration:
            </span>
            <span className="font-sans font-normal text-neutral-700">
              30 days
            </span>
          </div>
          <div className="flex items-center gap-[2.57px] text-center text-[9px] leading-[120%] tracking-[0.13px]">
            <span className="font-sans font-semibold text-neutral-900">
              Start date:
            </span>
            <span className="font-sans font-normal text-neutral-700">
              Nov 01, 2025
            </span>
          </div>
          <div className="flex items-center gap-[2.57px] text-center text-[9px] leading-[120%] tracking-[0.13px]">
            <span className="font-sans font-semibold text-neutral-900">
              End date:
            </span>
            <span className="font-sans font-normal text-neutral-700">
              Nov 30, 2025
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="my-[10.3px] h-0 w-full border-t border-neutral-300" />

        {/* CTAs */}
        <div className="flex items-center gap-[5.15px]">
          <button className="bg-client hover:bg-client-hover flex h-[25.74px] items-center justify-center rounded-[5.15px] px-[10.3px] py-[5.15px] transition-colors">
            <span className="font-sans text-[9px] leading-[96%] font-semibold text-white">
              View contract
            </span>
          </button>
          <button className="flex h-[25.74px] items-center justify-center rounded-[5.15px] border border-neutral-200 bg-white px-[10.3px] py-[5.15px]">
            <span className="font-sans text-[9px] leading-[96%] font-semibold text-neutral-300">
              Submit evaluation
            </span>
          </button>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);
