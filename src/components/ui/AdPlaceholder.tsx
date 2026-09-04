interface AdPlaceholderProps {
  position?: 'top' | 'content' | 'bottom';
  className?: string;
}

export default function AdPlaceholder({ position = 'content', className = '' }: AdPlaceholderProps) {
  return (
    <div
      className={`ad-container ${className}`}
      data-position={position}
      role="complementary"
      aria-label="Advertisement"
    >
      <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 text-center border-2 border-dashed border-gray-300 dark:border-gray-700">
        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Advertisement</p>
        {/* AdSense code will be inserted here after approval */}
        <div className="min-h-[90px] flex items-center justify-center">
          <p className="text-sm text-gray-400 dark:text-gray-600">— Ad Space —</p>
        </div>
      </div>
    </div>
  );
}
