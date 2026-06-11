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
  { label: "LinkedIn", value: "/advanced-studio", href: "#" },
];

function Contact() {
  return (
    <>
      <section className="pt-40 pb-16 md:pb-24 px-6 md:px-10 max-w-[1600px] mx-auto">
        <div className="text-eyebrow text-accent mb-6">— Contact</div>
        <h1 className="text-display text-6xl md:text-8xl lg:text-[10rem] leading-[0.9]">
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
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="group flex flex-wrap items-baseline justify-between gap-6 px-6 md:px-10 py-10 md:py-14 border-b border-border hover:bg-foreground hover:text-background transition-colors"
            >
              <div className="text-eyebrow opacity-70 group-hover:text-accent">{c.label}</div>
              <div className="text-display text-4xl md:text-7xl">{c.value}</div>
              <div className="text-eyebrow opacity-0 group-hover:opacity-100 group-hover:text-accent transition">→</div>
            </a>
          ))}
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
