import { useState } from 'react';
import { calculateSleepDebt } from '../../utils/sleepCalculations';
import ResultCard from '../ui/ResultCard';
import { Calendar, TrendingDown, Clock } from 'lucide-react';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function SleepDebtCalculator() {
  const [sleepData, setSleepData] = useState<Record<string, number>>(
    Object.fromEntries(daysOfWeek.map(day => [day, 7]))
  );
  const [targetSleep, setTargetSleep] = useState(8);
  const [result, setResult] = useState<null | {
    average: number;
    total: number;
    targetTotal: number;
    difference: number;
  }>(null);

  const handleCalculate = () => {
    const entries = Object.entries(sleepData).map(([date, duration]) => ({
      date,
      duration,
    }));
    const calculated = calculateSleepDebt(entries, targetSleep);
    setResult(calculated);
  };

  const handleReset = () => {
    setResult(null);
    setSleepData(Object.fromEntries(daysOfWeek.map(day => [day, 7])));
    setTargetSleep(8);
  };

  const handleDurationChange = (day: string, value: string) => {
    const num = parseFloat(value);
    if (!isNaN(num) && num >= 0 && num <= 24) {
      setSleepData(prev => ({ ...prev, [day]: num }));
    }
  };

  return (
    <div className="card">
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center text-xl">
            📊
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Track Your Sleep Debt</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Enter your sleep duration for the past week</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
          {daysOfWeek.map((day) => (
            <div key={day}>
              <label htmlFor={`sleep-${day}`} className="text-xs font-medium text-gray-600 dark:text-gray-400 block mb-1">
                {day.slice(0, 3)}
              </label>
              <input
                id={`sleep-${day}`}
                type="number"
                value={sleepData[day]}
                onChange={(e) => handleDurationChange(day, e.target.value)}
                className="input-field text-center"
                min="0"
                max="24"
                step="0.5"
                aria-label={`Sleep duration for ${day}`}
              />
            </div>
          ))}
        </div>

        <div>
          <label htmlFor="target-sleep" className="label-text">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Your target sleep duration (hours per night)</span>
            </div>
          </label>
          <input
            id="target-sleep"
            type="number"
            value={targetSleep}
            onChange={(e) => setTargetSleep(parseFloat(e.target.value) || 0)}
            className="input-field max-w-xs"
            min="4"
            max="12"
            step="0.5"
            aria-label="Target sleep duration"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleCalculate}
            className="btn-primary flex-1"
            aria-label="Calculate sleep debt"
          >
            Calculate Sleep Debt
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
            <ResultCard title="Your Sleep Debt Analysis">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Average Sleep</span>
                    <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {result.average.toFixed(1)} hours
                    </span>
                  </div>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Total Sleep</span>
                    <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {result.total.toFixed(1)} hours
                    </span>
                  </div>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Target Total</span>
                    <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {result.targetTotal.toFixed(1)} hours
                    </span>
                  </div>
                </div>
                <div className={`p-4 rounded-lg border ${
                  result.difference > 0 
                    ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                    : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Sleep Debt</span>
                    <span className={`text-lg font-bold ${
                      result.difference > 0 
                        ? 'text-green-600 dark:text-green-400'
                        : 'text-red-600 dark:text-red-400'
                    }`}>
                      {result.difference > 0 
                        ? `+${result.difference.toFixed(1)} hours`
                        : `${result.difference.toFixed(1)} hours`
                      }
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-4 italic">
                {result.difference > 0 
                  ? 'Great job! You are getting enough sleep.'
                  : 'You may want to consider increasing your sleep duration to reach your target.'
                }
              </p>
            </ResultCard>
          </div>
        )}
      </div>
    </div>
  );
}
