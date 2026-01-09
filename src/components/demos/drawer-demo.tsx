"use client";

import * as React from "react";
import {
  Button,
  Card,
  CardContent,
  DraggableListItem,
  FieldNote,
  Icon,
  IconEqual,
  IconGreater,
  IconGreaterEqual,
  IconLess,
  IconLessEqual,
  Input,
  Label,
  ProgressIndicator,
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
} from "@/components/ui";

import { 
  CodeBlock, 
  ComponentPreview,
  ComponentsTable,
  InterfaceTable,
  OnThisPageNav 
} from "@/components/docs";
import { VERSION } from "@/lib/version";
import {
  drawerComponents,
  candidateProfileInterface,
  aiMatchInterface,
  educationInterface,
  certificateInterface,
} from "@/data/api/drawer";
import { type CandidateProfile } from "@/types/api-contracts";

// Import drawer patterns
import {
  CandidateProfileDrawer,
  CreateObjectiveDrawer,
  ObjectiveViewDrawer,
} from "@/patterns/drawers";

// Import JSON data
import drawerData from "@/data/drawer.json";

const candidateData = drawerData.candidateProfile as CandidateProfile;

// Navigation items for the right sidebar
const drawerNavItems = [
  { id: "candidate-profile-drawer", label: "Candidate Profile" },
  { id: "create-objective-drawer", label: "Create Objective" },
  { id: "edit-objective-automatic", label: "Edit Objective (Auto)" },
  { id: "edit-objective-manual", label: "Edit Objective (Manual)" },
  { id: "create-key-result", label: "Create Key Result" },
  { id: "edit-key-result", label: "Edit Key Result" },
  { id: "create-task", label: "Create Task" },
  { id: "edit-task", label: "Edit Task" },
  { id: "objective-view-default", label: "View Objective (Default)" },
  { id: "objective-view-automatic", label: "View Objective (Auto)" },
  { id: "objective-view-manual", label: "View Objective (Manual)" },
  { id: "key-result-view", label: "View Key Result" },
  { id: "task-view", label: "View Task" },
  { id: "static-previews", label: "Static Previews" },
];

// ============================================================================
// STATIC PREVIEW COMPONENTS (for documentation only)
// ============================================================================

interface CreateObjectiveDrawerPreviewProps {
  selectedMethod?: "automatic" | "manual" | null;
}

const CreateObjectiveDrawerPreview: React.FC<CreateObjectiveDrawerPreviewProps> = ({ 
  selectedMethod = null 
}) => (
  <div className="relative w-full max-w-[800px] h-auto min-h-[700px] bg-background border border-neutral-200 rounded-lg shadow-lg overflow-hidden flex flex-col">
    <div className="box-border flex flex-row justify-between items-start px-6 py-4 w-full h-16 border-b border-neutral-300 shrink-0">
      <span className="font-semibold text-xl leading-normal tracking-wide text-foreground">
        Create Objective
      </span>
      <Button variant="ghost" size="icon" className="size-8">
        <Icon icon="close" size={24} className="text-muted-foreground" />
      </Button>
    </div>

    <div className="flex flex-col items-start p-4 gap-8 flex-1 overflow-y-auto">
      <Input size="lg" placeholder="Write objective title" className="w-full h-14" />

      <div className="flex flex-col items-start gap-2 w-full">
        <Label className="font-semibold text-sm leading-tight tracking-normal text-foreground">
          Description
        </Label>
        <Textarea placeholder="Write description here" className="w-full min-h-[131px]" />
      </div>

      <div className="flex flex-col items-start gap-6 w-full">
        <div className="flex flex-col items-start gap-4 w-full">
          <Label className="font-semibold text-sm leading-tight tracking-normal text-foreground">
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
            <ProgressIndicator current={1} total={3} label="Key Results" />
            
            <div className="flex flex-col gap-1 w-full">
              <DraggableListItem title="Increase quarterly sales by 20%" badgeText="Percent" />
              <DraggableListItem title="Complete user research interviews" badgeText="Number" />
            </div>
            
            <Button 
              variant="secondary"
              size="md"
              className="gap-2"
            >
              <Icon icon="add" size={14} />
              Add Key result
            </Button>
          </div>
        )}

        {selectedMethod === "manual" && (
          <div className="flex flex-col items-start gap-4 w-full">
            <div className="flex flex-row items-start gap-2 w-full">
              <div className="flex flex-col items-start gap-2 w-[180px] shrink-0">
                <Label className="font-semibold text-sm leading-tight tracking-normal text-foreground">
                  Operator
                </Label>
                <Select defaultValue="gte">
                  <SelectTrigger className="h-11 w-full">
                    <SelectValue className="truncate" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gte">
                      <div className="flex items-center gap-3">
                        <IconGreaterEqual className="w-4 h-4 text-foreground shrink-0" />
                        <span className="truncate">Greater than or equal to</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="lte">
                      <div className="flex items-center gap-3">
                        <IconLessEqual className="w-4 h-4 text-foreground shrink-0" />
                        <span className="truncate">Less than or equal to</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="eq">
                      <div className="flex items-center gap-3">
                        <IconEqual className="w-4 h-4 text-foreground shrink-0" />
                        <span className="truncate">Equal to</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="gt">
                      <div className="flex items-center gap-3">
                        <IconGreater className="w-4 h-4 text-foreground shrink-0" />
                        <span className="truncate">Greater than</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="lt">
                      <div className="flex items-center gap-3">
                        <IconLess className="w-4 h-4 text-foreground shrink-0" />
                        <span className="truncate">Less than</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col items-start gap-2 flex-1">
                <Label className="font-semibold text-sm leading-tight tracking-normal text-foreground">
                  Measurement
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
                <Label className="font-semibold text-sm leading-tight tracking-normal text-foreground">
                  Starting value
                </Label>
                <Input placeholder="0" className="w-full h-11" />
              </div>

              <div className="flex flex-col items-start gap-2 flex-1">
                <Label className="font-semibold text-sm leading-tight tracking-normal text-foreground">
                  Target value
                </Label>
                <Input placeholder="100" className="w-full h-11" />
              </div>
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
    <div className="container max-w-6xl py-12 px-4 md:px-8">
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

        <TabsContent value="examples" className="space-y-0">
          <div className="flex gap-8 items-start">
            {/* Main Content Area */}
            <div className="flex-1 min-w-0 space-y-8">
          {/* Interactive Candidate Profile Drawer */}
          <div id="candidate-profile-drawer" className="scroll-mt-20 space-y-4">
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
          </div>

          {/* Interactive Create Objective Drawer */}
          <div id="create-objective-drawer" className="scroll-mt-20 space-y-4">
          <ComponentPreview title="Create Objective Drawer (Interactive)">
            <div className="flex flex-col items-center gap-3">
              <p className="text-sm text-muted-foreground">
                Click the button below to open the Create Objective drawer
              </p>
              <CreateObjectiveDrawer />
            </div>
          </ComponentPreview>
          </div>

          {/* Edit Objective Drawer - Automatic */}
          <div id="edit-objective-automatic" className="scroll-mt-20 space-y-4">
          <ComponentPreview title="Edit Objective Drawer - Automatic Selected">
            <div className="flex flex-col items-center gap-3">
              <p className="text-sm text-muted-foreground">
                Edit mode with Automatic update method pre-selected. Use for editing existing objectives.
              </p>
              <CreateObjectiveDrawer 
                mode="edit" 
                defaultUpdateMethod="automatic"
                initialTitle="Increase Q1 Revenue"
                initialDescription="Focus on expanding customer base and upselling existing accounts."
              >
                <Button variant="outline">Edit Objective (Automatic)</Button>
              </CreateObjectiveDrawer>
            </div>
          </ComponentPreview>
          </div>

          {/* Edit Objective Drawer - Manual */}
          <div id="edit-objective-manual" className="scroll-mt-20 space-y-4">
          <ComponentPreview title="Edit Objective Drawer - Manual Selected">
            <div className="flex flex-col items-center gap-3">
              <p className="text-sm text-muted-foreground">
                Edit mode with Manual update method pre-selected. Shows measurement fields.
              </p>
              <CreateObjectiveDrawer 
                mode="edit" 
                defaultUpdateMethod="manual"
                initialTitle="Complete Training Program"
                initialDescription="Finish all required compliance training modules."
              >
                <Button variant="outline">Edit Objective (Manual)</Button>
              </CreateObjectiveDrawer>
            </div>
          </ComponentPreview>
          </div>

          {/* Key Result Drawer */}
          <div id="create-key-result" className="scroll-mt-20 space-y-4">
          <ComponentPreview title="Create Key Result Drawer">
            <div className="flex flex-col items-center gap-3">
              <p className="text-sm text-muted-foreground">
                Same drawer structure for creating Key Results. Uses entityType=&quot;key-result&quot;.
              </p>
              <CreateObjectiveDrawer entityType="key-result">
                <Button variant="outline">Create Key Result</Button>
              </CreateObjectiveDrawer>
            </div>
          </ComponentPreview>
          </div>

          {/* Edit Key Result Drawer */}
          <div id="edit-key-result" className="scroll-mt-20 space-y-4">
          <ComponentPreview title="Edit Key Result Drawer - Automatic">
            <div className="flex flex-col items-center gap-3">
              <p className="text-sm text-muted-foreground">
                Edit mode for Key Results with Automatic tracking.
              </p>
              <CreateObjectiveDrawer 
                mode="edit"
                entityType="key-result"
                defaultUpdateMethod="automatic"
                initialTitle="Increase quarterly sales by 20%"
                initialDescription="Track sales performance against Q1 targets."
              >
                <Button variant="outline">Edit Key Result</Button>
              </CreateObjectiveDrawer>
            </div>
          </ComponentPreview>
          </div>

          {/* Task Drawer */}
          <div id="create-task" className="scroll-mt-20 space-y-4">
          <ComponentPreview title="Create Task Drawer">
            <div className="flex flex-col items-center gap-3">
              <p className="text-sm text-muted-foreground">
                Same drawer structure for creating Tasks. Uses entityType=&quot;task&quot;.
              </p>
              <CreateObjectiveDrawer entityType="task">
                <Button variant="outline">Create Task</Button>
              </CreateObjectiveDrawer>
            </div>
          </ComponentPreview>
          </div>

          {/* Edit Task Drawer */}
          <div id="edit-task" className="scroll-mt-20 space-y-4">
          <ComponentPreview title="Edit Task Drawer - Manual">
            <div className="flex flex-col items-center gap-3">
              <p className="text-sm text-muted-foreground">
                Edit mode for Tasks with Manual tracking.
              </p>
              <CreateObjectiveDrawer 
                mode="edit"
                entityType="task"
                defaultUpdateMethod="manual"
                initialTitle="Complete user research interviews"
                initialDescription="Conduct 10 user interviews for the new feature."
              >
                <Button variant="outline">Edit Task</Button>
              </CreateObjectiveDrawer>
            </div>
          </ComponentPreview>
          </div>

          {/* Talent View - Objective */}
          <div id="objective-view-default" className="scroll-mt-20 space-y-4">
          <ComponentPreview title="Objective Talent View - Default">
            <div className="flex flex-col items-center gap-3">
              <p className="text-sm text-muted-foreground">
                Read-only view for Objectives with Default update method. Shows title, description, and info note.
              </p>
              <ObjectiveViewDrawer 
                entityType="objective"
                data={{
                  title: "Increase Q1 Revenue by 25%",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                  updateMethod: "default"
                }}
              >
                <Button variant="outline">View Objective (Default)</Button>
              </ObjectiveViewDrawer>
            </div>
          </ComponentPreview>
          </div>

          {/* Talent View - Objective Automatic */}
          <div id="objective-view-automatic" className="scroll-mt-20 space-y-4">
          <ComponentPreview title="Objective Talent View - Automatic">
            <div className="flex flex-col items-center gap-3">
              <p className="text-sm text-muted-foreground">
                Automatic update method shows Key Results section below the description.
              </p>
              <ObjectiveViewDrawer 
                entityType="objective"
                data={{
                  title: "Increase Q1 Revenue by 25%",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                  updateMethod: "automatic",
                  keyResults: [
                    { id: "kr-1", title: "Key result title", updateMethod: "default" },
                    { id: "kr-2", title: "Key result title", updateMethod: "automatic", progress: "3 / 3" },
                    { id: "kr-3", title: "Key result title", updateMethod: "manual" },
                  ]
                }}
              >
                <Button variant="outline">View Objective (Automatic)</Button>
              </ObjectiveViewDrawer>
            </div>
          </ComponentPreview>
          </div>

          {/* Talent View - Objective Manual */}
          <div id="objective-view-manual" className="scroll-mt-20 space-y-4">
          <ComponentPreview title="Objective Talent View - Manual">
            <div className="flex flex-col items-center gap-3">
              <p className="text-sm text-muted-foreground">
                Manual update method shows measurement fields (operator, measurement, starting/target values).
              </p>
              <ObjectiveViewDrawer 
                entityType="objective"
                data={{
                  title: "Increase Q1 Revenue by 25%",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  updateMethod: "manual",
                  measurement: "Number",
                  startingValue: "0",
                  targetValue: "100"
                }}
              >
                <Button variant="outline">View Objective (Manual)</Button>
              </ObjectiveViewDrawer>
            </div>
          </ComponentPreview>
          </div>

          {/* Talent View - Key Result */}
          <div id="key-result-view" className="scroll-mt-20 space-y-4">
          <ComponentPreview title="Key Result Talent View - Automatic">
            <div className="flex flex-col items-center gap-3">
              <p className="text-sm text-muted-foreground">
                Read-only view for Key Results with breadcrumb and Tasks section.
              </p>
              <ObjectiveViewDrawer 
                entityType="key-result"
                data={{
                  title: "Key result title",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                  updateMethod: "automatic",
                  parentTitle: "Objective title",
                  tasks: [
                    { id: "task-1", title: "Task title", updateMethod: "default" },
                    { id: "task-2", title: "Task title", updateMethod: "default" },
                    { id: "task-3", title: "Task title", updateMethod: "default" },
                  ]
                }}
              >
                <Button variant="outline">View Key Result (Automatic)</Button>
              </ObjectiveViewDrawer>
            </div>
          </ComponentPreview>
          </div>

          {/* Talent View - Task */}
          <div id="task-view" className="scroll-mt-20 space-y-4">
          <ComponentPreview title="Task Talent View">
            <div className="flex flex-col items-center gap-3">
              <p className="text-sm text-muted-foreground">
                Read-only view for Tasks with breadcrumb.
              </p>
              <ObjectiveViewDrawer 
                entityType="task"
                data={{
                  title: "Task title",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  updateMethod: "default",
                  parentTitle: "Key result title"
                }}
              >
                <Button variant="outline">View Task</Button>
              </ObjectiveViewDrawer>
            </div>
          </ComponentPreview>
          </div>

          {/* Static Previews */}
          <div id="static-previews" className="scroll-mt-20 space-y-4">
          <h2 className="text-xl font-semibold pt-4">Static Previews</h2>
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
            code={`import { CreateObjectiveDrawer, ObjectiveViewDrawer } from "@/patterns/drawers";

// Create Objective Drawer
export function CreateObjectiveExample() {
  return (
    <CreateObjectiveDrawer onSave={handleSave}>
      <Button>Create New Objective</Button>
    </CreateObjectiveDrawer>
  );
}

// Edit Objective - Automatic Mode
export function EditObjectiveAutomaticExample({ objective }) {
  return (
    <CreateObjectiveDrawer 
      mode="edit"
      defaultUpdateMethod="automatic"
      initialTitle={objective.title}
      initialDescription={objective.description}
    >
      <Button variant="outline">Edit Objective</Button>
    </CreateObjectiveDrawer>
  );
}

// Create Key Result Drawer
export function CreateKeyResultExample() {
  return (
    <CreateObjectiveDrawer entityType="key-result">
      <Button>Create Key Result</Button>
    </CreateObjectiveDrawer>
  );
}

// Create Task Drawer
export function CreateTaskExample() {
  return (
    <CreateObjectiveDrawer entityType="task">
      <Button>Create Task</Button>
    </CreateObjectiveDrawer>
  );
}

// Objective Talent View (Read-only)
export function ObjectiveTalentViewExample({ objective }) {
  return (
    <ObjectiveViewDrawer 
      entityType="objective"
      data={{
        title: objective.title,
        description: objective.description,
        status: objective.status // "default" | "in-progress" | "completed" | "at-risk"
      }}
    >
      <Button variant="outline">View Objective</Button>
    </ObjectiveViewDrawer>
  );
}

// Key Result Talent View (Read-only)
export function KeyResultTalentViewExample({ keyResult }) {
  return (
    <ObjectiveViewDrawer 
      entityType="key-result"
      data={{
        title: keyResult.title,
        description: keyResult.description,
        status: keyResult.status
      }}
    >
      <Button variant="outline">View Key Result</Button>
    </ObjectiveViewDrawer>
  );
}

// Task Talent View (Read-only)
export function TaskTalentViewExample({ task }) {
  return (
    <ObjectiveViewDrawer 
      entityType="task"
      data={{
        title: task.title,
        description: task.description,
        status: task.status
      }}
    >
      <Button variant="outline">View Task</Button>
    </ObjectiveViewDrawer>
  );
}`}
            language="tsx"
          />
          </div>
            </div>
            {/* Right Sidebar Navigation */}
            <OnThisPageNav items={drawerNavItems} />
          </div>
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
