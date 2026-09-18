'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Reveal, { RevealWords } from './Reveal';
import { manifesto } from '@/data/content';

export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <section className="relative overflow-hidden bg-ink py-24 text-paper sm:py-32 lg:py-40" ref={ref}>
      {/* drifting repeated wordmark, very low contrast */}
      <motion.div
        style={{ x }}
        aria-hidden
        className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 whitespace-nowrap font-display text-[22vw] leading-none text-paper/[0.035]"
      >
        manuscript · manuscript · manuscript
      </motion.div>

      <div className="shell relative">
        <h2 className="max-w-[18ch] font-display text-[clamp(2rem,5.2vw,4rem)] leading-[1.06]">
          <RevealWords text={manifesto.heading} />
        </h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div className="space-y-6">
            {manifesto.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="measure text-lg text-paper/70">{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <figure className="border-l-2 border-saffron pl-7 lg:pl-10">
              <blockquote className="font-display text-[clamp(1.5rem,2.6vw,2.2rem)] italic leading-[1.35] text-paper">
                {manifesto.pullquote}
              </blockquote>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
