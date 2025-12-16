"use client";

import { ChevronLeftIcon, ChevronRightIcon, GlobeIcon } from "../shared/icons";
import {
  AVAILABLE_DATES,
  CALENDAR_COLUMNS,
  MOBILE_CALENDAR_COLUMNS,
  SELECTED_DATE,
} from "./constants";

interface CalendarGridProps {
  /** Whether to use compact mobile layout */
  compact?: boolean;
}

/**
 * Calendar grid component for date selection
 */
export function CalendarGrid({ compact = false }: CalendarGridProps) {
  const columns = compact ? MOBILE_CALENDAR_COLUMNS : CALENDAR_COLUMNS;

  if (compact) {
    return (
      <div className="flex w-full flex-col gap-3 border-b border-neutral-300 bg-[rgba(255,255,255,0.24)] p-4">
        <span className="font-['Inter'] text-[14px] leading-[150%] font-bold tracking-[0.2px] text-neutral-900">
          Select Schedule
        </span>

        <MonthNavigation compact />

        <div className="grid w-full grid-cols-7 gap-1.5">
          {columns.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col items-center gap-1.5">
              <span className="w-full text-center font-['Inter'] text-[10px] leading-[12px] font-normal text-neutral-800 uppercase">
                {column.day}
              </span>
              <div className="flex w-full flex-col items-center gap-1">
                {column.dates.map((date, dateIndex) => (
                  <DateCell key={dateIndex} date={date} compact />
                ))}
              </div>
            </div>
          ))}
        </div>

        <TimezoneDisplay compact />
      </div>
    );
  }

  return (
    <div
      className="flex h-[460px] w-[356px] flex-col justify-between border-r border-neutral-300 bg-[rgba(255,255,255,0.24)]"
      style={{ padding: "16px 24px" }}
    >
      <div className="flex flex-col" style={{ gap: "24px" }}>
        <span
          className="font-['Inter'] text-[16px] leading-[150%] font-bold tracking-[0.2px] text-neutral-900"
          style={{ height: "24px" }}
        >
          Select Schedule
        </span>

        <div className="flex flex-col" style={{ gap: "14.32px" }}>
          <MonthNavigation />

          <div className="flex items-end" style={{ gap: "5.37px" }}>
            {columns.map((column, colIndex) => (
              <div
                key={colIndex}
                className="flex flex-col items-center"
                style={{ gap: "14.32px", width: "39.39px" }}
              >
                <span
                  className="font-['Inter'] text-[10.77px] leading-[11px] font-normal text-neutral-800 uppercase"
                  style={{ height: "11px", textAlign: "center" }}
                >
                  {column.day}
                </span>
                <div
                  className="flex flex-col items-center"
                  style={{ gap: "7.16px" }}
                >
                  {column.dates.map((date, dateIndex) => (
                    <DateCell key={dateIndex} date={date} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <TimezoneDisplay />
    </div>
  );
}

function MonthNavigation({ compact = false }: { compact?: boolean }) {
  const buttonSize = compact ? "size-7" : "";
  const nextButtonSize = compact ? "size-6" : "";

  return (
    <div
      className={`flex items-center justify-between ${compact ? "px-0.5" : ""}`}
      style={compact ? undefined : { height: "34px" }}
    >
      <button
        className={`flex items-center justify-center rounded-full ${buttonSize}`}
        style={compact ? undefined : { width: "34px", height: "34px" }}
      >
        <ChevronLeftIcon size={compact ? 6 : 7} />
      </button>
      <span
        className={`font-['Inter'] ${compact ? "text-[13px]" : "text-[14.36px]"} leading-[150%] font-normal text-neutral-800`}
      >
        April 2024
      </span>
      <button
        className={`flex items-center justify-center rounded-full ${nextButtonSize}`}
        style={{
          width: compact ? undefined : "28px",
          height: compact ? undefined : "28px",
          background:
            "linear-gradient(180deg, #EFFAFF 0.48%, #D7F2FF 17.79%, #0078B2 100%)",
          boxShadow: compact
            ? "0px 6px 8px rgba(0, 54, 80, 0.25)"
            : "0px 8.4px 11.2px rgba(0, 54, 80, 0.25)",
        }}
      >
        <ChevronRightIcon size={compact ? 6 : 7} />
      </button>
    </div>
  );
}

function DateCell({
  date,
  compact = false,
}: {
  date: number | null;
  compact?: boolean;
}) {
  if (date === null) {
    return (
      <div
        className={compact ? "size-8" : ""}
        style={compact ? undefined : { width: "39.39px", height: "39.39px" }}
      />
    );
  }

  const isAvailable = AVAILABLE_DATES.includes(date);
  const isSelected = date === SELECTED_DATE;
  const hasIndicator = date === 22;

  const cellSize = compact ? "size-8" : "";
  const cellStyle = compact
    ? undefined
    : { width: "39.39px", height: "39.39px" };

  return (
    <div
      className={`flex items-center justify-center rounded-full ${cellSize} ${
        isSelected
          ? "bg-[linear-gradient(180deg,#EFFAFF_0.48%,#D7F2FF_17.79%,#0078B2_100%)]"
          : isAvailable
            ? "border border-white bg-[#f2fbff]"
            : ""
      }`}
      style={{
        ...cellStyle,
        boxShadow: isSelected
          ? compact
            ? "0px 4px 6px rgba(0,54,80,0.25)"
            : "0px 8.4px 11.2px rgba(0,54,80,0.25)"
          : isAvailable
            ? compact
              ? "inset 0px 0.5px 3px 0px #75a9c2"
              : "inset 0px 0.5px 4px 0px #75a9c2"
            : undefined,
      }}
    >
      <div className="relative flex flex-col items-center">
        <span
          className={`font-['Inter'] ${compact ? "text-[11px]" : "text-[14.36px]"} leading-[150%] font-normal ${
            isSelected
              ? "text-white"
              : isAvailable
                ? "text-client"
                : "text-[rgba(26,26,26,0.61)]"
          }`}
        >
          {date}
        </span>
        {hasIndicator && (
          <div
            className="absolute rounded-full bg-[rgba(26,26,26,0.61)]"
            style={{ width: "3.58px", height: "3.58px", bottom: "-4px" }}
          />
        )}
      </div>
    </div>
  );
}

function TimezoneDisplay({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <div className="flex items-center gap-1.5 pt-1">
        <GlobeIcon size={12} className="shrink-0" />
        <span className="truncate font-['Inter'] text-[11px] leading-[150%] font-normal text-neutral-800">
          Central European Time
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col" style={{ gap: "5.99px" }}>
      <span className="font-['Inter'] text-[12px] leading-[150%] font-normal text-neutral-800">
        Time zone
      </span>
      <div className="flex items-center" style={{ gap: "3.99px" }}>
        <div className="flex items-center" style={{ gap: "11.97px" }}>
          <GlobeIcon size={14} />
          <span className="font-['Inter'] text-[12px] leading-[150%] font-normal text-neutral-800">
            Central European Time (8:11pm)
          </span>
        </div>
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <path
            d="M2 3L4 5L6 3"
            stroke="currentColor"
            className="text-neutral-800"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
