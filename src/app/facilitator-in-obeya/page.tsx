import CoursePageLayout from '../../components/layouts/CoursePageLayout';
import { facilitatorInObeyaCourse, facilitatorInObeyaMetadata } from '../../data/courses';
import { Metadata } from 'next';

export const metadata: Metadata = facilitatorInObeyaMetadata;

export default function FacilitatorInObeyaPage() {
  const courses = [facilitatorInObeyaCourse];

  const relatedTraining = {
    title: "Vervolg je Agile reis",
    description: "Ontdek andere trainingen die perfect aansluiten bij jouw ontwikkeling.",
    links: [
      {
        href: "/sturen-met-obeya",
        text: "Sturen met Obeya",
        variant: "primary" as const
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
      heroTitle="Facilitator in Obeya"
      heroSubtitle="Ontwikkel de vaardigheden om Obeya sessies te faciliteren en teams te begeleiden in het gebruik van de Obeya-methodiek. Leer hoe je als facilitator de verbinding tussen strategie en uitvoering faciliteert."
      preselectedCourse="Facilitator in Obeya"
      relatedTraining={relatedTraining}
    />
  );
}
