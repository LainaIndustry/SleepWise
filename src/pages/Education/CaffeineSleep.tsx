import Breadcrumbs from '../../components/ui/Breadcrumbs';
import RelatedTools from '../../components/ui/RelatedTools';
import ShareButtons from '../../components/ui/ShareButtons';

export default function CaffeineSleep() {
  const breadcrumbItems = [
    { label: 'Education', path: '/education' },
    { label: 'Caffeine and Sleep', path: '/education/caffeine-sleep', current: true },
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
          <h1>Caffeine and Sleep</h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>4 min read</span>
            <span>•</span>
            <span>Lifestyle</span>
            <div className="ml-auto">
              <ShareButtons 
                title="Caffeine and Sleep" 
                url="https://sleepwise.com/education/caffeine-sleep"
              />
            </div>
          </div>
        </header>

        <section>
          <h2>How Caffeine Affects Sleep</h2>
          <p>
            Caffeine is one of the most widely consumed psychoactive substances in the world. 
            While it can help you feel more alert and focused during the day, caffeine can 
            significantly impact your sleep quality and quantity.
          </p>
        </section>

        <section>
          <h2>The Science of Caffeine</h2>
          <p>
            Caffeine works by blocking adenosine receptors in your brain. Adenosine is a 
            neurotransmitter that promotes sleep and relaxation. By blocking these receptors, 
            caffeine keeps you awake and alert. However, this disruption of your natural sleep 
            chemistry can have lasting effects.
          </p>

          <h3>Caffeine Half-Life</h3>
          <p>
            The half-life of caffeine is about 5-6 hours in most adults. This means that half 
            the caffeine you consume is still in your system 5-6 hours later. For example:
          </p>
          <ul>
            <li>If you have a coffee at 2 PM, about 50% of the caffeine is still in your system at 8 PM</li>
            <li>About 25% may still be present at 2 AM</li>
            <li>Individual variations can range from 3-7 hours depending on genetics and metabolism</li>
          </ul>
        </section>

        <section>
          <h2>Effects on Sleep</h2>
          <ul>
            <li><strong>Delayed sleep onset:</strong> Taking longer to fall asleep</li>
            <li><strong>Reduced sleep quality:</strong> Less deep sleep and REM sleep</li>
            <li><strong>Increased night awakenings:</strong> More frequent waking during the night</li>
            <li><strong>Reduced total sleep time:</strong> Shorter overall sleep duration</li>
            <li><strong>Next-day effects:</strong> Fatigue, impaired performance, and increased caffeine consumption cycle</li>
          </ul>
        </section>

        <section>
          <h2>When to Stop Consuming Caffeine</h2>
          <p>
            To minimize sleep disruption, consider these guidelines:
          </p>
          <ul>
            <li><strong>General recommendation:</strong> Stop caffeine consumption 6-8 hours before bedtime</li>
            <li><strong>Sensitive individuals:</strong> Consider stopping by 12 PM or 2 PM</li>
            <li><strong>Slow metabolizers:</strong> May need to stop caffeine consumption even earlier</li>
          </ul>
        </section>

        <section>
          <h2>Sources of Caffeine</h2>
          <p>
            Caffeine isn't just in coffee. Be aware of these common sources:
          </p>
          <ul>
            <li><strong>Coffee:</strong> 80-100 mg per 8 oz cup</li>
            <li><strong>Tea:</strong> 30-50 mg per 8 oz cup</li>
            <li><strong>Soda:</strong> 30-40 mg per 12 oz can</li>
            <li><strong>Energy drinks:</strong> 70-200 mg per serving</li>
            <li><strong>Chocolate:</strong> 5-35 mg per serving</li>
            <li><strong>Some medications:</strong> 30-200 mg per dose</li>
          </ul>
        </section>

        <section>
          <h2>Tips for Managing Caffeine</h2>
          <ul>
            <li>Track your caffeine intake with a journal or app</li>
            <li>Gradually reduce caffeine to avoid withdrawal symptoms</li>
            <li>Stay hydrated with water throughout the day</li>
            <li>Consider decaf options in the afternoon and evening</li>
            <li>Find alternative pick-me-ups like brief walks or deep breathing</li>
            <li>Allow time for caffeine to leave your system before bed</li>
          </ul>
        </section>

        <section>
          <h2>Individual Sensitivity</h2>
          <p>
            People vary widely in their sensitivity to caffeine. Factors that affect sensitivity:
          </p>
          <ul>
            <li><strong>Genetics:</strong> Some people metabolize caffeine faster than others</li>
            <li><strong>Age:</strong> Older adults may be more sensitive to caffeine's effects</li>
            <li><strong>Weight:</strong> Body mass affects caffeine distribution</li>
            <li><strong>Pregnancy:</strong> Pregnancy slows caffeine metabolism</li>
            <li><strong>Medications:</strong> Some medications interact with caffeine</li>
          </ul>
        </section>

        <section>
          <h2>References</h2>
          <ul>
            <li>
              Drake, C., Roehrs, T., Shambroom, J., & Roth, T. (2013). "Caffeine Effects on Sleep Taken 0, 3, or 6 Hours before Going to Bed."
              <a href="https://jcsm.aasm.org/doi/10.5664/jcsm.3170" 
                 className="text-primary-600 dark:text-primary-400 hover:underline">
                Journal of Clinical Sleep Medicine
              </a>
            </li>
            <li>
              National Sleep Foundation. (2023). "Caffeine and Sleep."
              <a href="https://www.sleepfoundation.org/nutrition/caffeine-and-sleep" 
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
