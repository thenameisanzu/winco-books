'use client';

import Reveal, { RevealWords } from './Reveal';
import { packages } from '@/data/content';

export default function Packages() {
  return (
    <section id="packages" className="bg-page py-24 sm:py-32 lg:py-40">
      <div className="shell">
        <p className="eyebrow">{packages.eyebrow}</p>
        <h2 className="mt-3 max-w-[20ch] font-display text-[clamp(2.2rem,5.4vw,4.2rem)] leading-[1.04]">
          <RevealWords text={packages.heading} />
        </h2>

        <Reveal delay={0.1}>
          <div className="measure mt-8 space-y-4 text-lg text-ink-soft">
            <p>
              Every author starts from a different place. Some already have a finished manuscript and need
              professional publishing support. Others need editorial guidance, enhanced design and help
              preparing their book for a wider audience.
            </p>
            <p>
              Winco Books offers three publishing packages designed to make the process clear, practical and
              accessible.
            </p>
            <p className="font-semibold text-ink">
              Whether you are publishing your first book or building your author portfolio, there is a package
              to help you move from manuscript to published book.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:gap-7">
          {packages.tiers.map((tier, i) => {
            const numberedHeading = `${i + 1}. ${tier.name.toUpperCase()}`;
            return (
              <Reveal key={tier.name} delay={i * 0.09}>
                <article
                  className={`grain relative flex h-full flex-col rounded-[4px] px-7 py-9 sm:px-9 sm:py-11 ${
                    tier.featured
                      ? 'bg-ink text-paper shadow-[0_40px_90px_-40px_rgba(27,26,24,0.75)] lg:-mt-6 lg:mb-6'
                      : 'border border-ink/15 bg-paper'
                  }`}
                >
                  {tier.featured && (
                    <p className="mb-5 font-body text-sm italic text-paper/75">Most authors choose this</p>
                  )}

                  <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                    {numberedHeading}
                  </h3>
                  <p
                    className={`mt-2 font-body text-lg italic ${
                      tier.featured ? 'text-saffron' : 'text-ember'
                    }`}
                  >
                    {tier.line}
                  </p>

                  <p className="mt-7 font-display text-3xl tabular-nums sm:text-[2.1rem]">{tier.price}</p>

                  <p className={`mt-5 text-base leading-relaxed ${tier.featured ? 'text-paper/75' : 'text-ink-soft'}`}>
                    {tier.blurb}
                  </p>

                  <div className={`mt-8 h-px w-full ${tier.featured ? 'bg-paper/25' : 'bg-rule'}`} />

                  <p className={`mt-6 font-display text-lg font-semibold ${tier.featured ? 'text-paper' : 'text-ink'}`}>
                    {tier.includesLabel}
                  </p>

                  <ul className="mt-4 flex-1 space-y-2.5">
                    {tier.includes.map((line) => (
                      <li
                        key={line}
                        className={`flex gap-3 text-base ${tier.featured ? 'text-paper/80' : 'text-ink-soft'}`}
                      >
                        <span
                          aria-hidden
                          className="mt-[0.6em] h-px w-3 shrink-0 bg-saffron"
                        />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={`btn mt-9 w-full ${
                      tier.featured ? 'bg-saffron text-ink hover:bg-paper hover:text-ink' : 'btn-ghost'
                    }`}
                  >
                    Enquire about {tier.name.replace('Winco ', '')}
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* NOT SURE WHICH PACKAGE YOU NEED? Section */}
        <Reveal delay={0.1}>
          <div className="mt-20 rounded-2xl border border-ink/15 bg-paper p-8 sm:p-11 lg:flex lg:items-center lg:justify-between lg:gap-16">
            <div>
              <p className="font-body text-xs uppercase tracking-widest text-ember font-semibold">Publishing Guidance</p>
              <h3 className="mt-2 font-display text-2xl sm:text-3xl text-ink">
                {packages.footnote.heading}
              </h3>
              <p className="measure mt-4 text-lg text-ink-soft leading-relaxed">
                {packages.footnote.body}
              </p>
            </div>
            <a href={packages.footnote.cta.href} className="btn btn-solid mt-7 shrink-0 lg:mt-0">
              {packages.footnote.cta.label}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
