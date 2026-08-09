import { useEffect, useState } from "react";

const links = [
  { href: "#brands", label: "Brands" },
  { href: "#in-the-field", label: "Approach" },
  { href: "#contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const lightText = !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-border bg-background/95 text-foreground backdrop-blur"
          : `bg-transparent ${lightText ? "text-[#F7F4EE]" : "text-foreground"}`
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10">
        <a
          href="#top"
          onClick={closeMenu}
          aria-label="Advanced Studio home"
          className="text-display text-[15px] tracking-tight"
        >
          ADVANCED <span className="text-accent">STUDIO</span>
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-eyebrow transition-colors hover:text-accent focus-visible:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen((value) => !value)}
          className="min-h-11 min-w-11 text-eyebrow md:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div
          id="mobile-navigation"
          className="min-h-[calc(100dvh-69px)] border-t border-border bg-background md:hidden"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col gap-5 px-6 py-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-display py-2 text-3xl transition-colors hover:text-accent focus-visible:text-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
