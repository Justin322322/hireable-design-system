import Image from "next/image";

interface CandidateProfileCardProps {
  name: string;
  role: string;
  salary: string;
  experience: string;
  match: string;
  avatar: string;
  className?: string;
}

export const CandidateProfileCard = ({
  name,
  role,
  salary,
  experience,
  match,
  avatar,
  className = "",
}: CandidateProfileCardProps) => {
  return (
    <div
      className={`flex w-full flex-col items-start gap-3 overflow-hidden rounded-xl bg-white p-4 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.08)] ${className}`}
    >
      {/* Card Header */}
      <div className="flex w-full items-center gap-2.5 self-stretch">
        <div className="size-9 overflow-hidden rounded-full">
          <Image
            className="size-full rounded-full object-cover"
            alt={name}
            src={avatar}
            width={36}
            height={36}
          />
        </div>
        <div className="flex flex-1 flex-col items-start gap-0.5">
          <div className="font-text-s text-sm leading-(--text-s-line-height) font-bold tracking-(--text-s-letter-spacing) whitespace-nowrap text-neutral-900 [font-style:var(--text-s-font-style)] sm:text-[13px]">
            {name}
          </div>
          <div className="font-text-s text-xs leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) text-neutral-700 [font-style:var(--text-s-font-style)] sm:text-[11px]">
            {role}
          </div>
        </div>
      </div>

      {/* Card Details */}
      <div className="flex w-full items-center gap-3">
        <div className="font-text-s text-xs leading-(--text-s-line-height) font-medium tracking-(--text-s-letter-spacing) whitespace-nowrap text-neutral-900 [font-style:var(--text-s-font-style)] sm:text-[11px]">
          {salary}
        </div>
        <div className="font-text-s text-xs leading-(--text-s-line-height) font-medium tracking-(--text-s-letter-spacing) whitespace-nowrap text-neutral-900 [font-style:var(--text-s-font-style)] sm:text-[11px]">
          {experience}
        </div>
        <div className="inline-flex items-center justify-center rounded bg-[#27ae6014] px-1.5 py-0.5">
          <div className="font-text-s text-success text-[10px] font-semibold tracking-wide whitespace-nowrap uppercase [font-style:var(--text-s-font-style)] sm:text-[9px]">
            {match}
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="flex w-full items-center justify-between pt-0.5">
        <div className="font-text-s text-xs leading-(--text-s-line-height) font-medium tracking-(--text-s-letter-spacing) whitespace-nowrap text-neutral-300 [font-style:var(--text-s-font-style)] sm:text-[11px]">
          Activity Title
        </div>
        <div className="flex size-5 items-center justify-center rounded-full bg-neutral-100">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-40"
          >
            <path
              d="M4.5 9L7.5 6L4.5 3"
              stroke="#212121"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
