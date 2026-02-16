import Script from 'next/script'

export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://harikacreative.com/#organization',
    name: 'Hárika Creative',
    alternateName: 'Harika Creative',
    url: 'https://harikacreative.com',
    logo: 'https://harikacreative.com/logo.png',
    description: 'Profesjonelle nettsider for private hytteeiere og små reiselivsbedrifter i Norge. Spesialisert i nordisk design, booking-løsninger og SEO-optimalisering.',
    email: 'hello@harikacreative.com',
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
    areaServed: [
      {
        '@type': 'Country',
        name: 'Norge',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Viken',
      },
      {
        '@type': 'AdministrativeArea', 
        name: 'Oslo',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Vestland',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Trøndelag',
      },
    ],
    serviceType: 'Web Design & Development',
    priceRange: '14900-49900 NOK',
    founder: {
      '@type': 'Person',
      name: 'Marianna',
    },
    knowsAbout: [
      'Web Design',
      'Web Development',
      'SEO Optimization',
      'Vacation Rental Websites',
      'Booking Systems',
      'Norwegian Tourism',
      'Cabin Rental Marketing',
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
        provider: {
          '@id': 'https://harikacreative.com/#organization',
        },
        offers: {
          '@type': 'Offer',
          price: '14900',
          priceCurrency: 'NOK',
          availability: 'https://schema.org/InStock',
        },
      },
      {
        '@type': 'Service',
        name: 'Hytte Pluss',
        description: 'Den komplette løsningen — for deg som ønsker mer funksjonalitet, bedre synlighet og booking.',
        provider: {
          '@id': 'https://harikacreative.com/#organization',
        },
        offers: {
          '@type': 'Offer',
          price: '24900',
          priceCurrency: 'NOK',
          availability: 'https://schema.org/InStock',
        },
      },
      {
        '@type': 'Service',
        name: 'Destinasjon Light',
        description: 'Den fullstendige digitale identiteten — for små reiselivsbedrifter med flere enheter og større ambisjoner.',
        provider: {
          '@id': 'https://harikacreative.com/#organization',
        },
        offers: {
          '@type': 'Offer',
          price: '49900',
          priceCurrency: 'NOK',
          availability: 'https://schema.org/InStock',
        },
      },
    ],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Hjem',
        item: 'https://harikacreative.com',
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
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
