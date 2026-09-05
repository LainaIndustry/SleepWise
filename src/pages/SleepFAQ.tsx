import FAQ from '../components/ui/FAQ';

const faqItems = [
  {
    question: 'How much sleep do adults need?',
    answer: 'The National Sleep Foundation recommends 7-9 hours of sleep per night for adults aged 18-64. However, individual needs can vary from 6-10 hours depending on genetics, lifestyle, and overall health.'
  },
  {
    question: 'What is the best time to go to sleep?',
    answer: 'The best time to go to sleep depends on your natural circadian rhythm and your wake-up time. Generally, going to sleep between 10 PM and 12 AM aligns well with most people\'s natural sleep-wake cycle.'
  },
  {
    question: 'How can I fall asleep faster?',
    answer: 'To fall asleep faster, try: maintaining a consistent sleep schedule, creating a relaxing bedtime routine, avoiding screens 1 hour before bed, keeping your bedroom cool and dark, and avoiding caffeine and heavy meals close to bedtime.'
  },
  {
    question: 'What is sleep apnea?',
    answer: 'Sleep apnea is a sleep disorder characterized by repeated pauses in breathing during sleep. Common symptoms include loud snoring, gasping for air during sleep, and excessive daytime sleepiness. Consult a healthcare professional if you suspect sleep apnea.'
  },
  {
    question: 'How does caffeine affect sleep?',
    answer: 'Caffeine blocks adenosine receptors in the brain, which can delay sleep onset and reduce sleep quality. Caffeine has a half-life of about 5-6 hours, meaning it can affect your sleep if consumed up to 6 hours before bedtime.'
  },
  {
    question: 'What are sleep cycles and why do they matter?',
    answer: 'Sleep cycles are 90-minute patterns of brain activity that repeat throughout the night. Each cycle includes light sleep, deep sleep, and REM sleep. Understanding sleep cycles can help you time your sleep to wake up feeling more refreshed.'
  },
  {
    question: 'Is it bad to take naps?',
    answer: 'Napping can be beneficial if done correctly. Short naps (15-20 minutes) can improve alertness without causing grogginess. However, naps taken too late in the day or too long can interfere with nighttime sleep.'
  },
  {
    question: 'How does exercise affect sleep?',
    answer: 'Regular exercise can improve sleep quality and duration by reducing stress and anxiety. However, vigorous exercise close to bedtime can be stimulating. Aim to finish moderate to intense exercise at least 2 hours before bed.'
  }
];

export default function SleepFAQ() {
  return (
    <div className="container-custom py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-8 max-w-2xl mx-auto">
          Common questions about sleep, sleep cycles, calculators, and sleep wellness.
        </p>

        <FAQ items={faqItems} title="" />
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Don't see your question? <a href="/contact" className="text-primary-600 dark:text-primary-400 hover:underline">Contact us</a>
          </p>
        </div>
      </div>
    </div>
  );
}
