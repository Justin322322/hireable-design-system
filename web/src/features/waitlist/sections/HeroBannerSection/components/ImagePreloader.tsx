import React from "react";

// Images to preload for faster display
const PRELOAD_IMAGES = [
  // Hero Image
  "/images/20251001-1754-sleek-monitor-concept-simple-compose-01k6fk1e84efz.png",

  // Browser Chrome
  "/icons/icon-browser-back.svg",
  "/icons/icon-browser-forward.svg",
  "/icons/icon-browser-share.svg",
  "/icons/icon-browser-menu.svg",
  "/icons/chatbot-icon.svg",

  // Feature Pills
  "/icons/icon-trial-drive.svg",
  "/icons/icon-ai-matchmaking.svg",
  "/icons/icon-kpi-tracker.svg",

  // Sidebar & Navigation
  "/icons/icon-home.svg",
  "/icons/icon-discover-talent.svg",
  "/icons/icon-jobs.svg",
  "/icons/icon-notifications.svg",
  "/icons/icon-messages.svg",
  "/icons/icon-trials.svg",
  "/icons/icon-team-dashboard.svg",
  "/icons/icon-goals-kpis.svg",
  "/icons/icon-talent-wellness.svg",
  "/icons/icon-team-members.svg",
  "/icons/icon-help-center.svg",
  "/icons/icon-settings.svg",

  // Avatars & People
  "/images/Camille-Mercado.svg",
  "/images/Michaela.svg",
  "/images/Bianca-Santos.svg",
  "/images/Nicolle-Fernandez.svg",
  "/images/Michael-Sy.svg",
  "/images/Isabel-Reyes.svg",
  "/images/Catalina-Ramos.svg",
  "/images/Jethro-Soriano.svg",

  // Matches
  "/icons/AI-Matchmaker-icon.svg",
];

export const ImagePreloader: React.FC = () => {
  // Preload images immediately on mount using both Image API and link preload
  React.useEffect(() => {
    // Use Image API for caching
    PRELOAD_IMAGES.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });

    // Also add link preload for priority loading
    PRELOAD_IMAGES.forEach((src) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = src;
      document.head.appendChild(link);
    });
  }, []);

  return null;
};
