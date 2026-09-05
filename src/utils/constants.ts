export const SITE_CONFIG = {
  name: 'SleepWise',
  domain: 'sleepwise.com',
  description: 'Smart sleep calculators and evidence-based sleep education for better rest and wellness.',
  email: 'hello@sleepwise.com',
  supportEmail: 'support@sleepwise.com',
  privacyEmail: 'privacy@sleepwise.com',
  legalEmail: 'legal@sleepwise.com',
  twitter: '@sleepwise',
  github: 'sleepwise',
  year: new Date().getFullYear(),
} as const;

export const SLEEP_CONSTANTS = {
  CYCLE_DURATION: 90, // minutes
  AVERAGE_LATENCY: 15, // minutes
  MIN_RECOMMENDED_HOURS: 7,
  MAX_RECOMMENDED_HOURS: 9,
  ADULT_AGE_START: 18,
  ADULT_AGE_END: 64,
} as const;

export const COLOR_CONSTANTS = {
  primary: {
    light: '#0ca5e9',
    dark: '#0284c7',
  },
  success: '#22c55e',
  warning: '#eab308',
  danger: '#ef4444',
  info: '#3b82f6',
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export const LOCAL_STORAGE_KEYS = {
  theme: 'sleepwise-theme',
  diary: 'sleepwise-diary',
  favorites: 'sleepwise-favorites',
  preferences: 'sleepwise-preferences',
} as const;
