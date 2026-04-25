import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Personvernerklæring | Hárika Creative',
  description: 'Les om hvordan Hárika Creative behandler personopplysninger i henhold til GDPR og norsk personopplysningslov.',
}

export default function PersonvernPage() {
  return (
    <main className="min-h-screen py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-display-lg font-display text-nordic-pine mb-4">
          Personvernerklæring — Hárika Creative
        </h1>
        <p className="text-body-lg text-nordic-slate/60 mb-12">
          Sist oppdatert: mars 2026
        </p>

        <div className="prose prose-lg max-w-none space-y-12">

          <section>
            <h2 className="text-h3 font-display text-nordic-slate mb-4">
              1. Behandlingsansvarlig
            </h2>
            <p className="text-body-md text-nordic-slate/80 mb-2">
              <strong>Hárika Creative med M. Xiros Villard</strong><br />
              Organisasjonsnummer: 937 310 447<br />
              Forretningsadresse: Asker, Norge<br />
              E-post: <a href="mailto:hello@harikacreative.com" className="text-nordic-pine hover:underline">hello@harikacreative.com</a>
            </p>
            <p className="text-body-md text-nordic-slate/80">
              Marianna Xiros Villard er behandlingsansvarlig for personopplysninger som samles inn via denne nettsiden.
            </p>
          </section>

          <section>
            <h2 className="text-h3 font-display text-nordic-slate mb-4">
              2. Hvilke opplysninger samler vi inn?
            </h2>
            <p className="text-body-md text-nordic-slate/80 mb-4">
              Vi samler kun inn opplysninger du selv oppgir via kontaktskjemaet:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-body-md text-nordic-slate/80">
              <li>Navn</li>
              <li>E-postadresse</li>
              <li>Telefonnummer (valgfritt)</li>
              <li>Melding/henvendelse</li>
            </ul>
            <p className="text-body-md text-nordic-slate/80 mt-4">
              Vi samler <strong>ikke</strong> inn opplysninger uten ditt aktive samtykke.
            </p>
          </section>

          <section>
            <h2 className="text-h3 font-display text-nordic-slate mb-4">
              3. Formål og behandlingsgrunnlag
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-body-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-nordic-snow">
                    <th className="text-left py-3 px-4 font-semibold text-nordic-slate">Formål</th>
                    <th className="text-left py-3 px-4 font-semibold text-nordic-slate">Behandlingsgrunnlag</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-nordic-snow">
                    <td className="py-3 px-4 text-nordic-slate/80">Besvare henvendelser fra kontaktskjema</td>
                    <td className="py-3 px-4 text-nordic-slate/80">Berettiget interesse (GDPR art. 6(1)(f))</td>
                  </tr>
                  <tr className="border-b border-nordic-snow">
                    <td className="py-3 px-4 text-nordic-slate/80">Inngå og gjennomføre oppdragsavtaler</td>
                    <td className="py-3 px-4 text-nordic-slate/80">Avtale (GDPR art. 6(1)(b))</td>
                  </tr>
                  <tr className="border-b border-nordic-snow">
                    <td className="py-3 px-4 text-nordic-slate/80">Analyse av nettstedbruk (kun med samtykke)</td>
                    <td className="py-3 px-4 text-nordic-slate/80">Samtykke (GDPR art. 6(1)(a))</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-h3 font-display text-nordic-slate mb-4">
              4. Lagringstid
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-body-md text-nordic-slate/80">
              <li><strong>Kontakthenvendelser:</strong> Slettes etter 12 måneder fra siste kontakt, med mindre vi har et pågående kundeforhold</li>
              <li><strong>Kundeprosjektdata:</strong> Prosjektvarighet + 5 år (regnskapsmessige og juridiske formål)</li>
              <li><strong>Analysecookies:</strong> 26 måneder (kun hvis du har samtykket)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-h3 font-display text-nordic-slate mb-4">
              5. Deler vi opplysningene med andre?
            </h2>
            <p className="text-body-md text-nordic-slate/80 mb-4">
              Vi deler ikke dine personopplysninger med tredjeparter, med unntak av følgende databehandlere:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-body-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-nordic-snow">
                    <th className="text-left py-3 px-4 font-semibold text-nordic-slate">Databehandler</th>
                    <th className="text-left py-3 px-4 font-semibold text-nordic-slate">Formål</th>
                    <th className="text-left py-3 px-4 font-semibold text-nordic-slate">Land</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-nordic-snow">
                    <td className="py-3 px-4 text-nordic-slate/80 font-medium">Web3Forms</td>
                    <td className="py-3 px-4 text-nordic-slate/80">Behandling av kontaktskjema</td>
                    <td className="py-3 px-4 text-nordic-slate/80">EU/EØS</td>
                  </tr>
                  <tr className="border-b border-nordic-snow">
                    <td className="py-3 px-4 text-nordic-slate/80 font-medium">Vercel</td>
                    <td className="py-3 px-4 text-nordic-slate/80">Hosting av nettside</td>
                    <td className="py-3 px-4 text-nordic-slate/80">USA*</td>
                  </tr>
                  <tr className="border-b border-nordic-snow">
                    <td className="py-3 px-4 text-nordic-slate/80 font-medium">Google (Gmail)</td>
                    <td className="py-3 px-4 text-nordic-slate/80">E-postkommunikasjon</td>
                    <td className="py-3 px-4 text-nordic-slate/80">USA*</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-body-sm text-nordic-slate/60 mt-3 italic">
              *Overføringer til USA skjer i henhold til EUs Standard Contractual Clauses (SCC) og EU-US Data Privacy Framework.
            </p>
            <p className="text-body-md text-nordic-slate/80 mt-4">
              Alle databehandlere er bundet av databehandleravtaler som sikrer forsvarlig behandling i henhold til GDPR og norsk personopplysningslov.
            </p>
          </section>

          <section>
            <h2 className="text-h3 font-display text-nordic-slate mb-4">
              6. Informasjonskapsler (cookies)
            </h2>
            <p className="text-body-md text-nordic-slate/80 mb-4">
              Vi bruker informasjonskapsler på nettsiden. Se vår egen <a href="/cookies" className="text-nordic-pine hover:underline">Informasjonskapselpolicy</a> for fullstendig oversikt. Kort oppsummert:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-body-md text-nordic-slate/80">
              <li><strong>Nødvendige cookies</strong> settes automatisk og krever ikke samtykke</li>
              <li><strong>Analytiske cookies</strong> krever ditt aktive samtykke</li>
            </ul>
            <p className="text-body-md text-nordic-slate/80 mt-4">
              Du kan når som helst endre dine cookie-preferanser via innstillinger nederst på siden.
            </p>
          </section>

          <section>
            <h2 className="text-h3 font-display text-nordic-slate mb-4">
              7. Dine rettigheter (GDPR)
            </h2>
            <p className="text-body-md text-nordic-slate/80 mb-4">
              Du har følgende rettigheter under GDPR og personopplysningsloven:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-body-md text-nordic-slate/80">
              <li><strong>Rett til innsyn</strong> — be om kopi av opplysningene vi har om deg</li>
              <li><strong>Rett til retting</strong> — be om korrigering av uriktige opplysninger</li>
              <li><strong>Rett til sletting</strong> — be om at opplysninger om deg slettes («retten til å bli glemt»)</li>
              <li><strong>Rett til begrensning</strong> — be om at behandlingen begrenses</li>
              <li><strong>Rett til dataportabilitet</strong> — motta dine opplysninger i et strukturert format</li>
              <li><strong>Rett til å protestere</strong> — protestere mot behandling basert på berettiget interesse</li>
              <li><strong>Rett til å trekke tilbake samtykke</strong> — til enhver tid, uten at det påvirker lovligheten av tidligere behandling</li>
            </ul>
            <p className="text-body-md text-nordic-slate/80 mt-4">
              <strong>Kontakt oss:</strong> <a href="mailto:hello@harikacreative.com" className="text-nordic-pine hover:underline">hello@harikacreative.com</a><br />
              Vi svarer innen 30 dager.
            </p>
          </section>

          <section>
            <h2 className="text-h3 font-display text-nordic-slate mb-4">
              8. Klagerett
            </h2>
            <p className="text-body-md text-nordic-slate/80 mb-4">
              Hvis du mener vi behandler dine personopplysninger i strid med regelverket, kan du klage til:
            </p>
            <p className="text-body-md text-nordic-slate/80">
              <strong>Datatilsynet</strong><br />
              Postboks 458 Sentrum, 0105 Oslo<br />
              E-post: postkasse@datatilsynet.no<br />
              Telefon: 22 39 69 00<br />
              <a href="https://www.datatilsynet.no" target="_blank" rel="noopener noreferrer" className="text-nordic-pine hover:underline">www.datatilsynet.no</a>
            </p>
          </section>

          <section>
            <h2 className="text-h3 font-display text-nordic-slate mb-4">
              9. Datasikkerhet
            </h2>
            <p className="text-body-md text-nordic-slate/80 mb-4">
              Vi benytter følgende tekniske og organisatoriske tiltak:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-body-md text-nordic-slate/80">
              <li>HTTPS/SSL-kryptering på all trafikk</li>
              <li>Sikker hosting via Vercel med regelmessige sikkerhetsoppdateringer</li>
              <li>Sikkerhetshoder (HSTS, X-Content-Type-Options m.fl.)</li>
              <li>Begrenset tilgang til personopplysninger</li>
            </ul>
          </section>

          <section>
            <h2 className="text-h3 font-display text-nordic-slate mb-4">
              10. Endringer i denne erklæringen
            </h2>
            <p className="text-body-md text-nordic-slate/80">
              Vi kan oppdatere denne erklæringen. Vesentlige endringer varsles ved at vi oppdaterer datoen øverst på siden. Vi anbefaler at du leser erklæringen med jevne mellomrom.
            </p>
          </section>

          <div className="border-t border-nordic-snow pt-8">
            <p className="text-body-sm text-nordic-slate/60 italic">
              Hárika Creative · Org.nr. 937 310 447 · Asker, Norge · hello@harikacreative.com
            </p>
          </div>

        </div>
      </div>
    </main>
  )
}
