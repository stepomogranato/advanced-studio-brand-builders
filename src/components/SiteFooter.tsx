import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-[1600px] gap-6 px-6 py-8 text-eyebrow text-muted-foreground md:grid-cols-[1fr_auto] md:px-10">
        <div>
          <div className="text-foreground">ADVANCED STUDIO</div>
          <div className="mt-2 text-[0.68rem] font-normal tracking-[0.12em] text-muted-foreground">
            Independent Brand Ecosystem Builder
          </div>
        </div>
        <div className="flex flex-wrap items-start gap-x-6 gap-y-2 md:justify-end">
          <div>MILAN · ITALY</div>
          <Link to="/privacy" className="transition-colors hover:text-foreground">
            PRIVACY POLICY
          </Link>
          <div>©2026</div>
        </div>
        <div className="border-t border-border pt-4 text-[0.55rem] font-normal leading-relaxed tracking-[0.06em] text-muted-foreground/75 md:col-span-2">
          ADVANCED STUDIO S.R.L. · CORSO PLEBISCITI 17, 20129 MILANO (MI), ITALY · P. IVA / C.F.
          06634010968 · REA MI-1905049 · REGISTRO IMPRESE MILANO MONZA BRIANZA LODI N. 06634010968 ·
          CAPITALE SOCIALE €10.000,00 I.V. · SOCIETÀ UNIPERSONALE
        </div>
      </div>
    </footer>
  );
}
