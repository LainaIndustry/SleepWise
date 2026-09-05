import { describe, it, expect } from 'vitest';
import {
  parseTimeToMinutes,
  formatMinutesToTime,
  getTimeDifferenceInMinutes,
  addMinutesToTime,
  subtractMinutesFromTime,
  formatTimeDisplay,
} from '../../src/utils/timeUtils';

describe('timeUtils', () => {
  describe('parseTimeToMinutes', () => {
    it('should parse time to minutes', () => {
      expect(parseTimeToMinutes('07:00')).toBe(420);
      expect(parseTimeToMinutes('23:30')).toBe(1410);
    });
  });

  describe('formatMinutesToTime', () => {
    it('should format minutes to time', () => {
      expect(formatMinutesToTime(420)).toBe('07:00');
      expect(formatMinutesToTime(1410)).toBe('23:30');
    });
  });

  describe('getTimeDifferenceInMinutes', () => {
    it('should calculate time difference', () => {
      expect(getTimeDifferenceInMinutes('23:00', '07:00')).toBe(480);
      expect(getTimeDifferenceInMinutes('07:00', '10:00')).toBe(180);
    });
  });

  describe('addMinutesToTime', () => {
    it('should add minutes to time', () => {
      expect(addMinutesToTime('23:00', 30)).toBe('23:30');
      expect(addMinutesToTime('23:30', 45)).toBe('00:15');
    });
  });

  describe('subtractMinutesFromTime', () => {
    it('should subtract minutes from time', () => {
      expect(subtractMinutesFromTime('07:00', 30)).toBe('06:30');
      expect(subtractMinutesFromTime('00:15', 45)).toBe('23:30');
    });
  });

  describe('formatTimeDisplay', () => {
    it('should format time display', () => {
      expect(formatTimeDisplay('07:00')).toBe('7:00 AM');
      expect(formatTimeDisplay('23:30')).toBe('11:30 PM');
      expect(formatTimeDisplay('12:00')).toBe('12:00 PM');
    });
  });
});
