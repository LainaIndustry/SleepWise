import Breadcrumbs from '../components/ui/Breadcrumbs';
import SleepDebtCalculator from '../components/calculators/SleepDebtCalculator';
import FAQ from '../components/ui/FAQ';
import Disclaimer from '../components/ui/Disclaimer';
import AdPlaceholder from '../components/ui/AdPlaceholder';

const faqItems = [
  {
    question: 'What is sleep debt?',
    answer: 'Sleep debt is the cumulative effect of not getting enough sleep. It represents the difference between the amount of sleep you need and the amount you actually get over time.'
  },
  {
    question: 'How can I reduce sleep debt?',
    answer: 'The best way to reduce sleep debt is to gradually increase your sleep duration by going to bed earlier and maintaining a consistent sleep schedule. Avoiding caffeine and screens before bed can also help.'
  },
  {
    question: 'Can sleep debt be fully recovered?',
    answer: 'Research suggests that while some recovery is possible, chronic sleep debt may have lasting effects. The best approach is to maintain a consistent, adequate sleep schedule regularly.'
  }
];

export default function SleepDebt() {
  const breadcrumbItems = [
    { label: 'Calculators', path: '/calculators' },
    { label: 'Sleep Debt Calculator', path: '/calculators/sleep-debt', current: true },
  ];

  return (
    <div className="container-custom py-8">
      <Breadcrumbs items={breadcrumbItems} />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Sleep Debt Calculator
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Track your sleep debt and understand how much sleep you're missing.
        </p>

        <SleepDebtCalculator />
        
        <div className="mt-12">
          <AdPlaceholder position="content" />
        </div>

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Understanding Sleep Debt</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Sleep debt accumulates when you consistently get less sleep than your body needs. 
              Even small daily deficits can add up over time, affecting your health, mood, and performance.
            </p>
          </section>

          <FAQ items={faqItems} title="Frequently Asked Questions" />
          
          <Disclaimer />
        </div>
      </div>
    </div>
  );
}
