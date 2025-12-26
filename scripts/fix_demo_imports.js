const fs = require('fs');
const path = require('path');

const demosDir = path.join(process.cwd(), 'src/components/demos');
const files = fs.readdirSync(demosDir).filter(f => f.endsWith('.tsx'));


files.forEach(file => {
    const filePath = path.join(demosDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 1. Fix Top-Level Imports
    // Note: My regex only matches imports ending with ";". Some might not have it.
    // Also, assumes double quotes.
    // Let's use a slightly more flexible regex.
    
    // Flexible regex: import { ... } from ["']@/components/ui/.*["'];?
    
    const flexibleRegex = /import\s+\{([^}]+)\}\s+from\s+["']@\/components\/ui\/[^"']+["'];?/g;
    
    let hasChanges = false;
    
    // Fix Top Level
    if (flexibleRegex.test(content)) {
        const symbols = new Set();
        const matches = [...content.matchAll(flexibleRegex)];
        matches.forEach(m => {
            m[1].split(',').forEach(s => {
                const trimmed = s.trim().replace(/\s+/g, ' '); // handle newlines in destructuring
                 if (trimmed) symbols.add(trimmed);
            });
        });
        
        const sorted = [...symbols].sort();
        const newImport = `import { ${sorted.join(', ')} } from "@/components/ui";`;
        
        content = content.replace(flexibleRegex, ''); // Remove old
        content = content.replace(/(\n\s*){3,}/g, '\n\n'); // Cleanup gaps
        
        // Insert
        if (content.includes('"use client"')) {
             content = content.replace(/("use client";?)/, `$1\n${newImport}`);
        } else {
             content = `${newImport}\n${content}`;
        }
        hasChanges = true;
    }
    
    // 2. Fix CodeBlocks
    content = content.replace(/code=\{`([\s\S]*?)`\}/g, (match, codeBody) => {
        if (!flexibleRegex.test(codeBody)) return match;
        
        // Fix imports inside code body
        const codeMatches = [...codeBody.matchAll(flexibleRegex)];
        const codeSymbols = new Set();
        codeMatches.forEach(m => {
             m[1].split(',').forEach(s => {
                 const trimmed = s.trim().replace(/\s+/g, ' ');
                 if (trimmed) codeSymbols.add(trimmed);
             });
        });
        
        const sortedCodeSymbols = [...codeSymbols].sort();
        // Multiline formatting for codeblocks usually looks better
        const newCodeImport = `import {\n  ${sortedCodeSymbols.join(',\n  ')},\n} from "@/components/ui";`;
        
        // Remove old imports from codeBody
        let newCodeBody = codeBody.replace(flexibleRegex, '');
        // Trim leading whitespace/newlines
        newCodeBody = newCodeBody.replace(/^\s+/, '');
        
        return `code={\`${newCodeImport}\n\n${newCodeBody}\`}`;
    });
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${file}`);
});
