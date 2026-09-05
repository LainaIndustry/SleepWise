import Breadcrumbs from '../../components/ui/Breadcrumbs';
import RelatedTools from '../../components/ui/RelatedTools';
import ShareButtons from '../../components/ui/ShareButtons';

export default function TravelSleep() {
  const breadcrumbItems = [
    { label: 'Education', path: '/education' },
    { label: 'Traveling and Sleep', path: '/education/travel-sleep', current: true },
  ];

  const relatedTools = [
    {
      title: 'Jet Lag Calculator',
      path: '/calculators/jet-lag',
      description: 'Plan to minimize jet lag'
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
          <h1>Traveling and Sleep</h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>4 min read</span>
            <span>•</span>
            <span>Travel</span>
            <div className="ml-auto">
              <ShareButtons 
                title="Traveling and Sleep" 
                url="https://sleepwise.com/education/travel-sleep"
              />
            </div>
          </div>
        </header>

        <section>
          <h2>Sleep Challenges When Traveling</h2>
          <p>
            Traveling can disrupt your sleep in multiple ways - from changes in time zones to 
            unfamiliar sleeping environments. Understanding these challenges can help you prepare 
            and minimize their impact.
          </p>
        </section>

        <section>
          <h2>Before You Travel</h2>

          <h3>Preparation Tips</h3>
          <ul>
            <li><strong>Adjust gradually:</strong> Start shifting your sleep schedule 2-3 days before travel</li>
            <li><strong>Plan your arrival:</strong> Try to arrive at your destination in the evening if possible</li>
            <li><strong>Pack sleep aids:</strong> Bring eye masks, earplugs, and a travel pillow</li>
            <li><strong>Stay hydrated:</strong> Drink extra water before and during travel</li>
            <li><strong>Avoid travel stress:</strong> Allow extra time for connections and delays</li>
          </ul>
        </section>

        <section>
          <h2>During Travel</h2>

          <h3>On the Flight</h3>
          <ul>
            <li>Consider your flight timing and adjust sleep accordingly</li>
            <li>Use eye masks and earplugs to create a sleep environment</li>
            <li>Get up and move around regularly</li>
            <li>Stay hydrated but limit caffeine and alcohol</li>
            <li>Consider compression socks for circulation</li>
          </ul>

          <h3>Managing Jet Lag</h3>
          <ul>
            <li>Reset your watch to destination time immediately</li>
            <li>Get sunlight exposure at appropriate times for your destination</li>
            <li>Adjust meal times to match local schedule</li>
            <li>Allow 1-2 days per time zone crossed for adjustment</li>
            <li>Use the Jet Lag Calculator for personalized guidance</li>
          </ul>
        </section>

        <section>
          <h2>At Your Destination</h2>

          <h3>Creating a Sleep-Friendly Environment</h3>
          <ul>
            <li>Use blackout curtains or eye masks</li>
            <li>Set thermostat to 65-68°F (18-20°C)</li>
            <li>Use white noise or earplugs</li>
            <li>Bring familiar items for comfort</li>
            <li>Limit room service and late-night distractions</li>
          </ul>

          <h3>Maintaining Your Schedule</h3>
          <ul>
            <li>Stick to local bedtime and wake times</li>
            <li>Avoid excessive napping</li>
            <li>Limit alcohol consumption</li>
            <li>Follow a relaxing bedtime routine</li>
            <li>Get morning sunlight to regulate circadian rhythm</li>
          </ul>
        </section>

        <section>
          <h2>Tips for Different Travel Types</h2>

          <h3>Business Travel</h3>
          <ul>
            <li>Book early flights to have time to acclimate</li>
            <li>Schedule meetings after 48 hours if possible</li>
            <li>Use hotel gyms for exercise to promote sleep</li>
            <li>Limit working too late into the evening</li>
          </ul>

          <h3>Family Travel</h3>
          <ul>
            <li>Children may need longer to adjust</li>
            <li>Maintain nap schedules for younger children</li>
            <li>Bring familiar sleep items from home</li>
            <li>Plan days with sufficient rest time</li>
          </ul>

          <h3>Long-Distance Travel</h3>
          <ul>
            <li>Break up travel if possible</li>
            <li>Plan a recovery day at destination</li>
            <li>Use overnight flights strategically</li>
            <li>Consider stopovers for extreme time zone changes</li>
          </ul>
        </section>

        <section>
          <h2>Returning Home</h2>
          <ul>
            <li>Gradually adjust back to your home time zone</li>
            <li>Get plenty of natural light during the day</li>
            <li>Return to your regular sleep routine gradually</li>
            <li>Allow time for recovery from travel</li>
            <li>Don't over-schedule immediately after return</li>
          </ul>
        </section>

        <section>
          <h2>When to Seek Help</h2>
          <p>
            Consider professional help if:
          </p>
          <ul>
            <li>Sleep problems persist for more than 2 weeks after travel</li>
            <li>You experience severe sleep anxiety about travel</li>
            <li>Sleep issues are affecting your health or performance</li>
            <li>You have underlying sleep disorders that may complicate travel</li>
          </ul>
        </section>

        <section>
          <h2>References</h2>
          <ul>
            <li>
              National Sleep Foundation. (2023). "Travel and Sleep."
              <a href="https://www.sleepfoundation.org/travel-and-sleep" 
                 className="text-primary-600 dark:text-primary-400 hover:underline">
                Sleep Foundation
              </a>
            </li>
            <li>
              Centers for Disease Control and Prevention. (2023). "Travel Health."
              <a href="https://wwwnc.cdc.gov/travel/page/sleep" 
                 className="text-primary-600 dark:text-primary-400 hover:underline">
                CDC Travel Health
              </a>
            </li>
          </ul>
        </section>

        <RelatedTools tools={relatedTools} title="Travel Sleep Tools" />
      </article>
    </div>
  );
}
