/**
 * Content constants for FeaturesListSection
 * Extracted to reduce component file size and improve maintainability
 */
export const FEATURE_CONTENT = {
  talent: {
    hero: {
      subtitle: "Completely transparent",
      title: (
        <>
          Real visibility into
          <br />
          your work life
        </>
      ),
    },
    wellbeing: {
      title: "Track your own wellbeing",
      description:
        "Monitor your workload, stress levels, and work-life balance so you know when to speak up or take breaks.",
    },
    scheduling: {
      title: "Book your own interviews",
      description:
        "Schedule calls directly with potential clients instead of waiting days for a recruiter to coordinate availability.",
    },
  },
  client: {
    hero: {
      subtitle: "Completely transparent",
      title: "Real-time insight into every hire",
    },
    wellbeing: {
      title: "Track burnout before it happens.",
      description:
        "Monitor workload, satisfaction, and availability scores so you know when your remote worker needs support.",
    },
    scheduling: {
      title: "Schedule instantly, anywhere.",
      description:
        'Built-in calendar booking means no more "let me check my schedule" delays. Book calls directly from candidate profiles.',
    },
  },
} as const;
