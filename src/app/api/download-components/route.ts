import { NextResponse } from "next/server";
import JSZip from "jszip";
import fs from "fs";
import path from "path";

// Helper to recursively read all files from a directory
function readDirRecursive(
  dir: string,
  baseDir: string = dir
): { path: string; content: string }[] {
  const files: { path: string; content: string }[] = [];

  if (!fs.existsSync(dir)) {
    return files;
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.relative(baseDir, fullPath);

    if (entry.isDirectory()) {
      files.push(...readDirRecursive(fullPath, baseDir));
    } else if (entry.isFile() && /\.(ts|tsx)$/.test(entry.name)) {
      const content = fs.readFileSync(fullPath, "utf-8");
      files.push({ path: relativePath, content });
    }
  }

  return files;
}

export async function GET() {
  try {
    const zip = new JSZip();
    const srcDir = path.join(process.cwd(), "src");

    // Create src folder in ZIP for Next.js structure
    const srcFolder = zip.folder("src");
    if (!srcFolder) {
      throw new Error("Failed to create src folder");
    }

    // Add components/ui folder
    const uiDir = path.join(srcDir, "components", "ui");
    const uiFiles = readDirRecursive(uiDir);
    const componentsFolder = srcFolder.folder("components/ui");
    for (const file of uiFiles) {
      componentsFolder?.file(file.path, file.content);
    }

    // Add hooks folder
    const hooksDir = path.join(srcDir, "hooks");
    const hookFiles = readDirRecursive(hooksDir);
    const hooksFolder = srcFolder.folder("hooks");
    for (const file of hookFiles) {
      hooksFolder?.file(file.path, file.content);
    }

    // Add lib/utils.ts
    const utilsPath = path.join(srcDir, "lib", "utils.ts");
    if (fs.existsSync(utilsPath)) {
      const utilsContent = fs.readFileSync(utilsPath, "utf-8");
      srcFolder.folder("lib")?.file("utils.ts", utilsContent);
    }

    // Add patterns folder
    const patternsDir = path.join(srcDir, "patterns");
    const patternFiles = readDirRecursive(patternsDir);
    const patternsFolder = srcFolder.folder("patterns");
    for (const file of patternFiles) {
      patternsFolder?.file(file.path, file.content);
    }

    // Add app/globals.css (in src/app for Next.js structure)
    const globalsPath = path.join(srcDir, "app", "globals.css");
    if (fs.existsSync(globalsPath)) {
      const globalsContent = fs.readFileSync(globalsPath, "utf-8");
      srcFolder.folder("app")?.file("globals.css", globalsContent);
    }

    // Add public assets (icons, images, logos)
    const publicDir = path.join(process.cwd(), "public");
    if (fs.existsSync(publicDir)) {
      const publicFolder = zip.folder("public");
      
      // Add icons folder
      const iconsDir = path.join(publicDir, "icons");
      if (fs.existsSync(iconsDir)) {
        const iconFiles = fs.readdirSync(iconsDir);
        const iconsFolder = publicFolder?.folder("icons");
        for (const file of iconFiles) {
          const filePath = path.join(iconsDir, file);
          if (fs.statSync(filePath).isFile()) {
            const content = fs.readFileSync(filePath);
            iconsFolder?.file(file, content);
          }
        }
      }

      // Add images folder
      const imagesDir = path.join(publicDir, "images");
      if (fs.existsSync(imagesDir)) {
        const imageFiles = fs.readdirSync(imagesDir);
        const imagesFolder = publicFolder?.folder("images");
        for (const file of imageFiles) {
          const filePath = path.join(imagesDir, file);
          if (fs.statSync(filePath).isFile()) {
            const content = fs.readFileSync(filePath);
            imagesFolder?.file(file, content);
          }
        }
      }

      // Add root SVG files (logos)
      const rootFiles = ["Logo.svg", "Logo-name.svg", "auth-pillars.svg"];
      for (const file of rootFiles) {
        const filePath = path.join(publicDir, file);
        if (fs.existsSync(filePath)) {
          const content = fs.readFileSync(filePath);
          publicFolder?.file(file, content);
        }
      }
    }

    // Add README with installation instructions
    const readmeContent = `# Hireable Design System

## 📦 What's Included

This package contains a complete, production-ready design system in Next.js format:

\`\`\`
hireable-design-system/
├── src/
│   ├── components/ui/       # 30+ UI components
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   ├── patterns/            # Composite patterns
│   └── app/
│       └── globals.css      # Design tokens
├── public/
│   ├── icons/               # Icon assets
│   ├── images/              # Image assets
│   ├── Logo.svg
│   ├── Logo-name.svg
│   └── auth-pillars.svg
└── README.md
\`\`\`

## 🚀 Quick Start

### Option 1: Copy to Existing Next.js Project

1. **Extract and copy folders:**
   \`\`\`bash
   # Copy src folder contents
   cp -r src/* your-project/src/
   
   # Copy public assets
   cp -r public/* your-project/public/
   \`\`\`

2. **Import globals.css in your layout:**
   \`\`\`tsx
   // app/layout.tsx
   import "@/app/globals.css"
   \`\`\`

### Option 2: Start Fresh

1. **Extract the ZIP to your project root**
2. **The folder structure is ready to use!**

## 📋 Installation

### 1. Install dependencies

\`\`\`bash
# Core utilities
bun add clsx tailwind-merge class-variance-authority

# Radix UI primitives (install as needed)
bun add @radix-ui/react-dialog @radix-ui/react-dropdown-menu
bun add @radix-ui/react-tabs @radix-ui/react-select
bun add @radix-ui/react-checkbox @radix-ui/react-radio-group
bun add @radix-ui/react-switch @radix-ui/react-label
bun add @radix-ui/react-avatar @radix-ui/react-separator
bun add @radix-ui/react-navigation-menu @radix-ui/react-slot
bun add @radix-ui/react-accordion @radix-ui/react-progress
bun add @radix-ui/react-toggle @radix-ui/react-visually-hidden

# Drawer component
bun add vaul

# Toast notifications
bun add sonner

# Optional: animations
bun add framer-motion

# Optional: drag and drop (for Kanban)
bun add @dnd-kit/core @dnd-kit/sortable @dnd-kit/utilities

# Optional: charts
bun add recharts
\`\`\`

### 2. Configure path aliases

Ensure your \`tsconfig.json\` has the \`@/\` alias:

\`\`\`json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
\`\`\`

### 3. Configure Tailwind CSS

Make sure your \`tailwind.config.ts\` includes the component paths:

\`\`\`typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/patterns/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
\`\`\`

## 💡 Usage

### Import components from barrel exports:

\`\`\`tsx
import { Button, Input, Card, CardHeader, CardContent } from "@/components/ui";
import { useDisclosure, useToast } from "@/hooks";
import { FormField } from "@/patterns";

export function MyComponent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <Card>
      <CardHeader>
        <h2>Welcome</h2>
      </CardHeader>
      <CardContent>
        <FormField label="Email" helperText="We'll never share your email">
          <Input type="email" placeholder="m@example.com" />
        </FormField>
        <Button variant="primary" onClick={onOpen}>
          Submit
        </Button>
      </CardContent>
    </Card>
  );
}
\`\`\`

### Use patterns for complex components:

\`\`\`tsx
import { ProfileCard, GoalCard } from "@/patterns/cards";
import { CandidateProfileDrawer } from "@/patterns/drawers";
import { UploadPhotoModal } from "@/patterns/modals";
\`\`\`

## 📁 Folder Structure

### \`src/components/ui/\`
Core UI primitives (Button, Input, Card, Dialog, etc.)
- All components use design tokens
- Fully accessible with ARIA attributes
- TypeScript with full type safety

### \`src/hooks/\`
Custom React hooks:
- \`useDisclosure\` - Modal/drawer state management
- \`useToggle\` - Boolean toggle state
- \`useToast\` - Toast notifications

### \`src/patterns/\`
Composite components built from UI primitives:
- **cards/** - Profile, Goal, User Role cards
- **drawers/** - Candidate Profile, Create Objective
- **modals/** - Upload Photo
- **kanban/** - Application Card, Candidate Card, Columns
- **form-field.tsx** - Label + Input + Error pattern
- **modal-layout.tsx** - Dialog composition

### \`src/app/globals.css\`
Design tokens (CSS variables) - **SOURCE OF TRUTH**
- 3-layer token architecture (primitives → semantic → component)
- Light/dark mode support
- Consistent spacing, colors, typography

### \`public/\`
Static assets:
- **icons/** - Icon assets
- **images/** - Image assets  
- **Logo.svg** - Main logo
- **Logo-name.svg** - Logo with name
- **auth-pillars.svg** - Auth illustration

## 🎨 Design Tokens

All components use CSS variables from \`globals.css\`:

\`\`\`css
/* Example tokens */
--color-primary: #00A7F8;
--color-background: #FFFFFF;
--button-primary-default: var(--color-primary);
--spacing-4: 1rem;
\`\`\`

**Never use hardcoded colors** - always use design tokens for consistency.

## ♿ Accessibility

All components follow WCAG 2.1 AA standards:
- Proper ARIA attributes
- Keyboard navigation
- Focus management
- Screen reader support

## 📚 Documentation

For detailed component API, usage examples, and design guidelines, visit the design system documentation site.

## 🤝 Support

For issues or questions, refer to the documentation or contact the design system team.

## 📝 License

This design system is proprietary. Use only within authorized projects.
`;
    zip.file("README.md", readmeContent);

    // Generate ZIP
    const zipBuffer = await zip.generateAsync({ type: "nodebuffer" });

    // Convert Buffer to Uint8Array for NextResponse compatibility
    return new NextResponse(new Uint8Array(zipBuffer), {
      status: 200,
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": "attachment; filename=hireable-design-system.zip",
      },
    });
  } catch (error) {
    console.error("Error generating ZIP:", error);
    return NextResponse.json(
      { error: "Failed to generate component bundle" },
      { status: 500 }
    );
  }
}
