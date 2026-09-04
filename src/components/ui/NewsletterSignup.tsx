import { useState } from 'react';
import { Send } from 'lucide-react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In production, this would send to a newsletter service
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="card text-center">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
        Get Sleep Tips & Updates
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
        Subscribe to receive science-based sleep tips and new calculator releases.
      </p>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="input-field flex-1"
            required
            aria-label="Email address for newsletter"
          />
          <button type="submit" className="btn-primary flex-shrink-0">
            <Send className="w-4 h-4 mr-2" aria-hidden="true" />
            Subscribe
          </button>
        </div>
        {submitted && (
          <p className="mt-3 text-sm text-green-600 dark:text-green-400 animate-fade-in">
            ✓ Thank you for subscribing!
          </p>
        )}
        <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
          No spam. Unsubscribe anytime.
        </p>
      </form>
    </div>
  );
}
