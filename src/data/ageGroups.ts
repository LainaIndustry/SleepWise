import { AgeGroup } from '../types';

export const ageGroups: AgeGroup[] = [
  {
    id: 'newborn',
    name: 'Newborn',
    ageRange: '0-3 months',
    recommendedHours: { min: 14, max: 17 },
    description: 'Newborns require the most sleep for proper development. They sleep in short bursts throughout the day and night.'
  },
  {
    id: 'infant',
    name: 'Infant',
    ageRange: '4-11 months',
    recommendedHours: { min: 12, max: 15 },
    description: 'Infants need extended sleep periods for growth and brain development. Sleep patterns become more regular during this stage.'
  },
  {
    id: 'toddler',
    name: 'Toddler',
    ageRange: '1-2 years',
    recommendedHours: { min: 11, max: 14 },
    description: 'Toddlers require regular sleep schedules for optimal development. Naps are still common during this age.'
  },
  {
    id: 'preschool',
    name: 'Preschool',
    ageRange: '3-5 years',
    recommendedHours: { min: 10, max: 13 },
    description: 'Preschoolers benefit from consistent sleep routines. Many children transition away from naps during this time.'
  },
  {
    id: 'school',
    name: 'School Age',
    ageRange: '6-13 years',
    recommendedHours: { min: 9, max: 11 },
    description: 'School-aged children need sufficient sleep for learning and health. Academic and social demands can affect sleep patterns.'
  },
  {
    id: 'teen',
    name: 'Teen',
    ageRange: '14-17 years',
    recommendedHours: { min: 8, max: 10 },
    description: 'Teens need adequate sleep for physical and mental development. Biological changes often shift their natural sleep-wake cycle later.'
  },
  {
    id: 'young-adult',
    name: 'Young Adult',
    ageRange: '18-25 years',
    recommendedHours: { min: 7, max: 9 },
    description: 'Young adults benefit from maintaining consistent sleep schedules despite changing routines.'
  },
  {
    id: 'adult',
    name: 'Adult',
    ageRange: '26-64 years',
    recommendedHours: { min: 7, max: 9 },
    description: 'Adults should aim for 7-9 hours of quality sleep per night. Sleep quality may be affected by stress, lifestyle, and health conditions.'
  },
  {
    id: 'senior',
    name: 'Senior',
    ageRange: '65+ years',
    recommendedHours: { min: 7, max: 8 },
    description: 'Older adults may benefit from 7-8 hours of sleep per night. Sleep patterns often change with age, including earlier bedtimes and wake times.'
  }
];

export const getAgeGroupByAge = (age: number): AgeGroup | undefined => {
  return ageGroups.find(group => {
    const range = group.ageRange.split('-');
    if (range.length === 2) {
      const min = parseInt(range[0]);
      const max = parseInt(range[1].split(' ')[0]);
      return age >= min && age <= max;
    }
    return false;
  });
};

export const getAgeGroupById = (id: string): AgeGroup | undefined => {
  return ageGroups.find(group => group.id === id);
};
