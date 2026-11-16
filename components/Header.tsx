"use client";

import Link from "next/link";
import Image from "next/image";
import { assetPath } from "../lib/assetPath";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  ["Discover", "/"],
  ["How it works", "/how-it-works"],
  ["The V-TAG", "/the-vtag"],
  ["For Business", "/for-business"],
  ["Articles", "/articles"],
  ["About", "/about"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const last = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      setScrolled(y > 28);

      if (open) {
        setVisible(true);
      } else if (y < 90) {
        setVisible(true);
      } else if (y > last.current + 5) {
        setVisible(false);
      } else if (y < last.current - 5) {
        setVisible(true);
      }

      last.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [open]);

  return (
    <header
      className={`site-header ${
        scrolled ? "is-scrolled" : ""
      } ${visible || open ? "is-visible" : "is-hidden"}`}
    >
      {/* Official V-TAG logo */}
      <Link href="/" className="brand" aria-label="V-TAG homepage">
        <Image
          src={assetPath("/images/vtag-logo.svg")}
          alt="V-TAG"
          width={160}
          height={52}
          priority
          unoptimized
          className="vtag-navbar-logo"
        />
      </Link>

      {/* Desktop navigation */}
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map(([label, url]) => (
          <Link key={url} href={url}>
            {label}
          </Link>
        ))}
      </nav>

      {/* Login and mobile menu */}
      <div className="header-actions">
        <a
          className="login-pill"
          href={process.env.NEXT_PUBLIC_LOGIN_URL || "/login"}
        >
          Log in
          <ArrowUpRight size={15} />
        </a>

        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile navigation */}
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map(([label, url]) => (
            <Link key={url} href={url} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
