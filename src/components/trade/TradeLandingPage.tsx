import type { TradePageConfig } from "../../lib/trade-materials";

type TradeLandingPageProps = {
  config: TradePageConfig;
};

export function TradeLandingPage({ config }: TradeLandingPageProps) {
  const catalogueHref = config.catalogue.href;

  return (
    <article className="min-h-screen bg-foreground px-6 pb-20 pt-32 text-background md:px-10 md:pb-28 md:pt-40">
      <div className="mx-auto flex min-h-[calc(100svh-13rem)] max-w-[1600px] flex-col justify-between">
        <header className="border-b border-background/20 pb-8 md:pb-10">
          <p className="text-eyebrow text-accent">{config.brand}</p>
          <h1 className="text-display mt-5 text-[clamp(3.75rem,11vw,9rem)]">TRADE AREA</h1>
        </header>

        <div className="grid gap-14 py-14 md:grid-cols-12 md:gap-12 md:py-20 lg:gap-16">
          <section className="md:col-span-7" aria-labelledby="trade-collection-heading">
            <p className="text-eyebrow text-background/60">{config.collectionLabel}</p>
            <h2
              id="trade-collection-heading"
              className="text-display mt-5 max-w-3xl text-[clamp(2.5rem,6vw,5.5rem)]"
            >
              {config.description}
            </h2>

            {catalogueHref && (
              <div className="mt-10 flex flex-col gap-3 sm:flex-row md:mt-14">
                <a
                  href={catalogueHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-trade-action="view-catalogue"
                  data-trade-brand={config.brand.toLowerCase()}
                  className="text-eyebrow inline-flex min-h-14 items-center justify-center bg-accent px-7 text-center text-background transition-colors hover:bg-accent-dark"
                >
                  VIEW {config.catalogue.label}
                </a>
                <a
                  href={catalogueHref}
                  download
                  data-trade-action="download-catalogue"
                  data-trade-brand={config.brand.toLowerCase()}
                  className="text-eyebrow inline-flex min-h-14 items-center justify-center border border-background/40 px-7 text-center text-background transition-colors hover:border-background hover:bg-background hover:text-foreground"
                >
                  DOWNLOAD {config.catalogue.label}
                </a>
              </div>
            )}
          </section>

          <aside className="grid w-full content-start gap-8 md:col-span-5 md:max-w-md md:justify-self-end">
            {config.coverImage && catalogueHref && (
              <a
                href={catalogueHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${config.brand} catalogue`}
                className="group block max-w-[18rem] justify-self-center md:max-w-sm"
              >
                <figure className="overflow-hidden border border-background/15 bg-background/5 p-2 shadow-2xl shadow-black/30 transition-transform duration-500 group-hover:-translate-y-1">
                  <img
                    src={config.coverImage.src}
                    alt={config.coverImage.alt}
                    width="1241"
                    height="1754"
                    loading="eager"
                    className="aspect-[1241/1754] w-full object-cover"
                  />
                </figure>
              </a>
            )}

            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
              <div className="border-t border-background/20 pt-5">
                <p className="text-eyebrow text-background/60">{config.priceList.label}</p>
                {config.priceList.href ? (
                  <a
                    href={config.priceList.href}
                    download
                    className="text-eyebrow mt-3 inline-block text-background transition-colors hover:text-accent"
                  >
                    DOWNLOAD
                  </a>
                ) : (
                  <p className="text-eyebrow mt-3 text-accent">{config.priceList.status}</p>
                )}
              </div>

              <div className="border-t border-background/20 pt-5">
                <p className="text-eyebrow text-background/60">CONTACT</p>
                <a
                  href={`mailto:${config.contactEmail}`}
                  className="mt-3 block break-all text-base transition-colors hover:text-accent"
                >
                  {config.contactEmail}
                </a>
              </div>
            </div>
          </aside>
        </div>

        <p className="text-eyebrow border-t border-background/20 pt-6 text-background/45">
          ADVANCED <span className="text-accent">STUDIO</span> · TRADE MATERIALS
        </p>
      </div>
    </article>
  );
}
