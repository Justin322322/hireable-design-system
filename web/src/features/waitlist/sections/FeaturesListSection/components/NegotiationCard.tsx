import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import { ConversationAnimation } from "../ConversationAnimation";

interface NegotiationCardProps {
  gradientBg: string;
  gradientShadow: string;
  isTalent?: boolean;
}

export const NegotiationCard = React.memo(
  ({
    gradientBg,
    gradientShadow,
    isTalent = false,
  }: NegotiationCardProps): React.ReactElement => {
    return (
      <div className="feature-card flex w-full max-w-[546px] flex-col items-start !gap-0 !p-0">
        <Card className="flex w-full flex-col items-start gap-0 rounded-2xl border-0 bg-transparent shadow-none">
          <div className="flex w-full flex-col items-start justify-center gap-1 px-4 pt-4 pb-4 sm:gap-1.5">
            <div className="font-text-large-b text-base leading-(--text-large-b-line-height) font-(--text-large-b-font-weight) tracking-(--text-large-b-letter-spacing) text-neutral-900 [font-style:var(--text-large-b-font-style)] sm:text-lg">
              {isTalent
                ? "Product Motion Designer"
                : "Improve Website Conversion Rate"}
            </div>

            <p className="font-text-s text-xs leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) text-neutral-700 [font-style:var(--text-s-font-style)] sm:text-sm">
              <span className="font-semibold text-neutral-900">
                {isTalent ? "Salary:" : "Description:"}
              </span>{" "}
              {isTalent
                ? "$2000 /mo."
                : "Increase conversion rate from 2% to 6% through landing page optimization and targeted A/B testing."}
            </p>
          </div>

          <ConversationAnimation isTalent={isTalent} />

          <CardContent className="flex w-full flex-col items-start gap-2.5 p-4">
            <div className="feature-capsule h-12 w-full py-2 pr-2 pl-4">
              <Input
                placeholder="Add a comment"
                className="font-text-paragraph relative z-10 flex flex-1 items-center justify-center border-none bg-transparent text-(length:--text-paragraph-font-size) leading-(--text-paragraph-line-height) font-(--text-paragraph-font-weight) tracking-(--text-paragraph-letter-spacing) text-neutral-900 [font-style:var(--text-paragraph-font-style)] shadow-none placeholder:text-neutral-900 focus-visible:ring-0 focus-visible:ring-offset-0"
              />

              <Button
                size="icon"
                className={`z-10 inline-flex size-7 flex-[0_0_auto] items-center gap-[8.75px] overflow-hidden rounded-[14px] ${gradientBg} p-[3.5px] ${gradientShadow}`}
              >
                <Image
                  className="relative size-[21px]"
                  alt="Icon components"
                  src="/icons/icon-chevron-right.svg"
                  width={21}
                  height={21}
                />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
);

NegotiationCard.displayName = "NegotiationCard";
