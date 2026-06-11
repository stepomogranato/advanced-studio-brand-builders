import { createFileRoute, Link } from "@tanstack/react-router";
import aboutHero from "@/assets/about-hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Advanced Studio" },
      { name: "description", content: "Advanced Studio develops and distributes active, outdoor and sportswear brands through sales networks, market development and marketing activities." },
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
    body: "We build and manage retail and wholesale networks tailored to each brand's positioning across specialty, sport and lifestyle channels.",
  },
  {
    n: "02",
    title: "Market Development",
    body: "Long-term commercial strategy: market entry, channel architecture, pricing, and category growth across European territories.",
  },
  {
    n: "03",
    title: "Brand Support",
    body: "Trade marketing, retail activation, content, events and ambassadors — turning product into culture and culture into community.",
  },
];

function About() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        <img src={aboutHero} alt="Climbers on a granite face at sunset" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/70" />
        <div className="relative z-10 flex h-full items-end pb-20 px-6 md:px-10 max-w-[1600px] mx-auto">
          <div>
            <div className="text-eyebrow text-[#F7F4EE]/80 mb-6">— About Advanced Studio</div>
            <h1 className="text-display text-[#F7F4EE] text-6xl sm:text-7xl md:text-9xl max-w-5xl">
              CONNECTING BRANDS
              <br />
              AND <span className="text-accent">MARKETS.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 md:py-32 px-6 md:px-10 max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4 text-eyebrow text-accent">— What we do</div>
          <div className="md:col-span-8">
            <p className="text-display text-3xl md:text-5xl leading-[1.05]">
              Advanced Studio develops and distributes active, outdoor and sportswear brands through{" "}
              <span className="text-accent">sales networks</span>,{" "}
              <span className="text-accent">market development</span> and{" "}
              <span className="text-accent">marketing activities</span>.
            </p>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="border-t border-border">
        <div className="max-w-[1600px] mx-auto">
          {pillars.map((p, i) => (
            <div
              key={p.n}
              className={`grid md:grid-cols-12 gap-10 px-6 md:px-10 py-16 md:py-24 ${i !== pillars.length - 1 ? "border-b border-border" : ""}`}
            >
              <div className="md:col-span-2 text-display text-5xl text-accent">{p.n}</div>
              <div className="md:col-span-5">
                <h3 className="text-display text-4xl md:text-6xl">{p.title}</h3>
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
          <h2 className="text-display text-4xl md:text-6xl max-w-2xl">
            Let's grow your brand together.
          </h2>
          <Link to="/contact" className="text-eyebrow bg-accent text-background px-8 py-5 hover:bg-accent-dark transition">
            Start a conversation →
          </Link>
        </div>
      </section>
    </>
  );
}
