import { ChevronLeft } from "lucide-react";
import Link from "next/link";

interface BackLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const BackLink = ({ href, children, className = "" }: BackLinkProps) => {
  return (
    <Link
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      href={href as any}
      className={`hover:text-foreground absolute top-4 left-4 z-20 flex cursor-pointer items-center gap-1 rounded-lg text-sm font-normal text-neutral-700 transition-colors sm:top-6 sm:left-6 lg:top-8 lg:left-8 ${className}`}
    >
      <div className="flex size-5 items-center justify-center">
        <ChevronLeft className="size-[14px]" />
      </div>
      <span className="hidden leading-[1.2] tracking-[0.2px] sm:inline">
        {children}
      </span>
      <span className="leading-[1.2] tracking-[0.2px] sm:hidden">back</span>
    </Link>
  );
};
