import Breadcrumbs from '../../components/ui/Breadcrumbs';
import RelatedTools from '../../components/ui/RelatedTools';
import ShareButtons from '../../components/ui/ShareButtons';

export default function Napping() {
  const breadcrumbItems = [
    { label: 'Education', path: '/education' },
    { label: 'The Art of Napping', path: '/education/napping', current: true },
  ];

  const relatedTools = [
    {
      title: 'Nap Calculator',
      path: '/calculators/nap',
      description: 'Time your nap perfectly'
    },
    {
      title: 'Sleep Cycle Calculator',
      path: '/calculators/sleep-cycle',
      description: 'Find optimal sleep and wake times'
    }
  ];

  return (
    <div className="container-custom py-8">
      <Breadcrumbs items={breadcrumbItems} />
      
      <article className="max-w-4xl mx-auto prose prose-gray dark:prose-invert">
        <header className="mb-8">
          <h1>The Art of Napping</h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>5 min read</span>
            <span>•</span>
            <span>Sleep Timing</span>
            <div className="ml-auto">
              <ShareButtons 
                title="The Art of Napping" 
                url="https://sleepwise.com/education/napping"
              />
            </div>
          </div>
        </header>

        <section>
          <h2>The Science of Napping</h2>
          <p>
            Napping can be a powerful tool for improving alertness, mood, and performance. 
            When done correctly, naps can help recharge your brain and body without interfering 
            with nighttime sleep.
          </p>
        </section>

        <section>
          <h2>Benefits of Napping</h2>
          <ul>
            <li>Improves alertness and performance</li>
            <li>Enhances memory and learning</li>
            <li>Reduces stress and anxiety</li>
            <li>Boosts mood and emotional regulation</li>
            <li>Improves reaction time</li>
            <li>Supports creativity and problem-solving</li>
          </ul>
        </section>

        <section>
          <h2>Types of Naps</h2>
          <ul>
            <li><strong>Power Nap (10-20 minutes):</strong> Ideal for quick energy boost</li>
            <li><strong>Short Nap (30 minutes):</strong> Good for alertness, minimal grogginess</li>
            <li><strong>Mid Nap (60 minutes):</strong> Includes deep sleep, may cause grogginess</li>
            <li><strong>Full Cycle Nap (90 minutes):</strong> Complete sleep cycle, very refreshing</li>
          </ul>
        </section>

        <section>
          <h2>When to Nap</h2>
          <p>
            The best time to nap is generally between 1 PM and 3 PM, when your body naturally 
            experiences a dip in alertness. Factors to consider:
          </p>
          <ul>
            <li>Your natural circadian rhythm</li>
            <li>Your sleep schedule and needs</li>
            <li>Your work and daily schedule</li>
            <li>Individual sleep preferences</li>
          </ul>
        </section>

        <section>
          <h2>How to Nap Effectively</h2>
          <ul>
            <li>Find a quiet, dark, and comfortable place</li>
            <li>Set an alarm for your desired nap length</li>
            <li>Use eye masks or earplugs</li>
            <li>Relax and focus on breathing</li>
            <li>Don't stress if you don't sleep - rest is still beneficial</li>
          </ul>
        </section>

        <section>
          <h2>Understanding Sleep Inertia</h2>
          <p>
            Sleep inertia is the grogginess you may feel after waking from sleep. To reduce sleep inertia:
          </p>
          <ul>
            <li>Keep naps short (15-20 minutes) or complete a full cycle (90 minutes)</li>
            <li>Wake up at the end of a sleep cycle</li>
            <li>Get light exposure immediately after waking</li>
            <li>Move around to increase alertness</li>
          </ul>
        </section>

        <section>
          <h2>When Napping Is Not Recommended</h2>
          <ul>
            <li>Late in the evening (after 3-4 PM)</li>
            <li>If you have severe insomnia</li>
            <li>If you're taking medications that affect sleep</li>
            <li>If napping consistently disrupts nighttime sleep</li>
          </ul>
        </section>

        <section>
          <h2>Napping and Sleep Disorders</h2>
          <p>
            While napping can be healthy for most people, some conditions require caution:
          </p>
          <ul>
            <li>Chronic insomnia may be worsened by daytime napping</li>
            <li>Sleep apnea patients should address underlying condition first</li>
            <li>Narcolepsy patients may benefit from scheduled naps</li>
          </ul>
        </section>

        <section>
          <h2>References</h2>
          <ul>
            <li>
              National Sleep Foundation. (2023). "Napping."
              <a href="https://www.sleepfoundation.org/sleep-hygiene/napping" 
                 className="text-primary-600 dark:text-primary-400 hover:underline">
                Sleep Foundation
              </a>
            </li>
            <li>
              Harvard Health Publishing. (2023). "The Benefits of Napping."
              <a href="https://www.health.harvard.edu/staying-healthy/the-science-of-sleep-and-napping" 
                 className="text-primary-600 dark:text-primary-400 hover:underline">
                Harvard Health
              </a>
            </li>
          </ul>
        </section>

        <RelatedTools tools={relatedTools} title="Related Sleep Tools" />
      </article>
    </div>
  );
}
