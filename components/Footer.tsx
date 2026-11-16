import Link from "next/link";
import { assetPath } from "../lib/assetPath";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <Link className="footer-brand" href="/">
            V-TAG®
          </Link>
          <p>Your vehicle. Its history. One identity.</p>
        </div>
        <div className="footer-columns">
          <div>
            <span>EXPLORE</span>
            <Link href="/how-it-works">How it works</Link>
            <Link href="/the-vtag">The V-TAG</Link>
            <Link href="/articles">Articles</Link>
          </div>
          <div>
            <span>COMPANY</span>
            <Link href="/about">About</Link>
            <Link href="/for-business">For Business</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/help">Help</Link>
          </div>
          <div>
            <span>LEGAL</span>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/cookies">Cookies</Link>
            <Link href="/accessibility">Accessibility</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} V-TAG. All rights reserved.</span>
        <span>Built around the journey.</span>
      </div>
    </footer>
  );
}
