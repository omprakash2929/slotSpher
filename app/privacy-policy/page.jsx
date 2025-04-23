import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Privacy Policy</h1>

      <div className="prose prose-slate max-w-none">
        <p className="text-gray-600 mb-4">Last Updated: April 23, 2025</p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
          <p>
            Welcome to SlotSphere (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We respect your privacy and are committed to protecting your
            personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information
            when you use our scheduling platform.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">2. Information We Collect</h2>
          <p className="mb-4">
            We collect several types of information from and about users of our platform, including:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Personal Information:</strong> Name, email address, phone number, and other contact details you
              provide when creating an account or scheduling meetings.
            </li>
            <li>
              <strong>Calendar Information:</strong> When you connect your calendar, we access your calendar data to
              enable scheduling functionality.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you interact with our platform, including log data,
              device information, and IP address.
            </li>
            <li>
              <strong>Communication Data:</strong> When you communicate with us or others through our platform, we may
              collect the content of those communications.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">3. How We Use Your Information</h2>
          <p className="mb-4">We use the information we collect for various purposes, including:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Providing, maintaining, and improving our scheduling platform</li>
            <li>Processing and managing appointments and meetings</li>
            <li>Sending notifications about scheduled events</li>
            <li>Responding to your requests and inquiries</li>
            <li>Analyzing usage patterns to enhance user experience</li>
            <li>Preventing fraudulent activity and ensuring the security of our platform</li>
            <li>Complying with legal obligations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">4. Sharing Your Information</h2>
          <p className="mb-4">We may share your information with:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Service Providers:</strong> Third-party vendors who perform services on our behalf, such as
              hosting, data analysis, and customer service.
            </li>
            <li>
              <strong>Business Partners:</strong> Companies with whom we integrate our services to provide enhanced
              functionality.
            </li>
            <li>
              <strong>Meeting Participants:</strong> When you schedule meetings, necessary information is shared with
              participants.
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose information if required by law or in response to
              valid requests by public authorities.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information.
            However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot
            guarantee absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">6. Your Rights</h2>
          <p className="mb-4">
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Accessing, correcting, or deleting your personal information</li>
            <li>Restricting or objecting to our processing of your data</li>
            <li>Data portability</li>
            <li>Withdrawing consent at any time (where processing is based on consent)</li>
          </ul>
          <p>To exercise these rights, please contact us using the information provided in the &quot;Contact Us&quot; section.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">7. Cookies and Similar Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to collect and track information about your interactions
            with our platform. You can set your browser to refuse all or some browser cookies, but this may affect
            certain features of our service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">8. Children&apos;s Privacy</h2>
          <p>
            Our platform is not intended for children under 16 years of age. We do not knowingly collect personal
            information from children. If you are a parent or guardian and believe your child has provided us with
            personal information, please contact us.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">9. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page and updating the &quot;Last Updated&quot; date. You are advised to review this Privacy
            Policy periodically for any changes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">10. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
            <br />
            Email: om.prakash2929@gmail.com
            <br />
            Address: Ahmedabad, Gujarat, India - 382470
          </p>
        </section>
      </div>

      <div className="mt-12 border-t border-gray-200 pt-8">
        <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium">
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}
