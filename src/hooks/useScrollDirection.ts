import { useState, useEffect } from "react";

export function useScrollDirection() {
  const [scrollDir, setScrollDir] = useState<"up" | "down">("up");
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    let lastScrollY = typeof window !== "undefined" ? window.pageYOffset : 0;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;
      setIsAtTop(scrollY < 10);
      if (Math.abs(scrollY - lastScrollY) < 4) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? "down" : "up");
      lastScrollY = Math.max(0, scrollY);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { scrollDir, isAtTop };
}
