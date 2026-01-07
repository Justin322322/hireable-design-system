"use client";

import * as React from "react";
import { useState } from "react";
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
  Switch,
  Textarea,
  VisuallyHidden,
} from "@/components/ui";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { cn } from "@/lib/utils";
import { type KeyResult } from "@/types/api-contracts";

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export const defaultKeyResults: KeyResult[] = [
  { id: "kr-1", title: "Increase quarterly sales by 20%", badgeText: "Percent" },
  { id: "kr-2", title: "Complete user research interviews", badgeText: "Number" },
];

// ============================================================================
// COMPONENTS
// ============================================================================

const SortableKeyResultItem: React.FC<{ id: string; title: string; badgeText?: string }> = ({ 
  id, 
  title, 
  badgeText 
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: transform ? `translate3d(0, ${transform.y}px, 0)` : undefined,
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 1000 : 1,
  };

  return (
    <div 
      ref={setNodeRef} 
      style={style}
      className={cn(
        "flex flex-row items-center p-1 gap-6 w-full bg-background rounded hover:bg-neutral-50 transition-colors group",
        isDragging && "shadow-lg bg-white"
      )}
    >
      <div className="flex flex-row items-center gap-2 flex-1">
        <button
          {...attributes}
          {...listeners}
          className="flex items-center justify-center cursor-grab active:cursor-grabbing touch-none p-1"
        >
          <Icon icon="drag_indicator" size={20} className="text-muted-foreground group-hover:text-foreground" />
        </button>
        <div className="flex flex-row items-center gap-2.5 flex-1">
          <span className="text-sm leading-normal tracking-[0.2px] text-foreground">
            {title}
          </span>
          {badgeText && (
            <Badge variant="default" hasBorder className="px-2 py-0.5 text-xs bg-neutral-100 text-muted-foreground rounded-full font-normal">
              {badgeText}
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// MAIN DRAWER COMPONENT
// ============================================================================

export interface CreateObjectiveDrawerProps {
  children?: React.ReactNode;
  onSave?: (data: {
    title: string;
    description: string;
    updateMethod: "automatic" | "manual" | null;
    keyResults?: KeyResult[];
    unitType?: string;
    currentValue?: string;
    targetValue?: string;
  }) => void;
}

export function CreateObjectiveDrawer({ children }: CreateObjectiveDrawerProps) {
  const [updateMethod, setUpdateMethod] = useState<"automatic" | "manual" | null>(null);
  const [keyResults, setKeyResults] = useState<KeyResult[]>(defaultKeyResults);
  const [addOperatorTargets, setAddOperatorTargets] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    
    if (over && active.id !== over.id) {
      setKeyResults((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const handleAddKeyResult = () => {
    const newId = `kr-${Date.now()}`;
    setKeyResults([...keyResults, { id: newId, title: "New key result", badgeText: "Percent" }]);
  };

  return (
    <Drawer onOpenChange={(open) => !open && setUpdateMethod(null)}>
      <DrawerTrigger asChild>
        {children || <Button>Create Objective</Button>}
      </DrawerTrigger>
      <DrawerContent className="sm:max-w-[800px] p-0" showCloseButton={false}>
        <VisuallyHidden>
          <DrawerTitle>Create Objective</DrawerTitle>
        </VisuallyHidden>

        <div className="flex flex-col h-full bg-background overflow-hidden">
          {/* Header */}
          <div className="box-border flex flex-row justify-between items-start px-6 py-4 w-full h-16 border-b border-neutral-300 shrink-0">
            <span className="font-semibold text-xl leading-[150%] tracking-[0.4px] text-foreground">
              Create Objective
            </span>
            <DrawerClose asChild>
              <button className="flex items-center justify-center p-1 w-8 h-8 bg-background rounded-full hover:bg-muted transition-colors">
                <Icon icon="close" size={24} className="text-muted-foreground" />
              </button>
            </DrawerClose>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 w-full overflow-y-auto">
            <div className="flex flex-col items-start p-4 gap-8">
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
                    selected={updateMethod === "automatic"}
                    onSelect={() => setUpdateMethod("automatic")}
                  />
                  <RadioCard
                    value="manual"
                    title="Manual"
                    description="Manually track the progress of your objective from the current to target value."
                    selected={updateMethod === "manual"}
                    onSelect={() => setUpdateMethod("manual")}
                  />
                </div>
              </div>

              {updateMethod === "automatic" && (
                <div className="flex flex-col items-start gap-4 w-full">
                  <ProgressIndicator current={keyResults.length} total={3} label="Key Results" />
                  <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                  >
                    <SortableContext
                      items={keyResults.map((kr) => kr.id)}
                      strategy={verticalListSortingStrategy}
                    >
                      <div className="flex flex-col gap-1 w-full">
                        {keyResults.map((keyResult) => (
                          <SortableKeyResultItem
                            key={keyResult.id}
                            id={keyResult.id}
                            title={keyResult.title}
                            badgeText={keyResult.badgeText}
                          />
                        ))}
                      </div>
                    </SortableContext>
                  </DndContext>
                  <Button 
                    variant="secondary"
                    size="md"
                    className="gap-2 bg-[#CCEDFF] hover:bg-[#B8E4FF] text-[#006593]"
                    onClick={handleAddKeyResult}
                  >
                    <Icon icon="add" size={14} />
                    Add Key result
                  </Button>
                </div>
              )}

              {updateMethod === "manual" && (
                <div className="flex flex-col items-start gap-4 w-full">
                  <div className="flex flex-row items-start gap-2 w-full">
                    <div className="flex flex-col items-start gap-2 w-[180px] shrink-0">
                      <Label className="font-semibold text-sm leading-[120%] tracking-[0.2px] text-foreground">
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
                      <Label className="font-semibold text-sm leading-[120%] tracking-[0.2px] text-foreground">
                        Measurement
                      </Label>
                      <Select defaultValue="number">
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

                    <div className="flex flex-col items-start gap-2 flex-1">
                      <Label className="font-semibold text-sm leading-[120%] tracking-[0.2px] text-foreground">
                        Starting value
                      </Label>
                      <Input placeholder="0" className="w-full h-11" />
                    </div>

                    <div className="flex flex-col items-start gap-2 flex-1">
                      <Label className="font-semibold text-sm leading-[120%] tracking-[0.2px] text-foreground">
                        Target value
                      </Label>
                      <Input placeholder="0" className="w-full h-11" />
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Switch
                      checked={addOperatorTargets}
                      onCheckedChange={setAddOperatorTargets}
                    />
                    <Label className="font-normal text-sm leading-[120%] tracking-[0.2px] text-foreground cursor-pointer">
                      Add operator based targets
                    </Label>
                  </div>
                </div>
              )}

              {updateMethod && (
                <FieldNote variant="info">
                  If your objective is not measurable (e.g. qualitative outcomes or binary tasks), you may skip selecting a measurement type. The goal will be tracked using status updates only (Not Started, In Progress, Completed).
                </FieldNote>
              )}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-row justify-end items-center px-6 py-4 gap-3 w-full border-t border-neutral-200 bg-background shrink-0">
            <DrawerClose asChild>
              <Button variant="outline" className="border-neutral-300">Cancel</Button>
            </DrawerClose>
            <Button className="bg-client hover:bg-client-hover text-white font-medium">
              Save objective
            </Button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
