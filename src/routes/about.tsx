import { createFileRoute, Link } from "@tanstack/react-router";
import aboutHero from "@/assets/about-hero.jpg";
import activationField from "@/assets/activation-field.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Advanced Studio" },
      { name: "description", content: "Advanced Studio builds sales networks, develops markets, manages brands and creates marketing activations." },
      { property: "og:title", content: "About — Advanced Studio" },
      { property: "og:description", content: "Connecting brands and markets." },
      { property: "og:image", content: aboutHero },
    ],
  }),
  component: About,
});

const pillars = [
  {
    n: "01",
    title: "Sales Networks",
    body: "Retail and wholesale relationships built around the right channels, partners and territories.",
  },
  {
    n: "02",
    title: "Market Development",
    body: "Focused market entry, category growth and long-term commercial direction.",
  },
  {
    n: "03",
    title: "Brand Management",
    body: "Consistent positioning, sales strategy and day-to-day stewardship across every touchpoint.",
  },
  {
    n: "04",
    title: "Marketing Activations",
    body: "Retail, field and community experiences that move brands from product to participation.",
  },
];

function About() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        <img src={aboutHero} alt="Climbers on a granite face at sunset" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1080} loading="eager" fetchPriority="high" sizes="100vw" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/70" />
        <div className="relative z-10 flex h-full items-end pb-20 px-6 md:px-10 max-w-[1600px] mx-auto">
          <div>
            <div className="text-eyebrow text-[#F7F4EE]/80 mb-6">— About Advanced Studio</div>
            <h1 className="text-display page-title max-w-5xl text-[#F7F4EE]">
              CONNECTING BRANDS
              <br />
              AND <span className="text-accent">MARKETS.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section-space mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4 text-eyebrow text-accent">— What we do</div>
          <div className="md:col-span-8">
            <p className="text-display text-[clamp(2.5rem,5vw,5rem)] leading-[1.02]">
              We connect brands with the <span className="text-accent">markets</span>, people and experiences that build lasting growth.
            </p>
          </div>
        </div>
      </section>

      {/* EDITORIAL IMAGE */}
      <section className="px-6 md:px-10">
        <figure className="relative mx-auto aspect-[4/5] max-w-[1600px] overflow-hidden md:aspect-[16/9]">
          <img
            src={activationField}
            alt="Outdoor field marketing activation"
            width={1024}
            height={1024}
            loading="lazy"
            decoding="async"
            sizes="100vw"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          <figcaption className="absolute bottom-6 left-6 text-eyebrow text-[#F7F4EE] md:bottom-10 md:left-10">
            Strategy in the market. Energy in the field.
          </figcaption>
        </figure>
      </section>

      {/* PILLARS */}
      <section className="border-t border-border">
        <div className="max-w-[1600px] mx-auto">
          {pillars.map((p, i) => (
            <div
              key={p.n}
              className={`grid gap-8 px-6 py-14 md:grid-cols-12 md:gap-10 md:px-10 md:py-20 ${i !== pillars.length - 1 ? "border-b border-border" : ""}`}
            >
              <div className="md:col-span-2 text-display text-5xl text-accent">{p.n}</div>
              <div className="md:col-span-5">
                <h2 className="text-display text-[clamp(2.5rem,5vw,5rem)]">{p.title}</h2>
              </div>
              <div className="md:col-span-5 self-end">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 py-24">
        <div className="max-w-[1600px] mx-auto flex flex-wrap items-end justify-between gap-8">
          <h2 className="text-display max-w-3xl text-[clamp(2.75rem,5vw,5rem)]">
            BUILD THE MARKET. GROW THE BRAND.
          </h2>
          <Link to="/contact" className="text-eyebrow bg-accent text-background px-8 py-5 hover:bg-accent-dark transition">
            Start a conversation →
          </Link>
        </div>
      </section>
    </>
  );
}
