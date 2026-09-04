import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { Breadcrumb } from '../../types';

interface BreadcrumbsProps {
  items: Breadcrumb[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4 text-sm">
      <ol className="flex items-center flex-wrap space-x-2">
        <li>
          <Link to="/" className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors flex items-center">
            <Home className="w-4 h-4" aria-hidden="true" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="w-4 h-4 text-gray-400 dark:text-gray-600" aria-hidden="true" />
            {item.current ? (
              <span className="ml-2 text-gray-700 dark:text-gray-300 font-medium" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link
                to={item.path}
                className="ml-2 text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
