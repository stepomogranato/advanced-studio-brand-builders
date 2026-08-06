const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#brands", label: "Brands" },
  { href: "#in-the-field", label: "In The Field" },
  { href: "#contact", label: "Contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-[1600px] gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:px-10">
        <div>
          <div className="text-display text-2xl">
            ADVANCED <span className="text-accent">STUDIO</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Distribution and market development for active, outdoor and performance brands.
          </p>
        </div>
        <div>
          <h2 className="text-eyebrow mb-4 text-muted-foreground">Navigate</h2>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-accent focus-visible:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-eyebrow mb-4 text-muted-foreground">Contact</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="mailto:hello@advancedstudio.com"
                className="transition-colors hover:text-accent focus-visible:text-accent"
              >
                hello@advancedstudio.com
              </a>
            </li>
            <li>
              <a
                href="tel:+390000000000"
                className="transition-colors hover:text-accent focus-visible:text-accent"
              >
                +39 000 000 0000
              </a>
            </li>
            <li>
              <span className="text-muted-foreground" aria-label="LinkedIn profile coming soon">
                LinkedIn
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-3 px-6 py-6 text-xs text-muted-foreground md:px-10">
          <div>© {new Date().getFullYear()} Advanced Studio. All rights reserved.</div>
          <div className="text-eyebrow">Distribution • Market Development • Brand Activations</div>
        </div>
      </div>
    </footer>
  );
}
