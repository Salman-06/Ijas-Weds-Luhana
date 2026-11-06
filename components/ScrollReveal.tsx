'use client';

import React, { useRef, useState, useEffect } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  threshold?: number;
  as?: React.ElementType;
}

export default function ScrollReveal({
  children,
  className = '',
  delayMs = 0,
  threshold = 0.12,
  as: Component = 'div',
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) {
      const timer = setTimeout(() => setIsVisible(true), 0);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          if (delayMs > 0) {
            setTimeout(() => {
              setIsVisible(true);
            }, delayMs);
          } else {
            setIsVisible(true);
          }
          observer.unobserve(el);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px', // Triggers slightly before element enters viewport for smooth anticipation
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [delayMs, threshold]);

  return (
    <Component
      ref={elementRef}
      className={`reveal-fade-up ${isVisible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </Component>
  );
}
