import { useState } from 'react';
import ResultCard from '../ui/ResultCard';
import { Clock, Briefcase, Home, Moon, Sun } from 'lucide-react';

export default function ShiftWorkPlanner() {
  const [shiftStart, setShiftStart] = useState('09:00');
  const [shiftEnd, setShiftEnd] = useState('17:00');
  const [commuteTime, setCommuteTime] = useState(30);
  const [preferredSleep, setPreferredSleep] = useState(8);
  const [result, setResult] = useState<{
    sleepWindow: string;
    totalTime: string;
    sleepBefore: string;
    sleepAfter: string;
  } | null>(null);

  const handleCalculate = () => {
    // Parse shift times
    const startMinutes = shiftStart.split(':').map(Number);
    const endMinutes = shiftEnd.split(':').map(Number);
    const startTotal = startMinutes[0] * 60 + startMinutes[1];
    const endTotal = endMinutes[0] * 60 + endMinutes[1];
    
    // Calculate shift duration
    let shiftDuration = endTotal - startTotal;
    if (shiftDuration < 0) shiftDuration += 24 * 60;
    
    // Calculate total time including commute and sleep
    const totalTime = shiftDuration + commuteTime * 2 + preferredSleep * 60;
    const totalHours = Math.floor(totalTime / 60);
    const totalMinutes = totalTime % 60;
    
    // Calculate sleep windows
    const sleepEnd = startTotal - commuteTime - 60; // 1 hour buffer before commute
    let sleepEndHours = Math.floor(sleepEnd / 60);
    let sleepEndMins = sleepEnd % 60;
    if (sleepEndHours < 0) sleepEndHours += 24;
    
    const sleepStart = sleepEnd - preferredSleep * 60;
    let sleepStartHours = Math.floor(sleepStart / 60);
    let sleepStartMins = sleepStart % 60;
    if (sleepStartHours < 0) sleepStartHours += 24;

    setResult({
      sleepWindow: `${String(sleepStartHours).padStart(2, '0')}:${String(sleepStartMins).padStart(2, '0')} - ${String(sleepEndHours).padStart(2, '0')}:${String(sleepEndMins).padStart(2, '0')}`,
      totalTime: `${totalHours}h ${totalMinutes > 0 ? totalMinutes + 'm' : ''}`,
      sleepBefore: `${preferredSleep} hours`,
      sleepAfter: `${preferredSleep} hours`,
    });
  };

  const handleReset = () => {
    setResult(null);
  };

  return (
    <div className="card">
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center text-xl">
            🏢
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Plan Your Shift Sleep</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Optimize sleep around your work schedule</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="shift-start" className="label-text">
              <div className="flex items-center space-x-2">
                <Briefcase className="w-4 h-4" />
                <span>Shift Start Time</span>
              </div>
            </label>
            <input
              id="shift-start"
              type="time"
              value={shiftStart}
              onChange={(e) => setShiftStart(e.target.value)}
              className="input-field"
              aria-label="Shift start time"
            />
          </div>

          <div>
            <label htmlFor="shift-end" className="label-text">
              <div className="flex items-center space-x-2">
                <Briefcase className="w-4 h-4" />
                <span>Shift End Time</span>
              </div>
            </label>
            <input
              id="shift-end"
              type="time"
              value={shiftEnd}
              onChange={(e) => setShiftEnd(e.target.value)}
              className="input-field"
              aria-label="Shift end time"
            />
          </div>

          <div>
            <label htmlFor="commute" className="label-text">
              <div className="flex items-center space-x-2">
                <Home className="w-4 h-4" />
                <span>Commute Time (minutes each way)</span>
              </div>
            </label>
            <input
              id="commute"
              type="number"
              value={commuteTime}
              onChange={(e) => setCommuteTime(Number(e.target.value))}
              className="input-field"
              min="0"
              max="180"
              aria-label="Commute time in minutes"
            />
          </div>

          <div>
            <label htmlFor="preferred-sleep" className="label-text">
              <div className="flex items-center space-x-2">
                <Moon className="w-4 h-4" />
                <span>Preferred Sleep Duration (hours)</span>
              </div>
            </label>
            <input
              id="preferred-sleep"
              type="number"
              value={preferredSleep}
              onChange={(e) => setPreferredSleep(Number(e.target.value))}
              className="input-field"
              min="4"
              max="12"
              step="0.5"
              aria-label="Preferred sleep duration"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleCalculate}
            className="btn-primary flex-1"
            aria-label="Calculate shift sleep plan"
          >
            Calculate Sleep Plan
          </button>
          <button
            onClick={handleReset}
            className="btn-secondary"
            aria-label="Reset calculator"
          >
            Reset
          </button>
        </div>

        {result && (
          <div className="mt-8 animate-fade-in">
            <ResultCard title="Your Shift Work Sleep Plan">
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Recommended Sleep Window</span>
                      <span className="text-lg font-semibold text-primary-600 dark:text-primary-400">
                        <Sun className="w-4 h-4 inline mr-1" aria-hidden="true" />
                        {result.sleepWindow}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Total Time Committed</span>
                      <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {result.totalTime}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Sleep Before and After Shift
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500 dark:text-gray-400">Before shift:</span>
                      <span className="ml-2 text-gray-700 dark:text-gray-300 font-medium">{result.sleepBefore}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 dark:text-gray-400">After shift:</span>
                      <span className="ml-2 text-gray-700 dark:text-gray-300 font-medium">{result.sleepAfter}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-3">
                    Consider splitting sleep into two sessions if needed for long shifts.
                  </p>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-300 text-sm mb-2">
                    💡 Tips for Shift Workers
                  </h4>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• Use blackout curtains to block sunlight during daytime sleep</li>
                    <li>• Maintain consistent sleep schedule on days off</li>
                    <li>• Use white noise to block daytime sounds</li>
                    <li>• Stay hydrated and eat balanced meals</li>
                    <li>• Limit caffeine in the last 4 hours of your shift</li>
                  </ul>
                </div>
              </div>
            </ResultCard>
          </div>
        )}
      </div>
    </div>
  );
}
