import { Course } from '../../data/courses';
import Navigation from '../Navigation';
import ClientSignupSection from '../ClientSignupSection';
import HeroSection from '../HeroSection';
import LearningOutcomesSection from '../sections/LearningOutcomesSection';
import UniqueFeaturesSection from '../sections/UniqueFeaturesSection';
import PracticalDetailsSection from '../sections/PracticalDetailsSection';
import PriceSection from '../sections/PriceSection';
import RelatedTrainingSection from '../sections/RelatedTrainingSection';
import Footer from '../sections/Footer';
import { fetchPolitieTrainings, getTrainingDatesForCourse, getAllTrainingScheduleOptions } from '../../lib/trainings-api';

interface CoursePageLayoutProps {
  courses: Course[];
  heroTitle: string;
  heroSubtitle: string;
  preselectedCourse: string;
  relatedTraining?: {
    title: string;
    description: string;
    links: {
      href: string;
      text: string;
      variant: 'primary' | 'accent' | 'gray';
    }[];
  };
}

export default async function CoursePageLayout({
  courses,
  heroTitle,
  heroSubtitle,
  preselectedCourse,
  relatedTraining
}: CoursePageLayoutProps) {
  // Fetch politie trainings from Rico API
  const allTrainings = await fetchPolitieTrainings();

  // Get training dates for the current course
  const getTrainingDates = (course: Course) => {
    if (allTrainings.length === 0) return undefined;

    const dates = getTrainingDatesForCourse(allTrainings, course.id, course.title);
    if (dates.length === 0) return undefined;

    return dates.map(d => ({
      courseName: d.courseName,
      dates: d.dates,
      location: d.location,
      formValue: d.formValue,
    }));
  };

  // Get all schedule options for the signup form
  const scheduleOptions = allTrainings.length > 0
    ? getAllTrainingScheduleOptions(allTrainings)
    : undefined;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navigation showMargin={false} />

      {/* Hero Section */}
      {courses.map((course) => (
        <HeroSection
          key={course.id}
          title={heroTitle}
          subtitle={heroSubtitle}
          price={course.price ? {
            basePrice: course.price.basePrice,
            baseParticipants: course.price.baseParticipants,
            maxParticipants: course.price.maxParticipants,
            note: course.price.note
          } : undefined}
          courseDetails={{
            duration: course.details.duration.split(',')[0].trim(),
            certificate: course.details.certificate
          }}
          trainingDates={getTrainingDates(course)}
        />
      ))}

      {/* Course Overview Section */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          {courses.map((course) => (
            <div key={course.id} className="space-y-6">
              <div className="text-xl text-gray-600 leading-relaxed">
                {course.description}
              </div>
              {course.detailedDescription && (
                <div className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                  {course.detailedDescription}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Learning Outcomes Section */}
      <LearningOutcomesSection courses={courses} />

      {/* Unique Features Section */}
      <UniqueFeaturesSection courses={courses} />

      {/* Practical Details Section */}
      <PracticalDetailsSection courses={courses} />

      {/* Price Section - Only show if price not in header */}
      {courses.every(course => !course.price) && <PriceSection courses={courses} />}

      {/* Signup Section */}
      <ClientSignupSection preselectedCourse={preselectedCourse} scheduleOptions={scheduleOptions} />

      {/* Related Training Section */}
      {relatedTraining && (
        <RelatedTrainingSection
          title={relatedTraining.title}
          description={relatedTraining.description}
          links={relatedTraining.links}
        />
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
