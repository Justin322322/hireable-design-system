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

    // Add components/ui folder
    const uiDir = path.join(srcDir, "components", "ui");
    const uiFiles = readDirRecursive(uiDir);
    const componentsFolder = zip.folder("components/ui");
    for (const file of uiFiles) {
      componentsFolder?.file(file.path, file.content);
    }

    // Add hooks folder
    const hooksDir = path.join(srcDir, "hooks");
    const hookFiles = readDirRecursive(hooksDir);
    const hooksFolder = zip.folder("hooks");
    for (const file of hookFiles) {
      hooksFolder?.file(file.path, file.content);
    }

    // Add lib/utils.ts
    const utilsPath = path.join(srcDir, "lib", "utils.ts");
    if (fs.existsSync(utilsPath)) {
      const utilsContent = fs.readFileSync(utilsPath, "utf-8");
      zip.folder("lib")?.file("utils.ts", utilsContent);
    }

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
