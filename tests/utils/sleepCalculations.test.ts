import { describe, it, expect } from 'vitest';
import {
  calculateSleepCycles,
  calculateBedtime,
  calculateWakeTime,
  calculateSleepDuration,
  calculateSleepDebt,
  getAgeGroupRecommendations,
  calculateConsistency,
  formatDuration,
} from '../../src/utils/sleepCalculations';

describe('sleepCalculations', () => {
  describe('calculateSleepCycles', () => {
    it('should calculate sleep cycles correctly', () => {
      const results = calculateSleepCycles('07:00', 4, 15);
      expect(results).toHaveLength(4);
      expect(results[0]).toBe('9:30 PM');
    });

    it('should handle custom cycle duration', () => {
      const results = calculateSleepCycles('07:00', 3, 15, 100);
      expect(results).toHaveLength(3);
    });
  });

  describe('calculateBedtime', () => {
    it('should calculate bedtime correctly', () => {
      const bedtime = calculateBedtime('07:00', 8, 15);
      expect(bedtime).toBe('10:45 PM');
    });

    it('should handle different latency values', () => {
      const bedtime = calculateBedtime('07:00', 8, 30);
      expect(bedtime).toBe('10:30 PM');
    });
  });

  describe('calculateWakeTime', () => {
    it('should calculate wake time correctly', () => {
      const wakeTime = calculateWakeTime('23:00', 5, 15);
      expect(wakeTime).toBe('6:45 AM');
    });
  });

  describe('calculateSleepDuration', () => {
    it('should calculate duration correctly', () => {
      const result = calculateSleepDuration('23:00', '07:00');
      expect(result.hours).toBe(8);
      expect(result.minutes).toBe(0);
    });

    it('should handle crossing midnight', () => {
      const result = calculateSleepDuration('23:30', '06:45');
      expect(result.hours).toBe(7);
      expect(result.minutes).toBe(15);
    });
  });

  describe('calculateSleepDebt', () => {
    it('should calculate sleep debt correctly', () => {
      const entries = [
        { date: '2024-01-01', duration: 6 },
        { date: '2024-01-02', duration: 7 },
        { date: '2024-01-03', duration: 8 },
      ];
      const result = calculateSleepDebt(entries, 8);
      expect(result.average).toBe(7);
      expect(result.total).toBe(21);
      expect(result.targetTotal).toBe(24);
      expect(result.difference).toBe(3);
    });
  });

  describe('getAgeGroupRecommendations', () => {
    it('should return correct age group', () => {
      const result = getAgeGroupRecommendations(30);
      expect(result?.name).toBe('Adult');
      expect(result?.recommendedHours.min).toBe(7);
      expect(result?.recommendedHours.max).toBe(9);
    });

    it('should return null for invalid age', () => {
      const result = getAgeGroupRecommendations(-5);
      expect(result).toBeNull();
    });
  });

  describe('calculateConsistency', () => {
    it('should calculate consistency correctly', () => {
      const entries = [
        { bedtime: '23:00', wakeTime: '07:00' },
        { bedtime: '23:15', wakeTime: '07:15' },
        { bedtime: '22:45', wakeTime: '06:45' },
      ];
      const result = calculateConsistency(entries);
      expect(result.avgDuration).toBeCloseTo(8, 1);
    });
  });

  describe('formatDuration', () => {
    it('should format duration correctly', () => {
      expect(formatDuration(8)).toBe('8 hours');
      expect(formatDuration(8.5)).toBe('8h 30m');
      expect(formatDuration(0.5)).toBe('30 minutes');
      expect(formatDuration(1)).toBe('1 hour');
    });
  });
});
