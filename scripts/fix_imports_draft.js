const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;

/**
 * Robust AST-based utility to consolidate UI component imports.
 * Replaces:
 *   import { Button } from "@/components/ui/button";
 *   import { Card } from "@/components/ui/card";
 * With:
 *   import { Button, Card } from "@/components/ui";
 */

const demosDir = path.join(process.cwd(), 'src/components/demos');
if (!fs.existsSync(demosDir)) {
    console.error("Directory not found:", demosDir);
    process.exit(1);
}

const files = fs.readdirSync(demosDir).filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));

files.forEach(file => {
    const filePath = path.join(demosDir, file);
    const code = fs.readFileSync(filePath, 'utf8');
    
    try {
        const ast = parser.parse(code, {
            sourceType: "module",
            plugins: ["jsx", "typescript"]
        });

        const uiSymbols = new Set();
        const importNodesToRemove = new Set();
        let insertIndex = -1;

        // Find and collect all individual UI imports
        ast.program.body.forEach((node, index) => {
            if (node.type === 'ImportDeclaration') {
                const source = node.source.value;
                if (source.startsWith('@/components/ui/') && source !== '@/components/ui') {
                    if (insertIndex === -1) insertIndex = index;
                    
                    node.specifiers.forEach(spec => {
                        if (spec.type === 'ImportSpecifier') {
                            const isType = spec.importKind === 'type' || node.importKind === 'type';
                            const name = spec.imported.name || spec.imported.value;
                            if (isType) {
                                uiSymbols.add(`type ${name}`);
                            } else {
                                uiSymbols.add(name);
                            }
                        }
                    });
                    importNodesToRemove.add(node);
                }
            }
        });

        if (uiSymbols.size > 0) {
            // Build the new consolidated import node
            const sortedSymbols = Array.from(uiSymbols).sort((a, b) => {
                const aName = a.startsWith('type ') ? a.slice(5) : a;
                const bName = b.startsWith('type ') ? b.slice(5) : b;
                return aName.localeCompare(bName);
            });

            const newImportNode = {
                type: 'ImportDeclaration',
                specifiers: sortedSymbols.map(rawName => {
                    const isType = rawName.startsWith('type ');
                    const name = isType ? rawName.slice(5) : rawName;
                    return {
                        type: 'ImportSpecifier',
                        local: { type: 'Identifier', name },
                        imported: { type: 'Identifier', name },
                        importKind: isType ? 'type' : 'value'
                    };
                }),
                source: { type: 'StringLiteral', value: '@/components/ui' }
            };

            // Filter out the old nodes and insert the new one
            const newBody = [];
            let injected = false;
            
            ast.program.body.forEach((node, index) => {
                if (importNodesToRemove.has(node)) {
                    if (!injected) {
                        newBody.push(newImportNode);
                        injected = true;
                    }
                } else {
                    newBody.push(node);
                }
            });

            ast.program.body = newBody;

            // Generate the new code
            const output = generate(ast, {
                retainLines: true,
                compact: false
            }, code);

            fs.writeFileSync(filePath, output.code, 'utf8');
            console.log(`✅ Refactored imports in: ${file}`);
        }
    } catch (err) {
        console.error(`❌ Failed to parse ${file}:`, err.message);
    }
});
