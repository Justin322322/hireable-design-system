"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui";
import { useSelectedRole } from "@/stores";
import React from "react";
import { clientFaqs, talentFaqs } from "./content";

export const FAQSection = (): React.ReactElement => {
  const selectedRole = useSelectedRole();
  const faqs = selectedRole === "talent" ? talentFaqs : clientFaqs;

  return (
    <section className="flex w-full flex-col items-center border-t border-neutral-300 px-4 py-10 sm:px-10 sm:py-[80px] lg:gap-[56px] lg:px-[200px] lg:py-[120px]">
      <div className="flex w-full max-w-[1112px] flex-col gap-8 sm:gap-14">
        <h2 className="w-full text-left font-['DM_Sans'] text-2xl leading-[1.2] font-bold text-[#181D27] sm:text-4xl lg:text-5xl">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b-0"
            >
              <AccordionTrigger className="py-3 text-left font-['DM_Sans'] text-lg leading-[150%] font-bold tracking-[0.2px] text-neutral-900 hover:no-underline sm:py-4 sm:text-[28px]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-4 font-['Inter'] text-base leading-[150%] font-normal tracking-[0.4px] text-neutral-700 sm:text-xl">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
