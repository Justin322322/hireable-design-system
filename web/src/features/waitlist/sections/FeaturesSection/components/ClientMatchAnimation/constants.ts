// CSS animation keyframes for path drawing (more performant than JS pathLength)
export const pathAnimationStyles = `
  @keyframes drawPath {
    from { stroke-dashoffset: 280; }
    to { stroke-dashoffset: 0; }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }
  @keyframes popIn {
    from { opacity: 0; transform: translateX(-50%) translateY(10px) scale(0.8); }
    to { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }
  }
  @keyframes glowPulse {
    from { box-shadow: 0 0 0 0 rgba(0, 167, 248, 0); }
    to { box-shadow: 0 0 30px 10px rgba(0, 167, 248, 0.6); }
  }
`;

// Animation phases for sequencing (in seconds)
export const ANIMATION_PHASES = {
  PERSON1_COLOR: 0, // Immediate
  LOGO_COLOR_START: 0.8,
  LOGO_COLOR_DURATION: 1.5,
  RAINBOW_PATH1_DURATION: 2.0,
  RAINBOW_PATH2_START: 2.0,
  RAINBOW_PATH2_DURATION: 1.5,
  GREY_LINES_HIDE: 3.5,
  BLUE_PATH_START: 3.5,
  BLUE_PATH_DURATION: 2.0,
  PERSON2_COLOR: 3.5,
  GLOW_START: 5.5,
  MATCHED_POPUP: 5.5,
} as const;

export type AnimationPhase = "idle" | "phase1" | "phase2" | "complete";
