export default function PrivacyPolicy() {
  return (
    <div className="container-custom py-8">
      <div className="max-w-4xl mx-auto prose prose-gray dark:prose-invert">
        <h1>Privacy Policy</h1>
        <p className="text-gray-600 dark:text-gray-400">Last updated: January 15, 2024</p>

        <section>
          <h2>Introduction</h2>
          <p>
            SleepWise ("we", "our", "us") respects your privacy and is committed to protecting your 
            personal data. This privacy policy explains how we handle your information when you visit 
            our website and use our services.
          </p>
        </section>

        <section>
          <h2>Information We Collect</h2>
          <h3>Information you provide directly</h3>
          <ul>
            <li>Email address when subscribing to our newsletter</li>
            <li>Sleep diary entries (stored locally in your browser)</li>
            <li>Messages sent through our contact form</li>
          </ul>

          <h3>Automatically collected information</h3>
          <ul>
            <li>Browser type and version</li>
            <li>Device information</li>
            <li>Pages visited and time spent</li>
            <li>Referral source</li>
          </ul>
        </section>

        <section>
          <h2>How We Use Your Information</h2>
          <ul>
            <li>To provide and improve our sleep calculators and tools</li>
            <li>To send you educational content and updates (with your consent)</li>
            <li>To respond to your inquiries and feedback</li>
            <li>To analyze website usage and improve user experience</li>
          </ul>
        </section>

        <section>
          <h2>Data Storage and Security</h2>
          <h3>Local Storage</h3>
          <p>
            Sleep diary data is stored locally in your browser using localStorage. This data 
            never leaves your device and is not accessible to us or any third party.
          </p>

          <h3>Server Storage</h3>
          <p>
            Only information you voluntarily provide (such as email for newsletter) is stored 
            on our servers. We implement appropriate security measures to protect your data.
          </p>
        </section>

        <section>
          <h2>Cookies</h2>
          <p>
            We use minimal cookies necessary for basic website functionality and analytics. 
            You can manage cookie preferences through your browser settings.
          </p>
        </section>

        <section>
          <h2>Third-Party Services</h2>
          <p>
            We may use third-party services for analytics (such as Google Analytics). 
            These services have their own privacy policies governing data collection.
          </p>
        </section>

        <section>
          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt out of marketing communications</li>
          </ul>
        </section>

        <section>
          <h2>Children's Privacy</h2>
          <p>
            Our website is not intended for children under 13. We do not knowingly collect 
            personal information from children under 13.
          </p>
        </section>

        <section>
          <h2>Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of any 
            changes by posting the new policy on this page.
          </p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>
            If you have questions about this privacy policy, please contact us at:
            <br />
            <a href="mailto:privacy@sleepwise.com" className="text-primary-600 dark:text-primary-400">
              privacy@sleepwise.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
