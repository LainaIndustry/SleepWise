import { useState } from 'react';
import { estimateJetLagSchedule } from '../../utils/sleepCalculations';
import ResultCard from '../ui/ResultCard';
import { Plane, Clock, Sun, Moon, Calendar } from 'lucide-react';

interface JetLagResult {
  timeDifference: number;
  adjustmentDays: number;
  schedule: string[];
}

export default function JetLagCalculator() {
  const [departureTimezone, setDepartureTimezone] = useState('-5');
  const [destinationTimezone, setDestinationTimezone] = useState('+1');
  const [departureDate, setDepartureDate] = useState(
    new Date().toISOString().split('T')[0]
  );
  const [arrivalDate, setArrivalDate] = useState(
    new Date(Date.now() + 86400000).toISOString().split('T')[0]
  );
  const [result, setResult] = useState<JetLagResult | null>(null);

  const timezones = [
    { value: '-12', label: 'UTC-12' },
    { value: '-11', label: 'UTC-11' },
    { value: '-10', label: 'UTC-10' },
    { value: '-9', label: 'UTC-9' },
    { value: '-8', label: 'UTC-8 (PST)' },
    { value: '-7', label: 'UTC-7 (MST)' },
    { value: '-6', label: 'UTC-6 (CST)' },
    { value: '-5', label: 'UTC-5 (EST)' },
    { value: '-4', label: 'UTC-4' },
    { value: '-3', label: 'UTC-3' },
    { value: '-2', label: 'UTC-2' },
    { value: '-1', label: 'UTC-1' },
    { value: '0', label: 'UTC (GMT)' },
    { value: '+1', label: 'UTC+1 (CET)' },
    { value: '+2', label: 'UTC+2 (EET)' },
    { value: '+3', label: 'UTC+3' },
    { value: '+4', label: 'UTC+4' },
    { value: '+5', label: 'UTC+5' },
    { value: '+6', label: 'UTC+6' },
    { value: '+7', label: 'UTC+7' },
    { value: '+8', label: 'UTC+8 (CST)' },
    { value: '+9', label: 'UTC+9 (JST)' },
    { value: '+10', label: 'UTC+10' },
    { value: '+11', label: 'UTC+11' },
    { value: '+12', label: 'UTC+12' },
  ];

  const handleCalculate = () => {
    const depDate = new Date(departureDate);
    const arrDate = new Date(arrivalDate);
    
    const calculated = estimateJetLagSchedule(
      departureTimezone,
      destinationTimezone,
      depDate,
      arrDate
    );
    setResult(calculated);
  };

  const handleReset = () => {
    setResult(null);
  };

  return (
    <div className="card">
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center text-xl">
            ✈️
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Plan Your Jet Lag Strategy</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Adjust your schedule for smooth travel</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="departure-tz" className="label-text">
              <div className="flex items-center space-x-2">
                <Plane className="w-4 h-4" />
                <span>Departure Time Zone</span>
              </div>
            </label>
            <select
              id="departure-tz"
              value={departureTimezone}
              onChange={(e) => setDepartureTimezone(e.target.value)}
              className="input-field"
              aria-label="Departure time zone"
            >
              {timezones.map((tz) => (
                <option key={tz.value} value={tz.value}>
                  {tz.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="destination-tz" className="label-text">
              <div className="flex items-center space-x-2">
                <Plane className="w-4 h-4 transform rotate-45" />
                <span>Destination Time Zone</span>
              </div>
            </label>
            <select
              id="destination-tz"
              value={destinationTimezone}
              onChange={(e) => setDestinationTimezone(e.target.value)}
              className="input-field"
              aria-label="Destination time zone"
            >
              {timezones.map((tz) => (
                <option key={tz.value} value={tz.value}>
                  {tz.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="departure-date" className="label-text">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Departure Date</span>
              </div>
            </label>
            <input
              id="departure-date"
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              className="input-field"
              aria-label="Departure date"
            />
          </div>

          <div>
            <label htmlFor="arrival-date" className="label-text">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Arrival Date</span>
              </div>
            </label>
            <input
              id="arrival-date"
              type="date"
              value={arrivalDate}
              onChange={(e) => setArrivalDate(e.target.value)}
              className="input-field"
              aria-label="Arrival date"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleCalculate}
            className="btn-primary flex-1"
            aria-label="Calculate jet lag plan"
          >
            Calculate Jet Lag Plan
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
            <ResultCard title="Your Jet Lag Adjustment Plan">
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Time Difference</span>
                      <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {result.timeDifference > 0 ? '+' : ''}{result.timeDifference} hours
                      </span>
                    </div>
                  </div>
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Adjustment Period</span>
                      <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        ~{result.adjustmentDays} days
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Recommended Schedule Adjustments
                  </h4>
                  <ul className="space-y-2">
                    {result.schedule.map((tip, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400">
                        <span className="text-primary-500 font-bold mt-0.5">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-xs text-gray-500 dark:text-gray-500 mt-2 italic">
                  These are general guidelines. Individual adjustment times vary.
                  Listen to your body and adjust gradually.
                </p>
              </div>
            </ResultCard>
          </div>
        )}
      </div>
    </div>
  );
}
