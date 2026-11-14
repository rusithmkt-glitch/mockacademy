"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);
  const previousPath = useRef(pathname);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let lenis: Lenis | null = null;
    let syncScrollTrigger: (() => void) | undefined;
    let raf: ((time: number) => void) | undefined;
    let bootFrame = 0;

    const start = () => {
      lenis = new Lenis({
        autoRaf: false,
        lerp: 0.09,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.1,
      });

      lenisRef.current = lenis;
      syncScrollTrigger = () => ScrollTrigger.update();
      lenis.on("scroll", syncScrollTrigger);

      raf = (time: number) => lenis?.raf(time * 1000);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);
    };

    bootFrame = window.requestAnimationFrame(() => {
      bootFrame = window.requestAnimationFrame(start);
    });

    return () => {
      window.cancelAnimationFrame(bootFrame);
      if (raf) gsap.ticker.remove(raf);
      if (lenis && syncScrollTrigger) {
        lenis.off("scroll", syncScrollTrigger);
        lenis.destroy();
      }
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (previousPath.current === pathname) return;
    previousPath.current = pathname;

    const lenis = lenisRef.current;
    if (!lenis) return;

    lenis.scrollTo(0, { immediate: true, force: true });
    const frame = window.requestAnimationFrame(() => {
      lenis.resize();
      ScrollTrigger.refresh();
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
