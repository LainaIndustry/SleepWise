import Breadcrumbs from '../components/ui/Breadcrumbs';
import SleepDiaryComponent from '../components/calculators/SleepDiary';
import FAQ from '../components/ui/FAQ';
import Disclaimer from '../components/ui/Disclaimer';
import AdPlaceholder from '../components/ui/AdPlaceholder';

const faqItems = [
  {
    question: 'Is my sleep diary data private?',
    answer: 'Yes, all sleep diary data is stored locally in your browser using localStorage. No data is sent to any server, and no one else can access your sleep records.'
  },
  {
    question: 'Can I export my sleep diary data?',
    answer: 'Yes, you can export your sleep diary data as a CSV file for analysis in spreadsheet applications or to share with your healthcare provider.'
  },
  {
    question: 'How long should I keep a sleep diary?',
    answer: 'Keeping a sleep diary for at least 2-4 weeks can provide valuable insights into your sleep patterns. Many people find it helpful to continue tracking long-term.'
  }
];

export default function SleepDiary() {
  const breadcrumbItems = [
    { label: 'Tools', path: '/tools' },
    { label: 'Sleep Diary', path: '/tools/sleep-diary', current: true },
  ];

  return (
    <div className="container-custom py-8">
      <Breadcrumbs items={breadcrumbItems} />
      
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Sleep Diary
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Track your sleep patterns, identify trends, and improve your sleep hygiene.
        </p>

        <SleepDiaryComponent />
        
        <div className="mt-12">
          <AdPlaceholder position="content" />
        </div>

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">How to Use the Sleep Diary</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
              <li>Enter your bedtime, estimated sleep time, and wake time for each day</li>
              <li>Track how many times you woke up during the night</li>
              <li>Rate your sleep quality from 1 (very poor) to 5 (excellent)</li>
              <li>Add notes about factors that may have affected your sleep</li>
              <li>Review your weekly summary to identify patterns</li>
            </ul>
          </section>

          <FAQ items={faqItems} title="Frequently Asked Questions" />
          
          <Disclaimer />
        </div>
      </div>
    </div>
  );
}
