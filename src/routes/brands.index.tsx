import { createFileRoute, Link } from "@tanstack/react-router";
import { brands } from "@/lib/brands";

export const Route = createFileRoute("/brands/")({
  head: () => ({
    meta: [
      { title: "Brands — Advanced Studio" },
      { name: "description", content: "The Advanced Studio portfolio: active, outdoor and performance brands we distribute and develop." },
      { property: "og:title", content: "Brands — Advanced Studio" },
      { property: "og:description", content: "Our portfolio of active, outdoor and performance brands." },
    ],
  }),
  component: BrandsIndex,
});

function BrandsIndex() {
  return (
    <>
      <section className="mx-auto max-w-[1600px] px-6 pb-16 pt-40 md:px-10 md:pb-24">
        <div className="text-eyebrow mb-6 text-accent">— Portfolio</div>
        <h1 className="text-display page-title max-w-6xl">
          THE <span className="text-accent">BRANDS</span> WE BUILD.
        </h1>
        <p className="mt-8 max-w-2xl text-base text-muted-foreground md:text-lg">
          Six brands. One mission: build them with the operators, athletes and retailers that move our industry forward.
        </p>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 pb-24 md:px-10">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
          {brands.map((brand, index) => (
            <Link
              key={brand.slug}
              to="/brands/$slug"
              params={{ slug: brand.slug }}
              className={`group relative block aspect-[4/5] overflow-hidden bg-foreground ${index % 3 === 0 ? "md:aspect-[16/11]" : ""}`}
            >
              <img
                src={brand.image}
                alt={brand.imageAlt}
                width={1024}
                height={1280}
                loading="lazy"
                decoding="async"
                sizes="(min-width: 768px) 50vw, 100vw"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105 group-focus-visible:scale-105"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-between p-6 text-[#F7F4EE] md:p-10">
                <div className="text-eyebrow flex items-center justify-between">
                  <span className="opacity-80">{brand.category}</span>
                  <span className="text-accent">0{index + 1}</span>
                </div>
                <div>
                  <div className="text-display text-4xl md:text-6xl">{brand.name}</div>
                  <div className="text-eyebrow mt-4 text-accent">View brand →</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
