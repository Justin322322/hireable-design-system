/**
 * Migrate to Barrel Imports Script
 * 
 * This script migrates individual component imports to barrel imports:
 * - `import { X } from "@/components/ui/x"` → `import { X } from "@/components/ui"`
 * - `import { useX } from "@/hooks/use-x"` → `import { useX } from "@/hooks"`
 */

const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(__dirname, '..', 'src');

// Files/folders to skip
const SKIP_PATTERNS = [
  'node_modules',
  '.git',
  'components/ui/index.ts', // Don't modify barrel itself
  'hooks/index.ts', // Don't modify barrel itself
];

// Regex patterns for detecting individual imports
const UI_IMPORT_PATTERN = /from\s+["']@\/components\/ui\/([a-z-]+)["']/g;
const HOOK_IMPORT_PATTERN = /from\s+["']@\/hooks\/(use-[a-z-]+)["']/g;

function shouldSkip(filePath) {
  return SKIP_PATTERNS.some(pattern => filePath.includes(pattern));
}

function getAllTsxFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    if (shouldSkip(fullPath)) continue;
    
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getAllTsxFiles(fullPath, files);
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  const changes = [];
  
  // Find all UI component imports from individual files
  const uiImports = [];
  let match;
  
  // Collect all individual UI imports
  const uiImportLines = content.match(/import\s*\{[^}]+\}\s*from\s*["']@\/components\/ui\/[a-z-]+["'];?/g) || [];
  
  if (uiImportLines.length > 0) {
    // Extract all imported items
    const allImports = new Set();
    const allTypeImports = new Set();
    
    for (const line of uiImportLines) {
      // Extract items between { }
      const itemsMatch = line.match(/\{([^}]+)\}/);
      if (itemsMatch) {
        const items = itemsMatch[1].split(',').map(s => s.trim()).filter(Boolean);
        for (const item of items) {
          if (item.startsWith('type ')) {
            allTypeImports.add(item.replace('type ', ''));
          } else {
            allImports.add(item);
          }
        }
      }
    }
    
    if (allImports.size > 0 || allTypeImports.size > 0) {
      // Build new import statement
      const importParts = [];
      if (allImports.size > 0) {
        importParts.push(...Array.from(allImports));
      }
      if (allTypeImports.size > 0) {
        importParts.push(...Array.from(allTypeImports).map(t => `type ${t}`));
      }
      
      const newImport = `import { ${importParts.join(', ')} } from "@/components/ui";`;
      
      // Remove old imports and add new one
      let firstImportRemoved = false;
      for (const line of uiImportLines) {
        if (!firstImportRemoved) {
          content = content.replace(line, newImport);
          firstImportRemoved = true;
        } else {
          content = content.replace(line + '\n', '');
          content = content.replace(line, '');
        }
      }
      
      modified = true;
      changes.push(`Consolidated ${uiImportLines.length} UI imports → barrel`);
    }
  }
  
  // Handle hook imports
  const hookImportLines = content.match(/import\s*\{[^}]+\}\s*from\s*["']@\/hooks\/use-[a-z-]+["'];?/g) || [];
  
  if (hookImportLines.length > 0) {
    const allHookImports = new Set();
    const allHookTypeImports = new Set();
    
    for (const line of hookImportLines) {
      const itemsMatch = line.match(/\{([^}]+)\}/);
      if (itemsMatch) {
        const items = itemsMatch[1].split(',').map(s => s.trim()).filter(Boolean);
        for (const item of items) {
          if (item.startsWith('type ')) {
            allHookTypeImports.add(item.replace('type ', ''));
          } else {
            allHookImports.add(item);
          }
        }
      }
    }
    
    if (allHookImports.size > 0 || allHookTypeImports.size > 0) {
      const importParts = [];
      if (allHookImports.size > 0) {
        importParts.push(...Array.from(allHookImports));
      }
      if (allHookTypeImports.size > 0) {
        importParts.push(...Array.from(allHookTypeImports).map(t => `type ${t}`));
      }
      
      const newImport = `import { ${importParts.join(', ')} } from "@/hooks";`;
      
      let firstImportRemoved = false;
      for (const line of hookImportLines) {
        if (!firstImportRemoved) {
          content = content.replace(line, newImport);
          firstImportRemoved = true;
        } else {
          content = content.replace(line + '\n', '');
          content = content.replace(line, '');
        }
      }
      
      modified = true;
      changes.push(`Consolidated ${hookImportLines.length} hook imports → barrel`);
    }
  }
  
  if (modified) {
    // Clean up any double blank lines
    content = content.replace(/\n\n\n+/g, '\n\n');
    fs.writeFileSync(filePath, content);
    return { filePath, changes };
  }
  
  return null;
}

// Main execution
console.log('🔄 Migrating to barrel imports...\n');

const files = getAllTsxFiles(SRC_DIR);
const results = [];

for (const file of files) {
  const result = processFile(file);
  if (result) {
    results.push(result);
  }
}

console.log(`\n✅ Migration complete!\n`);
console.log(`📊 Summary:`);
console.log(`   - Files scanned: ${files.length}`);
console.log(`   - Files modified: ${results.length}`);

if (results.length > 0) {
  console.log(`\n📝 Modified files:`);
  for (const { filePath, changes } of results) {
    const relative = path.relative(path.join(__dirname, '..'), filePath);
    console.log(`   - ${relative}`);
    for (const change of changes) {
      console.log(`     └─ ${change}`);
    }
  }
}
