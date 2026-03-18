const API_BASE = process.env.RICO_API_URL || 'https://rico.leansixsigmagroep.nl/api/v1';

export interface SasyTraining {
  sasy_id: number;
  name: string | null;
  training_naam: string | null;
  class: string | null;
  start_date: string | null;
  location_name: string | null;
  location_naam: string | null;
  is_full: boolean;
  seats_filled: number;
  training_block: TrainingBlock[];
}

interface TrainingBlock {
  id: number;
  training_day?: TrainingDay[];
}

interface TrainingDay {
  id: number;
  name: string;
  date: string;
  startTime?: string;
  endTime?: string;
  location_name?: string;
  location_naam?: string;
}

export interface FormattedTrainingDate {
  courseName: string;
  dates: string;
  location: string;
  formValue: string;
  formLabel: string;
  isFull: boolean;
}

/**
 * Fetch all politie trainings from the Rico API
 */
export async function fetchPolitieTrainings(): Promise<SasyTraining[]> {
  try {
    const response = await fetch(`${API_BASE}/politie/trainings`, {
      next: { revalidate: 300 }, // Cache for 5 minutes
    });

    if (!response.ok) {
      console.error('Failed to fetch politie trainings:', response.status);
      return [];
    }

    const data = await response.json();
    return data.trainings || [];
  } catch (error) {
    console.error('Error fetching politie trainings:', error);
    return [];
  }
}

/**
 * Check if name contains "PO/SM" pattern (not just "po" which matches "politie")
 */
function isPOSM(name: string): boolean {
  return /po\/sm|po\+sm|po \+ sm|gecombineerd/i.test(name);
}

/**
 * Check if name contains "OF" prefix pattern for Obeya Facilitator
 * Matches patterns like "Politie OF 2804" or "OF -"
 */
function isObeyaFacilitator(name: string): boolean {
  return /\bOF\b/i.test(name) || /facilitator/i.test(name);
}

/**
 * Match a SASY training to a course page based on the training name/class
 *
 * Real SASY names look like:
 *   "Politie 2631 PO/SM - Product Owner - April" (class: Product Owner) → PO+SM page
 *   "Politie PO - 2634 - Product Owner - April" (class: Product Owner) → PO Basis page
 *   "2de Politie SM 2742 - Scrum Master - Juni" (class: Scrum Master) → SM Basis page
 *   "Politie PO 2786 - Agile Coach - Juni" (class: Agile Coach) → Agile Coach page
 *   "Politie OF 2804 - Obeya - Juni" (class: Obeya) → Facilitator in Obeya page
 */
function matchesCourse(training: SasyTraining, courseId: string, courseTitle: string): boolean {
  const name = training.training_naam || training.name || '';
  const cls = (training.class || '').toLowerCase();
  const titleLower = courseTitle.toLowerCase();

  // PO+SM — must match before Product Owner (since PO/SM has class "Product Owner")
  if (titleLower.includes('po + sm') || titleLower.includes('po+sm')) {
    return isPOSM(name);
  }

  // Scrum Master Basis
  if (titleLower.includes('scrum master') && titleLower.includes('basis')) {
    return cls === 'scrum master' && !isPOSM(name);
  }

  // Scrum Master Verdiept
  if (titleLower.includes('scrum master') && (titleLower.includes('verdiept') || titleLower.includes('vervolg'))) {
    return cls === 'scrum master' && /verdiep|vervolg/i.test(name);
  }

  // Product Owner Basis
  if (titleLower.includes('product owner') && titleLower.includes('basis')) {
    return cls === 'product owner' && !isPOSM(name) && !/verdiep|vervolg/i.test(name);
  }

  // Product Owner Verdiept
  if (titleLower.includes('product owner') && (titleLower.includes('verdiept') || titleLower.includes('vervolg'))) {
    return cls === 'product owner' && /verdiep|vervolg/i.test(name);
  }

  // Agile Coach
  if (titleLower.includes('agile coach')) {
    return cls === 'agile coach';
  }

  // Agile Leiderschap
  if (titleLower.includes('agile leiderschap')) {
    return /agile leiderschap|agile leadership/i.test(name) || cls === 'agile leiderschap';
  }

  // Facilitator in Obeya — "OF" in the name
  if (titleLower.includes('facilitator')) {
    return cls === 'obeya' && isObeyaFacilitator(name);
  }

  // Sturen met Obeya / Leading with Obeya — Obeya class without "OF"
  if (titleLower.includes('sturen met obeya') || titleLower.includes('leading with obeya')) {
    return cls === 'obeya' && !isObeyaFacilitator(name);
  }

  return false;
}

/**
 * Format training days into a readable date string like "8 & 9 juni"
 */
function formatTrainingDays(training: SasyTraining): string {
  const allDays: string[] = [];

  // Collect all dates from training blocks
  if (training.training_block && Array.isArray(training.training_block)) {
    for (const block of training.training_block) {
      if (block.training_day && Array.isArray(block.training_day)) {
        for (const day of block.training_day) {
          if (day.date) {
            allDays.push(day.date);
          }
        }
      }
    }
  }

  // Fallback to start_date if no training days
  if (allDays.length === 0 && training.start_date) {
    allDays.push(training.start_date);
  }

  if (allDays.length === 0) return '';

  // Sort dates
  allDays.sort();

  const months = [
    'januari', 'februari', 'maart', 'april', 'mei', 'juni',
    'juli', 'augustus', 'september', 'oktober', 'november', 'december'
  ];

  // Parse dates and group by month
  const parsed = allDays.map(d => {
    const date = new Date(d + 'T00:00:00');
    return {
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
    };
  });

  // Group by month
  const byMonth: Record<number, number[]> = {};
  for (const p of parsed) {
    if (!byMonth[p.month]) byMonth[p.month] = [];
    byMonth[p.month].push(p.day);
  }

  const monthKeys = Object.keys(byMonth).map(Number).sort((a, b) => a - b);

  const parts: string[] = [];
  for (let i = 0; i < monthKeys.length; i++) {
    const monthIdx = monthKeys[i];
    const days = byMonth[monthIdx].sort((a, b) => a - b);
    const isLast = i === monthKeys.length - 1;

    if (isLast) {
      // Last month: include day numbers and month name
      parts.push(days.join(', ') + ' ' + months[monthIdx]);
    } else {
      // Not last: just day numbers (month will be implied or shown later)
      parts.push(days.join(', '));
    }
  }

  // Join with " & " for 2 parts, ", " and " & " for more
  if (parts.length === 1) return parts[0];
  if (parts.length === 2) return parts[0] + ' & ' + parts[1];
  return parts.slice(0, -1).join(', ') + ' & ' + parts[parts.length - 1];
}

/**
 * Get the short course name for display
 */
function getShortCourseName(training: SasyTraining): string {
  const name = training.training_naam || training.name || '';
  const cls = (training.class || '').toLowerCase();

  // PO/SM must be checked first (before Product Owner)
  if (isPOSM(name)) return 'Gecombineerde PO/SM';

  if (cls === 'scrum master') {
    return /verdiep|vervolg/i.test(name) ? 'Scrum Master Verdiept' : 'Scrum Master';
  }
  if (cls === 'product owner') {
    return /verdiep|vervolg/i.test(name) ? 'Product Owner Verdiept' : 'Product Owner';
  }
  if (cls === 'agile coach') return 'Agile Coach';
  if (/agile leiderschap|agile leadership/i.test(name)) return 'Agile Leiderschap';
  if (cls === 'obeya') {
    return isObeyaFacilitator(name) ? 'Obeya Facilitator' : 'Sturen met Obeya';
  }

  return training.class || 'Training';
}

/**
 * Get formatted training dates for a specific course
 */
export function getTrainingDatesForCourse(
  trainings: SasyTraining[],
  courseId: string,
  courseTitle: string
): FormattedTrainingDate[] {
  const matching = trainings.filter(t => matchesCourse(t, courseId, courseTitle));

  return matching.map(training => {
    const courseName = getShortCourseName(training);
    const dates = formatTrainingDays(training);
    const location = training.location_naam || training.location_name || '';

    const formValue = `${courseName}: ${dates} in ${location}`;
    const formLabel = `${courseName} · ${dates} (${location})`;

    return {
      courseName,
      dates,
      location,
      formValue,
      formLabel,
      isFull: training.is_full,
    };
  }).filter(t => t.dates !== '');
}

/**
 * Get all training schedule options for the signup form dropdown
 */
export function getAllTrainingScheduleOptions(trainings: SasyTraining[]): { value: string; label: string }[] {
  const options: { value: string; label: string }[] = [];

  for (const training of trainings) {
    const courseName = getShortCourseName(training);
    const dates = formatTrainingDays(training);
    const location = training.location_naam || training.location_name || '';

    if (!dates) continue;

    options.push({
      value: `${courseName}: ${dates} in ${location}`,
      label: `${courseName} · ${dates} (${location})`,
    });
  }

  options.push({
    value: 'Andere datum in overleg',
    label: 'Andere datum (in overleg)',
  });

  return options;
}
