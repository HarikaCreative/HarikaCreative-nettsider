'use client'

import { usePathname } from 'next/navigation'

export default function NorwegianChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  if (pathname.startsWith('/en')) return null
  return <>{children}</>
}
