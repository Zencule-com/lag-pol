import CoursePageLayout from '../../components/layouts/CoursePageLayout';
import { leadingWithObeyaCourse, leadingWithObeyaMetadata } from '../../data/courses';
import { Metadata } from 'next';

export const metadata: Metadata = leadingWithObeyaMetadata;

export default function LeadingWithObeyaPage() {
  const courses = [leadingWithObeyaCourse];

  const relatedTraining = {
    title: "Vervolg je Agile reis",
    description: "Ontdek andere trainingen die perfect aansluiten bij jouw ontwikkeling.",
    links: [
      {
        href: "/facilitator-in-obeya",
        text: "Facilitator in Obeya",
        variant: "accent" as const
      },
      {
        href: "/agile-leiderschap",
        text: "Agile Leiderschap Opleiding",
        variant: "primary" as const
      },
      {
        href: "/",
        text: "Alle trainingen",
        variant: "gray" as const
      }
    ]
  };

  return (
    <CoursePageLayout
      courses={courses}
      heroTitle="Sturen met Obeya de team kickstart"
      heroSubtitle="Leer hoe je als managementteam effectief kunt werken met Obeya. Ontwikkel vaardigheden om strategie naar tactiek te vertalen en teams te begeleiden naar betere resultaten."
      preselectedCourse="Sturen met Obeya de team kickstart"
      relatedTraining={relatedTraining}
    />
  );
}
