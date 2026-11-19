"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { assetPath } from "../lib/assetPath";

type Props = { tagSrc: string };

export default function WhyItMattersVisual({ tagSrc }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [activated, setActivated] = useState(false);
  const [tapped, setTapped] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let tappedTimer: ReturnType<typeof setTimeout> | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setActivated(true);
        tappedTimer = setTimeout(() => setTapped(true), 1650);
        observer.disconnect();
      },
      { threshold: 0.22 }
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      if (tappedTimer) clearTimeout(tappedTimer);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`statement-interactive-visual${activated ? " is-activated" : ""}${tapped ? " is-tapped" : ""}`}
      aria-label="An iPhone approaching the V-TAG and showing a connected vehicle record"
      role="img"
    >
      <Image
        src={tagSrc}
        alt=""
        aria-hidden="true"
        width={900}
        height={900}
        sizes="(max-width: 900px) 55vw, 25vw"
        className="statement-interactive-tag"
      />
      <div className="statement-interactive-phone" aria-hidden="true">
        <Image src={assetPath("/images/phone-slide.png")} alt="" fill sizes="(max-width: 900px) 60vw, 25vw" className="phone-slide" />
        <Image src={assetPath("/images/phone-tapped.png")} alt="" fill sizes="(max-width: 900px) 60vw, 25vw" className="phone-tapped" />
      </div>
    </div>
  );
}
