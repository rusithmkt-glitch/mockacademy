"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ctx: gsap.Context | undefined;
    let refreshFrame = 0;
    let bootFrame = 0;

    const setup = () => {
      ctx = gsap.context(() => {
        const progress = document.querySelector<HTMLElement>(
          "[data-scroll-progress]",
        );

        if (progress) {
          gsap.fromTo(
            progress,
            { scaleX: 0 },
            {
              scaleX: 1,
              ease: "none",
              scrollTrigger: {
                start: 0,
                end: "max",
                scrub: 0.3,
              },
            },
          );
        }
      });

      refreshFrame = window.requestAnimationFrame(() =>
        ScrollTrigger.refresh(),
      );
    };

    // Wait for hydration to finish before mutating server-rendered DOM.
    const start = () => {
      bootFrame = window.requestAnimationFrame(() => {
        bootFrame = window.requestAnimationFrame(setup);
      });
    };

    if (document.readyState === "complete") {
      start();
    } else {
      window.addEventListener("load", start, { once: true });
    }

    return () => {
      window.removeEventListener("load", start);
      window.cancelAnimationFrame(bootFrame);
      window.cancelAnimationFrame(refreshFrame);
      ctx?.revert();
    };
  }, [pathname]);

  return null;
}
