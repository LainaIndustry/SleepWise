import Breadcrumbs from '../components/ui/Breadcrumbs';
import NapCalculator from '../components/calculators/NapCalculator';
import FAQ from '../components/ui/FAQ';
import Disclaimer from '../components/ui/Disclaimer';
import AdPlaceholder from '../components/ui/AdPlaceholder';

const faqItems = [
  {
    question: 'How long should a nap be?',
    answer: 'The ideal nap length depends on your goals. Short naps (10-20 minutes) are good for a quick energy boost, while longer naps (60-90 minutes) allow for a full sleep cycle but may cause grogginess if not completed.'
  },
  {
    question: 'Is it better to nap in the morning or afternoon?',
    answer: 'The best time to nap is typically between 1 PM and 3 PM, when your body naturally experiences a dip in alertness. Napping too late in the day can interfere with nighttime sleep.'
  },
  {
    question: 'Why do I feel worse after a nap?',
    answer: 'Feeling worse after a nap, often called sleep inertia, occurs when you wake up in the middle of deep sleep. This is more likely with longer naps. Try to align your nap with your sleep cycles.'
  }
];

export default function Nap() {
  const breadcrumbItems = [
    { label: 'Calculators', path: '/calculators' },
    { label: 'Nap Calculator', path: '/calculators/nap', current: true },
  ];

  return (
    <div className="container-custom py-8">
      <Breadcrumbs items={breadcrumbItems} />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Nap Calculator
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Time your nap perfectly to wake up feeling refreshed and avoid sleep inertia.
        </p>

        <NapCalculator />
        
        <div className="mt-12">
          <AdPlaceholder position="content" />
        </div>

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">The Science of Napping</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Napping can be beneficial for alertness, memory consolidation, and overall well-being. 
              The key is timing—naps that align with your natural sleep cycles tend to be more refreshing 
              and less likely to cause sleep inertia.
            </p>
          </section>

          <FAQ items={faqItems} title="Frequently Asked Questions" />
          
          <Disclaimer />
        </div>
      </div>
    </div>
  );
}
