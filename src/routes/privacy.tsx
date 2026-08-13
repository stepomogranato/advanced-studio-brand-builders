import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Advanced Studio" },
      {
        name: "description",
        content: "Information about how Advanced Studio processes personal data on this website.",
      },
    ],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <article className="mx-auto max-w-4xl px-6 pb-24 pt-36 md:px-10 md:pb-32 md:pt-44">
      <p className="text-eyebrow text-accent">LEGAL</p>
      <h1 className="text-display mt-6 text-[clamp(3rem,7vw,6rem)]">PRIVACY POLICY</h1>
      <p className="mt-6 text-sm text-muted-foreground">Last updated: 13 August 2026</p>

      <div className="mt-14 space-y-12 text-base leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-display text-2xl text-foreground">DATA CONTROLLER</h2>
          <p className="mt-4">
            Advanced Studio S.r.l., Corso Plebisciti 17, 20129 Milano (MI), Italy — VAT and tax code
            06634010968 — is the data controller. You can contact the company at{" "}
            <a
              className="text-foreground underline underline-offset-4"
              href="mailto:advancedstudio@olempec.it"
            >
              advancedstudio@olempec.it
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-display text-2xl text-foreground">DATA PROCESSED</h2>
          <p className="mt-4">
            When you visit this website, the systems that provide it may automatically process
            technical information needed to deliver and protect the service, including IP address,
            request date and time, requested resource, browser and device information, response
            status and security logs. The website does not currently provide registration,
            newsletter or contact forms and does not use advertising or profiling tools.
          </p>
        </section>

        <section>
          <h2 className="text-display text-2xl text-foreground">PURPOSE AND LEGAL BASIS</h2>
          <p className="mt-4">
            Technical data is processed to make the website available, maintain its security,
            prevent abuse and diagnose technical faults. Processing is based on the controller’s
            legitimate interest in operating a secure and reliable website and, where applicable, on
            compliance with legal obligations.
          </p>
        </section>

        <section>
          <h2 className="text-display text-2xl text-foreground">SERVICE PROVIDERS</h2>
          <p className="mt-4">
            The website is delivered through Cloudflare, Inc. and its network services. Technical
            data may therefore be processed by Cloudflare as a service provider and, where necessary
            to provide the service, outside the European Economic Area under the safeguards required
            by applicable data-protection law.
          </p>
        </section>

        <section>
          <h2 className="text-display text-2xl text-foreground">RETENTION</h2>
          <p className="mt-4">
            Technical data is retained only for the period necessary to provide and secure the
            website, investigate faults or abuse, and comply with applicable legal obligations.
            Retention periods may vary according to the nature of the log and the service provider’s
            configuration.
          </p>
        </section>

        <section>
          <h2 className="text-display text-2xl text-foreground">COOKIES</h2>
          <p className="mt-4">
            This website does not currently use analytics, advertising or profiling cookies. Any
            technical storage used by the infrastructure is limited to what is necessary for the
            operation and security of the service and does not require consent. This policy will be
            updated before any non-essential tracking technology is introduced.
          </p>
        </section>

        <section>
          <h2 className="text-display text-2xl text-foreground">YOUR RIGHTS</h2>
          <p className="mt-4">
            Where the conditions set by law apply, you may request access to, correction or deletion
            of your personal data, restriction of processing, data portability, or object to
            processing based on legitimate interests. You may exercise these rights by contacting
            the controller at the address above. You also have the right to lodge a complaint with
            the Italian Data Protection Authority (Garante per la protezione dei dati personali).
          </p>
        </section>

        <section>
          <h2 className="text-display text-2xl text-foreground">POLICY UPDATES</h2>
          <p className="mt-4">
            This policy may be updated when the website, its service providers or applicable legal
            requirements change. The current version and its update date are always published on
            this page.
          </p>
        </section>
      </div>
    </article>
  );
}
