import { VERSION } from "@/lib/version";
import { Icon } from "@/components/ui/icon";
import { ComponentPreview, CodeBlock, PropsTable } from "@/components/docs";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { selectProps, selectTriggerProps, selectItemProps } from "@/data/api/dropdown";

export default function DropdownPage() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:px-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">Dropdown</h1>
          <span className="text-sm text-muted-foreground">{VERSION}</span>
        </div>
        <p className="text-lg text-muted-foreground">
          Dropdown allows users to choose from a list of options. Use when there are more than 5 options.
        </p>
      </div>

      <Tabs defaultValue="examples" className="space-y-8">
        <TabsList>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
          <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
        </TabsList>

        <TabsContent value="examples" className="space-y-8">
        {/* Default Variant */}
        <ComponentPreview title="Default">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Default State */}
            <div className="space-y-2">
              <span className="text-sm text-muted-foreground">Default</span>
              <div
                className="flex items-center justify-between w-[300px] h-11 px-4 py-3 bg-background border border-input rounded-lg"
              >
                <span className="font-secondary text-sm text-muted-foreground tracking-[0.2px]">
                  Insert title
                </span>
                <Icon icon="expand_more" size={24} className="text-icon" />
              </div>
            </div>

            {/* Hover State */}
            <div className="space-y-2">
              <span className="text-sm text-muted-foreground">Hover</span>
              <div
                className="flex items-center justify-between w-[300px] h-11 px-4 py-3 bg-background border border-border-focused rounded-lg"
              >
                <span className="font-secondary text-sm text-muted-foreground tracking-[0.2px]">
                  Insert title
                </span>
                <Icon icon="expand_more" size={24} className="text-icon" />
              </div>
            </div>

            {/* Active State */}
            <div className="space-y-2">
              <span className="text-sm text-muted-foreground">Active</span>
              <div
                className="flex items-center justify-between w-[300px] h-11 px-4 py-3 bg-background border border-input rounded-lg"
              >
                <span className="font-secondary text-sm text-foreground tracking-[0.2px]">
                  Selected option
                </span>
                <Icon icon="expand_more" size={24} className="text-icon" />
              </div>
            </div>

            {/* Focused State */}
            <div className="space-y-2">
              <span className="text-sm text-muted-foreground">Focused</span>
              <div
                className="flex items-center justify-between w-[300px] h-11 px-4 py-3 bg-background border border-border-focused rounded-lg"
              >
                <span className="font-secondary text-sm text-foreground tracking-[0.2px]">
                  Selected option
                </span>
                <Icon icon="expand_less" size={24} className="text-icon" />
              </div>
            </div>

            {/* Disabled State */}
            <div className="space-y-2">
              <span className="text-sm text-muted-foreground">Disabled</span>
              <div
                className="flex items-center justify-between w-[300px] h-11 px-4 py-3 bg-background border border-border-disabled rounded-lg"
              >
                <span className="font-secondary text-sm text-neutral-muted tracking-[0.2px]">
                  Insert title
                </span>
                <Icon icon="expand_more" size={24} className="text-neutral-muted" />
              </div>
            </div>

            {/* Error State */}
            <div className="space-y-2">
              <span className="text-sm text-muted-foreground">Error</span>
              <div
                className="flex items-center justify-between w-[300px] h-11 px-4 py-3 bg-background border border-destructive rounded-lg"
              >
                <span className="font-secondary text-sm text-foreground tracking-[0.2px]">
                  Selected option
                </span>
                <Icon icon="expand_more" size={24} className="text-icon" />
              </div>
            </div>
          </div>
        </ComponentPreview>

        <CodeBlock
          code={`<Select>
  <SelectTrigger>
    <SelectValue placeholder="Insert title" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>`}
          language="tsx"
        />

        {/* With Label Variant */}
        <ComponentPreview title="With Label">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Default State */}
            <div className="space-y-2">
              <span className="text-sm text-muted-foreground">Default</span>
              <div className="flex flex-col gap-2 w-[300px]">
                <label className="font-secondary text-sm font-semibold text-foreground tracking-[0.2px]">
                  Dropdown title
                </label>
                <div
                  className="flex items-center justify-between h-11 px-4 py-3 bg-background border border-input rounded-lg"
                >
                  <span className="font-secondary text-sm text-muted-foreground tracking-[0.2px]">
                    Insert title
                  </span>
                  <Icon icon="expand_more" size={24} className="text-icon" />
                </div>
              </div>
            </div>

            {/* Hover State */}
            <div className="space-y-2">
              <span className="text-sm text-muted-foreground">Hover</span>
              <div className="flex flex-col gap-2 w-[300px]">
                <label className="font-secondary text-sm font-semibold text-foreground tracking-[0.2px]">
                  Dropdown title
                </label>
                <div
                  className="flex items-center justify-between h-11 px-4 py-3 bg-background border border-border-hover rounded-lg"
                >
                  <span className="font-secondary text-sm text-muted-foreground tracking-[0.2px]">
                    Insert title
                  </span>
                  <Icon icon="expand_more" size={24} className="text-icon" />
                </div>
              </div>
            </div>

            {/* Active State */}
            <div className="space-y-2">
              <span className="text-sm text-muted-foreground">Active</span>
              <div className="flex flex-col gap-2 w-[300px]">
                <label className="font-secondary text-sm font-semibold text-foreground tracking-[0.2px]">
                  Dropdown title
                </label>
                <div
                  className="flex items-center justify-between h-11 px-4 py-3 bg-background border border-input rounded-lg"
                >
                  <span className="font-secondary text-sm text-foreground tracking-[0.2px]">
                    Selected option
                  </span>
                  <Icon icon="expand_more" size={24} className="text-icon" />
                </div>
              </div>
            </div>

            {/* Focused State */}
            <div className="space-y-2">
              <span className="text-sm text-muted-foreground">Focused</span>
              <div className="flex flex-col gap-2 w-[300px]">
                <label className="font-secondary text-sm font-semibold text-foreground tracking-[0.2px]">
                  Dropdown title
                </label>
                <div
                  className="flex items-center justify-between h-11 px-4 py-3 bg-background border border-border-focused rounded-lg"
                >
                  <span className="font-secondary text-sm text-foreground tracking-[0.2px]">
                    Selected option
                  </span>
                  <Icon icon="expand_less" size={24} className="text-icon" />
                </div>
              </div>
            </div>

            {/* Disabled State */}
            <div className="space-y-2">
              <span className="text-sm text-muted-foreground">Disabled</span>
              <div className="flex flex-col gap-2 w-[300px]">
                <label className="font-secondary text-sm font-semibold text-neutral-muted tracking-[0.2px]">
                  Dropdown title
                </label>
                <div
                  className="flex items-center justify-between h-11 px-4 py-3 bg-background border border-border-disabled rounded-lg"
                >
                  <span className="font-secondary text-sm text-neutral-muted tracking-[0.2px]">
                    Insert title
                  </span>
                  <Icon icon="expand_more" size={24} className="text-neutral-muted" />
                </div>
              </div>
            </div>

            {/* Error State */}
            <div className="space-y-2">
              <span className="text-sm text-muted-foreground">Error</span>
              <div className="flex flex-col gap-2 w-[300px]">
                <label className="font-secondary text-sm font-semibold text-foreground tracking-[0.2px]">
                  Dropdown title
                </label>
                <div
                  className="flex items-center justify-between h-11 px-4 py-3 bg-background border border-destructive rounded-lg"
                >
                  <span className="font-secondary text-sm text-foreground tracking-[0.2px]">
                    Selected option
                  </span>
                  <Icon icon="expand_more" size={24} className="text-icon" />
                </div>
              </div>
            </div>
          </div>
        </ComponentPreview>

        <CodeBlock
          code={`<div className="flex flex-col gap-2">
  <label className="text-sm font-semibold">Dropdown title</label>
  <Select>
    <SelectTrigger>
      <SelectValue placeholder="Insert title" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="option1">Option 1</SelectItem>
    </SelectContent>
  </Select>
</div>`}
          language="tsx"
        />

        {/* With Label + Subtitle Variant */}
        <ComponentPreview title="With Label + Helper Text">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Default State */}
            <div className="space-y-2">
              <span className="text-sm text-muted-foreground">Default</span>
              <div className="flex flex-col gap-2 w-[300px]">
                <label className="font-secondary text-sm font-semibold text-foreground tracking-[0.2px]">
                  Dropdown title
                </label>
                <div
                  className="flex items-center justify-between h-11 px-4 py-3 bg-background border border-input rounded-lg"
                >
                  <span className="font-secondary text-sm text-muted-foreground tracking-[0.2px]">
                    Insert title
                  </span>
                  <Icon icon="expand_more" size={24} className="text-icon" />
                </div>
                <span className="font-secondary text-sm text-muted-foreground tracking-[0.2px]">
                  Helper text
                </span>
              </div>
            </div>

            {/* Hover State */}
            <div className="space-y-2">
              <span className="text-sm text-muted-foreground">Hover</span>
              <div className="flex flex-col gap-2 w-[300px]">
                <label className="font-secondary text-sm font-semibold text-foreground tracking-[0.2px]">
                  Dropdown title
                </label>
                <div
                  className="flex items-center justify-between h-11 px-4 py-3 bg-background border border-border-hover rounded-lg"
                >
                  <span className="font-secondary text-sm text-muted-foreground tracking-[0.2px]">
                    Insert title
                  </span>
                  <Icon icon="expand_more" size={24} className="text-icon" />
                </div>
                <span className="font-secondary text-sm text-muted-foreground tracking-[0.2px]">
                  Helper text
                </span>
              </div>
            </div>

            {/* Active State */}
            <div className="space-y-2">
              <span className="text-sm text-muted-foreground">Active</span>
              <div className="flex flex-col gap-2 w-[300px]">
                <label className="font-secondary text-sm font-semibold text-foreground tracking-[0.2px]">
                  Dropdown title
                </label>
                <div
                  className="flex items-center justify-between h-11 px-4 py-3 bg-background border border-input rounded-lg"
                >
                  <span className="font-secondary text-sm text-foreground tracking-[0.2px]">
                    Selected option
                  </span>
                  <Icon icon="expand_more" size={24} className="text-icon" />
                </div>
                <span className="font-secondary text-sm text-muted-foreground tracking-[0.2px]">
                  Helper text
                </span>
              </div>
            </div>

            {/* Focused State */}
            <div className="space-y-2">
              <span className="text-sm text-muted-foreground">Focused</span>
              <div className="flex flex-col gap-2 w-[300px]">
                <label className="font-secondary text-sm font-semibold text-foreground tracking-[0.2px]">
                  Dropdown title
                </label>
                <div
                  className="flex items-center justify-between h-11 px-4 py-3 bg-background border border-border-focused rounded-lg"
                >
                  <span className="font-secondary text-sm text-foreground tracking-[0.2px]">
                    Selected option
                  </span>
                  <Icon icon="expand_less" size={24} className="text-icon" />
                </div>
              </div>
            </div>

            {/* Disabled State */}
            <div className="space-y-2">
              <span className="text-sm text-muted-foreground">Disabled</span>
              <div className="flex flex-col gap-2 w-[300px]">
                <label className="font-secondary text-sm font-semibold text-neutral-muted tracking-[0.2px]">
                  Dropdown title
                </label>
                <div
                  className="flex items-center justify-between h-11 px-4 py-3 bg-background border border-border-disabled rounded-lg"
                >
                  <span className="font-secondary text-sm text-neutral-muted tracking-[0.2px]">
                    Insert title
                  </span>
                  <Icon icon="expand_more" size={24} className="text-neutral-muted" />
                </div>
                <span className="font-secondary text-sm text-neutral-muted tracking-[0.2px]">
                  Helper text
                </span>
              </div>
            </div>

            {/* Error State */}
            <div className="space-y-2">
              <span className="text-sm text-muted-foreground">Error</span>
              <div className="flex flex-col gap-2 w-[300px]">
                <label className="font-secondary text-sm font-semibold text-foreground tracking-[0.2px]">
                  Dropdown title
                </label>
                <div
                  className="flex items-center justify-between h-11 px-4 py-3 bg-background border border-destructive rounded-lg"
                >
                  <span className="font-secondary text-sm text-foreground tracking-[0.2px]">
                    Selected option
                  </span>
                  <Icon icon="expand_more" size={24} className="text-icon" />
                </div>
                <span className="font-secondary text-sm text-destructive tracking-[0.2px]">
                  This field is required
                </span>
              </div>
            </div>
          </div>
        </ComponentPreview>

        <CodeBlock
          code={`<div className="flex flex-col gap-2">
  <label className="text-sm font-semibold">Dropdown title</label>
  <Select>
    <SelectTrigger>
      <SelectValue placeholder="Insert title" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="option1">Option 1</SelectItem>
    </SelectContent>
  </Select>
  <span className="text-sm text-muted-foreground">Helper text</span>
</div>`}
          language="tsx"
        />

        {/* Dropdown Menu Section */}
        <h2 className="text-2xl font-semibold mt-12 mb-6">Dropdown Menu</h2>

        {/* Default Dropdown Menu */}
        <ComponentPreview title="Default">
          <div className="flex flex-col items-center">
            <div className="w-[400px] bg-background border border-input rounded-lg p-2">
              <div className="flex flex-col">
                {/* Selected Option */}
                <div className="flex items-center px-4 py-3 h-11 bg-button-secondary-default rounded">
                  <span className="font-secondary text-sm text-foreground tracking-[0.2px]">
                    Insert Option
                  </span>
                </div>
                {/* Option 2 */}
                <div className="flex items-center px-4 py-3 h-11 bg-background rounded hover:bg-surface-hover">
                  <span className="font-secondary text-sm text-foreground tracking-[0.2px]">
                    Insert Option
                  </span>
                </div>
                {/* Option 3 */}
                <div className="flex items-center px-4 py-3 h-11 bg-background rounded hover:bg-surface-hover">
                  <span className="font-secondary text-sm text-foreground tracking-[0.2px]">
                    Insert Option
                  </span>
                </div>
                {/* Option 4 */}
                <div className="flex items-center px-4 py-3 h-11 bg-background rounded hover:bg-surface-hover">
                  <span className="font-secondary text-sm text-foreground tracking-[0.2px]">
                    Insert Option
                  </span>
                </div>
                {/* Option 5 */}
                <div className="flex items-center px-4 py-3 h-11 bg-background rounded hover:bg-surface-hover">
                  <span className="font-secondary text-sm text-foreground tracking-[0.2px]">
                    Insert Option
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ComponentPreview>

        <CodeBlock
          code={`<SelectContent>
  <SelectItem value="opt1" className="bg-button-secondary-default">Selected Option</SelectItem>
  <SelectItem value="opt2">Option 2</SelectItem>
  <SelectItem value="opt3">Option 3</SelectItem>
</SelectContent>`}
          language="tsx"
        />

        {/* With Search Bar */}
        <ComponentPreview title="With Search Bar">
          <div className="flex flex-col items-center">
            <div className="w-[400px] bg-background border border-input rounded-lg overflow-hidden">
              {/* Search Bar */}
              <div className="flex items-center gap-2 px-6 py-4 h-14 bg-background border-b border-input">
                <Icon icon="search" size={24} className="text-icon" />
                <span className="font-secondary text-base text-muted-foreground tracking-[0.2px]">
                  Search
                </span>
              </div>
              {/* Options Container */}
              <div className="p-2">
                <div className="flex flex-col">
                  {/* Option 1 */}
                  <div className="flex items-center px-4 py-3 h-11 bg-background rounded hover:bg-surface-hover">
                    <span className="font-secondary text-sm text-foreground tracking-[0.2px]">
                      United Kingdom
                    </span>
                  </div>
                  {/* Option 2 */}
                  <div className="flex items-center px-4 py-3 h-11 bg-background rounded hover:bg-surface-hover">
                    <span className="font-secondary text-sm text-foreground tracking-[0.2px]">
                      France
                    </span>
                  </div>
                  {/* Option 3 */}
                  <div className="flex items-center px-4 py-3 h-11 bg-background rounded hover:bg-surface-hover">
                    <span className="font-secondary text-sm text-foreground tracking-[0.2px]">
                      Spain
                    </span>
                  </div>
                  {/* Option 4 */}
                  <div className="flex items-center px-4 py-3 h-11 bg-background rounded hover:bg-surface-hover">
                    <span className="font-secondary text-sm text-foreground tracking-[0.2px]">
                      Italy
                    </span>
                  </div>
                  {/* Option 5 */}
                  <div className="flex items-center px-4 py-3 h-11 bg-background rounded hover:bg-surface-hover">
                    <span className="font-secondary text-sm text-foreground tracking-[0.2px]">
                      Germany
                    </span>
                  </div>
                  {/* Option 6 */}
                  <div className="flex items-center px-4 py-3 h-11 bg-background rounded hover:bg-surface-hover">
                    <span className="font-secondary text-sm text-foreground tracking-[0.2px]">
                      Japan
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ComponentPreview>

        <CodeBlock
          code={`<Command>
  <CommandInput placeholder="Search" />
  <CommandList>
    <CommandItem>United Kingdom</CommandItem>
    <CommandItem>France</CommandItem>
    <CommandItem>Spain</CommandItem>
  </CommandList>
</Command>`}
          language="tsx"
        />

        {/* With Search Bar + Checkbox */}
        <ComponentPreview title="With Search Bar + Checkbox">
          <div className="flex flex-col items-center">
            <div className="w-[400px] bg-background border border-input rounded-lg overflow-hidden">
              {/* Search Bar */}
              <div className="flex items-center gap-2 px-6 py-4 h-14 bg-background border-b border-input">
                <Icon icon="search" size={24} className="text-icon" />
                <span className="font-secondary text-base text-muted-foreground tracking-[0.2px]">
                  Search
                </span>
              </div>
              {/* Options Container */}
              <div className="p-2">
                <div className="flex flex-col">
                  {/* Option 1 */}
                  <div className="flex items-center gap-2 px-6 py-3 h-11 bg-background hover:bg-surface-hover">
                    <Checkbox label="United Kingdom" />
                  </div>
                  {/* Option 2 */}
                  <div className="flex items-center gap-2 px-6 py-3 h-11 bg-background hover:bg-surface-hover">
                    <Checkbox label="France" />
                  </div>
                  {/* Option 3 */}
                  <div className="flex items-center gap-2 px-6 py-3 h-11 bg-background hover:bg-surface-hover">
                    <Checkbox label="Spain" />
                  </div>
                  {/* Option 4 */}
                  <div className="flex items-center gap-2 px-6 py-3 h-11 bg-background hover:bg-surface-hover">
                    <Checkbox label="Italy" />
                  </div>
                  {/* Option 5 */}
                  <div className="flex items-center gap-2 px-6 py-3 h-11 bg-background hover:bg-surface-hover">
                    <Checkbox label="Germany" />
                  </div>
                  {/* Option 6 */}
                  <div className="flex items-center gap-2 px-6 py-3 h-11 bg-background hover:bg-surface-hover">
                    <Checkbox label="Japan" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ComponentPreview>

        <CodeBlock
          code={`<Command>
  <CommandInput placeholder="Search" />
  <CommandList>
    <CommandItem>
      <Checkbox label="United Kingdom" />
    </CommandItem>
    <CommandItem>
      <Checkbox label="France" />
    </CommandItem>
  </CommandList>
</Command>`}
          language="tsx"
        />

        {/* Option States */}
        <ComponentPreview title="Option States">
          <div className="flex flex-col items-center gap-4">
            {/* Rest State */}
            <div className="space-y-2">
              <span className="text-sm text-muted-foreground">Rest</span>
              <div className="flex items-center px-4 py-3 h-11 w-[362px] bg-background rounded">
                <span className="font-secondary text-sm text-foreground tracking-[0.2px]">
                  Insert Option
                </span>
              </div>
            </div>

            {/* Hover State */}
            <div className="space-y-2">
              <span className="text-sm text-muted-foreground">Hover</span>
              <div className="flex items-center px-4 py-3 h-11 w-[362px] bg-surface-hover rounded">
                <span className="font-secondary text-sm text-foreground tracking-[0.2px]">
                  Insert Option
                </span>
              </div>
            </div>

            {/* Focused State */}
            <div className="space-y-2">
              <span className="text-sm text-muted-foreground">Focused</span>
              <div className="flex items-center px-4 py-3 h-11 w-[362px] bg-button-secondary-default rounded">
                <span className="font-secondary text-sm text-foreground tracking-[0.2px]">
                  Insert Option
                </span>
              </div>
            </div>

            {/* Disabled State */}
            <div className="space-y-2">
              <span className="text-sm text-muted-foreground">Disabled</span>
              <div className="flex items-center px-4 py-3 h-11 w-[362px] bg-surface-hover rounded">
                <span className="font-secondary text-sm text-neutral-muted tracking-[0.2px]">
                  Insert Option
                </span>
              </div>
            </div>
          </div>
        </ComponentPreview>

        <CodeBlock
          code={`<SelectItem value="option">Insert Option</SelectItem>

// Hover/Focus states are handled by CSS
// bg-surface-hover for hover
// bg-button-secondary-default for selected`}
          language="tsx"
        />

        {/* Option with Icon States */}
        <ComponentPreview title="Option with Icon">
          <div className="flex flex-col items-center gap-4">
            {/* Rest State */}
            <div className="space-y-2">
              <span className="text-sm text-muted-foreground">Rest</span>
              <div className="flex items-center gap-2 px-6 py-3 h-11 w-[362px] bg-background rounded">
                <Icon icon="add" size={24} className="text-icon" />
                <span className="font-secondary text-sm text-foreground tracking-[0.2px]">
                  Insert Option
                </span>
              </div>
            </div>

            {/* Hover State */}
            <div className="space-y-2">
              <span className="text-sm text-muted-foreground">Hover</span>
              <div className="flex items-center gap-2 px-6 py-3 h-11 w-[362px] bg-surface-hover rounded">
                <Icon icon="add" size={24} className="text-icon" />
                <span className="font-secondary text-sm text-foreground tracking-[0.2px]">
                  Insert Option
                </span>
              </div>
            </div>

            {/* Focused State */}
            <div className="space-y-2">
              <span className="text-sm text-muted-foreground">Focused</span>
              <div className="flex items-center gap-2 px-6 py-3 h-11 w-[362px] bg-button-secondary-default rounded">
                <Icon icon="add" size={24} className="text-icon" />
                <span className="font-secondary text-sm text-foreground tracking-[0.2px]">
                  Insert Option
                </span>
              </div>
            </div>

            {/* Disabled State */}
            <div className="space-y-2">
              <span className="text-sm text-muted-foreground">Disabled</span>
              <div className="flex items-center gap-2 px-6 py-3 h-11 w-[362px] bg-surface-hover rounded">
                <Icon icon="add" size={24} className="text-neutral-muted" />
                <span className="font-secondary text-sm text-neutral-muted tracking-[0.2px]">
                  Insert Option
                </span>
              </div>
            </div>
          </div>
        </ComponentPreview>

        <CodeBlock
          code={`<SelectItem value="option" className="flex items-center gap-2">
  <Icon icon="add" size={24} className="text-icon" />
  Insert Option
</SelectItem>`}
          language="tsx"
        />

        {/* Option with Radio button + Pill */}
        <ComponentPreview title="Option with Radio button + Pill">
          <div className="flex flex-col items-center gap-4">
            {/* Rest State */}
            <div className="space-y-2">
              <span className="text-sm text-muted-foreground">Rest</span>
              <div className="flex items-center justify-between px-6 py-3 h-11 w-[362px] bg-background rounded">
                <RadioGroup>
                  <RadioGroupItem value="rest" label="Insert Option" />
                </RadioGroup>
                <span className="px-2 py-1 text-xs font-secondary bg-toast-info-bg/50 text-client rounded tracking-[0.2px]">
                  FULL-TIME
                </span>
              </div>
            </div>

            {/* Hover State */}
            <div className="space-y-2">
              <span className="text-sm text-muted-foreground">Hover</span>
              <div className="flex items-center justify-between px-6 py-3 h-11 w-[362px] bg-surface-hover rounded">
                <RadioGroup>
                  <RadioGroupItem value="hover" label="Insert Option" />
                </RadioGroup>
                <span className="px-2 py-1 text-xs font-secondary bg-toast-info-bg/50 text-client rounded tracking-[0.2px]">
                  FULL-TIME
                </span>
              </div>
            </div>

            {/* Focused State */}
            <div className="space-y-2">
              <span className="text-sm text-muted-foreground">Focused</span>
              <div className="flex items-center justify-between px-6 py-3 h-11 w-[362px] bg-background rounded">
                <RadioGroup defaultValue="focused">
                  <RadioGroupItem value="focused" label="Insert Option" />
                </RadioGroup>
                <span className="px-2 py-1 text-xs font-secondary bg-toast-info-bg/50 text-client rounded tracking-[0.2px]">
                  FULL-TIME
                </span>
              </div>
            </div>

            {/* Disabled State */}
            <div className="space-y-2">
              <span className="text-sm text-muted-foreground">Disabled</span>
              <div className="flex items-center justify-between px-6 py-3 h-11 w-[362px] bg-background rounded">
                <RadioGroup>
                  <RadioGroupItem value="disabled" label="Insert Option" disabled />
                </RadioGroup>
                <span className="px-2 py-1 text-xs font-secondary bg-toast-info-bg/50 text-client rounded tracking-[0.2px]">
                  FULL-TIME
                </span>
              </div>
            </div>
          </div>
        </ComponentPreview>

        <CodeBlock
          code={`<div className="flex items-center justify-between">
  <RadioGroup>
    <RadioGroupItem value="option" label="Insert Option" />
  </RadioGroup>
  <span className="px-2 py-1 text-xs bg-toast-info-bg/50 text-client rounded">
    FULL-TIME
  </span>
</div>`}
          language="tsx"
        />
        </TabsContent>

        <TabsContent value="usage" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">When to Use</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-success">Do</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Use dropdowns when there are more than 5 options to choose from</li>
                    <li>Use dropdowns when space is limited and a full list would be overwhelming</li>
                    <li>Use with search functionality for long lists of options</li>
                    <li>Group related options together when using checkboxes or radio buttons</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-danger">Don&apos;t</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Don&apos;t use dropdowns for fewer than 5 options - consider radio buttons instead</li>
                    <li>Don&apos;t use dropdowns for binary choices - use a toggle or checkbox</li>
                    <li>Don&apos;t hide important or frequently used options in dropdowns</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>


        </TabsContent>

        <TabsContent value="api" className="space-y-8">
          <PropsTable title="Select Props" props={selectProps} />
          <PropsTable title="SelectTrigger Props" props={selectTriggerProps} />
          <PropsTable title="SelectItem Props" props={selectItemProps} />
        </TabsContent>

        <TabsContent value="accessibility" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Accessibility</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Keyboard Navigation</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Space</kbd> or <kbd className="px-2 py-1 bg-muted rounded text-xs">Enter</kbd> - Open the dropdown</li>
                    <li><kbd className="px-2 py-1 bg-muted rounded text-xs">↑</kbd> <kbd className="px-2 py-1 bg-muted rounded text-xs">↓</kbd> - Navigate through options</li>
                    <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Escape</kbd> - Close the dropdown</li>
                    <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Home</kbd> - Jump to first option</li>
                    <li><kbd className="px-2 py-1 bg-muted rounded text-xs">End</kbd> - Jump to last option</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">ARIA</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Uses <code className="text-sm bg-muted px-1 rounded">role=&quot;listbox&quot;</code> for the options container</li>
                    <li>Uses <code className="text-sm bg-muted px-1 rounded">role=&quot;option&quot;</code> for each option</li>
                    <li>Selected option has <code className="text-sm bg-muted px-1 rounded">aria-selected=&quot;true&quot;</code></li>
                    <li>Disabled options have <code className="text-sm bg-muted px-1 rounded">aria-disabled=&quot;true&quot;</code></li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>
      </Tabs>
    </div>
  );
}
