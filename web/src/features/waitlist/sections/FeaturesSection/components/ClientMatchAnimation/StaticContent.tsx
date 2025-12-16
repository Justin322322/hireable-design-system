import Image from "next/image";
import React from "react";
import { HireableLogo } from "./HireableLogo";

interface StaticContentProps {
  isAnimated: boolean;
}

export const StaticContent = React.memo<StaticContentProps>(
  ({ isAnimated }) => (
    <>
      {/* Person 1 */}
      <div className="absolute top-[31px] left-[31px] z-10 inline-flex flex-col items-start gap-[15.9px] overflow-hidden rounded-[158.98px] border-[0.96px] border-solid border-neutral-300 bg-white p-[4.77px]">
        <div
          className="size-[63.59px] overflow-hidden rounded-[198.73px] bg-white"
          style={{ filter: isAnimated ? "grayscale(0)" : "grayscale(1)" }}
        >
          <Image
            className="size-16 rounded-full object-cover"
            alt="Profile"
            src="/images/Jacob-Smith.svg"
            width={64}
            height={64}
            priority
          />
        </div>
      </div>

      {/* Logo */}
      <div className="absolute top-[106px] left-1/2 z-10 flex -translate-x-1/2 flex-col items-center">
        <div
          className="inline-flex flex-col items-center justify-center gap-[15.9px] overflow-hidden rounded-[158.98px] border-[0.96px] border-solid border-neutral-300 bg-white p-[11.55px]"
          style={{
            boxShadow: isAnimated
              ? "0 0 30px 10px rgba(0, 167, 248, 0.6)"
              : "none",
          }}
        >
          <div className="relative h-[34.69px] w-[34.64px] overflow-hidden">
            <HireableLogo />
          </div>
        </div>

        {/* Matched label */}
        {isAnimated && (
          <div className="absolute -top-[72px] left-1/2 -translate-x-1/2">
            <div className="rounded-lg border border-gray-100 bg-white px-4 py-2 shadow-lg">
              <span className="font-text-s text-sm leading-(--text-s-line-height) font-medium tracking-(--text-s-letter-spacing) whitespace-nowrap text-[var(--color-matched-green)] [font-style:var(--text-s-font-style)]">
                Matched
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Person 2 */}
      <div className="absolute top-[166px] left-[304px] z-10 inline-flex flex-col items-start gap-[15.9px] overflow-hidden rounded-[158.98px] border-[0.96px] border-solid border-neutral-300 bg-white p-[4.77px]">
        <div
          className="size-[63.59px] overflow-hidden rounded-[198.73px] bg-neutral-300"
          style={{ filter: isAnimated ? "grayscale(0)" : "grayscale(1)" }}
        >
          <Image
            className="size-16 rounded-full object-cover"
            alt="Profile"
            src="/images/Catalina-Ramos.svg"
            width={64}
            height={64}
            priority
          />
        </div>
      </div>

      {/* Static connection lines */}
      <svg
        className="pointer-events-none absolute inset-0 size-full"
        style={{ zIndex: 5 }}
      >
        <g transform="translate(67, -9)">
          <path
            d="M0.483116 0V119.328C0.483116 132.135 10.8653 142.517 23.6723 142.517H137.686"
            stroke={isAnimated ? "#00A7F8" : "#d4d4d4"}
            strokeWidth={isAnimated ? "1.5" : "0.962264"}
            fill="none"
            strokeDasharray={isAnimated ? "none" : "3.85 3.85"}
          />
        </g>
        <g transform="translate(204, 133)">
          <path
            d="M136.705 142V23.5865C136.705 10.8259 126.36 0.481425 113.6 0.481425H0"
            stroke={isAnimated ? "#00A7F8" : "#d4d4d4"}
            strokeWidth={isAnimated ? "1.5" : "0.962264"}
            fill="none"
            strokeDasharray={isAnimated ? "none" : "3.85 3.85"}
          />
        </g>
      </svg>
    </>
  )
);

StaticContent.displayName = "StaticContent";
