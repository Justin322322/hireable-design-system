"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Icon } from "@/components/ui";
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value



const selectTriggerVariants = cva(
  "flex w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent font-secondary text-sm ring-offset-background placeholder:text-muted-foreground hover:border-border-hover focus:outline-none focus-visible:border-border-focused disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
  {
    variants: {
      size: {
        default: "h-11 px-4 py-3",
        sm: "h-9 px-3 py-2 text-xs",
        lg: "h-12 px-4 py-3 text-base",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> &
    VariantProps<typeof selectTriggerVariants>
>(({ className, children, size, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(selectTriggerVariants({ size, className }))}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <Icon icon="keyboard_arrow_down" size={16} className="opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <Icon icon="keyboard_arrow_up" size={16} />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <Icon icon="keyboard_arrow_down" size={16} />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "w-full min-w-(--radix-select-trigger-width)"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-surface-hover focus:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Icon icon="check" size={16} />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

// Option with Checkbox variant
interface SelectItemCheckboxProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> {
  checked?: boolean
}

const SelectItemCheckbox = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  SelectItemCheckboxProps
>(({ className, children, checked, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center gap-2 h-11 px-6 py-4 text-sm outline-none bg-background hover:bg-secondary focus:bg-secondary data-disabled:pointer-events-none data-disabled:text-muted-foreground",
      className
    )}
    {...props}
  >
    <span
      className={cn(
        "flex h-4 w-4 shrink-0 items-center justify-center rounded-[3.2px] border",
        checked
          ? "bg-client border-client"
          : "bg-background border-border",
        props.disabled && "border-border-disabled"
      )}
    >
      {checked && (
        <Icon icon="check" size={14} className="text-white" />
      )}
    </span>
    <SelectPrimitive.ItemText className="text-sm leading-[1.2] tracking-[0.2px] text-foreground">
      {children}
    </SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItemCheckbox.displayName = "SelectItemCheckbox"

// Option with Radio Button + Pill variant
interface SelectItemRadioPillProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> {
  pillText?: string
  pillClassName?: string
}

const SelectItemRadioPill = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  SelectItemRadioPillProps
>(({ className, children, pillText, pillClassName, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center justify-between h-11 px-6 py-4 text-sm outline-none bg-background hover:bg-secondary focus:bg-secondary data-disabled:pointer-events-none data-disabled:text-muted-foreground",
      className
    )}
    {...props}
  >
    <div className="flex items-center gap-2">
      <span
        className={cn(
          "flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-[0.8px]",
          "data-[state=checked]:border-client border-border",
          props.disabled && "border-border-disabled"
        )}
        data-state={props["aria-selected"] ? "checked" : "unchecked"}
      >
        <SelectPrimitive.ItemIndicator>
          <span className="block h-[11.2px] w-[11.2px] rounded-full bg-client" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText className="text-sm leading-[1.2] tracking-[0.2px] text-foreground">
        {children}
      </SelectPrimitive.ItemText>
    </div>
    {pillText && (
      <span
        className={cn(
          "flex items-center justify-center h-6 px-2 py-2 rounded-full text-xs leading-[1.2] tracking-[0.2px]",
          "bg-[#fff5ec] text-[#ff8112]",
          pillClassName
        )}
      >
        {pillText}
      </span>
    )}
  </SelectPrimitive.Item>
))
SelectItemRadioPill.displayName = "SelectItemRadioPill"

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectItemCheckbox,
  SelectItemRadioPill,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}
