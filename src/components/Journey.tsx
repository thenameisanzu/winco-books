'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import Reveal, { RevealWords } from './Reveal';
import { journey } from '@/data/content';

function Header() {
  return (
    <div className="shell">
      <p className="eyebrow">{journey.sub}</p>
      <h2 className="mt-3 font-display text-[clamp(2rem,5.2vw,4rem)] leading-[1.06]">
        <RevealWords text={journey.heading} />
      </h2>
    </div>
  );
}

function StepCard({
  step,
  index,
}: {
  step: (typeof journey.steps)[number];
  index: number;
}) {
  return (
    <div className="flex h-full flex-col justify-between border-t border-rule pt-6">
      <div>
        <div className="flex items-baseline gap-4">
          <span className="font-display text-5xl text-ember sm:text-6xl">{step.n}</span>
          <span className="h-px flex-1 bg-rule" />
        </div>
        <h3 className="mt-6 font-display text-2xl sm:text-3xl">{step.title}</h3>
        <p className="mt-3 max-w-[32ch] text-lg text-ink-soft">{step.body}</p>
      </div>
      <p className="mt-8 font-body text-sm italic text-ink-soft/70">
        Stage {index + 1} of {journey.steps.length}
      </p>
    </div>
  );
}

export default function Journey() {
  const reduced = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: trackRef });
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 26, restDelta: 0.001 });
  const x = useTransform(smooth, [0, 1], ['2%', '-68%']);
  const lineScale = useTransform(smooth, [0, 1], [0, 1]);

  return (
    <section id="journey" className="bg-paper py-24 sm:py-28">
      <Header />

      {/* Desktop: pinned horizontal sequence */}
      <div ref={trackRef} className="relative mt-16 hidden h-[420vh] lg:block">
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <div className="shell mb-10">
            <div className="h-px w-full bg-rule">
              <motion.div className="h-px origin-left bg-saffron" style={{ scaleX: lineScale }} />
            </div>
          </div>

          <motion.div style={{ x: reduced ? '0%' : x }} className="flex gap-10 pl-[max(3rem,calc((100vw-86rem)/2+3rem))] pr-12">
            {journey.steps.map((step, i) => (
              <div key={step.n} className="w-[28rem] shrink-0">
                <StepCard step={step} index={i} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile / tablet: vertical sequence */}
      <div className="shell mt-12 space-y-10 lg:hidden">
        {journey.steps.map((step, i) => (
          <Reveal key={step.n} delay={i * 0.04}>
            <StepCard step={step} index={i} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
