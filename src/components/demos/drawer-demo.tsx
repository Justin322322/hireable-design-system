"use client";

import * as React from "react";
import {
  Badge,
  Button,
  Card,
  CardContent,
  Icon,
  Input,
  Label,
  RadioCard,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  FieldNote,
} from "@/components/ui";

import { 
  CodeBlock, 
  ComponentPreview,
  ComponentsTable,
  InterfaceTable 
} from "@/components/docs";
import { VERSION } from "@/lib/version";
import {
  drawerComponents,
  candidateProfileInterface,
  aiMatchInterface,
  educationInterface,
  certificateInterface,
} from "@/data/api/drawer";

// Import drawer patterns
import { 
  CandidateProfileDrawer,
  CreateObjectiveDrawer,
  type CandidateProfile 
} from "@/patterns/drawers";

// Import JSON data
import drawerData from "@/data/drawer.json";

const candidateData = drawerData.candidateProfile as CandidateProfile;

// ============================================================================
// STATIC PREVIEW COMPONENTS (for documentation only)
// ============================================================================

const DraggableListItem: React.FC<{ title: string; badgeText?: string }> = ({ title, badgeText }) => (
  <div className="flex flex-row items-center p-1 gap-6 w-full bg-background rounded hover:bg-neutral-50 cursor-grab transition-colors group">
    <div className="flex flex-row items-center gap-2 flex-1">
      <Icon icon="drag_indicator" size={20} className="text-muted-foreground group-hover:text-foreground shrink-0" />
      <div className="flex flex-row items-center gap-2.5 flex-1 py-2 px-2 rounded">
        <span className="text-sm leading-[120%] tracking-[0.2px] text-foreground">
          {title}
        </span>
        {badgeText && (
          <Badge variant="default" className="px-2 py-0.5 text-xs bg-neutral-100 text-muted-foreground rounded-full font-normal">
            {badgeText}
          </Badge>
        )}
      </div>
    </div>
  </div>
);

const KeyResultsProgress: React.FC<{ current: number; total: number }> = ({ current, total }) => (
  <div className="flex flex-row items-center gap-3">
    <Icon icon="account_tree" size={20} className="text-muted-foreground" />
    <span className="font-semibold text-sm leading-[120%] tracking-[0.2px] text-muted-foreground">
      Key Results
    </span>
    <span className="text-sm leading-[120%] tracking-[0.2px] text-muted-foreground">
      {current} / {total}
    </span>
    <div className="w-[120px] h-2 bg-neutral-100 rounded-full overflow-hidden">
      <div 
        className="h-full bg-client rounded-full" 
        style={{ width: `${(current / total) * 100}%` }}
      />
    </div>
  </div>
);

interface CreateObjectiveDrawerPreviewProps {
  selectedMethod?: "automatic" | "manual" | null;
}

const CreateObjectiveDrawerPreview: React.FC<CreateObjectiveDrawerPreviewProps> = ({ 
  selectedMethod = null 
}) => (
  <div className="relative w-full max-w-[800px] h-auto min-h-[700px] bg-background border border-neutral-200 rounded-lg shadow-lg overflow-hidden flex flex-col">
    <div className="box-border flex flex-row justify-between items-start px-6 py-4 w-full h-16 border-b border-neutral-300 shrink-0">
      <span className="font-semibold text-xl leading-[150%] tracking-[0.4px] text-foreground">
        Create Objective
      </span>
      <Button variant="ghost" size="icon" className="size-8">
        <Icon icon="close" size={24} className="text-muted-foreground" />
      </Button>
    </div>

    <div className="flex flex-col items-start p-4 gap-8 flex-1 overflow-y-auto">
      <Input size="lg" placeholder="Write objective title" className="w-full h-14" />

      <div className="flex flex-col items-start gap-2 w-full">
        <Label className="font-semibold text-sm leading-[120%] tracking-[0.2px] text-foreground">
          Description
        </Label>
        <Textarea placeholder="Write description here" className="w-full min-h-[131px]" />
      </div>

      <div className="flex flex-col items-start gap-6 w-full">
        <div className="flex flex-col items-start gap-4 w-full">
          <Label className="font-semibold text-sm leading-[120%] tracking-[0.2px] text-foreground">
            Update method
          </Label>
          
          <div className="flex flex-row items-center gap-4 w-full">
            <RadioCard
              value="automatic"
              title="Automatic"
              description="Automatically track the progress of your objective from connected Key results"
              selected={selectedMethod === "automatic"}
            />
            <RadioCard
              value="manual"
              title="Manual"
              description="Manually track the progress of your objective from the current to target value."
              selected={selectedMethod === "manual"}
            />
          </div>
        </div>

        {selectedMethod === "automatic" && (
          <div className="flex flex-col items-start gap-4 w-full">
            <KeyResultsProgress current={1} total={3} />
            
            <div className="flex flex-col gap-1 w-full">
              <DraggableListItem title="Increase quarterly sales by 20%" badgeText="Percent" />
              <DraggableListItem title="Complete user research interviews" badgeText="Number" />
            </div>
            
            <Button 
              variant="secondary"
              size="md"
              className="gap-2 bg-[#CCEDFF] hover:bg-[#B8E4FF] text-[#006593]"
            >
              <Icon icon="add" size={14} />
              Add Key result
            </Button>
          </div>
        )}

        {selectedMethod === "manual" && (
          <div className="flex flex-row items-start gap-4 w-full">
            <div className="flex flex-col items-start gap-2 flex-1">
              <Label className="font-semibold text-sm leading-[120%] tracking-[0.2px] text-foreground">
                Unit type
              </Label>
              <Select defaultValue="percent">
                <SelectTrigger className="h-11">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="percent">Percent</SelectItem>
                  <SelectItem value="number">Number</SelectItem>
                  <SelectItem value="currency">Currency</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col justify-center items-center self-stretch pt-[25px]">
              <Separator className="w-4" />
            </div>

            <div className="flex flex-col items-start gap-2 flex-1">
              <Label className="font-semibold text-sm leading-[120%] tracking-[0.2px] text-foreground">
                Current value
              </Label>
              <Input placeholder="0" className="w-full h-11" />
            </div>

            <div className="flex flex-col items-start gap-2 flex-1">
              <Label className="font-semibold text-sm leading-[120%] tracking-[0.2px] text-foreground">
                Target value
              </Label>
              <Input placeholder="100" className="w-full h-11" />
            </div>
          </div>
        )}

        {selectedMethod !== "manual" && (
          <FieldNote variant="info">
            If your objective is not measurable (e.g. qualitative outcomes or binary tasks), you may skip selecting a measurement type. The goal will be tracked using status updates only (Not Started, In Progress, Completed).
          </FieldNote>
        )}
      </div>
    </div>

    <div className="flex flex-row justify-end items-center px-6 py-4 gap-3 w-full border-t border-neutral-200 bg-background shrink-0">
      <Button variant="outline" className="border-neutral-300">
        Cancel
      </Button>
      <Button className="bg-client hover:bg-client-hover text-white font-medium">
        Save objective
      </Button>
    </div>
  </div>
);

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function DrawerPage() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:px-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">Drawer</h1>
          <span className="text-sm text-muted-foreground">{VERSION}</span>
        </div>
        <p className="text-lg text-muted-foreground">
          A panel that slides in from the right side of the screen. Built with Radix UI and CSS animations.
        </p>
      </div>

      <Tabs defaultValue="examples" className="space-y-8">
        <TabsList>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
        </TabsList>

        <TabsContent value="examples" className="space-y-8">
          {/* Interactive Candidate Profile Drawer */}
          <ComponentPreview title="Candidate Profile Drawer">
            <div className="flex flex-col items-center gap-3">
              <p className="text-sm text-muted-foreground">
                Click the card below to open the drawer
              </p>
              <CandidateProfileDrawer data={candidateData} />
            </div>
          </ComponentPreview>

          <CodeBlock
            code={`import { CandidateProfileDrawer } from "@/patterns/drawers";

// Candidate Profile Drawer Example
export function CandidateProfileDrawerExample({ candidateId }: { candidateId: string }) {
  const [candidate, setCandidate] = useState<CandidateProfile | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchCandidate = async (id: string) => {
    setLoading(true);
    const res = await fetch(\`/api/candidates/\${id}\`);
    const data = await res.json();
    setCandidate(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCandidate(candidateId);
  }, [candidateId]);

  if (loading) return <LoadingSpinner />;
  if (!candidate) return null;

  return <CandidateProfileDrawer data={candidate} />;
}`}
            language="tsx"
          />

          {/* Interactive Create Objective Drawer */}
          <ComponentPreview title="Create Objective Drawer (Interactive)">
            <div className="flex flex-col items-center gap-3">
              <p className="text-sm text-muted-foreground">
                Click the button below to open the Create Objective drawer
              </p>
              <CreateObjectiveDrawer />
            </div>
          </ComponentPreview>

          <ComponentPreview title="Create Objective Drawer - Default">
            <div className="flex flex-col items-center gap-3">
              <p className="text-sm text-muted-foreground">
                Default state with no update method selected. Shows input fields, radio cards, and info field note.
              </p>
              <CreateObjectiveDrawerPreview />
            </div>
          </ComponentPreview>

          <ComponentPreview title="Create Objective Drawer - Automatic Selected">
            <div className="flex flex-col items-center gap-3">
              <p className="text-sm text-muted-foreground">
                Automatic update method selected. Shows Key Results section with progress bar and draggable list items.
              </p>
              <CreateObjectiveDrawerPreview selectedMethod="automatic" />
            </div>
          </ComponentPreview>

          <ComponentPreview title="Create Objective Drawer - Manual Selected">
            <div className="flex flex-col items-center gap-3">
              <p className="text-sm text-muted-foreground">
                Manual update method selected. Shows Unit type dropdown, Current value, and Target value input fields.
              </p>
              <CreateObjectiveDrawerPreview selectedMethod="manual" />
            </div>
          </ComponentPreview>

          <CodeBlock
            code={`import { CreateObjectiveDrawer } from "@/patterns/drawers";

// Create Objective Drawer Example
export function CreateObjectiveDrawerExample() {
  const handleSave = (data) => {
    console.log("Saving objective:", data);
    // Handle save logic
  };

  return (
    <CreateObjectiveDrawer onSave={handleSave}>
      <Button>Create New Objective</Button>
    </CreateObjectiveDrawer>
  );
}`}
            language="tsx"
          />
        </TabsContent>

        <TabsContent value="usage" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Guidelines</h2>
            <Card>
              <CardContent className="pt-6 text-muted-foreground">
                <ul className="list-disc list-inside space-y-2">
                  <li>Slides in from the right edge, creating a side-panel experience.</li>
                  <li>Use for secondary tasks or detailed views that require focus.</li>
                  <li>Maintains context while providing deep-dive information.</li>
                  <li>Uses the system&apos;s standard CSS animations for performance.</li>
                </ul>
              </CardContent>
            </Card>
          </section>
        </TabsContent>

        <TabsContent value="api" className="space-y-8">
          <ComponentsTable title="Drawer Components" components={drawerComponents} />
          <InterfaceTable title="CandidateProfile Interface" properties={candidateProfileInterface} />
          <InterfaceTable title="AIMatch Interface" properties={aiMatchInterface} />
          <InterfaceTable title="Education Interface" properties={educationInterface} />
          <InterfaceTable title="Certificate Interface" properties={certificateInterface} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
