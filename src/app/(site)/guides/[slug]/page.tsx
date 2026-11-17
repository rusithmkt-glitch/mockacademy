import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, CircleHelp } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { PageMotion } from "@/components/motion/page-motion";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { guideBySlug, guides } from "@/data/guides";

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = guideBySlug.get(slug);
  if (!guide) return {};
  return {
    title: guide.metaTitle,
    description: guide.description,
    alternates: { canonical: `/guides/${guide.slug}` },
    openGraph: {
      type: "article",
      title: guide.metaTitle,
      description: guide.description,
      url: `https://mockacademy.org/guides/${guide.slug}`,
    },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = guideBySlug.get(slug);
  if (!guide) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: guide.title,
        description: guide.description,
        dateModified: guide.updated,
        author: { "@type": "Organization", name: "MockAcademy" },
        publisher: { "@type": "Organization", name: "MockAcademy" },
        mainEntityOfPage: `https://mockacademy.org/guides/${guide.slug}`,
      },
      {
        "@type": "FAQPage",
        mainEntity: guide.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="main" className="flex-1">
        <PageMotion />
        <article className="shell pb-16 pt-8 sm:pt-10 lg:pb-20">
          <nav aria-label="Breadcrumb" className="text-[0.75rem] text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="transition-colors hover:text-foreground">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/guides" className="transition-colors hover:text-foreground">
                  Guides
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-foreground">
                {guide.title}
              </li>
            </ol>
          </nav>

          <header data-reveal className="mx-auto mt-10 max-w-3xl">
            <Badge tone="lavender">PRINCE2 7th edition</Badge>
            <h1 className="display mt-4 text-balance text-3xl leading-[1.12] text-foreground sm:text-4xl">
              {guide.title}
            </h1>
            <p className="mt-3 text-[0.7rem] text-muted-foreground">
              Updated{" "}
              {new Date(guide.updated).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}{" "}
              · by the MockAcademy team
            </p>
            <div className="mt-6 space-y-4">
              {guide.intro.map((paragraph) => (
                <p key={paragraph} className="text-pretty text-[0.95rem] leading-relaxed text-foreground/80">
                  {paragraph}
                </p>
              ))}
            </div>
          </header>

          <div className="mx-auto mt-10 max-w-3xl space-y-10">
            {guide.sections.map((section) => (
              <section key={section.heading} data-reveal>
                <h2 className="font-heading text-[1.35rem] leading-snug text-foreground">
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-3.5">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-pretty text-[0.9rem] leading-relaxed text-foreground/80">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.bullets ? (
                  <ul className="mt-4 space-y-2">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-mint-soft text-navy">
                          <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                        </span>
                        <span className="text-[0.86rem] leading-relaxed text-foreground/80">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <section data-reveal aria-labelledby="guide-faq-title">
              <h2
                id="guide-faq-title"
                className="flex items-center gap-2 font-heading text-[1.35rem] text-foreground"
              >
                <CircleHelp className="size-5 text-primary" aria-hidden="true" />
                Common questions
              </h2>
              <div className="mt-4 space-y-3">
                {guide.faq.map((item) => (
                  <details
                    key={item.question}
                    className="group rounded-2xl border border-border/70 bg-card px-5 shadow-soft"
                  >
                    <summary className="cursor-pointer py-4 text-[0.88rem] font-semibold text-foreground">
                      {item.question}
                    </summary>
                    <p className="pb-4 text-[0.84rem] leading-relaxed text-muted-foreground">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            <section
              data-reveal
              className="relative overflow-hidden rounded-[2rem] border border-primary/10 bg-lilac/60 px-6 py-8 sm:px-8"
            >
              <div aria-hidden="true" className="dot-grid absolute inset-0 opacity-25" />
              <div className="relative">
                <p className="eyebrow">Ready when you are</p>
                <h2 className="display mt-2 text-balance text-2xl leading-tight text-foreground">
                  Put this into practice — free.
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link href={guide.primaryCta.href} className={buttonVariants({ size: "cta" })}>
                    {guide.primaryCta.label}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                  <Link
                    href={guide.secondaryCta.href}
                    className={buttonVariants({ variant: "outline", size: "cta", className: "bg-card" })}
                  >
                    {guide.secondaryCta.label}
                  </Link>
                </div>
              </div>
            </section>

            <p className="text-[0.68rem] leading-relaxed text-muted-foreground">
              PRINCE2® is a registered trademark of the PeopleCert group.
              MockAcademy is independent and not affiliated with, endorsed by or
              licensed by PeopleCert. Always confirm current exam rules with
              PeopleCert before booking.
            </p>

            <nav aria-label="More guides" className="border-t border-border pt-6">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                More guides
              </p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {guides
                  .filter((item) => item.slug !== guide.slug)
                  .map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/guides/${item.slug}`}
                        className="group flex items-center justify-between gap-3 rounded-xl border border-border/70 bg-card px-3.5 py-2.5 text-[0.78rem] font-medium text-foreground transition-colors hover:border-primary/25 hover:bg-accent/50"
                      >
                        {item.title}
                        <ArrowRight
                          className="size-3.5 shrink-0 text-primary transition-transform group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
              </ul>
            </nav>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
