'use client'

import { useState } from 'react'
import Hero from '@/components/sections/Hero'
import ContactForm from '@/components/sections/ContactForm'
import PackageModal, { PackageType } from '@/components/ui/PackageModal'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import Card, { CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState<PackageType>('basic')

  const openModal = (packageType: PackageType) => {
    setSelectedPackage(packageType)
    setModalOpen(true)
  }

  return (
    <main className="min-h-screen">
      {/* HERO SECTION - ROTERENDE BILDER */}
      <Hero
        title="Nettsider for hytter, feriehus og små reiselivsbedrifter i Norge"
        subtitle="Hárika Creative"
        description="Jeg hjelper hytteeiere og små reiselivsbedrifter med å lage nettsider som tiltrekker de riktige gjestene — med nordisk estetikk, sterk struktur og fokus på enkelhet."
        primaryCTA={{
          text: "Kontakt meg",
          href: "#contact"
        }}
        secondaryCTA={{
          text: "Se pakker",
          href: "#services"
        }}
        images={[
          {
            src: "/images/hero/20210721_145857-hero.webp",
            alt: "Spektakulært norsk fjordlandskap med strand og grønne åser",
            priority: true
          },
          {
            src: "/images/hero/DNT-mountain-sign-hero.webp",
            alt: "DNT fjellskilt med turstier i norsk fjelllandskap",
            priority: false
          },
          {
            src: "/images/hero/DNT-guiding-mountains-hero.webp",
            alt: "DNT guiding i norske fjell",
            priority: false
          }
        ]}
        imageRotationInterval={5000}
        variant="split"
        className="mb-0"
      />

      {/* WHY YOU NEED A WEBSITE */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-h1 font-display text-nordic-pine mb-6">
              Hvorfor din hytte trenger egen nettside
            </h2>
            <p className="text-body-lg text-nordic-slate/80">
              En hytte er mer enn et sted å bo. Det er en opplevelse.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-nordic-pine/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-nordic-pine" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-h5 font-display text-nordic-slate mb-3">Bedre synlighet</h3>
              <p className="text-body-md text-nordic-slate/70">
                Høyere rangering i søkemotorer. Gjester finner deg lettere.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-nordic-fjord/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-nordic-fjord" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-h5 font-display text-nordic-slate mb-3">Flere direkte henvendelser</h3>
              <p className="text-body-md text-nordic-slate/70">
                Reduser avhengighet av plattformer. Øk kontroll og fortjeneste.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-nordic-forest/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-nordic-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-h5 font-display text-nordic-slate mb-3">Internasjonale gjester</h3>
              <p className="text-body-md text-nordic-slate/70">
                Flerspråklig innhold. Klar informasjon for tyske og nederlandske turister.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-nordic-pine/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-nordic-pine" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-h5 font-display text-nordic-slate mb-3">Sterkere identitet</h3>
              <p className="text-body-md text-nordic-slate/70">
                Din egen merkevare. Full kontroll over hvordan hytten presenteres.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-nordic-fjord/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-nordic-fjord" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-h5 font-display text-nordic-slate mb-3">Lynrask lasting</h3>
              <p className="text-body-md text-nordic-slate/70">
                Perfekt ytelse. Bedre brukeropplevelse. Høyere konvertering.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-nordic-forest/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-nordic-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-h5 font-display text-nordic-slate mb-3">Full kontroll</h3>
              <p className="text-body-md text-nordic-slate/70">
                Ditt innhold. Dine priser. Dine vilkår. Ingen mellommenn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION - MED PRISER */}
      <section id="services" className="py-24 bg-nordic-mist">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-h1 font-display text-nordic-pine mb-6">
              Hva jeg tilbyr
            </h2>
            <p className="text-body-lg text-nordic-slate/80">
              Tre pakker tilpasset ulike behov — fra enkel nettside til fullstendig digital identitet.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* HYTTE BASIC */}
            <Card hover padding="lg" className="border-l-4 border-nordic-pine">
              <CardHeader>
                <CardTitle>Hytte Basic</CardTitle>
                <CardDescription>
                  For private hytteeiere
                </CardDescription>
                <div className="mt-4">
                  <p className="text-body-xs text-nordic-slate/60 mb-1">Fra</p>
                  <p className="text-display-md font-display font-bold text-nordic-pine">12.900 kr</p>
                  <p className="text-body-xs text-nordic-slate/60">eks. mva</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-body-md text-nordic-slate/80 mb-6">
                  En ren, moderne nettside for én hytte eller feriehus. Perfekt for eiere som vil ha noe enkelt og profesjonelt.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-nordic-forest-light mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-body-sm">1–5 sider (Hjem, Om, Kontakt, Galleri, Info)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-nordic-forest-light mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-body-sm">Norsk (NO) + Engelsk (EN)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-nordic-forest-light mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-body-sm">Profesjonell tekst & struktur</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-nordic-forest-light mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-body-sm">Bildeoptimalisering</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-nordic-forest-light mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-body-sm">Kontaktskjema</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-nordic-forest-light mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-body-sm">Mobiloptimalisert</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-nordic-forest-light mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-body-sm">SEO-grunnlag</span>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  fullWidth
                  onClick={() => openModal('basic')}
                  className="hover:bg-nordic-pine hover:text-white transition-colors"
                >
                  Les mer
                </Button>
              </CardContent>
            </Card>

            {/* HYTTE PLUSS - MEST POPULÆR */}
            <Card hover padding="lg" className="border-l-4 border-nordic-fjord bg-white ring-2 ring-nordic-fjord relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-nordic-fjord text-white px-4 py-1 rounded-full text-body-xs font-semibold">
                  MEST POPULÆR
                </span>
              </div>
              <CardHeader>
                <CardTitle>Hytte Pluss</CardTitle>
                <CardDescription>
                  For profesjonell utleie
                </CardDescription>
                <div className="mt-4">
                  <p className="text-body-xs text-nordic-slate/60 mb-1">Fra</p>
                  <p className="text-display-md font-display font-bold text-nordic-fjord">24.900 kr</p>
                  <p className="text-body-xs text-nordic-slate/60">eks. mva</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-body-md text-nordic-slate/80 mb-6">
                  For eiere som ønsker mer funksjonalitet og synlighet. Inkluderer booking og flerspråklig oppsett.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-nordic-forest-light mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-body-sm font-semibold">Alt fra Hytte Basic</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-nordic-forest-light mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-body-sm">5–15 sider</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-nordic-forest-light mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-body-sm">Booking-kalender</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-nordic-forest-light mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-body-sm">3 språk: NO + EN + DE</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-nordic-forest-light mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-body-sm">Avansert SEO-optimalisering</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-nordic-forest-light mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-body-sm">Lokal guide & interaktivt kart</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-nordic-forest-light mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-body-sm">Bildegalleri</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-nordic-forest-light mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-body-sm">Google Analytics oppsett</span>
                  </div>
                </div>

                <Button 
                  variant="primary" 
                  fullWidth
                  onClick={() => openModal('pluss')}
                  className="bg-nordic-forest-light hover:bg-nordic-forest-bright transition-colors"
                >
                  Velg Hytte Pluss
                </Button>
              </CardContent>
            </Card>

            {/* DESTINASJON LIGHT */}
            <Card hover padding="lg" className="border-l-4 border-nordic-forest">
              <CardHeader>
                <CardTitle>Destinasjon Light</CardTitle>
                <CardDescription>
                  For små reiselivsbedrifter
                </CardDescription>
                <div className="mt-4">
                  <p className="text-body-xs text-nordic-slate/60 mb-1">Fra</p>
                  <p className="text-display-md font-display font-bold text-nordic-forest">42.900 kr</p>
                  <p className="text-body-xs text-nordic-slate/60">eks. mva</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-body-md text-nordic-slate/80 mb-6">
                  For små reiselivsbedrifter med flere enheter. Fullstendig visuell identitet og booking-flyt.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-nordic-forest-light mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-body-sm font-semibold">Alt fra Hytte Pluss</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-nordic-forest-light mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-body-sm">Inntil 25 sider</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-nordic-forest-light mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-body-sm">Oversiktsside + individuelle enhetssider</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-nordic-forest-light mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-body-sm">Visuell identitet (logo + fargepalett)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-nordic-forest-light mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-body-sm">Fullstendig booking-flyt</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-nordic-forest-light mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-body-sm">Betalingsintegrasjon (Stripe/Vipps)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-nordic-forest-light mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-body-sm">Content Management System (CMS)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-nordic-forest-light mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-body-sm">Prioritert support (3 mnd)</span>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  fullWidth
                  onClick={() => openModal('light')}
                  className="hover:bg-nordic-forest hover:text-white transition-colors"
                >
                  Les mer
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto text-center mt-12">
            <p className="text-body-sm text-nordic-slate/60">
              Alle priser er eks. mva. Hosting og domene kommer i tillegg (fra 800 kr/år).
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 z-0 opacity-5">
          <Image
            src="/images/optimized/20220722_135351.webp"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-h1 font-display text-nordic-pine mb-6">
              Hvordan det fungerer
            </h2>
            <p className="text-body-lg text-nordic-slate/80">
              Fire enkle steg fra ide til ferdig nettside.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-nordic-pine rounded-full flex items-center justify-center">
                    <span className="text-white font-display font-bold text-xl">1</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-h4 font-display text-nordic-slate mb-3">
                    Vi snakker sammen
                  </h3>
                  <p className="text-body-md text-nordic-slate/70">
                    Du forteller om hytten din, målgruppen, og hva du ønsker å oppnå. Jeg lytter, stiller spørsmål, og lager en plan.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-nordic-fjord rounded-full flex items-center justify-center">
                    <span className="text-white font-display font-bold text-xl">2</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-h4 font-display text-nordic-slate mb-3">
                    Jeg designer
                  </h3>
                  <p className="text-body-md text-nordic-slate/70">
                    Jeg lager en ren, moderne nettside med nordisk estetikk. Fokus på rask lasting, enkel navigasjon, og tydelig informasjon.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-nordic-forest rounded-full flex items-center justify-center">
                    <span className="text-white font-display font-bold text-xl">3</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-h4 font-display text-nordic-slate mb-3">
                    Du godkjenner
                  </h3>
                  <p className="text-body-md text-nordic-slate/70">
                    Du får se nettstedet, gir tilbakemelding, og vi justerer til det er perfekt. Din godkjenning er avgjørende.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-nordic-pine rounded-full flex items-center justify-center">
                    <span className="text-white font-display font-bold text-xl">4</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-h4 font-display text-nordic-slate mb-3">
                    Du går live
                  </h3>
                  <p className="text-body-md text-nordic-slate/70">
                    Nettstedet publiseres, gjester finner deg, og du begynner å motta henvendelser. Jeg er tilgjengelig for support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT/TRUST SECTION */}
      <section id="about" className="py-24 bg-nordic-slate text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-h2 font-display mb-6">
                Hárika Creative
              </h2>
              <div className="space-y-4 text-body-lg opacity-90 mb-8">
                <p>
                  Jeg kombinerer design, struktur og en dyp forståelse for reiseliv og hytteutleie.
                </p>
                <p>
                  Med bakgrunn fra digital markedsføring (Noroff, 2020–2022) og erfaring fra både Norge og Hellas, forstår jeg hva som skal til for å lage nettsider som fungerer — ikke bare ser bra ut.
                </p>
                <p>
                  Målet mitt er enkelt: å gjøre din hytte synlig, troverdig og enkel å booke.
                </p>
              </div>

              <div className="flex gap-4 items-center">
                <div className="text-3xl">🇳🇴</div>
                <div>
                  <div className="font-semibold">Norsk presisjon</div>
                  <div className="text-sm opacity-75">Rene linjer, god struktur</div>
                </div>
              </div>
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/hero/IMG_0234-hero.webp"
                alt="Norsk fjellhytte i vakker natur"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-h1 font-display text-nordic-pine mb-6">
                Klar til å komme i gang?
              </h2>
              <p className="text-body-lg text-nordic-slate/80">
                Send meg en melding, så tar vi en uforpliktende prat om prosjektet ditt.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-nordic-snow">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/20220610_184503-hero.webp"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-nordic-pine/95 to-nordic-pine/80" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-display-lg font-display mb-6">
              Mulighetene er mange
            </h2>
            <p className="text-body-xl mb-10 opacity-95">
              Se eksempler på mitt arbeid — fra luksusvillaer på Kreta til retreatsenter og cateringtjenester.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary" 
                size="xl"
                href="https://anasaretreatcrete.com"
                className="bg-white text-nordic-pine hover:bg-nordic-snow"
              >
                Se eksempel: Anasa Retreat Crete
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGE MODAL */}
      <PackageModal 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        packageType={selectedPackage}
      />
    </main>
  )
}
