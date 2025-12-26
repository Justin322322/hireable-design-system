import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // NOTE: eslint-plugin-tailwindcss has limited Tailwind CSS v4 (CSS-first) support.
  // Use `bun run fix:tailwind` script for canonical class fixes instead.
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Utility scripts (not part of main codebase)
    "scripts/**",
  ]),
]);

export default eslintConfig;
