/**
 * Style constants for CallToActionSection
 * Extracted to reduce component file size
 */

export const CTA_STYLES = {
  default: {
    heading: "#BABABA",
    paragraph: "#616161",
    ctaOuter: "linear-gradient(180.81deg, #DADADA -17.64%, #FAFAFA 99.31%)",
    ctaShadow: "0px 6px 8px rgba(0, 0, 0, 0.1)",
    ctaInner: "#FAFAFA",
    buttonText: "#616161",
    svgFilter:
      "brightness(0) saturate(100%) invert(95%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(90%) contrast(92%)",
  },
  client: {
    headingBase: "#797979",
    headingOverlay: "#BABABA",
    ctaOuter: "linear-gradient(180deg, #ACE2FD -22.19%, #E1F5FF 100%)",
    ctaShadow: "0px 2px 4px 0px #0000001A, 0px 6px 16px 2px #55C3FF3D",
    ctaInner:
      "linear-gradient(180deg, #E8F7FF 0%, #CCEDFF 46.63%, #CCEDFF 100%)",
    svgFilter:
      "brightness(0) saturate(100%) invert(91%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(87%) contrast(93%)",
    glowColor: "#ACE2FD",
    glowColorMid: "rgba(172, 226, 253, 0.7)",
    glowColorRgba: "rgba(172, 226, 253, 0.4)",
  },
  talent: {
    headingBase: "#797979",
    headingOverlay: "#BABABA",
    ctaOuter: "linear-gradient(180deg, #FDACCE -22.19%, #FFE1EE 100%)",
    ctaShadow: "0px 2px 4px 0px #0000001A, 0px 6px 16px 2px #FF6B9D3D",
    ctaInner:
      "linear-gradient(180deg, #FFF0F5 0%, #FFCCE0 46.63%, #FFCCE0 100%)",
    svgFilter:
      "brightness(0) saturate(100%) invert(91%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(87%) contrast(93%)",
    glowColor: "#FDACCE",
    glowColorMid: "rgba(253, 172, 206, 0.7)",
    glowColorRgba: "rgba(253, 172, 206, 0.4)",
  },
} as const;

export const CTA_CONTENT = {
  talent: {
    heading: "Ready to stop client juggling?",
    paragraph:
      "Join 600+ remote workers building stable career with committed clients.",
  },
  client: {
    heading: "Find your next long-term hire",
    paragraph: "Join 600+ clients to work with committed remote workers.",
  },
} as const;

export const GLOW_OPACITY = 0.85;
