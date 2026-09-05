export interface SleepEntry {
  id: string;
  date: string;
  bedtime: string;
  sleepTime: string;
  wakeTime: string;
  awakenings: number;
  sleepQuality: 1 | 2 | 3 | 4 | 5;
  notes: string;
}

export interface SleepConsistency {
  avgBedtime: string;
  avgWakeTime: string;
  avgDuration: number;
  bedtimeVariation: number;
  wakeVariation: number;
  consistencyScore: number;
}

export interface SleepGoal {
  targetBedtime: string;
  targetWakeTime: string;
  targetDuration: number;
  consistencyGoal: number;
}

export interface SleepAnalysis {
  totalEntries: number;
  averageDuration: number;
  averageQuality: number;
  bestDay: string;
  worstDay: string;
  consistencyScore: number;
  trend: 'improving' | 'stable' | 'declining';
}

export interface SleepReminder {
  id: string;
  time: string;
  message: string;
  days: number[]; // 0-6 for Sunday-Saturday
  enabled: boolean;
}
