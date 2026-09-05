import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';

interface ArticleCardProps {
  title: string;
  description: string;
  path: string;
  readTime: number;
  category: string;
}

export default function ArticleCard({ title, description, path, readTime, category }: ArticleCardProps) {
  return (
    <Link
      to={path}
      className="block card card-hover"
    >
      <div className="mb-2">
        <span className="text-xs font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/30 px-3 py-1 rounded-full">
          {category}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
        {description}
      </p>
      <div className="flex items-center text-xs text-gray-500 dark:text-gray-500">
        <Clock className="w-4 h-4 mr-1" aria-hidden="true" />
        {readTime} min read
      </div>
    </Link>
  );
}
