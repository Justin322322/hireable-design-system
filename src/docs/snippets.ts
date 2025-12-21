export const componentSnippets = {
  Button: {
    basic: `<Button>Click me</Button>`,
    variants: `
<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="link">Link</Button>
`,
    sizes: `
<Button size="default">Default</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button size="icon"><PlusIcon /></Button>
`,
    states: `
<Button disabled>Disabled</Button>
<Button>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  Loading
</Button>
`
  },
  Input: {
    basic: `<Input type="email" placeholder="Email" />`,
    states: `
<Input disabled placeholder="Disabled" />
`
  },
  Text: {
    basic: `<Text>This is a paragraph.</Text>`,
    variants: `
<Text variant="h1">Heading 1</Text>
<Text variant="h2">Heading 2</Text>
<Text variant="h3">Heading 3</Text>
<Text variant="p">Paragraph</Text>
<Text variant="small">Small text</Text>
<Text variant="muted">Muted text</Text>
`
  },
  Stack: {
    basic: `
<Stack gap={4}>
  <div>Item 1</div>
  <div>Item 2</div>
</Stack>
`,
    horizontal: `
<Stack direction="row" gap={2} align="center">
  <Button>Cancel</Button>
  <Button>Save</Button>
</Stack>
`
  },
  FormField: {
    basic: `
<FormField
  label="Email"
  helperText="We'll never share your email."
  id="email"
>
  <Input type="email" placeholder="m@example.com" />
</FormField>
`,
    error: `
<FormField
  label="Username"
  error="Username is already taken."
  id="username"
>
  <Input placeholder="johndoe" />
</FormField>
`
  },
  ModalLayout: {
    basic: `
<ModalLayout
  title="Edit Profile"
  description="Make changes to your profile here."
  trigger={<Button>Edit Profile</Button>}
  footer={<Button type="submit">Save changes</Button>}
>
  <FormField label="Name" id="name">
    <Input defaultValue="Pedro Duarte" />
  </FormField>
</ModalLayout>
`,
    controlled: `
const { isOpen, setOpen, onOpen, onClose } = useDisclosure()

<ModalLayout
  isOpen={isOpen}
  onOpenChange={setOpen}
  title="Controlled Modal"
  trigger={<Button onClick={onOpen}>Open</Button>}
>
  Content...
</ModalLayout>
`
  }
}
