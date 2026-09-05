import { format, parse, isValid, differenceInDays, addDays, subDays } from 'date-fns';

export function formatDate(date: Date | string, formatStr: string = 'MMM dd, yyyy'): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return isValid(d) ? format(d, formatStr) : 'Invalid date';
}

export function formatTime(time: string): string {
  const [hours, minutes] = time.split(':').map(Number);
  const period = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours % 12 || 12;
  return `${displayHours}:${String(minutes).padStart(2, '0')} ${period}`;
}

export function parseDate(dateStr: string): Date | null {
  const d = new Date(dateStr);
  return isValid(d) ? d : null;
}

export function getWeekRange(date: Date): { start: Date; end: Date } {
  const start = new Date(date);
  start.setDate(start.getDate() - start.getDay() + 1); // Monday
  const end = new Date(start);
  end.setDate(end.getDate() + 6); // Sunday
  return { start, end };
}

export function getDaysBetween(start: Date, end: Date): number {
  return differenceInDays(end, start);
}

export function addDaysToDate(date: Date, days: number): Date {
  return addDays(date, days);
}

export function subtractDaysFromDate(date: Date, days: number): Date {
  return subDays(date, days);
}

export function isToday(date: Date): boolean {
  const today = new Date();
  return date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();
}

export function isSameDay(date1: Date, date2: Date): boolean {
  return date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear();
}
