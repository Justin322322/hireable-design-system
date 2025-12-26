const fs = require('fs');
const path = require('path');

const demosDir = path.join(process.cwd(), 'src/components/demos');
const files = fs.readdirSync(demosDir).filter(f => f.endsWith('.tsx'));

console.log(`Checking ${files.length} demo files...\n`);

files.forEach(file => {
  const content = fs.readFileSync(path.join(demosDir, file), 'utf8');
  
  // Check Top-Level Imports
  // Look for import ... from "@/components/ui/..." (Legacy)
  const legacyImportRegex = /^import\s+.*from\s+"@\/components\/ui\/.*";/gm;
  const legacyImports = content.match(legacyImportRegex);
  
  // Check CodeBlock Imports
  // Look for CodeBlocks and check their content
  // Simple heuristic: find `code={\`` and look inside
  const codeBlockRegex = /code=\{`([\s\S]*?)`\}/g;
  let codeBlockLegacyCount = 0;
  let codeBlockTotal = 0;
  
  let match;
  while ((match = codeBlockRegex.exec(content)) !== null) {
    codeBlockTotal++;
    const code = match[1];
    if (code.includes('from "@/components/ui/')) {
      codeBlockLegacyCount++;
    }
  }
  
  const status = [];
  if (legacyImports) status.push(`Legacy Top-Level Imports: ${legacyImports.length}`);
  if (codeBlockLegacyCount > 0) status.push(`Legacy CodeBlock Imports: ${codeBlockLegacyCount}/${codeBlockTotal}`);
  
  if (status.length > 0) {
    console.log(`[${file}] ⚠️  Issues Found:`);
    status.forEach(s => console.log(`  - ${s}`));
  } else {
    // Check if it HAS imports at all (maybe it uses the barrel correctly?)
    if (content.includes('from "@/components/ui"')) {
        console.log(`[${file}] ✅ Correct (Uses Barrel)`);
    } else {
        console.log(`[${file}] ❓ No UI imports found (or issues missed)`);
    }
  }
});
