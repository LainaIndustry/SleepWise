import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CalculatorCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  path: string;
  featured?: boolean;
}

export default function CalculatorCard({ title, description, icon, path, featured = false }: CalculatorCardProps) {
  return (
    <Link
      to={path}
      className={`block card card-hover ${featured ? 'border-primary-300 dark:border-primary-700 bg-primary-50/50 dark:bg-primary-950/20' : ''}`}
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center text-2xl">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
            {description}
          </p>
          <div className="mt-3 flex items-center text-sm font-medium text-primary-600 dark:text-primary-400">
            Calculate Now
            <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
          </div>
        </div>
      </div>
    </Link>
  );
}
