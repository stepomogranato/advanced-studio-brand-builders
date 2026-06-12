import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import activationRetail from "@/assets/activation-retail.jpg";
import activationTesting from "@/assets/activation-testing.jpg";
import activationField from "@/assets/activation-field.jpg";
import activationSales from "@/assets/activation-sales.jpg";
import activationCommunity from "@/assets/activation-community.jpg";
import { brands } from "@/lib/brands";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Advanced Studio — Building Brands. Creating Markets." },
      { name: "description", content: "Distribution and market development for active, outdoor, sportswear and performance brands." },
      { property: "og:title", content: "Advanced Studio — Building Brands. Creating Markets." },
      { property: "og:description", content: "Distribution • Market Development • Brand Management" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Snowboarder carving down an alpine ridge at sunset"
          width={1920}
          height={1080}
          loading="eager"
          fetchPriority="high"
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/5 to-black/50" />
        <div className="relative z-10 flex h-full flex-col justify-end pb-24 md:pb-32 lg:pb-40 px-6 md:px-10 max-w-[1600px] mx-auto w-full">
          <div className="text-eyebrow mb-8 max-w-2xl text-[#F7F4EE]/85 md:mb-12">
            <span aria-hidden="true" className="text-accent">●</span>&nbsp;&nbsp;Distribution • Market Development • Brand Management
          </div>
          <h1 className="text-display text-[clamp(3.25rem,8.5vw,7.5rem)] leading-[0.95] tracking-[-0.025em] text-[#F7F4EE]">
            BUILDING BRANDS.
            <br />
            CREATING <span className="text-accent">MARKETS.</span>
          </h1>
        </div>
        <div className="absolute bottom-6 right-6 z-10 hidden text-eyebrow text-[#F7F4EE]/75 sm:block md:right-10">
          EST. — Active / Outdoor / Performance
        </div>
      </section>

      {/* BRANDS */}
      <section className="section-space mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-eyebrow text-accent mb-4">— Portfolio</div>
            <h2 className="text-display section-title">OUR BRANDS</h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-muted-foreground">
            A curated portfolio of active, outdoor and performance brands we distribute and develop across markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {brands.map((b) => (
            <Link
              key={b.slug}
              to="/brands/$slug"
              params={{ slug: b.slug }}
              className="group relative block aspect-[4/5] overflow-hidden bg-foreground"
            >
              <img
                src={b.image}
                alt={b.imageAlt}
                width={1024}
                height={1280}
                loading="lazy"
                decoding="async"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105 group-focus-visible:scale-105"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between text-[#F7F4EE]">
                <div className="text-eyebrow opacity-80">{b.category}</div>
                <div>
                  <div className="text-display text-3xl md:text-4xl">{b.name}</div>
                  <div className="mt-3 inline-flex items-center gap-2 text-eyebrow text-accent opacity-100 transition md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100">
                    View brand <span aria-hidden>→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ACTIVATIONS */}
      <section className="section-space bg-foreground text-background">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="text-eyebrow text-accent mb-6">— Marketing Activations</div>
          <h2 className="text-display section-title max-w-5xl">
            FROM PRODUCT
            <br />
            TO <span className="text-accent">COMMUNITY.</span>
          </h2>

          <div className="mt-16 grid grid-cols-12 gap-3 md:gap-4">
            <figure className="col-span-12 md:col-span-7 relative aspect-[16/10] overflow-hidden">
              <img src={activationRetail} alt="Retail activation display in a specialty store" width={1024} height={1024} loading="lazy" decoding="async" sizes="(min-width: 768px) 58vw, 100vw" className="absolute inset-0 h-full w-full object-cover" />
              <figcaption className="absolute bottom-4 left-4 text-eyebrow bg-background text-foreground px-3 py-1">Retail activation</figcaption>
            </figure>
            <figure className="col-span-6 md:col-span-5 relative aspect-[4/5] overflow-hidden">
              <img src={activationCommunity} alt="Outdoor community event with brand participants" width={1024} height={1024} loading="lazy" decoding="async" sizes="(min-width: 768px) 42vw, 50vw" className="absolute inset-0 h-full w-full object-cover" />
              <figcaption className="absolute bottom-4 left-4 text-eyebrow bg-background text-foreground px-3 py-1">Community events</figcaption>
            </figure>
            <figure className="col-span-6 md:col-span-4 relative aspect-[4/5] overflow-hidden">
              <img src={activationTesting} alt="Athletes testing products outdoors" width={1024} height={1024} loading="lazy" decoding="async" sizes="(min-width: 768px) 33vw, 50vw" className="absolute inset-0 h-full w-full object-cover" />
              <figcaption className="absolute bottom-4 left-4 text-eyebrow bg-background text-foreground px-3 py-1">Product testing</figcaption>
            </figure>
            <figure className="col-span-12 md:col-span-8 relative aspect-[16/9] overflow-hidden">
              <img src={activationField} alt="Field marketing team at an outdoor activation" width={1024} height={1024} loading="lazy" decoding="async" sizes="(min-width: 768px) 67vw, 100vw" className="absolute inset-0 h-full w-full object-cover" />
              <figcaption className="absolute bottom-4 left-4 text-eyebrow bg-background text-foreground px-3 py-1">Field marketing</figcaption>
            </figure>
            <figure className="col-span-12 relative aspect-[21/9] overflow-hidden">
              <img src={activationSales} alt="Brand presentation during a sales meeting" width={1024} height={1024} loading="lazy" decoding="async" sizes="100vw" className="absolute inset-0 h-full w-full object-cover" />
              <figcaption className="absolute bottom-4 left-4 text-eyebrow bg-background text-foreground px-3 py-1">Sales meetings</figcaption>
            </figure>
          </div>

          <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-eyebrow text-background/60">
            <li>Retail activation</li>
            <li aria-hidden="true" className="text-accent">/</li>
            <li>Product testing</li>
            <li aria-hidden="true" className="text-accent">/</li>
            <li>Field marketing</li>
            <li aria-hidden="true" className="text-accent">/</li>
            <li>Sales meetings</li>
            <li aria-hidden="true" className="text-accent">/</li>
            <li>Community events</li>
          </ul>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section-space mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8">
            <div className="text-eyebrow text-accent mb-6">— About</div>
            <h2 className="text-display section-title">
              CONNECTING BRANDS
              <br />
              AND <span className="text-accent">MARKETS.</span>
            </h2>
          </div>
          <div className="md:col-span-4">
            <p className="text-base md:text-lg leading-relaxed">
              Advanced Studio develops active and lifestyle brands through distribution, market development and strategic brand support.
            </p>
            <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-eyebrow border-b border-foreground pb-1 hover:text-accent hover:border-accent transition">
              More about us <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 pb-24">
        <div className="max-w-[1600px] mx-auto bg-accent text-background p-10 md:p-20 relative overflow-hidden">
          <div className="text-eyebrow mb-8 opacity-80">— Get in touch</div>
          <h2 className="text-display text-5xl md:text-7xl lg:text-8xl max-w-4xl">
            READY TO BUILD SOMETHING BIG?
          </h2>
          <Link
            to="/contact"
            className="mt-12 inline-flex items-center gap-3 bg-background text-foreground px-8 py-5 text-eyebrow hover:bg-foreground hover:text-background transition"
          >
            Contact us <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
