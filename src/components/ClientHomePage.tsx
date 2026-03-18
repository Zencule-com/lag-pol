'use client';

import { useState } from 'react';
import Link from 'next/link';
import ClickSpark from './ClickSpark';
import Navigation from './Navigation';
import ClientSignupSection from './ClientSignupSection';
import CardSwap, { Card } from './CardSwap';
import Footer from './sections/Footer';

interface ClientHomePageProps {
  scheduleOptions?: { value: string; label: string }[];
}

export default function ClientHomePage({ scheduleOptions }: ClientHomePageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ClickSpark
      sparkColor='red'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div className="min-h-screen bg-white">
        {/* Header */}
        <Navigation showMargin={false} />

        {/* Hero Section */}
        <section className="relative flex items-center overflow-hidden bg-white pt-20 lg:pt-32">
          {/* Modern gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100/50"></div>

          {/* Geometric accent shapes */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-300/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 container mx-auto px-6 lg:px-8 py-12 lg:py-20">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left Column - Main Content */}
              <div className="space-y-8">
                {/* Main Heading */}
                <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-primary-500 italic font-black tracking-tight">Agile</span>{' '}
                  <span>Trainingen voor de</span>
                  <span className="block mt-2">Politieoperatie</span>
                </h1>

                {/* Description */}
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-2xl font-light">
                  Praktijkgerichte Agile trainingen die teams helpen sneller te reageren, beter samen te werken en duurzame resultaten te behalen.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col md:flex-row gap-4 pt-4">
                  <button 
                    onClick={() => document.getElementById('training-section')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group relative bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <span className="relative z-10">Bekijk de trainingen</span>
                    <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                  <button 
                    onClick={() => document.getElementById('signup-section')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-white hover:bg-gray-50 text-primary-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 border-2 border-primary-200 hover:border-primary-300 shadow-md hover:shadow-lg"
                  >
                    Direct aanmelden
                  </button>
                </div>

                {/* Trust indicators */}
                <div className="flex items-center gap-8 pt-8 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-600">Praktijkgericht</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="text-sm text-gray-600">Interactief</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span className="text-sm text-gray-600">Certificering</span>
                  </div>
                </div>
              </div>

              {/* Right Column - CardSwap */}
              <div className="hidden lg:flex justify-end relative">
                <div className="relative" style={{ height: '500px', marginBottom: '-100px', marginRight: '-40px' }}>
                  <CardSwap
                    width={450}
                    height={440}
                    cardDistance={50}
                    verticalDistance={60}
                    delay={4000}
                    pauseOnHover={true}
                    skewAmount={4}
                    easing="power1"
                    onCardClick={() => {}}
                  >
                    {/* @ts-expect-error - Card component from JSX file */}
                    <Card className="relative rounded-2xl shadow-2xl p-8 text-white overflow-hidden">
                      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800)' }}></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-[#014682] to-[#013a6c] opacity-75"></div>
                      <div className="relative z-10">
                        <h3 className="text-3xl font-bold mb-4">Scrum Master</h3>
                        <p className="text-lg mb-6 opacity-90">Ontwikkel vaardigheden om teams te begeleiden in een veeleisende praktijk.</p>
                        <div className="flex items-center gap-2 text-blue-100">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="font-medium">2 dagen</span>
                        </div>
                      </div>
                    </Card>
                    {/* @ts-expect-error - Card component from JSX file */}
                    <Card className="relative rounded-2xl shadow-2xl p-8 text-white overflow-hidden">
                      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=800)' }}></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-[#f5b000] to-[#d19000] opacity-75"></div>
                      <div className="relative z-10">
                        <h3 className="text-3xl font-bold mb-4">Product Owner</h3>
                        <p className="text-lg mb-6 opacity-90">Leer productvisie te ontwikkelen en waarde te maximaliseren voor de organisatie.</p>
                        <div className="flex items-center gap-2 text-yellow-100">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="font-medium">2 dagen</span>
                        </div>
                      </div>
                    </Card>
                    {/* @ts-expect-error - Card component from JSX file */}
                    <Card className="relative rounded-2xl shadow-2xl p-8 text-white overflow-hidden">
                      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800)' }}></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-[#E81F83] to-[#db2777] opacity-75"></div>
                      <div className="relative z-10">
                        <h3 className="text-3xl font-bold mb-4">Agile Coach</h3>
                        <p className="text-lg mb-6 opacity-90">Word een aanjager van wendbaar werken en borging van Agile methodes.</p>
                        <div className="flex items-center gap-2 text-pink-100">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="font-medium">4 dagen</span>
                        </div>
                      </div>
                    </Card>
                    {/* @ts-expect-error - Card component from JSX file */}
                    <Card className="relative rounded-2xl shadow-2xl p-8 text-white overflow-hidden">
                      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1551434678-e076c223a692?w=800)' }}></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-[#3f8ac8] to-[#014682] opacity-75"></div>
                      <div className="relative z-10">
                        <h3 className="text-3xl font-bold mb-4">Obeya Trainingen</h3>
                        <p className="text-lg mb-6 opacity-90">Leer werken met de Obeya-methodiek voor effectief management en strategie-implementatie.</p>
                        <div className="flex items-center gap-2 text-blue-100">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="font-medium">2-4 dagen</span>
                        </div>
                      </div>
                    </Card>
                  </CardSwap>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-6 lg:px-8 bg-white">
          <div className="container mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Text Content */}
            <div className="text-left space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-1 bg-primary-500 rounded-full mr-4"></div>
                <h2 className="text-4xl font-bold text-gray-900">Agile Trainingen voor de politieoperatie</h2>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">
                Lean Agile Groep ondersteunt de politie bij het versterken van wendbaarheid en samenwerking. Dit doen we op twee manieren:
              </p>
              <ol className="list-decimal list-inside space-y-4 text-lg text-gray-700 leading-relaxed">
                <li>
                  We bieden praktijkgerichte Agile trainingen aan op locatie waarvoor je je individueel kunt inschrijven.
                  Op deze landingspagina laten we zien welke trainingen we hiervoor bieden en kun je je hiervoor inschrijven.
                </li>
                <li>
                  Daarnaast bieden we maatwerktrajecten voor coaching van operationele teams in de eenheden. Hiervoor kun je op deze site een contactformulier invullen.
                  We maken dan graag een afspraak om een offerte op maat te maken.
                </li>
              </ol>

              <div className="space-y-4 pt-4">
                <h3 className="text-xl font-bold text-gray-900">Voor wie zijn de trainingen?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Onze Agile trainingen zijn specifiek ontwikkeld voor operationele teams. Bedrijfsvoering en dienstverlening die direct adviseren, leidinggeven of samenwerken met de operationele eenheden kunnen ook gebruik maken van deze aanbesteding. Deze trainingen zijn ook beschikbaar voor teams buiten de politieorganisatie.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Onze trainingen zijn praktijkgericht, interactief en nuchter, zodat teams direct zelf aan de slag kunnen
                  met meer samenwerking, werkplezier en resultaat.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Dit is geen algemene trainingswebshop, maar een gespecialiseerd aanbod voor politieprofessionals die hun samenwerking
                  en resultaten willen verbeteren.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Dit aanbod richt zich niet op ICT of bedrijfsvoering die niet direct adviseert of in lijn gekoppeld is aan de operatie.
                </p>
              </div>
            </div>

          

            {/* Right Column: Grid of Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-200">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Praktijkgericht</h3>
                <p className="text-gray-600 leading-relaxed">Geen theoretische verhalen, maar concrete tools en technieken die direct toepasbaar zijn in jouw dagelijkse werk.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-200">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Interactief</h3>
                <p className="text-gray-600 leading-relaxed">Actieve workshops met veel oefenen, rollenspellen en praktijkcases uit de politieorganisatie.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-200 md:col-span-2">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Nuchter</h3>
                <p className="text-gray-600 leading-relaxed">Geen marketingpraatjes, maar eerlijke, praktische aanpak die werkt in de realiteit van de politie.</p>
              </div>
            </div>
          </div>
       
        </section>

        {/* Training Types Section */}
        <section id="training-section" className="py-24 px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-primary-500">
          {/* Subtle overlay for text readability */}
          <div className="absolute inset-0 bg-dark-900/60 z-10"></div>
          <div className="relative z-20 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-1 bg-primary-500 rounded-full mr-4"></div>
                <h2 className="text-4xl font-bold text-white">Onze trainingen</h2>
              </div>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Kies de training die het beste past bij jouw rol en ontwikkelingsbehoeften binnen de politieorganisatie.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Scrum Master Trainingen */}
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 border border-white/20">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Scrum Master</h3>
                  <div className="h-12 mb-6 flex items-center">
                    <p className="text-gray-200 leading-relaxed">
                      Ontwikkel vaardigheden om teams te begeleiden in een veeleisende praktijk.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <a href="/scrum-master" className="flex items-center justify-between bg-white/20 p-4 rounded-lg hover:bg-primary-500/30 hover:border-primary-400 border border-white/30 transition-all duration-200 group">
                    <span className="font-medium text-white group-hover:text-primary-200">Scrum Master Basis</span>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm bg-primary-500 text-white px-3 py-1 rounded-full font-medium">2 dagen</span>
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-primary-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                  <a href="/scrum-master-vervolg" className="flex items-center justify-between bg-white/20 p-4 rounded-lg hover:bg-accent-500/30 hover:border-accent-400 border border-white/30 transition-all duration-200 group">
                    <span className="font-medium text-white group-hover:text-accent-200">Scrum Master Verdiept</span>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm bg-accent-500 text-white px-3 py-1 rounded-full font-medium">2 dagen</span>
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-accent-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>

              {/* Product Owner Trainingen */}
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 border border-white/20">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Product Owner</h3>
                  <div className="h-12 mb-6 flex items-center justify-center">
                    <p className="text-gray-200 leading-relaxed text-center">
                      Leer richting en waarde creëren in een complexe praktijk.
                    </p>
                  </div>
                </div>
                
                
                <div className="space-y-3">
                  <a href="/product-owner" className="flex items-center justify-between bg-white/20 p-4 rounded-lg hover:bg-primary-500/30 hover:border-primary-400 border border-white/30 transition-all duration-200 group">
                    <span className="font-medium text-white group-hover:text-primary-200">Product Owner Basis</span>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm bg-primary-500 text-white px-3 py-1 rounded-full font-medium">2 dagen</span>
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-primary-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                  <a href="/product-owner-vervolg" className="flex items-center justify-between bg-white/20 p-4 rounded-lg hover:bg-accent-500/30 hover:border-accent-400 border border-white/30 transition-all duration-200 group">
                    <span className="font-medium text-white group-hover:text-accent-200">Product Owner Verdiept</span>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm bg-accent-500 text-white px-3 py-1 rounded-full font-medium">2 dagen</span>
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-accent-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                  <a href="/po-plus-sm" className="flex items-center justify-between bg-white/20 p-4 rounded-lg hover:bg-primary-500/30 hover:border-primary-400 border border-white/30 transition-all duration-200 group">
                    <span className="font-medium text-white group-hover:text-primary-200">Product Owner ism Scrum Master</span>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm bg-primary-500 text-white px-3 py-1 rounded-full font-medium">3 dagen</span>
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-primary-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>

              {/* Agile Coach Training */}
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 border border-white/20">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Agile Coach</h3>
                  <div className="h-12 mb-6 flex items-center">
                    <p className="text-gray-200 leading-relaxed">
                      Word een ervaren Agile Coach die duurzame verandering kan begeleiden.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <a href="/agile-coach" className="flex items-center justify-between bg-white/20 p-4 rounded-lg hover:bg-primary-500/30 hover:border-primary-400 border border-white/30 transition-all duration-200 group">
                    <span className="font-medium text-white group-hover:text-primary-200">Agile Coach Opleiding</span>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm bg-primary-500 text-white px-3 py-1 rounded-full font-medium">4 dagen</span>
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-primary-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>

              {/* Agile Leiderschap */}
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 border border-white/20">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Agile Leiderschap</h3>
                  <div className="h-12 mb-6 flex items-center">
                    <p className="text-gray-200 leading-relaxed">
                      Ontwikkel een mindset gericht op vertrouwen, wendbaarheid en resultaat.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <a href="/agile-leiderschap" className="flex items-center justify-between bg-white/20 p-4 rounded-lg hover:bg-primary-500/30 hover:border-primary-400 border border-white/30 transition-all duration-200 group">
                    <span className="font-medium text-white group-hover:text-primary-200">Agile Leiderschap Opleiding</span>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm bg-primary-500 text-white px-3 py-1 rounded-full font-medium">1.5 dagen</span>
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-primary-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>

              {/* Obeya Trainingen */}
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 border border-white/20">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Obeya Trainingen</h3>
                  <div className="h-12 mb-6 flex items-center">
                    <p className="text-gray-200 leading-relaxed">
                      Leer werken met de Obeya-methodiek voor effectief management en strategie-implementatie.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Link href="/leading-with-obeya" className="flex items-center justify-between bg-white/20 p-4 rounded-lg hover:bg-primary-500/30 hover:border-primary-400 border border-white/30 transition-all duration-200 group">
                    <span className="font-medium text-white group-hover:text-primary-200">Sturen met Obeya</span>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm bg-primary-500 text-white px-3 py-1 rounded-full font-medium">2 dagen</span>
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-primary-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                  <Link href="/facilitator-in-obeya" className="flex items-center justify-between bg-white/20 p-4 rounded-lg hover:bg-accent-500/30 hover:border-accent-400 border border-white/30 transition-all duration-200 group">
                    <span className="font-medium text-white group-hover:text-accent-200">Facilitator in Obeya</span>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm bg-accent-500 text-white px-3 py-1 rounded-full font-medium">2 dagen</span>
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-accent-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Maatwerk trajecten */}
              <div id="team-trajecten" className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 border border-white/20">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Maatwerk trajecten</h3>
                  <div className="h-12 mb-6 flex items-center">
                    <p className="text-gray-200 leading-relaxed">
                      Op maat gemaakte trainingen en trajecten voor teamspecifieke behoeften en uitdagingen.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Link
                    href="/team-trajecten"
                    className="w-full flex items-center justify-between bg-white/20 p-4 rounded-lg border border-white/30 hover:bg-accent-500/30 hover:border-accent-400 transition-all duration-200 group"
                  >
                    <span className="font-medium text-white group-hover:text-accent-200">Team-specifieke trajecten</span>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm bg-accent-500 text-white px-3 py-1 rounded-full font-medium">Aanvraag</span>
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-accent-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="w-full flex items-center justify-between bg-white/20 p-4 rounded-lg border border-white/30 hover:bg-primary-500/30 hover:border-primary-400 transition-all duration-200 group"
                  >
                    <span className="font-medium text-white group-hover:text-primary-200">Organisatie-ontwikkeling</span>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm bg-primary-500 text-white px-3 py-1 rounded-full font-medium">Aanvraag</span>
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-primary-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

           {/* FAQ Section */}
           <section className="py-20 px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-1 bg-primary-500 rounded-full mr-4"></div>
                <h2 className="text-4xl font-bold text-gray-900">Veelgestelde vragen</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Alles wat je moet weten over onze Agile trainingen voor de politie.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Zijn de trainingen specifiek voor de politie?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Ja, alle trainingen zijn speciaal aangepast voor de politieorganisatie. We gebruiken praktijkcases uit de politie en houden rekening met jullie specifieke uitdagingen en werkprocessen.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Hoe lang duren de trainingen?</h3>
                <p className="text-gray-700 leading-relaxed">
                  De meeste trainingen duren 2 dagen, behalve de Agile Coach training (4 dagen) en Agile Leiderschap (1.5 dagen). Alle trainingen zijn intensief en praktijkgericht.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Kan ik een training op locatie volgen?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Ja, we bieden zowel open trainingen als incompany trainingen aan. Voor grote groepen kunnen we de training op jullie locatie geven.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ik wil een snellere startdatum, kan dat?</h3>
                <p className="text-gray-700 leading-relaxed">
                  PENDING
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Wat zijn de voorwaarden voor deelname?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Voor de meeste trainingen zijn geen specifieke vooropleidingen vereist. Wel verwachten we dat je werkzaam bent binnen de politieorganisatie en bereid bent om actief deel te nemen.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Signup Section */}
        <ClientSignupSection scheduleOptions={scheduleOptions} />


        {/* Footer */}
        <Footer />
      </div>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Contact opnemen</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  Voor maatwerk trainingen kunt u contact met ons opnemen via:
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Telefoon</p>
                      <p className="text-primary-600 font-medium">088-5326720</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-accent-100 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">E-mail</p>
                      <p className="text-accent-600 font-medium">info@leanagilegroep.nl</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    We nemen binnen 24 uur contact met u op om uw specifieke behoeften te bespreken.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium"
                >
                  Sluiten
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </ClickSpark>
  );
}
