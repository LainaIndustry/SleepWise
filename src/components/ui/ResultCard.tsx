import { ReactNode } from 'react';

interface ResultCardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export default function ResultCard({ title, children, className = '' }: ResultCardProps) {
  return (
    <div className={`result-highlight ${className}`}>
      <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
        {title}
      </h4>
      <div className="text-gray-700 dark:text-gray-300">
        {children}
      </div>
    </div>
  );
}
