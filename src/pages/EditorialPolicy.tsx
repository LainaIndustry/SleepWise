export default function EditorialPolicy() {
  return (
    <div className="container-custom py-8">
      <div className="max-w-4xl mx-auto prose prose-gray dark:prose-invert">
        <h1>Editorial Policy</h1>
        <p className="text-gray-600 dark:text-gray-400">Last updated: January 15, 2024</p>

        <section>
          <h2>Our Commitment</h2>
          <p>
            SleepWise is committed to providing accurate, reliable, and evidence-based 
            information about sleep and wellness. Our editorial policy ensures that all 
            content meets high standards of quality and integrity.
          </p>
        </section>

        <section>
          <h2>Content Review Process</h2>
          <ul>
            <li><strong>Research:</strong> All content is based on scientific research and reputable sources</li>
            <li><strong>Review:</strong> Content is reviewed for accuracy and clarity</li>
            <li><strong>Updates:</strong> Information is regularly reviewed and updated as new research emerges</li>
          </ul>
        </section>

        <section>
          <h2>Sources</h2>
          <p>
            We prioritize information from authoritative sources including:
          </p>
          <ul>
            <li>National Sleep Foundation</li>
            <li>Centers for Disease Control and Prevention (CDC)</li>
            <li>National Institutes of Health (NIH)</li>
            <li>American Academy of Sleep Medicine</li>
            <li>Peer-reviewed scientific journals</li>
          </ul>
        </section>

        <section>
          <h2>Calculator Development</h2>
          <ul>
            <li>Based on established sleep science and mathematical formulas</li>
            <li>Tested for accuracy across various scenarios</li>
            <li>Limitations clearly communicated to users</li>
            <li>Regular reviews and updates as science evolves</li>
          </ul>
        </section>

        <section>
          <h2>Content Independence</h2>
          <p>
            Our content is developed independently and is not influenced by commercial 
            interests. We do not accept payment for favorable reviews or content placement.
          </p>
        </section>

        <section>
          <h2>Transparency</h2>
          <ul>
            <li>Clear disclosure when content is sponsored</li>
            <li>Clear labeling of advertisements</li>
            <li>Clear distinction between informational content and advertising</li>
          </ul>
        </section>

        <section>
          <h2>Corrections</h2>
          <p>
            If errors are identified in our content, we promptly correct them and note 
            the correction. We welcome feedback from users regarding potential inaccuracies.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            Questions about our editorial policy? Contact us at:
            <br />
            <a href="mailto:editorial@sleepwise.com" className="text-primary-600 dark:text-primary-400">
              editorial@sleepwise.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
