export default function PrivacyPolicy() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Privacy Policy</h1>
            <p className="text-lg text-cyan-100 max-w-4xl mx-auto">Your privacy is important to us. Learn how we collect, use, and protect your information.</p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-16">
            {/* Introduction */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">1. Introduction</h2>
              <div className="prose prose-lg max-w-none text-gray-600 prose-p:text-justify prose-headings:text-center prose-li:text-gray-600 prose-strong:text-gray-900">
                <p>
                  At Everblue Pools, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services or visit our website.
                </p>
              </div>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">2. Information We Collect</h2>
              <div className="prose prose-lg max-w-none text-gray-600 prose-p:text-justify prose-headings:text-center prose-li:text-gray-600 prose-strong:text-gray-900">
                <p>We collect the following types of information:</p>
                <ul className="list-disc pl-6 mt-6 space-y-3 marker:text-cyan-600">
                  <li><strong>Personal Information:</strong> Name, email address, phone number, and mailing address.</li>
                  <li><strong>Business Information:</strong> Company name, job title, and business contact details.</li>
                  <li><strong>Project Information:</strong> Details about your pool project, requirements, and preferences.</li>
                  <li><strong>Technical Information:</strong> IP address, browser type, and device information when you visit our website.</li>
                </ul>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">3. How We Use Your Information</h2>
              <div className="prose prose-lg max-w-none text-gray-600 prose-p:text-justify prose-headings:text-center prose-li:text-gray-600 prose-strong:text-gray-900">
                <p>We use your information for the following purposes:</p>
                <ul className="list-disc pl-6 mt-6 space-y-3 marker:text-cyan-600">
                  <li>To provide and improve our services</li>
                  <li>To communicate with you about your projects</li>
                  <li>To send important updates and notifications</li>
                  <li>To process payments and maintain business records</li>
                  <li>To analyze and improve our website performance</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </div>
            </div>

            {/* Information Sharing */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">4. Information Sharing</h2>
              <div className="prose prose-lg max-w-none text-gray-600 prose-p:text-justify prose-headings:text-center prose-li:text-gray-600 prose-strong:text-gray-900">
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share your information with:
                </p>
                <ul className="list-disc pl-6 mt-6 space-y-3 marker:text-cyan-600">
                  <li><strong>Service Providers:</strong> Companies that help us operate our business and provide services to you.</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights.</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
                </ul>
              </div>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">5. Data Security</h2>
              <div className="prose prose-lg max-w-none text-gray-600 prose-p:text-justify prose-headings:text-center prose-li:text-gray-600 prose-strong:text-gray-900">
                <p>
                  We implement appropriate technical and organizational measures to protect your information, including:
                </p>
                <ul className="list-disc pl-6 mt-6 space-y-3 marker:text-cyan-600">
                  <li>Encryption of sensitive data</li>
                  <li>Secure data storage systems</li>
                  <li>Limited access to personal information</li>
                  <li>Regular security assessments</li>
                </ul>
              </div>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">6. Your Rights</h2>
              <div className="prose prose-lg max-w-none text-gray-600 prose-p:text-justify prose-headings:text-center prose-li:text-gray-600 prose-strong:text-gray-900">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 mt-6 space-y-3 marker:text-cyan-600">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request a copy of your data</li>
                </ul>
              </div>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">7. Cookies and Tracking</h2>
              <div className="prose prose-lg max-w-none text-gray-600 prose-p:text-justify prose-headings:text-center prose-li:text-gray-600 prose-strong:text-gray-900">
                <p>
                  Our website uses cookies and similar technologies to enhance your experience. These technologies help us:
                </p>
                <ul className="list-disc pl-6 mt-6 space-y-3 marker:text-cyan-600">
                  <li>Remember your preferences</li>
                  <li>Analyze website traffic</li>
                  <li>Personalize content</li>
                  <li>Improve website performance</li>
                </ul>
                <p className="mt-8 font-medium text-gray-900">
                  You can control cookie settings through your browser preferences.
                </p>
              </div>
            </div>

            {/* Children&apos;s Privacy */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">8. Children&apos;s Privacy</h2>
              <div className="prose prose-lg max-w-none text-gray-600 prose-p:text-justify prose-headings:text-center prose-li:text-gray-600 prose-strong:text-gray-900">
                <p>
                  Our services are not intended for children under 13 years of age. We do not knowingly collect or maintain information from children under 13.
                </p>
              </div>
            </div>

            {/* Changes to Privacy Policy */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">9. Changes to Privacy Policy</h2>
              <div className="prose prose-lg max-w-none text-gray-600 prose-p:text-justify prose-headings:text-center prose-li:text-gray-600 prose-strong:text-gray-900">
                <p>
                  We may update this Privacy Policy periodically. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">10. Contact Us</h2>
              <div className="prose prose-lg max-w-none text-gray-600 prose-p:text-justify prose-headings:text-center prose-li:text-gray-600 prose-strong:text-gray-900">
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <ul className="list-disc pl-6 mt-6 space-y-3 marker:text-cyan-600">
                  <li>Email: privacy@everblue-pools.com</li>
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
