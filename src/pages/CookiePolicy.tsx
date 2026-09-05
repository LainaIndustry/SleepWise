export default function CookiePolicy() {
  return (
    <div className="container-custom py-8">
      <div className="max-w-4xl mx-auto prose prose-gray dark:prose-invert">
        <h1>Cookie Policy</h1>
        <p className="text-gray-600 dark:text-gray-400">Last updated: January 15, 2024</p>

        <section>
          <h2>What Are Cookies</h2>
          <p>
            Cookies are small text files stored on your device when you visit a website. 
            They help websites remember your preferences and improve your browsing experience.
          </p>
        </section>

        <section>
          <h2>How We Use Cookies</h2>
          <p>
            SleepWise uses minimal cookies for essential functionality and analytics.
          </p>
          <h3>Essential Cookies</h3>
          <ul>
            <li>Remember your theme preference (light/dark mode)</li>
            <li>Store your sleep diary entries (localStorage)</li>
            <li>Maintain session preferences</li>
          </ul>

          <h3>Analytics Cookies</h3>
          <ul>
            <li>We may use Google Analytics to understand how visitors use our site</li>
            <li>These cookies collect anonymous usage data</li>
            <li>You can opt out of analytics tracking in your browser settings</li>
          </ul>
        </section>

        <section>
          <h2>Managing Cookies</h2>
          <p>
            You can control and manage cookies in your browser settings:
          </p>
          <ul>
            <li>Chrome: Settings → Privacy and Security → Cookies</li>
            <li>Firefox: Options → Privacy & Security → Cookies</li>
            <li>Safari: Preferences → Privacy → Cookies</li>
            <li>Edge: Settings → Privacy & Security → Cookies</li>
          </ul>
        </section>

        <section>
          <h2>Third-Party Cookies</h2>
          <p>
            We do not use third-party advertising cookies. Our analytics cookies are 
            used solely to improve our website's functionality and user experience.
          </p>
        </section>

        <section>
          <h2>Your Choices</h2>
          <p>
            By using our website, you consent to our use of cookies as described in this policy. 
            You can withdraw your consent at any time by adjusting your browser settings.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            Questions about our cookie policy?
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
