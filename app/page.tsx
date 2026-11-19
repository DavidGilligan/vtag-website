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
import WhyItMattersVisual from "@/components/WhyItMattersVisual";
import VideoOnDemand from "@/components/VideoOnDemand";
import InitialScrollReset from "@/components/InitialScrollReset";
import { assetPath } from "../lib/assetPath";

// Change these extensions if your files are .jpg or .webp.
const media = {
  heroTag: assetPath("/images/vtag-product1.png"),
  deviceTag: assetPath("/images/vtag-product2.png"),
  vehicle: assetPath("/images/car-img1.png"),
  articles: [
    assetPath("/images/articleimg1.jpg"),
    assetPath("/images/articleimg2.jpg"),
    assetPath("/images/articleimg3.jpg"),
  ],
};

export default function Home() {
  return (
    <main className="vtag-home">
      <InitialScrollReset />
      <section className="hero hero-v3">
        <div className="hero-atmosphere" aria-hidden="true">
          <div className="halo halo-one" />
          <div className="halo halo-two" />
          <div className="hero-grid" />
        </div>
        <div className="hero-content container">
          <div className="hero-copy">
            <h1 className="vtag-display-heading">
              EVERY VEHICLE.
              <br />
              <span>HAS A STORY.</span>
            </h1>
            <p className="hero-subtitle">
              A CONNECTED IDENTITY FOR EVERY VEHICLE.
            </p>
            <p className="hero-description">
              Every vehicle has a story worth keeping. V-TAG connects its
              history, important records and what comes next in one place,
              helping you care for it today and share its story tomorrow.
            </p>
            <p className="hero-kicker">BUILT FOR VEHICLES OF EVERY KIND.</p>
            <div className="hero-actions">
              <Link className="button vtag-primary-button" href="/the-vtag">
                MEET THE DEVICE <ArrowUpRight size={18} />
              </Link>
              <Link
                className="text-link device-hover-pill"
                href="/how-it-works"
              >
                WHY V-TAG? <ArrowRight size={17} />
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
          </div>
        </div>
        <div className="hero-bottom container">
          <ScrollCue />
        </div>
      </section>

      <section className="benefit-strip" aria-label="Why V-TAG matters">
        <div className="container benefit-strip-grid">
          <div className="benefit-item">
            <ClipboardCheck className="benefit-icon" aria-hidden="true" />
            <div className="benefit-text">
              <strong>Understand its history.</strong>
              <span>Keep maintenance, repairs and inspections in context.</span>
            </div>
          </div>
          <div className="benefit-item">
            <History className="benefit-icon" aria-hidden="true" />
            <div className="benefit-text">
              <strong>Know what&apos;s next.</strong>
              <span>See upcoming maintenance, inspections and key milestones.</span>
            </div>
          </div>
          <div className="benefit-item">
            <ShieldCheck className="benefit-icon" aria-hidden="true" />
            <div className="benefit-text">
              <strong>Your information stays yours.</strong>
              <span>Your personal information stays private and is never passed on with the vehicle.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="statement section-pad statement-interactive">
        <div className="container statement-interactive-layout">
          <div className="statement-inner statement-interactive-copy">
            <span className="eyebrow">01 / WHY IT MATTERS</span>
            <h2>
              <span className="statement-first-line">Vehicles have complex lives.</span>
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
          <WhyItMattersVisual tagSrc={media.heroTag} />
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

      <section className="trust section-pad community-promise">
        <div className="container trust-layout">
          <div>
            <span className="eyebrow">04 / BUILT WITH OUR COMMUNITY</span>
            <h2>Community led.<br /><span>Always and forever.</span></h2>
          </div>
          <div>
            <p>V-TAG is for everyone who cares about a vehicle, from everyday owners and buyers to petrolheads, collectors, workshops and clubs.</p>
            <p>We will share our vision, listen to your ideas and put future developments to a community vote. The people using V-TAG should help shape what it becomes.</p>
            <Link className="underline-link" href="/community">SHAPE WHAT COMES NEXT <ArrowUpRight size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="vtag-video-section section-pad">
        <div className="container">
          <span className="eyebrow">05 / THE BIGGER PICTURE</span>
          <h2>Built for the journey.</h2>
          <VideoOnDemand />
        </div>
      </section>

      <section className="editorial section-pad">
        <div className="container">
          <div className="editorial-heading">
            <div>
              <span className="eyebrow">05 / ARTICLES</span>
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
            <h2 className="vtag-display-heading">
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
    </main>
  );
}
