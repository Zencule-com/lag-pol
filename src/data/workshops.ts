export interface WorkshopSession {
  region: string;
  date: string;
  time?: string;
  location: string;
}

export const capaciteitWorkshop = {
  title: 'Workshop Grip op capaciteit en werkvoorraad',
  maxParticipants: 15,
  duration: '2 uur',
  contact: {
    name: 'Gert-Jan Danenberg',
    phone: '06-11535207',
    phoneHref: 'tel:+31611535207',
  },
  // Vul hier de sessies in zodra datum en locatie bekend zijn. De pagina vult
  // aan tot vier sessies met "Datum volgt".
  sessions: [
    { region: 'Regio Noord', date: 'Maandag 30 november', time: '13.30 tot 15.30 uur', location: 'Locatie volgt' },
  ] as WorkshopSession[],
  totalSessions: 4,
};
