export function isValidTime(time: string): boolean {
  const regex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
  return regex.test(time);
}

export function isValidDate(date: string): boolean {
  const d = new Date(date);
  return !isNaN(d.getTime());
}

export function isValidAge(age: number): boolean {
  return Number.isFinite(age) && age >= 0 && age <= 120;
}

export function isValidSleepDuration(hours: number): boolean {
  return Number.isFinite(hours) && hours > 0 && hours <= 24;
}

export function isValidPercentage(value: number): boolean {
  return Number.isFinite(value) && value >= 0 && value <= 100;
}

export function sanitizeText(text: string): string {
  const element = document.createElement('div');
  element.textContent = text;
  return element.innerHTML;
}

export function validateEmail(email: string): boolean {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}
