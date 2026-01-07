"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import {
  Button,
  Icon,
  Input,
  Label,
  Textarea,
  Badge,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  CurrencyInput,
} from "@/components/ui"

// Duration option component
interface DurationOptionProps {
  days: 30 | 60 | 90
  selected?: boolean
  onClick?: () => void
}

const durationColors = {
  30: "text-denotive-green",
  60: "text-button-primary-default",
  90: "text-[#9D4EDD]",
} as const

function DurationOption({ days, selected, onClick }: DurationOptionProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex flex-row justify-center items-center gap-2 w-[112px] h-[44px] px-4 py-3 rounded-lg border bg-white transition-colors box-border",
        selected ? "border-button-primary-default" : "border-neutral-muted hover:border-button-primary-default/50"
      )}
    >
      <Icon icon="calendar_today" size={16} className={cn(durationColors[days], "shrink-0")} />
      <span className="text-sm font-normal leading-[120%] tracking-[0.2px] text-foreground whitespace-nowrap">{days} Days</span>
    </button>
  )
}

// Objective item component
interface ObjectiveItemProps {
  title: string
  type: "default" | "automatic" | "manual"
  progress?: string
}

function ObjectiveItem({ title, type, progress }: ObjectiveItemProps) {
  return (
    <div className="flex items-center gap-1 px-6 py-4 border border-neutral-muted rounded-lg bg-white">
      <div className="flex items-center gap-2 flex-1">
        <span className="text-base font-semibold text-foreground tracking-[0.2px]">
          {title}
        </span>
        <Badge variant="default" shape="pill" size="sm">
          {type === "default" ? "Default" : type === "automatic" ? "Automatic" : "Manual"}
        </Badge>
        {progress && (
          <span className="text-sm text-muted-foreground tracking-[0.2px]">
            {progress}
          </span>
        )}
      </div>
    </div>
  )
}

// Form section types
export type CollapsibleFormType = "job-details" | "test-objectives" | "budget-duration"
export type CollapsibleFormState = "collapsed" | "expanded" | "completed"

export interface CollapsibleFormProps {
  type: CollapsibleFormType
  state?: CollapsibleFormState
  stepNumber?: number
  onToggle?: () => void
  onNext?: () => void
  className?: string
  children?: React.ReactNode
}

const formTitles: Record<CollapsibleFormType, string> = {
  "job-details": "Job Details",
  "test-objectives": "Test Objectives",
  "budget-duration": "Budget & Duration",
}

const formDescriptions: Record<CollapsibleFormType, string> = {
  "job-details": "",
  "test-objectives": "This outlines the expected outcome a candidate should achieve within the test period to demonstrate success in the role.",
  "budget-duration": "This outlines the expected outcome a candidate should achieve within the test period to demonstrate success in the role.",
}

const CollapsibleForm = React.forwardRef<HTMLDivElement, CollapsibleFormProps>(
  ({ type, state = "collapsed", stepNumber = 1, onToggle, onNext, className, children }, ref) => {
    const title = formTitles[type]
    const description = formDescriptions[type]
    const isExpanded = state === "expanded"
    const isCompleted = state === "completed"

    return (
      <div
        ref={ref}
        className={cn(
          "bg-white border border-neutral-muted rounded-lg p-8 w-full max-w-[840px]",
          className
        )}
      >
        {/* Header */}
        <div
          className={cn(
            "flex items-center gap-4",
            isExpanded && "flex-col items-start gap-2"
          )}
        >
          <div className="flex items-center gap-4 w-full">
            {/* Step completion indicator (non-interactive) */}
            <div
              className={cn(
                "size-6 rounded-full border flex items-center justify-center shrink-0 transition-colors",
                isCompleted
                  ? "bg-denotive-green border-denotive-green"
                  : "bg-white border-neutral-muted"
              )}
            >
              {isCompleted && (
                <Icon icon="check" size={20} className="text-white" />
              )}
            </div>
            <ol className="flex-1 list-decimal font-semibold text-xl text-foreground tracking-[0.4px]">
              <li className="ms-[30px]" value={stepNumber}>
                <span>{title}</span>
              </li>
            </ol>
            {/* Expand/collapse button - proper circle */}
            <button
              type="button"
              onClick={onToggle}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-background hover:bg-surface-hover transition-colors"
              aria-expanded={isExpanded}
              aria-label={isExpanded ? "Collapse section" : "Expand section"}
            >
              <Icon icon={isExpanded ? "expand_less" : "expand_more"} size={24} />
            </button>
          </div>
          {isExpanded && description && (
            <p className="text-base text-muted-foreground tracking-[0.2px] w-full">
              {description}
            </p>
          )}
        </div>

        {/* Content */}
        {isExpanded && (
          <div className="mt-10 flex flex-col gap-10">
            {children || <DefaultFormContent type={type} />}

            {/* CTA */}
            <div className="flex justify-end">
              <Button onClick={onNext}>Next</Button>
            </div>
          </div>
        )}
      </div>
    )
  }
)
CollapsibleForm.displayName = "CollapsibleForm"

// Default form content based on type
function DefaultFormContent({ type }: { type: CollapsibleFormType }) {
  const [selectedDuration, setSelectedDuration] = React.useState<30 | 60 | 90>(30)
  const [minBudget, setMinBudget] = React.useState("")
  const [maxBudget, setMaxBudget] = React.useState("")

  if (type === "job-details") {
    return (
      <div className="flex flex-col gap-10">
        {/* Job Role */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold text-foreground tracking-[0.4px]">
            Job Role
          </h3>
          <Input placeholder="Enter job role" />
        </div>

        {/* Role Description */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold text-foreground tracking-[0.4px]">
            Role Description
          </h3>
          <Textarea placeholder="Write description here" />
        </div>

        {/* Skills */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold text-foreground tracking-[0.4px]">
            Skills
          </h3>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Search skill" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="react">React</SelectItem>
              <SelectItem value="typescript">TypeScript</SelectItem>
              <SelectItem value="nodejs">Node.js</SelectItem>
              <SelectItem value="python">Python</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-sm text-muted-foreground tracking-[0.2px]">
            Add skills required for this role
          </p>
        </div>

        {/* Years of Experience */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold text-foreground tracking-[0.4px]">
            Years of Experience
          </h3>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select experience level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-1">0-1 years</SelectItem>
              <SelectItem value="1-3">1-3 years</SelectItem>
              <SelectItem value="3-5">3-5 years</SelectItem>
              <SelectItem value="5-10">5-10 years</SelectItem>
              <SelectItem value="10+">10+ years</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    )
  }

  if (type === "test-objectives") {
    return (
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <ObjectiveItem title="Objective title" type="default" />
          <ObjectiveItem title="Objective title" type="automatic" progress="3 / 3" />
          <ObjectiveItem title="Objective title" type="manual" />
        </div>
        <Button 
          variant="soft-blue" 
          size="md"
          className="w-[125px] text-base gap-2 capitalize font-medium"
        >
          <Icon icon="add" size={16} className="text-button-secondary-foreground" />
          Add Goal
        </Button>
      </div>
    )
  }

  if (type === "budget-duration") {
    return (
      <div className="flex flex-col gap-10">
        {/* Budget */}
        <div className="flex flex-col gap-4">
          <div className="flex items-end gap-4 max-w-[533px]">
            <div className="flex-1 flex flex-col gap-2">
              <Label className="text-sm font-semibold">Minimum</Label>
              <CurrencyInput
                placeholder="0.00"
                value={minBudget}
                onValueChange={setMinBudget}
              />
            </div>
            <div className="h-12 flex items-center justify-center w-6">
              <div className="w-full h-px bg-border" />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <Label className="text-sm font-semibold">Maximum</Label>
              <CurrencyInput
                placeholder="0.00"
                value={maxBudget}
                onValueChange={setMaxBudget}
              />
            </div>
            <span className="h-12 flex items-center text-base text-foreground tracking-[0.2px]">
              /month
            </span>
          </div>
          <p className="text-sm text-muted-foreground tracking-[0.2px] max-w-[533px]">
            Suggested rate range based on similar roles on our platform.{" "}
            <button type="button" className="text-link-default hover:underline">
              See source
            </button>
            {" "}and check how much you can save on our platform.
          </p>        </div>

        {/* Duration */}
        <div className="flex flex-col gap-6">
          <Label className="text-sm font-semibold">Test Duration</Label>
          <div className="flex gap-4">
            <DurationOption
              days={30}
              selected={selectedDuration === 30}
              onClick={() => setSelectedDuration(30)}
            />
            <DurationOption
              days={60}
              selected={selectedDuration === 60}
              onClick={() => setSelectedDuration(60)}
            />
            <DurationOption
              days={90}
              selected={selectedDuration === 90}
              onClick={() => setSelectedDuration(90)}
            />
          </div>
        </div>
      </div>
    )
  }

  return null
}

export { CollapsibleForm, DurationOption, ObjectiveItem }
