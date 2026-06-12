import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Advanced Studio" },
      { name: "description", content: "Get in touch with Advanced Studio about distribution, market development and brand partnerships." },
      { property: "og:title", content: "Contact — Advanced Studio" },
      { property: "og:description", content: "Let's build something big." },
    ],
  }),
  component: Contact,
});

const channels = [
  { label: "Email", value: "hello@advancedstudio.com", href: "mailto:hello@advancedstudio.com" },
  { label: "Phone", value: "+39 000 000 0000", href: "tel:+390000000000" },
  { label: "LinkedIn", value: "/advanced-studio", href: null },
];

function Contact() {
  return (
    <>
      <section className="pt-40 pb-16 md:pb-24 px-6 md:px-10 max-w-[1600px] mx-auto">
        <div className="text-eyebrow text-accent mb-6">— Contact</div>
        <h1 className="text-display page-title max-w-6xl leading-[0.9]">
          LET'S BUILD
          <br />
          SOMETHING <span className="text-accent">BIG.</span>
        </h1>
        <p className="mt-10 max-w-xl text-base md:text-lg text-muted-foreground">
          Brand owners, retailers, athletes and partners — reach out. We answer fast.
        </p>
      </section>

      <section className="border-t border-border">
        <div className="max-w-[1600px] mx-auto">
          {channels.map((c) => {
            const content = (
              <>
                <div className="text-eyebrow opacity-70 transition-colors group-hover:text-accent group-focus-visible:text-accent">{c.label}</div>
                <div className="text-display max-w-full break-words text-[clamp(1.75rem,6vw,4.5rem)]">{c.value}</div>
                <div aria-hidden="true" className="text-eyebrow text-accent opacity-100 transition md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100">→</div>
              </>
            );

            const className = "group flex flex-wrap items-baseline justify-between gap-6 border-b border-border px-6 py-10 transition-colors md:px-10 md:py-14";

            return c.href ? (
              <a key={c.label} href={c.href} className={`${className} hover:bg-foreground hover:text-background focus-visible:bg-foreground focus-visible:text-background`}>
                {content}
              </a>
            ) : (
              <div key={c.label} aria-label={`${c.label}: ${c.value}. Profile coming soon.`} className={`${className} text-muted-foreground`}>
                {content}
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-6 md:px-10 py-24 max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="text-eyebrow text-accent mb-4">— Studio</div>
            <div className="text-display text-3xl md:text-4xl">
              Advanced Studio
              <br />
              <span className="text-muted-foreground">Headquartered in Europe</span>
            </div>
          </div>
          <div>
            <div className="text-eyebrow text-accent mb-4">— Open for</div>
            <ul className="space-y-3 text-lg">
              <li>Brand distribution partnerships</li>
              <li>Retail and wholesale collaborations</li>
              <li>Marketing activations & events</li>
              <li>Ambassador & athlete programs</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
