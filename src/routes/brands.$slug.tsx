import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { brands, getBrand } from "@/lib/brands";

export const Route = createFileRoute("/brands/$slug")({
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
        <img src={brand.image} alt={brand.name} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/80" />
        <div className="relative z-10 flex h-full flex-col justify-between pt-32 pb-12 px-6 md:px-10 max-w-[1600px] mx-auto text-[#F7F4EE]">
          <Link to="/brands" className="text-eyebrow opacity-80 hover:text-accent self-start">← All brands</Link>
          <div>
            <div className="text-eyebrow text-accent mb-4">{brand.category}</div>
            <h1 className="text-display text-7xl md:text-9xl lg:text-[12rem]">{brand.name}</h1>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 md:px-10 max-w-[1600px] mx-auto">
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
            <p className="text-display text-3xl md:text-5xl leading-[1.1]">{brand.description}</p>
            <p className="mt-8 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Advanced Studio handles distribution, sales network management and marketing activation for {brand.name} — connecting the brand with the retailers, athletes and communities that drive its growth.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <Link to="/brands/$slug" params={{ slug: next.slug }} className="group relative block aspect-[21/9] overflow-hidden">
          <img src={next.image} alt={next.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/30" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-[#F7F4EE] text-center px-6">
            <div className="text-eyebrow text-accent mb-4">Next brand →</div>
            <div className="text-display text-6xl md:text-9xl">{next.name}</div>
          </div>
        </Link>
      </section>
    </>
  );
}
