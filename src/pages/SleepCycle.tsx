import { useState } from 'react';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import SleepCycleCalculator from '../components/calculators/SleepCycleCalculator';
import AdPlaceholder from '../components/ui/AdPlaceholder';
import FAQ from '../components/ui/FAQ';
import Disclaimer from '../components/ui/Disclaimer';

const faqItems = [
  {
    question: 'What is a sleep cycle?',
    answer: 'A sleep cycle is a 90-minute pattern of brain activity that repeats throughout the night. Each cycle includes stages of light sleep, deep sleep, and REM sleep. Waking up at the end of a cycle tends to leave you feeling more refreshed.'
  },
  {
    question: 'Are sleep cycles exactly 90 minutes?',
    answer: 'While the average sleep cycle lasts about 90 minutes, they can vary between 70-120 minutes depending on the individual and time of night. Early cycles tend to have more deep sleep, while later cycles have more REM sleep.'
  },
  {
    question: 'How many sleep cycles should I aim for?',
    answer: 'Most adults need 4-6 complete sleep cycles per night, which corresponds to 6-9 hours of sleep. Getting 5 complete cycles (7.5 hours) is often recommended for optimal rest.'
  }
];

export default function SleepCycle() {
  const breadcrumbItems = [
    { label: 'Calculators', path: '/calculators' },
    { label: 'Sleep Cycle Calculator', path: '/calculators/sleep-cycle', current: true },
  ];

  return (
    <div className="container-custom py-8">
      <Breadcrumbs items={breadcrumbItems} />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Sleep Cycle Calculator
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Plan your sleep schedule around natural sleep cycles to wake up feeling refreshed and energized.
        </p>

        <SleepCycleCalculator />
        
        <div className="mt-12">
          <AdPlaceholder position="content" />
        </div>

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              The sleep cycle calculator works by counting backward from your desired wake time in 90-minute intervals, 
              representing complete sleep cycles. It also accounts for the time it typically takes to fall asleep (sleep latency).
              This approach helps you wake up at the end of a sleep cycle when your body is in the lightest sleep stage,
              making you feel more refreshed than waking up during deep sleep.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Important Notes</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
              <li>Sleep cycle lengths vary between 70-120 minutes</li>
              <li>The calculator provides estimates, not guarantees</li>
              <li>Individual sleep needs and patterns differ</li>
              <li>Consider this a guide for planning rather than a prescription</li>
            </ul>
          </section>

          <FAQ items={faqItems} title="Frequently Asked Questions" />
          
          <Disclaimer />
        </div>
      </div>
    </div>
  );
}
