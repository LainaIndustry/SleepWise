import Breadcrumbs from '../../components/ui/Breadcrumbs';
import RelatedTools from '../../components/ui/RelatedTools';
import ShareButtons from '../../components/ui/ShareButtons';

export default function ScreenTime() {
  const breadcrumbItems = [
    { label: 'Education', path: '/education' },
    { label: 'Screens and Sleep', path: '/education/screen-time', current: true },
  ];

  const relatedTools = [
    {
      title: 'Bedtime Calculator',
      path: '/calculators/bedtime',
      description: 'Find your ideal bedtime'
    },
    {
      title: 'Sleep Diary',
      path: '/tools/sleep-diary',
      description: 'Track your sleep patterns'
    }
  ];

  return (
    <div className="container-custom py-8">
      <Breadcrumbs items={breadcrumbItems} />
      
      <article className="max-w-4xl mx-auto prose prose-gray dark:prose-invert">
        <header className="mb-8">
          <h1>Screens and Sleep</h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>5 min read</span>
            <span>•</span>
            <span>Technology</span>
            <div className="ml-auto">
              <ShareButtons 
                title="Screens and Sleep" 
                url="https://sleepwise.com/education/screen-time"
              />
            </div>
          </div>
        </header>

        <section>
          <h2>How Screens Affect Sleep</h2>
          <p>
            Modern technology has transformed how we live, work, and sleep. Screens from phones, 
            tablets, computers, and televisions emit blue light that can disrupt your natural 
            sleep-wake cycle. Understanding this relationship is key to protecting your sleep.
          </p>
        </section>

        <section>
          <h2>The Impact of Blue Light</h2>
          <p>
            Blue light has the shortest wavelength in the visible light spectrum and is emitted 
            by digital screens and LED lighting. During the day, blue light helps maintain 
            alertness and mood. However, exposure at night can:
          </p>
          <ul>
            <li>Suppress melatonin production</li>
            <li>Delay sleep onset</li>
            <li>Reduce sleep quality</li>
            <li>Disrupt circadian rhythm</li>
            <li>Increase sleep latency</li>
          </ul>
        </section>

        <section>
          <h2>Digital Content and Sleep</h2>
          <p>
            Beyond the light effects, the content you consume can also impact sleep:
          </p>
          <ul>
            <li><strong>Stimulating content:</strong> Action films, exciting games, or stressful emails can increase arousal</li>
            <li><strong>Social media:</strong> Can trigger emotional responses and social comparisons</li>
            <li><strong>News:</strong> Anxious-making content can activate the stress response</li>
            <li><strong>Work emails:</strong> Keep your brain in "work mode" and make it hard to disconnect</li>
          </ul>
        </section>

        <section>
          <h2>Practical Strategies for Screen Use</h2>

          <h3>Timing</h3>
          <ul>
            <li>Stop using screens 1-2 hours before bedtime</li>
            <li>Set a "digital sunset" or screen curfew</li>
            <li>Use this time for relaxing non-screen activities instead</li>
          </ul>

          <h3>Device Settings</h3>
          <ul>
            <li>Enable night mode or blue light filters after sunset</li>
            <li>Adjust screen brightness to match room lighting</li>
            <li>Use dark mode for apps and websites at night</li>
            <li>Consider blue light blocking glasses for evening screen use</li>
          </ul>

          <h3>Alternatives</h3>
          <ul>
            <li>Read a physical book rather than an e-reader</li>
            <li>Listen to audiobooks or podcasts</li>
            <li>Practice relaxation techniques</li>
            <li>Journal or write about your day</li>
            <li>Chat with family members without screens</li>
          </ul>
        </section>

        <section>
          <h2>Creating a Screen-Free Bedroom</h2>
          <ul>
            <li>Keep phones and devices out of the bedroom if possible</li>
            <li>Use a traditional alarm clock instead of your phone</li>
            <li>Charge devices outside the bedroom</li>
            <li>Create a relaxing, screen-free pre-sleep routine</li>
            <li>Remove televisions and computers from the bedroom</li>
          </ul>
        </section>

        <section>
          <h2>Kids and Screen Time</h2>
          <p>
            Children are particularly sensitive to screen effects:
          </p>
          <ul>
            <li>Implement screen curfews at least 1 hour before bed</li>
            <li>Replace screen time with calming activities before bed</li>
            <li>Use parental controls to limit screen use</li>
            <li>Model good screen habits yourself</li>
            <li>Make bedrooms device-free zones</li>
          </ul>
        </section>

        <section>
          <h2>When Screens Are Necessary</h2>
          <p>
            If you must use screens in the evening, try these strategies:
          </p>
          <ul>
            <li>Take frequent breaks to blink and rest your eyes</li>
            <li>Use night mode and reduce brightness</li>
            <li>Position screens at a comfortable distance</li>
            <li>Follow the 20-20-20 rule: every 20 minutes, look at something 20 feet away for 20 seconds</li>
            <li>Wear blue light blocking glasses</li>
          </ul>
        </section>

        <section>
          <h2>References</h2>
          <ul>
            <li>
              Harvard Health Publishing. (2023). "Blue Light Has a Dark Side."
              <a href="https://www.health.harvard.edu/staying-healthy/blue-light-has-a-dark-side" 
                 className="text-primary-600 dark:text-primary-400 hover:underline">
                Harvard Health
              </a>
            </li>
            <li>
              National Sleep Foundation. (2023). "Screens and Sleep."
              <a href="https://www.sleepfoundation.org/how-sleep-works/impact-of-screen-time-on-sleep" 
                 className="text-primary-600 dark:text-primary-400 hover:underline">
                Sleep Foundation
              </a>
            </li>
          </ul>
        </section>

        <RelatedTools tools={relatedTools} title="Related Sleep Tools" />
      </article>
    </div>
  );
}
