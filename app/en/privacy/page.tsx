import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Hárika Creative',
  description: 'How Hárika Creative processes personal data in accordance with GDPR.',
}

export default function EnPrivacyPage() {
  return (
    <main className="min-h-screen py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-display-lg font-serif text-aegean mb-4">
          Privacy Policy — Hárika Creative
        </h1>
        <p className="text-body-lg text-ink/60 mb-12">Last updated: March 2026</p>

        <div className="prose prose-lg max-w-none space-y-12">

          <section>
            <h2 className="text-h3 font-serif text-ink mb-4">1. Data Controller</h2>
            <p className="text-body-md text-ink/80 mb-2">
              <strong>Hárika Creative med M. Xiros Villard</strong><br />
              Registration number: 937 310 447<br />
              Business address: Asker, Norway<br />
              Email: <a href="mailto:hello@harikacreative.com" className="text-aegean hover:underline">hello@harikacreative.com</a>
            </p>
            <p className="text-body-md text-ink/80">
              Marianna Xiros Villard is the data controller for personal data collected via this website.
            </p>
          </section>

          <section>
            <h2 className="text-h3 font-serif text-ink mb-4">2. What data do we collect?</h2>
            <p className="text-body-md text-ink/80 mb-4">
              We only collect information you provide voluntarily via the contact form:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-body-md text-ink/80">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number (optional)</li>
              <li>Message / enquiry</li>
              <li>Property location</li>
              <li>Package interest</li>
            </ul>
            <p className="text-body-md text-ink/80 mt-4">
              We do <strong>not</strong> collect data without your active consent.
            </p>
          </section>

          <section>
            <h2 className="text-h3 font-serif text-ink mb-4">3. Purpose and legal basis</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-body-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-ink/10">
                    <th className="text-left py-3 px-4 font-semibold text-ink">Purpose</th>
                    <th className="text-left py-3 px-4 font-semibold text-ink">Legal basis</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-ink/10">
                    <td className="py-3 px-4 text-ink/80">Responding to contact form enquiries</td>
                    <td className="py-3 px-4 text-ink/80">Legitimate interest (GDPR art. 6(1)(f))</td>
                  </tr>
                  <tr className="border-b border-ink/10">
                    <td className="py-3 px-4 text-ink/80">Entering into and fulfilling service agreements</td>
                    <td className="py-3 px-4 text-ink/80">Contract (GDPR art. 6(1)(b))</td>
                  </tr>
                  <tr className="border-b border-ink/10">
                    <td className="py-3 px-4 text-ink/80">Website usage analytics (with consent only)</td>
                    <td className="py-3 px-4 text-ink/80">Consent (GDPR art. 6(1)(a))</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-h3 font-serif text-ink mb-4">4. Retention</h2>
            <ul className="list-disc pl-6 space-y-2 text-body-md text-ink/80">
              <li><strong>Contact enquiries:</strong> Deleted after 12 months from last contact, unless an ongoing client relationship exists</li>
              <li><strong>Client project data:</strong> Project duration + 5 years (accounting and legal purposes)</li>
              <li><strong>Analytics cookies:</strong> 26 months (only if you have consented)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-h3 font-serif text-ink mb-4">5. Data processors</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-body-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-ink/10">
                    <th className="text-left py-3 px-4 font-semibold text-ink">Processor</th>
                    <th className="text-left py-3 px-4 font-semibold text-ink">Purpose</th>
                    <th className="text-left py-3 px-4 font-semibold text-ink">Country</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-ink/10">
                    <td className="py-3 px-4 text-ink/80 font-medium">Web3Forms</td>
                    <td className="py-3 px-4 text-ink/80">Contact form processing</td>
                    <td className="py-3 px-4 text-ink/80">EU/EEA</td>
                  </tr>
                  <tr className="border-b border-ink/10">
                    <td className="py-3 px-4 text-ink/80 font-medium">Vercel</td>
                    <td className="py-3 px-4 text-ink/80">Website hosting</td>
                    <td className="py-3 px-4 text-ink/80">USA*</td>
                  </tr>
                  <tr className="border-b border-ink/10">
                    <td className="py-3 px-4 text-ink/80 font-medium">Google (Gmail)</td>
                    <td className="py-3 px-4 text-ink/80">Email communication</td>
                    <td className="py-3 px-4 text-ink/80">USA*</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-body-sm text-ink/50 mt-3 italic">
              *Transfers to the US are made under EU Standard Contractual Clauses (SCC) and the EU-US Data Privacy Framework.
            </p>
          </section>

          <section>
            <h2 className="text-h3 font-serif text-ink mb-4">6. Your rights (GDPR)</h2>
            <ul className="list-disc pl-6 space-y-2 text-body-md text-ink/80">
              <li><strong>Right of access</strong> — request a copy of your personal data</li>
              <li><strong>Right to rectification</strong> — request correction of inaccurate data</li>
              <li><strong>Right to erasure</strong> — request deletion of your data ("right to be forgotten")</li>
              <li><strong>Right to restriction</strong> — request that processing is limited</li>
              <li><strong>Right to data portability</strong> — receive your data in a structured format</li>
              <li><strong>Right to object</strong> — object to processing based on legitimate interest</li>
              <li><strong>Right to withdraw consent</strong> — at any time, without affecting prior lawful processing</li>
            </ul>
            <p className="text-body-md text-ink/80 mt-4">
              <strong>Contact:</strong> <a href="mailto:hello@harikacreative.com" className="text-aegean hover:underline">hello@harikacreative.com</a> — we respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-h3 font-serif text-ink mb-4">7. Complaints</h2>
            <p className="text-body-md text-ink/80 mb-4">
              If you believe we are processing your personal data unlawfully, you may lodge a complaint with:
            </p>
            <p className="text-body-md text-ink/80">
              <strong>Datatilsynet</strong> (Norwegian Data Protection Authority)<br />
              PO Box 458, 0105 Oslo, Norway<br />
              Email: postkasse@datatilsynet.no<br />
              <a href="https://www.datatilsynet.no" target="_blank" rel="noopener noreferrer" className="text-aegean hover:underline">www.datatilsynet.no</a>
            </p>
          </section>

          <section>
            <h2 className="text-h3 font-serif text-ink mb-4">8. Updates</h2>
            <p className="text-body-md text-ink/80">
              We may update this policy. Material changes will be reflected by updating the date at the top.
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
