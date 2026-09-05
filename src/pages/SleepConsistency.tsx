import Breadcrumbs from '../components/ui/Breadcrumbs';
import SleepConsistencyCalculator from '../components/calculators/SleepConsistencyCalculator';
import FAQ from '../components/ui/FAQ';
import Disclaimer from '../components/ui/Disclaimer';
import AdPlaceholder from '../components/ui/AdPlaceholder';

const faqItems = [
  {
    question: 'Why is sleep consistency important?',
    answer: 'Consistent sleep schedules help regulate your circadian rhythm, making it easier to fall asleep and wake up naturally. Inconsistent sleep patterns can disrupt your body\'s internal clock.'
  },
  {
    question: 'What is a good sleep consistency score?',
    answer: 'A good sleep consistency score is typically 80% or higher, meaning you go to bed and wake up within the same hour most days of the week.'
  },
  {
    question: 'How can I improve my sleep consistency?',
    answer: 'Start by setting a fixed bedtime and wake time, even on weekends. Gradually adjust your schedule by 15-30 minutes each day until you reach your target times.'
  }
];

export default function SleepConsistency() {
  const breadcrumbItems = [
    { label: 'Tools', path: '/tools' },
    { label: 'Sleep Consistency', path: '/tools/sleep-consistency', current: true },
  ];

  return (
    <div className="container-custom py-8">
      <Breadcrumbs items={breadcrumbItems} />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Sleep Consistency Calculator
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Measure and improve the consistency of your sleep schedule for better rest.
        </p>

        <SleepConsistencyCalculator />
        
        <div className="mt-12">
          <AdPlaceholder position="content" />
        </div>

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Why Consistency Matters</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Sleep consistency is a key factor in sleep quality. A regular sleep schedule helps 
              synchronize your circadian rhythm, leading to easier sleep onset, more restorative 
              sleep, and better daytime alertness.
            </p>
          </section>

          <FAQ items={faqItems} title="Frequently Asked Questions" />
          
          <Disclaimer />
        </div>
      </div>
    </div>
  );
}
