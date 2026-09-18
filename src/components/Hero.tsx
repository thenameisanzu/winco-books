'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { hero } from '@/data/content';

/** A single sheet of the manuscript stack. Drawn, not an image asset. */
function Sheet({ lines = 9, className = '' }: { lines?: number; className?: string }) {
  return (
    <div
      className={`grain relative overflow-hidden rounded-[3px] bg-page shadow-[0_18px_50px_-24px_rgba(23,21,15,0.55)] ${className}`}
    >
      <div className="space-y-[7px] px-5 py-6 sm:px-7 sm:py-8">
        <div className="h-2 w-1/2 rounded-full bg-ink/25" />
        <div className="h-[6px] w-1/3 rounded-full bg-ink/15" />
        <div className="pt-3" />
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className="h-[5px] rounded-full bg-ink/12"
            style={{ width: `${68 + ((i * 37) % 30)}%` }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const yBack = useTransform(scrollYProgress, [0, 1], ['0%', reduced ? '0%' : '-32%']);
  const yMid = useTransform(scrollYProgress, [0, 1], ['0%', reduced ? '0%' : '-16%']);
  const yFront = useTransform(scrollYProgress, [0, 1], ['0%', reduced ? '0%' : '8%']);
  const rotBack = useTransform(scrollYProgress, [0, 1], [-7, reduced ? -7 : -14]);
  const rotFront = useTransform(scrollYProgress, [0, 1], [5, reduced ? 5 : 12]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', reduced ? '0%' : '38%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.72], [1, reduced ? 1 : 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-[var(--nav-h)]"
    >
      {/* aged-paper wash */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_78%_18%,#EFE6D4_0%,#F4EFE4_46%,#F4EFE4_100%)]" />

      <div className="shell relative grid w-full items-center gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:py-24">
        <motion.div style={{ y: textY, opacity: textOpacity }} className="relative z-10">
          <h1 className="font-display text-[clamp(2.9rem,9vw,6.2rem)] leading-[0.98] tracking-[-0.02em]">
            {hero.headline.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: '112%' }}
                  animate={{ y: '0%' }}
                  transition={{
                    duration: 1.05,
                    delay: (reduced ? 0 : 2.05) + i * 0.11,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="mt-6 font-display text-xl italic text-ember sm:text-2xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: reduced ? 0.1 : 2.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {hero.sub}
          </motion.p>

          <motion.div
            className="measure mt-7 space-y-3 text-lg text-ink-soft"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: reduced ? 0.15 : 2.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-semibold text-ink">{hero.introNote}</p>
            <p>{hero.body}</p>
            <p className="text-base text-ink-soft/90">{hero.foot}</p>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: reduced ? 0.2 : 2.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <a href={hero.ctaPrimary.href} className="btn btn-solid">
              {hero.ctaPrimary.label}
            </a>
            <a href={hero.ctaSecondary.href} className="btn btn-ghost">
              {hero.ctaSecondary.label}
            </a>
          </motion.div>
        </motion.div>

        {/* Manuscript stack */}
        <div className="relative mx-auto h-[380px] w-full max-w-[420px] sm:h-[460px] lg:h-[560px] lg:max-w-none">
          <motion.div
            style={{ y: yBack, rotate: rotBack }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: reduced ? 0 : 2.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-[4%] top-[6%] w-[62%]"
          >
            <Sheet lines={10} />
          </motion.div>

          <motion.div
            style={{ y: yMid }}
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: reduced ? 0 : 2.25, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-[22%] top-[20%] w-[64%]"
          >
            <Sheet lines={11} className="rotate-[2deg]" />
          </motion.div>

          {/* The finished book — the one thing in colour */}
          <motion.div
            style={{ y: yFront, rotate: rotFront }}
            initial={{ opacity: 0, y: 90 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.25, delay: reduced ? 0 : 2.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-[2%] right-[2%] w-[54%] sm:w-[50%]"
          >
            <div className="grain relative aspect-[2/3] overflow-hidden rounded-[3px] bg-ink shadow-[0_36px_80px_-30px_rgba(27,26,24,0.72)]">
              <div className="absolute inset-y-0 left-0 w-[10px] bg-saffron" />
              <div className="flex h-full flex-col justify-between p-6 sm:p-8">
                <div>
                  <div className="h-px w-10 bg-saffron" />
                  <p className="mt-6 font-display text-2xl leading-tight text-paper sm:text-3xl">
                    Your book
                  </p>
                  <p className="mt-2 font-body text-sm italic text-paper/70">a Winco Books publication</p>
                </div>
                <p className="font-body text-xs tracking-[0.18em] text-paper/55">WINCO BOOKS</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduced ? 0.3 : 3.1, duration: 0.8 }}
      >
        <motion.div
          className="h-12 w-px bg-ink/30"
          animate={reduced ? {} : { scaleY: [0.3, 1, 0.3], originY: [0, 0, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
