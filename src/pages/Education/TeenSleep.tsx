import Breadcrumbs from '../../components/ui/Breadcrumbs';
import RelatedTools from '../../components/ui/RelatedTools';
import ShareButtons from '../../components/ui/ShareButtons';

export default function TeenSleep() {
  const breadcrumbItems = [
    { label: 'Education', path: '/education' },
    { label: 'Teen Sleep Guide', path: '/education/teen-sleep', current: true },
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
          <h1>Teen Sleep Guide</h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>7 min read</span>
            <span>•</span>
            <span>Family</span>
            <div className="ml-auto">
              <ShareButtons 
                title="Teen Sleep Guide" 
                url="https://sleepwise.com/education/teen-sleep"
              />
            </div>
          </div>
        </header>

        <section>
          <h2>The Unique Sleep Needs of Teens</h2>
          <p>
            Teenagers experience significant biological changes that affect their sleep. 
            Understanding these changes and developing healthy sleep habits during adolescence 
            is crucial for physical health, academic success, and emotional well-being.
          </p>
        </section>

        <section>
          <h2>Why Teens Need More Sleep</h2>
          <p>
            During adolescence, the brain undergoes significant development that requires:
          </p>
          <ul>
            <li>Consolidation of learning and memory</li>
            <li>Emotional regulation and processing</li>
            <li>Physical growth and development</li>
            <li>Immune system support</li>
            <li>Hormonal balance and regulation</li>
          </ul>
        </section>

        <section>
          <h2>Biological Changes in Teen Sleep</h2>
          <ul>
            <li><strong>Delayed sleep phase:</strong> Natural shift to later sleep-wake times</li>
            <li><strong>Melatonin release delay:</strong> Melatonin is released later in the evening</li>
            <li><strong>Increased sleep need:</strong> 8-10 hours recommended</li>
            <li><strong>Differences in sleep architecture:</strong> More slow-wave sleep needed</li>
            <li><strong>Circadian rhythm shift:</strong> Body clock delays by up to 2 hours</li>
          </ul>
        </section>

        <section>
          <h2>Factors Affecting Teen Sleep</h2>
          <ul>
            <li><strong>Early school start times:</strong> Often too early for teenage biology</li>
            <li><strong>Academic pressure:</strong> Homework, exams, and school demands</li>
            <li><strong>Social media and screens:</strong> Late-night use and stimulation</li>
            <li><strong>Extracurricular activities:</strong> Sports, clubs, and part-time jobs</li>
            <li><strong>Social life:</strong> Peer pressure and social activities</li>
            <li><strong>Stress and anxiety:</strong> Academic and social pressures</li>
          </ul>
        </section>

        <section>
          <h2>Strategies for Better Teen Sleep</h2>

          <h3>Create a Sleep-Friendly Environment</h3>
          <ul>
            <li>Keep the bedroom cool, dark, and quiet</li>
            <li>Remove screens from the bedroom</li>
            <li>Use blackout curtains or eye masks</li>
            <li>Create a comfortable sleep space</li>
          </ul>

          <h3>Develop Healthy Habits</h3>
          <ul>
            <li>Establish a consistent sleep schedule</li>
            <li>Limit screen time 1-2 hours before bed</li>
            <li>Reduce caffeine intake after 2 PM</li>
            <li>Include physical activity in daily routine</li>
            <li>Create a relaxing pre-bed routine</li>
          </ul>
        </section>

        <section>
          <h2>Managing Sleep and Academics</h2>
          <ul>
            <li>Plan study schedules to avoid late-night cramming</li>
            <li>Use time management techniques</li>
            <li>Avoid all-nighters (they harm memory and performance)</li>
            <li>Take short power naps when needed (15-20 minutes)</li>
            <li>Balance academic demands with self-care</li>
          </ul>
        </section>

        <section>
          <h2>The Role of Parents</h2>
          <ul>
            <li>Model good sleep habits</li>
            <li>Set reasonable boundaries for screen use</li>
            <li>Support consistent sleep schedules</li>
            <li>Discuss the importance of sleep</li>
            <li>Provide a supportive environment</li>
            <li>Help teens manage stress and anxiety</li>
          </ul>
        </section>

        <section>
          <h2>When to Seek Professional Help</h2>
          <p>
            Consider professional help if your teen experiences:
          </p>
          <ul>
            <li>Persistent difficulty sleeping</li>
            <li>Daytime sleepiness affecting school or activities</li>
            <li>Changes in mood or behavior</li>
            <li>Signs of depression or anxiety</li>
            <li>Academic decline related to fatigue</li>
          </ul>
        </section>

        <section>
          <h2>Tips for Parents</h2>
          <ul>
            <li>Communicate openly about sleep importance</li>
            <li>Help teens manage their schedules</li>
            <li>Support healthy sleep habits</li>
            <li>Be patient with biological changes</li>
            <li>Model good sleep hygiene yourself</li>
            <li>Create a supportive home environment</li>
          </ul>
        </section>

        <section>
          <h2>References</h2>
          <ul>
            <li>
              National Sleep Foundation. (2023). "Teens and Sleep."
              <a href="https://www.sleepfoundation.org/teens-and-sleep" 
                 className="text-primary-600 dark:text-primary-400 hover:underline">
                Sleep Foundation
              </a>
            </li>
            <li>
              American Academy of Pediatrics. (2023). "Teen Sleep."
              <a href="https://www.healthychildren.org/English/healthy-living/sleep/Pages/Teens-and-Sleep.aspx" 
                 className="text-primary-600 dark:text-primary-400 hover:underline">
                HealthyChildren.org
              </a>
            </li>
          </ul>
        </section>

        <RelatedTools tools={relatedTools} title="Related Sleep Tools" />
      </article>
    </div>
  );
}
