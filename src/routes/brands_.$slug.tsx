import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { brands, getBrand } from "@/lib/brands";

export const Route = createFileRoute("/brands_/$slug")({
  loader: ({ params }) => {
    const brand = getBrand(params.slug);
    if (!brand) throw notFound();
    return { brand };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.brand.name} — Advanced Studio` },
          { name: "description", content: loaderData.brand.description },
          { property: "og:title", content: `${loaderData.brand.name} — Advanced Studio` },
          { property: "og:description", content: loaderData.brand.description },
          { property: "og:image", content: loaderData.brand.image },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="pt-40 px-6 max-w-[1600px] mx-auto">
      <h1 className="text-display text-5xl">Brand not found.</h1>
      <Link to="/brands" className="mt-6 inline-block text-eyebrow text-accent">← Back to brands</Link>
    </div>
  ),
  errorComponent: () => (
    <div className="pt-40 px-6 max-w-[1600px] mx-auto">
      <h1 className="text-display text-5xl">Something went wrong.</h1>
    </div>
  ),
  component: BrandDetail,
});

function BrandDetail() {
  const { brand } = Route.useLoaderData();
  const idx = brands.findIndex((b) => b.slug === brand.slug);
  const next = brands[(idx + 1) % brands.length];

  return (
    <>
      <section className="relative h-[85vh] w-full overflow-hidden">
        <img src={brand.image} alt={brand.imageAlt} width={1024} height={1280} loading="eager" fetchPriority="high" sizes="100vw" className="absolute inset-0 h-full w-full object-cover" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/80" />
        <div className="relative z-10 flex h-full flex-col justify-between pt-32 pb-12 px-6 md:px-10 max-w-[1600px] mx-auto text-[#F7F4EE]">
          <Link to="/brands" className="text-eyebrow opacity-80 hover:text-accent self-start">← All brands</Link>
          <div>
            <div className="text-eyebrow text-accent mb-4">{brand.category}</div>
            <h1 className="text-display page-title max-w-[14ch]">{brand.name}</h1>
          </div>
        </div>
      </section>

      <section className="section-space mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4 space-y-8">
            <div>
              <div className="text-eyebrow text-muted-foreground mb-2">Category</div>
              <div className="text-display text-2xl">{brand.category}</div>
            </div>
            <div>
              <div className="text-eyebrow text-muted-foreground mb-2">Origin</div>
              <div className="text-display text-2xl">{brand.origin}</div>
            </div>
            <div>
              <div className="text-eyebrow text-muted-foreground mb-2">Territory</div>
              <div className="text-display text-2xl">Europe</div>
            </div>
          </div>
          <div className="md:col-span-8">
            <div className="text-eyebrow mb-6 text-accent">— Brand direction</div>
            <h2 className="text-display text-[clamp(2.75rem,6vw,6rem)] leading-[0.95]">{brand.statement}</h2>
            <p className="mt-8 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {brand.description} {brand.overview}
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10">
        <div className="relative mx-auto aspect-[4/5] max-w-[1600px] overflow-hidden md:aspect-[16/9]">
          <img
            src={brand.image}
            alt=""
            aria-hidden="true"
            width={1024}
            height={1280}
            loading="lazy"
            decoding="async"
            sizes="100vw"
            className="absolute inset-0 h-full w-full scale-110 object-cover"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-black/15" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-6 text-[#F7F4EE] md:p-10">
            <div className="text-eyebrow">{brand.name} / Editorial placeholder</div>
            <div className="hidden text-eyebrow sm:block">01 — 03</div>
          </div>
        </div>
      </section>

      <section className="section-space mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="mb-12 grid gap-6 md:mb-16 md:grid-cols-12">
          <div className="text-eyebrow text-accent md:col-span-4">— Partnership framework</div>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:col-span-8 md:text-lg">
            Placeholder content for the commercial, cultural and activation framework around {brand.name}.
          </p>
        </div>

        <div className="border-t border-border">
          {brand.editorial.map((item, index) => (
            <article key={item.label} className="grid gap-6 border-b border-border py-12 md:grid-cols-12 md:gap-10 md:py-16">
              <div className="text-display text-3xl text-accent md:col-span-2">0{index + 1}</div>
              <div className="md:col-span-4">
                <div className="text-eyebrow mb-3 text-muted-foreground">{item.label}</div>
                <h3 className="text-display text-3xl md:text-5xl">{item.title}</h3>
              </div>
              <p className="max-w-md self-end text-base leading-relaxed text-muted-foreground md:col-span-6 md:text-lg">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <Link to="/brands/$slug" params={{ slug: next.slug }} className="group relative block aspect-[21/9] overflow-hidden">
          <img src={next.image} alt={next.imageAlt} width={1024} height={1280} loading="lazy" decoding="async" sizes="100vw" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105 group-focus-visible:scale-105" />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/30" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-[#F7F4EE] text-center px-6">
            <div className="text-eyebrow text-accent mb-4">Next brand →</div>
            <div className="text-display text-[clamp(3rem,8vw,8rem)]">{next.name}</div>
          </div>
        </Link>
      </section>
    </>
  );
}
