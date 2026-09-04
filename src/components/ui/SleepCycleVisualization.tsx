interface SleepCycleVisualizationProps {
  cycles: number;
  cycleDuration: number;
  wakeTime: string;
  className?: string;
}

export default function SleepCycleVisualization({ cycles, cycleDuration, wakeTime, className = '' }: SleepCycleVisualizationProps) {
  const totalMinutes = cycles * cycleDuration;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  // Generate cycle bars
  const cycleBars = Array.from({ length: cycles }, (_, i) => ({
    index: i,
    start: i * cycleDuration,
    end: (i + 1) * cycleDuration,
  }));

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
        <span>Sleep starts</span>
        <span>Total sleep: {hours}h {minutes > 0 ? `${minutes}m` : ''}</span>
        <span>Wake at {wakeTime}</span>
      </div>

      <div className="relative h-20 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
        {cycleBars.map((cycle) => {
          const startPercent = (cycle.start / totalMinutes) * 100;
          const widthPercent = (cycleDuration / totalMinutes) * 100;
          
          // Alternate colors for visual distinction
          const colors = [
            'bg-primary-400',
            'bg-indigo-400',
            'bg-purple-400',
            'bg-blue-400',
            'bg-cyan-400',
            'bg-teal-400',
          ];
          const color = colors[cycle.index % colors.length];

          return (
            <div
              key={cycle.index}
              className={`absolute top-0 h-full ${color} opacity-75 rounded transition-all duration-500`}
              style={{
                left: `${startPercent}%`,
                width: `${widthPercent}%`,
              }}
              role="img"
              aria-label={`Sleep cycle ${cycle.index + 1}: ${cycleDuration} minutes`}
            />
          );
        })}

        {/* REM markers */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-around px-2">
          {cycleBars.map((cycle) => (
            <div key={cycle.index} className="flex flex-col items-center">
              <div className="w-1 h-3 bg-white dark:bg-gray-300 rounded-full opacity-50"></div>
              <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {cycle.index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
        <span>Light Sleep</span>
        <span>Deep Sleep</span>
        <span>REM</span>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400">
        {cycles} complete sleep cycles · Each cycle ~{cycleDuration} minutes
      </p>
    </div>
  );
}
