import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Hárika Creative',
  description: 'Terms and conditions for web design services by Hárika Creative.',
}

export default function EnTermsPage() {
  return (
    <main className="min-h-screen py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-display-lg font-serif text-aegean mb-4">
          Terms &amp; Conditions — Hárika Creative
        </h1>
        <p className="text-body-lg text-ink/60 mb-12">Last updated: March 2026</p>

        <div className="prose prose-lg max-w-none space-y-12">

          <section>
            <h2 className="text-h3 font-serif text-ink mb-4">1. Service provider</h2>
            <p className="text-body-md text-ink/80">
              <strong>Hárika Creative med M. Xiros Villard</strong><br />
              Registration number: 937 310 447<br />
              Asker, Norway<br />
              Email: <a href="mailto:hello@harikacreative.com" className="text-aegean hover:underline">hello@harikacreative.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-h3 font-serif text-ink mb-4">2. Scope of services</h2>
            <p className="text-body-md text-ink/80 mb-4">
              Hárika Creative provides web design, development, and digital communication services for villa owners, hospitality businesses, and related clients. The specific scope, deliverables, and timelines are defined in individual project agreements.
            </p>
          </section>

          <section>
            <h2 className="text-h3 font-serif text-ink mb-4">3. Payment</h2>
            <ul className="list-disc pl-6 space-y-2 text-body-md text-ink/80">
              <li>A deposit of 40% of the project total is required before work begins</li>
              <li>The remaining balance is due upon project completion and client approval</li>
              <li>All prices are in EUR or NOK, excluding VAT unless stated otherwise</li>
              <li>Invoices are payable within 14 days</li>
            </ul>
          </section>

          <section>
            <h2 className="text-h3 font-serif text-ink mb-4">4. Intellectual property</h2>
            <p className="text-body-md text-ink/80 mb-4">
              Upon receipt of full payment, the client receives ownership of all custom design and code produced for the project. Hárika Creative retains the right to display the project in a portfolio.
            </p>
            <p className="text-body-md text-ink/80">
              Third-party components (fonts, icon sets, stock imagery) remain subject to their respective licences.
            </p>
          </section>

          <section>
            <h2 className="text-h3 font-serif text-ink mb-4">5. Client responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2 text-body-md text-ink/80">
              <li>Providing all required content (text, images, brand assets) within agreed timelines</li>
              <li>Responding to review requests within 5 business days</li>
              <li>Ensuring all content submitted is owned by the client or properly licensed</li>
            </ul>
          </section>

          <section>
            <h2 className="text-h3 font-serif text-ink mb-4">6. Revisions</h2>
            <p className="text-body-md text-ink/80">
              Each package includes a defined number of revision rounds as specified in the project agreement. Additional revisions are billed at the current hourly rate.
            </p>
          </section>

          <section>
            <h2 className="text-h3 font-serif text-ink mb-4">7. Limitation of liability</h2>
            <p className="text-body-md text-ink/80">
              Hárika Creative is not liable for indirect or consequential losses, including lost revenue or bookings. Maximum liability is limited to the total fees paid for the project in question.
            </p>
          </section>

          <section>
            <h2 className="text-h3 font-serif text-ink mb-4">8. Governing law</h2>
            <p className="text-body-md text-ink/80">
              These terms are governed by Norwegian law. Disputes shall be resolved in Norwegian courts.
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
