'use client';

import Reveal, { RevealWords } from './Reveal';
import { testimonials } from '@/data/content';

const offsets = ['lg:mt-0', 'lg:mt-14', 'lg:mt-6'];

export default function Testimonials() {
  return (
    <section className="bg-ink py-24 text-paper sm:py-32">
      <div className="shell">
        <p className="eyebrow !text-paper/55">{testimonials.eyebrow}</p>
        <h2 className="mt-3 max-w-[20ch] font-display text-[clamp(2rem,5vw,3.6rem)] leading-[1.06]">
          <RevealWords text={testimonials.heading} />
        </h2>

        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-7">
          {testimonials.items.map((t, i) => (
            <Reveal key={t.name + i} delay={i * 0.08} className={offsets[i % offsets.length]}>
              <figure className="flex h-full flex-col border-t border-paper/20 pt-7">
                <span aria-hidden className="font-display text-5xl leading-none text-saffron">
                  “
                </span>
                <blockquote className="mt-2 flex-1 font-display text-xl italic leading-[1.45] text-paper/90 sm:text-2xl">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-7 border-t border-paper/15 pt-4">
                  <p className="font-display text-lg text-paper">{t.name}</p>
                  <p className="mt-0.5 font-body text-sm italic text-paper/50">{t.book}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
