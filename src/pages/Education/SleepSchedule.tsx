import Breadcrumbs from '../../components/ui/Breadcrumbs';
import RelatedTools from '../../components/ui/RelatedTools';
import ShareButtons from '../../components/ui/ShareButtons';
import SleepSchedulePrintable from '../../components/ui/SleepSchedulePrintable';

export default function SleepSchedule() {
  const breadcrumbItems = [
    { label: 'Education', path: '/education' },
    { label: 'Building a Sleep Schedule', path: '/education/sleep-schedule', current: true },
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
      description: 'Track your schedule consistency'
    },
    {
      title: 'Sleep Diary',
      path: '/tools/sleep-diary',
      description: 'Track your daily sleep patterns'
    }
  ];

  const sampleSchedule = [
    { day: 'Monday', bedtime: '10:30 PM', wakeTime: '6:30 AM', duration: 8, notes: 'Start of week' },
    { day: 'Tuesday', bedtime: '10:30 PM', wakeTime: '6:30 AM', duration: 8, notes: 'Consistent' },
    { day: 'Wednesday', bedtime: '10:30 PM', wakeTime: '6:30 AM', duration: 8, notes: 'Consistent' },
    { day: 'Thursday', bedtime: '10:30 PM', wakeTime: '6:30 AM', duration: 8, notes: 'Consistent' },
    { day: 'Friday', bedtime: '11:00 PM', wakeTime: '7:00 AM', duration: 8, notes: 'Weekend transition' },
    { day: 'Saturday', bedtime: '11:30 PM', wakeTime: '8:00 AM', duration: 8.5, notes: 'Weekend' },
    { day: 'Sunday', bedtime: '10:30 PM', wakeTime: '6:30 AM', duration: 8, notes: 'Back to routine' },
  ];

  return (
    <div className="container-custom py-8">
      <Breadcrumbs items={breadcrumbItems} />
      
      <article className="max-w-4xl mx-auto prose prose-gray dark:prose-invert">
        <header className="mb-8">
          <h1>Building a Sleep Schedule</h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>6 min read</span>
            <span>•</span>
            <span>Sleep Planning</span>
            <div className="ml-auto">
              <ShareButtons 
                title="Building a Sleep Schedule" 
                url="https://sleepwise.com/education/sleep-schedule"
              />
            </div>
          </div>
        </header>

        <section>
          <h2>Why a Consistent Sleep Schedule Matters</h2>
          <p>
            A consistent sleep schedule is one of the most important factors for quality sleep. 
            Your body's internal clock, or circadian rhythm, thrives on regularity. When you go to 
            bed and wake up at roughly the same time each day, your body learns to anticipate sleep 
            and wakefulness, making it easier to fall asleep and wake up naturally.
          </p>
        </section>

        <section>
          <h2>How to Create Your Ideal Sleep Schedule</h2>
          
          <h3>Step 1: Determine Your Sleep Needs</h3>
          <p>
            Most adults need 7-9 hours of sleep per night. Consider your age, lifestyle, and 
            personal sleep needs. Some people thrive on 7 hours while others need 9.
          </p>

          <h3>Step 2: Set Your Wake-Up Time</h3>
          <p>
            Choose a wake-up time that works for your daily commitments and stick to it, even on 
            weekends. This is the most important anchor for your sleep schedule.
          </p>

          <h3>Step 3: Calculate Your Bedtime</h3>
          <p>
            Work backward from your wake-up time. Count back 7-9 hours, plus about 15 minutes for 
            falling asleep. For example, if you need to wake at 6:30 AM and want 8 hours of sleep, 
            aim to be in bed by 10:15 PM (10:30 PM bedtime plus 15 minutes to fall asleep).
          </p>

          <h3>Step 4: Create a Wind-Down Routine</h3>
          <p>
            Start winding down 30-60 minutes before your bedtime. This signals your body that 
            sleep is approaching and helps you fall asleep faster.
          </p>
        </section>

        <section>
          <h2>Sample Sleep Schedule</h2>
          <div className="not-prose">
            <SleepSchedulePrintable schedule={sampleSchedule} title="Sample Weekly Sleep Schedule" />
          </div>
        </section>

        <section>
          <h2>Tips for Maintaining Your Schedule</h2>
          <ul>
            <li><strong>Be consistent:</strong> Even on weekends, try to stay within 30-60 minutes of your weekday schedule</li>
            <li><strong>Get morning light:</strong> Exposure to natural light in the morning helps anchor your circadian rhythm</li>
            <li><strong>Adjust gradually:</strong> If you need to change your schedule, shift by 15-30 minutes each day</li>
            <li><strong>Track your sleep:</strong> Use a sleep diary to identify patterns and make adjustments</li>
            <li><strong>Be patient:</strong> It takes 2-4 weeks to fully adjust to a new sleep schedule</li>
          </ul>
        </section>

        <section>
          <h2>Common Challenges and Solutions</h2>
          
          <h3>Difficulty Falling Asleep</h3>
          <ul>
            <li>Create a relaxing pre-sleep routine</li>
            <li>Avoid screens 1 hour before bed</li>
            <li>Keep your bedroom cool and dark</li>
            <li>Try relaxation techniques like deep breathing</li>
          </ul>

          <h3>Waking Up During the Night</h3>
          <ul>
            <li>Don't check the time (it increases anxiety)</li>
            <li>If you can't fall back asleep after 20 minutes, get up and do something relaxing</li>
            <li>Consider if you're consuming caffeine or alcohol too close to bedtime</li>
          </ul>

          <h3>Feeling Tired Despite Adequate Sleep</h3>
          <ul>
            <li>Check if you're waking up during deep sleep (use a sleep cycle calculator)</li>
            <li>Consider your sleep quality, not just quantity</li>
            <li>Evaluate your sleep environment and habits</li>
            <li>Consult a healthcare provider if fatigue persists</li>
          </ul>
        </section>

        <section>
          <h2>When to Adjust Your Schedule</h2>
          <p>
            Life changes often require schedule adjustments. Consider adjusting when:
          </p>
          <ul>
            <li>Starting a new job or changing work hours</li>
            <li>Traveling across time zones</li>
            <li>Changes in family or caregiving responsibilities</li>
            <li>Seasonal changes affecting natural light exposure</li>
          </ul>
        </section>

        <section>
          <h2>References</h2>
          <ul>
            <li>
              National Sleep Foundation. (2023). "Sleep Hygiene and Healthy Sleep Tips."
              <a href="https://www.sleepfoundation.org/sleep-hygiene" 
                 className="text-primary-600 dark:text-primary-400 hover:underline">
                Sleep Foundation
              </a>
            </li>
            <li>
              Centers for Disease Control and Prevention. (2023). "Tips for Better Sleep."
              <a href="https://www.cdc.gov/sleep/about_sleep/sleep_hygiene.html" 
                 className="text-primary-600 dark:text-primary-400 hover:underline">
                CDC
              </a>
            </li>
          </ul>
        </section>

        <RelatedTools tools={relatedTools} title="Sleep Schedule Tools" />
      </article>
    </div>
  );
}
