import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/about", label: "About" },
  { to: "/brands", label: "Brands" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const sitsOverHero = pathname === "/" || pathname === "/about" || pathname.startsWith("/brands/");
  const lightText = sitsOverHero && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-border bg-background/95 text-foreground backdrop-blur" : `bg-transparent ${lightText ? "text-[#F7F4EE]" : "text-foreground"}`
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10">
        <Link to="/" aria-label="Advanced Studio home" className="text-display text-[15px] tracking-tight">
          ADVANCED <span className="text-accent">STUDIO</span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-eyebrow transition-colors hover:text-accent focus-visible:text-accent"
              activeProps={{ className: "text-eyebrow text-accent" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="min-h-11 min-w-11 text-eyebrow md:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div id="mobile-navigation" className="min-h-[calc(100dvh-69px)] border-t border-border bg-background md:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-5 px-6 py-8">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-display py-2 text-3xl transition-colors hover:text-accent focus-visible:text-accent"
                activeProps={{ className: "text-display py-2 text-3xl text-accent" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
