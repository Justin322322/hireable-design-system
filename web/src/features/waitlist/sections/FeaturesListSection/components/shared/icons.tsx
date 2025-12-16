"use client";

interface IconProps {
  className?: string;
  size?: number;
  color?: string;
}

export function ClockIcon({
  className,
  size = 14,
  color = "#000000",
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="8" cy="8" r="6" stroke={color} strokeWidth="1.32" />
      <path
        d="M8 4V8L11 11"
        stroke={color}
        strokeWidth="1.32"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LocationIcon({
  className,
  size = 14,
  color = "#000000",
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8 8.5C8.82843 8.5 9.5 7.82843 9.5 7C9.5 6.17157 8.82843 5.5 8 5.5C7.17157 5.5 6.5 6.17157 6.5 7C6.5 7.82843 7.17157 8.5 8 8.5Z"
        stroke={color}
        strokeWidth="1.32"
      />
      <path
        d="M8 14C8 14 13 10 13 6.5C13 3.46243 10.5376 1 7.5 1C4.46243 1 2 3.46243 2 6.5C2 10 8 14 8 14Z"
        stroke={color}
        strokeWidth="1.32"
      />
    </svg>
  );
}

export function GlobeIcon({
  className,
  size = 14,
  color = "#00324B",
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      className={className}
    >
      <circle cx="7" cy="7" r="6" stroke={color} strokeWidth="1" />
      <path
        d="M1 7H13M7 1C5.5 3 5 5 5 7C5 9 5.5 11 7 13M7 1C8.5 3 9 5 9 7C9 9 8.5 11 7 13"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ChevronLeftIcon({
  className,
  size = 7,
  color = "rgba(26, 26, 26, 0.61)",
}: IconProps) {
  return (
    <svg
      width={size}
      height={size + 4}
      viewBox="0 0 7 11"
      fill="none"
      className={className}
    >
      <path
        d="M6 1L1 5.5L6 10"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronRightIcon({
  className,
  size = 7,
  color = "white",
}: IconProps) {
  return (
    <svg
      width={size}
      height={size + 4}
      viewBox="0 0 7 11"
      fill="none"
      className={className}
    >
      <path
        d="M1 1L6 5.5L1 10"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MicrophoneIcon({
  className,
  size = 20,
  color = "#8b8b8b",
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </svg>
  );
}

export function PhoneOffIcon({ className, size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91" />
      <line x1="23" y1="1" x2="1" y2="23" />
    </svg>
  );
}

export function VideoIcon({
  className,
  size = 20,
  color = "#8b8b8b",
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  );
}

export function MoreVerticalIcon({ className, size = 16 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      className={className}
    >
      <path
        d="M8 8.66667C8.36819 8.66667 8.66667 8.36819 8.66667 8C8.66667 7.63181 8.36819 7.33333 8 7.33333C7.63181 7.33333 7.33333 7.63181 7.33333 8C7.33333 8.36819 7.63181 8.66667 8 8.66667Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 4C8.36819 4 8.66667 3.70152 8.66667 3.33333C8.66667 2.96514 8.36819 2.66667 8 2.66667C7.63181 2.66667 7.33333 2.96514 7.33333 3.33333C7.33333 3.70152 7.63181 4 8 4Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 13.3333C8.36819 13.3333 8.66667 13.0349 8.66667 12.6667C8.66667 12.2985 8.36819 12 8 12C7.63181 12 7.33333 12.2985 7.33333 12.6667C7.33333 13.0349 7.63181 13.3333 8 13.3333Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CloseIcon({ className, size = 16 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      className={className}
    >
      <path
        d="M3.33333 3.33333L12.6667 12.6667M12.6667 3.33333L3.33333 12.6667"
        stroke="#616161"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PlusCircleIcon({ className, size = 16 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      className={className}
    >
      <circle cx="8" cy="8" r="6.67" stroke="#616161" strokeWidth="1.33" />
      <path
        d="M8 5.33333V10.6667M5.33333 8H10.6667"
        stroke="#616161"
        strokeWidth="1.33"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CopyIcon({ className, size = 16 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      className={className}
    >
      <rect
        x="1.33"
        y="1.33"
        width="8.67"
        height="8.67"
        stroke="#616161"
        strokeWidth="1.33"
        fill="none"
      />
      <rect
        x="6"
        y="6"
        width="8.67"
        height="8.67"
        stroke="#616161"
        strokeWidth="1.33"
        fill="white"
      />
    </svg>
  );
}
