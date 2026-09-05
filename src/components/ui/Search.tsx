import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search as SearchIcon, X } from 'lucide-react';
import { calculators } from '../../data/calculators';
import { sleepGuides } from '../../data/sleepGuides';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  path: string;
  type: 'calculator' | 'guide';
}

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.trim().length >= 2) {
      const searchTerm = query.toLowerCase().trim();
      
      const calcResults = calculators
        .filter(calc => 
          calc.title.toLowerCase().includes(searchTerm) ||
          calc.description.toLowerCase().includes(searchTerm)
        )
        .map(calc => ({
          id: calc.id,
          title: calc.title,
          description: calc.description,
          path: calc.path,
          type: 'calculator' as const,
        }));

      const guideResults = sleepGuides
        .filter(guide =>
          guide.title.toLowerCase().includes(searchTerm) ||
          guide.description.toLowerCase().includes(searchTerm)
        )
        .map(guide => ({
          id: guide.id,
          title: guide.title,
          description: guide.description,
          path: guide.path,
          type: 'guide' as const,
        }));

      setResults([...calcResults, ...guideResults].slice(0, 8));
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  const clearSearch = () => {
    setQuery('');
    setIsOpen(false);
  };

  return (
    <div ref={searchRef} className="relative">
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" aria-hidden="true" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search calculators and guides..."
          className="w-full pl-10 pr-10 py-2 bg-gray-100 dark:bg-gray-800 border-2 border-transparent rounded-lg focus:border-primary-500 focus:bg-white dark:focus:bg-gray-900 transition-all duration-200 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
          aria-label="Search"
          onFocus={() => query.trim().length >= 2 && setIsOpen(true)}
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors"
            aria-label="Clear search"
          >
            <X className="w-4 h-4 text-gray-400" />
          </button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden z-50 max-h-96 overflow-y-auto">
          <div className="p-2">
            {results.map((result) => (
              <Link
                key={result.id}
                to={result.path}
                onClick={clearSearch}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <div className="flex-shrink-0">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    result.type === 'calculator'
                      ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400'
                  }`}>
                    {result.type}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-gray-900 dark:text-gray-100">
                    {result.title}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 truncate">
                    {result.description}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
