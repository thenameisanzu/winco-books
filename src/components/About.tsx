'use client';

import Reveal, { RevealWords } from './Reveal';
import { about } from '@/data/content';

export default function About() {
  return (
    <section id="about" className="bg-paper py-24 sm:py-32 lg:py-40">
      <div className="shell">
        <p className="eyebrow">{about.eyebrow}</p>
        <h2 className="mt-3 max-w-[18ch] font-display text-[clamp(2.2rem,5.4vw,4.2rem)] leading-[1.04]">
          <RevealWords text={about.heading} />
        </h2>

        <Reveal delay={0.1}>
          <p className="measure mt-8 font-display text-xl leading-[1.5] text-ink sm:text-2xl">{about.lede}</p>
        </Reveal>

        {/* Intro Paragraphs & Pullquote */}
        <div className="mt-14 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div className="space-y-6">
            {about.intro.map((p, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p className="measure text-lg text-ink-soft">{p}</p>
              </Reveal>
            ))}

            <Reveal delay={0.15}>
              <figure className="mt-10 border-l-2 border-saffron pl-7">
                <blockquote className="font-display text-[clamp(1.4rem,2.4vw,2rem)] italic leading-[1.35] text-ink">
                  {about.pullquote}
                </blockquote>
              </figure>
            </Reveal>
          </div>

          {/* Spine-like panel of beliefs */}
          <div className="lg:pt-2">
            <div className="grain relative rounded-[4px] bg-ink px-7 py-9 text-paper shadow-[0_24px_60px_-25px_rgba(27,26,24,0.6)] sm:px-9 sm:py-11">
              <h3 className="font-display text-2xl text-paper">What We Believe</h3>
              <ul className="mt-7 space-y-6">
                {about.beliefs.map((b) => (
                  <li key={b.title} className="border-t border-paper/15 pt-4">
                    <p className="font-display text-lg text-paper">{b.title}</p>
                    <p className="mt-2 text-base text-paper/65">{b.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Who We Are & Philosophy Section */}
        <div className="mt-24 grid gap-12 border-t border-ink/20 pt-16 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <h3 className="font-display text-3xl text-ink">{about.whoWeAre.title}</h3>
              <div className="mt-6 space-y-4">
                {about.whoWeAre.paragraphs.map((p, i) => (
                  <p key={i} className="text-lg text-ink-soft">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-xl border border-ink/15 bg-page/40 p-8">
              <h3 className="font-display text-3xl text-ink">{about.philosophy.title}</h3>
              <p className="mt-2 font-body text-lg italic text-ember">{about.philosophy.subtitle}</p>
              <div className="mt-6 space-y-4">
                {about.philosophy.paragraphs.map((p, i) => (
                  <p key={i} className="text-lg text-ink-soft">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Mission & Vision */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          <Reveal>
            <div className="rounded-xl border border-ink/15 bg-paper p-8">
              <h3 className="font-display text-2xl text-ink">{about.mission.title}</h3>
              <p className="mt-4 text-lg text-ink-soft">{about.mission.body}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-xl border border-ink/15 bg-paper p-8">
              <h3 className="font-display text-2xl text-ink">{about.vision.title}</h3>
              <p className="mt-4 text-lg text-ink-soft">{about.vision.body}</p>
            </div>
          </Reveal>
        </div>

        {/* Our Approach (Structured 6 Steps) */}
        <div className="mt-24 border-t border-ink/20 pt-16">
          <Reveal>
            <div className="max-w-[36ch]">
              <h3 className="font-display text-3xl text-ink">{about.approach.title}</h3>
              <p className="mt-3 font-body text-lg italic text-ember">{about.approach.subtitle}</p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {about.approach.steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.06}>
                <div className="flex h-full flex-col justify-between rounded-lg border border-ink/15 bg-page/30 p-6">
                  <div>
                    <span className="font-display text-2xl text-saffron tabular-nums">0{i + 1}</span>
                    <h4 className="mt-3 font-display text-xl text-ink">{step.title}</h4>
                    <p className="mt-3 text-base text-ink-soft">{step.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Core Pillars / Commitments */}
        <div className="mt-20 grid gap-x-12 gap-y-12 sm:grid-cols-2">
          {about.pillars.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.06}>
              <div className="border-t border-ink/20 pt-6">
                <h3 className="font-display text-2xl sm:text-3xl text-ink">{b.title}</h3>
                <p className="mt-4 text-lg text-ink-soft">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
