const fs = require('fs');
const path = require('path');

const demosDir = path.join(process.cwd(), 'src/components/demos');
if (!fs.existsSync(demosDir)) {
    console.log("No demos dir found");
    process.exit(1);
}

const files = fs.readdirSync(demosDir).filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));

files.forEach(file => {
  const filePath = path.join(demosDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Regex to recognize: import { ... } from "@/components/ui/..."
  // We want to capture the names.
  
  const uiImports = [];
  const lines = content.split('\n');
  const newLines = [];
  const otherImports = []; // Store non-ui imports
  
  // Check if we need to process this file
  let hasUiImports = false;
  
  // First pass: collect imports to merge and build new content array excluding them
  const importsToRemove = new Set();
  
  // Simple state machine or just regex? using lines is easier for standard imports
  
  let currentUiImport = null;
  
  lines.forEach((line, index) => {
    const importMatch = line.match(/^import\s+\{(.+)\}\s+from\s+"@\/components\/ui\/([^"]+)";/);
    if (importMatch) {
       const [full, symbols, subpath] = importMatch;
       // subpath e.g. "button" or "card"
       
       // Handle aliases or complex imports later? Design system seems to use simple destructuring.
       symbols.split(',').forEach(s => {
           uiImports.push(s.trim());
       });
       hasUiImports = true;
    } else {
       newLines.push(line);
    }
  });
  
  if (hasUiImports) {
     // Reconstruct content
     // Find the last import line or top of file to insert.
     
     // Unique and Sort
     const uniqueImports = [...new Set(uiImports)].sort();
     
     // Create new import line
     const consolidatedImport = `import { ${uniqueImports.join(', ')} } from "@/components/ui";`;
     
     // Insert it after existing imports or at top
     // We simply put it with other imports.
     // Let's rely on finding the first import or keeping structure.
     
     // Easier approach: replace content with regex global replacements? No.
     
     // Let's re-read file and modify using regex to gather ALL matches first.
  }
});

// Lets try a regex global replace approach on the content string
files.forEach(file => {
  const filePath = path.join(demosDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  const importRegex = /import\s+\{([^}]+)\}\s+from\s+"@\/components\/ui\/[^"]+";/g;
  const matches = [...content.matchAll(importRegex)];
  
  if (matches.length > 0) {
      const allSymbols = new Set();
      
      matches.forEach(m => {
          m[1].split(',').forEach(s => allSymbols.add(s.trim()));
      });
      
      const sortedSymbols = [...allSymbols].sort().join(', ');
      const newImport = `import { ${sortedSymbols} } from "@/components/ui";`;
      
      // Remove all individual component imports
      let newContent = content.replace(importRegex, '');
      
      // Clean up empty newlines left behind (simplified)
      newContent = newContent.replace(/\n\s*\n\s*\n/g, '\n\n');

      // Insert new import at the top of imports
      // Find where "import" starts? or just put at top.
      
      // Heuristic: Input after the first import or at top "use client".
      
      if (newContent.includes('"use client";')) {
          newContent = newContent.replace('"use client";', `"use client";\n${newImport}`);
      } else {
          newContent = `${newImport}\n${newContent}`;
      }
      
      // Write back
      // Note: This replaces imports ANYWHERE in the file, but JS doesn't usually have imports inside blocks unless dynamic.
      // Wait! Note that `CodeBlock` strings might match this regex!
      // Regex `^import` multiline?
      // "import " usually starts a line in top level code.
      // But inside a template literal: 
      // `code={\`import ...`}`
      // The regex `import\s+...` will match that too!
      
      // I DO Want to match that inside codeblocks too, because that's Task 2!
      // But I should consolidate them differently per block.
      
      // This brute force consolidation puts ALL imports (top level AND codeblocks) into one giant import at the top of the file.
      // THIS IS WRONG. It will strip imports from CodeBlocks and put them at the top of the file!
      
      // I must differentiate top level imports from CodeBlock string content.
  }
});
