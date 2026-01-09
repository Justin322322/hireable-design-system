"use client";

import * as React from "react";
import {
  Badge,
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
  FieldNote,
  Icon,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Switch,
  VisuallyHidden,
} from "@/components/ui";

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export type ObjectiveViewEntityType = "objective" | "key-result" | "task";
export type ObjectiveUpdateMethod = "default" | "automatic" | "manual";

export interface KeyResultItem {
  id: string;
  title: string;
  updateMethod: "default" | "automatic" | "manual";
  progress?: string; // e.g. "3 / 3" for automatic
}

export interface TaskItem {
  id: string;
  title: string;
  updateMethod?: "default" | "automatic" | "manual";
}

export interface ObjectiveViewData {
  title: string;
  description: string;
  updateMethod?: ObjectiveUpdateMethod;
  /** Parent title for breadcrumb (e.g., "Objective title" when viewing a Key Result) */
  parentTitle?: string;
  keyResults?: KeyResultItem[];
  tasks?: TaskItem[];
  // Manual fields
  measurement?: string;
  startingValue?: string;
  targetValue?: string;
}

export interface ObjectiveViewDrawerProps {
  children?: React.ReactNode;
  /** Entity type: objective, key-result, or task */
  entityType?: ObjectiveViewEntityType;
  /** Data to display */
  data: ObjectiveViewData;
}

const entityLabels: Record<ObjectiveViewEntityType, string> = {
  objective: "Objective",
  "key-result": "Key Result",
  task: "Task",
};

const updateMethodLabels: Record<ObjectiveUpdateMethod, string> = {
  default: "Default",
  automatic: "Automatic",
  manual: "Manual",
};

// ============================================================================
// DRAWER HEADER
// ============================================================================

interface ViewDrawerHeaderProps {
  title: string;
  updateMethod?: ObjectiveUpdateMethod;
}

const ViewDrawerHeader: React.FC<ViewDrawerHeaderProps> = ({ title, updateMethod = "default" }) => (
  <div className="flex flex-row justify-between items-start px-6 py-4 w-full h-16 border-b border-neutral-300 shrink-0">
    <div className="flex flex-row items-center gap-2 flex-1">
      <span className="font-semibold text-xl leading-normal tracking-wide text-foreground">
        {title}
      </span>
      <Badge className="h-6 px-2 py-2 bg-neutral-100 text-secondary-foreground text-xs font-normal rounded-full border-0">
        {updateMethodLabels[updateMethod]}
      </Badge>
    </div>
    <DrawerClose asChild>
      <button className="flex items-center justify-center p-1 w-8 h-8 bg-background rounded-full hover:bg-muted transition-colors">
        <Icon icon="close" size={24} className="text-muted-foreground" />
      </button>
    </DrawerClose>
  </div>
);

// ============================================================================
// DRAWER FOOTER
// ============================================================================

const ViewDrawerFooter: React.FC = () => (
  <div className="flex flex-row justify-end items-center px-6 py-6 gap-3 w-full border-t border-neutral-300 bg-background shrink-0">
    <DrawerClose asChild>
      <Button
        variant="outline"
        className="h-11 px-5 border-neutral-300 text-foreground font-medium text-sm capitalize shadow-none"
      >
        Close
      </Button>
    </DrawerClose>
  </div>
);

// ============================================================================
// KEY RESULT ITEM
// ============================================================================

interface KeyResultItemCardProps {
  item: KeyResultItem;
}

const KeyResultItemCard: React.FC<KeyResultItemCardProps> = ({ item }) => (
  <div className="flex items-center gap-1 px-4 py-4 w-full bg-background border border-neutral-300 rounded-lg">
    <div className="flex items-center gap-2 flex-1">
      <span className="font-semibold text-sm leading-tight tracking-normal text-foreground">
        {item.title}
      </span>
      <Badge className="h-6 px-2 py-2 bg-neutral-100 text-secondary-foreground text-xs font-normal rounded-full border-0">
        {updateMethodLabels[item.updateMethod]}
      </Badge>
      {item.updateMethod === "automatic" && item.progress && (
        <span className="text-sm leading-tight tracking-normal text-secondary-foreground">
          {item.progress}
        </span>
      )}
    </div>
  </div>
);

// ============================================================================
// KEY RESULTS SECTION
// ============================================================================

interface KeyResultsSectionProps {
  keyResults: KeyResultItem[];
}

const KeyResultsSection: React.FC<KeyResultsSectionProps> = ({ keyResults }) => (
  <div className="flex flex-col gap-4 w-full">
    <h3 className="font-semibold text-base leading-normal tracking-normal text-foreground">
      Key results
    </h3>
    <div className="flex flex-col gap-2 w-full">
      {keyResults.map((item) => (
        <KeyResultItemCard key={item.id} item={item} />
      ))}
    </div>
  </div>
);

// ============================================================================
// MANUAL INPUT SECTION (Read-only view)
// ============================================================================

interface ManualInputSectionProps {
  measurement?: string;
  startingValue?: string;
  targetValue?: string;
}

const ManualInputSection: React.FC<ManualInputSectionProps> = ({
  measurement = "Number",
  startingValue = "0",
  targetValue = "0",
}) => (
  <div className="flex flex-col gap-4 w-full">
    <div className="flex gap-2 w-full">
      <div className="flex flex-col gap-2 w-[180px] shrink-0">
        <Label className="font-semibold text-sm leading-tight tracking-normal text-neutral-300">
          Operator
        </Label>
        <Select defaultValue="gte" disabled>
          <SelectTrigger className="h-11 w-full opacity-50">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="gte">≥</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2 flex-1">
        <Label className="font-semibold text-sm leading-tight tracking-normal text-foreground">
          Measurement
        </Label>
        <Select defaultValue={measurement.toLowerCase()} disabled>
          <SelectTrigger className="h-11">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="number">Number</SelectItem>
            <SelectItem value="percent">Percent</SelectItem>
            <SelectItem value="currency">Currency</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col justify-center items-center self-stretch pt-[25px]">
        <Separator className="w-4" />
      </div>

      <div className="flex flex-col gap-2 flex-1">
        <Label className="font-semibold text-sm leading-tight tracking-normal text-foreground">
          Starting value
        </Label>
        <Input value={startingValue} disabled className="w-full h-11 opacity-70" />
      </div>

      <div className="flex flex-col gap-2 flex-1">
        <Label className="font-semibold text-sm leading-tight tracking-normal text-foreground">
          Target value
        </Label>
        <Input value={targetValue} disabled className="w-full h-11 opacity-70" />
      </div>
    </div>

    <div className="flex items-center gap-3">
      <Switch disabled />
      <Label className="font-normal text-sm leading-tight tracking-normal text-foreground">
        Add operator based targets
      </Label>
    </div>
  </div>
);

// ============================================================================
// TASK ITEM CARD
// ============================================================================

interface TaskItemCardProps {
  item: TaskItem;
}

const TaskItemCard: React.FC<TaskItemCardProps> = ({ item }) => (
  <div className="flex items-center gap-1 px-4 py-4 w-full bg-background border border-neutral-300 rounded-lg">
    <div className="flex items-center gap-2 flex-1">
      <span className="font-semibold text-sm leading-tight tracking-normal text-foreground">
        {item.title}
      </span>
      <Badge className="h-6 px-2 py-2 bg-neutral-100 text-secondary-foreground text-xs font-normal rounded-full border-0">
        {updateMethodLabels[item.updateMethod || "default"]}
      </Badge>
    </div>
  </div>
);

// ============================================================================
// TASKS SECTION
// ============================================================================

interface TasksSectionProps {
  tasks: TaskItem[];
}

const TasksSection: React.FC<TasksSectionProps> = ({ tasks }) => (
  <div className="flex flex-col gap-4 w-full">
    <h3 className="font-semibold text-base leading-normal tracking-normal text-foreground">
      Tasks
    </h3>
    <div className="flex flex-col gap-2 w-full">
      {tasks.map((task) => (
        <TaskItemCard key={task.id} item={task} />
      ))}
    </div>
  </div>
);

// ============================================================================
// MAIN DRAWER COMPONENT
// ============================================================================

export function ObjectiveViewDrawer({
  children,
  entityType = "objective",
  data,
}: ObjectiveViewDrawerProps) {
  const headerTitle = entityLabels[entityType];
  const updateMethod = data.updateMethod || "default";

  return (
    <Drawer>
      <DrawerTrigger asChild>
        {children || <Button variant="outline">View {headerTitle}</Button>}
      </DrawerTrigger>
      <DrawerContent className="sm:max-w-[800px] p-0" showCloseButton={false}>
        <VisuallyHidden>
          <DrawerTitle>{headerTitle} - {data.title}</DrawerTitle>
        </VisuallyHidden>

        <div className="flex flex-col h-full bg-background overflow-hidden">
          {/* Header */}
          <ViewDrawerHeader title={headerTitle} updateMethod={updateMethod} />

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="flex flex-col gap-6 p-6 w-full">
              {/* Breadcrumb - only for key-result and task */}
              {data.parentTitle && (entityType === "key-result" || entityType === "task") && (
                <div className="flex items-center gap-1">
                  <span className="text-sm text-secondary-foreground">{data.parentTitle}</span>
                  <Icon icon="chevron_right" size={16} className="text-secondary-foreground" />
                </div>
              )}

              {/* Title */}
              <div className="flex flex-col gap-2 w-full">
                <h2 className="font-semibold text-2xl leading-normal tracking-normal text-foreground font-sans">
                  {data.title}
                </h2>
              </div>

              {/* Description */}
              <div className="flex flex-col gap-4 w-full">
                <h3 className="font-semibold text-base leading-normal tracking-normal text-foreground">
                  Description
                </h3>
                <p className="text-sm leading-tight tracking-normal text-foreground">
                  {data.description}
                </p>
              </div>

              {/* Info Note */}
              <FieldNote variant="info">
                Progress is updated when you mark the {entityType.replace("-", " ")} as Completed after finishing it.
              </FieldNote>

              {/* Objective with Automatic: Key Results Section */}
              {entityType === "objective" && updateMethod === "automatic" && data.keyResults && data.keyResults.length > 0 && (
                <>
                  <div className="py-0">
                    <Separator className="bg-neutral-300" />
                  </div>
                  <KeyResultsSection keyResults={data.keyResults} />
                </>
              )}

              {/* Key Result with Automatic: Tasks Section */}
              {entityType === "key-result" && updateMethod === "automatic" && data.tasks && data.tasks.length > 0 && (
                <>
                  <div className="py-0">
                    <Separator className="bg-neutral-300" />
                  </div>
                  <TasksSection tasks={data.tasks} />
                </>
              )}

              {/* Manual: Input Fields Section */}
              {updateMethod === "manual" && (
                <>
                  <div className="py-0">
                    <Separator className="bg-neutral-300" />
                  </div>
                  <ManualInputSection 
                    measurement={data.measurement}
                    startingValue={data.startingValue}
                    targetValue={data.targetValue}
                  />
                </>
              )}
            </div>
          </div>

          {/* Footer */}
          <ViewDrawerFooter />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
