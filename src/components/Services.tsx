'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Reveal, { RevealWords } from './Reveal';
import { services } from '@/data/content';

export default function Services() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="services" className="bg-ink py-24 text-paper sm:py-32 lg:py-40">
      <div className="shell">
        <p className="eyebrow !text-paper/55">PUBLISHING SERVICES</p>
        <h2 className="mt-3 max-w-[20ch] font-display text-[clamp(2.2rem,5.4vw,4.2rem)] leading-[1.04]">
          <RevealWords text={services.heading} />
        </h2>
        
        <Reveal delay={0.1}>
          <div className="measure mt-8 space-y-4 text-lg text-paper/70">
            <p>Publishing a book involves much more than putting words on pages.</p>
            <p>
              A manuscript may need editorial refinement. A cover needs to communicate the book’s identity.
              The interior needs professional formatting. The finished publication needs the right publishing
              and distribution channels.
            </p>
            <p>
              At Winco Books, we bring these services together to help authors move from manuscript to
              published book with greater clarity and professional support.
            </p>
            <p className="font-semibold text-paper/90">
              Whether you need a complete publishing solution or only specific services, we can help you
              identify what your book requires.
            </p>
          </div>
        </Reveal>

        {/* Explicit Heading: OUR PUBLISHING SERVICES */}
        <div className="mt-20 border-t border-paper/20 pt-12">
          <Reveal>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-body text-xs uppercase tracking-widest text-saffron">Comprehensive Solutions</p>
                <h3 className="mt-2 font-display text-3xl text-paper sm:text-4xl">OUR PUBLISHING SERVICES</h3>
              </div>
              <span className="hidden font-display text-base text-paper/40 sm:block">12 Specialised Services</span>
            </div>
          </Reveal>

          <div className="mt-12">
            {services.items.map((item, i) => {
              const isOpen = open === i;
              const displayNumber = `${i + 1}.`;
              return (
                <Reveal key={item.title} delay={Math.min(i, 6) * 0.03}>
                  <div className="border-t border-paper/15 last:border-b">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="group flex w-full items-baseline gap-5 py-6 text-left sm:gap-8"
                    >
                      <span className="w-10 shrink-0 font-display text-base text-saffron tabular-nums">
                        {String(i + 1).padStart(2, '0')}
                      </span>

                      <span className="flex-1">
                        <span
                          className={`block font-display text-[clamp(1.35rem,2.8vw,2.1rem)] leading-tight transition-colors duration-300 ${
                            isOpen ? 'text-saffron' : 'text-paper group-hover:text-paper/70'
                          }`}
                        >
                          {displayNumber} {item.title.replace(/^\d+\.\s*/, '')}
                        </span>
                        <span className="mt-1 block font-body text-base italic text-paper/45 sm:hidden">
                          {item.short}
                        </span>
                      </span>

                      <span className="hidden max-w-[28ch] flex-1 font-body text-base italic text-paper/45 sm:block">
                        {item.short}
                      </span>

                      <motion.span
                        aria-hidden
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="relative ml-2 block h-4 w-4 shrink-0"
                      >
                        <span className="absolute left-0 top-1/2 h-px w-4 bg-paper/60" />
                        <span className="absolute left-1/2 top-0 h-4 w-px bg-paper/60" />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="body"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="measure pb-9 pl-0 text-lg leading-relaxed text-paper/75 sm:pl-[3.75rem]">
                            {item.body}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal>
          <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-paper/15 pt-8 sm:flex-row sm:items-center">
            <p className="text-lg text-paper/70">
              Need only one or two of these services? We provide bespoke editorial and publishing support.
            </p>
            <a href="#contact" className="btn btn-solid shrink-0">
              Discuss your book&apos;s requirements
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
