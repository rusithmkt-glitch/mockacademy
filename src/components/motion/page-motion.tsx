"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Page-scoped motion. Rendered inside each page so GSAP only touches DOM that
 * has already hydrated; running this from the root layout raced the page
 * segment's hydration and caused attribute mismatches.
 */
export function PageMotion() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ctx: gsap.Context | undefined;
    let refreshFrame = 0;
    let bootFrame = 0;

    const setup = () => {
      ctx = gsap.context(() => {
        const heroItems = gsap.utils.toArray<HTMLElement>("[data-hero-item]");
        if (heroItems.length) {
          gsap.from(heroItems, {
            autoAlpha: 0,
            y: 26,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.1,
            delay: 0.05,
          });
        }

        const heroVisual =
          document.querySelector<HTMLElement>("[data-hero-visual]");
        if (heroVisual) {
          gsap.from(heroVisual, {
            autoAlpha: 0,
            y: 34,
            scale: 0.985,
            duration: 1.1,
            ease: "power3.out",
            delay: 0.2,
          });
        }

        const revealElements =
          gsap.utils.toArray<HTMLElement>("[data-reveal]");
        const belowFold = revealElements.filter(
          (element) =>
            element.getBoundingClientRect().top > window.innerHeight * 0.92,
        );

        if (belowFold.length) {
          gsap.set(belowFold, { autoAlpha: 0, y: 30 });
          ScrollTrigger.batch(belowFold, {
            start: "top 88%",
            once: true,
            onEnter: (batch) =>
              gsap.to(batch, {
                autoAlpha: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.08,
                overwrite: true,
              }),
          });
        }

        gsap.utils
          .toArray<HTMLElement>("[data-parallax]")
          .forEach((element) => {
            const amount = Number(element.dataset.parallax ?? 0.1);
            const trigger =
              element.closest("section") ?? element.parentElement ?? element;

            gsap.to(element, {
              yPercent: amount * 100,
              ease: "none",
              scrollTrigger: {
                trigger,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.6,
              },
            });
          });

        gsap.utils.toArray<HTMLElement>("[data-float]").forEach((element) => {
          gsap.to(element, {
            y: -9,
            duration: 3.4,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });
        });
      });

      refreshFrame = window.requestAnimationFrame(() =>
        ScrollTrigger.refresh(),
      );
    };

    bootFrame = window.requestAnimationFrame(() => {
      bootFrame = window.requestAnimationFrame(setup);
    });

    return () => {
      window.cancelAnimationFrame(bootFrame);
      window.cancelAnimationFrame(refreshFrame);
      ctx?.revert();
    };
  }, [pathname]);

  return null;
}
