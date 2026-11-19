"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import gsap from "gsap";
import { BrandMark } from "@/components/logo";

const STORAGE_KEY = "ma-cookie-consent";
const CHANGE_EVENT = "ma-consent-change";

type ConsentWindow = Window & {
  gtag?: (...args: unknown[]) => void;
  dataLayer?: unknown[];
};

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(CHANGE_EVENT, onChange);
  };
}

const needsChoice = () => window.localStorage.getItem(STORAGE_KEY) === null;

export function ConsentBanner() {
  const visible = useSyncExternalStore(subscribe, needsChoice, () => false);
  const cardRef = useRef<HTMLDivElement>(null);
  const finishedRef = useRef(false);

  useEffect(() => {
    if (!visible || !cardRef.current) return;
    gsap.fromTo(
      cardRef.current,
      { y: 28, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.55, ease: "power3.out", delay: 0.6 },
    );
  }, [visible]);

  function choose(granted: boolean) {
    const w = window as ConsentWindow;
    w.gtag?.("consent", "update", {
      ad_storage: granted ? "granted" : "denied",
      ad_user_data: granted ? "granted" : "denied",
      ad_personalization: granted ? "granted" : "denied",
      analytics_storage: granted ? "granted" : "denied",
    });
    w.dataLayer?.push({
      event: "cookie_consent",
      consent: granted ? "granted" : "denied",
    });
    const finish = () => {
      if (finishedRef.current) return;
      finishedRef.current = true;
      window.localStorage.setItem(STORAGE_KEY, granted ? "granted" : "denied");
      window.dispatchEvent(new Event(CHANGE_EVENT));
    };
    if (!cardRef.current) {
      finish();
      return;
    }
    gsap.to(cardRef.current, {
      y: 20,
      autoAlpha: 0,
      duration: 0.35,
      ease: "power2.in",
      onComplete: finish,
    });
    // Hidden tabs pause GSAP's ticker; persist the choice regardless.
    window.setTimeout(finish, 600);
  }

  if (!visible) return null;

  return (
    <div
      ref={cardRef}
      role="region"
      aria-label="Cookie choice"
      className="fixed bottom-4 left-4 z-50 w-[min(24rem,calc(100vw-2rem))] rounded-2xl border border-plum/20 bg-cream/95 p-5 shadow-[0_24px_60px_rgba(31,43,89,0.22)] backdrop-blur"
    >
      <div className="flex items-center gap-2.5">
        <BrandMark className="size-7" />
        <p className="display text-sm font-semibold text-foreground">
          Cookies on MockAcademy
        </p>
      </div>
      <p className="mt-2.5 text-[0.8rem] leading-relaxed text-muted-foreground">
        We use analytics cookies to see which papers and lessons help people
        pass. Nothing is measured until you choose, and you can clear this
        choice anytime by clearing your browser data.
      </p>
      <div className="mt-4 flex items-center gap-2.5">
        <button
          type="button"
          onClick={() => choose(true)}
          className="rounded-full bg-navy px-4 py-2 text-[0.78rem] font-semibold text-cream transition-colors hover:bg-plum"
        >
          Accept
        </button>
        <button
          type="button"
          onClick={() => choose(false)}
          className="rounded-full border border-navy/25 px-4 py-2 text-[0.78rem] font-semibold text-navy transition-colors hover:border-navy/60"
        >
          Decline
        </button>
      </div>
    </div>
  );
}