import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  ScanLine,
  History,
  Wallet,
  ClipboardCheck,
} from "lucide-react";
import { articles } from "@/lib/content";
import ScrollCue from "@/components/ScrollCue";

// Change these extensions if your files are .jpg or .webp.
const media = {
  heroTag: "/images/vtag-product1.png",
  deviceTag: "/images/vtag-product2.png",
  vehicle: "/images/car-img1.png",
  articles: [
    "/images/articleimg1.jpg",
    "/images/articleimg2.jpg",
    "/images/articleimg3.jpg",
  ],
};

export default function Home() {
  return (
    <main className="vtag-home">
      <section className="hero hero-v3">
        <div className="hero-atmosphere" aria-hidden="true">
          <div className="halo halo-one" />
          <div className="halo halo-two" />
          <div className="hero-grid" />
        </div>
        <div className="hero-content container">
          <div className="hero-copy">
            <span className="eyebrow">
              A CONNECTED IDENTITY FOR EVERY VEHICLE{" "}
              <span className="eyebrow-line" />
            </span>
            <h1>
              EVERY VEHICLE.
              <br />
              <span>HAS A STORY.</span>
            </h1>
            <p>
              Know what has happened, what needs attention and what comes next.
              Keep useful information connected to the vehicle, wherever its
              journey takes it.
            </p>
            <div className="hero-actions">
              <Link className="button vtag-primary-button" href="/how-it-works">
                WHY V-TAG? <ArrowUpRight size={18} />
              </Link>
              <Link className="text-link device-hover-pill" href="/the-vtag">
                MEET THE DEVICE <ArrowRight size={17} />
              </Link>
            </div>
            <span className="launch-note">
              V-TAG is in development. Product features and availability are
              subject to launch.
            </span>
          </div>
          <div className="hero-showcase">
            <div className="hero-vehicle">
              <Image
                src={media.vehicle}
                alt="Vehicle showcasing the V-TAG concept"
                fill
                priority
                sizes="(max-width: 800px) 100vw, 50vw"
                className="hero-vehicle-photo"
              />
            </div>
            <div className="hero-tag">
              <Image
                src={media.heroTag}
                alt="V-TAG vehicle identity device"
                width={900}
                height={900}
                priority
                className="hero-tag-photo"
              />
            </div>
            <span className="showcase-label">
              ONE SMALL TAG. A CONNECTED VEHICLE HISTORY.
            </span>
          </div>
        </div>
        <div className="hero-bottom container">
          <span>BUILT FOR VEHICLES OF EVERY KIND.</span>
          <ScrollCue />
        </div>
      </section>

      <section className="benefit-strip" aria-label="Why V-TAG matters">
        <div className="container benefit-strip-grid">
          <div>
            <ClipboardCheck aria-hidden="true" />
            <strong>Understand its history.</strong>
            <span>Keep maintenance, repairs and inspections in context.</span>
          </div>
          <div>
            <History aria-hidden="true" />
            <strong>Know what&apos;s next.</strong>
            <span>
              See upcoming maintenance, inspections and key milestones.
            </span>
          </div>
          <div>
            <Wallet aria-hidden="true" />
            <strong>Make handovers easier.</strong>
            <span>
              Share a clearer, evidence-led history when ownership changes.
            </span>
          </div>
        </div>
      </section>

      <section className="statement section-pad">
        <div className="container statement-inner">
          <span className="eyebrow">01 / WHY IT MATTERS</span>
          <h2>
            Vehicles have complex lives.
            <br />
            <em>Their histories shouldn&apos;t be.</em>
          </h2>
          <p>
            Whether it is a motorcycle, van, boat, agricultural machine or
            family car, a vehicle accumulates valuable information over time.
            V-TAG is being built to connect that information to the vehicle
            itself, so owners, operators and future buyers can make
            better-informed decisions.
          </p>
          <Link className="underline-link" href="/how-it-works">
            SEE THE BENEFITS <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      <section className="product-section">
        <div className="product-image">
          <div className="product-image-inner">
            <Image
              src={media.deviceTag}
              alt="Black V-TAG NFC device, product concept"
              width={900}
              height={900}
              className="product-photo"
            />
          </div>
          <span className="image-label">THE V-TAG / PRODUCT CONCEPT</span>
        </div>
        <div className="product-copy">
          <span className="eyebrow">02 / THE DEVICE</span>
          <h2>
            A small tag.
            <br />A useful connection.
          </h2>
          <p>
            Designed as a discreet, passive NFC link between a physical vehicle
            and its digital identity. Installation and placement will depend on
            vehicle type, surface and the final validated hardware design.
          </p>
          <Link className="button dark" href="/the-vtag">
            EXPLORE THE TAG <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      <section className="features section-pad dark-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow light">03 / THE EVERYDAY BENEFITS</span>
            <h2>
              More than a place
              <br />
              <span>to store documents.</span>
            </h2>
          </div>
          <div className="feature-grid">
            <article>
              <History />
              <span>01</span>
              <h3>Never lose the thread.</h3>
              <p>
                See what work was done and when, so the next repair or service
                starts with context.
              </p>
            </article>
            <article>
              <ClipboardCheck />
              <span>02</span>
              <h3>Stay one step ahead.</h3>
              <p>
                Bring maintenance, inspection findings and service reminders
                into a clearer ownership picture.
              </p>
            </article>
            <article>
              <ShieldCheck />
              <span>03</span>
              <h3>Show your evidence.</h3>
              <p>
                Make supporting records accessible to the people who need them,
                with their evidence status clearly distinguished.
              </p>
            </article>
            <article>
              <ScanLine />
              <span>04</span>
              <h3>One simple connection.</h3>
              <p>
                Use a discreet NFC tag to connect the physical vehicle to its
                evolving digital history.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="trust section-pad">
        <div className="container trust-layout">
          <div>
            <span className="eyebrow">
              04 / BUILT FOR REAL VEHICLE LIFECYCLES
            </span>
            <h2>
              Clarity for
              <br />
              every journey.
            </h2>
          </div>
          <div>
            <p>
              From workshop repairs to inspections, modifications and changing
              owners, vehicle information is often fragmented. V-TAG aims to
              bring useful records together across different vehicle types
              without presenting an unverified claim as proven fact.
            </p>
            <p>
              Owner-added information and independently supported records should
              be clearly distinguishable. No digital record can guarantee a
              vehicle&apos;s condition or value.
            </p>
            <Link className="underline-link" href="/how-it-works">
              HOW TRUST WORKS <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="vtag-video-section section-pad">
        <div className="container">
          <span className="eyebrow">05 / THE BIGGER PICTURE</span>
          <h2>Built for the journey.</h2>
          <div className="vtag-video-frame">
            <iframe
              src="https://www.youtube-nocookie.com/embed/PkYpD54RoDc"
              title="V-TAG featured video"
              loading="lazy"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="editorial section-pad">
        <div className="container">
          <div className="editorial-heading">
            <div>
              <span className="eyebrow">06 / ARTICLES</span>
              <h2>For the road ahead.</h2>
            </div>
            <Link className="underline-link" href="/articles">
              ALL ARTICLES <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="article-grid">
            {articles.slice(0, 3).map((a, i) => (
              <Link
                className="article-card"
                key={a.slug}
                href={"/articles/" + a.slug}
              >
                <div className="article-art article-image-wrap">
                  <Image
                    src={media.articles[i]}
                    alt={a.title}
                    fill
                    sizes="(max-width: 540px) 100vw, (max-width: 800px) 50vw, 33vw"
                    className="article-thumbnail"
                  />
                  <ArrowUpRight className="article-arrow" size={30} />
                </div>
                <div className="article-meta">
                  {a.category} <span>·</span> {a.read}
                </div>
                <h3>{a.title}</h3>
                <p>{a.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="end-cta">
        <div className="container end-cta-layout">
          <div className="end-cta-copy">
            <span className="eyebrow light">THE ROAD AHEAD</span>
            <h2>
              EVERY VEHICLE.
              <br />
              ONE IDENTITY.
              <br />
              V-TAG.
            </h2>
            <Link className="button white" href="/about">
              DISCOVER OUR MISSION <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="end-cta-product">
            <Image
              src={media.heroTag}
              alt="V-TAG vehicle identity device"
              width={900}
              height={900}
              sizes="(max-width: 540px) 85vw, (max-width: 800px) 70vw, 40vw"
              className="end-cta-tag-image"
            />
          </div>
        </div>
      </section>

      <style>{`
        .vtag-home { --vtag-primary: #C1EFA3; --vtag-accent: #87A772; }
        .vtag-home .hero-v3 .eyebrow, .vtag-home .hero-v3 h1 span, .vtag-home .statement h2 em { color: var(--vtag-accent); }
        .vtag-home .hero-v3 .hero-grid { background-image: radial-gradient(circle, var(--vtag-accent) 1px, transparent 1.7px); }
        .vtag-home .vtag-primary-button { background: var(--vtag-primary); color: #202020; border: 1px solid var(--vtag-primary); }
        .vtag-home .vtag-primary-button:hover { background: var(--vtag-accent); border-color: var(--vtag-accent); }
        .vtag-home .device-hover-pill { padding: 15px 20px; border: 1px solid transparent; border-radius: 999px; transition: border-color .25s, background .25s, transform .25s; }
        .vtag-home .device-hover-pill:hover, .vtag-home .device-hover-pill:focus-visible { border-color: var(--vtag-accent); background: rgba(255,255,255,.4); transform: translateY(-2px); }
        .vtag-home .hero-showcase { isolation: isolate; }
        .vtag-home .hero-vehicle { position: absolute; inset: 0; z-index: 0; pointer-events: none; opacity: .78; }
        .vtag-home .hero-vehicle-photo { object-fit: contain; object-position: center; }
        .vtag-home .hero-tag { position: relative; z-index: 2; }
        .vtag-home .hero-tag-photo { mix-blend-mode: normal; }
        .vtag-home .showcase-label { z-index: 3; color: var(--vtag-accent); }
        .vtag-home .benefit-strip-grid strong { font-size: 17.6px; }
        .vtag-home .benefit-strip-grid span { font-size: 14.3px; }
        .vtag-home .article-image-wrap { position: relative; padding: 0; }
        .vtag-home .article-thumbnail { object-fit: cover; transition: transform .5s; }
        .vtag-home .article-card:hover .article-thumbnail { transform: scale(1.055); }
        .vtag-home .article-arrow { position: absolute; top: 20px; right: 20px; z-index: 2; color: white; filter: drop-shadow(0 1px 4px rgba(0,0,0,.5)); }
        .vtag-home .vtag-video-section { background: #f8f8f8; }
        .vtag-home .vtag-video-section h2 { font-size: clamp(42px,5vw,78px); letter-spacing: -.065em; margin: 25px 0 40px; }
        .vtag-home .vtag-video-frame { width: 100%; aspect-ratio: 16/9; overflow: hidden; border-radius: 22px; background: #202020; }
        .vtag-home .vtag-video-frame iframe { width: 100%; height: 100%; border: 0; display: block; }
        .vtag-home .end-cta { overflow: hidden; }
        .vtag-home .end-cta-layout { display: grid; grid-template-columns: 1.1fr .9fr; align-items: center; gap: 35px; }
        .vtag-home .end-cta-copy { position: relative; z-index: 2; }
        .vtag-home .end-cta h2 { font-size: clamp(54px,7vw,115px); }
        .vtag-home .end-cta-product { display: flex; align-items: center; justify-content: center; min-width: 0; }
        .vtag-home .end-cta-tag-image { display: block; width: 100%; max-width: 560px; height: auto; object-fit: contain; filter: drop-shadow(0 28px 35px rgba(0,0,0,.3)); }
        @media (max-width: 800px) {
          .vtag-home .end-cta-layout { grid-template-columns: 1fr; }
          .vtag-home .end-cta { padding: 100px 0 0; }
          .vtag-home .end-cta-product { position: relative; height: 280px; justify-content: flex-start; }
        }
        @media (max-width: 540px) {
          .vtag-home .end-cta-product { height: 250px; }
          .vtag-home .end-cta-tag-image { position: absolute; width: 85vw; max-width: none; left: 60%; top: 0; }
          .vtag-home .hero-vehicle { opacity: .55; }
          .vtag-home .vtag-video-frame { border-radius: 12px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .vtag-home .article-thumbnail, .vtag-home .device-hover-pill { transition: none; }
        }
      `}</style>
    </main>
  );
}
