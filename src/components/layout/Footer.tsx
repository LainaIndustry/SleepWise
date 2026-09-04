import { Link } from 'react-router-dom';
import { Heart, Github, Twitter, Mail, Moon } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 border-t border-gray-800" role="contentinfo">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Moon className="w-6 h-6 text-primary-400" aria-hidden="true" />
              <span className="font-display text-xl font-bold text-white">SleepWise</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Smart sleep calculators and evidence-based sleep education for better rest and wellness.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://twitter.com/sleepwise"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/sleepwise"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="View us on GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@sleepwise.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email us"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Calculators</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/calculators/sleep-cycle" className="text-gray-400 hover:text-primary-400 transition-colors">Sleep Cycle</Link></li>
              <li><Link to="/calculators/bedtime" className="text-gray-400 hover:text-primary-400 transition-colors">Bedtime</Link></li>
              <li><Link to="/calculators/wake-up" className="text-gray-400 hover:text-primary-400 transition-colors">Wake-Up Time</Link></li>
              <li><Link to="/calculators/sleep-duration" className="text-gray-400 hover:text-primary-400 transition-colors">Sleep Duration</Link></li>
              <li><Link to="/calculators/sleep-debt" className="text-gray-400 hover:text-primary-400 transition-colors">Sleep Debt</Link></li>
              <li><Link to="/calculators/nap" className="text-gray-400 hover:text-primary-400 transition-colors">Nap</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Tools & Guides</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/tools/sleep-diary" className="text-gray-400 hover:text-primary-400 transition-colors">Sleep Diary</Link></li>
              <li><Link to="/tools/sleep-consistency" className="text-gray-400 hover:text-primary-400 transition-colors">Sleep Consistency</Link></li>
              <li><Link to="/education" className="text-gray-400 hover:text-primary-400 transition-colors">Sleep Education</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-primary-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-400 hover:text-primary-400 transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary-400 transition-colors">Contact</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-primary-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-use" className="text-gray-400 hover:text-primary-400 transition-colors">Terms of Use</Link></li>
              <li><Link to="/cookie-policy" className="text-gray-400 hover:text-primary-400 transition-colors">Cookie Policy</Link></li>
              <li><Link to="/disclaimer" className="text-gray-400 hover:text-primary-400 transition-colors">Disclaimer</Link></li>
              <li><Link to="/editorial-policy" className="text-gray-400 hover:text-primary-400 transition-colors">Editorial Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            &copy; {currentYear} SleepWise. All rights reserved.
          </p>
          <p className="flex items-center space-x-1 mt-2 md:mt-0">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" aria-hidden="true" /> for better sleep
          </p>
          <p className="mt-2 md:mt-0 text-xs">
            Not a medical device. For informational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
