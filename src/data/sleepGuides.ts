import { SleepGuide } from '../types';

export const sleepGuides: SleepGuide[] = [
  {
    id: 'sleep-cycles-guide',
    title: 'Understanding Sleep Cycles',
    description: 'A comprehensive guide to sleep cycles and how to use them for better rest',
    category: 'Sleep Science',
    readTime: 8,
    path: '/education/sleep-cycles',
    featured: true
  },
  {
    id: 'sleep-hygiene-guide',
    title: 'The Ultimate Sleep Hygiene Guide',
    description: 'Practical tips and strategies for creating optimal sleep conditions',
    category: 'Sleep Wellness',
    readTime: 10,
    path: '/education/sleep-hygiene',
    featured: true
  },
  {
    id: 'sleep-schedule-guide',
    title: 'How to Build a Sleep Schedule',
    description: 'Step-by-step guide to creating and maintaining a consistent sleep routine',
    category: 'Sleep Planning',
    readTime: 6,
    path: '/education/sleep-schedule',
    featured: false
  },
  {
    id: 'nap-guide',
    title: 'The Art of Napping',
    description: 'Everything you need to know about napping for optimal rest',
    category: 'Sleep Timing',
    readTime: 5,
    path: '/education/napping',
    featured: false
  },
  {
    id: 'jet-lag-guide',
    title: 'Managing Jet Lag',
    description: 'Strategies to minimize jet lag and adjust to new time zones quickly',
    category: 'Travel',
    readTime: 7,
    path: '/education/jet-lag',
    featured: false
  },
  {
    id: 'shift-work-guide',
    title: 'Sleeping Well as a Shift Worker',
    description: 'Practical strategies for getting quality sleep when working non-traditional hours',
    category: 'Work & Sleep',
    readTime: 8,
    path: '/education/shift-work',
    featured: false
  },
  {
    id: 'children-sleep-guide',
    title: 'Children and Sleep',
    description: 'Understanding sleep needs and creating routines for children',
    category: 'Family',
    readTime: 9,
    path: '/education/children-sleep',
    featured: false
  },
  {
    id: 'teen-sleep-guide',
    title: 'Teen Sleep Guide',
    description: 'Navigating sleep challenges during the teenage years',
    category: 'Family',
    readTime: 7,
    path: '/education/teen-sleep',
    featured: false
  },
  {
    id: 'adult-sleep-guide',
    title: 'Adult Sleep Wellness',
    description: 'Maintaining healthy sleep habits through adulthood',
    category: 'Sleep Wellness',
    readTime: 6,
    path: '/education/adult-sleep',
    featured: false
  },
  {
    id: 'sleep-myths-guide',
    title: 'Debunking Sleep Myths',
    description: 'Separating fact from fiction about sleep',
    category: 'Sleep Science',
    readTime: 6,
    path: '/education/sleep-myths',
    featured: false
  }
];

export const getFeaturedGuides = (): SleepGuide[] => {
  return sleepGuides.filter(guide => guide.featured);
};

export const getGuidesByCategory = (category: string): SleepGuide[] => {
  return sleepGuides.filter(guide => guide.category === category);
};

export const getGuideById = (id: string): SleepGuide | undefined => {
  return sleepGuides.find(guide => guide.id === id);
};
