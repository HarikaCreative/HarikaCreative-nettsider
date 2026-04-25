import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Informasjonskapselpolicy | Hárika Creative',
  description: 'Les om hvordan Hárika Creative bruker informasjonskapsler (cookies) i henhold til Ekomloven og GDPR.',
}

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-display-lg font-display text-nordic-pine mb-4">
            Informasjonskapselpolicy — Hárika Creative
          </h1>
          <p className="text-body-lg text-nordic-slate/60 mb-12">
            Sist oppdatert: mars 2026
          </p>

          <div className="prose prose-lg max-w-none space-y-12">

            <section>
              <h2 className="text-h3 font-display text-nordic-slate mb-4">
                1. Hva er informasjonskapsler?
              </h2>
              <p className="text-body-md text-nordic-slate/80 mb-4">
                Informasjonskapsler (cookies) er små tekstfiler som lagres i nettleseren din når du besøker en nettside. De hjelper nettsiden å huske preferanser og forbedre brukeropplevelsen.
              </p>
              <p className="text-body-md text-nordic-slate/80">
                Denne policyen er utarbeidet i henhold til <strong>Ekomloven § 2-7b</strong> (oppdatert 1. januar 2025) og <strong>GDPR/personopplysningsloven</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-display text-nordic-slate mb-6">
                2. Hvilke informasjonskapsler bruker vi?
              </h2>

              <div className="mb-8">
                <h3 className="text-h4 font-display text-nordic-pine mb-2">
                  Nødvendige informasjonskapsler
                </h3>
                <p className="text-body-sm text-nordic-slate/70 italic mb-4">
                  Disse krever ikke samtykke — de er nødvendige for at nettsiden skal fungere.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-body-sm border-collapse">
                    <thead>
                      <tr className="border-b-2 border-nordic-snow">
                        <th className="text-left py-3 px-4 font-semibold text-nordic-slate">Navn</th>
                        <th className="text-left py-3 px-4 font-semibold text-nordic-slate">Formål</th>
                        <th className="text-left py-3 px-4 font-semibold text-nordic-slate">Varighet</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-nordic-snow">
                        <td className="py-3 px-4 text-nordic-slate/80 font-mono text-xs">cookie_consent</td>
                        <td className="py-3 px-4 text-nordic-slate/80">Husker ditt valg om cookies</td>
                        <td className="py-3 px-4 text-nordic-slate/80">12 måneder</td>
                      </tr>
                      <tr className="border-b border-nordic-snow">
                        <td className="py-3 px-4 text-nordic-slate/80 font-mono text-xs">__vercel_live_token</td>
                        <td className="py-3 px-4 text-nordic-slate/80">Teknisk nødvendig for hosting</td>
                        <td className="py-3 px-4 text-nordic-slate/80">Sesjon</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-h4 font-display text-nordic-pine mb-2">
                  Analytiske informasjonskapsler
                </h3>
                <p className="text-body-sm text-nordic-slate/70 italic mb-4">
                  Disse aktiveres kun hvis du gir aktivt samtykke.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-body-sm border-collapse">
                    <thead>
                      <tr className="border-b-2 border-nordic-snow">
                        <th className="text-left py-3 px-4 font-semibold text-nordic-slate">Navn</th>
                        <th className="text-left py-3 px-4 font-semibold text-nordic-slate">Leverandør</th>
                        <th className="text-left py-3 px-4 font-semibold text-nordic-slate">Formål</th>
                        <th className="text-left py-3 px-4 font-semibold text-nordic-slate">Varighet</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-nordic-snow">
                        <td className="py-3 px-4 text-nordic-slate/80 font-mono text-xs">_ga</td>
                        <td className="py-3 px-4 text-nordic-slate/80">Google Analytics</td>
                        <td className="py-3 px-4 text-nordic-slate/80">Anonym besøksstatistikk</td>
                        <td className="py-3 px-4 text-nordic-slate/80">26 måneder</td>
                      </tr>
                      <tr className="border-b border-nordic-snow">
                        <td className="py-3 px-4 text-nordic-slate/80 font-mono text-xs">_ga_*</td>
                        <td className="py-3 px-4 text-nordic-slate/80">Google Analytics</td>
                        <td className="py-3 px-4 text-nordic-slate/80">Anonym besøksstatistikk</td>
                        <td className="py-3 px-4 text-nordic-slate/80">26 måneder</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="text-body-md text-nordic-slate/80 mt-6">
                Vi bruker <strong>ikke</strong> markedsføringscookies eller sporings-cookies fra tredjeparter.
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-display text-nordic-slate mb-4">
                3. Ditt samtykke
              </h2>
              <p className="text-body-md text-nordic-slate/80 mb-4">
                I henhold til Ekomloven (oppdatert 1. januar 2025) og GDPR krever vi ditt <strong>aktive, informerte samtykke</strong> før analytiske cookies settes.
              </p>
              <p className="text-body-md text-nordic-slate/80 mb-3">Det betyr:</p>
              <ul className="list-disc pl-6 space-y-2 text-body-md text-nordic-slate/80">
                <li>Du velger aktivt «Godta» eller «Avvis»</li>
                <li>Avvis-knappen er like synlig som Godta-knappen</li>
                <li>Ingen cookies forhåndsavkrysset</li>
                <li>Nødvendige cookies settes uten samtykke</li>
                <li>Du kan trekke tilbake samtykket når som helst</li>
              </ul>
              <p className="text-body-md text-nordic-slate/80 mt-4">
                <strong>Endre dine preferanser:</strong><br />
                Klikk på «Informasjonskapsler»-lenken i bunnteksten for å justere samtykket ditt.
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-display text-nordic-slate mb-4">
                4. Google Analytics og personvern
              </h2>
              <p className="text-body-md text-nordic-slate/80 mb-4">
                Vi bruker Google Analytics med <strong>IP-anonymisering aktivert</strong>. Det betyr at din IP-adresse forkortes før den lagres, slik at du ikke kan identifiseres direkte.
              </p>
              <p className="text-body-md text-nordic-slate/80 mb-4">
                Dataene overføres til Google LLC (USA) under EUs Standard Contractual Clauses og EU-US Data Privacy Framework.
              </p>
              <p className="text-body-md text-nordic-slate/80">
                Vi bruker kun aggregerte, anonyme data for å forbedre nettsiden. Vi deler ikke disse dataene med tredjeparter.
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-display text-nordic-slate mb-4">
                5. Informasjonskapsler i nettleseren
              </h2>
              <p className="text-body-md text-nordic-slate/80 mb-4">
                Du kan til enhver tid slette eller blokkere informasjonskapsler direkte i nettleseren:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-body-md text-nordic-slate/80">
                <li><strong>Chrome:</strong> Innstillinger → Personvern og sikkerhet → Informasjonskapsler</li>
                <li><strong>Firefox:</strong> Innstillinger → Personvern og sikkerhet → Informasjonskapsler</li>
                <li><strong>Safari:</strong> Innstillinger → Personvern → Administrer nettsteddata</li>
                <li><strong>Edge:</strong> Innstillinger → Informasjonskapsler og nettstedstillatelser</li>
              </ul>
              <p className="text-body-sm text-nordic-slate/60 italic mt-4">
                Merk: Hvis du blokkerer alle cookies, kan noen funksjoner på nettsiden slutte å fungere.
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-display text-nordic-slate mb-4">
                6. Kontakt og klage
              </h2>
              <p className="text-body-md text-nordic-slate/80 mb-6">
                <strong>Hárika Creative med M. Xiros Villard</strong><br />
                Org.nr. 937 310 447 · Asker, Norge<br />
                E-post: <a href="mailto:hello@harikacreative.com" className="text-nordic-pine hover:underline">hello@harikacreative.com</a>
              </p>
              <p className="text-body-md text-nordic-slate/80 mb-4">
                Klager på vår cookie-praksis kan rettes til:
              </p>
              <div className="space-y-4">
                <p className="text-body-md text-nordic-slate/80">
                  <strong>Nkom</strong> (Nasjonal kommunikasjonsmyndighet) — for Ekomloven<br />
                  <a href="https://www.nkom.no" target="_blank" rel="noopener noreferrer" className="text-nordic-pine hover:underline">www.nkom.no</a>
                </p>
                <p className="text-body-md text-nordic-slate/80">
                  <strong>Datatilsynet</strong> — for GDPR/personopplysningsloven<br />
                  <a href="https://www.datatilsynet.no" target="_blank" rel="noopener noreferrer" className="text-nordic-pine hover:underline">www.datatilsynet.no</a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-h3 font-display text-nordic-slate mb-4">
                7. Endringer
              </h2>
              <p className="text-body-md text-nordic-slate/80">
                Vi oppdaterer denne policyen ved behov. Datoen øverst viser når den sist ble revidert.
              </p>
            </section>

            <div className="border-t border-nordic-snow pt-8">
              <p className="text-body-sm text-nordic-slate/60 italic">
                Hárika Creative · Org.nr. 937 310 447 · Asker, Norge · hello@harikacreative.com
              </p>
            </div>

          </div>
        </div>
      </div>
    </main>
  )
}
