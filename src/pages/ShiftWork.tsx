import Breadcrumbs from '../components/ui/Breadcrumbs';
import ShiftWorkPlanner from '../components/calculators/ShiftWorkPlanner';
import FAQ from '../components/ui/FAQ';
import Disclaimer from '../components/ui/Disclaimer';
import AdPlaceholder from '../components/ui/AdPlaceholder';

const faqItems = [
  {
    question: 'How can shift workers get better sleep?',
    answer: 'Shift workers can improve sleep by maintaining a consistent sleep schedule even on days off, creating a dark and quiet sleep environment, using blackout curtains, and strategically using caffeine to stay alert during shifts.'
  },
  {
    question: 'Is shift work harmful to health?',
    answer: 'Research suggests that chronic shift work can disrupt circadian rhythms and may be associated with various health issues. However, with proper sleep planning and lifestyle adjustments, many of these risks can be mitigated.'
  },
  {
    question: 'How long should a shift worker sleep?',
    answer: 'Shift workers should aim for the same 7-9 hours of sleep recommended for the general population. The key is consistency and creating an environment conducive to sleep during daytime hours.'
  }
];

export default function ShiftWork() {
  const breadcrumbItems = [
    { label: 'Calculators', path: '/calculators' },
    { label: 'Shift Work Planner', path: '/calculators/shift-work', current: true },
  ];

  return (
    <div className="container-custom py-8">
      <Breadcrumbs items={breadcrumbItems} />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Shift Work Planner
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Plan your sleep schedule around non-traditional work hours for better rest.
        </p>

        <ShiftWorkPlanner />
        
        <div className="mt-12">
          <AdPlaceholder position="content" />
        </div>

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Tips for Shift Workers</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
              <li>Maintain a consistent sleep schedule, even on days off</li>
              <li>Create a dark, quiet sleep environment during daytime hours</li>
              <li>Use blackout curtains to block sunlight</li>
              <li>Consider using white noise or earplugs to block daytime noise</li>
              <li>Stay hydrated and eat balanced meals to maintain energy levels</li>
            </ul>
          </section>

          <FAQ items={faqItems} title="Frequently Asked Questions" />
          
          <Disclaimer />
        </div>
      </div>
    </div>
  );
}
