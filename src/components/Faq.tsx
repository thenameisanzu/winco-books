'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Reveal, { RevealWords } from './Reveal';
import { faq } from '@/data/content';

export default function Faq() {
  const [tab, setTab] = useState('all');
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState<number | null>(null);

  const filteredQuestions = useMemo(() => {
    return faq.allQuestions.filter((item) => {
      const matchSearch =
        search.trim() === '' ||
        item.q.toLowerCase().includes(search.toLowerCase()) ||
        item.a.toLowerCase().includes(search.toLowerCase());

      if (!matchSearch) return false;

      if (tab === 'all') return true;
      if (tab === 'start') return item.category === 'Getting Started' || item.category === 'General';
      if (tab === 'services') return item.category === 'Services' || item.category === 'Design & Approval' || item.category === 'Languages';
      if (tab === 'packages') return item.category === 'Packages' || item.category === 'Pricing' || item.category === 'Printing & Copies';
      if (tab === 'rights') return item.category === 'Rights & Ownership' || item.category === 'Distribution & Reach' || item.category === 'Marketing' || item.category === 'Authors & Genres';
      return true;
    });
  }, [tab, search]);

  return (
    <section id="faq" className="bg-page py-24 sm:py-32 lg:py-40">
      <div className="shell">
        <p className="eyebrow">{faq.eyebrow}</p>
        <h2 className="mt-3 max-w-[20ch] font-display text-[clamp(2rem,5vw,3.6rem)] leading-[1.06]">
          <RevealWords text={faq.heading} />
        </h2>
        <Reveal delay={0.1}>
          <p className="measure mt-7 text-lg text-ink-soft">{faq.lede}</p>
        </Reveal>

        {/* Filter controls & Search */}
        <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="FAQ categories">
            {faq.categories.map((c) => {
              const isActive = c.id === tab;
              return (
                <button
                  key={c.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setTab(c.id);
                    setOpen(null);
                  }}
                  className={`relative rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                    isActive ? 'text-paper' : 'text-ink-soft hover:text-ink'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="faq-pill"
                      className="absolute inset-0 rounded-full bg-ink"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{c.label}</span>
                </button>
              );
            })}
          </div>

          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search 32 questions..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setOpen(null);
              }}
              aria-label="Search FAQs"
              className="w-full rounded-full border border-ink/20 bg-paper/80 px-4 py-2 text-sm text-ink placeholder:text-ink/40 focus:border-saffron focus:outline-none"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-ink/50 hover:text-ink"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* FAQ List */}
        <div className="mt-10">
          {filteredQuestions.length === 0 ? (
            <div className="rounded-xl border border-ink/15 bg-paper/50 p-8 text-center text-ink-soft">
              No questions found matching &ldquo;{search}&rdquo;. Try another term or contact us directly.
            </div>
          ) : (
            <div className="divide-y divide-ink/18 border-t border-b border-ink/18">
              {filteredQuestions.map((item) => {
                const isOpen = open === item.n;
                return (
                  <div key={item.n}>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : item.n)}
                      aria-expanded={isOpen}
                      className="flex w-full items-start gap-4 py-5 text-left transition-colors hover:text-ember sm:gap-6"
                    >
                      <span className="w-8 shrink-0 font-display text-base text-ember/70 tabular-nums">
                        {String(item.n).padStart(2, '0')}
                      </span>
                      <span className="flex-1 font-display text-lg leading-snug sm:text-xl text-ink">
                        {item.n}. {item.q.replace(/^\d+\.\s*/, '')}
                      </span>
                      <motion.span
                        aria-hidden
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="relative mt-1 block h-4 w-4 shrink-0"
                      >
                        <span className="absolute left-0 top-1/2 h-px w-4 bg-ink/60" />
                        <span className="absolute left-1/2 top-0 h-4 w-px bg-ink/60" />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="measure pb-7 pl-12 text-base text-ink-soft sm:pl-14 sm:text-lg">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <Reveal>
          <div className="mt-14 border-t border-ink/20 pt-8">
            <h3 className="font-display text-2xl">Still Have Questions?</h3>
            <p className="measure mt-3 text-lg text-ink-soft">
              Every book is different, and your publishing requirements may not fit neatly into a standard
              FAQ. If you have a question that isn&rsquo;t answered here, we would be happy to discuss your project.
            </p>
            <a href="#contact" className="btn btn-solid mt-7">
              Ask us directly
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
