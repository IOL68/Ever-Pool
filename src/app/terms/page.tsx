export default function Terms() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center pt-32 pb-20 bg-gradient-to-r from-blue-900 to-cyan-800">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-cyan-500 opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Terms and Conditions</h1>
            <p className="text-lg text-cyan-100 max-w-4xl mx-auto">Please read these terms carefully before using our services.</p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-16">
            {/* Introduction */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">1. Introduction</h2>
              <div className="prose prose-lg max-w-none text-gray-600 prose-p:text-justify prose-headings:text-center prose-li:text-gray-600 prose-strong:text-gray-900">
                <p>
                  These Terms and Conditions (&quot;Terms&quot;) govern your use of services provided by Everblue Pools (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By accessing or using our services, you agree to be bound by these Terms.
                </p>
              </div>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">2. Services</h2>
              <div className="prose prose-lg max-w-none text-gray-600 prose-p:text-justify prose-headings:text-center prose-li:text-gray-600 prose-strong:text-gray-900">
                <p>
                  We provide commercial pool construction, renovation, and maintenance services. The specific scope of work will be detailed in individual service agreements.
                </p>
                <ul className="list-disc pl-6 mt-6 space-y-3 marker:text-cyan-600">
                  <li>All services are subject to availability and scheduling.</li>
                  <li>We reserve the right to modify or discontinue services with reasonable notice.</li>
                  <li>Additional services may incur extra charges as agreed upon in writing.</li>
                </ul>
              </div>
            </div>

            {/* Pricing and Payment */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">3. Pricing and Payment</h2>
              <div className="prose prose-lg max-w-none text-gray-600 prose-p:text-justify prose-headings:text-center prose-li:text-gray-600 prose-strong:text-gray-900">
                <p>
                  Payment terms and conditions are as follows:
                </p>
                <ul className="list-disc pl-6 mt-6 space-y-3 marker:text-cyan-600">
                  <li>Prices are subject to change with notice.</li>
                  <li>Payment schedules will be outlined in individual service agreements.</li>
                  <li>Late payments may incur additional fees.</li>
                  <li>We accept multiple payment methods as specified in our payment policy.</li>
                </ul>
              </div>
            </div>

            {/* Responsibilities */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">4. Client Responsibilities</h2>
              <div className="prose prose-lg max-w-none text-gray-600 prose-p:text-justify prose-headings:text-center prose-li:text-gray-600 prose-strong:text-gray-900">
                <p>
                  Clients are responsible for:
                </p>
                <ul className="list-disc pl-6 mt-6 space-y-3 marker:text-cyan-600">
                  <li>Providing accurate and complete information.</li>
                  <li>Ensuring site access during scheduled service times.</li>
                  <li>Maintaining compliance with local regulations and permits.</li>
                  <li>Promptly communicating any concerns or issues.</li>
                </ul>
              </div>
            </div>

            {/* Liability */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">5. Liability and Insurance</h2>
              <div className="prose prose-lg max-w-none text-gray-600 prose-p:text-justify prose-headings:text-center prose-li:text-gray-600 prose-strong:text-gray-900">
                <p>
                  Our liability and insurance coverage includes:
                </p>
                <ul className="list-disc pl-6 mt-6 space-y-3 marker:text-cyan-600">
                  <li>Professional liability insurance coverage.</li>
                  <li>Worker&apos;s compensation insurance.</li>
                  <li>General liability coverage for property damage.</li>
                </ul>
                <p className="mt-8 font-medium text-gray-900">
                  We are not liable for damages resulting from:
                </p>
                <ul className="list-disc pl-6 mt-6 space-y-3 marker:text-cyan-600">
                  <li>Acts of nature or force majeure events.</li>
                  <li>Pre-existing conditions not disclosed to us.</li>
                  <li>Unauthorized modifications to our work.</li>
                </ul>
              </div>
            </div>

            {/* Termination */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">6. Termination</h2>
              <div className="prose prose-lg max-w-none text-gray-600 prose-p:text-justify prose-headings:text-center prose-li:text-gray-600 prose-strong:text-gray-900">
                <p>
                  Either party may terminate services under the following conditions:
                </p>
                <ul className="list-disc pl-6 mt-6 space-y-3 marker:text-cyan-600">
                  <li>Written notice as specified in the service agreement.</li>
                  <li>Material breach of these Terms.</li>
                  <li>Failure to fulfill payment obligations.</li>
                </ul>
              </div>
            </div>

            {/* Privacy */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">7. Privacy and Data Protection</h2>
              <div className="prose prose-lg max-w-none text-gray-600 prose-p:text-justify prose-headings:text-center prose-li:text-gray-600 prose-strong:text-gray-900">
                <p>
                  We are committed to protecting your privacy and handling your data responsibly. Our data protection measures include:
                </p>
                <ul className="list-disc pl-6 mt-6 space-y-3 marker:text-cyan-600">
                  <li>Secure storage of client information.</li>
                  <li>Confidentiality of business information.</li>
                  <li>Compliance with data protection regulations.</li>
                </ul>
              </div>
            </div>

            {/* Updates to Terms */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">8. Updates to Terms</h2>
              <div className="prose prose-lg max-w-none text-gray-600 prose-p:text-justify prose-headings:text-center prose-li:text-gray-600 prose-strong:text-gray-900">
                <p>
                  We reserve the right to update these Terms at any time. Changes will be effective upon posting to our website. Continued use of our services constitutes acceptance of updated Terms.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">9. Contact Information</h2>
              <div className="prose prose-lg max-w-none text-gray-600 prose-p:text-justify prose-headings:text-center prose-li:text-gray-600 prose-strong:text-gray-900">
                <p>
                  For questions about these Terms, please contact us at:
                </p>
                <ul className="list-disc pl-6 mt-6 space-y-3 marker:text-cyan-600">
                  <li>Email: info@everblue-pools.com</li>
                  <li>Phone: (555) 123-4567</li>
                  <li>Address: 123 Pool Street, California, USA</li>
                </ul>
              </div>
            </div>

            {/* Last Updated */}
            <div className="pt-12 mt-16 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-500 italic">
                Last Updated: May 31, 2025
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
