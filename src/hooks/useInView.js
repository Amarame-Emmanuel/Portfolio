import { useEffect, useRef, useState } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/**
 * Reveal-on-scroll helper. Returns a ref to attach to an element and a boolean
 * that flips to true once the element scrolls into view.
 *
 * Users who prefer reduced motion see content immediately (no transition).
 */
export default function useInView({
  threshold = 0.15,
  rootMargin = '0px 0px -10% 0px',
  once = true,
} = {}) {
  const ref = useRef(null);
  // Reveal immediately (initial state) when motion is reduced or there's no
  // IntersectionObserver, so content is never stuck hidden.
  const [inView, setInView] = useState(
    () => prefersReducedMotion() || typeof IntersectionObserver === 'undefined'
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, inView];
}
