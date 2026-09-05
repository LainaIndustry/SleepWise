import Breadcrumbs from '../../components/ui/Breadcrumbs';
import RelatedTools from '../../components/ui/RelatedTools';
import ShareButtons from '../../components/ui/ShareButtons';

export default function SleepMyths() {
  const breadcrumbItems = [
    { label: 'Education', path: '/education' },
    { label: 'Common Sleep Myths', path: '/education/sleep-myths', current: true },
  ];

  const relatedTools = [
    {
      title: 'Sleep Cycle Calculator',
      path: '/calculators/sleep-cycle',
      description: 'Find optimal sleep and wake times'
    },
    {
      title: 'Sleep Duration Calculator',
      path: '/calculators/sleep-duration',
      description: 'Calculate your sleep duration'
    }
  ];

  return (
    <div className="container-custom py-8">
      <Breadcrumbs items={breadcrumbItems} />
      
      <article className="max-w-4xl mx-auto prose prose-gray dark:prose-invert">
        <header className="mb-8">
          <h1>Common Sleep Myths Debunked</h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>6 min read</span>
            <span>•</span>
            <span>Sleep Science</span>
            <div className="ml-auto">
              <ShareButtons 
                title="Common Sleep Myths" 
                url="https://sleepwise.com/education/sleep-myths"
              />
            </div>
          </div>
        </header>

        <section>
          <h2>Myth 1: You Can Catch Up on Sleep on Weekends</h2>
          <p>
            <strong>Fact:</strong> While sleeping in on weekends can help reduce some sleep debt, 
            it's not the same as getting consistent, quality sleep each night. Large variations in 
            sleep times can disrupt your circadian rhythm and lead to "social jet lag." 
            It's better to maintain a consistent schedule with occasional small adjustments.
          </p>
        </section>

        <section>
          <h2>Myth 2: Snoring Is Harmless</h2>
          <p>
            <strong>Fact:</strong> While occasional snoring is common, persistent or loud snoring 
            can be a sign of sleep apnea, a serious sleep disorder. Sleep apnea is associated with 
            increased risk of cardiovascular disease, stroke, and daytime fatigue. If you or a 
            partner snore loudly, consult a healthcare professional.
          </p>
        </section>

        <section>
          <h2>Myth 3: Older Adults Need Less Sleep</h2>
          <p>
            <strong>Fact:</strong> While sleep patterns often change with age, older adults still 
            need 7-8 hours of sleep per night. The perception that older adults need less sleep may 
            actually reflect changes in sleep architecture (less deep sleep) rather than reduced 
            sleep needs.
          </p>
        </section>

        <section>
          <h2>Myth 4: Alcohol Before Bed Helps You Sleep</h2>
          <p>
            <strong>Fact:</strong> While alcohol can help you fall asleep faster, it disrupts sleep 
            quality later in the night. Alcohol reduces REM sleep and can cause more frequent 
            awakenings, leading to less restorative sleep overall.
          </p>
        </section>

        <section>
          <h2>Myth 5: Your Body Gets Used to Less Sleep</h2>
          <p>
            <strong>Fact:</strong> While you may feel that you've adapted to less sleep, your body 
            and brain continue to suffer the effects. Chronic sleep deprivation is associated with 
            cognitive decline, mood issues, and increased health risks even if you feel "fine."
          </p>
        </section>

        <section>
          <h2>Myth 6: Counting Sheep Helps You Fall Asleep</h2>
          <p>
            <strong>Fact:</strong> Some studies suggest that counting sheep may actually be less 
            effective than other distraction techniques like visualizing a relaxing scene or deep 
            breathing. It may be too simple to effectively distract your mind from anxious thoughts.
          </p>
        </section>

        <section>
          <h2>Myth 7: Waking Up During the Night Is Unhealthy</h2>
          <p>
            <strong>Fact:</strong> It's normal to wake briefly during the night. Most people wake 
            1-3 times per night, often without remembering. What matters is that you can fall back 
            to sleep easily and get enough total sleep.
          </p>
        </section>

        <section>
          <h2>Myth 8: You Can Train Your Body to Need Less Sleep</h2>
          <p>
            <strong>Fact:</strong> While you can learn to function on less sleep, you cannot train 
            your body to actually need less sleep. Sleep needs are biologically determined, and 
            chronic sleep restriction has consequences regardless of how well you think you've adapted.
          </p>
        </section>

        <section>
          <h2>Myth 9: Exercising Before Bed Is Bad</h2>
          <p>
            <strong>Fact:</strong> While vigorous exercise too close to bedtime can be stimulating, 
            gentle exercise like yoga or stretching can actually help you relax. Moderate exercise 
            earlier in the day is also highly beneficial for sleep quality.
          </p>
        </section>

        <section>
          <h2>Myth 10: Sleeping Pills Are a Safe Long-Term Solution</h2>
          <p>
            <strong>Fact:</strong> While sleeping pills can be helpful for short-term issues, they 
            are generally not recommended for long-term use. They can have side effects and may 
            mask underlying issues that need addressing. Always consult a healthcare professional 
            about medication use.
          </p>
        </section>

        <section>
          <h2>References</h2>
          <ul>
            <li>
              National Sleep Foundation. (2023). "Common Sleep Myths."
              <a href="https://www.sleepfoundation.org/how-sleep-works/myths-and-facts-about-sleep" 
                 className="text-primary-600 dark:text-primary-400 hover:underline">
                Sleep Foundation
              </a>
            </li>
            <li>
              American Academy of Sleep Medicine. (2023). "Sleep Education."
              <a href="https://sleepeducation.org/" 
                 className="text-primary-600 dark:text-primary-400 hover:underline">
                AASM
              </a>
            </li>
          </ul>
        </section>

        <RelatedTools tools={relatedTools} title="Related Sleep Tools" />
      </article>
    </div>
  );
}
