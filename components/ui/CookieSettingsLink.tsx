'use client'

export default function CookieSettingsLink({ label = 'Informasjonskapsler', className = '' }: {
  label?: string
  className?: string
}) {
  const handleClick = () => {
    if (typeof window !== 'undefined') {
      import('klaro').then((klaro) => klaro.show())
    }
  }
  return (
    <button
      onClick={handleClick}
      className={`text-left hover:text-white transition-colors ${className}`}
    >
      {label}
    </button>
  )
}
