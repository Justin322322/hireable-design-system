import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Card,
  CardContent,
} from "@/components/ui";
import { motion } from "framer-motion";
import { ANIMATION_CONFIG, TYPOGRAPHY } from "./constants";

export const ProfileCard: React.FC = () => (
  <motion.div
    {...ANIMATION_CONFIG}
    transition={{ ...ANIMATION_CONFIG.transition, delay: 0.1 }}
    className="min-h-px min-w-px flex-1"
  >
    <Card className="flex h-full flex-col rounded-[5.15px] border-[0.64px] border-neutral-300 bg-white p-[10.3px]">
      <CardContent className="flex h-full flex-col p-0">
        {/* Avatar and name */}
        <div className="flex items-center gap-[10.3px]">
          <Avatar className="size-[51.48px] rounded-full bg-neutral-300">
            <AvatarImage src="/images/Michaela.svg" alt="Mikaela Santos" />
            <AvatarFallback>MS</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-[2.22px] leading-[150%]">
            <span className={TYPOGRAPHY.cardTitle}>Mikaela Santos</span>
            <span className={TYPOGRAPHY.subtitle}>Sales Manager</span>
          </div>
        </div>

        {/* Description */}
        <div className="mt-[10.3px] flex flex-col items-start justify-center gap-[2.57px]">
          <p className="overflow-hidden font-sans text-[9px] leading-[120%] font-normal tracking-[0.2px] text-ellipsis whitespace-pre-wrap text-neutral-900">
            I am a dedicated sales operations manager with a knack for
            optimizing processes and driving team success. My experience spans
            across managing sales strategies and implementing effective
            solutions that enhance productivity. I thrive on collaboration and
            am always looking for innovative ways to support my team and improve
            our sales performance. My goal is to leverage my skills to
            contribute to the growth and efficiency of the organization.
          </p>
          <button className="text-client font-sans text-[9px] leading-[120%] font-normal tracking-[0.2px] underline">
            more
          </button>
        </div>

        <div className="flex-1" />

        {/* Divider */}
        <div className="my-[10.3px] h-0 w-full border-t border-neutral-300" />

        {/* CTAs */}
        <div className="flex items-center gap-[5.15px]">
          <button className="bg-client hover:bg-client-hover flex h-[25.74px] items-center justify-center rounded-[5.15px] px-[10.3px] py-[5.15px] transition-colors">
            <span className="font-sans text-[9px] leading-[96%] font-semibold text-white">
              View profile
            </span>
          </button>
          <button className="flex h-[25.74px] items-center justify-center rounded-[5.15px] border border-neutral-300 bg-white px-[10.3px] py-[5.15px] transition-colors hover:bg-neutral-50">
            <span className="font-sans text-[9px] leading-[96%] font-semibold text-neutral-900">
              Message
            </span>
          </button>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);
