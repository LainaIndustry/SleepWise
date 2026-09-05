import { useState, useEffect } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { SleepEntry } from '../../types';
import { format, startOfWeek, endOfWeek, eachDayOfInterval, isWithinInterval } from 'date-fns';
import { Calendar, Download, Trash2, Edit2, Plus, BarChart3 } from 'lucide-react';
import ResultCard from '../ui/ResultCard';

export default function SleepDiary() {
  const [entries, setEntries] = useLocalStorage<SleepEntry[]>('sleepDiary', []);
  const [editingEntry, setEditingEntry] = useState<SleepEntry | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  const [formData, setFormData] = useState<Omit<SleepEntry, 'id'>>({
    date: format(new Date(), 'yyyy-MM-dd'),
    bedtime: '23:00',
    sleepTime: '23:15',
    wakeTime: '07:00',
    awakenings: 0,
    sleepQuality: 3,
    notes: '',
  });

  const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 });
  const weekEnd = endOfWeek(currentDate, { weekStartsOn: 1 });
  const weekDays = eachDayOfInterval({ start: weekStart, end: weekEnd });

  const weekEntries = entries.filter(entry => 
    isWithinInterval(new Date(entry.date), { start: weekStart, end: weekEnd })
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingEntry) {
      setEntries(prev => prev.map(entry => 
        entry.id === editingEntry.id 
          ? { ...formData, id: entry.id }
          : entry
      ));
      setEditingEntry(null);
    } else {
      const newEntry: SleepEntry = {
        ...formData,
        id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
      };
      setEntries(prev => [...prev, newEntry]);
    }
    setShowForm(false);
    resetForm();
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this entry?')) {
      setEntries(prev => prev.filter(entry => entry.id !== id));
    }
  };

  const handleEdit = (entry: SleepEntry) => {
    setEditingEntry(entry);
    setFormData({
      date: entry.date,
      bedtime: entry.bedtime,
      sleepTime: entry.sleepTime,
      wakeTime: entry.wakeTime,
      awakenings: entry.awakenings,
      sleepQuality: entry.sleepQuality,
      notes: entry.notes,
    });
    setShowForm(true);
  };

  const resetForm = () => {
    setFormData({
      date: format(new Date(), 'yyyy-MM-dd'),
      bedtime: '23:00',
      sleepTime: '23:15',
      wakeTime: '07:00',
      awakenings: 0,
      sleepQuality: 3,
      notes: '',
    });
  };

  const handleExportCSV = () => {
    if (entries.length === 0) return;
    
    const headers = ['Date', 'Bedtime', 'Sleep Time', 'Wake Time', 'Awakenings', 'Sleep Quality', 'Notes'];
    const csvData = entries.map(entry => [
      entry.date,
      entry.bedtime,
      entry.sleepTime,
      entry.wakeTime,
      entry.awakenings,
      entry.sleepQuality,
      entry.notes,
    ]);
    
    const csv = [headers.join(','), ...csvData.map(row => row.join(','))].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sleep_diary_${format(new Date(), 'yyyy-MM-dd')}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleClearAll = () => {
    if (confirm('Are you sure you want to delete all sleep diary entries? This cannot be undone.')) {
      setEntries([]);
    }
  };

  const getQualityLabel = (quality: number): string => {
    const labels = ['Very Poor', 'Poor', 'Fair', 'Good', 'Excellent'];
    return labels[quality - 1] || 'Not rated';
  };

  const calculateAverageSleep = () => {
    if (entries.length === 0) return 0;
    let total = 0;
    entries.forEach(entry => {
      const bed = new Date(`${entry.date}T${entry.sleepTime}`);
      const wake = new Date(`${entry.date}T${entry.wakeTime}`);
      let diff = (wake.getTime() - bed.getTime()) / (1000 * 60 * 60);
      if (diff < 0) diff += 24;
      total += diff;
    });
    return total / entries.length;
  };

  return (
    <div className="space-y-8">
      {/* Stats */}
      {entries.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
            <div className="text-sm text-gray-500 dark:text-gray-400">Total Entries</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">{entries.length}</div>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
            <div className="text-sm text-gray-500 dark:text-gray-400">Average Sleep</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {calculateAverageSleep().toFixed(1)} hours
            </div>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
            <div className="text-sm text-gray-500 dark:text-gray-400">Average Quality</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {(entries.reduce((sum, e) => sum + e.sleepQuality, 0) / entries.length).toFixed(1)}
            </div>
          </div>
        </div>
      )}

      {/* Add Entry Button */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={() => {
            setEditingEntry(null);
            resetForm();
            setShowForm(!showForm);
          }}
          className="btn-primary flex-1"
        >
          <Plus className="w-5 h-5 mr-2" aria-hidden="true" />
          {showForm ? 'Cancel' : 'Add Sleep Entry'}
        </button>
        {entries.length > 0 && (
          <>
            <button
              onClick={handleExportCSV}
              className="btn-secondary"
              aria-label="Export CSV"
            >
              <Download className="w-5 h-5 mr-2" aria-hidden="true" />
              Export CSV
            </button>
            <button
              onClick={handleClearAll}
              className="btn-secondary text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
              aria-label="Clear all entries"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Form */}
      {showForm && (
        <form onSubmit={handleSubmit} className="card animate-fade-in">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
            {editingEntry ? 'Edit Sleep Entry' : 'Add Sleep Entry'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="diary-date" className="label-text">Date</label>
              <input
                id="diary-date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                className="input-field"
                required
              />
            </div>
            <div>
              <label htmlFor="diary-bedtime" className="label-text">Bedtime</label>
              <input
                id="diary-bedtime"
                type="time"
                value={formData.bedtime}
                onChange={(e) => setFormData(prev => ({ ...prev, bedtime: e.target.value }))}
                className="input-field"
                required
              />
            </div>
            <div>
              <label htmlFor="diary-sleeptime" className="label-text">Time You Fell Asleep</label>
              <input
                id="diary-sleeptime"
                type="time"
                value={formData.sleepTime}
                onChange={(e) => setFormData(prev => ({ ...prev, sleepTime: e.target.value }))}
                className="input-field"
                required
              />
            </div>
            <div>
              <label htmlFor="diary-waketime" className="label-text">Wake Time</label>
              <input
                id="diary-waketime"
                type="time"
                value={formData.wakeTime}
                onChange={(e) => setFormData(prev => ({ ...prev, wakeTime: e.target.value }))}
                className="input-field"
                required
              />
            </div>
            <div>
              <label htmlFor="diary-awakenings" className="label-text">Number of Awakenings</label>
              <input
                id="diary-awakenings"
                type="number"
                value={formData.awakenings}
                onChange={(e) => setFormData(prev => ({ ...prev, awakenings: parseInt(e.target.value) || 0 }))}
                className="input-field"
                min="0"
              />
            </div>
            <div>
              <label htmlFor="diary-quality" className="label-text">Sleep Quality</label>
              <select
                id="diary-quality"
                value={formData.sleepQuality}
                onChange={(e) => setFormData(prev => ({ ...prev, sleepQuality: parseInt(e.target.value) as 1 | 2 | 3 | 4 | 5 }))}
                className="input-field"
              >
                <option value={1}>Very Poor</option>
                <option value={2}>Poor</option>
                <option value={3}>Fair</option>
                <option value={4}>Good</option>
                <option value={5}>Excellent</option>
              </select>
            </div>
          </div>
          
          <div className="mt-4">
            <label htmlFor="diary-notes" className="label-text">Notes</label>
            <textarea
              id="diary-notes"
              value={formData.notes}
              onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
              className="input-field"
              rows={2}
              placeholder="Any factors affecting your sleep?"
            />
          </div>

          <div className="flex gap-3 mt-4">
            <button type="submit" className="btn-primary flex-1">
              {editingEntry ? 'Update Entry' : 'Save Entry'}
            </button>
            <button
              type="button"
              onClick={() => {
                setShowForm(false);
                setEditingEntry(null);
                resetForm();
              }}
              className="btn-secondary"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* Entries List */}
      {entries.length > 0 ? (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Recent Entries
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <th className="text-left py-3 px-2 text-gray-600 dark:text-gray-400">Date</th>
                  <th className="text-left py-3 px-2 text-gray-600 dark:text-gray-400">Bedtime</th>
                  <th className="text-left py-3 px-2 text-gray-600 dark:text-gray-400">Wake</th>
                  <th className="text-left py-3 px-2 text-gray-600 dark:text-gray-400">Quality</th>
                  <th className="text-right py-3 px-2 text-gray-600 dark:text-gray-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[...entries].reverse().slice(0, 10).map((entry) => (
                  <tr key={entry.id} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="py-3 px-2">{format(new Date(entry.date), 'MMM dd, yyyy')}</td>
                    <td className="py-3 px-2">{entry.bedtime}</td>
                    <td className="py-3 px-2">{entry.wakeTime}</td>
                    <td className="py-3 px-2">{getQualityLabel(entry.sleepQuality)}</td>
                    <td className="py-3 px-2 text-right">
                      <button
                        onClick={() => handleEdit(entry)}
                        className="p-1 text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                        aria-label="Edit entry"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(entry.id)}
                        className="p-1 text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 ml-2"
                        aria-label="Delete entry"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {entries.length > 10 && (
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              Showing last 10 entries. Total: {entries.length}
            </p>
          )}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 dark:bg-gray-900/50 rounded-xl">
          <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-3" />
          <p className="text-gray-500 dark:text-gray-400">
            No sleep entries yet. Start tracking your sleep today!
          </p>
        </div>
      )}

      <div className="text-xs text-gray-400 dark:text-gray-500 text-center">
        Data is stored locally in your browser. No data is sent to any server.
      </div>
    </div>
  );
}
