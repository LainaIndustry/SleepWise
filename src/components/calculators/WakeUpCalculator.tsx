import { useState } from 'react';
import { calculateWakeTime } from '../../utils/sleepCalculations';
import ResultCard from '../ui/ResultCard';
import TimePicker from '../ui/TimePicker';
import { Moon, Clock, Sun } from 'lucide-react';

export default function WakeUpCalculator() {
  const [bedtime, setBedtime] = useState('23:00');
  const [latency, setLatency] = useState(15);
  const [results, setResults] = useState<{ cycles: number; time: string }[]>([]);
  const [hasCalculated, setHasCalculated] = useState(false);

  const handleCalculate = () => {
    const cycleOptions = [4, 5, 6, 7];
    const calculated = cycleOptions.map(cycles => ({
      cycles,
      time: calculateWakeTime(bedtime, cycles, latency),
    }));
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
            ⏰
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Calculate Wake-Up Times</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Find the best times to wake up</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="bedtime-wake" className="label-text">
              <div className="flex items-center space-x-2">
                <Moon className="w-4 h-4" />
                <span>I want to go to sleep at</span>
              </div>
            </label>
            <TimePicker
              id="bedtime-wake"
              value={bedtime}
              onChange={setBedtime}
              aria-label="Bedtime"
            />
          </div>

          <div>
            <label htmlFor="latency-wake" className="label-text">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Time to fall asleep (minutes)</span>
              </div>
            </label>
            <select
              id="latency-wake"
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
            aria-label="Calculate wake-up times"
          >
            Calculate Wake-Up Times
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
            <ResultCard title={`If you go to bed at ${bedtime}`}>
              <div className="space-y-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  You should wake up at one of these times to complete a full sleep cycle:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {results.map((result) => (
                    <div
                      key={result.cycles}
                      className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
                    >
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {result.cycles} cycles
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-500">
                          ({result.cycles * 1.5 + latency/60}h)
                        </span>
                      </div>
                      <span className="text-lg font-semibold text-primary-600 dark:text-primary-400">
                        <Sun className="w-4 h-4 inline mr-1" aria-hidden="true" />
                        {result.time}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-4 italic">
                  These are estimates based on 90-minute sleep cycles. Individual cycles vary between 70-120 minutes.
                </p>
              </div>
            </ResultCard>
          </div>
        )}
      </div>
    </div>
  );
}
