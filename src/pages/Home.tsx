import { Link } from 'react-router-dom';
import { ArrowRight, Moon, Sun, Clock, Brain, Calendar, Coffee, Plane, Users } from 'lucide-react';
import CalculatorCard from '../components/ui/CalculatorCard';
import FAQ from '../components/ui/FAQ';
import NewsletterSignup from '../components/ui/NewsletterSignup';
import Disclaimer from '../components/ui/Disclaimer';
import AdPlaceholder from '../components/ui/AdPlaceholder';

const popularCalculators = [
  {
    id: 'sleep-cycle',
    title: 'Sleep Cycle Calculator',
    description: 'Find optimal sleep and wake times based on your sleep cycles.',
    icon: '🔄',
    path: '/calculators/sleep-cycle',
    featured: true,
  },
  {
    id: 'bedtime',
    title: 'Bedtime Calculator',
    description: 'Calculate the best time to go to sleep based on your wake-up time.',
    icon: '😴',
    path: '/calculators/bedtime',
    featured: true,
  },
  {
    id: 'wake-up',
    title: 'Wake-Up Time Calculator',
    description: 'Plan your wake-up time to feel refreshed and energized.',
    icon: '⏰',
    path: '/calculators/wake-up',
    featured: true,
  },
  {
    id: 'nap',
    title: 'Nap Calculator',
    description: 'Time your nap to wake up feeling refreshed, not groggy.',
    icon: '💤',
    path: '/calculators/nap',
    featured: false,
  },
  {
    id: 'sleep-debt',
    title: 'Sleep Debt Calculator',
    description: 'Track your sleep debt and find ways to catch up.',
    icon: '📊',
    path: '/calculators/sleep-debt',
    featured: false,
  },
  {
    id: 'jet-lag',
    title: 'Jet Lag Calculator',
    description: 'Plan your sleep schedule to minimize jet lag during travel.',
    icon: '✈️',
    path: '/calculators/jet-lag',
    featured: false,
  },
];

const features = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'Evidence-Based',
    description: 'Our tools are based on sleep science and circadian rhythm research.',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Personalized Results',
    description: 'Get recommendations tailored to your age, schedule, and preferences.',
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: 'Plan Your Week',
    description: 'Create weekly sleep schedules and track your consistency.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'For Everyone',
    description: 'Tools for adults, teens, children, shift workers, and travelers.',
  },
];

const faqItems = [
  {
    question: 'How do sleep calculators work?',
    answer: 'Sleep calculators use established sleep science, including the average 90-minute sleep cycle and typical sleep latency, to estimate optimal bedtimes and wake times. They provide personalized recommendations based on your inputs.'
  },
  {
    question: 'Are sleep calculators accurate?',
    answer: 'Sleep calculators provide estimates based on average sleep patterns. Individual sleep needs vary, and these tools should be used as general guides rather than strict prescriptions. Always listen to your body\'s natural rhythms.'
  },
  {
    question: 'How many hours of sleep do adults need?',
    answer: 'The National Sleep Foundation recommends 7-9 hours of sleep per night for healthy adults. However, individual needs can range from 6-10 hours depending on genetics, age, and lifestyle factors.'
  },
  {
    question: 'What is a sleep cycle?',
    answer: 'A sleep cycle is a 90-minute pattern of brain activity that repeats throughout the night. It includes stages of light sleep, deep sleep, and REM sleep. Waking up at the end of a sleep cycle tends to leave you feeling more refreshed.'
  }
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 sleep-gradient-light dark:opacity-10"></div>
        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-6">
              Plan Better Sleep With{' '}
              <span className="bg-gradient-to-r from-primary-500 to-indigo-500 bg-clip-text text-transparent">
                Smart Sleep Calculators
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              Evidence-based sleep tools and calculators to help you understand your sleep patterns, 
              find optimal bedtimes, and wake up feeling refreshed.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/calculators" className="btn-primary w-full sm:w-auto">
                Calculate My Sleep
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/education" className="btn-secondary w-full sm:w-auto">
                Explore Sleep Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Calculators */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Popular Sleep Calculators
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Choose from our collection of science-based sleep tools designed to help you rest better.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularCalculators.map((calc) => (
              <CalculatorCard key={calc.id} {...calc} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Why SleepWise?
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            We combine sleep science with user-friendly tools to help you improve your sleep health.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex p-4 bg-primary-100 dark:bg-primary-900/30 rounded-2xl text-primary-600 dark:text-primary-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Placement */}
      <div className="container-custom py-8">
        <AdPlaceholder position="content" />
      </div>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="container-custom">
          <FAQ items={faqItems} title="Frequently Asked Questions" />
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div className="container-custom">
          <NewsletterSignup />
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8">
        <div className="container-custom">
          <Disclaimer />
        </div>
      </section>
    </div>
  );
}
