"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface RoleIconsGroupProps {
  className?: string;
  hovered?: boolean;
  isTalent?: boolean;
}

const ICONS = [
  { src: "/icons/GD.svg", alt: "GD", width: 38.45, height: 80, flip: true },
  { src: "/icons/PM.svg", alt: "PM", width: 47.87, height: 76.32, flip: false },
  { src: "/icons/SM.svg", alt: "SM", width: 51.94, height: 67.46, flip: false },
  {
    src: "/icons/Vector.svg",
    alt: "Vector",
    width: 63.02,
    height: 56.62,
    flip: false,
  },
];

export const RoleIconsGroup = ({
  className,
  hovered = false,
  isTalent = false,
}: RoleIconsGroupProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-row items-end justify-center gap-[9.31px] pr-[5.82px]",
        "h-[80px] w-[235.03px]",
        className
      )}
    >
      {/* Base layer - gray icons with inner shadow */}
      {ICONS.map((icon) => (
        <Image
          key={icon.alt}
          src={icon.src}
          alt={icon.alt}
          width={icon.width}
          height={icon.height}
          style={{
            filter: "url(#role-icon-inner-shadow)",
            transform: icon.flip ? "scaleX(-1)" : undefined,
          }}
        />
      ))}

      {/* Colored overlay - fades from top (visible) to bottom (transparent) */}
      <div
        className="pointer-events-none absolute inset-0 flex flex-row items-end justify-center gap-[9.31px] pr-[5.82px] transition-opacity duration-300 ease-out"
        style={{
          opacity: hovered ? 1 : 0,
          maskImage:
            "linear-gradient(to bottom, black 0%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 30%, transparent 100%)",
        }}
      >
        {ICONS.map((icon) => (
          <Image
            key={`${icon.alt}-overlay`}
            src={icon.src}
            alt=""
            width={icon.width}
            height={icon.height}
            style={{
              filter: isTalent
                ? "url(#role-icon-colored-shadow-talent)"
                : "url(#role-icon-colored-shadow-client)",
              transform: icon.flip ? "scaleX(-1)" : undefined,
            }}
          />
        ))}
      </div>

      {/* SVG Filters */}
      <svg className="absolute size-0 overflow-hidden" aria-hidden="true">
        <defs>
          {/* Base inner shadow filter */}
          <filter
            id="role-icon-inner-shadow"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feFlood floodColor="#000000" result="flood" />
            <feComposite
              operator="out"
              in="flood"
              in2="SourceAlpha"
              result="inverse"
            />
            <feGaussianBlur stdDeviation="1.16" in="inverse" result="blurred" />
            <feOffset dx="0" dy="1.16" in="blurred" result="offset" />
            <feComposite
              operator="in"
              in="offset"
              in2="SourceAlpha"
              result="shadow"
            />
            <feComponentTransfer in="shadow" result="shadow-opacity">
              <feFuncA type="linear" slope="0.25" />
            </feComponentTransfer>
            <feComposite
              operator="over"
              in="shadow-opacity"
              in2="SourceGraphic"
            />
          </filter>

          {/* Talent (pink) colored shadow filter - #FFCCE0 */}
          <filter
            id="role-icon-colored-shadow-talent"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            {/* Colorize to pink using flood + composite */}
            <feFlood floodColor="#FFCCE0" result="pink" />
            <feComposite
              operator="in"
              in="pink"
              in2="SourceAlpha"
              result="colored"
            />
            {/* Apply inner shadow */}
            <feFlood floodColor="#000000" result="flood" />
            <feComposite
              operator="out"
              in="flood"
              in2="SourceAlpha"
              result="inverse"
            />
            <feGaussianBlur stdDeviation="1.16" in="inverse" result="blurred" />
            <feOffset dx="0" dy="1.16" in="blurred" result="offset" />
            <feComposite
              operator="in"
              in="offset"
              in2="SourceAlpha"
              result="shadow"
            />
            <feComponentTransfer in="shadow" result="shadow-opacity">
              <feFuncA type="linear" slope="0.25" />
            </feComponentTransfer>
            <feComposite operator="over" in="shadow-opacity" in2="colored" />
          </filter>

          {/* Client (blue) colored shadow filter - #CCE8FF */}
          <filter
            id="role-icon-colored-shadow-client"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            {/* Colorize to blue using flood + composite */}
            <feFlood floodColor="#CCE8FF" result="blue" />
            <feComposite
              operator="in"
              in="blue"
              in2="SourceAlpha"
              result="colored"
            />
            {/* Apply inner shadow */}
            <feFlood floodColor="#000000" result="flood" />
            <feComposite
              operator="out"
              in="flood"
              in2="SourceAlpha"
              result="inverse"
            />
            <feGaussianBlur stdDeviation="1.16" in="inverse" result="blurred" />
            <feOffset dx="0" dy="1.16" in="blurred" result="offset" />
            <feComposite
              operator="in"
              in="offset"
              in2="SourceAlpha"
              result="shadow"
            />
            <feComponentTransfer in="shadow" result="shadow-opacity">
              <feFuncA type="linear" slope="0.25" />
            </feComponentTransfer>
            <feComposite operator="over" in="shadow-opacity" in2="colored" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};
