/**
 * Tailwind CSS v4 Configuration
 *
 * In Tailwind v4, most customization (especially colors) happens in CSS using @theme.
 * This config file is now minimal and only contains:
 * - Content paths for Tailwind to scan
 * - Custom plugins that can't be defined in CSS
 * - Font family references (pointing to CSS variables)
 * - Framework-specific settings (like container, darkMode)
 */

module.exports = {
  // Tell Tailwind which files to scan for class names
  content: ["./src/**/*.{html,js,ts,jsx,tsx}", "./components/**/*.{ts,tsx}"],

  theme: {
    extend: {
      // Font families - referencing CSS variables from globals.css :root
      fontFamily: {
        display: "var(--display-font-family)",
        "heading-m": "var(--heading-m-font-family)",
        "heading-s": "var(--heading-s-font-family)",
        "text-large-b": "var(--text-large-b-font-family)",
        "text-medium": "var(--text-medium-font-family)",
        "text-paragraph": "var(--text-paragraph-font-family)",
        "text-paragraph-b": "var(--text-paragraph-b-font-family)",
        "text-s": "var(--text-s-font-family)",
        "text-s-b": "var(--text-s-b-font-family)",
        "text-XS": "var(--text-XS-font-family)",
        "text-XXS": "var(--text-XXS-font-family)",
        sans: [
          "var(--font-inter)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        "dm-sans": ["var(--font-dm-sans)", "sans-serif"],
      },

      // Border radius - referencing CSS variables
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      // Keyframe animations
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          to: { opacity: "1", transform: "none" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "none" },
        },
        marquee: {
          "0%": { transform: "translate(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          "0%": { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        shimmer: {
          "0%, 90%, to": {
            backgroundPosition: "calc(-100% - var(--shimmer-width)) 0",
          },
          "30%, 60%": {
            backgroundPosition: "calc(100% + var(--shimmer-width)) 0",
          },
        },
      },

      // Animation utilities
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 1s var(--animation-delay, 0s) ease forwards",
        "fade-up": "fade-up 1s var(--animation-delay, 0s) ease forwards",
        marquee: "marquee var(--duration) infinite linear",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        shimmer: "shimmer 8s infinite",
      },

      // Shadcn/UI colors - using HSL format from :root
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
    },

    // Container settings
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
  },

  // Plugins for custom utilities
  plugins: [
    // Design system utility classes
    function ({ addUtilities }) {
      const newUtilities = {
        // Status badges
        ".status-badge-matched": {
          "@apply rounded-[3px] px-1.5 py-0.5 text-[7px] leading-[9px] font-semibold tracking-[0.13px] whitespace-nowrap uppercase":
            {},
          "background-color": "var(--color-success-light)",
          color: "var(--color-success)",
        },
        ".status-badge-client": {
          "@apply rounded-[3px] px-1.5 py-0.5 text-[7px] leading-[9px] font-semibold tracking-[0.13px] whitespace-nowrap uppercase":
            {},
          "background-color": "var(--color-highlight-blue)",
          color: "var(--color-client)",
        },
        ".status-badge-warning": {
          "@apply rounded-[3px] px-1.5 py-0.5 text-[7px] leading-[9px] font-semibold tracking-[0.13px] whitespace-nowrap uppercase":
            {},
          "background-color": "var(--color-warning-light)",
          color: "var(--color-warning)",
        },
        ".status-badge-talent": {
          "@apply rounded-[3px] px-1.5 py-0.5 text-[7px] leading-[9px] font-semibold tracking-[0.13px] whitespace-nowrap uppercase":
            {},
          "background-color": "var(--color-error-light)",
          color: "var(--color-talent)",
        },

        // Trial badge
        ".trial-badge": {
          "@apply inline-flex items-center justify-center rounded-[2.57px] px-[5.15px] py-[2.57px]":
            {},
          "background-color": "var(--color-trial-orange-light)",
        },
        ".trial-badge-text": {
          "@apply text-[7.72px] leading-[120%] font-normal tracking-[0.2px]":
            {},
          color: "var(--color-trial-orange)",
        },

        // Hover states
        ".hover-neutral": {
          "@apply transition-colors bg-white": {},
          "&:hover": {
            "background-color": "var(--color-neutral-150)",
          },
        },

        // Backgrounds
        ".progress-bar-bg": {
          "background-color": "var(--color-neutral-150)",
        },
        ".avatar-bg": {
          "background-color": "var(--color-avatar-bg)",
        },
        ".avatar-bg-light": {
          "background-color": "var(--color-avatar-bg-light)",
        },
        ".comment-bg": {
          "background-color": "var(--color-comment-bg)",
        },
        ".kanban-column-bg": {
          "background-color": "var(--color-neutral-150)",
        },

        // Count badge
        ".count-badge": {
          "@apply flex h-[15.71px] min-w-[15.71px] items-center justify-center rounded-full px-[5.24px] text-[7.9px] leading-[9.4px] font-medium":
            {},
          "background-color": "var(--color-neutral-100)",
          color: "var(--color-neutral-600)",
        },
      };

      addUtilities(newUtilities);
    },
  ],

  // Dark mode configuration
  darkMode: ["class"],
};
