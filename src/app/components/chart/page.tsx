"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeBlock } from "@/components/docs/code-block";
import { ComponentPreview } from "@/components/docs/component-preview";
import { VERSION } from "@/lib/version";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Import JSON data (simulates API response)
import chartsData from "@/data/charts.json";

// ============================================================================
// TYPE DEFINITIONS - Backend-ready interfaces
// ============================================================================

interface ProgressDataPoint {
  date: string;
  progress: number;
}

interface ChartData {
  id: string;
  title: string;
  dataPoints: ProgressDataPoint[];
}

// Cast imported JSON to typed data
const progressChartData = chartsData.progressChart as ChartData;

// ============================================================================
// COMPONENTS
// ============================================================================

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ value: number }>;
  label?: string;
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (active && payload && payload.length) {
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
        <div className="bg-background rounded-lg px-3 py-2 shadow-md">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-client" />
            <span className="text-xs text-neutral-600">Overall Progress</span>
            <span className="text-xs text-foreground font-medium">{payload[0].value}%</span>
          </div>
        </div>
        <div className="bg-background rounded-lg px-3 py-2 shadow-md">
          <span className="text-xs text-foreground">{formatDate(label || "")}</span>
        </div>
      </div>
    );
  }
  return null;
}

function ProgressChart({ data }: { data: ChartData }) {
  return (
    <div className="w-full bg-background border border-neutral-300 rounded-lg p-4">
      <h3 className="text-sm font-semibold text-foreground mb-4">{data.title}</h3>
      <div className="h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data.dataPoints}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="progressGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--chart-fill)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="var(--chart-fill)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="var(--chart-grid)" strokeWidth={0.5} vertical={false} />
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "var(--chart-axis-text)" }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "var(--chart-axis-text)" }}
              domain={[0, 100]}
              ticks={[0, 20, 40, 60, 80, 100]}
              label={{
                value: "Progress (%)",
                angle: -90,
                position: "insideLeft",
                style: { fontSize: 12, fill: "var(--chart-axis-text)" },
              }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="progress"
              stroke="var(--chart-line)"
              strokeWidth={2}
              fill="url(#progressGradient)"
              dot={false}
              activeDot={{ fill: "#fff", stroke: "var(--chart-line)", strokeWidth: 2, r: 6 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default function ChartPage() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:px-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">Chart</h1>
          <span className="text-sm text-muted-foreground">{VERSION}</span>
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
            <ProgressChart data={progressChartData} />
          </ComponentPreview>

          <CodeBlock
            code={`// Fetch chart data from API
const [chartData, setChartData] = useState<ChartData | null>(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchChart = async () => {
    const res = await fetch("/api/analytics/progress");
    const data = await res.json();
    setChartData(data);
    setLoading(false);
  };
  fetchChart();
}, []);

// Type Definitions
interface ChartData {
  id: string;
  title: string;
  dataPoints: { date: string; progress: number }[];
}

// Usage
{loading ? (
  <Skeleton className="h-[250px] w-full" />
) : chartData && (
  <ProgressChart data={chartData} />
)}`}
            language="tsx"
          />
        </TabsContent>

        <TabsContent value="usage" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">When to Use</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-green-600">Do</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Use area charts to show trends over time</li>
                    <li>Include clear axis labels and units</li>
                    <li>Use tooltips for detailed data points</li>
                    <li>Keep color palette consistent with design system</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-red-600">Don&apos;t</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Overload charts with too many data series</li>
                    <li>Use 3D effects that distort data perception</li>
                    <li>Truncate Y-axis in misleading ways</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="api" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">ChartData Interface</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-3 text-left font-medium">Property</th>
                    <th className="py-3 text-left font-medium">Type</th>
                    <th className="py-3 text-left font-medium">Description</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">id</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Unique chart identifier</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">title</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Chart title</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">dataPoints</td>
                    <td className="py-3 font-mono">ProgressDataPoint[]</td>
                    <td className="py-3">Array of data points</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">ProgressDataPoint Interface</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-3 text-left font-medium">Property</th>
                    <th className="py-3 text-left font-medium">Type</th>
                    <th className="py-3 text-left font-medium">Description</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">date</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Date label (e.g., &quot;Nov 04&quot;)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">progress</td>
                    <td className="py-3 font-mono">number</td>
                    <td className="py-3">Progress value (0-100)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Recharts Props</h2>
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
