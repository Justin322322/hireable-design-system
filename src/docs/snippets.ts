/**
 * Design System Code Snippets
 * Copy-paste ready examples for all components
 */

export const componentSnippets = {
  // ============================================
  // BUTTON COMPONENT
  // ============================================
  Button: {
    basic: `<Button>Click me</Button>`,
    variants: `// All button variants
<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="link">Link</Button>`,
    sizes: `// All button sizes
<Button size="default">Default</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button size="icon"><PlusIcon /></Button>`,
    states: `// Disabled and loading states
<Button disabled>Disabled</Button>
<Button>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  Loading
</Button>`,
    composition: `// Composition with asChild
<Button asChild>
  <Link href="/dashboard">Go to Dashboard</Link>
</Button>

// With icons
<Button>
  <MailIcon className="mr-2 h-4 w-4" />
  Send Email
</Button>`,
  },

  // ============================================
  // INPUT COMPONENT
  // ============================================
  Input: {
    basic: `<Input type="email" placeholder="Email" />`,
    variants: `// All input variants
<Input variant="default" placeholder="Default input" />
<Input variant="filled" placeholder="Filled input" />
<Input variant="ghost" placeholder="Ghost input" />`,
    sizes: `// All input sizes
<Input size="sm" placeholder="Small" />
<Input size="default" placeholder="Default" />
<Input size="lg" placeholder="Large" />`,
    states: `// States
<Input disabled placeholder="Disabled" />
<Input readOnly value="Read only" />
<Input aria-invalid placeholder="With error" />`,
    types: `// Different input types
<Input type="text" placeholder="Text" />
<Input type="email" placeholder="Email" />
<Input type="password" placeholder="Password" />
<Input type="number" placeholder="Number" />
<Input type="search" placeholder="Search..." />`,
  },

  // ============================================
  // TEXT COMPONENT
  // ============================================
  Text: {
    basic: `<Text>This is a paragraph.</Text>`,
    variants: `// Typography variants
<Text variant="h1">Heading 1</Text>
<Text variant="h2">Heading 2</Text>
<Text variant="h3">Heading 3</Text>
<Text variant="h4">Heading 4</Text>
<Text variant="p">Paragraph</Text>
<Text variant="lead">Lead text</Text>
<Text variant="large">Large text</Text>
<Text variant="small">Small text</Text>
<Text variant="muted">Muted text</Text>`,
    weights: `// Font weights
<Text weight="normal">Normal weight</Text>
<Text weight="medium">Medium weight</Text>
<Text weight="semibold">Semibold weight</Text>
<Text weight="bold">Bold weight</Text>`,
    polymorphic: `// Polymorphic rendering with "as" prop
<Text variant="h1" as="div">Styled as h1, renders as div</Text>
<Text variant="p" as="span">Paragraph styles, inline element</Text>`,
  },

  // ============================================
  // STACK COMPONENT
  // ============================================
  Stack: {
    basic: `<Stack gap={4}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>`,
    horizontal: `// Horizontal layout
<Stack direction="row" gap={2} align="center">
  <Button variant="outline">Cancel</Button>
  <Button>Save</Button>
</Stack>`,
    alignment: `// Alignment options
<Stack direction="row" justify="between" align="center">
  <Text variant="h3">Title</Text>
  <Button size="sm">Action</Button>
</Stack>`,
    wrapping: `// Wrapping items
<Stack direction="row" gap={2} wrap>
  {tags.map(tag => (
    <Badge key={tag}>{tag}</Badge>
  ))}
</Stack>`,
    nested: `// Nested stacks for complex layouts
<Stack gap={6}>
  <Stack direction="row" justify="between">
    <Text variant="h2">Dashboard</Text>
    <Button>New Item</Button>
  </Stack>
  <Stack gap={4}>
    <Card>...</Card>
    <Card>...</Card>
  </Stack>
</Stack>`,
  },

  // ============================================
  // FORMFIELD PATTERN
  // ============================================
  FormField: {
    basic: `<FormField
  label="Email"
  helperText="We'll never share your email."
  id="email"
>
  <Input type="email" placeholder="m@example.com" />
</FormField>`,
    error: `<FormField
  label="Username"
  error="Username is already taken."
  id="username"
>
  <Input placeholder="johndoe" />
</FormField>`,
    required: `<FormField label="Password" id="password">
  <Input type="password" placeholder="Enter password" required />
</FormField>`,
    composition: `// Multiple form fields
<Stack gap={4}>
  <FormField label="First Name" id="firstName">
    <Input placeholder="John" />
  </FormField>
  <FormField label="Last Name" id="lastName">
    <Input placeholder="Doe" />
  </FormField>
  <FormField label="Email" id="email" helperText="Required">
    <Input type="email" placeholder="john@example.com" />
  </FormField>
  <Button type="submit">Submit</Button>
</Stack>`,
  },

  // ============================================
  // MODALLAYOUT PATTERN
  // ============================================
  ModalLayout: {
    basic: `<ModalLayout
  title="Edit Profile"
  description="Make changes to your profile here."
  trigger={<Button>Edit Profile</Button>}
  footer={<Button type="submit">Save changes</Button>}
>
  <FormField label="Name" id="name">
    <Input defaultValue="Pedro Duarte" />
  </FormField>
</ModalLayout>`,
    controlled: `// Controlled modal with useDisclosure
const { isOpen, setOpen, onOpen, onClose } = useDisclosure()

<ModalLayout
  isOpen={isOpen}
  onOpenChange={setOpen}
  title="Controlled Modal"
  trigger={<Button onClick={onOpen}>Open</Button>}
  footer={
    <Stack direction="row" gap={2}>
      <Button variant="outline" onClick={onClose}>Cancel</Button>
      <Button onClick={onClose}>Confirm</Button>
    </Stack>
  }
>
  <Text>This modal is controlled externally.</Text>
</ModalLayout>`,
    confirmation: `// Confirmation dialog pattern
<ModalLayout
  title="Are you sure?"
  description="This action cannot be undone."
  trigger={<Button variant="destructive">Delete</Button>}
  footer={
    <Stack direction="row" gap={2}>
      <Button variant="outline">Cancel</Button>
      <Button variant="destructive">Delete</Button>
    </Stack>
  }
>
  <Text variant="muted">
    This will permanently delete the item.
  </Text>
</ModalLayout>`,
  },

  // ============================================
  // HOOKS
  // ============================================
  Hooks: {
    useDisclosure: `// Managing modal/drawer state
const { isOpen, onOpen, onClose, onToggle, setOpen } = useDisclosure()

// Open the modal
<Button onClick={onOpen}>Open Modal</Button>

// Pass to ModalLayout
<ModalLayout isOpen={isOpen} onOpenChange={setOpen}>
  ...
</ModalLayout>`,
    useToggle: `// Simple boolean toggle
const { isOn, toggle, setMethod } = useToggle(false)

<Switch checked={isOn} onCheckedChange={toggle} />
<Button onClick={() => setMethod(true)}>Turn On</Button>
<Button onClick={() => setMethod(false)}>Turn Off</Button>`,
  },
}

export default componentSnippets
