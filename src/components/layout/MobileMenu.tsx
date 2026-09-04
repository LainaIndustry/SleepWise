import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { label: 'Home', path: '/' },
  { label: 'All Calculators', path: '/calculators' },
  { label: 'Sleep Cycle', path: '/calculators/sleep-cycle' },
  { label: 'Bedtime', path: '/calculators/bedtime' },
  { label: 'Wake-Up Time', path: '/calculators/wake-up' },
  { label: 'Sleep Duration', path: '/calculators/sleep-duration' },
  { label: 'Sleep Debt', path: '/calculators/sleep-debt' },
  { label: 'Nap', path: '/calculators/nap' },
  { label: 'Jet Lag', path: '/calculators/jet-lag' },
  { label: 'Shift Work', path: '/calculators/shift-work' },
  { label: 'Sleep Diary', path: '/tools/sleep-diary' },
  { label: 'Sleep Consistency', path: '/tools/sleep-consistency' },
  { label: 'Education', path: '/education' },
  { label: 'FAQ', path: '/faq' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      id="mobile-menu"
      className="lg:hidden fixed inset-0 top-16 bg-white dark:bg-gray-950 z-40 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
    >
      <nav className="container-custom py-6" aria-label="Mobile navigation">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/30'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
                onClick={onClose}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <Link to="/privacy-policy" onClick={onClose} className="hover:text-primary-600 dark:hover:text-primary-400">
              Privacy Policy
            </Link>
            <Link to="/terms-of-use" onClick={onClose} className="hover:text-primary-600 dark:hover:text-primary-400">
              Terms of Use
            </Link>
            <Link to="/disclaimer" onClick={onClose} className="hover:text-primary-600 dark:hover:text-primary-400">
              Disclaimer
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
