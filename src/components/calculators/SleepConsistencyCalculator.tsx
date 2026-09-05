import { useState } from 'react';
import { calculateConsistency } from '../../utils/sleepCalculations';
import ResultCard from '../ui/ResultCard';
import TimePicker from '../ui/TimePicker';
import { Calendar, Clock, TrendingUp, Activity } from 'lucide-react';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function SleepConsistencyCalculator() {
  const [sleepData, setSleepData] = useState<Record<string, { bedtime: string; wakeTime: string }>>(
    Object.fromEntries(daysOfWeek.map(day => [day, { bedtime: '23:00', wakeTime: '07:00' }]))
  );
  const [result, setResult] = useState<null | {
    avgBedtime: string;
    avgWakeTime: string;
    avgDuration: number;
    variation: number;
  }>(null);

  const handleCalculate = () => {
    const entries = Object.entries(sleepData).map(([_, data]) => data);
    const consistency = calculateConsistency(entries);
    setResult(consistency);
  };

  const handleReset = () => {
    setResult(null);
    setSleepData(
      Object.fromEntries(daysOfWeek.map(day => [day, { bedtime: '23:00', wakeTime: '07:00' }]))
    );
  };

  const handleTimeChange = (day: string, field: 'bedtime' | 'wakeTime', value: string) => {
    setSleepData(prev => ({
      ...prev,
      [day]: { ...prev[day], [field]: value }
    }));
  };

  return (
    <div className="card">
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center text-xl">
            📈
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Track Sleep Consistency</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Enter your sleep schedule for the past week</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <th className="text-left py-2 px-2 text-gray-600 dark:text-gray-400">Day</th>
                <th className="text-left py-2 px-2 text-gray-600 dark:text-gray-400">Bedtime</th>
                <th className="text-left py-2 px-2 text-gray-600 dark:text-gray-400">Wake Time</th>
              </tr>
            </thead>
            <tbody>
              {daysOfWeek.map((day) => (
                <tr key={day} className="border-b border-gray-100 dark:border-gray-800">
                  <td className="py-2 px-2 font-medium text-gray-700 dark:text-gray-300">{day}</td>
                  <td className="py-2 px-2">
                    <TimePicker
                      value={sleepData[day].bedtime}
                      onChange={(value) => handleTimeChange(day, 'bedtime', value)}
                      aria-label={`Bedtime for ${day}`}
                    />
                  </td>
                  <td className="py-2 px-2">
                    <TimePicker
                      value={sleepData[day].wakeTime}
                      onChange={(value) => handleTimeChange(day, 'wakeTime', value)}
                      aria-label={`Wake time for ${day}`}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleCalculate}
            className="btn-primary flex-1"
            aria-label="Calculate consistency"
          >
            Calculate Consistency
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
            <ResultCard title="Your Sleep Consistency Analysis">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Average Bedtime</span>
                    <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {result.avgBedtime}
                    </span>
                  </div>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Average Wake Time</span>
                    <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {result.avgWakeTime}
                    </span>
                  </div>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Average Duration</span>
                    <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {result.avgDuration.toFixed(1)} hours
                    </span>
                  </div>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Variation</span>
                    <span className={`text-lg font-semibold ${
                      result.variation < 60 
                        ? 'text-green-600 dark:text-green-400'
                        : 'text-yellow-600 dark:text-yellow-400'
                    }`}>
                      {result.variation.toFixed(0)} min
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Activity className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {result.variation < 60 
                      ? 'You have a very consistent sleep schedule! Try to maintain this pattern.'
                      : 'Consider reducing your sleep time variation by 15-30 minutes for better consistency.'
                    }
                  </span>
                </div>
              </div>
            </ResultCard>
          </div>
        )}
      </div>
    </div>
  );
}
