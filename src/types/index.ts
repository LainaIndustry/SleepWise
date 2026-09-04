export interface CalculatorResult {
  value: string | number;
  label: string;
  description?: string;
  icon?: React.ReactNode;
}

export interface SleepCycleResult {
  bedtime: string;
  wakeTime: string;
  cycles: number;
  totalSleep: number;
  sleepQuality: 'optimal' | 'good' | 'fair' | 'poor';
}

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
  averageBedtime: string;
  averageWakeTime: string;
  averageDuration: number;
  bedtimeVariation: number;
  wakeVariation: number;
  consistencyScore: number;
}

export interface AgeGroup {
  id: string;
  name: string;
  ageRange: string;
  recommendedHours: { min: number; max: number };
  description: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface Calculator {
  id: string;
  title: string;
  description: string;
  icon: string;
  path: string;
  category: string;
  featured: boolean;
}

export interface SleepGuide {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: number;
  path: string;
  featured: boolean;
}

export interface Breadcrumb {
  label: string;
  path: string;
  current?: boolean;
}

export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}

export interface StructuredData {
  '@context': string;
  '@type': string;
  [key: string]: any;
}
