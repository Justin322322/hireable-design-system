import Image from "next/image";
import React, { useCallback } from "react";
import type { SidebarItem } from "../../types";

interface DashboardSidebarProps {
  mainItems: readonly SidebarItem[];
  teamItems: readonly SidebarItem[];
  trialsItems?: readonly SidebarItem[];
  bottomItems: readonly SidebarItem[];
  activeFeature?: string;
  onCollapsedChange?: (collapsed: boolean) => void;
  selectedRole?: string;
}

const DashboardSidebarComponent: React.FC<DashboardSidebarProps> = ({
  mainItems,
  teamItems,
  trialsItems,
  bottomItems,
  activeFeature = "Test Period",
  onCollapsedChange,
  selectedRole = "client",
}) => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const handleToggle = () => {
    const newCollapsed = !isCollapsed;
    setIsCollapsed(newCollapsed);
    onCollapsedChange?.(newCollapsed);
  };

  const getItemActive = useCallback(
    (label: string) => {
      if (selectedRole === "talent") {
        if (activeFeature === "Kanban Pipeline Management") {
          return label === "Job Board";
        }
        if (activeFeature === "AI Compatibility Matching") {
          return label === "Job Board";
        }
        if (activeFeature === "Worker Benefits Package") {
          return label === "Job Board";
        }
      } else {
        if (activeFeature === "AI Matchmaking") {
          return label === "Jobs";
        }
        if (activeFeature === "KPI Tracker") {
          return label === "Goals & KPIs";
        }
        return label === "Trials";
      }
      return false;
    },
    [selectedRole, activeFeature]
  );

  return (
    <aside
      className="absolute top-0 left-0 flex h-[657px] flex-col border-r-[0.65px] [border-right-style:solid] border-neutral-300 bg-white transition-all duration-300 ease-in-out"
      style={{ width: isCollapsed ? 72 : 180 }}
    >
      <div
        className={`relative flex w-full transition-all ${
          isCollapsed
            ? "flex-col items-center justify-center py-4"
            : "h-[46.33px] flex-col items-start justify-center gap-[6.43px] px-[15.44px] pt-[15.44px] pb-[10.3px]"
        }`}
      >
        {isCollapsed ? (
          <Image
            className="relative size-[15.44px]"
            alt="Frame"
            src="/logos/frame-2.svg"
            width={15.44}
            height={15.44}
            unoptimized
            priority
          />
        ) : (
          <div className="relative flex items-center gap-[6.43px]">
            <Image
              className="relative size-[15.44px]"
              alt="Frame"
              src="/logos/frame-2.svg"
              width={15.44}
              height={15.44}
              unoptimized
              priority
            />
            <Image
              className="relative h-[10.83px] w-[52.66px]"
              alt="Frame"
              src="/logos/frame-1.svg"
              width={52.66}
              height={10.83}
              unoptimized
              priority
            />
          </div>
        )}
      </div>

      <nav className="relative flex w-full flex-col items-start gap-[5.15px] self-stretch px-[5.15px] pt-[10.3px]">
        <div className="relative flex w-full flex-col items-start gap-[5.15px] self-stretch">
          {mainItems.map((item, index) => {
            const isActive = getItemActive(item.label);
            return (
              <button
                key={index}
                className={`relative flex items-center self-stretch rounded-[5.15px] transition-all ${
                  isCollapsed
                    ? "justify-center py-2"
                    : "gap-[6.43px] px-[10.3px] py-[5.15px]"
                } ${isActive ? "bg-highlight-blue" : "bg-white"}`}
              >
                <div className="relative flex size-[15.44px] shrink-0 items-center justify-center">
                  <Image
                    className="relative size-[12.87px]"
                    alt="Component"
                    src={item.icon}
                    width={12.87}
                    height={12.87}
                    unoptimized
                    loading="lazy"
                    style={
                      isActive
                        ? {
                            filter:
                              "invert(48%) sepia(79%) saturate(2476%) hue-rotate(176deg) brightness(98%) contrast(101%)",
                            objectFit: "contain",
                          }
                        : {
                            filter: "grayscale(100%) brightness(0.4)",
                            objectFit: "contain",
                          }
                    }
                  />
                </div>
                {!isCollapsed && (
                  <div
                    className={`relative overflow-hidden font-['Inter'] text-[9px] leading-[120%] tracking-[0.13px] whitespace-nowrap transition-opacity duration-200 ${
                      isActive ? "text-client" : "text-neutral-900"
                    }`}
                  >
                    {item.label}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        <div className="relative flex w-full flex-col items-start gap-[5.15px] self-stretch pt-[5.15px]">
          {!isCollapsed && teamItems && teamItems.length > 0 && (
            <div className="relative flex w-full items-center gap-3 self-stretch bg-white px-[10.3px] py-[5.15px]">
              <div className="relative w-fit font-['Inter'] text-[9px] leading-[120%] tracking-[0.13px] whitespace-nowrap text-neutral-600">
                Team
              </div>
            </div>
          )}

          {teamItems.map((item, index) => {
            const isActive = getItemActive(item.label);
            return (
              <button
                key={index}
                className={`relative flex items-center self-stretch rounded-[5.15px] transition-all ${
                  isCollapsed
                    ? "justify-center py-2"
                    : "gap-[6.43px] px-[10.3px] py-[5.15px]"
                } ${isActive ? "bg-highlight-blue" : "bg-white"}`}
              >
                <div className="relative flex size-[15.44px] shrink-0 items-center justify-center">
                  {selectedRole === "talent" && item.label === "Acme Corp" ? (
                    <div className="text-client bg-highlight-blue flex size-[15.44px] items-center justify-center rounded-full text-[8px] font-semibold">
                      JD
                    </div>
                  ) : (
                    <Image
                      className="relative size-[12.87px]"
                      alt="Component"
                      src={item.icon}
                      width={12.87}
                      height={12.87}
                      unoptimized
                      loading="lazy"
                      style={
                        isActive
                          ? {
                              filter:
                                "invert(48%) sepia(79%) saturate(2476%) hue-rotate(176deg) brightness(98%) contrast(101%)",
                              objectFit: "contain",
                            }
                          : {
                              filter: "grayscale(100%) brightness(0.4)",
                              objectFit: "contain",
                            }
                      }
                    />
                  )}
                </div>
                {!isCollapsed && (
                  <div
                    className={`relative overflow-hidden font-['Inter'] text-[9px] leading-[120%] tracking-[0.13px] whitespace-nowrap transition-opacity duration-200 ${
                      isActive ? "text-client" : "text-neutral-900"
                    }`}
                  >
                    {item.label}
                  </div>
                )}
              </button>
            );
          })}

          {trialsItems && trialsItems.length > 0 && (
            <>
              {!isCollapsed && (
                <div className="relative flex w-full items-center gap-3 self-stretch px-[10.3px] py-[5.15px]">
                  <div className="relative w-fit font-['Inter'] text-[9px] leading-[120%] tracking-[0.13px] whitespace-nowrap text-neutral-600">
                    Test
                  </div>
                </div>
              )}

              {trialsItems.map((item, index) => {
                const isActive = getItemActive(item.label);
                return (
                  <button
                    key={`trial-${index}`}
                    className={`relative flex items-center self-stretch rounded-[5.15px] transition-all ${
                      isCollapsed
                        ? "justify-center py-2"
                        : "gap-[6.43px] px-[10.3px] py-[5.15px]"
                    } ${isActive ? "bg-highlight-blue" : "bg-white"}`}
                  >
                    <div className="relative flex size-[15.44px] shrink-0 items-center justify-center">
                      <div className="bg-warning flex size-[15.44px] items-center justify-center rounded-full text-[8px] font-semibold text-white">
                        JD
                      </div>
                    </div>
                    {!isCollapsed && (
                      <div
                        className={`relative overflow-hidden font-['Inter'] text-[9px] leading-[120%] tracking-[0.13px] whitespace-nowrap transition-opacity duration-200 ${
                          isActive ? "text-client" : "text-neutral-900"
                        }`}
                      >
                        {item.label}
                      </div>
                    )}
                  </button>
                );
              })}
            </>
          )}
        </div>
      </nav>

      <div
        className={`relative mt-auto flex w-full flex-col items-start gap-[5.15px] self-stretch ${isCollapsed ? "px-[5.15px] pb-6" : "px-[5.15px] pb-4"}`}
      >
        {bottomItems.map((item, index) => (
          <button
            key={index}
            className={`relative flex items-center self-stretch rounded-[5.15px] bg-white transition-all ${
              isCollapsed
                ? "justify-center py-2"
                : "gap-[6.43px] px-[10.3px] py-[5.15px]"
            }`}
          >
            <div className="relative flex size-[15.44px] shrink-0 items-center justify-center">
              <Image
                className="relative size-[12.87px]"
                alt="Component"
                src={item.icon}
                width={12.87}
                height={12.87}
                unoptimized
                loading="lazy"
                style={{
                  filter: "grayscale(100%) brightness(0.4)",
                  objectFit: "contain",
                }}
              />
            </div>
            {!isCollapsed && (
              <div className="relative overflow-hidden font-['Inter'] text-[9px] leading-[120%] tracking-[0.13px] whitespace-nowrap text-neutral-900 transition-opacity duration-200">
                {item.label}
              </div>
            )}
          </button>
        ))}

        {!isCollapsed && selectedRole === "client" && (
          <div className="mt-2 flex h-[33.46px] w-[169.87px] flex-row items-center gap-[5.15px] rounded-[5.15px] bg-white px-[10.3px] py-[5.15px]">
            <div className="flex flex-1 flex-row items-center gap-[5.15px]">
              <div className="size-[23.16px] shrink-0 overflow-hidden rounded-[72.39px] bg-neutral-100">
                <Image
                  src="/images/Jacob-Smith.svg"
                  alt="Jacob Smith"
                  width={23}
                  height={23}
                  className="size-full object-cover"
                  unoptimized
                  loading="lazy"
                  onError={(e) => {
                    // Fallback if image fails
                    e.currentTarget.style.display = "none";
                  }}
                />
                {/* Fallback circle if image fails or is missing */}
                <div className="flex size-full items-center justify-center bg-neutral-200 text-[9px]">
                  JS
                </div>
              </div>
              <div className="flex flex-col items-start gap-[2.57px]">
                <div className="font-['Inter'] text-[9px] leading-[120%] font-semibold tracking-[0.13px] text-neutral-900">
                  Jacob Smith
                </div>
                <div className="font-['Inter'] text-[7.7px] leading-[120%] font-normal tracking-[0.13px] text-neutral-700">
                  me@example.com
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <button
        onClick={handleToggle}
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        className="bg-neutral-150 pointer-events-auto absolute -right-2 bottom-[80px] flex size-4 cursor-pointer items-center justify-center gap-[6.55px] rounded-lg transition-transform duration-300 hover:bg-neutral-200"
        style={{ transform: isCollapsed ? "rotate(180deg)" : "rotate(0deg)" }}
      >
        <Image
          className="relative size-[10.48px]"
          alt="Icon components"
          src="/icons/icon-components-6.svg"
          width={10}
          height={10}
          unoptimized
          loading="lazy"
        />
      </button>
    </aside>
  );
};

export const DashboardSidebar = React.memo(DashboardSidebarComponent);
DashboardSidebar.displayName = "DashboardSidebar";
