import { useState } from 'react';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import SleepDurationCalculator from '../components/calculators/SleepDurationCalculator';
import FAQ from '../components/ui/FAQ';
import Disclaimer from '../components/ui/Disclaimer';
import AdPlaceholder from '../components/ui/AdPlaceholder';

const faqItems = [
  {
    question: 'How do I calculate my sleep duration?',
    answer: 'Sleep duration is calculated by subtracting your bedtime from your wake-up time. If you go to bed after midnight, the calculator handles that automatically by adding 24 hours to the calculation.'
  },
  {
    question: 'What is a healthy sleep duration?',
    answer: 'The National Sleep Foundation recommends 7-9 hours for adults, 8-10 hours for teenagers, and 9-11 hours for school-aged children. Individual needs may vary.'
  },
  {
    question: 'Why does my sleep duration vary?',
    answer: 'Sleep duration can vary due to many factors including stress, illness, physical activity, caffeine intake, alcohol consumption, and changes in your daily routine.'
  }
];

export default function SleepDuration() {
  const breadcrumbItems = [
    { label: 'Calculators', path: '/calculators' },
    { label: 'Sleep Duration Calculator', path: '/calculators/sleep-duration', current: true },
  ];

  return (
    <div className="container-custom py-8">
      <Breadcrumbs items={breadcrumbItems} />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Sleep Duration Calculator
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Calculate exactly how long you slept by entering your bedtime and wake-up time.
        </p>

        <SleepDurationCalculator />
        
        <div className="mt-12">
          <AdPlaceholder position="content" />
        </div>

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              The sleep duration calculator subtracts your bedtime from your wake-up time to determine 
              your total sleep duration. It automatically accounts for times that cross midnight, 
              ensuring accurate results regardless of when you go to sleep or wake up.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Understanding Your Results</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
              <li><strong>Total Hours:</strong> Your complete sleep duration in hours</li>
              <li><strong>Total Minutes:</strong> Your sleep duration in minutes for more precise tracking</li>
              <li><strong>Decimal Hours:</strong> Useful for tracking sleep averages over time</li>
            </ul>
          </section>

          <FAQ items={faqItems} title="Frequently Asked Questions" />
          
          <Disclaimer />
        </div>
      </div>
    </div>
  );
}
