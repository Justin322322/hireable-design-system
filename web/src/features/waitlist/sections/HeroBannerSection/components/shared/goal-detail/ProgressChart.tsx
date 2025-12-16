import {
  Area,
  AreaChart,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { progressChartData, revenueChartData } from "./constants";
import type { ChartDataPoint } from "./types";

// Custom tooltip component
function CustomTooltip({
  active,
  payload,
  label,
  formatAsCurrency = false,
  chartLabel = "Progress",
}: {
  active?: boolean;
  payload?: Array<{ value: number }>;
  label?: string;
  formatAsCurrency?: boolean;
  chartLabel?: string;
}) {
  if (active && payload && payload.length) {
    const value = payload[0].value;
    const formattedValue = formatAsCurrency
      ? `${value.toLocaleString()}`
      : `${value}%`;

    return (
      <div className="flex flex-col items-center">
        <div className="flex h-[18px] items-center gap-[5.15px] rounded-[5.15px] bg-white px-[5.15px] shadow-[0px_1.29px_2.57px_rgba(0,0,0,0.25)]">
          <div className="bg-client size-[5.15px] rounded-full" />
          <span className="font-sans text-[7.72px] leading-[120%] font-normal tracking-[0.2px] text-neutral-700">
            {chartLabel}
          </span>
          <span className="font-sans text-[7.72px] leading-[120%] font-normal tracking-[0.2px] text-neutral-900">
            {formattedValue}
          </span>
        </div>
        <div className="size-0 border-x-[5.15px] border-t-[5.15px] border-x-transparent border-t-white" />
        <div className="flex h-[18px] items-center justify-center rounded-[5.15px] bg-white px-[7.72px] shadow-[0px_1.29px_2.57px_rgba(0,0,0,0.25)]">
          <span className="text-center font-sans text-[7.72px] leading-[120%] font-normal tracking-[0.2px] text-black">
            {label}
          </span>
        </div>
      </div>
    );
  }
  return null;
}

// Custom dot component for the active indicator
function CustomActiveDot(props: { cx?: number; cy?: number }) {
  const { cx, cy } = props;
  if (cx === undefined || cy === undefined) return null;
  return (
    <circle
      cx={cx}
      cy={cy}
      r={3.86}
      fill="white"
      stroke="#00A7F8"
      strokeWidth={1.29}
    />
  );
}

interface ProgressChartProps {
  data?: ChartDataPoint[];
  formatAsCurrency?: boolean;
  chartLabel?: string;
  yAxisLabel?: string;
  yMax?: number;
  yTicks?: number[];
  referenceLine?: string;
}

export function ProgressChart({
  data,
  formatAsCurrency = false,
  chartLabel = "Progress",
  yAxisLabel,
  yMax,
  yTicks,
  referenceLine,
}: ProgressChartProps) {
  const chartData =
    data || (formatAsCurrency ? revenueChartData : progressChartData);

  const defaultYLabel = formatAsCurrency ? "Progress ($)" : "Progress (%)";
  const axisLabel = yAxisLabel || defaultYLabel;
  const domain: [number, number] = formatAsCurrency
    ? [1500000, yMax ? yMax : 4000000]
    : [0, yMax ? yMax : 100];
  const currencyTicks = [1500000, 2000000, 2500000, 3000000, 3500000, 4000000];
  const percentageTicks = [0, 20, 40, 60, 80, 100];
  const ticks = yTicks || (formatAsCurrency ? currencyTicks : percentageTicks);
  const defaultReferenceLine = formatAsCurrency ? "Jun" : "Nov 09";
  const refLine = referenceLine || defaultReferenceLine;

  const formatYTick = (value: number) => {
    if (formatAsCurrency) {
      if (value >= 1000000) {
        return `${(value / 1000000).toFixed(1)}M`;
      }
      if (value >= 1000) {
        return `${(value / 1000).toFixed(0)}K`;
      }
      return value.toString();
    }
    return value.toString();
  };

  return (
    <div className="h-[200.76px] w-full bg-white">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={chartData}
          margin={{ top: 10, right: 10, left: 50, bottom: 25 }}
        >
          <defs>
            <linearGradient id="progressGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00A7F8" stopOpacity={0.04} />
              <stop offset="100%" stopColor="#00A7F8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid
            horizontal={true}
            vertical={false}
            stroke="#E0E0E0"
            strokeWidth={0.5}
          />
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 9, fill: "#757575", textAnchor: "middle" }}
            dy={10}
            interval={0}
          />
          <YAxis
            domain={domain}
            ticks={ticks}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 9, fill: "#757575" }}
            tickFormatter={formatYTick}
            dx={-5}
            width={36}
            label={{
              value: axisLabel,
              angle: -90,
              position: "insideLeft",
              style: { fontSize: 9, fill: "#757575", textAnchor: "middle" },
              dx: -15,
            }}
          />
          <ReferenceLine x={refLine} stroke="#C3C3C3" strokeDasharray="3 3" />
          <Tooltip
            content={
              <CustomTooltip
                formatAsCurrency={formatAsCurrency}
                chartLabel={chartLabel}
              />
            }
            cursor={false}
          />
          <Area
            type="natural"
            dataKey="progress"
            stroke="#00A7F8"
            strokeWidth={1.29}
            fill="url(#progressGradient)"
            dot={false}
            activeDot={<CustomActiveDot />}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
