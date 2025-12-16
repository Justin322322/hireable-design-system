/** @type {import('stylelint').Config} */
const config = {
  extends: ["stylelint-config-standard"],
  customSyntax: "postcss-syntax",
  rules: {
    // Disable rules that conflict with Tailwind v4
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
          "layer",
          "theme",
          "config",
          "import",
        ],
      },
    ],
    "function-no-unknown": [
      true,
      {
        ignoreFunctions: ["theme", "screen"],
      },
    ],

    // Disable stylistic rules - let Prettier handle formatting
    "at-rule-empty-line-before": null,
    "rule-empty-line-before": null,
    "custom-property-empty-line-before": null,
    "declaration-empty-line-before": null,

    // Allow any color format (rgba, hex, etc.)
    "color-function-notation": null,
    "color-function-alias-notation": null,
    "alpha-value-notation": null,
    "color-hex-length": null,

    // Allow vendor prefixes (needed for webkit scrollbar styling)
    "property-no-vendor-prefix": null,
    "value-no-vendor-prefix": null,

    // Disable other noisy rules
    "selector-class-pattern": null,
    "custom-property-pattern": null,
    "keyframes-name-pattern": null,
    "no-descending-specificity": null,
    "declaration-property-value-no-unknown": null,
    "no-empty-source": null,
    "import-notation": null,
    "value-keyword-case": null,
    "declaration-block-no-redundant-longhand-properties": null,

    // Keep useful error detection
    "block-no-empty": true,
    "color-no-invalid-hex": true,
    "declaration-block-no-duplicate-properties": true,
    "no-duplicate-selectors": true,
    "font-family-no-duplicate-names": true,
    "unit-no-unknown": true,
    "property-no-unknown": true,
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global"],
      },
    ],
    "selector-pseudo-element-no-unknown": true,
  },
  ignoreFiles: ["node_modules/**", ".next/**", "dist/**", "coverage/**"],
};

export default config;
