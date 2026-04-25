import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy | Hárika Creative',
  description: 'How Hárika Creative uses cookies in accordance with GDPR.',
}

export default function EnCookiesPage() {
  return (
    <main className="min-h-screen py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-display-lg font-serif text-aegean mb-4">
          Cookie Policy — Hárika Creative
        </h1>
        <p className="text-body-lg text-ink/60 mb-12">Last updated: March 2026</p>

        <div className="prose prose-lg max-w-none space-y-12">

          <section>
            <h2 className="text-h3 font-serif text-ink mb-4">1. What are cookies?</h2>
            <p className="text-body-md text-ink/80 mb-4">
              Cookies are small text files stored in your browser when you visit a website. They help the site remember preferences and improve your experience.
            </p>
            <p className="text-body-md text-ink/80">
              This policy follows <strong>Norwegian eCommerce Act § 2-7b</strong> (updated 1 January 2025) and <strong>GDPR</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-h3 font-serif text-ink mb-6">2. Which cookies do we use?</h2>

            <div className="mb-8">
              <h3 className="text-h4 font-serif text-aegean mb-2">Necessary cookies</h3>
              <p className="text-body-sm text-ink/60 italic mb-4">These do not require consent — they are essential for the site to function.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-body-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-ink/10">
                      <th className="text-left py-3 px-4 font-semibold text-ink">Name</th>
                      <th className="text-left py-3 px-4 font-semibold text-ink">Purpose</th>
                      <th className="text-left py-3 px-4 font-semibold text-ink">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-ink/10">
                      <td className="py-3 px-4 text-ink/80 font-mono text-xs">cookie_consent</td>
                      <td className="py-3 px-4 text-ink/80">Stores your cookie preference</td>
                      <td className="py-3 px-4 text-ink/80">12 months</td>
                    </tr>
                    <tr className="border-b border-ink/10">
                      <td className="py-3 px-4 text-ink/80 font-mono text-xs">__vercel_live_token</td>
                      <td className="py-3 px-4 text-ink/80">Technical — required for hosting</td>
                      <td className="py-3 px-4 text-ink/80">Session</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-h4 font-serif text-aegean mb-2">Analytics cookies</h3>
              <p className="text-body-sm text-ink/60 italic mb-4">These are only activated with your active consent.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-body-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-ink/10">
                      <th className="text-left py-3 px-4 font-semibold text-ink">Name</th>
                      <th className="text-left py-3 px-4 font-semibold text-ink">Provider</th>
                      <th className="text-left py-3 px-4 font-semibold text-ink">Purpose</th>
                      <th className="text-left py-3 px-4 font-semibold text-ink">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-ink/10">
                      <td className="py-3 px-4 text-ink/80 font-mono text-xs">_ga</td>
                      <td className="py-3 px-4 text-ink/80">Google Analytics</td>
                      <td className="py-3 px-4 text-ink/80">Anonymous visit statistics</td>
                      <td className="py-3 px-4 text-ink/80">26 months</td>
                    </tr>
                    <tr className="border-b border-ink/10">
                      <td className="py-3 px-4 text-ink/80 font-mono text-xs">_ga_*</td>
                      <td className="py-3 px-4 text-ink/80">Google Analytics</td>
                      <td className="py-3 px-4 text-ink/80">Anonymous visit statistics</td>
                      <td className="py-3 px-4 text-ink/80">26 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-body-md text-ink/80 mt-6">
              We do <strong>not</strong> use marketing cookies or third-party tracking cookies.
            </p>
          </section>

          <section>
            <h2 className="text-h3 font-serif text-ink mb-4">3. Your consent</h2>
            <p className="text-body-md text-ink/80 mb-4">
              We require your <strong>active, informed consent</strong> before analytics cookies are set.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-body-md text-ink/80">
              <li>You actively choose "Accept" or "Decline"</li>
              <li>The Decline button is equally visible as Accept</li>
              <li>No cookies pre-ticked</li>
              <li>Necessary cookies are set without consent</li>
              <li>You can withdraw consent at any time</li>
            </ul>
            <p className="text-body-md text-ink/80 mt-4">
              <strong>Change your preferences:</strong> Click the "Cookie policy" link in the footer.
            </p>
          </section>

          <section>
            <h2 className="text-h3 font-serif text-ink mb-4">4. Google Analytics & privacy</h2>
            <p className="text-body-md text-ink/80 mb-4">
              We use Google Analytics with <strong>IP anonymisation enabled</strong>. Your IP address is truncated before storage so you cannot be directly identified.
            </p>
            <p className="text-body-md text-ink/80">
              Data is transferred to Google LLC (USA) under EU Standard Contractual Clauses and the EU-US Data Privacy Framework. We use only aggregated, anonymous data and do not share it with third parties.
            </p>
          </section>

          <section>
            <h2 className="text-h3 font-serif text-ink mb-4">5. Browser cookie settings</h2>
            <ul className="list-disc pl-6 space-y-2 text-body-md text-ink/80">
              <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies</li>
              <li><strong>Firefox:</strong> Settings → Privacy &amp; Security → Cookies</li>
              <li><strong>Safari:</strong> Settings → Privacy → Manage website data</li>
              <li><strong>Edge:</strong> Settings → Cookies and site permissions</li>
            </ul>
            <p className="text-body-sm text-ink/50 italic mt-4">
              Note: blocking all cookies may affect some site functionality.
            </p>
          </section>

          <section>
            <h2 className="text-h3 font-serif text-ink mb-4">6. Contact &amp; complaints</h2>
            <p className="text-body-md text-ink/80 mb-6">
              <strong>Hárika Creative med M. Xiros Villard</strong><br />
              Reg. no. 937 310 447 · Asker, Norway<br />
              Email: <a href="mailto:hello@harikacreative.com" className="text-aegean hover:underline">hello@harikacreative.com</a>
            </p>
            <p className="text-body-md text-ink/80">
              Complaints may be directed to <strong>Datatilsynet</strong>:{' '}
              <a href="https://www.datatilsynet.no" target="_blank" rel="noopener noreferrer" className="text-aegean hover:underline">www.datatilsynet.no</a>
            </p>
          </section>

          <div className="border-t border-ink/10 pt-8">
            <p className="text-body-sm text-ink/50 italic">
              Hárika Creative · Reg. no. 937 310 447 · Asker, Norway · hello@harikacreative.com
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
