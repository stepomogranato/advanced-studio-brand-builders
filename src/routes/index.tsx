import { createFileRoute } from "@tanstack/react-router";
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
      {
        name: "description",
        content:
          "Distribution and market development for active, outdoor, sportswear and performance brands.",
      },
      { property: "og:title", content: "Advanced Studio — Building Brands. Creating Markets." },
      {
        property: "og:description",
        content: "Active • Outdoor • Performance",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section
        id="top"
        aria-labelledby="home-hero-title"
        className="relative min-h-[100svh] h-[100dvh] w-full scroll-mt-24 overflow-hidden"
      >
        <img
          src={heroImg}
          alt="Snowboarder carving down an alpine ridge at sunset"
          width={1920}
          height={1080}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover object-[58%_center] sm:object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/5 to-black/50"
        />
        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1600px] flex-col justify-end px-6 pb-12 pt-28 sm:pb-16 md:px-10 md:pb-20 lg:pb-24">
          <div className="text-eyebrow mb-6 max-w-2xl text-[#F7F4EE]/90 sm:mb-8 md:mb-10">
            <span aria-hidden="true" className="text-accent">
              ●
            </span>
            &nbsp;&nbsp;ACTIVE • OUTDOOR • PERFORMANCE
          </div>
          <h1
            id="home-hero-title"
            className="text-display text-[clamp(3rem,8.5vw,7.5rem)] leading-[0.94] tracking-[-0.025em] text-[#F7F4EE]"
          >
            BUILDING BRANDS.
            <br />
            CREATING <span className="text-accent">MARKETS.</span>
          </h1>
        </div>
        <div className="absolute bottom-6 right-6 z-10 hidden text-eyebrow text-[#F7F4EE]/75 sm:block md:right-10">
          EST. — Active / Outdoor / Performance
        </div>
      </section>

      <section
        aria-labelledby="statement-heading"
        className="content-auto mx-auto max-w-[1600px] px-6 py-16 md:px-10 md:py-20 lg:py-24"
      >
        <div className="grid gap-8 md:grid-cols-12 md:gap-12">
          <div className="text-eyebrow text-accent md:col-span-3">MANIFESTO</div>
          <div className="md:col-span-8">
            <h2
              id="statement-heading"
              className="text-display max-w-4xl text-[clamp(2.75rem,5.8vw,5.75rem)]"
            >
              Distribution is only the beginning.
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Distribution is only one piece of the puzzle. Real markets are built through
              relationships, credibility, education, field presence and long-term thinking. We help
              brands build ecosystems that create lasting demand.
            </p>
          </div>
        </div>
      </section>

      <section
        id="brands"
        aria-labelledby="brands-heading"
        className="content-auto scroll-mt-24 mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32 lg:py-40"
      >
        <div className="mb-14 md:mb-20">
          <div className="md:col-span-7">
            <div className="text-eyebrow text-accent mb-4">— Brands</div>
            <h2 id="brands-heading" className="text-display section-title">
              OUR BRANDS
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              We work with a carefully selected portfolio of brands we genuinely believe in. Every
              partnership is built for long-term market development rather than simple distribution.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
          {brands.map((brand) => (
            <article
              key={brand.slug}
              className="group relative aspect-[4/5] overflow-hidden bg-foreground"
            >
              <img
                src={brand.image}
                alt={brand.imageAlt}
                width={1024}
                height={1280}
                loading="lazy"
                decoding="async"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10"
              />
              <div className="absolute inset-0 flex flex-col justify-between p-6 text-[#F7F4EE] md:p-8">
                <div className="text-eyebrow opacity-80">{brand.category}</div>
                <div>
                  <h3 className="text-display text-5xl md:text-6xl lg:text-7xl">{brand.name}</h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="in-the-field"
        aria-labelledby="field-heading"
        className="content-auto scroll-mt-24 bg-foreground py-24 text-background md:py-32 lg:py-40"
      >
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="grid gap-8 md:grid-cols-12 md:items-end md:gap-10">
            <div className="md:col-span-8">
              <div className="text-eyebrow text-accent mb-6">— In The Field</div>
              <h2 id="field-heading" className="text-display section-title">
                IN THE FIELD
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-background/70 md:col-span-4">
              Markets are built where people meet products. Everything we do in the field exists to
              create trust, knowledge and long-term relationships.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-12 gap-3 sm:mt-12 md:gap-4 lg:mt-14">
            <figure className="relative col-span-12 aspect-[16/10] overflow-hidden md:col-span-7">
              <img
                src={activationRetail}
                alt="Retail activation display in a specialty store"
                width={1024}
                height={1024}
                loading="lazy"
                decoding="async"
                sizes="(min-width: 768px) 58vw, 100vw"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <figcaption className="absolute bottom-3 left-3 bg-background/95 px-3 py-1.5 text-eyebrow text-foreground md:bottom-4 md:left-4">
                Presence
              </figcaption>
            </figure>
            <figure className="relative col-span-6 aspect-[4/5] overflow-hidden md:col-span-5">
              <img
                src={activationCommunity}
                alt="Outdoor community event with brand participants"
                width={1024}
                height={1024}
                loading="lazy"
                decoding="async"
                sizes="(min-width: 768px) 42vw, 50vw"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <figcaption className="absolute bottom-3 left-3 bg-background/95 px-3 py-1.5 text-eyebrow text-foreground md:bottom-4 md:left-4">
                Relationships
              </figcaption>
            </figure>
            <figure className="relative col-span-6 aspect-[4/5] overflow-hidden md:col-span-4">
              <img
                src={activationTesting}
                alt="Athletes testing products outdoors"
                width={1024}
                height={1024}
                loading="lazy"
                decoding="async"
                sizes="(min-width: 768px) 33vw, 50vw"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <figcaption className="absolute bottom-3 left-3 bg-background/95 px-3 py-1.5 text-eyebrow text-foreground md:bottom-4 md:left-4">
                Credibility
              </figcaption>
            </figure>
            <figure className="relative col-span-12 aspect-[16/9] overflow-hidden md:col-span-8">
              <img
                src={activationField}
                alt="Field marketing team at an outdoor activation"
                width={1024}
                height={1024}
                loading="lazy"
                decoding="async"
                sizes="(min-width: 768px) 67vw, 100vw"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <figcaption className="absolute bottom-3 left-3 bg-background/95 px-3 py-1.5 text-eyebrow text-foreground md:bottom-4 md:left-4">
                Education
              </figcaption>
            </figure>
            <figure className="relative col-span-12 aspect-[16/10] overflow-hidden sm:aspect-[21/9]">
              <img
                src={activationSales}
                alt="Brand presentation during a sales meeting"
                width={1024}
                height={1024}
                loading="lazy"
                decoding="async"
                sizes="100vw"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <figcaption className="absolute bottom-3 left-3 bg-background/95 px-3 py-1.5 text-eyebrow text-foreground md:bottom-4 md:left-4">
                Presence
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="content-auto scroll-mt-24 px-6 py-14 md:px-10 md:py-18"
      >
        <div className="relative mx-auto max-w-[1600px] overflow-hidden bg-accent p-8 text-background sm:p-10 md:p-12 lg:p-14">
          <div className="text-eyebrow mb-6 opacity-80">— Contact</div>
          <h2
            id="contact-heading"
            className="text-display max-w-5xl text-[clamp(2.75rem,7vw,6rem)]"
          >
            LET&apos;S BUILD SOMETHING TOGETHER.
          </h2>

          <div className="mt-10 grid gap-6 text-background md:grid-cols-3">
            <a
              href="mailto:hello@advancedstudio.com"
              className="group border-t border-background/30 pt-5 transition-colors hover:text-foreground focus-visible:text-foreground"
            >
              <span className="text-eyebrow opacity-70">Email</span>
              <span className="mt-3 block break-words text-display text-2xl md:text-3xl">
                hello@advancedstudio.com
              </span>
            </a>
            <div className="border-t border-background/30 pt-5 text-background/75">
              <span className="text-eyebrow opacity-70">LinkedIn</span>
              <span className="mt-3 block text-display text-2xl md:text-3xl">LinkedIn</span>
            </div>
            <div className="border-t border-background/30 pt-5 text-background/75">
              <span className="text-eyebrow opacity-70">Location</span>
              <span className="mt-3 block text-display text-2xl md:text-3xl">
                MILAN
                <br />
                ITALY
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
