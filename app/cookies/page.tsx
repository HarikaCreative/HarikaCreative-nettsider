import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Informasjonskapsler | Hárika Creative',
  description: 'Informasjon om hvordan Hárika Creative bruker informasjonskapsler (cookies) på vår nettside.',
}

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-display-lg font-display text-nordic-pine mb-8">
            Informasjonskapsler (Cookies)
          </h1>

          <div className="prose prose-lg max-w-none space-y-8 text-nordic-slate/90">
            <p className="text-body-lg leading-relaxed">
              Denne siden forklarer hvordan Hárika Creative bruker informasjonskapsler (cookies) på vår nettside.
            </p>

            {/* Hva er cookies */}
            <section className="space-y-4">
              <h2 className="text-h2 font-display text-nordic-pine">
                Hva er informasjonskapsler?
              </h2>
              <p className="text-body-md leading-relaxed">
                Informasjonskapsler (cookies) er små tekstfiler som lagres på din enhet når du besøker en nettside. 
                De brukes for å forbedre brukeropplevelsen, analysere trafikk og huske dine preferanser.
              </p>
            </section>

            {/* Hvilke cookies bruker vi */}
            <section className="space-y-4">
              <h2 className="text-h2 font-display text-nordic-pine">
                Hvilke informasjonskapsler bruker vi?
              </h2>
              
              <div className="bg-nordic-mist rounded-lg p-6 space-y-6">
                {/* Nødvendige cookies */}
                <div>
                  <h3 className="text-h4 font-display text-nordic-pine mb-3">
                    1. Nødvendige informasjonskapsler
                  </h3>
                  <p className="text-body-sm mb-3">
                    Disse er nødvendige for at nettsiden skal fungere korrekt. De kan ikke slås av.
                  </p>
                  <ul className="space-y-2 text-body-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-nordic-forest mt-1">•</span>
                      <span><strong>cookie_consent:</strong> Husker ditt samtykke til bruk av cookies (varighet: 1 år)</span>
                    </li>
                  </ul>
                </div>

                {/* Analytiske cookies */}
                <div>
                  <h3 className="text-h4 font-display text-nordic-pine mb-3">
                    2. Analytiske informasjonskapsler
                  </h3>
                  <p className="text-body-sm mb-3">
                    Disse hjelper oss å forstå hvordan besøkende bruker nettsiden, slik at vi kan forbedre den.
                  </p>
                  <ul className="space-y-2 text-body-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-nordic-forest mt-1">•</span>
                      <span><strong>Google Analytics:</strong> Samler anonymisert statistikk om besøk og brukeradferd (kun hvis du godtar)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Hvordan administrere cookies */}
            <section className="space-y-4">
              <h2 className="text-h2 font-display text-nordic-pine">
                Hvordan administrere informasjonskapsler?
              </h2>
              <p className="text-body-md leading-relaxed">
                Du kan når som helst endre dine cookie-preferanser via cookie-banneret som vises ved første besøk.
              </p>
              <p className="text-body-md leading-relaxed">
                Du kan også blokkere eller slette cookies via din nettlesers innstillinger:
              </p>
              <ul className="space-y-2 text-body-md">
                <li className="flex items-start gap-2">
                  <span className="text-nordic-forest mt-1.5">•</span>
                  <span><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-nordic-pine hover:underline">Google Chrome</a></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-nordic-forest mt-1.5">•</span>
                  <span><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-nordic-pine hover:underline">Mozilla Firefox</a></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-nordic-forest mt-1.5">•</span>
                  <span><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-nordic-pine hover:underline">Safari</a></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-nordic-forest mt-1.5">•</span>
                  <span><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-nordic-pine hover:underline">Microsoft Edge</a></span>
                </li>
              </ul>
              <p className="text-body-sm text-nordic-slate/70 italic">
                Merk: Hvis du blokkerer alle cookies, kan enkelte funksjoner på nettsiden slutte å virke.
              </p>
            </section>

            {/* Tredjepartscookies */}
            <section className="space-y-4">
              <h2 className="text-h2 font-display text-nordic-pine">
                Tredjepartscookies
              </h2>
              <p className="text-body-md leading-relaxed">
                Vi bruker Google Analytics for å samle inn anonymisert statistikk om besøk på nettsiden. 
                Google kan bruke informasjonen til å forbedre sine tjenester.
              </p>
              <p className="text-body-md leading-relaxed">
                Les mer om hvordan Google bruker data: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-nordic-pine hover:underline">Google Privacy Policy</a>
              </p>
            </section>

            {/* Kontakt */}
            <section className="space-y-4">
              <h2 className="text-h2 font-display text-nordic-pine">
                Spørsmål?
              </h2>
              <p className="text-body-md leading-relaxed">
                Hvis du har spørsmål om hvordan vi bruker informasjonskapsler, ta kontakt:
              </p>
              <p className="text-body-md">
                <a href="mailto:hello@harikacreative.com" className="text-nordic-pine hover:underline font-medium">
                  hello@harikacreative.com
                </a>
              </p>
            </section>

            {/* Sist oppdatert */}
            <div className="border-t border-nordic-snow pt-8 mt-12">
              <p className="text-body-sm text-nordic-slate/60">
                Sist oppdatert: 13. februar 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
