import Breadcrumbs from '../../components/ui/Breadcrumbs';
import RelatedTools from '../../components/ui/RelatedTools';
import ShareButtons from '../../components/ui/ShareButtons';

export default function JetLagEducation() {
  const breadcrumbItems = [
    { label: 'Education', path: '/education' },
    { label: 'Managing Jet Lag', path: '/education/jet-lag', current: true },
  ];

  const relatedTools = [
    {
      title: 'Jet Lag Calculator',
      path: '/calculators/jet-lag',
      description: 'Plan to minimize jet lag'
    },
    {
      title: 'Sleep Schedule Planner',
      path: '/tools/sleep-schedule',
      description: 'Create a sleep schedule'
    }
  ];

  return (
    <div className="container-custom py-8">
      <Breadcrumbs items={breadcrumbItems} />
      
      <article className="max-w-4xl mx-auto prose prose-gray dark:prose-invert">
        <header className="mb-8">
          <h1>Managing Jet Lag</h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>7 min read</span>
            <span>•</span>
            <span>Travel</span>
            <div className="ml-auto">
              <ShareButtons 
                title="Managing Jet Lag" 
                url="https://sleepwise.com/education/jet-lag"
              />
            </div>
          </div>
        </header>

        <section>
          <h2>What Is Jet Lag?</h2>
          <p>
            Jet lag is a temporary sleep disorder that occurs when your body's internal clock 
            (circadian rhythm) is out of sync with the local time at your destination. It's most 
            common when traveling across multiple time zones quickly.
          </p>
        </section>

        <section>
          <h2>Symptoms of Jet Lag</h2>
          <ul>
            <li>Difficulty falling asleep or waking up</li>
            <li>Daytime fatigue and sleepiness</li>
            <li>Difficulty concentrating</li>
            <li>Mood changes (irritability, anxiety)</li>
            <li>Digestive issues</li>
            <li>Headaches</li>
          </ul>
        </section>

        <section>
          <h2>Why Jet Lag Happens</h2>
          <p>
            Your body's circadian rhythm is regulated by exposure to light and darkness. When you 
            travel across time zones, your body needs time to adjust to the new light-dark cycle.
          </p>
          <ul>
            <li>Traveling east (e.g., US to Europe): You lose time, making it harder to fall asleep</li>
            <li>Traveling west (e.g., US to Asia): You gain time, making it harder to stay awake</li>
          </ul>
        </section>

        <section>
          <h2>Before You Travel</h2>
          <ul>
            <li><strong>Adjust gradually:</strong> Shift your sleep schedule by 15-30 minutes each day before travel</li>
            <li><strong>Plan your flight:</strong> Choose flights that align with your destination's time</li>
            <li><strong>Prepare for your destination:</strong> Research the local time and plan accordingly</li>
          </ul>
        </section>

        <section>
          <h2>During Travel</h2>
          <ul>
            <li><strong>Stay hydrated:</strong> Drink extra water before and during flights</li>
            <li><strong>Adjust to destination time:</strong> Switch your watch to destination time immediately</li>
            <li><strong>Manage light exposure:</strong> Use light exposure strategically</li>
            <li><strong>Consider sleep timing:</strong> Sleep on the plane if it's nighttime at your destination</li>
          </ul>
        </section>

        <section>
          <h2>At Your Destination</h2>
          <ul>
            <li><strong>Get morning sunlight:</strong> Morning light helps reset your circadian rhythm</li>
            <li><strong>Stay awake until local bedtime:</strong> Try to stay awake until 10 PM local time</li>
            <li><strong>Limit napping:</strong> Short naps only if needed</li>
            <li><strong>Follow local mealtimes:</strong> Eat at appropriate times for your new time zone</li>
          </ul>
        </section>

        <section>
          <h2>Light Exposure Strategies</h2>
          <ul>
            <li><strong>Eastward travel:</strong> Get morning light, avoid evening light</li>
            <li><strong>Westward travel:</strong> Get evening light, avoid morning light</li>
            <li><strong>Use blue light:</strong> Strategic blue light exposure can help reset your rhythm</li>
            <li><strong>Use sunglasses:</strong> To control light exposure when needed</li>
          </ul>
        </section>

        <section>
          <h2>Recovery Timeline</h2>
          <p>
            Recovery typically takes 1-2 days per time zone crossed. For example:
          </p>
          <ul>
            <li>Crossing 3 time zones: 3-6 days to fully adjust</li>
            <li>Crossing 6 time zones: 6-12 days to fully adjust</li>
            <li>Crossing 12 time zones: 12-24 days to fully adjust</li>
          </ul>
        </section>

        <section>
          <h2>Tips for Frequent Travelers</h2>
          <ul>
            <li>Maintain a consistent sleep schedule when home</li>
            <li>Use the Jet Lag Calculator for personalized planning</li>
            <li>Consider melatonin supplementation (consult a doctor)</li>
            <li>Stay physically active during travel</li>
            <li>Build recovery time into your travel schedule</li>
          </ul>
        </section>

        <section>
          <h2>References</h2>
          <ul>
            <li>
              National Sleep Foundation. (2023). "Jet Lag."
              <a href="https://www.sleepfoundation.org/travel-and-sleep/jet-lag" 
                 className="text-primary-600 dark:text-primary-400 hover:underline">
                Sleep Foundation
              </a>
            </li>
            <li>
              Mayo Clinic. (2023). "Jet Lag: What You Need to Know."
              <a href="https://www.mayoclinic.org/diseases-conditions/jet-lag/symptoms-causes/syc-20374027" 
                 className="text-primary-600 dark:text-primary-400 hover:underline">
                Mayo Clinic
              </a>
            </li>
          </ul>
        </section>

        <RelatedTools tools={relatedTools} title="Travel Sleep Tools" />
      </article>
    </div>
  );
}
