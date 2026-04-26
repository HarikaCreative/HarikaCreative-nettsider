import Script from 'next/script'

export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://harikacreative.com/#organization',
    name: 'Hárika Creative',
    alternateName: 'Harika Creative',
    url: 'https://harikacreative.com',
    logo: 'https://harikacreative.com/logo-small.png',
    description: 'Nettsider for norske hytteeiere og små reiselivsbedrifter',
    email: 'hello@harikacreative.com',
    founder: {
      '@type': 'Person',
      name: 'Marianna Xiros Villard',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Asker',
      addressRegion: 'Viken',
      addressCountry: 'NO',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 59.8333,
      longitude: 10.4333,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@harikacreative.com',
      contactType: 'customer service',
    },
    areaServed: ['NO', 'GR'],
    vatID: '937310447',
    serviceType: 'Web Design & Development',
    priceRange: '14900-49900 NOK',
    knowsAbout: [
      'Web Design',
      'Web Development',
      'SEO Optimization',
      'Vacation Rental Websites',
      'Booking Systems',
      'Norwegian Tourism',
      'Cabin Rental Marketing',
      'Villa Websites Greece',
    ],
  }

  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'Service',
        name: 'Hytte Basic',
        description: 'Den rene, profesjonelle nettsiden — perfekt for deg som vil ha noe enkelt som fungerer.',
        provider: { '@id': 'https://harikacreative.com/#organization' },
        offers: { '@type': 'Offer', price: '14900', priceCurrency: 'NOK' },
      },
      {
        '@type': 'Service',
        name: 'Hytte Pluss',
        description: 'Den komplette løsningen — for deg som ønsker mer funksjonalitet, bedre synlighet og booking.',
        provider: { '@id': 'https://harikacreative.com/#organization' },
        offers: { '@type': 'Offer', price: '24900', priceCurrency: 'NOK' },
      },
      {
        '@type': 'Service',
        name: 'Destinasjon Light',
        description: 'Den fullstendige digitale identiteten — for små reiselivsbedrifter.',
        provider: { '@id': 'https://harikacreative.com/#organization' },
        offers: { '@type': 'Offer', price: '49900', priceCurrency: 'NOK' },
      },
    ],
  }

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
    </>
  )
}
