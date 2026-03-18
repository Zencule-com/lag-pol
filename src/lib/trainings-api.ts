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
 * Match a SASY training to a course page based on the training name/class
 */
function matchesCourse(training: SasyTraining, courseId: string, courseTitle: string): boolean {
  const name = (training.training_naam || training.name || '').toLowerCase();
  const cls = (training.class || '').toLowerCase();
  const titleLower = courseTitle.toLowerCase();

  // Match based on course title keywords
  if (titleLower.includes('scrum master') && titleLower.includes('basis')) {
    return (name.includes('scrum master') && !name.includes('verdiep') && !name.includes('vervolg') && !name.includes('product owner')) ||
           (cls.includes('scrum master') && !name.includes('verdiep') && !name.includes('vervolg') && !name.includes('product owner'));
  }

  if (titleLower.includes('scrum master') && (titleLower.includes('verdiept') || titleLower.includes('vervolg'))) {
    return name.includes('scrum master') && (name.includes('verdiep') || name.includes('vervolg'));
  }

  if (titleLower.includes('po + sm') || titleLower.includes('po+sm') || (titleLower.includes('product owner') && titleLower.includes('scrum master'))) {
    return name.includes('po') && name.includes('sm') ||
           (name.includes('product owner') && name.includes('scrum master')) ||
           name.includes('po+sm') || name.includes('po + sm') ||
           name.includes('gecombineerd');
  }

  if (titleLower.includes('product owner') && titleLower.includes('basis')) {
    return (name.includes('product owner') && !name.includes('verdiep') && !name.includes('vervolg') && !name.includes('scrum master') && !name.includes('po+sm') && !name.includes('po + sm')) ||
           (cls.includes('product owner') && !name.includes('verdiep') && !name.includes('vervolg') && !name.includes('scrum master'));
  }

  if (titleLower.includes('product owner') && (titleLower.includes('verdiept') || titleLower.includes('vervolg'))) {
    return name.includes('product owner') && (name.includes('verdiep') || name.includes('vervolg'));
  }

  if (titleLower.includes('agile coach')) {
    return name.includes('agile coach') || cls.includes('agile coach');
  }

  if (titleLower.includes('agile leiderschap')) {
    return name.includes('agile leiderschap') || name.includes('agile leadership');
  }

  if (titleLower.includes('sturen met obeya') || titleLower.includes('leading with obeya')) {
    return name.includes('sturen met obeya') || name.includes('leading with obeya') || name.includes('obeya kickstart');
  }

  if (titleLower.includes('facilitator')) {
    return name.includes('facilitator') && name.includes('obeya');
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
  const name = (training.training_naam || training.name || '').toLowerCase();

  if (name.includes('scrum master') && (name.includes('verdiep') || name.includes('vervolg'))) return 'Scrum Master Verdiept';
  if (name.includes('scrum master')) return 'Scrum Master';
  if ((name.includes('po') && name.includes('sm')) || name.includes('gecombineerd')) return 'Gecombineerde PO/SM';
  if (name.includes('product owner') && (name.includes('verdiep') || name.includes('vervolg'))) return 'Product Owner Verdiept';
  if (name.includes('product owner')) return 'Product Owner';
  if (name.includes('agile coach')) return 'Agile Coach';
  if (name.includes('agile leiderschap') || name.includes('agile leadership')) return 'Agile Leiderschap';
  if (name.includes('facilitator')) return 'Obeya Facilitator';
  if (name.includes('obeya')) return 'Sturen met Obeya';

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
