import { Link } from 'react-router-dom';
import { Clock, Brain, Heart, Moon, Sun, Coffee, Calendar, Users } from 'lucide-react';
import ArticleCard from '../../components/ui/ArticleCard';

const educationTopics = [
  {
    id: 'sleep-cycles',
    title: 'Understanding Sleep Cycles',
    description: 'Learn about the stages of sleep and how they affect your rest.',
    icon: Brain,
    readTime: 5,
    category: 'Sleep Science',
    path: '/education/sleep-cycles',
  },
  {
    id: 'sleep-hygiene',
    title: 'Sleep Hygiene Principles',
    description: 'Discover habits and practices that promote better sleep quality.',
    icon: Heart,
    readTime: 7,
    category: 'Sleep Wellness',
    path: '/education/sleep-hygiene',
  },
  {
    id: 'sleep-schedule',
    title: 'Building a Sleep Schedule',
    description: 'How to create and maintain a consistent sleep routine.',
    icon: Calendar,
    readTime: 6,
    category: 'Sleep Planning',
    path: '/education/sleep-schedule',
  },
  {
    id: 'caffeine-sleep',
    title: 'Caffeine and Sleep',
    description: 'Understanding how caffeine affects your sleep quality.',
    icon: Coffee,
    readTime: 4,
    category: 'Lifestyle',
    path: '/education/caffeine-sleep',
  },
  {
    id: 'sleep-myths',
    title: 'Common Sleep Myths',
    description: 'Separating sleep facts from fiction with scientific evidence.',
    icon: Moon,
    readTime: 6,
    category: 'Sleep Science',
    path: '/education/sleep-myths',
  },
  {
    id: 'screen-time',
    title: 'Screens and Sleep',
    description: 'How blue light affects your sleep and what to do about it.',
    icon: Sun,
    readTime: 5,
    category: 'Technology',
    path: '/education/screen-time',
  },
  {
    id: 'exercise-sleep',
    title: 'Exercise and Sleep',
    description: 'The relationship between physical activity and sleep quality.',
    icon: Heart,
    readTime: 5,
    category: 'Lifestyle',
    path: '/education/exercise-sleep',
  },
  {
    id: 'travel-sleep',
    title: 'Traveling and Sleep',
    description: 'Tips for maintaining sleep quality while traveling.',
    icon: Users,
    readTime: 4,
    category: 'Travel',
    path: '/education/travel-sleep',
  },
  {
    id: 'shift-work',
    title: 'Shift Work and Sleep',
    description: 'Strategies for sleeping well when working non-traditional hours.',
    icon: Clock,
    readTime: 6,
    category: 'Work & Sleep',
    path: '/education/shift-work',
  },
  {
    id: 'children-sleep',
    title: 'Children and Sleep',
    description: 'Understanding sleep needs and patterns for children of all ages.',
    icon: Users,
    readTime: 7,
    category: 'Family',
    path: '/education/children-sleep',
  },
];

export default function EducationIndex() {
  return (
    <div className="container-custom py-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Sleep Education
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-4 max-w-2xl mx-auto">
          Evidence-based articles and resources to help you understand and improve your sleep.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-500 text-center mb-12">
          All content is reviewed and sourced from reputable sleep research
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationTopics.map((topic) => (
            <ArticleCard
              key={topic.id}
              title={topic.title}
              description={topic.description}
              path={topic.path}
              readTime={topic.readTime}
              category={topic.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
