'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface ClientSignupSectionProps {
  preselectedCourse?: string;
  variant?: 'training' | 'team';
}

export default function ClientSignupSection({ preselectedCourse = "", variant = 'training' }: ClientSignupSectionProps) {
  const isTeamVariant = variant === 'team';
  const trainingScheduleOptions = [
    { value: 'Scrum Master: 2 en 3 maart in Utrecht', label: 'Scrum Master · 2 & 3 maart (Utrecht)' },
    { value: 'Product Owner: 20 en 21 april in Utrecht', label: 'Product Owner · 20 & 21 april (Utrecht)' },
    { value: 'Gecombineerde PO/SM: 13-16 april in Utrecht', label: 'Gecombineerde PO/SM · 13-16 april (Utrecht)' },
    { value: 'Andere datum in overleg', label: 'Andere datum (in overleg)' },
  ];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    province: [] as string[],
    course: isTeamVariant ? 'Team trajecten' : preselectedCourse,
    trainingDate: '',
    phone: '',
    costCenter: '',
    eenheid: '',
    team: '',
    message: '',
    privacyAccepted: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Check for preselected training date from sessionStorage
  useEffect(() => {
    if (!isTeamVariant && typeof window !== 'undefined') {
      const preselectedDate = sessionStorage.getItem('preselectedTrainingDate');
      if (preselectedDate) {
        setFormData(prev => ({
          ...prev,
          trainingDate: preselectedDate
        }));
        // Clear it after using it
        sessionStorage.removeItem('preselectedTrainingDate');
      }
    }
  }, [isTeamVariant]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (name === 'province' && type === 'select-multiple') {
      const selectedOptions = Array.from((e.target as HTMLSelectElement).selectedOptions, option => option.value);
      setFormData(prev => ({
        ...prev,
        [name]: selectedOptions
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.privacyAccepted) {
      alert('Je moet akkoord gaan met de privacyverklaring.');
      return;
    }
    
    if (formData.province.length === 0) {
      alert('Je moet ten minste één provincie selecteren.');
      return;
    }

    if (!isTeamVariant) {
      if (!formData.costCenter.trim()) {
        alert('Kostenplaats is verplicht.');
        return;
      }
      if (!formData.trainingDate.trim()) {
        alert('Selecteer een beschikbare trainingsdatum.');
        return;
      }
    }

    if (isTeamVariant) {
      if (!formData.phone.trim()) {
        alert('Telefoonnummer is verplicht.');
        return;
      }
    }

    if (!formData.eenheid.trim()) {
      alert('Eenheid is verplicht.');
      return;
    }

    if (!formData.team.trim()) {
      alert('Team is verplicht.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          province: [],
          course: isTeamVariant ? 'Team trajecten' : preselectedCourse,
          trainingDate: '',
          phone: '',
          costCenter: '',
          eenheid: '',
          team: '',
          message: '',
          privacyAccepted: false
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="signup-section" className="py-20 px-6 lg:px-8 bg-gradient-to-br from-dark-900 via-dark-800 to-primary-500 relative overflow-hidden">
      {/* DarkVeil background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-scrum-500/20 via-transparent to-primary-500/20 blur-3xl"></div>
      
      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-dark-900/60 z-10"></div>
      
      <div className="relative z-20 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            {isTeamVariant ? 'Heb je interesse in een team traject' : 'Aanmelden voor training'}
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            {isTeamVariant
              ? 'Laat je gegevens achter en we plannen graag een moment om jullie teamtraject te bespreken.'
              : 'Vul het formulier in en we nemen zo snel mogelijk contact met je op.'}
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-8">
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-100 border border-green-200 rounded-xl shadow-sm">
              <p className="text-scrum-800 font-semibold text-center">
                ✅ Aanmelding succesvol verzonden! We nemen zo snel mogelijk contact met je op.
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-100 border border-red-200 rounded-xl shadow-sm">
              <p className="text-red-800 font-semibold text-center">
                ❌ Er is een fout opgetreden. Probeer het opnieuw of neem direct contact op via 088-5326720.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Naam *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Je volledige naam"
                  className="w-full px-4 py-3 border border-white/30 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm bg-white/10 text-white placeholder-gray-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  E-mailadres *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="np12345@politie.nl"
                  className="w-full px-4 py-3 border border-white/30 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm bg-white/10 text-white placeholder-gray-300"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-3">
                In welke provincie(s) ben je bereid de training te volgen
                <span className="ml-2 relative group">
                  <svg className="w-4 h-4 inline text-gray-300 hover:text-white cursor-help" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                    (voorkeur - het is niet gegarandeerd dat het gaat lukken in de geselecteerde provincie)
                  </div>
                </span>
              </label>
              <div className="relative">
                <div className="w-full min-h-[120px] border border-white/30 rounded-lg bg-white/10 p-3 focus-within:ring-2 focus-within:ring-primary-500 focus-within:border-primary-500">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {formData.province.map((province, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-500 text-white"
                      >
                        {province}
                        <button
                          type="button"
                          onClick={() => {
                            setFormData(prev => ({
                              ...prev,
                              province: prev.province.filter((_, i) => i !== index)
                            }));
                          }}
                          className="ml-2 text-white hover:text-gray-200 focus:outline-none"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {[
                      'Drenthe', 'Flevoland', 'Friesland', 'Gelderland', 'Groningen', 'Limburg',
                      'Noord-Brabant', 'Noord-Holland', 'Overijssel', 'Utrecht', 'Zeeland', 'Zuid-Holland'
                    ].map((province) => (
                      <button
                        key={province}
                        type="button"
                        onClick={() => {
                          if (formData.province.includes(province)) {
                            setFormData(prev => ({
                              ...prev,
                              province: prev.province.filter(p => p !== province)
                            }));
                          } else {
                            setFormData(prev => ({
                              ...prev,
                              province: [...prev.province, province]
                            }));
                          }
                        }}
                        className={`px-3 py-2 text-sm rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                          formData.province.includes(province)
                            ? 'bg-primary-500 text-white border-primary-500'
                            : 'bg-white/20 text-white border-white/30 hover:bg-white/30 hover:border-white/50'
                        }`}
                      >
                        {province}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {!isTeamVariant && (
              <>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="course" className="block text-sm font-medium text-white mb-2">
                      Training *
                    </label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-white/30 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm bg-white/10 text-white placeholder-gray-300"
                    >
                      <option value="" className="bg-gray-800 text-white">Selecteer training</option>
                      <option value="Scrum Master Basis / Beginner">Scrum Master Basis</option>
                      <option value="Scrum Master Verdiept / Gevorderd">Scrum Master Verdiept</option>
                      <option value="Product Owner Basis / Beginner">Product Owner Basis</option>
                      <option value="Product Owner Verdiept">Product Owner Verdiept</option>
                      <option value="Product Owner ism Scrum Master / Beginner">Product Owner ism Scrum Master</option>
                      <option value="Agile Coach Opleiding">Agile Coach Opleiding</option>
                      <option value="Agile Leiderschap Opleiding">Agile Leiderschap Opleiding</option>
                      <option value="Sturen met Obeya">Sturen met Obeya</option>
                      <option value="Facilitator in Obeya">Facilitator in Obeya</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="trainingDate" className="block text-sm font-medium text-white mb-2">
                      Beschikbare data (volgens politieplanning) *
                    </label>
                    <select
                      id="trainingDate"
                      name="trainingDate"
                      value={formData.trainingDate}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-white/30 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm bg-white/10 text-white placeholder-gray-300"
                    >
                      <option value="" className="bg-gray-800 text-white">Selecteer datum</option>
                      {trainingScheduleOptions.map((option) => (
                        <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="costCenter" className="block text-sm font-medium text-white mb-2">
                    Kostenplaats *
                  </label>
                  <input
                    type="text"
                    id="costCenter"
                    name="costCenter"
                    value={formData.costCenter}
                    onChange={handleInputChange}
                    placeholder="Bijv. 12345"
                    required
                    className="w-full px-4 py-3 border border-white/30 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm bg-white/10 text-white placeholder-gray-300"
                  />
                </div>
              </>
            )}

            {isTeamVariant && (
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                  Telefoonnummer *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Bijv. 06 1234 5678"
                  required
                  className="w-full px-4 py-3 border border-white/30 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm bg-white/10 text-white placeholder-gray-300"
                />
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="eenheid" className="block text-sm font-medium text-white mb-2">
                  Eenheid *
                </label>
                <input
                  type="text"
                  id="eenheid"
                  name="eenheid"
                  value={formData.eenheid}
                  onChange={handleInputChange}
                  placeholder="Bijv. Landelijke Eenheid"
                  required
                  className="w-full px-4 py-3 border border-white/30 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm bg-white/10 text-white placeholder-gray-300"
                />
              </div>

              <div>
                <label htmlFor="team" className="block text-sm font-medium text-white mb-2">
                  Team *
                </label>
                <input
                  type="text"
                  id="team"
                  name="team"
                  value={formData.team}
                  onChange={handleInputChange}
                  placeholder="Bijv. Team Alpha"
                  required
                  className="w-full px-4 py-3 border border-white/30 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm bg-white/10 text-white placeholder-gray-300"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                {isTeamVariant ? 'Vertel ons meer over je doelstelling voor het team traject' : 'Bericht'}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-white/30 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm bg-white/10 text-white placeholder-gray-300"
                placeholder={
                  isTeamVariant
                    ? 'Vertel ons meer over je doelstelling team traject.'
                    : 'Vertel ons meer over je wensen of vragen...'
                }
              />
            </div>

            <div className="space-y-2 mt-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="privacyAccepted"
                  name="privacyAccepted"
                  checked={formData.privacyAccepted}
                  onChange={handleInputChange}
                  required
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="privacyAccepted" className="ml-2 block text-sm text-white">
                  Ik ga akkoord met de <Link href="/privacyverklaring" className="text-primary-300 hover:underline">privacyverklaring</Link> *
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting
                ? 'Verzenden...'
                : isTeamVariant
                  ? 'Aanvraag indienen'
                  : 'Aanmelden voor training'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
