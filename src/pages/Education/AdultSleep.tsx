import Breadcrumbs from '../../components/ui/Breadcrumbs';
import RelatedTools from '../../components/ui/RelatedTools';
import ShareButtons from '../../components/ui/ShareButtons';

export default function AdultSleep() {
  const breadcrumbItems = [
    { label: 'Education', path: '/education' },
    { label: 'Adult Sleep Guide', path: '/education/adult-sleep', current: true },
  ];

  const relatedTools = [
    {
      title: 'Bedtime Calculator',
      path: '/calculators/bedtime',
      description: 'Find your ideal bedtime'
    },
    {
      title: 'Sleep Consistency Calculator',
      path: '/tools/sleep-consistency',
      description: 'Track your sleep consistency'
    }
  ];

  return (
    <div className="container-custom py-8">
      <Breadcrumbs items={breadcrumbItems} />
      
      <article className="max-w-4xl mx-auto prose prose-gray dark:prose-invert">
        <header className="mb-8">
          <h1>Adult Sleep Wellness</h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>6 min read</span>
            <span>•</span>
            <span>Sleep Wellness</span>
            <div className="ml-auto">
              <ShareButtons 
                title="Adult Sleep Wellness" 
                url="https://sleepwise.com/education/adult-sleep"
              />
            </div>
          </div>
        </header>

        <section>
          <h2>Understanding Adult Sleep Needs</h2>
          <p>
            Adults face unique sleep challenges related to work, family responsibilities, 
            health, and aging. Understanding how to maintain healthy sleep habits throughout 
            adulthood is essential for long-term health and well-being.
          </p>
        </section>

        <section>
          <h2>Sleep Needs by Age</h2>
          <p>
            Sleep needs change throughout adulthood:
          </p>
          <ul>
            <li><strong>Young Adults (18-25):</strong> 7-9 hours recommended</li>
            <li><strong>Adults (26-64):</strong> 7-9 hours recommended</li>
            <li><strong>Older Adults (65+):</strong> 7-8 hours recommended</li>
          </ul>
        </section>

        <section>
          <h2>Factors Affecting Adult Sleep</h2>
          <ul>
            <li><strong>Work demands:</strong> Long hours, shift work, travel</li>
            <li><strong>Family responsibilities:</strong> Parenting, caregiving</li>
            <li><strong>Stress and anxiety:</strong> Financial, career, relationship concerns</li>
            <li><strong>Health issues:</strong> Sleep disorders, chronic conditions</li>
            <li><strong>Lifestyle factors:</strong> Diet, exercise, substance use</li>
            <li><strong>Aging:</strong> Changes in sleep architecture and patterns</li>
          </ul>
        </section>

        <section>
          <h2>Creating Healthy Sleep Habits</h2>

          <h3>Sleep Environment</h3>
          <ul>
            <li>Optimize bedroom for sleep (cool, dark, quiet)</li>
            <li>Invest in a comfortable mattress and pillows</li>
            <li>Use blackout curtains</li>
            <li>Consider white noise machines</li>
          </ul>

          <h3>Daily Routines</h3>
          <ul>
            <li>Maintain consistent sleep-wake times</li>
            <li>Get morning sunlight exposure</li>
            <li>Incorporate regular physical activity</li>
            <li>Manage stress through relaxation techniques</li>
            <li>Limit caffeine and alcohol</li>
          </ul>
        </section>

        <section>
          <h2>Sleep and Work</h2>
          <ul>
            <li>Set boundaries for work hours</li>
            <li>Create a healthy work-life balance</li>
            <li>Use stress management techniques</li>
            <li>Take regular breaks during work</li>
            <li>Practice good sleep hygiene</li>
          </ul>
        </section>

        <section>
          <h2>Sleep and Aging</h2>
          <ul>
            <li>Understand normal age-related changes</li>
            <li>Adjust sleep environment for comfort</li>
            <li>Monitor for sleep disorders</li>
            <li>Maintain social connections</li>
            <li>Stay physically active</li>
          </ul>
        </section>

        <section>
          <h2>Common Adult Sleep Disorders</h2>
          <ul>
            <li><strong>Insomnia:</strong> Difficulty falling asleep or staying asleep</li>
            <li><strong>Sleep apnea:</strong> Breathing pauses during sleep</li>
            <li><strong>Restless legs syndrome:</strong> Uncomfortable sensations in legs</li>
            <li><strong>Narcolepsy:</strong> Excessive daytime sleepiness</li>
          </ul>
        </section>

        <section>
          <h2>When to Seek Professional Help</h2>
          <p>
            Consider professional help if you experience:
          </p>
          <ul>
            <li>Persistent difficulty falling asleep or staying asleep</li>
            <li>Daytime fatigue affecting daily activities</li>
            <li>Loud snoring or breathing pauses during sleep</li>
            <li>Restless legs or movements during sleep</li>
            <li>Anxiety or depression affecting sleep</li>
          </ul>
        </section>

        <section>
          <h2>References</h2>
          <ul>
            <li>
              National Sleep Foundation. (2023). "Adult Sleep."
              <a href="https://www.sleepfoundation.org/how-sleep-works" 
                 className="text-primary-600 dark:text-primary-400 hover:underline">
                Sleep Foundation
              </a>
            </li>
            <li>
              Centers for Disease Control and Prevention. (2023). "Sleep and Health."
              <a href="https://www.cdc.gov/sleep/index.html" 
                 className="text-primary-600 dark:text-primary-400 hover:underline">
                CDC Sleep
              </a>
            </li>
          </ul>
        </section>

        <RelatedTools tools={relatedTools} title="Related Sleep Tools" />
      </article>
    </div>
  );
}
