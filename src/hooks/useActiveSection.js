import { useEffect, useState } from 'react';

/**
 * Tracks which section is currently centered in the viewport so the navbar can
 * highlight the matching link. Pass a stable (module-level) array of ids.
 */
export default function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0] ?? '');

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      // A thin band across the viewport's middle: the section crossing it wins.
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
