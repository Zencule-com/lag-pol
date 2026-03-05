import { Metadata } from 'next';
import CoursePageLayout from '../../components/layouts/CoursePageLayout';
import { poPlusSmCourse, poPlusSmMetadata } from '../../data/courses';

export const metadata: Metadata = {
  title: poPlusSmMetadata.title,
  description: poPlusSmMetadata.description,
  keywords: poPlusSmMetadata.keywords,
  openGraph: poPlusSmMetadata.openGraph,
};

export default function PoPlusSmPage() {
  const courses = [poPlusSmCourse];

  const relatedTraining = {
    title: "Vervolg je Agile reis",
    description: "Ontdek andere trainingen die perfect aansluiten bij jouw ontwikkeling.",
    links: [
      {
        href: "/product-owner-vervolg",
        text: "Product Owner Verdiept",
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
      heroTitle="Product Owner & Samenwerking Scrum Master"
      heroSubtitle={
        "Op dag 1 volg je de Product Owner training.\n\nOp dag 2 ga je aan de slag samen met je Scrum Master om dezelfde taal te leren spreken. Jullie weten hoe je samen richting geeft én ruimte laat, en hoe je bewuster stuurt op waarde, wendbaarheid en eigenaarschap in het team.\n\nJe gaat naar huis met een concreet actieplan waar je direct mee aan de slag kunt. En misschien wel het belangrijkste: jullie hebben elkaar echt gevonden als sparringpartner. Vanaf nu werken de Product Owner en Scrum Master niet naast elkaar, maar nog sterker mét elkaar."
      }
      preselectedCourse="PO + SM / Beginner"
      relatedTraining={relatedTraining}
    />
  );
}

