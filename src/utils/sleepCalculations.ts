import { addMinutes, differenceInMinutes, format, parse, setHours, setMinutes } from 'date-fns';
import { AgeGroup, SleepCycleResult } from '../types';

export const SLEEP_CYCLE_DURATION = 90; // minutes
export const SLEEP_LATENCY = 15; // minutes

export function calculateSleepCycles(
  wakeTime: string,
  cycles: number = 5,
  latency: number = SLEEP_LATENCY,
  cycleDuration: number = SLEEP_CYCLE_DURATION
): string[] {
  const wakeDate = parse(wakeTime, 'HH:mm', new Date());
  const results: string[] = [];

  for (let i = 1; i <= cycles; i++) {
    const totalSleepMinutes = i * cycleDuration;
    const bedTime = new Date(wakeDate.getTime() - (totalSleepMinutes + latency) * 60000);
    results.push(format(bedTime, 'h:mm a'));
  }

  return results;
}

export function calculateBedtime(
  wakeTime: string,
  desiredHours: number,
  latency: number = SLEEP_LATENCY
): string {
  const wakeDate = parse(wakeTime, 'HH:mm', new Date());
  const bedTime = new Date(wakeDate.getTime() - (desiredHours * 60 + latency) * 60000);
  return format(bedTime, 'h:mm a');
}

export function calculateWakeTime(
  bedtime: string,
  cycles: number,
  latency: number = SLEEP_LATENCY,
  cycleDuration: number = SLEEP_CYCLE_DURATION
): string {
  const bedDate = parse(bedtime, 'HH:mm', new Date());
  const totalMinutes = cycles * cycleDuration + latency;
  const wakeDate = new Date(bedDate.getTime() + totalMinutes * 60000);
  return format(wakeDate, 'h:mm a');
}

export function calculateSleepDuration(
  bedtime: string,
  wakeTime: string
): { hours: number; minutes: number; totalMinutes: number } {
  const bed = parse(bedtime, 'HH:mm', new Date());
  const wake = parse(wakeTime, 'HH:mm', new Date());

  let diff = differenceInMinutes(wake, bed);
  if (diff < 0) diff += 24 * 60;

  const hours = Math.floor(diff / 60);
  const minutes = diff % 60;

  return { hours, minutes, totalMinutes: diff };
}

export function calculateSleepDebt(
  entries: { date: string; duration: number }[],
  target: number
): { average: number; total: number; targetTotal: number; difference: number } {
  const total = entries.reduce((sum, entry) => sum + entry.duration, 0);
  const average = total / entries.length;
  const targetTotal = target * entries.length;
  const difference = targetTotal - total;

  return { average, total, targetTotal, difference };
}

export function getAgeGroupRecommendations(age: number): AgeGroup | null {
  const groups: AgeGroup[] = [
    { id: 'newborn', name: 'Newborn', ageRange: '0-3 months', recommendedHours: { min: 14, max: 17 },
      description: 'Newborns require the most sleep for proper development.' },
    { id: 'infant', name: 'Infant', ageRange: '4-11 months', recommendedHours: { min: 12, max: 15 },
      description: 'Infants need extended sleep periods for growth and brain development.' },
    { id: 'toddler', name: 'Toddler', ageRange: '1-2 years', recommendedHours: { min: 11, max: 14 },
      description: 'Toddlers require regular sleep schedules for optimal development.' },
    { id: 'preschool', name: 'Preschool', ageRange: '3-5 years', recommendedHours: { min: 10, max: 13 },
      description: 'Preschoolers benefit from consistent sleep routines.' },
    { id: 'school', name: 'School Age', ageRange: '6-13 years', recommendedHours: { min: 9, max: 11 },
      description: 'School-aged children need sufficient sleep for learning and health.' },
    { id: 'teen', name: 'Teen', ageRange: '14-17 years', recommendedHours: { min: 8, max: 10 },
      description: 'Teens need adequate sleep for physical and mental development.' },
    { id: 'young-adult', name: 'Young Adult', ageRange: '18-25 years', recommendedHours: { min: 7, max: 9 },
      description: 'Young adults benefit from maintaining consistent sleep schedules.' },
    { id: 'adult', name: 'Adult', ageRange: '26-64 years', recommendedHours: { min: 7, max: 9 },
      description: 'Adults should aim for 7-9 hours of quality sleep per night.' },
    { id: 'senior', name: 'Senior', ageRange: '65+ years', recommendedHours: { min: 7, max: 8 },
      description: 'Older adults may benefit from 7-8 hours of sleep per night.' },
  ];

  if (age < 0) return null;

  for (const group of groups) {
    const range = group.ageRange.split('-');
    if (range.length === 2) {
      const min = parseInt(range[0]);
      const max = parseInt(range[1].split(' ')[0]);
      if (age >= min && age <= max) {
        return group;
      }
    }
  }

  return null;
}

export function calculateConsistency(
  entries: { bedtime: string; wakeTime: string }[]
): {
  avgBedtime: string;
  avgWakeTime: string;
  avgDuration: number;
  variation: number;
} {
  if (entries.length === 0) {
    return { avgBedtime: '--:--', avgWakeTime: '--:--', avgDuration: 0, variation: 0 };
  }

  let totalBedMinutes = 0;
  let totalWakeMinutes = 0;
  let totalDuration = 0;
  let durations: number[] = [];

  entries.forEach(entry => {
    const bed = parse(entry.bedtime, 'HH:mm', new Date());
    const wake = parse(entry.wakeTime, 'HH:mm', new Date());
    
    let duration = differenceInMinutes(wake, bed);
    if (duration < 0) duration += 24 * 60;
    
    totalBedMinutes += bed.getHours() * 60 + bed.getMinutes();
    totalWakeMinutes += wake.getHours() * 60 + wake.getMinutes();
    totalDuration += duration;
    durations.push(duration);
  });

  const avgBed = totalBedMinutes / entries.length;
  const avgWake = totalWakeMinutes / entries.length;
  const avgDuration = totalDuration / entries.length;

  // Calculate variation (standard deviation)
  const mean = avgDuration;
  const variance = durations.reduce((sum, d) => sum + Math.pow(d - mean, 2), 0) / durations.length;
  const variation = Math.sqrt(variance);

  return {
    avgBedtime: format(setMinutes(setHours(new Date(), Math.floor(avgBed / 60)), Math.round(avgBed % 60)), 'h:mm a'),
    avgWakeTime: format(setMinutes(setHours(new Date(), Math.floor(avgWake / 60)), Math.round(avgWake % 60)), 'h:mm a'),
    avgDuration,
    variation,
  };
}

export function estimateJetLagSchedule(
  departureTimezone: string,
  destinationTimezone: string,
  departureDate: Date,
  arrivalDate: Date
): {
  timeDifference: number;
  adjustmentDays: number;
  schedule: string[];
} {
  // Parse timezone offsets
  const depOffset = parseInt(departureTimezone);
  const destOffset = parseInt(destinationTimezone);
  
  const timeDifference = destOffset - depOffset;
  const adjustmentDays = Math.abs(timeDifference) / 2; // Rough estimate: 2 hours per day
  
  const suggestions: string[] = [];
  
  if (timeDifference > 0) {
    suggestions.push('Try to go to bed 30-60 minutes earlier each night before travel');
    suggestions.push('Get morning sunlight exposure to shift your body clock forward');
    suggestions.push('Maintain consistent meal times to help reset your circadian rhythm');
  } else if (timeDifference < 0) {
    suggestions.push('Try to stay up 30-60 minutes later each night before travel');
    suggestions.push('Get evening sunlight exposure to shift your body clock backward');
    suggestions.push('Maintain consistent meal times to help reset your circadian rhythm');
  } else {
    suggestions.push('No significant time difference - maintain your normal sleep schedule');
  }
  
  suggestions.push('Stay hydrated throughout your journey');
  suggestions.push('Avoid caffeine and alcohol close to bedtime');
  
  return {
    timeDifference,
    adjustmentDays: Math.round(adjustmentDays),
    schedule: suggestions,
  };
}

export function calculateNapDurations(
  wakeTime: string,
  napDuration: number
): { wakeAt: string; isGrounded: boolean } {
  const wake = parse(wakeTime, 'HH:mm', new Date());
  const napEnd = new Date(wake.getTime() - napDuration * 60000);
  
  // Check if nap duration is a multiple of 90 minutes (full sleep cycle)
  const isGrounded = napDuration % 90 === 0;
  
  return {
    wakeAt: format(napEnd, 'h:mm a'),
    isGrounded,
  };
}

export function formatDuration(hours: number): string {
  const h = Math.floor(hours);
  const m = Math.round((hours - h) * 60);
  if (h === 0) return `${m} minutes`;
  if (m === 0) return `${h} hour${h > 1 ? 's' : ''}`;
  return `${h}h ${m}m`;
}
