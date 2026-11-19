"use client";

import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

export default function ScrollCue() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    let dismissed = window.scrollY > 2;
    const dismiss = () => {
      dismissed = true;
      setVisible(false);
    };
    const onScroll = () => { if (window.scrollY > 2) dismiss(); };
    const onKey = (event: KeyboardEvent) => {
      if (["ArrowDown", "ArrowUp", "PageDown", "PageUp", " ", "Home", "End"].includes(event.key)) dismiss();
    };
    const timer = window.setTimeout(() => {
      if (!dismissed && window.scrollY <= 2) setVisible(true);
    }, 1500);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("wheel", dismiss, { passive: true });
    window.addEventListener("touchmove", dismiss, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", dismiss);
      window.removeEventListener("touchmove", dismiss);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div className={`vtag-scroll-cue ${visible ? "is-visible" : "is-hidden"}`} aria-hidden={!visible}>
      <span>SCROLL TO EXPLORE</span>
      <ArrowDown size={22} strokeWidth={1.7} aria-hidden="true" />
    </div>
  );
}
