'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface NavigationProps {
  buttonText?: string;
  buttonLink?: string;
  showMargin?: boolean;
}

export default function Navigation({ 
  buttonText = "BEKIJK TRAININGEN", 
  buttonLink = "/#training-section",
  showMargin = true 
}: NavigationProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);

  // removed unused click handler

  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 1000);
    setHoverTimeout(timeout);
  };

  const handleMegaMenuLeave = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setIsDropdownOpen(false);
  };

  const headerClasses = showMargin 
    ? "m-10 absolute top-0 left-0 right-0 z-[9999]"
    : "absolute top-0 left-0 right-0 z-[9999]";

  const textColorClasses = "text-gray-900";

  const courses = [
    {
      category: "Scrum Master",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "primary",
      courses: [
        { name: "Scrum Master Basis", link: "/scrum-master", duration: "2 dagen" },
        { name: "Scrum Master Verdiept", link: "/scrum-master-vervolg", duration: "2 dagen" }
      ]
    },
    {
      category: "Product Owner",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      color: "primary",
      courses: [
        { name: "Product Owner Basis", link: "/product-owner", duration: "2 dagen" },
        { name: "Product Owner Verdiept", link: "/product-owner-vervolg", duration: "2 dagen" },
        { name: "Product Owner ism Scrum Master", link: "/po-plus-sm", duration: "3 dagen" }
      ]
    },
    {
      category: "Agile Coach",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "accent",
      courses: [
        { name: "Agile Coach Opleiding", link: "/agile-coach", duration: "4 dagen" }
      ]
    },
    {
      category: "Agile Leiderschap",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "accent",
      courses: [
        { name: "Agile Leiderschap Opleiding", link: "/agile-leiderschap", duration: "1.5 dagen" }
      ]
    },
    {
      category: "Obeya",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: "primary",
      courses: [
        { name: "Sturen met Obeya", link: "/sturen-met-obeya", duration: "4 dagen" },
        { name: "Facilitator in Obeya", link: "/facilitator-in-obeya", duration: "2 dagen" }
      ]
    }
  ];

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-6 lg:px-8">

        {/* Main navigation row */}
        <div className="pt-6 pb-6 relative">
          <div className="flex items-center justify-between">
            {/* Left side - Logos and Trainingen */}
            <div className="flex items-center space-x-12">
              <div className="flex items-center">
                <Link href="/" className="flex items-center">
                  <Image 
                    src="/images/lag-logo.png" 
                    alt="Lean Agile Groep Logo" 
                    width={160}
                    height={48}
                    className="h-8 md:h-12 w-auto"
                    priority
                  />
                </Link>
              </div>

              {/* Trainingen Dropdown */}
              <div className="hidden lg:block relative group">
                <button
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className={`flex items-center space-x-2 ${textColorClasses} hover:text-primary-600 font-medium transition-colors duration-200 py-2 px-1`}
                  aria-label={buttonText}
                >
                  <span>Trainingen</span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <Link
                href="/team-trajecten"
                className={`hidden lg:inline-flex ${textColorClasses} hover:text-primary-600 font-medium transition-colors duration-200 py-2 px-1`}
              >
                Team Trajecten
              </Link>
            </div>

            {/* Right side - Contact Info */}
            <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-900">
              <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
              <span className="font-medium">Contact:</span> 
              <span className="text-primary-600 font-semibold">088-5326720</span>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 text-gray-900 hover:text-primary-600 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 bg-white/95 backdrop-blur-md rounded-lg shadow-lg border border-gray-200/50">
              <div className="px-4 py-6 space-y-4">
                {/* Mobile Trainingen Section */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Trainingen</h3>
                  <div className="space-y-2">
                    {courses.map((category, index) => (
                      <div key={index} className="space-y-2">
                        <h4 className="font-medium text-gray-700 text-sm">{category.category}</h4>
                        <div className="ml-4 space-y-1">
                          {category.courses.map((course, courseIndex) => (
                            <Link
                              key={courseIndex}
                              href={course.link}
                              className="block py-2 text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {course.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <Link
                  href="/team-trajecten"
                  className="block w-full text-center py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Team Trajecten
                </Link>

                {/* Mobile Contact Info */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="font-medium">Contact:</span> 
                    <span className="text-primary-600 font-semibold">088-5326720</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Invisible bridge to prevent gap */}
          {isDropdownOpen && (
            <div 
              className="absolute top-full left-0 right-0 h-2 z-40"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            ></div>
          )}
          
          {/* Desktop Mega Menu - Hidden on mobile */}
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMegaMenuLeave}
            className={`hidden lg:block absolute top-full -top-5 left-0 right-0 bg-white shadow-xl border-t border-gray-200 z-50 rounded-xl transition-all duration-300 ease-in-out ${
              isDropdownOpen 
                ? 'opacity-100 visible transform translate-y-0' 
                : 'opacity-0 invisible transform -translate-y-2 pointer-events-none'
            }`}
          >
              <div className="w-full px-6 lg:px-8 py-8">
                <div className="max-w-7xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                    {courses.map((category, index) => (
                      <div key={index} className="space-y-4">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className={`w-8 h-8 bg-${category.color}-100 rounded-lg flex items-center justify-center text-${category.color}-600`}>
                            {category.icon}
                          </div>
                          <h3 className="font-semibold text-gray-900 text-lg">{category.category}</h3>
                        </div>
                        <div className="space-y-3">
                          {category.courses.map((course, courseIndex) => (
                            <Link
                              key={courseIndex}
                              href={course.link}
                              className="block p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group border border-gray-100 hover:border-gray-200"
                            >
                              <span className="text-sm font-medium text-gray-700 group-hover:text-primary-600">
                                {course.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="text-center">
                      <Link
                        href={buttonLink}
                        className="inline-block bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
                      >
                        Bekijk alle trainingen
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </header>
  );
}
