"use client";

import React, { useEffect, useRef } from "react";
import { FirstCard } from "./FirstCard";
import { LastCard } from "./LastCard";
import { MiddleCard } from "./MiddleCard";

// Images to preload for faster display
const PRELOAD_IMAGES = [
  // FirstCard images
  "/images/Camille-Mercado.svg",
  "/images/Jethro-Soriano.svg",
  "/images/Michaela.svg",
  "/icons/icon-components-3.svg",
  // MiddleCard images
  "/images/Jacob-Smith.svg",
  "/images/Catalina-Ramos.svg",
  "/images/Marc-Reyes.svg",
  "/images/Ethan-Carter.svg",
  // LastCard images
  "/images/Isabel-Reyes.svg",
  "/icons/component-18-7.svg",
  "/icons/icon-calendar.svg",
];

const FeaturesSectionComponent = (): React.ReactElement => {
  const sectionRef = useRef<HTMLElement>(null);

  // Preload images immediately on mount using both Image API and link preload
  useEffect(() => {
    // Use Image API for caching
    PRELOAD_IMAGES.forEach((src) => {
      const img = new Image();
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

  return (
    <section
      ref={sectionRef}
      className="no-drag -mt-20 flex w-full flex-col items-center justify-center gap-56 px-4 py-20 sm:-mt-32 sm:gap-80 sm:px-10 sm:py-32 lg:-mt-40 lg:flex-row lg:items-start lg:gap-10 lg:px-20 lg:py-40"
    >
      <div>
        <FirstCard />
      </div>
      <div>
        <MiddleCard />
      </div>
      <div>
        <LastCard />
      </div>
    </section>
  );
};

// Memoize component to prevent unnecessary re-renders
export const FeaturesSection = React.memo(FeaturesSectionComponent);
FeaturesSection.displayName = "FeaturesSection";
