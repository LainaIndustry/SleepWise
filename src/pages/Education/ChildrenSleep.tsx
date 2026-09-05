import Breadcrumbs from '../../components/ui/Breadcrumbs';
import RelatedTools from '../../components/ui/RelatedTools';
import ShareButtons from '../../components/ui/ShareButtons';

export default function ChildrenSleep() {
  const breadcrumbItems = [
    { label: 'Education', path: '/education' },
    { label: 'Children and Sleep', path: '/education/children-sleep', current: true },
  ];

  const relatedTools = [
    {
      title: 'Sleep Duration Calculator',
      path: '/calculators/sleep-duration',
      description: 'Calculate sleep duration'
    },
    {
      title: 'Sleep Diary',
      path: '/tools/sleep-diary',
      description: 'Track sleep patterns'
    }
  ];

  return (
    <div className="container-custom py-8">
      <Breadcrumbs items={breadcrumbItems} />
      
      <article className="max-w-4xl mx-auto prose prose-gray dark:prose-invert">
        <header className="mb-8">
          <h1>Children and Sleep</h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>7 min read</span>
            <span>•</span>
            <span>Family</span>
            <div className="ml-auto">
              <ShareButtons 
                title="Children and Sleep" 
                url="https://sleepwise.com/education/children-sleep"
              />
            </div>
          </div>
        </header>

        <section>
          <h2>Why Sleep Matters for Children</h2>
          <p>
            Sleep is essential for children's growth, development, and learning. Quality sleep 
            supports physical growth, cognitive development, emotional regulation, and immune 
            function. Understanding children's sleep needs at different ages helps ensure they 
            get the rest they need.
          </p>
        </section>

        <section>
          <h2>Sleep Recommendations by Age</h2>
          <p>
            The National Sleep Foundation recommends these sleep durations:
          </p>
          <ul>
            <li><strong>Newborns (0-3 months):</strong> 14-17 hours per day</li>
            <li><strong>Infants (4-11 months):</strong> 12-15 hours</li>
            <li><strong>Toddlers (1-2 years):</strong> 11-14 hours</li>
            <li><strong>Preschoolers (3-5 years):</strong> 10-13 hours</li>
            <li><strong>School Age (6-13 years):</strong> 9-11 hours</li>
            <li><strong>Teens (14-17 years):</strong> 8-10 hours</li>
          </ul>
        </section>

        <section>
          <h2>Infants and Sleep</h2>
          <h3>Newborn Sleep Patterns</h3>
          <ul>
            <li>Sleep in short bursts of 2-4 hours</li>
            <li>Wake frequently for feeding and changing</li>
            <li>Total sleep can be 14-17 hours per day</li>
            <li>Sleep patterns are irregular but become more organized over time</li>
          </ul>

          <h3>Tips for Infant Sleep</h3>
          <ul>
            <li>Establish a consistent bedtime routine</li>
            <li>Place baby on their back to sleep</li>
            <li>Use swaddling and white noise</li>
            <li>Respond to hunger cues promptly</li>
            <li>Create a safe sleep environment</li>
          </ul>
        </section>

        <section>
          <h2>Toddlers and Sleep</h2>
          <h3>Common Challenges</h3>
          <ul>
            <li>Resistance to bedtime</li>
            <li>Nighttime awakenings</li>
            <li>Transitioning from crib to bed</li>
            <li>Nighttime fears and anxiety</li>
            <li>Nap transitions</li>
          </ul>

          <h3>Tips for Toddler Sleep</h3>
          <ul>
            <li>Maintain a consistent daily routine</li>
            <li>Use positive reinforcement for good sleep habits</li>
            <li>Create a relaxing bedtime routine</li>
            <li>Address fears and anxiety with reassurance</li>
            <li>Provide comfort objects like stuffed animals</li>
          </ul>
        </section>

        <section>
          <h2>School-Aged Children</h2>
          <h3>Developmental Factors</h3>
          <ul>
            <li>School schedules and activities</li>
            <li>Homework and screen time</li>
            <li>Social activities and peer pressure</li>
            <li>Sports and extracurricular activities</li>
            <li>Early school start times</li>
          </ul>

          <h3>Tips for School-Aged Children</h3>
          <ul>
            <li>Set consistent bedtimes and wake times</li>
            <li>Limit screen time before bed</li>
            <li>Create a homework schedule that allows for wind-down time</li>
            <li>Discuss the importance of sleep with your child</li>
            <li>Monitor caffeine consumption (sodas, energy drinks)</li>
          </ul>
        </section>

        <section>
          <h2>Teenagers and Sleep</h2>
          <h3>Biological Changes</h3>
          <ul>
            <li>Natural shift to later sleep-wake patterns</li>
            <li>Delayed release of melatonin</li>
            <li>Increased sleep need due to growth</li>
            <li>Faster metabolism affecting sleep regulation</li>
          </ul>

          <h3>Tips for Teen Sleep</h3>
          <ul>
            <li>Acknowledge biological sleep changes</li>
            <li>Negotiate reasonable bedtimes</li>
            <li>Reduce caffeine and screen time</li>
            <li>Discuss the importance of sleep for performance</li>
            <li>Encourage physical activity but not too close to bed</li>
          </ul>
        </section>

        <section>
          <h2>Common Sleep Issues in Children</h2>
          <ul>
            <li><strong>Bedtime resistance:</strong> Establish consistent routines and boundaries</li>
            <li><strong>Night terrors:</strong> Common in young children, usually harmless</li>
            <li><strong>Sleepwalking:</strong> More common between ages 4-12</li>
            <li><strong>Bedwetting:</strong> Normal up to age 5-7</li>
            <li><strong>Sleep apnea:</strong> Can affect children, especially with enlarged tonsils</li>
            <li><strong>Restless legs syndrome:</strong> Can cause sleep disruption</li>
          </ul>
        </section>

        <section>
          <h2>Creating Healthy Sleep Habits</h2>
          <ul>
            <li><strong>Routine:</strong> Consistent bedtime routines signal bedtime is approaching</li>
            <li><strong>Environment:</strong> Cool, dark, and quiet sleep environment</li>
            <li><strong>Activity:</strong> Regular physical activity during the day</li>
            <li><strong>Nutrition:</strong> Avoid caffeine and sugar near bedtime</li>
            <li><strong>Communication:</strong> Talk about sleep positively</li>
            <li><strong>Modeling:</strong> Children learn sleep habits from adults</li>
          </ul>
        </section>

        <section>
          <h2>When to Seek Help</h2>
          <p>
            Consider professional help if your child:
          </p>
          <ul>
            <li>Has persistent difficulty falling asleep</li>
            <li>Wakes frequently during the night</li>
            <li>Snores loudly or stops breathing</li>
            <li>Shows daytime sleepiness or behavior changes</li>
            <li>Has difficulty waking in the morning</li>
            <li>Shows signs of sleep apnea</li>
          </ul>
        </section>

        <section>
          <h2>References</h2>
          <ul>
            <li>
              National Sleep Foundation. (2023). "Children and Sleep."
              <a href="https://www.sleepfoundation.org/children-and-sleep" 
                 className="text-primary-600 dark:text-primary-400 hover:underline">
                Sleep Foundation
              </a>
            </li>
            <li>
              American Academy of Pediatrics. (2023). "Sleep and Your Child."
              <a href="https://www.healthychildren.org/English/healthy-living/sleep/Pages/default.aspx" 
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
