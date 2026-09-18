'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Reveal, { RevealWords } from './Reveal';
import { contact, site } from '@/data/content';
import {
  WhatsAppIcon,
  InstagramIcon,
  EmailIcon,
  PhoneIcon,
  GoogleMapsColorIcon,
  ExternalLinkIcon,
} from './Icons';

const field =
  'w-full border-b border-paper/25 bg-transparent py-3 text-lg text-paper placeholder:text-paper/35 focus:border-saffron focus:outline-none transition-colors duration-300';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    title: '',
    stage: contact.stages[0],
    interest: contact.interests[0],
    message: '',
  });
  const [error, setError] = useState('');

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const composed = [
    `New enquiry from the Winco Books website`,
    ``,
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    `Phone: ${form.phone || '—'}`,
    `Working title: ${form.title || '—'}`,
    `Stage: ${form.stage}`,
    `Interested in: ${form.interest}`,
    ``,
    `About the book:`,
    form.message || '—',
  ].join('\n');

  const validate = () => {
    if (!form.name.trim() || !form.email.trim()) {
      setError('Please add your name and email so we can reply.');
      return false;
    }
    setError('');
    return true;
  };

  const sendWhatsApp = () => {
    if (!validate()) return;
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(composed)}`, '_blank');
  };

  const sendEmail = () => {
    if (!validate()) return;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Publishing enquiry — ${form.title || form.name}`,
    )}&body=${encodeURIComponent(composed)}`;
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-24 text-paper sm:py-32 lg:py-40">
      <div className="pointer-events-none absolute -right-[12%] top-[8%] h-[34rem] w-[34rem] rounded-full bg-saffron/15 blur-[120px]" />
      <div className="pointer-events-none absolute -left-[10%] bottom-[10%] h-[28rem] w-[28rem] rounded-full bg-ember/10 blur-[100px]" />

      <div className="shell relative grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="eyebrow !text-paper/55">{contact.eyebrow}</p>
          <h2 className="mt-3 font-display text-[clamp(2.2rem,5.4vw,4.2rem)] leading-[1.03]">
            <RevealWords text={contact.heading} />
          </h2>
          <Reveal delay={0.1}>
            <p className="measure mt-7 text-lg text-paper/65">{contact.lede}</p>
          </Reveal>

          {/* Quick Connect Channels */}
          <Reveal delay={0.15}>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {/* WhatsApp Button */}
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3.5 rounded-xl border border-paper/15 bg-paper/5 p-4 transition-all duration-300 hover:border-[#25D366]/50 hover:bg-[#25D366]/10"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366]/20 text-[#25D366] transition-transform duration-300 group-hover:scale-110">
                  <WhatsAppIcon size={20} color="#25D366" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-body text-xs text-paper/50">WhatsApp Us</p>
                  <p className="truncate font-display text-base text-paper">{site.phone}</p>
                </div>
              </a>

              {/* Instagram Button */}
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3.5 rounded-xl border border-paper/15 bg-paper/5 p-4 transition-all duration-300 hover:border-[#E1306C]/50 hover:bg-[#E1306C]/10"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E1306C]/20 text-[#E1306C] transition-transform duration-300 group-hover:scale-110">
                  <InstagramIcon size={20} color="#E1306C" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-body text-xs text-paper/50">Follow on Instagram</p>
                  <p className="truncate font-display text-base text-paper">{site.instagramHandle}</p>
                </div>
              </a>

              {/* Email Button */}
              <a
                href={`mailto:${site.email}`}
                className="group flex items-center gap-3.5 rounded-xl border border-paper/15 bg-paper/5 p-4 transition-all duration-300 hover:border-saffron/50 hover:bg-saffron/10"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-saffron/20 text-saffron transition-transform duration-300 group-hover:scale-110">
                  <EmailIcon size={20} color="currentColor" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-body text-xs text-paper/50">Email Editorial</p>
                  <p className="truncate font-display text-base text-paper">{site.email}</p>
                </div>
              </a>

              {/* Phone Button */}
              <a
                href={`tel:${site.phoneClean}`}
                className="group flex items-center gap-3.5 rounded-xl border border-paper/15 bg-paper/5 p-4 transition-all duration-300 hover:border-paper/40 hover:bg-paper/10"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-paper/15 text-paper transition-transform duration-300 group-hover:scale-110">
                  <PhoneIcon size={20} color="currentColor" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-body text-xs text-paper/50">Direct Phone</p>
                  <p className="truncate font-display text-base text-paper">{site.phone}</p>
                </div>
              </a>
            </div>
          </Reveal>

          {/* Google Maps Integration Card */}
          <Reveal delay={0.2}>
            <div className="mt-8 overflow-hidden rounded-2xl border border-paper/15 bg-paper/5">
              <div className="flex items-center justify-between border-b border-paper/10 p-4">
                <div className="flex items-center gap-2.5">
                  <GoogleMapsColorIcon size={22} />
                  <div>
                    <p className="font-display text-sm text-paper">{site.locationName}</p>
                    <p className="font-body text-xs text-paper/50">{site.address}</p>
                  </div>
                </div>
                <a
                  href={site.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-paper/20 px-3 py-1.5 text-xs text-paper/80 transition-colors hover:border-saffron hover:bg-saffron hover:text-ink"
                >
                  <span>Google Maps</span>
                  <ExternalLinkIcon size={13} />
                </a>
              </div>

              {/* Interactive Google Map embed */}
              <div className="relative h-44 w-full sm:h-52">
                <iframe
                  title="Winco Books Location Google Map"
                  src={site.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'contrast(1.05) saturate(0.85)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full opacity-90 transition-opacity duration-300 hover:opacity-100"
                />
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-paper/15 bg-paper/[0.03] p-7 sm:p-9">
            <p className="font-body text-base italic text-paper/55">{contact.formNote}</p>

            <div className="mt-8 grid gap-x-8 gap-y-7 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="sr-only">
                  Your name
                </label>
                <input
                  id="contact-name"
                  className={field}
                  placeholder="Your name"
                  aria-label="Your name"
                  value={form.name}
                  onChange={set('name')}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="contact-email"
                  className={field}
                  type="email"
                  placeholder="Email address"
                  aria-label="Email address"
                  value={form.email}
                  onChange={set('email')}
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className="sr-only">
                  Phone number
                </label>
                <input
                  id="contact-phone"
                  className={field}
                  placeholder="Phone (optional)"
                  aria-label="Phone number (optional)"
                  value={form.phone}
                  onChange={set('phone')}
                />
              </div>
              <div>
                <label htmlFor="contact-title" className="sr-only">
                  Working title
                </label>
                <input
                  id="contact-title"
                  className={field}
                  placeholder="Working title (optional)"
                  aria-label="Working title (optional)"
                  value={form.title}
                  onChange={set('title')}
                />
              </div>
            </div>

            <fieldset className="mt-10">
              <legend className="font-body text-base italic text-paper/55">Where is your book right now?</legend>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {contact.stages.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setForm((f) => ({ ...f, stage: s }))}
                    className={`relative rounded-full px-4 py-2 text-base transition-colors duration-300 ${
                      form.stage === s ? 'text-ink' : 'text-paper/60 hover:text-paper'
                    }`}
                  >
                    {form.stage === s && (
                      <motion.span layoutId="stage-pill" className="absolute inset-0 rounded-full bg-paper" />
                    )}
                    <span className="relative z-10">{s}</span>
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset className="mt-8">
              <legend className="font-body text-base italic text-paper/55">What are you interested in?</legend>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {contact.interests.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setForm((f) => ({ ...f, interest: s }))}
                    className={`rounded-full border px-4 py-2 text-base transition-colors duration-300 ${
                      form.interest === s
                        ? 'border-saffron bg-saffron text-ink'
                        : 'border-paper/25 text-paper/60 hover:border-paper/60 hover:text-paper'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </fieldset>

            <div>
              <label htmlFor="contact-message" className="sr-only">
                About your book
              </label>
              <textarea
                id="contact-message"
                className={`${field} mt-10 resize-none`}
                rows={4}
                placeholder="Tell us about your book — subject, length, and what you'd like help with"
                aria-label="Tell us about your book"
                value={form.message}
                onChange={set('message')}
              />
            </div>

            {error && <p className="mt-4 text-base text-saffron">{error}</p>}

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={sendWhatsApp}
                className="btn btn-solid flex flex-1 items-center justify-center gap-2.5"
              >
                <WhatsAppIcon size={18} />
                <span>Send on WhatsApp</span>
              </button>
              <button
                type="button"
                onClick={sendEmail}
                className="btn flex flex-1 items-center justify-center gap-2.5 border border-paper/30 text-paper hover:bg-paper hover:text-ink"
              >
                <EmailIcon size={18} />
                <span>Send by email</span>
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
