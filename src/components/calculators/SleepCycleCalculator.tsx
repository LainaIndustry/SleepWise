import { useState } from 'react';
import { calculateSleepCycles } from '../../utils/sleepCalculations';
import ResultCard from '../ui/ResultCard';
import TimePicker from '../ui/TimePicker';
import { Clock, Moon, Sun } from 'lucide-react';

export default function SleepCycleCalculator() {
  const [wakeTime, setWakeTime] = useState('07:00');
  const [cycles, setCycles] = useState(5);
  const [latency, setLatency] = useState(15);
  const [results, setResults] = useState<string[]>([]);
  const [hasCalculated, setHasCalculated] = useState(false);

  const handleCalculate = () => {
    const calculated = calculateSleepCycles(wakeTime, cycles, latency);
    setResults(calculated);
    setHasCalculated(true);
  };

  const handleReset = () => {
    setResults([]);
    setHasCalculated(false);
  };

  return (
    <div className="card">
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center text-xl">
            🌙
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Calculate Your Sleep Cycles</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Find the best times to sleep and wake up</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label htmlFor="wake-time" className="label-text">
              <div className="flex items-center space-x-2">
                <Sun className="w-4 h-4" />
                <span>I need to wake up at</span>
              </div>
            </label>
            <TimePicker
              id="wake-time"
              value={wakeTime}
              onChange={setWakeTime}
              aria-label="Wake up time"
            />
          </div>

          <div>
            <label htmlFor="cycles" className="label-text">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Sleep cycles</span>
              </div>
            </label>
            <select
              id="cycles"
              value={cycles}
              onChange={(e) => setCycles(Number(e.target.value))}
              className="input-field"
              aria-label="Number of sleep cycles"
            >
              {[3, 4, 5, 6, 7].map((n) => (
                <option key={n} value={n}>
                  {n} cycles ({n * 1.5} hours)
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="latency" className="label-text">
              <div className="flex items-center space-x-2">
                <Moon className="w-4 h-4" />
                <span>Sleep latency (minutes)</span>
              </div>
            </label>
            <select
              id="latency"
              value={latency}
              onChange={(e) => setLatency(Number(e.target.value))}
              className="input-field"
              aria-label="Time to fall asleep"
            >
              {[5, 10, 15, 20, 25, 30].map((n) => (
                <option key={n} value={n}>
                  {n} minutes
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleCalculate}
            className="btn-primary flex-1"
            aria-label="Calculate sleep times"
          >
            Calculate Sleep Times
          </button>
          <button
            onClick={handleReset}
            className="btn-secondary"
            aria-label="Reset calculator"
          >
            Reset
          </button>
        </div>

        {hasCalculated && results.length > 0 && (
          <div className="mt-8 animate-fade-in">
            <ResultCard title={`If you need to wake at ${wakeTime}`}>
              <div className="space-y-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  These recommended sleep windows should help you wake up at the end of a complete sleep cycle:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {results.map((time, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
                    >
                      <span className="text-gray-600 dark:text-gray-400">Cycle {index + 1}</span>
                      <span className="text-lg font-semibold text-primary-600 dark:text-primary-400">{time}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-4 italic">
                  These are estimates. Individual sleep cycles vary between 70-120 minutes.
                  Consider this a guide for planning rather than a prescription.
                </p>
              </div>
            </ResultCard>
          </div>
        )}
      </div>
    </div>
  );
}
