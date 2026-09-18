'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

export default function Preloader() {
  const reduced = useReducedMotion();
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (reduced) {
      setDone(true);
      document.body.style.overflow = '';
      return;
    }
    document.body.style.overflow = 'hidden';
    const t = setTimeout(() => {
      setDone(true);
      document.body.style.overflow = '';
    }, 1900);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = '';
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
          exit={{ y: '-100%' }}
          transition={{ duration: 1.05, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="text-center">
            <motion.p
              className="font-display text-4xl text-paper sm:text-5xl"
              initial={{ opacity: 0, letterSpacing: '0.4em' }}
              animate={{ opacity: 1, letterSpacing: '0.08em' }}
              transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
            >
              Winco Books
            </motion.p>
            <motion.div
              className="mx-auto mt-5 h-px bg-saffron"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.4, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.p
              className="mt-4 font-body text-sm italic text-paper/55"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Publishing ideas. Empowering authors.
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
