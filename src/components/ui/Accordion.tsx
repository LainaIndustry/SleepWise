import { useState, ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  id: string;
  title: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpen?: string;
  className?: string;
}

export default function Accordion({ items, defaultOpen, className = '' }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpen || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden"
        >
          <button
            onClick={() => toggle(item.id)}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-expanded={openId === item.id}
            aria-controls={`accordion-content-${item.id}`}
          >
            <span className="font-medium text-gray-900 dark:text-gray-100">
              {item.title}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-200 ${
                openId === item.id ? 'rotate-180' : ''
              }`}
              aria-hidden="true"
            />
          </button>
          <div
            id={`accordion-content-${item.id}`}
            role="region"
            aria-labelledby={`accordion-button-${item.id}`}
            className={`px-6 overflow-hidden transition-all duration-200 ${
              openId === item.id ? 'py-4 max-h-[2000px]' : 'max-h-0'
            }`}
          >
            <div className="text-gray-600 dark:text-gray-400">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
