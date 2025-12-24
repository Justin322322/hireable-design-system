import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeBlock } from "@/components/docs/code-block";
import { ComponentPreview } from "@/components/docs/component-preview";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Icon } from "@/components/ui/icon";
import { VERSION } from "@/lib/version";

// Import JSON data (simulates API response)
import kanbanData from "@/data/kanban.json";

// ============================================================================
// TYPE DEFINITIONS - Backend-ready interfaces
// ============================================================================

interface Application {
  id: string;
  company: string;
  position: string;
  salary: string;
  experience: string;
  status: "FULL-TIME" | "PART-TIME" | "CONTRACT" | string;
  postedTime: string;
}

interface Candidate {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  salary: string;
  experience: string;
  matchStatus?: string;
}

interface KanbanColumnData<T> {
  id: string;
  title: string;
  count: number;
  items: T[];
}

// Cast imported JSON to typed data
const applicationsColumnData = kanbanData.applicationsColumn as KanbanColumnData<Application>;
const candidatesColumnData = kanbanData.candidatesColumn as KanbanColumnData<Candidate>;

// ============================================================================
// COMPONENTS
// ============================================================================

function ApplicationCard({ company, position, salary, experience, status, postedTime }: Omit<Application, "id">) {
  const isMatched = status.includes("MATCHED");

  return (
    <Card className="w-[300px] rounded-lg border border-button-tertiary-border bg-background p-3">
      <CardContent className="flex flex-col items-start gap-[8px] p-0">
        <div className="flex w-full items-center justify-between">
          <p className="text-[10px] leading-[1.2] font-normal tracking-[0.2px] text-muted-foreground">
            {company}
          </p>
          <p className="text-[10px] leading-[1.2] font-normal tracking-[0.2px] text-muted-foreground">
            {postedTime}
          </p>
        </div>
        <p className="w-full truncate text-[16px] leading-normal font-semibold tracking-[0.2px] text-foreground">
          {position}
        </p>
        <div className="flex items-center gap-1.5 text-[12px] leading-[1.2] font-normal tracking-[0.2px] text-muted-foreground">
          <span>{salary}</span>
          <span>•</span>
          <span>{experience}</span>
        </div>
        {status && (
          <div
            className={`rounded-full px-[8px] py-[4px] text-[12px] leading-[1.2] font-normal tracking-[0.3px] ${
              isMatched
                ? "text-success bg-success/10"
                : "text-client bg-client/10"
            }`}
          >
            {status}
          </div>
        )}
        <div className="flex w-full items-center justify-between py-[4px]">
          <p className="text-[12px] leading-[1.2] font-normal tracking-[0.2px] text-foreground">
            Activity Title
          </p>
          <button className="bg-client flex h-[20px] w-[20px] items-center justify-center rounded-full">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M4.5 3L7.5 6L4.5 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </CardContent>
    </Card>
  );
}

function CandidateCard({ name, role, salary, experience, matchStatus }: Omit<Candidate, "id" | "avatar">) {
  return (
    <Card className="h-[135px] w-[300px] rounded-md border border-button-tertiary-border bg-background">
      <CardContent className="flex h-full flex-col items-start gap-[9px] p-[12px]">
        <div className="relative flex w-full items-start justify-between">
          <div className="relative flex h-[40px] flex-1 items-center gap-[8px]">
            <Avatar className="h-[40px] w-[40px]">
              <AvatarFallback className="bg-neutral-muted text-[14px] font-medium text-muted-foreground">
                {name.split(" ").map(n => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
            <div className="relative flex flex-1 flex-col items-start gap-[4px]">
              <div className="text-[14px] leading-[1.2] font-semibold tracking-[0.2px] text-foreground">
                {name}
              </div>
              <div className="text-[12px] leading-[1.2] font-normal tracking-[0.2px] text-muted-foreground">
                {role}
              </div>
            </div>
          </div>
          <button aria-label="More options" className="flex h-6 w-6 items-center justify-center text-icon hover:text-foreground">
            <Icon icon="more_horiz" size={20} />
          </button>
        </div>
        <div className="relative flex w-full items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-[12px] leading-[1.2] font-normal tracking-[0.2px] text-muted-foreground">
            <span>{salary}</span>
            <span>•</span>
            <span>{experience}</span>
          </div>
          {matchStatus && (
            <span className="rounded-[4px] bg-success/10 px-[6px] py-[3px] text-[10px] leading-[1.2] font-semibold tracking-[0.2px] text-success uppercase">
              {matchStatus}
            </span>
          )}
        </div>
        <div className="relative mt-auto flex w-full items-center justify-between">
          <div className="text-[12px] leading-[1.2] font-normal tracking-[0.2px] text-icon">
            Activity Title
          </div>
          <button aria-label="Open details" className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-subtle text-icon">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </CardContent>
    </Card>
  );
}

function KanbanColumn<T>({ data, renderCard }: { data: KanbanColumnData<T>; renderCard: (item: T) => React.ReactNode }) {
  return (
    <div className="relative flex flex-col items-start gap-[8px]">
      <div className="relative flex h-[24px] items-center gap-[8px]">
        <span className="text-[14px] leading-[1.2] font-semibold tracking-[0.2px] text-foreground">
          {data.title}
        </span>
        <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-neutral-subtle px-2 text-[12px] leading-[1.2] font-medium text-muted-foreground">
          {data.count}
        </span>
      </div>
      <div className="relative z-0 flex w-[316px] flex-col items-start gap-2 overflow-hidden rounded-lg bg-neutral-subtle p-2">
        {data.items.map((item, idx) => (
          <div key={idx}>{renderCard(item)}</div>
        ))}
      </div>
    </div>
  );
}

export default function KanbanPage() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:px-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">Kanban</h1>
          <span className="text-sm text-muted-foreground">{VERSION}</span>
        </div>
        <p className="text-lg text-muted-foreground">
          Kanban columns organize items into stages. Ideal for tracking workflows, pipelines, and progress.
        </p>
      </div>

      <Tabs defaultValue="examples" className="space-y-8">
        <TabsList>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
        </TabsList>

        <TabsContent value="examples" className="space-y-8">
          <ComponentPreview title="Job Applications Column">
            <div className="flex justify-center p-4">
              <KanbanColumn
                data={applicationsColumnData}
                renderCard={(app) => <ApplicationCard {...app} />}
              />
            </div>
          </ComponentPreview>

          <ComponentPreview title="Candidates Column (Profile Cards)">
            <div className="flex justify-center p-4">
              <KanbanColumn
                data={candidatesColumnData}
                renderCard={(candidate) => <CandidateCard {...candidate} />}
              />
            </div>
          </ComponentPreview>

          <CodeBlock
            code={`// Fetch kanban data from API
const [columns, setColumns] = useState<KanbanColumnData<Application>[]>([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchKanban = async () => {
    const res = await fetch("/api/kanban/applications");
    const data = await res.json();
    setColumns(data.columns);
    setLoading(false);
  };
  fetchKanban();
}, []);

// KanbanColumn Component
function KanbanColumn<T>({ 
  data, 
  renderCard 
}: { 
  data: KanbanColumnData<T>; 
  renderCard: (item: T) => React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold">{data.title}</span>
        <span className="rounded-full bg-neutral-100 px-2 text-xs">
          {data.count}
        </span>
      </div>
      <div className="flex flex-col gap-2 rounded-lg bg-neutral-100 p-2">
        {data.items.map((item) => renderCard(item))}
      </div>
    </div>
  );
}

// Usage
{loading ? <Skeleton /> : (
  columns.map((column) => (
    <KanbanColumn
      key={column.id}
      data={column}
      renderCard={(app) => <ApplicationCard {...app} />}
    />
  ))
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
                    <li>Use for workflow visualization (job pipelines, project stages)</li>
                    <li>Show clear status indicators on cards</li>
                    <li>Keep column count manageable (4-6 max)</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-red-600">Don&apos;t</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Overload cards with too much information</li>
                    <li>Use for simple lists without stages</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="api" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">KanbanColumnData&lt;T&gt;</h2>
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
                    <td className="py-3">Unique column identifier</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">title</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Column header text</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">count</td>
                    <td className="py-3 font-mono">number</td>
                    <td className="py-3">Number of items in column</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">items</td>
                    <td className="py-3 font-mono">T[]</td>
                    <td className="py-3">Array of card data objects</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Application Interface</h2>
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
                    <td className="py-3">Unique application identifier</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">company</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Company name</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">position</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Job position title</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">salary</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Salary range</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">experience</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Experience requirement</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">status</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">FULL-TIME, PART-TIME, CONTRACT, etc.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">postedTime</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Posted time text</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Candidate Interface</h2>
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
                    <td className="py-3">Unique candidate identifier</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">name</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Candidate full name</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">role</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Job role/title</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">avatar</td>
                    <td className="py-3 font-mono">string?</td>
                    <td className="py-3">Avatar image URL (optional)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">salary</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Salary expectation</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">experience</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">Years of experience</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">matchStatus</td>
                    <td className="py-3 font-mono">string?</td>
                    <td className="py-3">Match percentage (optional)</td>
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
