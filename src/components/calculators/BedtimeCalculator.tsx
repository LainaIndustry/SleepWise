import { useState } from 'react';
import { calculateBedtime, getAgeGroupRecommendations } from '../../utils/sleepCalculations';
import ResultCard from '../ui/ResultCard';
import TimePicker from '../ui/TimePicker';
import { Moon, Sun, Users } from 'lucide-react';

export default function BedtimeCalculator() {
  const [wakeTime, setWakeTime] = useState('07:00');
  const [age, setAge] = useState(30);
  const [latency, setLatency] = useState(15);
  const [result, setResult] = useState<{ bedtime: string; hours: number } | null>(null);

  const handleCalculate = () => {
    const ageGroup = getAgeGroupRecommendations(age);
    if (!ageGroup) return;

    const targetHours = (ageGroup.recommendedHours.min + ageGroup.recommendedHours.max) / 2;
    const bedtime = calculateBedtime(wakeTime, targetHours, latency);
    setResult({ bedtime, hours: targetHours });
  };

  return (
    <div className="card">
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center text-xl">
            😴
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Find Your Ideal Bedtime</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Calculate when to go to sleep for your wake time</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label htmlFor="wake-time-bedtime" className="label-text">
              <div className="flex items-center space-x-2">
                <Sun className="w-4 h-4" />
                <span>Desired wake-up time</span>
              </div>
            </label>
            <TimePicker
              id="wake-time-bedtime"
              value={wakeTime}
              onChange={setWakeTime}
              aria-label="Desired wake-up time"
            />
          </div>

          <div>
            <label htmlFor="age-bedtime" className="label-text">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Your age</span>
              </div>
            </label>
            <input
              id="age-bedtime"
              type="number"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="input-field"
              min="0"
              max="120"
              aria-label="Your age"
            />
          </div>

          <div>
            <label htmlFor="latency-bedtime" className="label-text">
              <div className="flex items-center space-x-2">
                <Moon className="w-4 h-4" />
                <span>Time to fall asleep (minutes)</span>
              </div>
            </label>
            <select
              id="latency-bedtime"
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

        <button onClick={handleCalculate} className="btn-primary w-full">
          Calculate Bedtime
        </button>

        {result && (
          <div className="mt-8 animate-fade-in">
            <ResultCard title="Recommended Bedtime">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-400">Go to sleep at</span>
                  <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">{result.bedtime}</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-400">Target sleep duration</span>
                  <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">{result.hours} hours</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                  Based on recommended sleep duration for your age group.
                  Individual needs may vary.
                </p>
              </div>
            </ResultCard>
          </div>
        )}
      </div>
    </div>
  );
}
