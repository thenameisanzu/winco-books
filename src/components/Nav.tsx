'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { nav, site } from '@/data/content';
import {
  WhatsAppIcon,
  InstagramIcon,
  GoogleMapsColorIcon,
  EmailIcon,
  PhoneIcon,
} from './Icons';

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-quill ${
          solid ? 'bg-paper/92 backdrop-blur-md shadow-[0_4px_20px_-10px_rgba(27,26,24,0.1)]' : 'bg-transparent'
        }`}
      >
        <div className="shell flex h-[var(--nav-h)] items-center justify-between">
          <a href="#top" className="font-display text-xl tracking-tight sm:text-2xl" aria-label="Winco Books, home">
            Winco <span className="italic text-ember">Books</span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="link-underline text-base text-ink-soft hover:text-ink">
                {item.label}
              </a>
            ))}

            <div className="flex items-center gap-2 pl-2 border-l border-ink/15">
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Chat on WhatsApp"
                aria-label="Chat on WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full text-ink transition-colors hover:bg-[#25D366] hover:text-white"
              >
                <WhatsAppIcon size={18} color="currentColor" />
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                title="Follow on Instagram"
                aria-label="Follow on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full text-ink transition-colors hover:bg-[#E1306C] hover:text-white"
              >
                <InstagramIcon size={18} color="currentColor" />
              </a>
            </div>

            <a href="#contact" className="btn btn-solid !py-2.5 !px-5 !text-sm">
              Start your book
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="relative z-[70] flex h-11 w-11 flex-col items-center justify-center gap-[6px] lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <motion.span
              className={`block h-px w-7 ${open ? 'bg-paper' : 'bg-ink'}`}
              animate={{ rotate: open ? 45 : 0, y: open ? 3.5 : 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.span
              className={`block h-px w-7 ${open ? 'bg-paper' : 'bg-ink'}`}
              animate={{ rotate: open ? -45 : 0, y: open ? -3.5 : 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            />
          </button>
        </div>

        <motion.div className="h-px origin-left bg-saffron" style={{ scaleX: progress }} />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-ink lg:hidden"
            initial={{ clipPath: 'circle(0% at calc(100% - 3rem) 2.25rem)' }}
            animate={{ clipPath: 'circle(145% at calc(100% - 3rem) 2.25rem)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 3rem) 2.25rem)' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex h-full flex-col justify-between px-6 pb-8 pt-24 overflow-y-auto">
              <nav className="flex flex-col gap-1" aria-label="Mobile">
                {nav.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-paper/12 py-3.5 font-display text-2xl text-paper"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.05, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.5 }}
                className="space-y-4 pt-6"
              >
                <a href="#contact" onClick={() => setOpen(false)} className="btn btn-solid w-full">
                  Start your book
                </a>

                <div className="flex items-center justify-around border-y border-paper/15 py-3.5">
                  <a
                    href={site.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-paper/80 hover:text-[#25D366]"
                    aria-label="WhatsApp"
                  >
                    <WhatsAppIcon size={18} color="#25D366" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={site.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-paper/80 hover:text-[#E1306C]"
                    aria-label="Instagram"
                  >
                    <InstagramIcon size={18} color="#E1306C" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href={site.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-paper/80 hover:text-white"
                    aria-label="Google Maps"
                  >
                    <GoogleMapsColorIcon size={18} />
                    <span>Location</span>
                  </a>
                </div>

                <div className="space-y-1.5 text-center text-xs text-paper/60">
                  <a href={`mailto:${site.email}`} className="block hover:text-paper">
                    {site.email}
                  </a>
                  <a href={`tel:${site.phoneClean}`} className="block hover:text-paper">
                    {site.phone}
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
