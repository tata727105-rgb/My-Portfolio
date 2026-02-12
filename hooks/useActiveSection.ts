import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook to determine the currently active section based on scroll position and viewport visibility.
 * Uses IntersectionObserver to identify the section that is most visible.
 * @param sectionIds An array of string IDs (e.g., ['#about', '#projects']) corresponding to the sections.
 * @returns The ID of the currently active section, or null if no section is active.
 */
export const useActiveSection = (sectionIds: string[]): string | null => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleIntersect: IntersectionObserverCallback = (entries) => {
      let closestToCenterDistance = Infinity;
      let closestToCenterId: string | null = null;
      let anyIntersecting = false;

      entries.forEach((entry) => {
        const targetId = `#${entry.target.id}`;
        if (entry.isIntersecting) {
          anyIntersecting = true;
          const viewportCenter = window.innerHeight / 2;
          const entryRect = entry.boundingClientRect;
          const entryCenter = entryRect.top + entryRect.height / 2;
          const distanceToCenter = Math.abs(entryCenter - viewportCenter);

          if (distanceToCenter < closestToCenterDistance) {
            closestToCenterDistance = distanceToCenter;
            closestToCenterId = targetId;
          }
        }
      });

      // Only update if there's a closestToCenterId found, otherwise, if nothing is intersecting,
      // it means we scrolled past all observed sections or are at the very top/bottom.
      if (closestToCenterId) {
        setActiveSection(closestToCenterId);
      } else if (!anyIntersecting) {
        // If no section is intersecting at all, set active to null.
        // This handles cases where the user scrolls between sections rapidly or at page extremes.
        setActiveSection(null);
      }
      // If anyIntersecting is true but closestToCenterId is null, it means intersections happened
      // but none were sufficiently centered (e.g., only edges are visible), so we keep the previous activeSection
      // or default to null if it was null before. This makes the highlighting more stable.
    };

    observerRef.current = new IntersectionObserver(handleIntersect, {
      root: null, // viewport
      // Adjust top/bottom margin to define the "active" zone in the middle of the viewport
      rootMargin: '-35% 0% -35% 0%', // Sections are considered 'active' when their center is within the middle 30% of the viewport
      threshold: 0, // Trigger callback as soon as element enters/leaves the rootMargin
    });

    // Observe each section
    sectionIds.forEach((id) => {
      const element = document.querySelector(id);
      if (element) {
        observerRef.current?.observe(element);
      }
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [sectionIds]);

  return activeSection;
};