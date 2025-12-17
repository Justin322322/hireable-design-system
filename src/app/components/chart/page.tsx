"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/docs/code-block";
import { ComponentPreview } from "@/components/docs/component-preview";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const progressData = [
  { date: "Nov 04", progress: 20 },
  { date: "Nov 05", progress: 35 },
  { date: "Nov 06", progress: 25 },
  { date: "Nov 07", progress: 45 },
  { date: "Nov 08", progress: 30 },
  { date: "Nov 09", progress: 55 },
  { date: "Nov 10", progress: 40 },
  { date: "Nov 11", progress: 60 },
  { date: "Nov 12", progress: 50 },
  { date: "Nov 13", progress: 70 },
  { date: "Nov 14", progress: 65 },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ value: number }>;
  label?: string;
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    // Format label to full month name (e.g., "Nov 09" -> "09 November")
    const formatDate = (dateStr: string) => {
      const months: Record<string, string> = {
        "Nov": "November",
        "Dec": "December",
        "Jan": "January",
      };
      const parts = dateStr.split(" ");
      if (parts.length === 2) {
        return `${parts[1]} ${months[parts[0]] || parts[0]}`;
      }
      return dateStr;
    };

    return (
      <div className="flex flex-col items-center gap-20">
        {/* Top tooltip - Progress value */}
        <div className="bg-white rounded-lg px-3 py-2 shadow-md">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00A7F8]" />
            <span className="text-xs text-[#616161]">Overall Progress</span>
            <span className="text-xs text-[#212121] font-medium">{payload[0].value}%</span>
          </div>
        </div>

        {/* Bottom tooltip - Date */}
        <div className="bg-white rounded-lg px-3 py-2 shadow-md">
          <span className="text-xs text-[#212121]">{formatDate(label || "")}</span>
        </div>
      </div>
    );
  }
  return null;
}

export default function ChartPage() {
  return (
    <div className="container max-w-4xl py-12 px-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">Chart</h1>
          <Badge variant="outline">Stable</Badge>
        </div>
        <p className="text-lg text-muted-foreground">
          Charts visualize data trends and patterns. Built with Recharts for flexible, responsive data visualization.
        </p>
      </div>

      <Tabs defaultValue="examples" className="space-y-8">
        <TabsList>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
        </TabsList>

        <TabsContent value="examples" className="space-y-8">
          <ComponentPreview title="Progress Over Time">
            <div className="w-full bg-white border border-[#C3C3C3] rounded-lg p-4">
              <h3 className="text-sm font-semibold text-[#212121] mb-4">Progress Over Time</h3>
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={progressData}
                    margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="progressGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#00A7F8" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#00A7F8" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke="#C3C3C3" strokeWidth={0.5} vertical={false} />
                    <XAxis
                      dataKey="date"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: "#757575" }}
                      dy={10}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: "#757575" }}
                      domain={[0, 100]}
                      ticks={[0, 20, 40, 60, 80, 100]}
                      label={{
                        value: "Progress (%)",
                        angle: -90,
                        position: "insideLeft",
                        style: { fontSize: 12, fill: "#757575" },
                      }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Area
                      type="monotone"
                      dataKey="progress"
                      stroke="#00A7F8"
                      strokeWidth={2}
                      fill="url(#progressGradient)"
                      dot={false}
                      activeDot={{ fill: "#fff", stroke: "#00A7F8", strokeWidth: 2, r: 6 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </ComponentPreview>

          <CodeBlock
            code={`import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "Nov 04", progress: 20 },
  { date: "Nov 05", progress: 35 },
  { date: "Nov 06", progress: 25 },
  // ... more data
];

<div className="h-[250px] w-full">
  <ResponsiveContainer width="100%" height="100%">
    <AreaChart data={data}>
      <defs>
        <linearGradient id="progressGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#00A7F8" stopOpacity={0.3} />
          <stop offset="95%" stopColor="#00A7F8" stopOpacity={0} />
        </linearGradient>
      </defs>
      <CartesianGrid stroke="#C3C3C3" strokeWidth={0.5} vertical={false} />
      <XAxis dataKey="date" />
      <YAxis domain={[0, 100]} />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="progress"
        stroke="#00A7F8"
        fill="url(#progressGradient)"
      />
    </AreaChart>
  </ResponsiveContainer>
</div>`}
            language="tsx"
          />
        </TabsContent>

        <TabsContent value="usage" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">When to Use</h2>
            <div className="space-y-4">
              <div className="bg-white border border-[#C3C3C3] rounded-lg p-4">
                <h3 className="text-lg text-green-600 font-medium mb-2">Do</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Use area charts to show trends over time</li>
                  <li>Include clear axis labels and units</li>
                  <li>Use tooltips for detailed data points</li>
                  <li>Keep color palette consistent with design system</li>
                </ul>
              </div>
              <div className="bg-white border border-[#C3C3C3] rounded-lg p-4">
                <h3 className="text-lg text-red-600 font-medium mb-2">Don&apos;t</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Overload charts with too many data series</li>
                  <li>Use 3D effects that distort data perception</li>
                  <li>Truncate Y-axis in misleading ways</li>
                </ul>
              </div>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="api" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Chart Props</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-3 text-left font-medium">Prop</th>
                    <th className="py-3 text-left font-medium">Type</th>
                    <th className="py-3 text-left font-medium">Description</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">data</td>
                    <td className="py-3 font-mono">Array</td>
                    <td className="py-3">Array of data objects</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">dataKey</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Key for the data value</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">stroke</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Line color (e.g., #00A7F8)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">fill</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Area fill color or gradient</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </TabsContent>
      </Tabs>
    </div>
  );
}
