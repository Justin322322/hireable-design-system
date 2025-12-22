#!/usr/bin/env node
/**
 * Tailwind CSS Canonical Class Fixer
 * 
 * Automatically fixes Tailwind CSS classes to their canonical (shorter) forms.
 * This script handles cases that eslint-plugin-tailwindcss doesn't auto-fix.
 * 
 * Usage: bun run scripts/fix-tailwind-classes.mjs [files...]
 *        bun run lint:tailwind
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

// Canonical class replacements (arbitrary → canonical)
const replacements = [
  // Z-index
  [/\bz-\[1\]/g, 'z-1'],
  [/\bz-\[10\]/g, 'z-10'],
  [/\bz-\[20\]/g, 'z-20'],
  [/\bz-\[30\]/g, 'z-30'],
  [/\bz-\[40\]/g, 'z-40'],
  [/\bz-\[50\]/g, 'z-50'],
  
  // Flexbox shorthand
  [/\bflex-shrink-0\b/g, 'shrink-0'],
  [/\bflex-shrink\b(?!-)/g, 'shrink'],
  [/\bflex-grow-0\b/g, 'grow-0'],
  [/\bflex-grow\b(?!-)/g, 'grow'],
  
  // Line height
  [/\bleading-\[1\.5\]/g, 'leading-normal'],
  [/\bleading-\[1\.25\]/g, 'leading-tight'],
  [/\bleading-\[2\]/g, 'leading-loose'],
  [/\bleading-\[1\]/g, 'leading-none'],
  
  // Pixel values
  [/\btop-\[1px\]/g, 'top-px'],
  [/\bright-\[1px\]/g, 'right-px'],
  [/\bbottom-\[1px\]/g, 'bottom-px'],
  [/\bleft-\[1px\]/g, 'left-px'],
  
  // Spacing (8rem = 32 in Tailwind)
  [/\bmin-w-\[8rem\]/g, 'min-w-32'],
  [/\bmax-w-\[8rem\]/g, 'max-w-32'],
  
  // CSS variable shorthand (Tailwind v4)
  [/\bh-\[var\(--([^)]+)\)\]/g, 'h-(--$1)'],
  [/\bw-\[var\(--([^)]+)\)\]/g, 'w-(--$1)'],
  [/\bmin-w-\[var\(--([^)]+)\)\]/g, 'min-w-(--$1)'],
  [/\bmin-h-\[var\(--([^)]+)\)\]/g, 'min-h-(--$1)'],
  [/\bmax-w-\[var\(--([^)]+)\)\]/g, 'max-w-(--$1)'],
  [/\bmax-h-\[var\(--([^)]+)\)\]/g, 'max-h-(--$1)'],
  
  // Text utilities
  [/\boverflow-ellipsis\b/g, 'text-ellipsis'],
];

const extensions = ['.tsx', '.ts', '.jsx', '.js', '.css'];
const ignoreDirs = ['node_modules', '.next', 'out', 'build', '.git'];

function processFile(filePath) {
  let content = readFileSync(filePath, 'utf-8');
  let modified = false;
  let changes = [];

  for (const [pattern, replacement] of replacements) {
    const matches = content.match(pattern);
    if (matches) {
      content = content.replace(pattern, replacement);
      modified = true;
      changes.push(`${pattern.source} → ${replacement}`);
    }
  }

  if (modified) {
    writeFileSync(filePath, content, 'utf-8');
    console.log(`✓ Fixed: ${filePath}`);
    changes.forEach(c => console.log(`  └─ ${c}`));
    return 1;
  }
  return 0;
}

function walkDir(dir) {
  let count = 0;
  const items = readdirSync(dir);
  
  for (const item of items) {
    const fullPath = join(dir, item);
    const stat = statSync(fullPath);
    
    if (stat.isDirectory()) {
      if (!ignoreDirs.includes(item)) {
        count += walkDir(fullPath);
      }
    } else if (extensions.includes(extname(item))) {
      count += processFile(fullPath);
    }
  }
  return count;
}

// Main
const args = process.argv.slice(2);
const targetPath = args[0] || './src';

console.log('🎨 Tailwind CSS Canonical Class Fixer\n');

let fixedCount;
try {
  const stat = statSync(targetPath);
  if (stat.isDirectory()) {
    fixedCount = walkDir(targetPath);
  } else {
    fixedCount = processFile(targetPath);
  }
} catch (err) {
  console.error(`Error: ${err.message}`);
  process.exit(1);
}

console.log(`\n✨ Done! Fixed ${fixedCount} file(s).`);
