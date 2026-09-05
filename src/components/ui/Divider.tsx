interface DividerProps {
  className?: string;
  text?: string;
  orientation?: 'horizontal' | 'vertical';
}

export default function Divider({ className = '', text, orientation = 'horizontal' }: DividerProps) {
  if (orientation === 'vertical') {
    return (
      <div className={`w-px h-full bg-gray-200 dark:bg-gray-700 ${className}`} role="separator" />
    );
  }

  if (text) {
    return (
      <div className={`relative flex items-center py-4 ${className}`}>
        <div className="flex-grow border-t border-gray-200 dark:border-gray-700" />
        <span className="px-4 text-sm text-gray-500 dark:text-gray-400">{text}</span>
        <div className="flex-grow border-t border-gray-200 dark:border-gray-700" />
      </div>
    );
  }

  return (
    <div className={`border-t border-gray-200 dark:border-gray-700 ${className}`} role="separator" />
  );
}
