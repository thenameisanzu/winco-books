'use client';

import Reveal, { RevealWords } from './Reveal';
import { why } from '@/data/content';

export default function Why() {
  return (
    <section className="bg-page py-24 sm:py-32">
      <div className="shell">
        <div className="lg:flex lg:items-end lg:justify-between lg:gap-16">
          <h2 className="max-w-[14ch] font-display text-[clamp(2rem,5vw,3.6rem)] leading-[1.06]">
            <RevealWords text={why.heading} />
          </h2>
          <Reveal>
            <p className="mt-4 font-display text-xl italic text-ember lg:mt-0 lg:text-right">{why.sub}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {why.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <div className="border-t border-ink/20 pt-5">
                <h3 className="font-display text-2xl">{item.title}</h3>
                <p className="mt-3 text-base text-ink-soft">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Your Book. Your Journey. Callout */}
        <Reveal delay={0.15}>
          <div className="mt-16 rounded-2xl border border-ink/15 bg-paper p-8 sm:p-11 lg:flex lg:items-center lg:justify-between lg:gap-12">
            <div className="max-w-[42ch]">
              <h3 className="font-display text-2xl sm:text-3xl">{why.callout.heading}</h3>
              <p className="mt-4 text-base text-ink-soft sm:text-lg">{why.callout.body}</p>
              <p className="mt-3 font-display text-lg italic text-ember">{why.callout.tagline}</p>
            </div>
            <div className="mt-8 shrink-0 lg:mt-0">
              <a href={why.callout.cta.href} className="btn btn-solid">
                {why.callout.cta.label}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
