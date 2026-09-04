import Breadcrumbs from '../components/ui/Breadcrumbs';
import BedtimeCalculator from '../components/calculators/BedtimeCalculator';
import FAQ from '../components/ui/FAQ';
import Disclaimer from '../components/ui/Disclaimer';

const faqItems = [
  {
    question: 'How do I determine my ideal bedtime?',
    answer: 'Your ideal bedtime depends on when you need to wake up and how many hours of sleep you need. Our calculator considers your age, wake-up time, and estimated time to fall asleep to suggest the best bedtime.'
  },
  {
    question: 'Why does age matter for sleep duration?',
    answer: 'Sleep needs change throughout life. Children and teenagers need more sleep than adults for proper growth and development. Older adults may need slightly less sleep but still benefit from consistent schedules.'
  },
  {
    question: 'Can I adjust the recommended bedtime?',
    answer: 'Yes, the recommendations are based on average sleep needs. You can adjust based on your personal experience and how you feel with different sleep durations.'
  }
];

export default function Bedtime() {
  const breadcrumbItems = [
    { label: 'Calculators', path: '/calculators' },
    { label: 'Bedtime Calculator', path: '/calculators/bedtime', current: true },
  ];

  return (
    <div className="container-custom py-8">
      <Breadcrumbs items={breadcrumbItems} />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Bedtime Calculator
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Find the ideal time to go to sleep based on your desired wake-up time and age group.
        </p>

        <BedtimeCalculator />

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Our bedtime calculator uses recommended sleep duration guidelines from the National Sleep Foundation
              to determine how much sleep you need based on your age. It then calculates backward from your desired
              wake-up time, accounting for the time it typically takes to fall asleep, to find your ideal bedtime.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Recommended Sleep Duration by Age</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">Newborns</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">14-17 hours</div>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">Infants</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">12-15 hours</div>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">Toddlers</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">11-14 hours</div>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">Children 3-5</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">10-13 hours</div>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">Children 6-13</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">9-11 hours</div>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">Teens</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">8-10 hours</div>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">Adults</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">7-9 hours</div>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">Older Adults</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">7-8 hours</div>
              </div>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-3">
              Source: National Sleep Foundation, 2015
            </p>
          </section>

          <FAQ items={faqItems} title="Frequently Asked Questions" />
          
          <Disclaimer />
        </div>
      </div>
    </div>
  );
}
