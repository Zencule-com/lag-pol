'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { WorkshopSession } from '../data/workshops';

interface WorkshopSignupSectionProps {
  workshop: string;
  sessions: WorkshopSession[];
  contact: { name: string; phone: string; phoneHref: string };
}

const roles = ['Eenheidsleiding', 'Sectorhoofd', 'Teamchef', 'Teamleider', 'Anders'];

const inputClassName = "w-full px-4 py-3 border border-white/30 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm bg-white/10 text-white placeholder-gray-300";

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  role: '',
  eenheid: '',
  team: '',
  session: '',
  message: '',
  privacyAccepted: false
};

export default function WorkshopSignupSection({ workshop, sessions, contact }: WorkshopSignupSectionProps) {
  const [formData, setFormData] = useState(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/workshop', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, workshop }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData(emptyForm);
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
      <div className="absolute inset-0 bg-gradient-to-r from-scrum-500/20 via-transparent to-primary-500/20 blur-3xl"></div>
      <div className="absolute inset-0 bg-dark-900/60 z-10"></div>

      <div className="relative z-20 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Meld je aan voor de workshop</h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Deelname is gratis. Per sessie is er plek voor maximaal 15 deelnemers, dus meld je snel aan.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-8">
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-100 border border-green-200 rounded-xl shadow-sm">
              <p className="text-scrum-800 font-semibold text-center">
                ✅ Aanmelding ontvangen! We nemen contact met je op zodra datum en locatie bekend zijn.
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-100 border border-red-200 rounded-xl shadow-sm">
              <p className="text-red-800 font-semibold text-center">
                ❌ Er is een fout opgetreden. Probeer het opnieuw of neem contact op met {contact.name} via {contact.phone}.
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
                  className={inputClassName}
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
                  className={inputClassName}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-white mb-2">
                  Functie *
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  required
                  className={inputClassName}
                >
                  <option value="" className="bg-gray-800 text-white">Selecteer functie</option>
                  {roles.map((role) => (
                    <option key={role} value={role} className="bg-gray-800 text-white">{role}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                  Telefoonnummer
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Bijv. 06 1234 5678"
                  className={inputClassName}
                />
              </div>
            </div>

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
                  required
                  placeholder="Bijv. Eenheid Midden-Nederland"
                  className={inputClassName}
                />
              </div>

              <div>
                <label htmlFor="team" className="block text-sm font-medium text-white mb-2">
                  Team / sector
                </label>
                <input
                  type="text"
                  id="team"
                  name="team"
                  value={formData.team}
                  onChange={handleInputChange}
                  placeholder="Bijv. Basisteam Utrecht-Stad"
                  className={inputClassName}
                />
              </div>
            </div>

            {sessions.length > 0 && (
              <div>
                <label htmlFor="session" className="block text-sm font-medium text-white mb-2">
                  Sessie *
                </label>
                <select
                  id="session"
                  name="session"
                  value={formData.session}
                  onChange={handleInputChange}
                  required
                  className={inputClassName}
                >
                  <option value="" className="bg-gray-800 text-white">Selecteer sessie</option>
                  {sessions.map((session) => {
                    const label = [session.region, session.date, session.time, session.location].filter(Boolean).join(' · ');
                    return (
                      <option key={label} value={label} className="bg-gray-800 text-white">{label}</option>
                    );
                  })}
                  <option value="Andere regio: houd me op de hoogte" className="bg-gray-800 text-white">Andere regio: houd me op de hoogte</option>
                </select>
              </div>
            )}

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                Waar loop je tegenaan? (optioneel)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className={inputClassName}
                placeholder="Beschrijf kort je vraagstuk rond capaciteit en werkvoorraad, dan kunnen we er in de workshop op inspelen."
              />
            </div>

            <div className="flex items-center mt-6">
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

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Verzenden...' : 'Aanmelden voor de workshop'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
