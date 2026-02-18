'use client'

import { useState } from 'react'
import Hero from '@/components/sections/Hero'
import ContactForm from '@/components/sections/ContactForm'
import TestimonialCarousel from '@/components/sections/TestimonialCarousel'
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
        title="Fra gjemt perle til gjestenes førstevalg"
        subtitle="Hárika Creative"
        description="Din hytte fortjener en nettside som viser frem det den virkelig er — ikke bare et sted å sove, men med opplevelser verdt å huske. Jeg lager nettsider for norske hytter og feriehus som både ser vakre ut OG får gjestene til å booke."
        primaryCTA={{
          text: "Ta en uforpliktende prat",
          href: "#contact"
        }}
        secondaryCTA={{
          text: "Se hvordan det fungerer",
          href: "#how-it-works"
        }}
        images={[
          {
            src: "/images/hero/wintersun_mountain_cabin.webp",
            alt: "Norsk fjellhytte i vintersetting med snø",
            priority: true
          },
          {
            src: "/images/hero/hoddevik_norway_hero.webp",
            alt: "Spektakulært norsk fjordlandskap med strand og grønne åser",
            priority: false
          },
          {
            src: "/images/hero/DNT-guiding-mountains-hero.webp",
            alt: "DNT fjellskilt med turstier i norsk fjelllandskap",
            priority: false
          },
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
              En hytte er mer enn fire vegger — det er autensitet som fortjener riktig presentasjon
            </h2>
            <p className="text-body-lg text-nordic-slate/80">
              En egen nettside gir deg kontroll, synlighet og troverdighet — og gjør det enklere for gjester å velge nettopp din hytte.
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
              <p className="text-body-xs text-nordic-pine/60 font-semibold mb-2">Topp 5 på Google</p>
              <p className="text-body-md text-nordic-slate/70">
                Lokal SEO gjør at gjester finner deg når de søker etter hytter i ditt område — uten at du betaler for annonser.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-nordic-fjord/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-nordic-fjord" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-h5 font-display text-nordic-slate mb-3">Flere direkte bookinger</h3>
              <p className="text-body-xs text-nordic-fjord/60 font-semibold mb-2">Spar 15-25% provisjon</p>
              <p className="text-body-md text-nordic-slate/70">
                Reduser avhengighet av Airbnb og Booking.com. Behold mer av inntekten selv.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-nordic-forest/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-nordic-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-h5 font-display text-nordic-slate mb-3">Internasjonale gjester</h3>
              <p className="text-body-xs text-nordic-forest/60 font-semibold mb-2">3 språk inkludert</p>
              <p className="text-body-md text-nordic-slate/70">
                Engelsktalende og tysktalende gjester får informasjonen de trenger — i tillegg til norsk side.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-nordic-pine/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-nordic-pine" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-h5 font-display text-nordic-slate mb-3">Din merkevare</h3>
              <p className="text-body-xs text-nordic-pine/60 font-semibold mb-2">Din identitet</p>
              <p className="text-body-md text-nordic-slate/70">
                Ikke en standard mal. Dine bilder, din historie, dine verdier — presentert på din måte.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-nordic-fjord/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-nordic-fjord" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-h5 font-display text-nordic-slate mb-3">Lynrask lasting</h3>
              <p className="text-body-xs text-nordic-fjord/60 font-semibold mb-2">&lt; 2 sek lastetid</p>
              <p className="text-body-md text-nordic-slate/70">
                Optimalisert for mobil og mulig dårlig dekning. Perfekt for hytteområder med begrenset nett.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-nordic-forest/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-nordic-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-h5 font-display text-nordic-slate mb-3">Full kontroll</h3>
              <p className="text-body-xs text-nordic-forest/60 font-semibold mb-2">Dine regler</p>
              <p className="text-body-md text-nordic-slate/70">
                Dine priser. Dine vilkår. Ditt innhold. Ingen mellommenn som endrer spillereglene.
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
                  For private hytteeiere og feriehjem
                </CardDescription>
                <div className="mt-4">
                  <p className="text-body-xs text-nordic-slate/60 mb-1">Fra</p>
                  <p className="text-display-md font-display font-bold text-nordic-pine">14.900 kr</p>
                  <p className="text-body-xs text-nordic-slate/60">eks. mva</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-body-md text-nordic-slate/80 mb-6">
                  Den rene, profesjonelle nettsiden — perfekt for deg som vil ha noe enkelt som fungerer.
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
                  Den komplette løsningen — for deg som ønsker mer funksjonalitet, bedre synlighet og booking.
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
                  <p className="text-display-md font-display font-bold text-nordic-forest">49.900 kr</p>
                  <p className="text-body-xs text-nordic-slate/60">eks. mva</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-body-md text-nordic-slate/80 mb-6">
                  Den fullstendige digitale identiteten — for små reiselivsbedrifter med flere enheter og større ambisjoner.
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
      <section id="how-it-works" className="py-24 bg-white relative">
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
                    Du forteller om stedet ditt, tanker om målgruppen og hva du ønsker å oppnå. Jeg lytter, stiller de spørsmålene du kanskje ikke har tenkt på og lager en klar plan. Ingen teknisk sjargong — bare en normal samtale om hva som skal til.
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
                    Jeg designer og bygger
                  </h3>
                  <p className="text-body-md text-nordic-slate/70">
                    Jeg lager en ren, rask nettside med nordisk estetikk. Fokus på enkel navigasjon, rask lasting, tydelig informasjon og vakre bilder — dine bilder, optimalisert.
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
                    Du får se nettsiden, gir tilbakemelding og vi justerer til alt føles riktig. Din godkjenning er avgjørende — ingenting publiseres før du er 100% fornøyd.
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
                    Nettsiden publiseres, gjestene begynner å finne deg og bookingene starter. Jeg er tilgjengelig for support og spørsmål — du er aldri alene.
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
                Om meg
              </h2>
              <div className="space-y-4 text-body-lg opacity-90 mb-8">
                <p>
                  Jeg heter Marianna, og jeg hjelper hytteeiere og små reiselivsbedrifter over hele Norge med å skape nettsider som både ser vakre ut og faktisk fungerer.
                </p>
                <p>
                  Med bakgrunn fra digital markedsføring (Noroff, 2020–2022), utleie og service fra både Norge og Hellas, forstår jeg hva som skal til for å lage nettsider som gjør jobben sin — ikke bare fyller en plass på nettet.
                </p>
                <p>
                  For meg handler en god nettside om mer enn design:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-nordic-forest-light mt-1">✓</span>
                    <span>Den skal gi trygghet (gjestene føler seg trygge på å booke)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-nordic-forest-light mt-1">✓</span>
                    <span>Den skal skape tillit (profesjonell og pålitelig)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-nordic-forest-light mt-1">✓</span>
                    <span>Den skal være enkel (både for deg og gjestene dine)</span>
                  </li>
                </ul>
                <p>
                  Jeg jobber strukturert, kommuniserer tydelig og leverer alltid det jeg lover — noe kundene mine setter stor pris på.
                </p>
                <p className="font-semibold">
                  Målet mitt er enkelt: Å gjøre ditt sted synlig, troverdig og enkelt å booke.
                </p>
                <p className="text-body-md opacity-75">
                  Basert i Asker, jobber jeg med hytteeiere og reiselivsbedrifter i hele Norge.
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
                src="/images/optimized/mountain_fall_norway.webp.webp"
                alt="Norsk fjellhytte i vakker natur"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-h1 font-display text-nordic-pine mb-6">
              Hva kundene mine sier
            </h2>
            <p className="text-body-lg text-nordic-slate/80 max-w-2xl mx-auto">
              Jeg er stolt av å levere mer enn bare nettsider — jeg leverer trygghet, pålitelighet og resultater.
            </p>
          </div>

          <TestimonialCarousel />
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
              Se eksempel på mitt arbeid — fra luksusvillaer på Kreta til den klassiske Sørlandshytta.
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
