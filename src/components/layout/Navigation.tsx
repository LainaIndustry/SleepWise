import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const navItems = [
  {
    label: 'Calculators',
    path: '/calculators',
    children: [
      { label: 'Sleep Cycle', path: '/calculators/sleep-cycle' },
      { label: 'Bedtime', path: '/calculators/bedtime' },
      { label: 'Wake-Up Time', path: '/calculators/wake-up' },
      { label: 'Sleep Duration', path: '/calculators/sleep-duration' },
      { label: 'Sleep Debt', path: '/calculators/sleep-debt' },
      { label: 'Nap', path: '/calculators/nap' },
      { label: 'Jet Lag', path: '/calculators/jet-lag' },
      { label: 'Shift Work', path: '/calculators/shift-work' },
    ],
  },
  {
    label: 'Tools',
    path: '#',
    children: [
      { label: 'Sleep Diary', path: '/tools/sleep-diary' },
      { label: 'Sleep Consistency', path: '/tools/sleep-consistency' },
    ],
  },
  { label: 'Education', path: '/education' },
  { label: 'FAQ', path: '/faq' },
  { label: 'About', path: '/about' },
];

export default function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '#') return false;
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <ul className="flex items-center space-x-1">
      {navItems.map((item) => (
        <li key={item.label} className="relative group">
          {item.children ? (
            <button
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActive(item.path) || item.children.some(child => isActive(child.path))
                  ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/30'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
              aria-haspopup="true"
              aria-expanded="false"
            >
              {item.label}
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>
          ) : (
            <Link
              to={item.path}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActive(item.path)
                  ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/30'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              {item.label}
            </Link>
          )}

          {item.children && (
            <div className="absolute left-0 mt-2 w-56 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
              <div className="py-2">
                {item.children.map((child) => (
                  <Link
                    key={child.path}
                    to={child.path}
                    className={`block px-4 py-2 text-sm transition-colors ${
                      isActive(child.path)
                        ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/30'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
