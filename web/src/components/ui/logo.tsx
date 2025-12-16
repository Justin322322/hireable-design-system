import Image from "next/image";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export const Logo = ({ className, width = 36, height = 36 }: LogoProps) => {
  return (
    <Image
      className={className}
      alt="Hireable Logo"
      src="/logos/frame-2.svg"
      width={width}
      height={height}
    />
  );
};
