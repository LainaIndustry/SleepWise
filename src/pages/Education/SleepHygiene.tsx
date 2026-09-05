import Breadcrumbs from '../../components/ui/Breadcrumbs';
import RelatedTools from '../../components/ui/RelatedTools';
import ShareButtons from '../../components/ui/ShareButtons';

export default function SleepHygiene() {
  const breadcrumbItems = [
    { label: 'Education', path: '/education' },
    { label: 'Sleep Hygiene Principles', path: '/education/sleep-hygiene', current: true },
  ];

  const relatedTools = [
    {
      title: 'Sleep Diary',
      path: '/tools/sleep-diary',
      description: 'Track your sleep patterns'
    },
    {
      title: 'Sleep Consistency Calculator',
      path: '/tools/sleep-consistency',
      description: 'Measure your sleep schedule consistency'
    },
    {
      title: 'Bedtime Calculator',
      path: '/calculators/bedtime',
      description: 'Find your ideal bedtime'
    }
  ];

  return (
    <div className="container-custom py-8">
      <Breadcrumbs items={breadcrumbItems} />
      
      <article className="max-w-4xl mx-auto prose prose-gray dark:prose-invert">
        <header className="mb-8">
          <h1>Sleep Hygiene Principles</h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>7 min read</span>
            <span>•</span>
            <span>Sleep Wellness</span>
            <div className="ml-auto">
              <ShareButtons 
                title="Sleep Hygiene Principles" 
                url="https://sleepwise.com/education/sleep-hygiene"
              />
            </div>
          </div>
        </header>

        <section>
          <h2>What is Sleep Hygiene?</h2>
          <p>
            Sleep hygiene refers to the habits, practices, and environmental factors that promote 
            consistent, quality sleep. Good sleep hygiene is essential for physical health, mental 
            well-being, and daily performance.
          </p>
        </section>

        <section>
          <h2>The Environment: Creating the Perfect Sleep Space</h2>
          
          <h3>Keep It Dark</h3>
          <p>
            Darkness signals your brain to produce melatonin, the sleep hormone. Use:
          </p>
          <ul>
            <li>Blackout curtains or blinds to block external light</li>
            <li>Eye masks if light cannot be completely blocked</li>
            <li>Dim lights 1-2 hours before bedtime</li>
            <li>Warm, amber-toned light for evening activities</li>
          </ul>

          <h3>Keep It Cool</h3>
          <p>
            Your body temperature naturally drops as you prepare for sleep. Optimal bedroom 
            temperature is between 60-67°F (15-19°C).
          </p>

          <h3>Keep It Quiet</h3>
          <p>
            Reduce noise disruptions with:
          </p>
          <ul>
            <li>White noise machines or apps</li>
            <li>Earplugs</li>
            <li>Heavy curtains that also absorb sound</li>
            <li>Soft background music or nature sounds</li>
          </ul>
        </section>

        <section>
          <h2>Bedtime Routines: Wind Down Effectively</h2>
          
          <h3>Create a Consistent Routine</h3>
          <p>
            Your body thrives on routine. Follow a 30-60 minute wind-down ritual each night:
          </p>
          <ul>
            <li>Take a warm bath or shower (the temperature drop helps with sleep onset)</li>
            <li>Read a physical book (not a screen)</li>
            <li>Practice gentle stretching or yoga</li>
            <li>Journal to clear your mind</li>
            <li>Listen to calming music or podcasts</li>
          </ul>

          <h3>Avoid Screens Before Bed</h3>
          <p>
            Blue light from screens suppresses melatonin production. Try to:
          </p>
          <ul>
            <li>Stop screen use 1 hour before bed</li>
            <li>Use blue light filtering apps or glasses if screens are necessary</li>
            <li>Consider reading a physical book instead</li>
            <li>Enable night mode on devices</li>
          </ul>
        </section>

        <section>
          <h2>Daily Habits That Support Sleep</h2>

          <h3>Morning Routine</h3>
          <ul>
            <li>Get morning sunlight exposure to reset your circadian rhythm</li>
            <li>Wake up at the same time every day, even on weekends</li>
            <li>Hydrate with water first thing in the morning</li>
            <li>Consider light physical activity like stretching or walking</li>
          </ul>

          <h3>Daily Practices</h3>
          <ul>
            <li><strong>Exercise:</strong> Regular physical activity improves sleep quality, but avoid vigorous exercise close to bedtime</li>
            <li><strong>Caffeine:</strong> Limit to before 2 PM, as caffeine has a 5-6 hour half-life</li>
            <li><strong>Meals:</strong> Eat your last meal 2-3 hours before bed</li>
            <li><strong>Alcohol:</strong> Limit alcohol, especially close to bedtime, as it disrupts sleep cycles</li>
          </ul>
        </section>

        <section>
          <h2>Common Sleep Disruptors to Avoid</h2>
          <ul>
            <li><strong>Stress and Anxiety:</strong> Practice mindfulness, meditation, or deep breathing</li>
            <li><strong>Irregular Schedule:</strong> Stick to consistent bedtimes and wake times</li>
            <li><strong>Late Exercise:</strong> Finish vigorous workouts at least 2 hours before bed</li>
            <li><strong>Heavy Meals:</strong> Avoid large meals within 3 hours of bedtime</li>
            <li><strong>Fluid Intake:</strong> Reduce fluids 2 hours before bed to minimize bathroom trips</li>
          </ul>
        </section>

        <section>
          <h2>When to Seek Help</h2>
          <p>
            If sleep hygiene improvements don't help within 2-4 weeks, or if you experience:
          </p>
          <ul>
            <li>Chronic difficulty falling asleep or staying asleep</li>
            <li>Daytime sleepiness affecting daily activities</li>
            <li>Loud snoring or breathing interruptions during sleep</li>
            <li>Unusual behaviors during sleep</li>
          </ul>
          <p>
            Consult a healthcare professional or sleep specialist for a proper evaluation.
          </p>
        </section>

        <section>
          <h2>References</h2>
          <ul>
            <li>
              Centers for Disease Control and Prevention. (2023). "Tips for Better Sleep."
              <a href="https://www.cdc.gov/sleep/about_sleep/sleep_hygiene.html" 
                 className="text-primary-600 dark:text-primary-400 hover:underline">
                CDC
              </a>
            </li>
            <li>
              National Sleep Foundation. (2023). "Healthy Sleep Tips."
              <a href="https://www.sleepfoundation.org/sleep-hygiene" 
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
