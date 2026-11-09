import { Metadata } from 'next';
import Image from 'next/image';
import Navigation from '../../components/Navigation';
import HeroSection from '../../components/HeroSection';
import WorkshopSignupSection from '../../components/WorkshopSignupSection';
import Footer from '../../components/sections/Footer';
import { capaciteitWorkshop } from '../../data/workshops';

export const metadata: Metadata = {
  title: 'Workshop Grip op capaciteit en werkvoorraad - Politie',
  description: 'Gratis workshop van twee uur voor eenheidsleiding, sectorhoofden, teamchefs en teamleiders. Ontdek hoe je capaciteit slimmer afstemt op je werkvoorraad en je doelen.',
  keywords: [
    'workshop capaciteit politie',
    'werkvoorraad politie',
    'capaciteitsmanagement',
    'De Wendbare Politie',
    'teamchef workshop'
  ],
  openGraph: {
    title: 'Workshop Grip op capaciteit en werkvoorraad',
    description: 'Te veel werk? Te weinig mensen? Zo pak je dat aan! Gratis workshop van twee uur voor leidinggevenden bij de Politie.',
    type: 'website',
  },
};

const facts = [
  { label: 'Voor', value: 'Eenheidsleiding, sectorhoofden, teamchefs en teamleiders', wide: true },
  { label: 'Duur', value: capaciteitWorkshop.duration },
  { label: 'Groepsgrootte', value: `Max. ${capaciteitWorkshop.maxParticipants} deelnemers` },
  { label: 'Locatie', value: '4 sessies in de regio' },
];

const takeaways = [
  'Nieuwe inzichten in hoe je capaciteit afstemt op werkvoorraad en doelen',
  'Ervaringen van collega’s',
  'Concrete handvatten voor je eigen vraagstuk',
];

const program = [
  { title: 'Samen met collega’s uit je regio', text: 'Je werkt in een kleine groep aan herkenbare vraagstukken.' },
  { title: 'Best practices uit de Politiepraktijk', text: 'Trainers en coaches die de praktijk bij de Politie kennen, laten zien wat werkt.' },
  { title: 'Een methodische aanpak', text: 'Je leert stap voor stap hoe je capaciteit en werkvoorraad op elkaar afstemt.' },
];

const audience = ['Eenheidsleiding', 'Sectorhoofden', 'Teamchefs', 'Teamleiders'];

export default function GripOpCapaciteitPage() {
  const { sessions, contact, totalSessions } = capaciteitWorkshop;
  const placeholders = Math.max(totalSessions - sessions.length, 0);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navigation showMargin={false} />

      {/* Hero Section */}
      <HeroSection
        title="Grip op capaciteit en werkvoorraad"
        subtitle={'Te veel werk? Te weinig mensen?\nZo pak je dat aan!'}
        aside={
          <div className="bg-white rounded-2xl shadow-lg p-8 w-full lg:max-w-md">
            <div className="text-center mb-6">
              <div className="text-5xl font-bold text-primary-500 mb-2">Gratis</div>
              <div className="text-lg text-gray-600">Workshop voor leidinggevenden bij de Politie</div>
            </div>
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-200">
              {facts.map((fact) => (
                <div key={fact.label} className={'wide' in fact ? 'col-span-2' : ''}>
                  <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">{fact.label}</div>
                  <div className="text-lg font-semibold text-gray-900">{fact.value}</div>
                </div>
              ))}
            </div>
          </div>
        }
      />

      {/* Herken je dit? */}
      <section className="py-20 lg:py-28 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-12">
          <h2 className="lg:col-span-4 text-sm font-semibold text-primary-500 uppercase tracking-widest pt-3">
            Herken je dit?
          </h2>
          <p className="lg:col-span-8 text-3xl md:text-4xl font-light text-gray-900 leading-snug">
            Er ligt meer werk dan je team aankan. Elke week moet je opnieuw strak prioriteren in mensen, middelen en werkvoorraad om alles rond te krijgen.
          </p>
        </div>
      </section>

      {/* Wat ga je doen? */}
      <section className="py-20 lg:py-28 px-6 lg:px-8 bg-dark-50 border-y border-dark-200">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Wat ga je doen?</h2>
            <div className="text-lg text-gray-700 leading-relaxed space-y-4">
              <p>
                In deze gratis workshop van twee uur ontdek je samen met collega&apos;s uit je regio hoe je capaciteit slimmer afstemt op je werkvoorraad en je doelen.
              </p>
              <p>
                Trainers en coaches die de praktijk bij de Politie kennen, nemen je mee langs inspirerende best practices. Je leert ook hoe je dit methodisch aanpakt, zodat je het direct kunt toepassen.
              </p>
            </div>
          </div>
          <dl className="divide-y divide-dark-200 border-t border-b border-dark-200 self-start">
            {program.map((item) => (
              <div key={item.title} className="py-6">
                <dt className="text-xl font-semibold text-gray-900">{item.title}</dt>
                <dd className="text-gray-600 mt-1">{item.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Wat neem je mee naar huis? */}
      <section className="py-20 lg:py-28 px-6 lg:px-8 bg-primary-500 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-14">Wat neem je mee naar huis?</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {takeaways.map((item, index) => (
              <div key={item} className="border-t border-white/30 pt-6">
                <div className="text-5xl font-black text-primary-200 mb-4">0{index + 1}</div>
                <p className="text-xl leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voor wie? */}
      <section className="py-20 lg:py-28 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-5">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Voor wie?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Per sessie is er plek voor maximaal {capaciteitWorkshop.maxParticipants} deelnemers, dus meld je snel aan.
            </p>
            <a
              href="#signup-section"
              className="inline-block bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Direct aanmelden
            </a>
          </div>
          <ul className="lg:col-span-7 divide-y divide-dark-200 border-t border-b border-dark-200">
            {audience.map((role) => (
              <li key={role} className="py-5 text-2xl font-semibold text-gray-900">{role}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Data en locaties */}
      <section className="py-20 lg:py-28 px-6 lg:px-8 bg-primary-50">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Data en locaties</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {sessions.length > 0
                ? 'De workshop wordt vier keer gegeven in de regio. De eerste datum staat vast, de andere volgen nog. Kies bij je aanmelding de sessie die bij jou past, of laat weten dat je op de hoogte gehouden wilt worden.'
                : 'De workshop wordt vier keer gegeven in de regio. Data en locaties zijn nog nader te bepalen. Meld je nu al aan, dan hoor je als eerste wanneer en waar de sessie in jouw regio plaatsvindt.'}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sessions.map((session) => (
              <div key={`${session.region}-${session.date}`} className="bg-white rounded-xl p-6 border border-primary-100">
                <div className="text-sm font-semibold text-primary-500 uppercase tracking-wide mb-3">{session.region}</div>
                <div className="text-xl font-bold text-gray-900">{session.date}</div>
                {session.time && <div className="text-gray-900 mt-1">{session.time}</div>}
                <div className="text-gray-600 mt-1">{session.location}</div>
              </div>
                ))}
            {Array.from({ length: placeholders }, (_, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-dashed border-primary-200">
                <div className="text-sm font-semibold text-primary-500 uppercase tracking-wide mb-3">Sessie {sessions.length + index + 1}</div>
                <div className="text-xl font-bold text-gray-900">Datum volgt</div>
                <div className="text-gray-600 mt-1">Locatie nader te bepalen</div>
              </div>
                ))}
          </div>
        </div>
      </section>

      {/* Organisatie en contact */}
      <section className="pt-16 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:divide-x divide-dark-200">
          <div className="md:pr-10">
            <h2 className="text-sm font-semibold text-primary-500 uppercase tracking-widest mb-4">Organisatie</h2>
            <p className="text-xl text-gray-800 leading-relaxed">
              De workshop wordt georganiseerd in samenwerking met De Wendbare Politie en coaches van Lean Agile Groep.
            </p>
          </div>
          <div className="md:pl-10">
            <h2 className="text-sm font-semibold text-primary-500 uppercase tracking-widest mb-4">Vragen?</h2>
            <p className="text-xl text-gray-800 leading-relaxed">
              Bel {contact.name}
            </p>
            <a href={contact.phoneHref} className="text-3xl font-bold text-primary-500 hover:underline">{contact.phone}</a>
          </div>
        </div>
        <Image
          src="/images/workshop/team-coaches.png"
          alt="Trainers en coaches van Lean Six Sigma Groep"
          width={603}
          height={254}
          className="hidden md:block w-full max-w-xl h-auto ml-auto -mr-6 lg:-mr-8 mt-16"
        />
      </section>

      {/* Signup Section */}
      <WorkshopSignupSection
        workshop={capaciteitWorkshop.title}
        sessions={sessions}
        contact={contact}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
