import { ReactNode } from 'react';

interface NotificationBadgeProps {
  count: number;
  children: ReactNode;
  max?: number;
  className?: string;
}

export default function NotificationBadge({
  count,
  children,
  max = 99,
  className = '',
}: NotificationBadgeProps) {
  const display = count > max ? `${max}+` : count;

  return (
    <div className={`relative inline-block ${className}`}>
      {children}
      {count > 0 && (
        <span
          className="absolute -top-1 -right-1 flex items-center justify-center min-w-[20px] h-5 px-1 text-xs font-bold text-white bg-red-500 rounded-full shadow-lg"
          aria-label={`${count} notifications`}
        >
          {display}
        </span>
      )}
    </div>
  );
}
