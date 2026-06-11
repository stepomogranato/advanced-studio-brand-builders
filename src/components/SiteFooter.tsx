import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-16 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="text-display text-2xl">ADVANCED <span className="text-accent">STUDIO</span></div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Distribution and market development for active, outdoor and performance brands.
          </p>
        </div>
        <div>
          <div className="text-eyebrow text-muted-foreground mb-4">Navigate</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-accent">Home</Link></li>
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/brands" className="hover:text-accent">Brands</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-eyebrow text-muted-foreground mb-4">Contact</div>
          <ul className="space-y-2 text-sm">
            <li><a href="mailto:hello@advancedstudio.com" className="hover:text-accent">hello@advancedstudio.com</a></li>
            <li><a href="tel:+390000000000" className="hover:text-accent">+39 000 000 0000</a></li>
            <li><a href="#" className="hover:text-accent">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Advanced Studio. All rights reserved.</div>
          <div className="text-eyebrow">Distribution • Market Development • Brand Management</div>
        </div>
      </div>
    </footer>
  );
}
