import { useState } from 'react';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import SleepSchedulePrintable from '../../components/ui/SleepSchedulePrintable';
import { Clock, Calendar, Moon, Sun } from 'lucide-react';

export default function SleepSchedule() {
  const breadcrumbItems = [
    { label: 'Tools', path: '/tools' },
    { label: 'Sleep Schedule Planner', path: '/tools/sleep-schedule', current: true },
  ];

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  const [schedule, setSchedule] = useState(
    daysOfWeek.map(day => ({
      day,
      bedtime: '10:30 PM',
      wakeTime: '6:30 AM',
      duration: 8,
      notes: '',
    }))
  );

  const [selectedDay, setSelectedDay] = useState(0);

  const handleUpdate = (index: number, field: string, value: any) => {
    const newSchedule = [...schedule];
    newSchedule[index] = { ...newSchedule[index], [field]: value };
    setSchedule(newSchedule);
  };

  return (
    <div className="container-custom py-8">
      <Breadcrumbs items={breadcrumbItems} />
      
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Sleep Schedule Planner
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Create and manage your weekly sleep schedule for better consistency and rest.
        </p>

        <div className="card mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center text-xl">
              📅
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Weekly Schedule</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Plan your sleep for the week ahead</p>
            </div>
          </div>

          <div className="space-y-6">
            {schedule.map((day, index) => (
              <div key={day.day} className="border-b border-gray-200 dark:border-gray-800 pb-4 last:border-0">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="sm:w-32 flex-shrink-0">
                    <div className="font-semibold text-gray-900 dark:text-gray-100">{day.day}</div>
                  </div>
                  <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="text-xs text-gray-500 dark:text-gray-400 block mb-1">
                        <Moon className="w-3 h-3 inline mr-1" /> Bedtime
                      </label>
                      <input
                        type="time"
                        value={day.bedtime}
                        onChange={(e) => handleUpdate(index, 'bedtime', e.target.value)}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-500 dark:text-gray-400 block mb-1">
                        <Sun className="w-3 h-3 inline mr-1" /> Wake Time
                      </label>
                      <input
                        type="time"
                        value={day.wakeTime}
                        onChange={(e) => handleUpdate(index, 'wakeTime', e.target.value)}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-500 dark:text-gray-400 block mb-1">
                        <Clock className="w-3 h-3 inline mr-1" /> Duration (hours)
                      </label>
                      <input
                        type="number"
                        value={day.duration}
                        onChange={(e) => handleUpdate(index, 'duration', parseFloat(e.target.value))}
                        className="input-field"
                        min="4"
                        max="12"
                        step="0.5"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-2 ml-0 sm:ml-32">
                  <input
                    type="text"
                    placeholder="Notes (e.g., workout, events)"
                    value={day.notes}
                    onChange={(e) => handleUpdate(index, 'notes', e.target.value)}
                    className="input-field text-sm"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Print or Download Your Schedule
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Generate a printable version of your sleep schedule to hang up or share.
          </p>
          <SleepSchedulePrintable schedule={schedule} title="My Weekly Sleep Schedule" />
        </div>

        <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800">
          <h4 className="font-semibold text-blue-800 dark:text-blue-300 text-sm mb-2">
            💡 Tips for a Consistent Schedule
          </h4>
          <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
            <li>• Try to keep bedtimes and wake times consistent, even on weekends</li>
            <li>• Allow 15-20 minutes to fall asleep when planning your bedtime</li>
            <li>• Use morning light exposure to help anchor your sleep-wake cycle</li>
            <li>• Adjust gradually if you need to change your schedule</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
