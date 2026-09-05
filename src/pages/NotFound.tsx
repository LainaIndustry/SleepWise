import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl mb-6">😴</div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary">
            <Home className="w-5 h-5 mr-2" aria-hidden="true" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn-secondary"
          >
            <ArrowLeft className="w-5 h-5 mr-2" aria-hidden="true" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
