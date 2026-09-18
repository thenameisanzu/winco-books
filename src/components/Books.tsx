'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Reveal, { RevealWords } from './Reveal';
import { books } from '@/data/content';

const spineColours = ['#1B1A18', '#EF7D00', '#3F3E3A', '#C25E00', '#2B2A27', '#6E6C67'];

export default function Books() {
  return (
    <section id="books" className="bg-paper py-24 sm:py-32 lg:py-40">
      <div className="shell">
        <p className="eyebrow">{books.eyebrow}</p>
        <h2 className="mt-3 max-w-[18ch] font-display text-[clamp(2rem,5.2vw,4rem)] leading-[1.05]">
          <RevealWords text={books.heading} />
        </h2>
        <Reveal delay={0.1}>
          <p className="measure mt-7 text-lg text-ink-soft">{books.lede}</p>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-7">
          {books.items.map((book, i) => (
            <Reveal key={`${book.title}-${i}`} delay={(i % 6) * 0.06}>
              <motion.div
                whileHover={{ y: -10, rotateZ: i % 2 ? 1.2 : -1.2 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group"
              >
                <div
                  className="grain relative aspect-[2/3] overflow-hidden rounded-[2px] shadow-[0_22px_45px_-24px_rgba(23,21,15,0.6)]"
                  style={{ backgroundColor: spineColours[i % spineColours.length] }}
                >
                  {book.cover ? (
                    <Image
                      src={book.cover}
                      alt={`${book.title} — cover`}
                      fill
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 15vw"
                      className="object-cover"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-y-0 left-0 w-[7px] bg-black/25" />
                      <div className="flex h-full flex-col justify-between p-4">
                        <div className="h-px w-6 bg-white/45" />
                        <div>
                          <p className="font-display text-base leading-tight text-white/90">{book.title}</p>
                          <p className="mt-1.5 font-body text-xs italic text-white/55">{book.author}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <p className="mt-4 font-display text-lg leading-snug">{book.title}</p>
                <p className="font-body text-sm italic text-ink-soft">{book.author}</p>
                <p className="mt-1 font-body text-sm text-ink-soft/70">{book.genre}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-14 text-lg text-ink-soft">
            Your title could sit on this shelf.{' '}
            <a href="#contact" className="link-underline text-ink">
              Start the conversation
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
