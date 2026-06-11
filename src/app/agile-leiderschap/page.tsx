import CoursePageLayout from '../../components/layouts/CoursePageLayout';
import { agileLeiderschapCourse, agileLeiderschapMetadata } from '../../data/courses';
import { Metadata } from 'next';

export const metadata: Metadata = agileLeiderschapMetadata;

export default function AgileLeiderschapPage() {
  const courses = [agileLeiderschapCourse];

  const relatedTraining = {
    title: "Vervolg je Agile reis",
    description: "Ontdek andere trainingen die perfect aansluiten bij jouw ontwikkeling.",
    links: [
      {
        href: "/product-owner",
        text: "Product Owner Training",
        variant: "primary" as const
      },
      {
        href: "/sturen-met-obeya",
        text: "Sturen met Obeya",
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
      heroTitle="Agile Leiderschap Opleiding"
      heroSubtitle="Ontwikkel je tot een wendbare leider die teams kan begeleiden in een veranderende wereld. Leer hoe je als leidinggevende teams kunt helpen om effectiever samen te werken en betere resultaten te behalen."
      preselectedCourse="Agile Leiderschap Opleiding"
      relatedTraining={relatedTraining}
    />
  );
}