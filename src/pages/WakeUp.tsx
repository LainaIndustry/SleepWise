import { useState } from 'react';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import WakeUpCalculator from '../components/calculators/WakeUpCalculator';
import FAQ from '../components/ui/FAQ';
import Disclaimer from '../components/ui/Disclaimer';
import AdPlaceholder from '../components/ui/AdPlaceholder';

const faqItems = [
  {
    question: 'How do I choose the right wake-up time?',
    answer: 'The ideal wake-up time depends on when you go to bed and how many sleep cycles you want to complete. Waking up at the end of a sleep cycle (in 90-minute increments from your bedtime) typically leaves you feeling more refreshed.'
  },
  {
    question: 'What if I wake up before my calculated wake time?',
    answer: 'If you wake up naturally before your calculated wake time, it often means your body is ready to wake up. Consider getting up rather than trying to go back to sleep, especially if you\'re near the end of a sleep cycle.'
  },
  {
    question: 'Can I train myself to wake up at a specific time?',
    answer: 'Yes, with consistent practice. Your body\'s internal clock (circadian rhythm) can be trained to wake at specific times through consistent sleep schedules and morning light exposure.'
  }
];

export default function WakeUp() {
  const breadcrumbItems = [
    { label: 'Calculators', path: '/calculators' },
    { label: 'Wake-Up Time Calculator', path: '/calculators/wake-up', current: true },
  ];

  return (
    <div className="container-custom py-8">
      <Breadcrumbs items={breadcrumbItems} />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Wake-Up Time Calculator
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Find the optimal wake-up times based on your bedtime and sleep cycles.
        </p>

        <WakeUpCalculator />
        
        <div className="mt-12">
          <AdPlaceholder position="content" />
        </div>

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              The wake-up time calculator works by adding 90-minute sleep cycles to your bedtime,
              accounting for the time it takes to fall asleep. It provides multiple wake-up options
              so you can choose the one that best fits your schedule and sleep needs.
            </p>
          </section>

          <FAQ items={faqItems} title="Frequently Asked Questions" />
          
          <Disclaimer />
        </div>
      </div>
    </div>
  );
}
