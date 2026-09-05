import { useMemo } from 'react';
import {
  calculateSleepCycles,
  calculateBedtime,
  calculateWakeTime,
  calculateSleepDuration,
  calculateSleepDebt,
  getAgeGroupRecommendations,
  calculateConsistency,
} from '../utils/sleepCalculations';

interface UseSleepCalculationsProps {
  wakeTime?: string;
  bedtime?: string;
  age?: number;
  latency?: number;
  cycles?: number;
  entries?: Array<{ date: string; duration: number }>;
  sleepData?: Array<{ bedtime: string; wakeTime: string }>;
}

export function useSleepCalculations({
  wakeTime = '07:00',
  bedtime = '23:00',
  age = 30,
  latency = 15,
  cycles = 5,
  entries = [],
  sleepData = [],
}: UseSleepCalculationsProps) {
  const sleepCycles = useMemo(() => {
    return calculateSleepCycles(wakeTime, cycles, latency);
  }, [wakeTime, cycles, latency]);

  const recommendedBedtime = useMemo(() => {
    const ageGroup = getAgeGroupRecommendations(age);
    if (!ageGroup) return null;
    const targetHours = (ageGroup.recommendedHours.min + ageGroup.recommendedHours.max) / 2;
    return calculateBedtime(wakeTime, targetHours, latency);
  }, [wakeTime, age, latency]);

  const wakeTimes = useMemo(() => {
    return [4, 5, 6, 7].map(c => ({
      cycles: c,
      time: calculateWakeTime(bedtime, c, latency),
    }));
  }, [bedtime, latency]);

  const duration = useMemo(() => {
    return calculateSleepDuration(bedtime, wakeTime);
  }, [bedtime, wakeTime]);

  const debt = useMemo(() => {
    if (entries.length === 0) return null;
    const ageGroup = getAgeGroupRecommendations(age);
    const target = ageGroup 
      ? (ageGroup.recommendedHours.min + ageGroup.recommendedHours.max) / 2
      : 8;
    return calculateSleepDebt(entries, target);
  }, [entries, age]);

  const consistency = useMemo(() => {
    if (sleepData.length === 0) return null;
    return calculateConsistency(sleepData);
  }, [sleepData]);

  return {
    sleepCycles,
    recommendedBedtime,
    wakeTimes,
    duration,
    debt,
    consistency,
  };
}
