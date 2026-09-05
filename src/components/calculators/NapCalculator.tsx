import { useState } from 'react';
import { calculateNapDurations } from '../../utils/sleepCalculations';
import ResultCard from '../ui/ResultCard';
import TimePicker from '../ui/TimePicker';
import { AlarmClock, Timer, Coffee } from 'lucide-react';

export default function NapCalculator() {
  const [napType, setNapType] = useState<'wake' | 'now'>('wake');
  const [wakeTime, setWakeTime] = useState('15:00');
  const [duration, setDuration] = useState(20);
  const [result, setResult] = useState<{ wakeAt: string; isGrounded: boolean } | null>(null);

  const napOptions = [
    { label: 'Power Nap', minutes: 15, description: 'Quick energy boost' },
    { label: 'Short Nap', minutes: 30, description: 'Alertness without grogginess' },
    { label: 'Mid Nap', minutes: 60, description: 'Deeper rest, may cause grogginess' },
    { label: 'Full Cycle', minutes: 90, description: 'Complete sleep cycle, refreshed' },
  ];

  const handleCalculate = () => {
    const calculated = calculateNapDurations(wakeTime, duration);
    setResult(calculated);
  };

  const handleReset = () => {
    setResult(null);
    setDuration(20);
  };

  return (
    <div className="card">
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center text-xl">
            💤
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Time Your Nap</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Find the perfect nap duration</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="label-text">Choose your nap timing</label>
            <div className="flex gap-3">
              <button
                onClick={() => setNapType('wake')}
                className={`flex-1 px-4 py-2 rounded-xl font-medium transition-colors ${
                  napType === 'wake'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                I want to wake at
              </button>
              <button
                onClick={() => setNapType('now')}
                className={`flex-1 px-4 py-2 rounded-xl font-medium transition-colors ${
                  napType === 'now'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                I want to nap now
              </button>
            </div>
          </div>

          {napType === 'wake' && (
            <div>
              <label htmlFor="wake-time-nap" className="label-text">
                <div className="flex items-center space-x-2">
                  <AlarmClock className="w-4 h-4" />
                  <span>I want to wake up at</span>
                </div>
              </label>
              <TimePicker
                id="wake-time-nap"
                value={wakeTime}
                onChange={setWakeTime}
                aria-label="Desired wake time for nap"
              />
            </div>
          )}

          <div>
            <label className="label-text">
              <div className="flex items-center space-x-2">
                <Timer className="w-4 h-4" />
                <span>Nap duration</span>
              </div>
            </label>
            <div className="grid grid-cols-2 gap-2">
              {napOptions.map((option) => (
                <button
                  key={option.minutes}
                  onClick={() => setDuration(option.minutes)}
                  className={`p-3 rounded-xl border-2 transition-all text-left ${
                    duration === option.minutes
                      ? 'border-primary-500 bg-primary-50 dark:bg-primary-950/30'
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                  }`}
                >
                  <div className="font-semibold text-sm text-gray-900 dark:text-gray-100">
                    {option.label}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {option.minutes} minutes
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {option.description}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleCalculate}
            className="btn-primary flex-1"
            aria-label="Calculate nap time"
          >
            Calculate Nap
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
            <ResultCard title={`Your Optimal Nap Schedule`}>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-400">Recommended to wake at</span>
                  <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    {result.wakeAt}
                  </span>
                </div>
                {result.isGrounded ? (
                  <div className="flex items-center space-x-2 text-green-600 dark:text-green-400">
                    <Coffee className="w-5 h-5" />
                    <span>Good timing - You should wake up feeling refreshed</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2 text-yellow-600 dark:text-yellow-400">
                    <AlarmClock className="w-5 h-5" />
                    <span>Consider adjusting nap length - Short naps (10-20 min) or full cycles (90 min) work best</span>
                  </div>
                )}
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-2 italic">
                  Based on your selected nap duration and wake time. Individual experiences may vary.
                </p>
              </div>
            </ResultCard>
          </div>
        )}
      </div>
    </div>
  );
}
