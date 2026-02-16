'use client'

import React from 'react'
import Modal from '@/components/ui/Modal'
import Button from '@/components/ui/Button'

export type PackageType = 'basic' | 'pluss' | 'light'

export interface PackageModalProps {
  isOpen: boolean
  onClose: () => void
  packageType: PackageType
}

const PackageModal: React.FC<PackageModalProps> = ({ isOpen, onClose, packageType }) => {
  const packages = {
    basic: {
      name: 'Hytte Basic',
      price: '12.900 kr',
      subtitle: 'For private hytteeiere',
      description: 'En ren, moderne nettside for én hytte eller feriehus. Perfekt for eiere som vil ha noe enkelt og profesjonelt.',
      pages: '1–5 sider',
      included: [
        '1–5 sider (Hjem, Om, Kontakt, Galleri, Info)',
        'Norsk (NO) + Engelsk (EN)',
        'Profesjonell tekst & struktur',
        'Bildeoptimalisering (inntil 20 bilder)',
        'Kontaktskjema med e-postvarsel',
        'Mobiloptimalisert design',
        'SEO-grunnlag (meta tags, sitemap)',
        'Cookie consent (GDPR)',
        '1 revisjonsrunde',
        'Hosting-setup hjelp'
      ],
      notIncluded: [
        'Booking-funksjon',
        'Flere språk (3+)',
        'CMS / admin-panel'
      ],
      addons: [
        'Google Analytics: 1.300 kr',
        'Ekstra språk: 2.500 kr/språk'
      ],
      perfectFor: [],
      deliveryTime: '2-3 uker'
    },
    pluss: {
      name: 'Hytte Pluss',
      price: '24.900 kr',
      subtitle: 'For profesjonell utleie',
      description: 'For eiere som ønsker mer funksjonalitet og synlighet. Inkluderer booking og flerspråklig oppsett.',
      pages: '5–15 sider',
      included: [
        'Alt fra Hytte Basic',
        '5–15 sider',
        'Booking-kalender (iCal/Airbnb sync)',
        '3 språk: NO + EN + DE',
        'Avansert SEO (schema markup, geo-tags)',
        'Lokal guide & interaktivt kart',
        'Bildegalleri med lightbox',
        'Google Analytics inkludert',
        '2 revisjonsrunder',
        'Prioritert support (1 mnd)'
      ],
      notIncluded: [
        'Betalingsintegrasjon',
        'CMS / admin-panel'
      ],
      addons: [
        'Betalingsintegrasjon: 5.000 kr',
        'CMS / admin-panel: 8.000 kr'
      ],
      perfectFor: [
        'Profesjonell utleie',
        'Internasjonale gjester',
        'Økt synlighet på Google'
      ],
      deliveryTime: '4-6 uker'
    },
    light: {
      name: 'Destinasjon Light',
      price: '42.900 kr',
      subtitle: 'For små reiselivsbedrifter',
      description: 'For små reiselivsbedrifter med flere enheter. Fullstendig visuell identitet og booking-flyt.',
      pages: 'Inntil 25 sider',
      included: [
        'Alt fra Hytte Pluss',
        'Inntil 25 sider',
        'Oversiktsside + individuelle enhetssider',
        'Visuell identitet (logo + fargepalett)',
        'Fullstendig booking-flyt',
        'Betalingsintegrasjon (Stripe/Vipps)',
        'Content Management System (CMS)',
        '3 revisjonsrunder',
        'Prioritert support (3 mnd)'
      ],
      notIncluded: [
        'E-handel integrasjon',
        'Egenutviklet booking-system'
      ],
      addons: [
        'Ekstra språk: 3.500 kr/språk',
        'E-handel integrasjon: Pris på forespørsel'
      ],
      perfectFor: [
        'Små reiselivsbedrifter',
        'Flere enheter (2-10 hytter/leiligheter)',
        'Egen merkevare'
      ],
      deliveryTime: '6-10 uker'
    }
  }

  const pkg = packages[packageType]

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="2xl">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center pb-6 border-b border-nordic-snow">
          <h3 className="text-h3 font-display text-nordic-pine mb-2">
            {pkg.name}
          </h3>
          <p className="text-body-lg text-nordic-slate/80 mb-4">
            {pkg.subtitle}
          </p>
          <div>
            <p className="text-body-xs text-nordic-slate/60 mb-1">Fra</p>
            <p className="text-display-md font-display font-bold text-nordic-pine">
              {pkg.price}
            </p>
            <p className="text-body-xs text-nordic-slate/60">eks. mva</p>
          </div>
        </div>

        {/* Description */}
        <div>
          <p className="text-body-lg text-nordic-slate/80 leading-relaxed">
            {pkg.description}
          </p>
        </div>

        {/* Pages */}
        <div className="bg-nordic-mist rounded-lg p-4">
          <p className="text-body-sm font-semibold text-nordic-pine">
            📄 Sidebegrensning: {pkg.pages}
          </p>
        </div>

        {/* What's Included */}
        <div>
          <h4 className="text-h5 font-display text-nordic-pine mb-4">
            ✓ Hva du får
          </h4>
          <div className="grid md:grid-cols-2 gap-3">
            {pkg.included.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-nordic-forest-light mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-body-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Not Included */}
        {pkg.notIncluded && pkg.notIncluded.length > 0 && (
          <div>
            <h4 className="text-h5 font-display text-nordic-slate mb-4">
              ✗ Ikke inkludert
            </h4>
            <div className="space-y-2">
              {pkg.notIncluded.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-nordic-slate/40 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-body-sm text-nordic-slate/70">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Add-ons */}
        {pkg.addons && pkg.addons.length > 0 && (
          <div>
            <h4 className="text-h5 font-display text-nordic-pine mb-4">
              + Tillegg
            </h4>
            <div className="space-y-2">
              {pkg.addons.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-nordic-pine">+</span>
                  <span className="text-body-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Perfect For */}
        {pkg.perfectFor && pkg.perfectFor.length > 0 && (
          <div className="bg-nordic-pine/5 rounded-lg p-6">
            <h4 className="text-h5 font-display text-nordic-pine mb-4">
              💚 Perfekt for
            </h4>
            <div className="space-y-2">
              {pkg.perfectFor.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="text-nordic-pine">→</span>
                  <span className="text-body-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Delivery Time */}
        <div className="bg-nordic-fjord/10 rounded-lg p-4">
          <p className="text-body-sm">
            <span className="font-semibold text-nordic-fjord">⏱️ Leveringstid:</span> {pkg.deliveryTime}
          </p>
        </div>

        {/* CTA */}
        <div className="pt-6 border-t border-nordic-snow">
          <Button 
            variant="primary" 
            size="lg"
            fullWidth
            href="#contact"
            onClick={onClose}
            className="bg-nordic-forest-light hover:bg-nordic-forest-bright"
          >
            Kontakt meg for tilbud
          </Button>
        </div>

        {/* Note */}
        <p className="text-body-xs text-nordic-slate/60 text-center">
          Alle priser er eks. mva. Hosting og domene kommer i tillegg (fra 800 kr/år).
        </p>
      </div>
    </Modal>
  )
}

export default PackageModal
