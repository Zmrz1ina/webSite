"use client";

import { useEffect, useRef, useState } from "react";

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

export function ScrollWheelVideo() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let duration = 0;

    const syncVideoToScroll = () => {
      frameRef.current = null;

      if (!duration || reduceMotion.matches) {
        return;
      }

      const rect = section.getBoundingClientRect();
      const scrollable = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = clamp(-rect.top / scrollable);
      const nextTime = Math.min(duration - 0.04, Math.max(0, progress * duration));

      if (Number.isFinite(nextTime) && Math.abs(video.currentTime - nextTime) > 0.025) {
        video.currentTime = nextTime;
      }
    };

    const requestSync = () => {
      if (frameRef.current === null) {
        frameRef.current = window.requestAnimationFrame(syncVideoToScroll);
      }
    };

    const handleLoadedMetadata = () => {
      duration = video.duration || 0;
      video.pause();
      setReady(true);
      requestSync();
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    window.addEventListener("scroll", requestSync, { passive: true });
    window.addEventListener("resize", requestSync);

    if (video.readyState >= 1) {
      handleLoadedMetadata();
    } else {
      video.load();
    }

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      window.removeEventListener("scroll", requestSync);
      window.removeEventListener("resize", requestSync);
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Scroll video"
      className="relative h-[260svh] overflow-clip bg-black md:h-[210vh]"
    >
      <div className="sticky top-0 h-svh overflow-hidden bg-black">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          poster="/images/partner-shin/yandex/yandex-01.jpg"
          className="absolute inset-0 size-full object-cover object-center"
        >
          <source src="/videos/wheel-scroll.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/65 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />
        <div
          className={
            ready
              ? "absolute inset-0 opacity-0 transition-opacity duration-700"
              : "absolute inset-0 bg-black transition-opacity duration-700"
          }
        />
      </div>
    </section>
  );
}

