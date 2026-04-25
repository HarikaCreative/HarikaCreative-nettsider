declare module 'klaro' {
  interface KlaroConfig {
    lang?: string
    acceptAll?: boolean
    hideDeclineAll?: boolean
    cookieExpiresAfterDays?: number
    cookieName?: string
    mustConsent?: boolean
    acceptOnScroll?: boolean
    translations?: Record<string, unknown>
    services?: Array<Record<string, unknown>>
    privacyPolicy?: string
    [key: string]: unknown
  }
  export function setup(config: KlaroConfig): void
  export function render(config: KlaroConfig, opts?: Record<string, unknown>): void
  export function show(config?: KlaroConfig): void
  export function getManager(config?: KlaroConfig): unknown
}
