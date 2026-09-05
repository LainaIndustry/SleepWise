import { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

interface CookieConsentProps {
  onAccept?: () => void;
  onDecline?: () => void;
}

export default function CookieConsent({ onAccept, onDecline }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
    if (onAccept) onAccept();
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
    if (onDecline) onDecline();
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-2xl animate-slide-up"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="container-custom py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                We use cookies to enhance your experience. By continuing to visit this site, 
                you agree to our use of cookies.
              </p>
              <div className="flex gap-4 mt-1">
                <a href="/cookie-policy" className="text-xs text-primary-600 dark:text-primary-400 hover:underline">
                  Learn more
                </a>
                <a href="/privacy-policy" className="text-xs text-primary-600 dark:text-primary-400 hover:underline">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <button
              onClick={handleDecline}
              className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="btn-primary text-sm px-6 py-2"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
