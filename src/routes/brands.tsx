import { createFileRoute, Link } from "@tanstack/react-router";
import { brands } from "@/lib/brands";

export const Route = createFileRoute("/brands")({
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
      <section className="pt-40 pb-16 md:pb-24 px-6 md:px-10 max-w-[1600px] mx-auto">
        <div className="text-eyebrow text-accent mb-6">— Portfolio</div>
        <h1 className="text-display page-title max-w-6xl">
          THE <span className="text-accent">BRANDS</span> WE BUILD.
        </h1>
        <p className="mt-8 max-w-2xl text-base md:text-lg text-muted-foreground">
          Six brands. One mission: build them with the operators, athletes and retailers that move our industry forward.
        </p>
      </section>

      <section className="px-6 md:px-10 max-w-[1600px] mx-auto pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {brands.map((b, i) => (
            <Link
              key={b.slug}
              to="/brands/$slug"
              params={{ slug: b.slug }}
              className={`group relative block overflow-hidden bg-foreground aspect-[4/5] ${i % 3 === 0 ? "md:aspect-[16/11]" : ""}`}
            >
              <img src={b.image} alt={b.imageAlt} width={1024} height={1280} loading="lazy" decoding="async" sizes="(min-width: 768px) 50vw, 100vw" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105 group-focus-visible:scale-105" />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between text-[#F7F4EE]">
                <div className="flex items-center justify-between text-eyebrow">
                  <span className="opacity-80">{b.category}</span>
                  <span className="text-accent">0{i + 1}</span>
                </div>
                <div>
                  <div className="text-display text-4xl md:text-6xl">{b.name}</div>
                  <div className="mt-4 text-eyebrow text-accent">View brand →</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
