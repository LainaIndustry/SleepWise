import Breadcrumbs from '../../components/ui/Breadcrumbs';
import RelatedTools from '../../components/ui/RelatedTools';
import ShareButtons from '../../components/ui/ShareButtons';

export default function ExerciseSleep() {
  const breadcrumbItems = [
    { label: 'Education', path: '/education' },
    { label: 'Exercise and Sleep', path: '/education/exercise-sleep', current: true },
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
          <h1>Exercise and Sleep</h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>5 min read</span>
            <span>•</span>
            <span>Lifestyle</span>
            <div className="ml-auto">
              <ShareButtons 
                title="Exercise and Sleep" 
                url="https://sleepwise.com/education/exercise-sleep"
              />
            </div>
          </div>
        </header>

        <section>
          <h2>The Exercise-Sleep Connection</h2>
          <p>
            Exercise and sleep have a powerful bidirectional relationship. Regular physical 
            activity can improve sleep quality, and good sleep can enhance athletic performance. 
            Understanding this connection can help you optimize both for better health.
          </p>
        </section>

        <section>
          <h2>How Exercise Benefits Sleep</h2>
          <ul>
            <li><strong>Improves sleep quality:</strong> Increases deep sleep and REM sleep</li>
            <li><strong>Reduces sleep latency:</strong> Helps you fall asleep faster</li>
            <li><strong>Increases sleep duration:</strong> Can extend total sleep time</li>
            <li><strong>Reduces anxiety:</strong> Physical activity reduces stress and promotes relaxation</li>
            <li><strong>Helps regulate circadian rhythm:</strong> Exercise promotes consistent sleep-wake patterns</li>
          </ul>
        </section>

        <section>
          <h2>Best Types of Exercise for Sleep</h2>

          <h3>Aerobic Exercise</h3>
          <p>
            Activities like walking, jogging, swimming, and cycling are highly beneficial for sleep. 
            Aim for 30-45 minutes of moderate aerobic exercise most days.
          </p>

          <h3>Strength Training</h3>
          <p>
            Resistance training can improve sleep quality and help reduce symptoms of insomnia. 
            Consider 2-3 sessions per week with adequate rest days.
          </p>

          <h3>Mind-Body Exercise</h3>
          <p>
            Yoga, tai chi, and Pilates combine physical activity with relaxation. These are excellent 
            for evening routines and can significantly improve sleep quality.
          </p>
        </section>

        <section>
          <h2>Timing Your Exercise</h2>
          <p>
            Exercise timing matters for sleep:
          </p>
          <ul>
            <li><strong>Morning exercise:</strong> Helps set your circadian rhythm and can improve mood</li>
            <li><strong>Afternoon exercise:</strong> Body temperature peaks, which can boost performance</li>
            <li><strong>Evening exercise:</strong> Moderate exercise is okay, but finish vigorous exercise 2-3 hours before bed</li>
            <li><strong>Late-night exercise:</strong> Can elevate body temperature and heart rate, making it harder to fall asleep</li>
          </ul>
        </section>

        <section>
          <h2>How Much Exercise Do You Need?</h2>
          <p>
            The Physical Activity Guidelines for Americans recommend:
          </p>
          <ul>
            <li>At least 150 minutes of moderate aerobic activity per week</li>
            <li>Or 75 minutes of vigorous aerobic activity per week</li>
            <li>Strength training exercises at least twice per week</li>
            <li>Even 10-15 minutes can provide sleep benefits</li>
          </ul>
        </section>

        <section>
          <h2>Tips for Exercising for Better Sleep</h2>
          <ul>
            <li><strong>Be consistent:</strong> Regular exercise provides more sleep benefits than occasional intense workouts</li>
            <li><strong>Listen to your body:</strong> Adjust intensity based on how you feel</li>
            <li><strong>Recovery matters:</strong> Allow rest days for muscle recovery</li>
            <li><strong>Stay hydrated:</strong> Drink water before, during, and after exercise</li>
            <li><strong>Cool down properly:</strong> Gentle stretching and breathing can help transition to relaxation</li>
          </ul>
        </section>

        <section>
          <h2>Exercise for Specific Sleep Issues</h2>

          <h3>Insomnia</h3>
          <ul>
            <li>Regular aerobic exercise can reduce insomnia symptoms</li>
            <li>Yoga and mind-body practices are particularly helpful</li>
            <li>Aim for exercise in the morning or early afternoon</li>
          </ul>

          <h3>Sleep Apnea</h3>
          <ul>
            <li>Weight loss through exercise can improve sleep apnea symptoms</li>
            <li>Regular physical activity strengthens respiratory muscles</li>
            <li>Consult your healthcare provider for a safe exercise plan</li>
          </ul>

          <h3>Shift Work</h3>
          <ul>
            <li>Exercise can help with shift work adjustment</li>
            <li>Time exercise based on your "awake" schedule</li>
            <li>Use exercise to manage stress and maintain energy</li>
          </ul>
        </section>

        <section>
          <h2>When Exercise Disrupts Sleep</h2>
          <p>
            Some situations where exercise might affect sleep:
          </p>
          <ul>
            <li><strong>Overtraining:</strong> Too much exercise can elevate stress hormones</li>
            <li><strong>Late-night exercise:</strong> Can interfere with sleep onset</li>
            <li><strong>Injury or pain:</strong> Can disrupt sleep quality</li>
            <li><strong>Exercise without adequate recovery:</strong> Can lead to fatigue and poor sleep</li>
          </ul>
        </section>

        <section>
          <h2>References</h2>
          <ul>
            <li>
              National Sleep Foundation. (2023). "Exercise and Sleep."
              <a href="https://www.sleepfoundation.org/physical-activity/exercise-and-sleep" 
                 className="text-primary-600 dark:text-primary-400 hover:underline">
                Sleep Foundation
              </a>
            </li>
            <li>
              U.S. Department of Health and Human Services. (2023). "Physical Activity Guidelines."
              <a href="https://health.gov/our-work/physical-activity" 
                 className="text-primary-600 dark:text-primary-400 hover:underline">
                Health.gov
              </a>
            </li>
          </ul>
        </section>

        <RelatedTools tools={relatedTools} title="Related Sleep Tools" />
      </article>
    </div>
  );
}
