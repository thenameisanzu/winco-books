'use client';

import Image from 'next/image';
import { nav, site } from '@/data/content';
import {
  InstagramIcon,
  WhatsAppIcon,
  EmailIcon,
  PhoneIcon,
  GoogleMapsColorIcon,
  ExternalLinkIcon,
} from './Icons';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-paper py-14 sm:py-16">
      <div className="shell">
        <div className="rule" />
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          {/* Column 1: Brand & Location */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Winco Books Logo"
                width={48}
                height={42}
                className="h-11 w-auto object-contain"
              />
              <p className="font-display text-2xl">
                Winco <span className="italic text-ember">Books</span>
              </p>
            </div>
            <p className="measure mt-3 text-base text-ink-soft">{site.tagline}</p>
            <a
              href={site.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-4 inline-flex items-center gap-2 text-base text-ink-soft transition-colors hover:text-ink"
            >
              <GoogleMapsColorIcon size={18} className="shrink-0" />
              <span className="link-underline">{site.address}</span>
              <ExternalLinkIcon size={13} className="opacity-60 transition-opacity group-hover:opacity-100" />
            </a>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <p className="font-display text-sm font-semibold tracking-wider text-ink/70 uppercase">Explore</p>
            <nav aria-label="Footer" className="mt-4 flex flex-col gap-2.5">
              {nav.map((item) => (
                <a key={item.href} href={item.href} className="link-underline self-start text-base text-ink-soft hover:text-ink">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact & Direct Brand Channels */}
          <div>
            <p className="font-display text-sm font-semibold tracking-wider text-ink/70 uppercase">Connect</p>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={`mailto:${site.email}`}
                className="group inline-flex items-center gap-2.5 text-base text-ink-soft transition-colors hover:text-ink"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-ink/5 text-ink transition-colors group-hover:bg-saffron group-hover:text-ink">
                  <EmailIcon size={16} />
                </div>
                <span className="link-underline">{site.email}</span>
              </a>

              <a
                href={`tel:${site.phoneClean}`}
                className="group inline-flex items-center gap-2.5 text-base text-ink-soft transition-colors hover:text-ink"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-ink/5 text-ink transition-colors group-hover:bg-ink group-hover:text-paper">
                  <PhoneIcon size={16} />
                </div>
                <span className="link-underline">{site.phone}</span>
              </a>

              {/* Brand Social / App Buttons */}
              <div className="mt-2 flex flex-wrap items-center gap-3">
                {/* WhatsApp */}
                <a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                  title="Chat on WhatsApp"
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 bg-paper text-ink transition-all duration-300 hover:border-[#25D366] hover:bg-[#25D366] hover:text-white hover:shadow-md"
                >
                  <WhatsAppIcon size={19} color="currentColor" />
                </a>

                {/* Instagram */}
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow on Instagram"
                  title="Follow on Instagram"
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 bg-paper text-ink transition-all duration-300 hover:border-[#E1306C] hover:bg-[#E1306C] hover:text-white hover:shadow-md"
                >
                  <InstagramIcon size={19} color="currentColor" />
                </a>

                {/* Google Maps Location */}
                <a
                  href={site.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View on Google Maps"
                  title="View on Google Maps"
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 bg-paper text-ink transition-all duration-300 hover:border-[#4285F4] hover:bg-white hover:shadow-md"
                >
                  <GoogleMapsColorIcon size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between border-t border-rule pt-6 sm:flex-row sm:items-center">
          <p className="font-body text-sm text-ink-soft/70">
            © {year} Winco Books. All rights reserved.
          </p>
          <p className="mt-2 font-body text-xs text-ink-soft/50 sm:mt-0">
            Publishing in English & Malayalam • India & Global Distribution
          </p>
        </div>
      </div>
    </footer>
  );
}
