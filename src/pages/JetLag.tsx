import Breadcrumbs from '../components/ui/Breadcrumbs';
import JetLagCalculator from '../components/calculators/JetLagCalculator';
import FAQ from '../components/ui/FAQ';
import Disclaimer from '../components/ui/Disclaimer';
import AdPlaceholder from '../components/ui/AdPlaceholder';

const faqItems = [
  {
    question: 'How long does it take to recover from jet lag?',
    answer: 'Recovery typically takes 1-2 days per time zone crossed. The body adjusts at a rate of about 1-2 time zones per day. Factors like age, health, and sleep habits can affect recovery time.'
  },
  {
    question: 'Can I prevent jet lag?',
    answer: 'Yes, you can minimize jet lag by gradually adjusting your sleep schedule a few days before travel, staying hydrated, getting sunlight exposure at your destination, and maintaining consistent meal times.'
  },
  {
    question: 'Should I sleep on the plane?',
    answer: 'Sleeping on the plane can help if you\'re traveling east and arriving in the morning. For westbound flights, try to stay awake until your destination\'s bedtime. Use the calculator to plan your schedule.'
  }
];

export default function JetLag() {
  const breadcrumbItems = [
    { label: 'Calculators', path: '/calculators' },
    { label: 'Jet Lag Calculator', path: '/calculators/jet-lag', current: true },
  ];

  return (
    <div className="container-custom py-8">
      <Breadcrumbs items={breadcrumbItems} />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Jet Lag Calculator
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Plan ahead to minimize jet lag and adjust to new time zones more quickly.
        </p>

        <JetLagCalculator />
        
        <div className="mt-12">
          <AdPlaceholder position="content" />
        </div>

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Understanding Jet Lag</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Jet lag occurs when your body's internal clock (circadian rhythm) is out of sync with 
              the local time at your destination. Our calculator helps you plan a gradual adjustment 
              schedule to minimize the effects and recover faster.
            </p>
          </section>

          <FAQ items={faqItems} title="Frequently Asked Questions" />
          
          <Disclaimer />
        </div>
      </div>
    </div>
  );
}
