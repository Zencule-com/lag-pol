'use client';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  className?: string;
  price?: {
    basePrice: number;
    baseParticipants: number;
    maxParticipants: number;
    note?: string;
  };
  courseDetails?: {
    duration: string;
    certificate: string;
  };
  trainingDates?: {
    courseName: string;
    dates: string;
    location: string;
  }[];
}

export default function HeroSection({ 
  title, 
  subtitle, 
  className = "",
  price,
  courseDetails,
  trainingDates
}: HeroSectionProps) {
  const scrollToSignup = (selectedDate?: string) => {
    // Store the selected training date if provided
    if (selectedDate) {
      sessionStorage.setItem('preselectedTrainingDate', selectedDate);
    }
    const signupSection = document.getElementById('signup-section');
    if (signupSection) {
      signupSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  const handleScrollToSignup = () => {
    scrollToSignup();
  };
  
  // Map training date display to form value
  const getTrainingDateValue = (date: { courseName: string; dates: string; location: string }) => {
    if (date.courseName === 'Scrum Master' && date.dates === '7 & 9 april') {
      return 'Scrum Master: 7 en 9 april in Utrecht';
    }
    if (date.courseName === 'Product Owner' && date.dates === '20 & 21 april') {
      return 'Product Owner: 20 en 21 april in Utrecht';
    }
    return '';
  };
  return (
    <section className={`relative flex items-center overflow-hidden bg-white pt-20 lg:pt-32 ${className}`}>
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100/50"></div>

      {/* Geometric accent shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-300/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left column - Title and subtitle */}
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight max-w-3xl">
              <span className="text-primary-500 italic font-black tracking-tight">
                {title.split(' ')[0]}
              </span>
              {' ' + title.split(' ').slice(1).join(' ')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed max-w-3xl font-light whitespace-pre-line">
              {subtitle}
            </p>
            
            {/* Subtle Quick Facts - No card */}
            {courseDetails && (
              <div className="flex gap-8 mt-6">
                <div>
                  <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Duur</div>
                  <div className="text-lg font-semibold text-gray-900">{courseDetails.duration}</div>
                </div>
                <div>
                  <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Certificaat</div>
                  <div className="text-lg font-semibold text-gray-900">{courseDetails.certificate}</div>
                </div>
              </div>
            )}
            
            {/* CTA Button */}
            <div className="mt-8">
              <button
                onClick={handleScrollToSignup}
                className="group relative bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <span className="relative z-10">Direct aanmelden</span>
                <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right column - Complete Price Card */}
          {price && (
            <div className="lg:flex lg:justify-end">
              <div className="bg-white rounded-2xl shadow-lg p-8 w-full lg:max-w-md">
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-primary-500 mb-2">
                    € {price.basePrice.toLocaleString('nl-NL')},-
                  </div>
                  <div className="text-lg text-gray-600">
                    Prijs per deelnemer op basis van {price.baseParticipants} deelnemers
                  </div>
                </div>
                
                <div className="space-y-4 pt-6 border-t border-gray-200">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <div className="text-gray-700 text-sm space-y-2">
                      <p>
                        Wanneer er meer deelnemers zijn wordt de prijs lager, deze wordt namelijk doorgerekend voor het aantal deelnemers.
                      </p>
                      <p>
                        De prijs hierboven is de prijs die je gebruikt in je Youforce aanvraag studiefaciliteiten.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <p className="text-gray-700 text-sm">
                      Maximaal {price.maxParticipants} deelnemers per training
                    </p>
                  </div>
                </div>
                
                {/* Training Dates Section */}
                {trainingDates && trainingDates.length > 0 && (
                  <div className="pt-6 mt-6 border-t border-gray-200">
                    <div className="flex items-center mb-4">
                      <svg className="w-5 h-5 text-primary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Beschikbare data</h3>
                    </div>
                    <div className="space-y-2 mb-4">
                      {trainingDates.map((date, index) => (
                        <div key={index} className="flex items-start">
                          <svg className="w-4 h-4 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <div className="text-sm text-gray-700">
                            <span className="font-medium">{date.courseName}</span>
                            {' · '}
                            <span>{date.dates}</span>
                            {' · '}
                            <span className="text-gray-600">({date.location})</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => {
                        const firstDate = trainingDates && trainingDates.length > 0 
                          ? getTrainingDateValue(trainingDates[0])
                          : undefined;
                        scrollToSignup(firstDate);
                      }}
                      className="w-full bg-primary-500 hover:bg-primary-600 text-white px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      Direct aanmelden
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
