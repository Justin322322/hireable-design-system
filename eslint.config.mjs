import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import tailwindcss from "eslint-plugin-tailwindcss";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Tailwind CSS lint rules for canonical class names
  {
    plugins: {
      tailwindcss,
    },
    settings: {
      tailwindcss: {
        // Tailwind v4 CSS-first configuration
        cssConfigPath: "./src/app/globals.css",
      },
    },
    rules: {
      // Auto-fix classes like z-[1] → z-1, flex-shrink-0 → shrink-0
      "tailwindcss/no-unnecessary-arbitrary-value": "warn",
      "tailwindcss/enforces-shorthand": "warn",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
