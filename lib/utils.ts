import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string): string {
  const [year, month] = date.split('-');
  const monthIndex = parseInt(month, 10) - 1;
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return `${monthNames[monthIndex]} ${year}`;
}

export function getYearsSince(date: string): number {
  const [year] = date.split('-').map(Number);
  return new Date().getFullYear() - year;
}

export function getDurationText(startDate: string, endDate: string): string {
  if (endDate === 'present' || endDate === '') {
    const [startYear, startMonth] = startDate.split('-').map(Number);
    const now = new Date();
    const months =
      (now.getFullYear() - startYear) * 12 + (now.getMonth() + 1 - startMonth);
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    if (years > 0 && remainingMonths > 0) {
      return `${years}y ${remainingMonths}mo`;
    } else if (years > 0) {
      return `${years}y`;
    } else {
      return `${remainingMonths}mo`;
    }
  }

  const [startYear, startMonth] = startDate.split('-').map(Number);
  const [endYear, endMonth] = endDate.split('-').map(Number);
  const months = (endYear - startYear) * 12 + (endMonth - startMonth);
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years > 0 && remainingMonths > 0) {
    return `${years}y ${remainingMonths}mo`;
  } else if (years > 0) {
    return `${years}y`;
  } else {
    return `${remainingMonths}mo`;
  }
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function getSkillsByCategory(
  skills: any[],
  category: string
) {
  return skills.filter((skill) => skill.category === category);
}
