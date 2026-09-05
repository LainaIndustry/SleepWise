import { useState } from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an email service or form handler
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="container-custom py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Have questions, feedback, or suggestions? We'd love to hear from you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="card space-y-6">
              <div>
                <label htmlFor="contact-name" className="label-text">Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="input-field"
                  required
                  aria-label="Your name"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="label-text">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="input-field"
                  required
                  aria-label="Your email address"
                />
              </div>

              <div>
                <label htmlFor="contact-subject" className="label-text">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                  className="input-field"
                  required
                  aria-label="Message subject"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="label-text">Message</label>
                <textarea
                  id="contact-message"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className="input-field"
                  rows={5}
                  required
                  aria-label="Your message"
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                <Send className="w-5 h-5 mr-2" aria-hidden="true" />
                Send Message
              </button>

              {submitted && (
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg text-green-700 dark:text-green-300 animate-fade-in">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}
            </form>
          </div>

          <div className="space-y-6">
            <div className="card">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</div>
                    <a href="mailto:hello@sleepwise.com" className="text-sm text-primary-600 dark:text-primary-400 hover:underline">
                      hello@sleepwise.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MessageSquare className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Response Time</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Usually within 24 hours</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-gray-50 dark:bg-gray-800/50">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Before Contacting</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Check our <a href="/faq" className="text-primary-600 dark:text-primary-400 hover:underline">FAQ</a> for common questions</li>
                <li>• Review our <a href="/privacy-policy" className="text-primary-600 dark:text-primary-400 hover:underline">Privacy Policy</a></li>
                <li>• Read our <a href="/disclaimer" className="text-primary-600 dark:text-primary-400 hover:underline">Medical Disclaimer</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
