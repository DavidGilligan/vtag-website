"use client";

import Link from "next/link";
import Image from "next/image";
import { assetPath } from "../lib/assetPath";
import { useEffect, useRef, useState } from "react";
import { Apple, ArrowUpRight, Menu, Play, X } from "lucide-react";

const links = [
  ["Discover", "/"],
  ["How it works", "/how-it-works"],
  ["The V-TAG", "/the-vtag"],
  ["For Business", "/for-business"],
  ["Community", "/community"],
  ["Articles", "/articles"],
  ["About", "/about"],
];

function StoreBadges() {
  // Display-only until official store listings are published.
  return (
    <div className="store-badges" aria-label="V-TAG mobile apps coming soon">
      <div className="store-badge" aria-label="App Store, coming soon">
        <Apple size={22} strokeWidth={1.8} aria-hidden="true" />
        <span><small>COMING SOON TO THE</small><strong>App Store</strong></span>
      </div>
      <div className="store-badge" aria-label="Google Play, coming soon">
        <Play size={21} strokeWidth={1.8} aria-hidden="true" />
        <span><small>COMING SOON TO</small><strong>Google Play</strong></span>
      </div>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const last = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 28);
      if (open || y < 90) setVisible(true);
      else if (y > last.current + 5) setVisible(false);
      else if (y < last.current - 5) setVisible(true);
      last.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${visible || open ? "is-visible" : "is-hidden"}`}>
      <Link href="/" className="brand" aria-label="V-TAG homepage" onClick={() => setOpen(false)}>
        <Image src={assetPath("/images/vtag-logo.svg")} alt="V-TAG" width={160} height={52} priority unoptimized className="vtag-navbar-logo" />
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map(([label, url]) => <Link key={url} href={url}>{label}</Link>)}
      </nav>
      <div className="header-actions">
        <StoreBadges />
        <a className="login-pill" href={process.env.NEXT_PUBLIC_LOGIN_URL || "/login"}>Log in <ArrowUpRight size={17} aria-hidden="true" /></a>
        <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="vtag-mobile-nav">
          {open ? <X size={27} /> : <Menu size={27} />}
        </button>
      </div>
      {open && <nav id="vtag-mobile-nav" className="mobile-nav" aria-label="Mobile navigation">
        {links.map(([label, url]) => <Link key={url} href={url} onClick={() => setOpen(false)}>{label}</Link>)}
        <StoreBadges />
      </nav>}
    </header>
  );
}
