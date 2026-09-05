import { Link } from 'react-router-dom';
import { BookOpen, Clock, Brain, Heart, Moon, Sun, Coffee, Calendar } from 'lucide-react';

const educationTopics = [
  {
    id: 'sleep-cycles',
    title: 'Understanding Sleep Cycles',
    description: 'Learn about the stages of sleep and how they affect your rest.',
    icon: <Brain className="w-6 h-6" />,
    readTime: 5,
  },
  {
    id: 'sleep-hygiene',
    title: 'Sleep Hygiene Principles',
    description: 'Discover habits and practices that promote better sleep quality.',
    icon: <Heart className="w-6 h-6" />,
    readTime: 7,
  },
  {
    id: 'sleep-schedule',
    title: 'Building a Sleep Schedule',
    description: 'How to create and maintain a consistent sleep routine.',
    icon: <Calendar className="w-6 h-6" />,
    readTime: 6,
  },
  {
    id: 'caffeine-sleep',
    title: 'Caffeine and Sleep',
    description: 'Understanding how caffeine affects your sleep quality.',
    icon: <Coffee className="w-6 h-6" />,
    readTime: 4,
  },
  {
    id: 'sleep-myths',
    title: 'Common Sleep Myths',
    description: 'Separating sleep facts from fiction with scientific evidence.',
    icon: <Moon className="w-6 h-6" />,
    readTime: 6,
  },
  {
    id: 'screen-time',
    title: 'Screens and Sleep',
    description: 'How blue light affects your sleep and what to do about it.',
    icon: <Sun className="w-6 h-6" />,
    readTime: 5,
  },
  {
    id: 'exercise-sleep',
    title: 'Exercise and Sleep',
    description: 'The relationship between physical activity and sleep quality.',
    icon: <Heart className="w-6 h-6" />,
    readTime: 5,
  },
  {
    id: 'travel-sleep',
    title: 'Traveling and Sleep',
    description: 'Tips for maintaining sleep quality while traveling.',
    icon: <Clock className="w-6 h-6" />,
    readTime: 4,
  },
];

export default function SleepEducation() {
  return (
    <div className="container-custom py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Sleep Education</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Evidence-based articles and resources to help you understand and improve your sleep.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationTopics.map((topic) => (
            <Link
              key={topic.id}
              to={`/education/${topic.id}`}
              className="card card-hover"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center text-primary-600 dark:text-primary-400">
                  {topic.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
                    {topic.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {topic.description}
                  </p>
                  <div className="mt-3 flex items-center text-xs text-gray-500 dark:text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {topic.readTime} min read
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
