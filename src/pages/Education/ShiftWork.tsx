import Breadcrumbs from '../../components/ui/Breadcrumbs';
import RelatedTools from '../../components/ui/RelatedTools';
import ShareButtons from '../../components/ui/ShareButtons';

export default function ShiftWork() {
  const breadcrumbItems = [
    { label: 'Education', path: '/education' },
    { label: 'Shift Work and Sleep', path: '/education/shift-work', current: true },
  ];

  const relatedTools = [
    {
      title: 'Shift Work Planner',
      path: '/calculators/shift-work',
      description: 'Plan your sleep around shift work'
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
          <h1>Shift Work and Sleep</h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>8 min read</span>
            <span>•</span>
            <span>Work & Sleep</span>
            <div className="ml-auto">
              <ShareButtons 
                title="Shift Work and Sleep" 
                url="https://sleepwise.com/education/shift-work"
              />
            </div>
          </div>
        </header>

        <section>
          <h2>The Challenges of Shift Work</h2>
          <p>
            Shift work, especially night shifts, presents unique challenges for sleep. Working 
            during natural sleeping hours and sleeping during natural waking hours disrupts your 
            circadian rhythm and can lead to serious health consequences over time.
          </p>
        </section>

        <section>
          <h2>Health Implications</h2>
          <p>
            Long-term shift work is associated with:
          </p>
          <ul>
            <li>Increased risk of cardiovascular disease</li>
            <li>Higher rates of obesity and metabolic syndrome</li>
            <li>Increased risk of certain cancers</li>
            <li>Higher rates of mental health issues</li>
            <li>Impaired cognitive function and performance</li>
            <li>Increased risk of accidents and injuries</li>
          </ul>
        </section>

        <section>
          <h2>Strategies for Better Sleep</h2>

          <h3>Sleep Environment</h3>
          <ul>
            <li>Use blackout curtains to simulate darkness</li>
            <li>Maintain a cool temperature (65-68°F)</li>
            <li>Use white noise or earplugs</li>
            <li>Consider eye masks for additional light blocking</li>
            <li>Create a consistent sleep routine</li>
          </ul>

          <h3>Timing Your Sleep</h3>
          <ul>
            <li>Sleep immediately after your shift for best results</li>
            <li>Aim for 7-8 hours of uninterrupted sleep</li>
            <li>Take short naps before shifts (15-20 minutes)</li>
            <li>Split sleep into two sessions if needed</li>
            <li>Maintain consistency on days off</li>
          </ul>
        </section>

        <section>
          <h2>Managing Your Schedule</h2>

          <h3>Before Night Shifts</h3>
          <ul>
            <li>Gradually shift your sleep schedule in the days before</li>
            <li>Get exposure to bright light before your shift</li>
            <li>Have a large meal before shift and small meals during</li>
            <li>Time caffeine strategically for alertness</li>
          </ul>

          <h3>During Night Shifts</h3>
          <ul>
            <li>Stay hydrated and eat balanced snacks</li>
            <li>Take short breaks to move around</li>
            <li>Use caffeine only in the first part of your shift</li>
            <li>Work in well-lit areas</li>
            <li>Minimize distractions and stay focused</li>
          </ul>

          <h3>After Night Shifts</h3>
          <ul>
            <li>Go to sleep immediately after shift</li>
            <li>Minimize light exposure on your way home</li>
            <li>Eat a balanced meal before sleeping</li>
            <li>Avoid stimulating activities before bed</li>
            <li>Use relaxation techniques to wind down</li>
          </ul>
        </section>

        <section>
          <h2>Nutrition and Exercise</h2>
          <ul>
            <li><strong>Meal timing:</strong> Eat your largest meal before your shift</li>
            <li><strong>Hydration:</strong> Drink water regularly throughout shifts</li>
            <li><strong>Snacks:</strong> Choose healthy, protein-rich snacks</li>
            <li><strong>Avoid sugar:</strong> Limit sugary foods that cause energy crashes</li>
            <li><strong>Exercise:</strong> Fit in physical activity when possible</li>
          </ul>
        </section>

        <section>
          <h2>Caffeine and Shift Work</h2>
          <ul>
            <li>Use caffeine strategically for alertness</li>
            <li>Stop caffeine 4-6 hours before sleep</li>
            <li>Small, frequent doses are better than large ones</li>
            <li>Consider caffeine pills for consistent dosing</li>
            <li>Remember that caffeine doesn't replace sleep</li>
          </ul>
        </section>

        <section>
          <h2>Social Life and Shift Work</h2>
          <ul>
            <li>Communicate with family and friends about your schedule</li>
            <li>Plan social activities during your awake hours</li>
            <li>Use apps and tools to coordinate with others</li>
            <li>Protect your sleep time as a priority</li>
            <li>Consider permanent night shift if possible for consistency</li>
          </ul>
        </section>

        <section>
          <h2>When to Seek Help</h2>
          <p>
            Consider professional help if:
          </p>
          <ul>
            <li>You experience persistent sleep problems</li>
            <li>Daytime fatigue interferes with daily activities</li>
            <li>You have health concerns related to shift work</li>
            <li>You're experiencing mood changes or mental health issues</li>
          </ul>
        </section>

        <section>
          <h2>References</h2>
          <ul>
            <li>
              National Sleep Foundation. (2023). "Shift Work and Sleep."
              <a href="https://www.sleepfoundation.org/shift-work-disorder" 
                 className="text-primary-600 dark:text-primary-400 hover:underline">
                Sleep Foundation
              </a>
            </li>
            <li>
              Centers for Disease Control and Prevention. (2023). "NIOSH Training for Nurses on Shift Work and Long Work Hours."
              <a href="https://www.cdc.gov/niosh/work-hour-training-for-nurses/longhours/mod6/index.html" 
                 className="text-primary-600 dark:text-primary-400 hover:underline">
                CDC NIOSH
              </a>
            </li>
          </ul>
        </section>

        <RelatedTools tools={relatedTools} title="Shift Work Tools" />
      </article>
    </div>
  );
}
