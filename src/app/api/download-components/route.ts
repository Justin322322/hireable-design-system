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

    // Add postcss.config.mjs (required for Tailwind v4)
    const postcssPath = path.join(process.cwd(), "postcss.config.mjs");
    if (fs.existsSync(postcssPath)) {
      const postcssContent = fs.readFileSync(postcssPath, "utf-8");
      zip.file("postcss.config.mjs", postcssContent);
    }

    // Add package.json with all required dependencies
    const packageJson = `{
  "name": "hireable-design-system",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "clsx": "^2.1.1",
    "tailwind-merge": "^3.0.2",
    "class-variance-authority": "^0.7.1",
    "@radix-ui/react-dialog": "^1.1.4",
    "@radix-ui/react-dropdown-menu": "^2.1.4",
    "@radix-ui/react-tabs": "^1.1.2",
    "@radix-ui/react-select": "^2.1.4",
    "@radix-ui/react-checkbox": "^1.1.3",
    "@radix-ui/react-radio-group": "^1.2.2",
    "@radix-ui/react-switch": "^1.1.2",
    "@radix-ui/react-label": "^2.1.1",
    "@radix-ui/react-avatar": "^1.1.2",
    "@radix-ui/react-separator": "^1.1.1",
    "@radix-ui/react-navigation-menu": "^1.2.3",
    "@radix-ui/react-slot": "^1.1.1",
    "@radix-ui/react-accordion": "^1.2.2",
    "@radix-ui/react-progress": "^1.1.1",
    "@radix-ui/react-toggle": "^1.1.1",
    "@radix-ui/react-visually-hidden": "^1.1.1",
    "@radix-ui/react-collapsible": "^1.1.2",
    "vaul": "^1.1.2",
    "sonner": "^2.0.3",
    "framer-motion": "^11.18.1"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.0.0",
    "tailwindcss": "^4.0.0"
  }
}
`;
    zip.file("package.json", packageJson);

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
│   ├── components/ui/       # 37 UI components
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   ├── patterns/            # Composite patterns
│   └── app/
│       └── globals.css      # Design tokens + Tailwind config
├── public/
│   ├── icons/               # Icon assets
│   ├── images/              # Image assets
│   ├── Logo.svg
│   ├── Logo-name.svg
│   └── auth-pillars.svg
├── package.json             # All required dependencies
├── postcss.config.mjs       # Tailwind v4 PostCSS config
└── README.md
\`\`\`

## 🚀 Quick Start (Plug and Play)

### 1. Extract and install dependencies:

\`\`\`bash
# Extract the ZIP then run:
bun install   # or npm install
\`\`\`

### 2. Copy to your project:

\`\`\`bash
# Copy src folder contents
cp -r src/* your-project/src/

# Copy public assets
cp -r public/* your-project/public/

# Copy config (if not already using Tailwind v4)
cp postcss.config.mjs your-project/
\`\`\`

### 3. Import globals.css in your layout:

\`\`\`tsx
// app/layout.tsx
import "@/app/globals.css"
\`\`\`

**That's it!** The design system is ready to use.

---

## 📋 Manual Installation (Alternative)

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

### 3. Configure Tailwind CSS v4

This design system uses **Tailwind CSS v4** with the new PostCSS plugin.

The included \`postcss.config.mjs\` and \`globals.css\` handle the configuration automatically.
Make sure \`globals.css\` is imported in your layout:

\`\`\`tsx
// app/layout.tsx
import "@/app/globals.css"
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
