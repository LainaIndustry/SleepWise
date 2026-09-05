import { FAQ } from '../types';

export const faqs: FAQ[] = [
  {
    id: 'sleep-needs',
    question: 'How much sleep do adults need?',
    answer: 'The National Sleep Foundation recommends 7-9 hours of sleep per night for adults aged 18-64. However, individual needs can vary from 6-10 hours depending on genetics, lifestyle, and overall health.',
    category: 'General'
  },
  {
    id: 'best-bedtime',
    question: 'What is the best time to go to sleep?',
    answer: 'The best time to go to sleep depends on your natural circadian rhythm and your wake-up time. Generally, going to sleep between 10 PM and 12 AM aligns well with most people\'s natural sleep-wake cycle.',
    category: 'Sleep Timing'
  },
  {
    id: 'fall-asleep-faster',
    question: 'How can I fall asleep faster?',
    answer: 'To fall asleep faster, try: maintaining a consistent sleep schedule, creating a relaxing bedtime routine, avoiding screens 1 hour before bed, keeping your bedroom cool and dark, and avoiding caffeine and heavy meals close to bedtime.',
    category: 'Tips'
  },
  {
    id: 'sleep-apnea',
    question: 'What is sleep apnea?',
    answer: 'Sleep apnea is a sleep disorder characterized by repeated pauses in breathing during sleep. Common symptoms include loud snoring, gasping for air during sleep, and excessive daytime sleepiness. Consult a healthcare professional if you suspect sleep apnea.',
    category: 'Disorders'
  },
  {
    id: 'caffeine-sleep',
    question: 'How does caffeine affect sleep?',
    answer: 'Caffeine blocks adenosine receptors in the brain, which can delay sleep onset and reduce sleep quality. Caffeine has a half-life of about 5-6 hours, meaning it can affect your sleep if consumed up to 6 hours before bedtime.',
    category: 'Lifestyle'
  },
  {
    id: 'sleep-cycles',
    question: 'What are sleep cycles and why do they matter?',
    answer: 'Sleep cycles are 90-minute patterns of brain activity that repeat throughout the night. Each cycle includes light sleep, deep sleep, and REM sleep. Understanding sleep cycles can help you time your sleep to wake up feeling more refreshed.',
    category: 'Sleep Science'
  },
  {
    id: 'napping',
    question: 'Is it bad to take naps?',
    answer: 'Napping can be beneficial if done correctly. Short naps (15-20 minutes) can improve alertness without causing grogginess. However, naps taken too late in the day or too long can interfere with nighttime sleep.',
    category: 'Sleep Timing'
  },
  {
    id: 'exercise-sleep',
    question: 'How does exercise affect sleep?',
    answer: 'Regular exercise can improve sleep quality and duration by reducing stress and anxiety. However, vigorous exercise close to bedtime can be stimulating. Aim to finish moderate to intense exercise at least 2 hours before bed.',
    category: 'Lifestyle'
  },
  {
    id: 'melatonin',
    question: 'Is melatonin supplementation safe?',
    answer: 'Melatonin supplements can be helpful for some people, particularly for jet lag or shift work. However, they should be used with caution and under medical supervision, especially for long-term use.',
    category: 'Supplements'
  },
  {
    id: 'screen-time',
    question: 'How do screens affect sleep?',
    answer: 'Screens emit blue light that suppresses melatonin production, making it harder to fall asleep. The content can also be mentally stimulating. Try to stop using screens 1-2 hours before bedtime.',
    category: 'Lifestyle'
  },
  {
    id: 'insomnia',
    question: 'What should I do if I have insomnia?',
    answer: 'If you experience persistent insomnia, first try improving your sleep hygiene and creating a consistent routine. If symptoms persist for more than 2-4 weeks, consult a healthcare professional for proper evaluation and treatment.',
    category: 'Disorders'
  },
  {
    id: 'weekend-sleep',
    question: 'Is it okay to sleep more on weekends?',
    answer: 'While sleeping in on weekends can help catch up on some sleep debt, it\'s better to maintain a consistent schedule. Large changes in sleep times can disrupt your circadian rhythm and make Monday mornings harder.',
    category: 'Sleep Timing'
  }
];

export const getFAQsByCategory = (category: string): FAQ[] => {
  return faqs.filter(faq => faq.category === category);
};

export const getFAQById = (id: string): FAQ | undefined => {
  return faqs.find(faq => faq.id === id);
};
