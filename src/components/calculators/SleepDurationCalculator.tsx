import { useState } from 'react';
import { calculateSleepDuration } from '../../utils/sleepCalculations';
import ResultCard from '../ui/ResultCard';
import TimePicker from '../ui/TimePicker';
import { Bed, Clock, Moon, Sun } from 'lucide-react';

export default function SleepDurationCalculator() {
  const [bedtime, setBedtime] = useState('23:00');
  const [wakeTime, setWakeTime] = useState('07:00');
  const [result, setResult] = useState<{ hours: number; minutes: number; totalMinutes: number } | null>(null);

  const handleCalculate = () => {
    const duration = calculateSleepDuration(bedtime, wakeTime);
    setResult(duration);
  };

  const handleReset = () => {
    setResult(null);
  };

  return (
    <div className="card">
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center text-xl">
            📏
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Calculate Sleep Duration</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Enter your bedtime and wake-up time</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="bedtime-duration" className="label-text">
              <div className="flex items-center space-x-2">
                <Moon className="w-4 h-4" />
                <span>Bedtime</span>
              </div>
            </label>
            <TimePicker
              id="bedtime-duration"
              value={bedtime}
              onChange={setBedtime}
              aria-label="Bedtime"
            />
          </div>

          <div>
            <label htmlFor="wake-time-duration" className="label-text">
              <div className="flex items-center space-x-2">
                <Sun className="w-4 h-4" />
                <span>Wake-up Time</span>
              </div>
            </label>
            <TimePicker
              id="wake-time-duration"
              value={wakeTime}
              onChange={setWakeTime}
              aria-label="Wake-up time"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleCalculate}
            className="btn-primary flex-1"
            aria-label="Calculate sleep duration"
          >
            Calculate Duration
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
            <ResultCard title="Your Sleep Duration">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                    {result.hours}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Hours</div>
                </div>
                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                    {result.minutes}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Minutes</div>
                </div>
                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                    {(result.hours + result.minutes / 60).toFixed(1)}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Total Hours</div>
                </div>
              </div>
            </ResultCard>
          </div>
        )}
      </div>
    </div>
  );
}
