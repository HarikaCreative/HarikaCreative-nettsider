import Image from 'next/image'
import EnContactForm from '@/components/sections/EnContactForm'
import CookieSettingsLink from '@/components/ui/CookieSettingsLink'

export default function EnHomePage() {
  return (
    <>
      <main>

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="min-h-screen grid lg:grid-cols-2">
          {/* Image — LEFT */}
          <div className="relative min-h-[50vh] lg:min-h-screen order-2 lg:order-1">
            <Image
              src="/images/en/crete-villa-pool-terrace.webp"
              alt="Traditional Cretan villa with private pool, stone terrace and palm trees"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-aegean/20" />
          </div>

          {/* Text — RIGHT */}
          <div className="order-1 lg:order-2 flex flex-col justify-center px-8 md:px-16 py-24 bg-white">
            <p className="font-mono text-body-xs text-terracotta uppercase tracking-widest mb-6">
              Bespoke websites · Greece &amp; Crete
            </p>

            <h1 className="font-serif text-display-lg text-ink leading-tight mb-6">
              Your villa deserves more than a listing
            </h1>

            <p className="text-body-lg text-ink/70 mb-10 max-w-md">
              I build handcrafted websites for villa owners in Crete and Greece.
              Attract the right guests, reduce platform fees, and own your
              booking relationship.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-aegean text-white px-8 py-4 font-semibold hover:bg-aegean/90 transition-colors"
              >
                Start the conversation
              </a>
              <a
                href="#packages"
                className="inline-flex items-center justify-center border border-aegean text-aegean px-8 py-4 font-semibold hover:bg-aegean/5 transition-colors"
              >
                See packages
              </a>
            </div>

            <blockquote className="border-l-2 border-gold pl-6">
              <p className="text-body-md text-ink/70 italic mb-2">
                &ldquo;Marianna handles everything with precision and care. Our website
                doubled direct enquiries within three months.&rdquo;
              </p>
              <cite className="text-body-sm text-ink/50 not-italic">
                Elisabeth &amp; Bernt Giil — Anasa Retreat Crete
              </cite>
            </blockquote>
          </div>
        </section>

        {/* ── METRICS BAR ──────────────────────────────────────── */}
        <section className="bg-aegean text-white py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { stat: '15–25%', label: 'Commission saved moving bookings direct' },
                { stat: 'Top 10', label: 'Google target for your villa\'s key terms' },
                { stat: '< 2s', label: 'Load time — on any connection' },
                { stat: '100%', label: 'GDPR compliant, Norwegian precision' },
              ].map(({ stat, label }) => (
                <div key={stat}>
                  <p className="font-serif text-display-md text-gold mb-2">{stat}</p>
                  <p className="text-body-sm text-white/70">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHO THIS IS FOR ──────────────────────────────────── */}
        <section className="py-24 bg-nordic-mist">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
              {/* Left */}
              <div>
                <h2 className="font-serif text-h1 text-aegean mb-6">
                  You own something beautiful. It deserves a presence to match.
                </h2>
                <p className="text-body-lg text-ink/70 mb-4">
                  Most villa owners in Greece and Crete rely entirely on Airbnb,
                  Booking.com, or Vrbo. Those platforms take 15–25% of every booking,
                  control your pricing, and can delist you overnight.
                </p>
                <p className="text-body-lg text-ink/70">
                  A professional website changes that equation. You get found on Google,
                  you own the conversation with your guests, and you keep more of what
                  you earn.
                </p>
              </div>

              {/* Right — cards */}
              <div className="space-y-4">
                {[
                  {
                    title: 'Private villa owners',
                    body: 'You have a premium property. Your digital presence should reflect it — not a generic listing page.',
                  },
                  {
                    title: 'Retreat & hospitality',
                    body: 'Wellness retreats, boutique stays, and nature escapes deserve a website that communicates their ethos.',
                  },
                  {
                    title: 'Scandinavian owners abroad',
                    body: 'I understand both cultures. I speak Norwegian, think in Scandinavian design principles, and know the Greek hospitality market.',
                  },
                ].map(({ title, body }) => (
                  <div key={title} className="bg-white p-6 border-l-2 border-gold">
                    <h3 className="font-serif text-h4 text-aegean mb-2">{title}</h3>
                    <p className="text-body-md text-ink/70">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── POOL / COMMUNICATION SECTION ─────────────────────── */}
        <section className="grid lg:grid-cols-2 min-h-[60vh]">
          {/* Image — LEFT */}
          <div className="relative min-h-[40vh] lg:min-h-full">
            <Image
              src="/images/en/crete-private-pool-garden-palm.webp"
              alt="Cretan villa private pool surrounded by tropical garden and palm trees"
              fill
              className="object-cover"
            />
          </div>

          {/* Text — RIGHT */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-24 bg-white">
            <h2 className="font-serif text-h2 text-aegean mb-8">
              Rental communication that builds trust
            </h2>

            <div className="space-y-6">
              {[
                {
                  title: 'Pre-arrival guide',
                  body: 'Directions, key collection, parking, house rules — all beautifully organised and easy to share.',
                },
                {
                  title: 'Amenities & policies',
                  body: 'Clear, professional, and guest-friendly. No surprises on arrival.',
                },
                {
                  title: 'Local recommendations',
                  body: 'Restaurants, beaches, excursions. Your insider knowledge, presented beautifully.',
                },
              ].map(({ title, body }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-ink mb-1">{title}</h3>
                    <p className="text-body-md text-ink/70">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DETAIL IMAGES ─────────────────────────────────────── */}
        <section className="grid md:grid-cols-2">
          <div className="relative aspect-[4/3]">
            <Image
              src="/images/en/greek-white-arch-door-sea-view-detail.webp"
              alt="White-washed stone arch doorway with Aegean Sea view, Greek island architecture"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1.5 text-xs">
              <span>Greek island terrace · Aegean Sea</span>
              <span className="block text-white/60 text-[10px]">Image by Freepik</span>
            </div>
          </div>
          <div className="relative aspect-[4/3]">
            <Image
              src="/images/en/greek-island-orange-citrus-terrace-balcony.webp"
              alt="Mediterranean balcony with orange citrus trees overlooking Greek island view"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1.5 text-xs">
              <span>Mediterranean detail · Greek islands</span>
              <span className="block text-white/60 text-[10px]">Image by Freepik</span>
            </div>
          </div>
        </section>

        {/* ── PACKAGES ─────────────────────────────────────────── */}
        <section id="packages" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-serif text-h1 text-aegean mb-4">Packages</h2>
              <p className="text-body-lg text-ink/70 max-w-xl mx-auto">
                Three options tailored to different needs — from a clean introductory
                presence to a full digital identity.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* BASIC */}
              <div className="border border-ink/10 p-8">
                <h3 className="font-serif text-h3 text-aegean mb-1">Basic</h3>
                <p className="text-body-sm text-ink/60 mb-6">For private villa owners</p>
                <p className="font-serif text-display-md text-aegean mb-8">€880</p>
                <ul className="space-y-3 mb-8">
                  {[
                    '1–5 pages (Home, About, Amenities, Contact, Gallery)',
                    'English (EN) + Norwegian (NO)*',
                    'Professional copy & structure',
                    'Image optimisation',
                    'Contact form',
                    'Mobile-optimised',
                    'SEO foundation',
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3 text-body-sm text-ink/80">
                      <span className="text-gold mt-0.5 flex-shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="block text-center border border-aegean text-aegean py-3 px-6 font-semibold hover:bg-aegean/5 transition-colors"
                >
                  Get started
                </a>
              </div>

              {/* STANDARD — featured */}
              <div className="border-2 border-aegean p-8 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-aegean text-white text-body-xs font-semibold px-4 py-1">
                  Most chosen
                </div>
                <h3 className="font-serif text-h3 text-aegean mb-1">Standard</h3>
                <p className="text-body-sm text-ink/60 mb-6">For professional villa rentals</p>
                <p className="font-serif text-display-md text-aegean mb-8">€1,920</p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Everything in Basic',
                    '5–15 pages',
                    'Booking enquiry flow',
                    'Advanced SEO optimisation',
                    'Local guide & map',
                    'Photo gallery',
                    'Google Analytics setup',
                    '2 languages (EN + NO or DE)*',
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3 text-body-sm text-ink/80">
                      <span className="text-gold mt-0.5 flex-shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="block text-center bg-aegean text-white py-3 px-6 font-semibold hover:bg-aegean/90 transition-colors"
                >
                  Choose Standard
                </a>
              </div>

              {/* LUXURY */}
              <div className="border border-ink/10 p-8">
                <h3 className="font-serif text-h3 text-aegean mb-1">Luxury</h3>
                <p className="text-body-sm text-ink/60 mb-6">For boutique hospitality</p>
                <p className="font-serif text-display-md text-aegean mb-8">€3,440</p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Everything in Standard',
                    'Up to 25 pages',
                    'Visual identity (logo + palette)',
                    'Full booking flow',
                    'Payment integration',
                    'CMS — edit content yourself',
                    'Priority support (3 months)',
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3 text-body-sm text-ink/80">
                      <span className="text-gold mt-0.5 flex-shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="block text-center border border-aegean text-aegean py-3 px-6 font-semibold hover:bg-aegean/5 transition-colors"
                >
                  Get started
                </a>
              </div>
            </div>

            <p className="text-center text-body-sm text-ink/50 mt-8">
              * Additional languages at extra cost, reviewed by native speakers
            </p>
          </div>
        </section>

        {/* ── LANGUAGES ─────────────────────────────────────────── */}
        <section className="py-24 bg-nordic-mist">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="font-serif text-h2 text-aegean text-center mb-12">Languages</h2>

            <div className="grid md:grid-cols-2 gap-12 mb-10">
              <div>
                <h3 className="font-semibold text-ink mb-4 text-body-sm uppercase tracking-wider">Included</h3>
                <div className="space-y-3">
                  {[{ flag: '🇬🇧', lang: 'English' }, { flag: '🇳🇴', lang: 'Norwegian' }].map(({ flag, lang }) => (
                    <div key={lang} className="flex items-center gap-3 text-body-md text-ink/80">
                      <span className="text-2xl">{flag}</span> {lang}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-ink mb-4 text-body-sm uppercase tracking-wider">Extra cost</h3>
                <div className="space-y-3">
                  {[
                    { flag: '🇩🇪', lang: 'German' },
                    { flag: '🇪🇸', lang: 'Spanish' },
                    { flag: '🇮🇹', lang: 'Italian' },
                    { flag: '🇬🇷', lang: 'Greek' },
                  ].map(({ flag, lang }) => (
                    <div key={lang} className="flex items-center gap-3 text-body-md text-ink/80">
                      <span className="text-2xl">{flag}</span> {lang}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gold/10 border border-gold/30 p-6 rounded-sm">
              <p className="text-body-md text-ink/80">
                All translations are reviewed by native speakers. I do not use automated translation tools for final copy. Cost depends on page count and language combination — get in touch for a quote.
              </p>
            </div>
          </div>
        </section>

        {/* ── ABOUT ────────────────────────────────────────────── */}
        <section className="py-24 bg-aegean text-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="font-serif text-h1 mb-6">
                  Norwegian precision. Mediterranean soul.
                </h2>
                <div className="space-y-4 text-body-lg text-white/80 mb-8">
                  <p>
                    I&apos;m Marianna — a web designer with Norwegian roots, a Greek surname,
                    and a deep understanding of what villa owners in Greece and Crete need
                    from a digital presence.
                  </p>
                  <p>
                    After years working in hospitality across both countries, I know what
                    guests expect and what owners want to communicate. My process is
                    structured, my communication is clear, and I always deliver what I promise.
                  </p>
                </div>

                <ul className="space-y-3">
                  {[
                    'Digital marketing, Noroff (2020–2022)',
                    'Hospitality experience in Norway and Greece',
                    'Native Norwegian, fluent English, conversational Greek',
                    'Based in Asker, Norway — working internationally',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-body-md text-white/70">
                      <span className="text-gold mt-1 flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Photo placeholder — add /images/en/Marianna.webp when available */}
              <div className="relative h-96 rounded-sm overflow-hidden bg-aegean/50 flex items-center justify-center">
                <div className="text-center text-white/40">
                  <div className="w-24 h-24 rounded-full bg-white/10 mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <p className="text-body-sm">Add Marianna.webp to /images/en/</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── REFERENCE ─────────────────────────────────────────── */}
        <section className="py-24 bg-aegean/10 text-center">
          <div className="container mx-auto px-6 max-w-3xl">
            <blockquote className="mb-8">
              <p className="font-serif text-h3 text-aegean italic leading-relaxed mb-6">
                &ldquo;Working with Marianna was a relief. She understood what we were trying
                to create at Anasa, translated it into a website that genuinely represents
                our retreat, and managed the whole process with precision and warmth.
                Highly recommended.&rdquo;
              </p>
              <cite className="text-body-md text-ink/60 not-italic">
                Elisabeth &amp; Bernt Giil — Anasa Retreat Crete
              </cite>
            </blockquote>
            <a
              href="https://anasaretreatcrete.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-aegean font-semibold hover:underline"
            >
              Visit anasaretreatcrete.com
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </section>

        {/* ── CONTACT ───────────────────────────────────────────── */}
        <section id="contact" className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-2xl">
            <div className="text-center mb-12">
              <h2 className="font-serif text-h1 text-aegean mb-4">Start the conversation</h2>
              <p className="text-body-lg text-ink/70">
                Tell me about your property. I&apos;ll get back to you within one business day.
              </p>
            </div>
            <EnContactForm />
          </div>
        </section>

      </main>

      {/* ── ENGLISH FOOTER ────────────────────────────────────── */}
      <footer className="bg-aegean text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="font-serif text-xl font-semibold mb-4">Hárika Creative</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Bespoke websites for villa owners in Greece and Crete.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
              <div className="space-y-2 text-sm text-white/70">
                <a href="mailto:hello@harikacreative.com" className="block hover:text-white transition-colors">
                  hello@harikacreative.com
                </a>
                <p>Asker, Norway</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Legal</h4>
              <div className="space-y-2 text-sm text-white/70">
                <a href="/en/privacy" className="block hover:text-white transition-colors">Privacy policy</a>
                <CookieSettingsLink label="Cookie policy" className="block text-sm text-white/70" />
                <a href="/en/terms" className="block hover:text-white transition-colors">Terms &amp; conditions</a>
                <a href="/" title="Norsk" className="block text-2xl hover:opacity-60 transition-opacity mt-4">🇳🇴</a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
            <p>© 2026 Hárika Creative med M. Xiros Villard · Reg. no. 937 310 447 · Asker, Norway</p>
          </div>
        </div>
      </footer>
    </>
  )
}
