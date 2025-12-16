import Image from "next/image";
import React from "react";

interface BrowserChromeProps {
  leftIcons: readonly { src: string; alt: string }[];
  rightIcons: readonly { src: string; alt: string }[];
}

const BrowserChromeComponent: React.FC<BrowserChromeProps> = ({
  leftIcons,
  rightIcons,
}) => {
  return (
    <div className="relative -ml-px flex h-[44px] w-[1258px] items-center justify-between rounded-[13.981px_13.981px_0px_0px] bg-[var(--color-browser-bg)] px-[20.971px] py-0">
      <div className="relative inline-flex h-[12.01px] items-center gap-[14.41px]">
        <div className="relative inline-flex items-start gap-[4.8px]">
          <div className="relative size-[7.21px] rounded-[3.6px] bg-[var(--color-browser-close)]" />
          <div className="relative size-[7.21px] rounded-[3.6px] bg-[var(--color-browser-minimize)]" />
          <div className="relative size-[7.21px] rounded-[3.6px] bg-[var(--color-browser-maximize)]" />
        </div>

        <div className="relative inline-flex h-[12.01px] items-center gap-[7.21px]">
          {leftIcons.map((icon, index) => (
            <Image
              key={index}
              className="relative my-[-3.60px] size-[19.22px]"
              alt={icon.alt}
              src={icon.src}
              width={19}
              height={19}
              unoptimized
              priority
            />
          ))}
        </div>
      </div>

      <div className="relative flex h-[24.02px] w-[400.32px] items-center gap-[6.99px] rounded-[6.99px] bg-[var(--color-browser-url-bg)] px-[6.99px] py-[3.5px]">
        <div className="relative my-[-0.49px] flex flex-1 grow items-center justify-center gap-[3.5px]">
          <Image
            className="relative size-[18.01px]"
            alt="Safari icons"
            src="/icons/icon-browser-tabs.svg"
            width={18}
            height={18}
            unoptimized
            priority
          />
          <div className="relative flex w-fit items-center justify-center text-center font-['SF_Pro-Regular',Helvetica] text-[10px] leading-[normal] font-normal tracking-[0] whitespace-nowrap text-black">
            hireable.ph
          </div>
        </div>
        <Image
          className="relative my-[-0.49px] size-[18.01px]"
          alt="Safari icons"
          src="/icons/icon-browser-address-bar.svg"
          width={18}
          height={18}
          unoptimized
          priority
        />
      </div>

      <div className="relative inline-flex h-[12.01px] items-center gap-[12.01px]">
        {rightIcons.map((icon, index) => (
          <Image
            key={index}
            className="relative my-[-3.60px] size-[19.22px]"
            alt={icon.alt}
            src={icon.src}
            width={19}
            height={19}
            unoptimized
            priority
          />
        ))}
      </div>
    </div>
  );
};

export const BrowserChrome = React.memo(BrowserChromeComponent);
BrowserChrome.displayName = "BrowserChrome";
