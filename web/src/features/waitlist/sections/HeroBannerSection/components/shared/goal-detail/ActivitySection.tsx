import { Card, CardContent } from "@/components/ui";
import { CheckCircle, MessageSquare } from "lucide-react";
import type { Activity } from "./types";

interface ActivitySectionProps {
  activities: Activity[];
}

export function ActivitySection({ activities }: ActivitySectionProps) {
  return (
    <Card className="flex flex-1 flex-col items-start gap-[10.3px] rounded-[5.15px] border-[0.64px] border-neutral-300 bg-white p-[10.3px]">
      <CardContent className="flex h-full w-full flex-col gap-[10.3px] p-0">
        {/* Heading */}
        <div className="flex h-[13px] items-center gap-[6.43px]">
          <span className="font-sans text-[8.99px] leading-[150%] font-semibold tracking-[0.11px] text-neutral-900">
            Recent Activity
          </span>
        </div>

        <div className="flex flex-col gap-[10.3px]">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-[5.15px]">
              <div className="flex size-[15.44px] shrink-0 items-center justify-center rounded-full bg-neutral-100">
                {activity.type === "progress" ? (
                  <CheckCircle className="text-success size-[10px]" />
                ) : (
                  <MessageSquare className="size-[10px] text-neutral-400" />
                )}
              </div>
              <div className="flex flex-1 flex-col gap-[2.57px]">
                <p className="font-sans text-[9.01px] leading-[120%] font-normal tracking-[0.13px] text-neutral-900">
                  {activity.message}
                </p>
                <span className="font-sans text-[7.72px] leading-[120%] font-normal tracking-[0.13px] text-neutral-700">
                  {activity.timestamp}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
