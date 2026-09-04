export function parseTimeToMinutes(time: string): number {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}

export function formatMinutesToTime(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
}

export function getTimeDifferenceInMinutes(time1: string, time2: string): number {
  const t1 = parseTimeToMinutes(time1);
  const t2 = parseTimeToMinutes(time2);
  let diff = t2 - t1;
  if (diff < 0) diff += 24 * 60;
  return diff;
}

export function addMinutesToTime(time: string, minutes: number): string {
  const total = parseTimeToMinutes(time) + minutes;
  return formatMinutesToTime(total % (24 * 60));
}

export function subtractMinutesFromTime(time: string, minutes: number): string {
  const total = parseTimeToMinutes(time) - minutes;
  const adjusted = total < 0 ? total + 24 * 60 : total;
  return formatMinutesToTime(adjusted);
}

export function formatTimeDisplay(time: string): string {
  const [hours, minutes] = time.split(':').map(Number);
  const period = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours % 12 || 12;
  return `${displayHours}:${String(minutes).padStart(2, '0')} ${period}`;
}
