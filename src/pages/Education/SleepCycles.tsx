import Breadcrumbs from '../../components/ui/Breadcrumbs';
import RelatedTools from '../../components/ui/RelatedTools';
import ShareButtons from '../../components/ui/ShareButtons';

export default function SleepCycles() {
  const breadcrumbItems = [
    { label: 'Education', path: '/education' },
    { label: 'Understanding Sleep Cycles', path: '/education/sleep-cycles', current: true },
  ];

  const relatedTools = [
    {
      title: 'Sleep Cycle Calculator',
      path: '/calculators/sleep-cycle',
      description: 'Find optimal sleep and wake times'
    },
    {
      title: 'Bedtime Calculator',
      path: '/calculators/bedtime',
      description: 'Calculate when to go to sleep'
    },
    {
      title: 'Wake-Up Time Calculator',
      path: '/calculators/wake-up',
      description: 'Find the best time to wake up'
    }
  ];

  return (
    <div className="container-custom py-8">
      <Breadcrumbs items={breadcrumbItems} />
      
      <article className="max-w-4xl mx-auto prose prose-gray dark:prose-invert">
        <header className="mb-8">
          <h1>Understanding Sleep Cycles</h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>5 min read</span>
            <span>•</span>
            <span>Sleep Science</span>
            <div className="ml-auto">
              <ShareButtons 
                title="Understanding Sleep Cycles" 
                url="https://sleepwise.com/education/sleep-cycles"
              />
            </div>
          </div>
        </header>

        <section>
          <h2>What Are Sleep Cycles?</h2>
          <p>
            A sleep cycle is a 90-minute pattern of brain activity that repeats throughout the night. 
            Each cycle consists of different stages of sleep that serve different purposes for your 
            physical and mental restoration.
          </p>
        </section>

        <section>
          <h2>The Stages of Sleep</h2>
          <h3>Non-REM Sleep (Stages 1-3)</h3>
          <p>
            <strong>Stage 1:</strong> Light sleep where you drift in and out of consciousness. This stage 
            typically lasts 5-10 minutes and is easy to wake from.
          </p>
          <p>
            <strong>Stage 2:</strong> Deeper sleep with slower brain waves and decreased body temperature. 
            This stage accounts for about 50% of total sleep time.
          </p>
          <p>
            <strong>Stage 3:</strong> Deep sleep or "slow-wave sleep" where the body repairs tissues and 
            strengthens the immune system. This stage is crucial for physical recovery.
          </p>

          <h3>REM Sleep</h3>
          <p>
            REM (Rapid Eye Movement) sleep typically occurs about 90 minutes after falling asleep and 
            repeats every 90 minutes throughout the night. During REM sleep:
          </p>
          <ul>
            <li>Your brain is highly active, processing memories and emotions</li>
            <li>Your eyes move rapidly beneath closed eyelids</li>
            <li>Most dreaming occurs during this stage</li>
            <li>Your body is temporarily paralyzed to prevent acting out dreams</li>
          </ul>
        </section>

        <section>
          <h2>Why Sleep Cycles Matter</h2>
          <p>
            Understanding sleep cycles can help you:
          </p>
          <ul>
            <li><strong>Time your sleep:</strong> Waking up at the end of a sleep cycle leaves you feeling more refreshed</li>
            <li><strong>Plan your bedtime:</strong> Calculate when to go to bed to wake up at the right time</li>
            <li><strong>Reduce sleep inertia:</strong> Avoid waking up during deep sleep which can cause grogginess</li>
            <li><strong>Improve sleep quality:</strong> Ensure you're getting enough of each sleep stage</li>
          </ul>
        </section>

        <section>
          <h2>How Sleep Cycles Change With Age</h2>
          <p>
            Sleep cycles evolve throughout life:
          </p>
          <ul>
            <li><strong>Infants:</strong> Shorter cycles (50-60 minutes) with more REM sleep</li>
            <li><strong>Children:</strong> Cycles gradually lengthen to 90 minutes</li>
            <li><strong>Adults:</strong> Stable 90-minute cycles with balanced non-REM and REM</li>
            <li><strong>Older adults:</strong> Less deep sleep and shorter REM periods</li>
          </ul>
        </section>

        <section>
          <h2>Tips for Better Sleep Cycles</h2>
          <ul>
            <li>Maintain a consistent sleep schedule to regulate your circadian rhythm</li>
            <li>Aim for 5-6 complete sleep cycles (7.5-9 hours) per night</li>
            <li>Create a dark, cool, and quiet sleep environment</li>
            <li>Avoid screens and bright light 1 hour before bed</li>
            <li>Use sleep tracking to understand your personal sleep patterns</li>
          </ul>
        </section>

        <section>
          <h2>References</h2>
          <ul>
            <li>
              National Sleep Foundation. (2015). "Sleep Cycles and Sleep Stages." 
              <a href="https://www.sleepfoundation.org/how-sleep-works/sleep-cycles" 
                 className="text-primary-600 dark:text-primary-400 hover:underline">
                Sleep Foundation
              </a>
            </li>
            <li>
              Patel, A.K., Reddy, V., & Araujo, J.F. (2023). "Physiology, Sleep Stages." 
              StatPearls Publishing.
            </li>
          </ul>
        </section>

        <RelatedTools tools={relatedTools} title="Related Sleep Tools" />
      </article>
    </div>
  );
}
