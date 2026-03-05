export interface Course {
  id: string;
  title: string;
  duration: string;
  description: string;
  detailedDescription?: string;
  topics?: string[];
  target: string;
  uniqueFeatures: string[];
  details: {
    duration: string;
    certificate: string;
    trainers: string;
    materials: string;
  };
  price?: {
    basePrice: number;
    baseParticipants: number;
    maxParticipants: number;
    note?: string;
  };
  practicalDetails?: {
    requirements?: string[];
    preparationTime?: string;
    additionalInfo?: string;
    requirementsTitle?: string;
  };
}

export interface CourseMetadata {
  title: string;
  description: string;
  keywords: string[];
  openGraph: {
    title: string;
    description: string;
    type: string;
  };
}

export const scrumMasterCourse: Course = {
  id: 'basis',
  title: 'Scrum Master Basis',
  duration: '2 dagen van 3,5 uur',
  description: 'In deze training ontwikkelen startende Scrum Masters de vaardigheden om één of meerdere teams te begeleiden in een veeleisende praktijk. Vaak doen ze dat deels vanuit een meewerkende rol.',
  detailedDescription: 'Ze leren hoe agile werken niet alleen wordt toegepast, maar duurzaam toegepast wordt in de samenwerking, structuur en cultuur van het team. De nadruk ligt op praktisch handelen, reflecteren en het versterken van teamdynamiek. Deelnemers groeien in hun rol, zodat ze uiteindelijk zelfstandig en met vertrouwen teams kunnen begeleiden, zonder afhankelijk te zijn van externe begeleiding. Na afloop van deze training kun je een Scrum team faciliteren als Scrum Master.',
  topics: [
    'Introductie Agile mindset en waarden',
    'Scrum theorie en de verschillende rollen',
    'Oefenen van de theorie in de praktijk met simulatieoefeningen',
    'Uitleg van het Scrum framework',
    'Communicatiestijlen en omgaan met weerstand als Scrum Master',
    'Ondersteuning van de Product Owner (backlog, prioritering, planning)',
    'Omgaan met procesmatige valkuilen',
    'Faciliteren van retrospectives, reviews, stand-ups, etc. als Scrum Master',
    'Feedback geven en reflecteren op eigen ontwikkeling'
  ],
  target: 'Startende Scrum Masters die teams willen begeleiden in een veeleisende praktijk',
  uniqueFeatures: [
    'Deelnemers faciliteren het meeste zelf (Check-in, Retrospective, Daily etc.)',
    'Slide-vrij (Powerpoint-vrij)',
    'Ontwikkeld o.b.v. Politie-context',
    'Begrijpelijke metaforen uit het dagelijks leven',
    'Gebaseerd op \'Training from the Back of the Room\': deelnemers leren actief en ervaringsgericht'
  ],
  details: {
    duration: '2 dagen',
    certificate: 'Bewijs van deelname',
    trainers: '1 vaste trainer die deelnemers ook na de opleiding coacht',
    materials: 'Trainingsmateriaal digitaal'
  },
  practicalDetails: {
    requirements: [
      'Er een beschikbaar Agile team of team is dat wil starten en waarin je je rol kan vervullen.',
      'Je affiniteit met de materie hebt en je competenties matchen met de rol waarvoor je training gaat volgen.',
      'Je aangemeld en betrokken bent bij de community van een Wendbare (Agile) politie in MS teams.',
      'Je ontwikkeltijd hebt en tijd beschikbaar hebt voor de uitvoering van de rol.',
      'Je de "Hoe Agile ben jij?" quickscan en de e-learning "Scrum" op Flowsparks hebt gedaan'
    ],
    preparationTime: '2-4 uur',
    additionalInfo: 'Na afloop van de training ontvang je een certificaat van deelname. Daarnaast ontvang je het trainingsmateriaal digitaal.\n\nBij de training zit de mogelijkheid om een Professional Scrum Master (PSM1) examen te doen. Het examen is in het Engels en niet verplicht voor de afronding van deze training. Wil je meer weten over dit certificaat neem dan contact op met ons.'
  },
  price: {
    basePrice: 1414,
    baseParticipants: 5,
    maxParticipants: 12,
    note: 'Wanneer er meer deelnemers zijn wordt de prijs lager, deze wordt namelijk doorgerekend voor het aantal deelnemers.'
  }
};

export const productOwnerCourse: Course = {
  id: 'basis',
  title: 'Product Owner Basis',
  duration: '2 dagen van 3,5 uur',
  description: 'In deze training ontwikkelen Product Owners zich tot richtinggevende en waardegedreven leiders binnen hun team. Ze leren hoe wendbaar werken geen doel op zich is, maar een middel om sneller en beter bij te dragen aan resultaten die er écht toe doen.',
  detailedDescription: 'De focus ligt op het herkennen en realiseren van waarde in een complexe praktijk, waar prioriteiten constant verschuiven en samenwerken cruciaal is. Denk aan het versnellen van besluitvorming, het vergroten van eigenaarschap en het versterken van vertrouwen, binnen én buiten het team.',
  topics: [
    'Hoe je Agile en Scrum uitlegt en effectief toepast in je organisatie',
    'Visie op toegevoegde waarde vertalen naar de backlog',
    'Refinement: Backlog items uitwerken en de Definition of Done borgen',
    'Sprintplanning: scherpe sprintdoelen (SMART), omgaan met planbaar en onplanbaar werk',
    'Klant betrekken (OM/Burger) en goed positioneren',
    'Puntensysteem/Planning Poker: waarom je het doet en hoe je het inzet',
    'Waardestromen, lean/verspilling en end-to-end verantwoordelijkheid',
    'Plannen m.b.v. sprints en forecasting zodat je realistische keuzes maakt',
    'Hoe je stakeholders meeneemt, je team motiveert en grip houdt op het resultaat',
    'Samenwerken met partners en herpositioneren t.b.v. meer effect',
    'Faciliterend leiderschap, in samenwerking met Scrum Master',
    'Oefenen van de theorie in de praktijk met praktische oefeningen',
    'Feedback geven en Teamfocus creëren'
  ],
  target: 'Product Owners die richtinggevende en waardegedreven leiders willen worden',
  uniqueFeatures: [
    'Je werkt aan je eigen backlog. Dat betekent mogelijk huiswerk vooraf waarbij je je eigen backlog (deels) meeneemt. Goed om daar verwachtingsmanagement op te doen.',
    'Je brengt je eigen stakeholders in beeld (dus géén simulatie)',
    'Slide-vrij (Powerpoint-vrij)',
    'Ontwikkeld o.b.v. Politie-context',
    'Begrijpelijke metaforen uit het dagelijks leven',
    'Gebaseerd op \'Training from the Back of the Room\': deelnemers leren actief en ervaringsgericht'
  ],
  details: {
    duration: '2 dagen',
    certificate: 'Bewijs van deelname',
    trainers: '1 vaste trainer die deelnemers ook na de opleiding coacht',
    materials: 'Trainingsmateriaal digitaal, inclusief digitale Politie Poker game'
  },
  practicalDetails: {
    requirements: [
      'Je hebt kennis van Agile en Scrum en werkt als (beginnend) Product Owner.',
      'Je hebt een Agile basis/Scrum (PO) training gevolgd en bij voorkeur de e-learning Scrum op Flowsparks/kennisdelers via Blueportaal gedaan.',
      'Er is een beschikbaar Agile team of een team dat wil starten en waarin je je rol kunt vervullen.',
      'Je affiniteit met de materie hebt en je competenties matchen met de rol waarvoor je training gaat volgen.',
      'Je bent aangemeld en betrokken bij de community van Wendbare (Agile) politie in MS Teams.',
      'Je hebt ontwikkeltijd en tijd beschikbaar voor de uitvoering van de rol.',
      'Je hebt de "Hoe Agile ben jij?" quickscan afgerond (ca. 30 minuten, met verdieping 1 uur).',
      'Je hebt de Quickscan op leiderschap afgerond (komt binnenkort beschikbaar).'
    ],
    preparationTime: '3 uur',
    additionalInfo: 'Na afloop van de training ontvang je een certificaat van deelname. Daarnaast ontvang je het trainingsmateriaal digitaal.\n\nBij de training zit de mogelijkheid om een Professional Product Owner (PSPO I) examen te doen. Het examen is in het Engels en niet verplicht voor de afronding van deze training. Wil je meer weten over dit certificaat neem dan contact op met ons.'
  },
  price: {
    basePrice: 1414,
    baseParticipants: 5,
    maxParticipants: 12,
    note: 'Wanneer er meer deelnemers zijn wordt de prijs lager, deze wordt namelijk doorgerekend voor het aantal deelnemers.'
  }
};

export const productOwnerVervolgCourse: Course = {
  id: 'vervolg',
  title: 'Product Owner Verdiept',
  duration: '2 dagen van 3,5 uur',
  description: 'In onze aanpak draait wendbaar werken niet alleen om snelheid en flexibiliteit, maar vooral om het creëren van waarde binnen een complexe en dynamische omgeving. De rol van de Product Owner gaat verder dan het organiseren van taken; het draait om waardegedreven richting geven aan het werk en bepalen wat belangrijk is om als volgende op te pakken, om de hoogst mogelijke waarde te halen.',
  detailedDescription: 'In deze training ontwikkelen deelnemers zich tot ervaren procesverantwoordelijke en leggen ze helder uit waarom deze rol onmisbaar is. Zij ontdekken hoe het werken vanuit waarde en het stimuleren van experimenten elkaar versterkt. Ze leren waarde helder te definiëren, te meten en te vergroten. Dit gebeurt door experimenten, meetbare doelen en impactanalyse. Daarnaast ontwikkelen deelnemers communicatie- en visualisatietechnieken die collega\'s motiveren om effectiever samen te werken en betere resultaten te bereiken.',
  topics: [
    'Introductie Agile waarden en principes (opfrisser voor welke ontwikkeling je verantwoordelijk bent)',
    'Begrijpen waarom de rol van Product Owner bestaat en in welke complexe omgeving je werkt',
    'Een duidelijke visie maken en die koppelen aan wat echt waarde toevoegt, stap voor stap',
    'In gesprek gaan met betrokkenen om van losse meningen naar gedeelde doelen te komen',
    'Blijven leren en ontwikkelen, zowel in je product- en/of vak ontwikkeling/verbetering als in je team',
    'Communiceren op een manier die anderen raakt, motiveert en mee laat bewegen',
    'Een realistische planning maken en inschatten (forecasting), verwachtingen helder krijgen en waarde zichtbaar maken',
    'Sterker samenwerken met de Scrum Master en het ontwikkelteam, met heldere rollen',
    'Je leiderschap verder ontwikkelen en ruimte maken voor nieuwe ideeën en experimenten'
  ],
  target: 'Ervaren Product Owners die zich willen ontwikkelen tot waardegedreven leiders',
  uniqueFeatures: [
    'Je werkt aan je eigen backlog. Dat betekent mogelijk huiswerk vooraf waarbij je je eigen backlog (deels) meeneemt. Goed om daar verwachtingsmanagement op te doen.',
    'Aandacht voor overlap tussen de rol van PO en SM',
    'Slide-vrij (Powerpoint-vrij)',
    'Ontwikkeld o.b.v. Politie-context',
    'Begrijpelijke metaforen uit het dagelijks leven',
    'Gebaseerd op \'Training from the Back of the Room\': deelnemers leren actief en ervaringsgericht'
  ],
  details: {
    duration: '2 dagen, 3,5 uur per dagdeel',
    certificate: 'Bewijs van deelname',
    trainers: '1 vaste trainer die deelnemers ook na de opleiding coacht',
    materials: 'Toolkit met canvassen, visualisaties en templates (vision boards, impact maps, PDCA-schema\'s, Roadmaps, KPI-formats)'
  },
  practicalDetails: {
    requirements: [
      'De Product Owner Basis training hebt afgerond',
      'Je al praktijkervaring hebt met de rol van Product Owner',
      'Er een beschikbaar Agile team is waarin je je rol kan verdiepen',
      'Je de ambitie hebt om je verder te ontwikkelen als waardegedreven leider'
    ],
    requirementsTitle: 'Deze training is geschikt voor jou wanneer je',
    additionalInfo: 'Na afloop van de training ontvang je een certificaat van deelname. Daarnaast ontvang je het trainingsmateriaal digitaal.\n\nBij de training zit de mogelijkheid om een Professional Product Owner (PSPO I) examen te doen. Het examen is in het Engels en niet verplicht voor de afronding van deze training. Wil je meer weten over dit certificaat neem dan contact op met ons.'
  },
  price: {
    basePrice: 960,
    baseParticipants: 5,
    maxParticipants: 12,
    note: 'Wanneer er meer deelnemers zijn wordt de prijs lager, deze wordt namelijk doorgerekend voor het aantal deelnemers.'
  }
};

export const productOwnerVervolgMetadata: CourseMetadata = {
  title: 'Product Owner Verdiept Training - Politie',
  description: 'Ontwikkel je tot ervaren procesverantwoordelijke en strategische waardecreërende leider. 2 dagen praktijkgerichte Product Owner verdiept training speciaal voor de politie.',
  keywords: [
    'Product Owner vervolg training politie',
    'Product Owner gevorderd opleiding',
    'PSPO2 certificering',
    'strategische waardecreatie politie',
    'productinnovatie politie'
  ],
  openGraph: {
    title: 'Product Owner Verdiept Training - Politie',
    description: 'Ontwikkel je tot ervaren procesverantwoordelijke en strategische waardecreërende leider. 2 dagen praktijkgerichte Product Owner vervolg training.',
    type: 'website',
  },
};

export const scrumMasterMetadata: CourseMetadata = {
  title: 'Scrum Master Basis Training - Politie',
  description: 'Ontwikkel vaardigheden om teams te begeleiden in een veeleisende praktijk. 2 dagen praktijkgerichte Scrum Master training speciaal voor de politie.',
  keywords: [
    'Scrum Master training politie',
    'Agile training politie',
    'Scrum basis opleiding',
    'PSM1 certificering',
    'team begeleiding politie'
  ],
  openGraph: {
    title: 'Scrum Master Basis Training - Politie',
    description: 'Ontwikkel vaardigheden om teams te begeleiden in een veeleisende praktijk. 2 dagen praktijkgerichte Scrum Master training.',
    type: 'website',
  },
};

export const productOwnerMetadata: CourseMetadata = {
  title: 'Product Owner Basis Training - Politie',
  description: 'Ontwikkel je tot richtinggevende en waardegedreven leider. 2 dagen praktijkgerichte Product Owner training speciaal voor de politie.',
  keywords: [
    'Product Owner training politie',
    'Product Owner basis opleiding',
    'PSPO1 certificering',
    'waarde creatie politie',
    'stakeholder management'
  ],
  openGraph: {
    title: 'Product Owner Basis Training - Politie',
    description: 'Ontwikkel je tot richtinggevende en waardegedreven leider. 2 dagen praktijkgerichte Product Owner training.',
    type: 'website',
  },
};

export const poPlusSmCourse: Course = {
  id: 'po-plus-sm',
  title: 'PO + SM',
  duration: '2 dagen van 3,5 uur',
  description: 'In deze training ontwikkelen Product Owners zich tot richtinggevende en waardegedreven leiders binnen hun team. Ze leren hoe wendbaar werken geen doel op zich is, maar een middel om sneller en beter bij te dragen aan resultaten die er écht toe doen.',
  detailedDescription: 'De focus ligt op het herkennen en realiseren van waarde in een complexe praktijk, waar prioriteiten constant verschuiven en samenwerken cruciaal is. Denk aan het versnellen van besluitvorming, het vergroten van eigenaarschap en het versterken van vertrouwen, binnen én buiten het team.',
  topics: [
    'Hoe je Agile en Scrum uitlegt en effectief toepast in je organisatie',
    'Visie op toegevoegde waarde vertalen naar de backlog en refinement (incl. Definition of Done)',
    'Sprintplanning: scherpe sprintdoelen (SMART), planbaar/onplanbaar werk en forecasting',
    'Klant betrekken en positioneren (OM/Burger) en samenwerken met partners',
    'Puntensysteem/Planning Poker: waarom en hoe',
    'Waardestromen, lean/verspilling en end-to-end verantwoordelijkheid',
    'Hoe je stakeholders meeneemt, je team motiveert en grip houdt op het resultaat',
    'Faciliterend leiderschap, in samenwerking met Scrum Master',
    'Rolduidelijkheid & hitteschild: nee zeggen, prioritering bij de Product Owner, besluitvorming van push naar pull',
    'Een heldere rolverdeling tussen Product Owner & Scrum Master',
    'Samen de retrospective gebruiken als motor voor verbetering met double-loop learning en multidisciplinaire ontwikkeling',
    'Groepsgrootte, formatie en kennis: effect op samenwerking en resultaat',
    'Communicatie en teamondersteuning zodat prioritering en besluitvorming bij de PO liggen',
    'Oefenen van de theorie in de praktijk met praktische oefeningen',
    'Feedback geven, Teamfocus creëren en samen bouwen aan een sterk en wendbaar team'
  ],
  target: 'Product Owners die richtinggevende en waardegedreven leiders willen worden',
  uniqueFeatures: [
    'Je werkt aan je eigen backlog. Dat betekent mogelijk huiswerk vooraf waarbij je je eigen backlog (deels) meeneemt. Goed om daar verwachtingsmanagement op te doen.',
    'Je brengt je eigen stakeholders in beeld (dus géén simulatie)',
    'Slide-vrij (Powerpoint-vrij)',
    'Ontwikkeld o.b.v. Politie-context',
    'Begrijpelijke metaforen uit het dagelijks leven',
    'Gebaseerd op \'Training from the Back of the Room\': deelnemers leren actief en ervaringsgericht',
    'Je gaat aan de slag met je eigen Scrum Master in het team om te leren elkaar te versterken'
  ],
  details: {
    duration: '2 dagen',
    certificate: 'Bewijs van deelname',
    trainers: '1 vaste trainer die deelnemers ook na de opleiding coacht',
    materials: 'Trainingsmateriaal digitaal, inclusief digitale Politie Poker game'
  },
  practicalDetails: {
    requirements: [
      'Je hebt kennis van Agile en Scrum en werkt als (beginnend) Product Owner.',
      'Je hebt een Agile basis/Scrum (PO) training gevolgd en bij voorkeur de e-learning Scrum op Flowsparks/kennisdelers via Blueportaal gedaan.',
      'Er is een beschikbaar Agile team of een team dat wil starten en waarin je je rol kunt vervullen.',
      'Je affiniteit met de materie hebt en je competenties matchen met de rol waarvoor je training gaat volgen.',
      'Je bent aangemeld en betrokken bij de community van Wendbare (Agile) politie in MS Teams.',
      'Je hebt ontwikkeltijd en tijd beschikbaar voor de uitvoering van de rol.',
      'Je hebt de "Hoe Agile ben jij?" quickscan afgerond (ca. 30 minuten, met verdieping 1 uur).',
      'Je hebt de Quickscan op leiderschap afgerond (komt binnenkort beschikbaar).',
      'Je hebt een Scrum Master die beschikbaar is op de derde dag van de training.'
    ],
    preparationTime: '3 uur',
    additionalInfo: 'Na afloop van de training ontvang je een certificaat van deelname. Daarnaast ontvang je het trainingsmateriaal digitaal.\n\nBij de training zit de mogelijkheid om een Professional Product Owner (PSPO I) examen te doen. Het examen is in het Engels en niet verplicht voor de afronding van deze training. Wil je meer weten over dit certificaat neem dan contact op met ons.'
  },
  price: {
    basePrice: 1899,
    baseParticipants: 5,
    maxParticipants: 12,
    note: 'Wanneer er meer deelnemers zijn wordt de prijs lager, deze wordt namelijk doorgerekend voor het aantal deelnemers.'
  }
};

export const poPlusSmMetadata: CourseMetadata = {
  title: 'PO + SM Training - Politie',
  description: 'Ontwikkel je tot richtinggevende en waardegedreven leider. 2 dagen praktijkgerichte PO + SM training speciaal voor de politie.',
  keywords: [
    'PO + SM training politie',
    'Product Owner Scrum Master training',
    'PSPO1 certificering',
    'waarde creatie politie',
    'stakeholder management'
  ],
  openGraph: {
    title: 'PO + SM Training - Politie',
    description: 'Ontwikkel je tot richtinggevende en waardegedreven leider. 2 dagen praktijkgerichte PO + SM training.',
    type: 'website',
  },
};

export const agileCoachCourse: Course = {
  id: 'agile-coach',
  title: 'Agile Coach Opleiding',
  description: 'Word een ervaren Agile Coach die duurzame verandering kan begeleiden. Leer hoe je teams en organisaties kunt helpen om wendbaar te worden en betere resultaten te behalen.',
  duration: '8 dagdelen van 3,5 uur',
  detailedDescription: 'Een Agile Coach helpt teams met het toepassen van Agile in het werk. De nadruk ligt vooral op het coachingsaspect. Als Agile Coach leer je niet alleen een productievere omgeving te creëren, maar help je ook (Scrum) teams om alles uit zichzelf te halen en maak je ze bewust van hoe investeren op wendbaarheid (agility) het team kan helpen om tot betere resultaten te komen.',
  topics: [
    'Agile principes en waarden (met praatplaten die digitaal gedeeld worden)',
    'Je introduceert of verbetert Agile methodieken en technieken',
    'Je brengt mensen in beweging om te veranderen',
    'De lean filosofie en Agile principes doorvoeren binnen de gehele organisatie',
    'Werken op individueel, team-, afdeling- en managementniveau',
    'Advisering op Agile leiderschap en begeleiding',
    'Coachen van Scrum Masters bij hun Scrum Events',
    'Het stimuleren van zelforganisatie en zelfsturing en het bouwen van performance teams',
    'Het transformeren en begeleiden van de organisatie en reflecteren op eigen handelen door zelfreflectie, feedback, intervisie en coachgesprekken',
    'Omgaan met ondermijnende strategieën',
    'Verdieping teamdynamiek',
    'Verdieping facilitatie: het begeleiden van groepsgesprekken'
  ],
  target: 'Ervaren Scrum Masters, Product Owners en Agile professionals die teams willen begeleiden bij Agile transformaties',
  uniqueFeatures: [
    'Aandacht voor opschaling van wendbaar werken: begrip van scaling frameworks (SaFe, Less) en wanneer deze geschikt zijn',
    'Het gebruik van de kennisscan t.b.v. het bevorderen van multidisciplinair/functionele teams en de T-vorm',
    'Triage startbekwaamheid: toelichting en gebruik van het canvas',
    'Werkvormen en onderwerpen die praktisch toepasbaar zijn in de politiecontext',
    'Je leert hoe je Agile teams kunt positioneren als teams die excelleren in leren, verbeteren en ontwikkelen',
    'Competentie-gericht ("Kun je het?" i.p.v. "Weet je het?")',
    'Aandacht voor 1-op-1 coaching volgens de Coachingsboog van Lyssa Adkins',
    'Slide-vrij (Powerpoint-vrij)',
    'Ontwikkeld o.b.v. Politie-context',
    'Begrijpelijke metaforen uit het dagelijks leven',
    'Gebaseerd op \'Training from the Back of the Room\': deelnemers leren actief en ervaringsgericht door zelf te ontdekken, te doen en samen te werken, i.p.v. passief kennis te ontvangen'
  ],
  details: {
    duration: '8 dagdelen, 3,5 uur per dagdeel',
    certificate: 'Bewijs van deelname',
    trainers: '1 vaste trainer die deelnemers ook na de opleiding coacht',
    materials: 'Toolkit met coachkaarten, pokergame, leiderschapsgame en andere facilitatie materialen (digitaal gedeeld)'
  },
  practicalDetails: {
    requirements: [
      'Je de Scrum Master Basis training hebt afgerond',
      'Je de E-learnings op flowsparks hebt afgerond',
      'Je de 15 days toolbox hebt doorlopen',
      'Je ontwikkeltijd hebt na de training om te kunnen coachen',
      'Je hebt een rol waarbij je ook andere teams mag coachen'
    ],
    additionalInfo: 'Na afloop van de training ontvang je een certificaat van deelname. Daarnaast ontvang je het trainingsmateriaal digitaal, inclusief praatplaten voor Agile principes.'
  },
  price: {
    basePrice: 3838,
    baseParticipants: 5,
    maxParticipants: 12,
    note: 'Wanneer er meer deelnemers zijn wordt de prijs lager, deze wordt namelijk doorgerekend voor het aantal deelnemers.'
  }
};

export const agileLeiderschapCourse: Course = {
  id: 'agile-leiderschap',
  title: 'Agile Leiderschap Opleiding',
  description: 'Ontwikkel je tot een wendbare leider die teams kan begeleiden in een veranderende wereld. Leer hoe je als leidinggevende teams kunt helpen om effectiever samen te werken en betere resultaten te behalen.',
  duration: '3 dagdelen van 3,5 uur',
  detailedDescription: 'De Agile Leadership-opleiding geeft jou als leidinggevende duidelijkheid over nieuwe begrippen, rollen en verantwoordelijkheden. Je ontdekt hoe je jouw eigen gedrag kunt aanpassen om professionals meer eigenaarschap te laten nemen. Ook leer je hoe je de waarden en principes van wendbaar werken vertaalt naar je dagelijkse praktijk, zodat jouw team meer ruimte, vertrouwen en duidelijkheid ervaart.\n\nDaarnaast krijg je handvatten om aandacht te houden voor belangrijke thema\'s in je team, ook wanneer de hectiek van de dag overheerst. Je staat stil bij welke taken en gewoontes niet meer passen bij wendbaar werken en hoe je op een duidelijke manier \'nee\' zegt om je team te beschermen en de focus te bewaren.\n\nDoor regelmatig op de werkvloer mee te kijken – \'walking the gemba\' – krijg je beter zicht op wat er echt speelt en kun je sneller inspelen op wat je team nodig heeft. Zo ontstaat een sterke mix van theorie en praktijk.\n\nTijdens de opleiding ontwikkel je een houding die past bij faciliterend leiderschap: vertrouwen geven, wendbaar blijven en sturen op resultaat. Daarmee leg je een stevig fundament onder een toekomstbestendige manier van werken, waarin jij samen met je team waarde creëert voor de organisatie én voor de maatschappij. Voor de Politie is dit extra belangrijk, omdat de historisch gegroeide hiërarchie niet altijd aansluit op de wendbare manier van werken die nu nodig is.',
  topics: [
    'Agile leiderschap; wat levert het op?',
    'Van controle naar vertrouwen',
    'Faciliteren van zelforganiserende teams',
    'Ontwikkelen van zelfbewustzijn',
    'Leidinggevende vaardigheden in een Agile context',
    'Coachen van Agile professionals',
    'Transparant te werken, zodat collega\'s en teams beter begrijpen waaraan gewerkt wordt en waarom',
    'Sturen op het effect (outcome) in plaats van wat er is gedaan (output), zodat de waarde van het werk zichtbaar wordt',
    'Welke eerste stappen je direct kunt zetten om het geleerde vanaf morgen toe te passen',
    'Het tonen van imperfectie om een lerende en ontwikkelgerichte cultuur te bouwen',
    'Hoe je het team meeneemt in het andere gedrag dat ze (moeten) gaan laten zien',
    'Hoe zorgen voor feedback op je eigen gedrag op de werkvloer'
  ],
  target: 'Leidinggevenden en managers die hun teams willen begeleiden in een Agile omgeving. Specifiek ontwikkeld voor de Politie waar hiërarchische aansturing niet altijd aansluit bij een veranderende werkomgeving.',
  uniqueFeatures: [
    'Aandacht voor zelfbewustzijn',
    'Deelnemers worden naast agile leiders betere leidinggevenden (aandacht voor leidinggevende vaardigheden)',
    'Toolkit met leiderschapscoach kaarten',
    'Slide-vrij (Powerpoint-vrij)',
    'Ontwikkeld o.b.v. Politie-context',
    'Begrijpelijke metaforen uit het dagelijks leven',
    'Gebaseerd op \'Training from the Back of the Room\': deelnemers leren actief en ervaringsgericht door zelf te ontdekken, te doen en samen te werken, i.p.v. passief kennis te ontvangen'
  ],
  details: {
    duration: '3 dagdelen, 3,5 uur per dagdeel',
    certificate: 'Bewijs van deelname',
    trainers: '1 vaste trainer die deelnemers ook na de opleiding coacht',
    materials: 'Toolkit met leiderschapscoach kaarten en andere facilitatie materialen (digitaal gedeeld)'
  },
  practicalDetails: {
    requirements: [
      'Je direct met het geleerde aan de slag kunt en wilt gaan en er een beschikbaar Agile team of team is dat wil starten en waarin je je rol kan vervullen',
      'Je bereid bent om je eigen gedrag aan te passen om professionals meer eigenaarschap te laten nemen',
      'Je de E-learning "quickscan: Hoe Agile ben jij?" hebt afgerond (ca 30 minuten en met verdieping 1 uur)',
      'Je de Quickscan op leiderschap hebt afgerond en de feedback kunt meenemen naar de training (komt binnenkort beschikbaar)'
    ],
    requirementsTitle: 'Deze training is geschikt voor jou wanneer je',
    additionalInfo: 'Deze training is voornamelijk zinvol wanneer je direct er mee aan de slag kan en wil. De nieuwe werkomgeving is er nog niet en leiding is onderdeel van de verandering. Sterker nog: leidinggevenden kunnen het maken of breken.\n\nNa afloop van de training ontvang je een certificaat van deelname. Daarnaast ontvang je het trainingsmateriaal digitaal.'
  },
  price: {
    basePrice: 1400,
    baseParticipants: 5,
    maxParticipants: 12,
    note: 'Wanneer er meer deelnemers zijn wordt de prijs lager, deze wordt namelijk doorgerekend voor het aantal deelnemers.'
  }
};

export const agileLeiderschapMetadata: CourseMetadata = {
  title: 'Agile Leiderschap Opleiding - Politie',
  description: 'Ontwikkel je tot een wendbare leider die teams kan begeleiden in een veranderende wereld. 3 dagdelen praktijkgerichte Agile Leiderschap training speciaal voor de politie.',
  keywords: [
    'Agile Leiderschap opleiding politie',
    'Agile Leadership training',
    'leiderschap politie',
    'agile management',
    'faciliterend leiderschap'
  ],
  openGraph: {
    title: 'Agile Leiderschap Opleiding - Politie',
    description: 'Ontwikkel je tot een wendbare leider die teams kan begeleiden in een veranderende wereld. 3 dagdelen praktijkgerichte Agile Leiderschap training.',
    type: 'website',
  },
};

export const leadingWithObeyaCourse: Course = {
  id: 'leading-with-obeya',
  title: 'Sturen met Obeya de team kickstart',
  description: 'Leer hoe je als managementteam effectief kunt werken met Obeya. Ontwikkel vaardigheden om strategie naar tactiek uitvoering te vertalen en teams te begeleiden naar betere resultaten.',
  duration: '4 dagdelen van 3,5 uur',
  detailedDescription: 'De Sturen met Obeya team kickstart opleiding is bedoeld voor MT\'s die met Obeya gaan werken. Als start wordt de theorie van Obeya uitgelegd. Vervolgens wordt het team begeleid om zelf een Obeya bord vorm te geven. Hierna wordt de Obeya dialoog gevoerd en wordt geoefend samen deze gesprekken te blijven voeren. De (toekomstige) facilitator is ook aanwezig in de training. Wat ons betreft is de facilitator verplicht onderdeel van de training! Zo is het team na de training uitgerust om met Obeya te werken.\n\nOnze trainers combineren training en coaching en zijn zelf actief in het implementeren van Obeya op alle organisatieniveaus. Zo ontstaat een krachtige mix van theorie en praktijk. De opleiding helpt leiders om strategie naar tactiek te vertalen en echt praktisch te maken: in de praktijk stuurbaar. Zo worden resultaten bereikt en wordt er bijgestuurd waar dat nodig is. Hierdoor worden teams enthousiast en krijgen ze het vertrouwen om zelf resultaten te behalen.\n\nDeze training legt de relatie met Agile op MT niveau: Obeya is een manier om Agile principes en waarden toe te passen op managementniveau, waarbij transparantie, samenwerking en continue verbetering centraal staan.',
  topics: [
    'Herkomst Obeya en theoretische kennis onderdelen: strategie, doelen, prestaties, taken en moeilijke problemen, LWO referentiemodel',
    'Inrichting Obeya voor eigen werksituatie en uitvoering naar eigen team',
    'Toepassing Obeya: benodigde en invulling rollen en hoe werken we ermee als team?',
    'Voeren prestatie-dialoog en gedragsverandering',
    'Sturen op proces en eigenaarschap versterken',
    'Van sturen naar prioriteren in de zin van doelstellingen',
    'SMART formuleren van OKR\'s (doelstellingen en belangrijke resultaten) en kort-cyclische doelen en sturen hierop',
    'Doorvertaling naar de rest van de organisatie',
    'Belangrijkste thema\'s en werkvormen voor effectieve Obeya sessies',
    'Relatie met Agile op MT niveau: hoe Obeya Agile principes en waarden toepast op managementniveau'
  ],
  target: 'Managementteams (MT\'s) die met Obeya gaan werken. Specifiek ontwikkeld voor de Politie om strategie naar tactiek te vertalen en teams te begeleiden naar betere resultaten.',
  uniqueFeatures: [
    'Het werkend krijgen van de Obeya, specifiek per MT',
    'Terminologieën worden toegelicht: OKR\'s (doelstellingen en belangrijke resultaten)',
    'Voordelen van Obeya: betere samenwerking en afstemming, sturen op basis van metingen en data, transparantie en snellere besluitvorming',
    'Ontwikkeld o.b.v. Politie-context',
    'Gebaseerd op \'Training from the Back of the Room\': deelnemers leren actief en ervaringsgericht door zelf te ontdekken, te doen en samen te werken, i.p.v. passief kennis te ontvangen'
  ],
  details: {
    duration: '4 dagdelen, 3.5 uur per dagdeel met tijd tussen dag 1 en 2 voor toepassing',
    certificate: 'LCS certificering 1a (Leading with Obeya)',
    trainers: '1 vaste trainer die deelnemers ook na de opleiding coacht in de toepassing van Obeya',
    materials: 'Obeya toolkit en implementatie materialen (digitaal gedeeld)'
  },
  practicalDetails: {
    requirements: [
      'Als facilitator heb je de Obeya kickstart (met je team) gevolgd',
      'Je hebt gecheckt of financiering van de benodigdheden/borden (inrichting van de ruimte) aanwezig is',
      'De Triage startbekwaamheid stap 1 en deels 2 is uitgevoerd waarbij je ook bij ander team gekeken hebt',
      'Ben je een leidinggevende, zorg dan dat je persoonlijke ontwikkeling actief terugkomt in je R&O',
      'Zowel naar boven als naar beneden in de organisatie is gecommuniceerd welke verandering ingezet wordt en wat men denkt dat het effect is op de omgeving',
      'Je de E-learning "quickscan: Hoe Agile ben jij?" hebt afgerond (ca 30 minuten en met verdieping 1 uur)',
      'Je de Quickscan op leiderschap hebt afgerond (komt binnenkort beschikbaar)'
    ],
    requirementsTitle: 'Deze training is geschikt voor jou wanneer',
    additionalInfo: 'Na afloop van de training ontvang je een certificaat van deelname (LCS certificering 1a). Daarnaast ontvang je het trainingsmateriaal digitaal.'
  },
  price: {
    basePrice: 1414,
    baseParticipants: 5,
    maxParticipants: 12,
    note: 'Prijs gebaseerd op 5 deelnemers. Wanneer er meer deelnemers zijn wordt de prijs lager, deze wordt namelijk doorgerekend voor het aantal deelnemers.'
  }
};

export const leadingWithObeyaMetadata: CourseMetadata = {
  title: 'Sturen met Obeya de team kickstart - Politie',
  description: 'Leer hoe je als managementteam effectief kunt werken met Obeya. 4 dagdelen praktijkgerichte Obeya team kickstart training speciaal voor de politie.',
  keywords: [
    'Sturen met Obeya politie',
    'Obeya training',
    'management team training',
    'strategie naar tactiek',
    'LCS certificering'
  ],
  openGraph: {
    title: 'Sturen met Obeya de team kickstart - Politie',
    description: 'Leer hoe je als managementteam effectief kunt werken met Obeya. 4 dagdelen praktijkgerichte Obeya training.',
    type: 'website',
  },
};

export const facilitatorInObeyaCourse: Course = {
  id: 'facilitator-in-obeya',
  title: 'Facilitator in Obeya',
  description: 'Ontwikkel de vaardigheden om Obeya sessies te faciliteren en teams te begeleiden in het gebruik van de Obeya-methodiek.',
  duration: '4 dagdelen van 3,5 uur',
  detailedDescription: 'Deze opleiding is bedoeld voor mensen die Obeya teams gaan faciliteren in het werken met Obeya. Als start wordt de theorie van Obeya uitgelegd en vervolgens wordt de rol van facilitator verheldert: je zet een Obeya ruimte op en helpt de performance dialoog met het team goed te voeren.\n\nEr wordt geleerd hoe je als facilitator het team helpt een Obeya op te zetten, welke technieken hiervoor zijn, hoe je het team leert de Obeya dialoog goed te voeren en er wordt geoefend dit te faciliteren. Facilitators leren eerst de lead te pakken en deze daarna over te geven aan het team. Zij doen dit d.m.v. voordoen, samen doen, zelf doen.\n\nDe facilitators oefenen direct in de praktijk en ze worden begeleid door ons. Onze trainers combineren training en coaching en zijn zelf actief in het implementeren van Obeya op alle organisatieniveaus. Zo ontstaat een krachtige mix van theorie en praktijk.\n\nDe opleiding zorgt ervoor dat Obeya facilitators in staat zijn een MT te begeleiden om Sturen met Obeya in de praktijk werkend te krijgen. Hierdoor worden teams enthousiast en krijgen zij het vertrouwen om dit uiteindelijk zelf te doen. Als facilitator faciliteer je ook de cascadering en verbinding tussen strategie en uitvoering, zowel naar beneden (naar de uitvoering) als naar boven (naar de strategie).\n\nAls facilitator neem je transparantie en andere Agile principes mee in het coachen. Je zorgt ervoor dat de Obeya-ruimte en overleggen openbaar zijn, zodat iedereen kan zien wat er gebeurt en leren van elkaar.',
  topics: [
    'Herkomst Obeya en theoretische kennis onderdelen: strategie, doelen, prestaties, taken en moeilijke problemen',
    'Rollen en routines bij de inrichting Obeya en uitvoering naar eigen team',
    'Toepassing Obeya: benodigde en invulling rollen en hoe mensen in hun rol te zetten',
    'Wat het inhoudt om facilitator te zijn en hoe je je rol goed neer zet bij het voeren van de prestatie-dialoog en gedragsverandering bewerkstelligen: onderstroom en bovenstroom, mogelijke interventies en hoe in te zetten',
    'SMART formuleren van OKR\'s (doelstellingen en belangrijke resultaten) en kort-cyclische doelen en inzetten verbeteringen',
    'Transparantie en Agile principes meenemen in het coachen',
    'Zorgen dat de Obeya-ruimte en overleggen openbaar zijn'
  ],
  target: 'Mensen die Obeya teams gaan faciliteren in het werken met Obeya. Specifiek ontwikkeld voor de Politie om teams te begeleiden in het implementeren van Obeya en de verbinding tussen strategie en uitvoering te faciliteren.',
  uniqueFeatures: [
    'Deelnemers leren een MT op proces te begeleiden i.p.v. op inhoud',
    'Deelnemers leren wat neutraliteit is: \'Wat in deze kamer gebeurt, blijft in deze kamer\'',
    'Transparantie en Agile principes worden meegenomen in het coachen: Obeya-ruimte en overleggen zijn openbaar',
    'Voordoen, samen doen, zelf doen: facilitators leren eerst de lead te pakken en geven deze daarna over aan het team',
    'Ontwikkeld o.b.v. Politie-context',
    'Gebaseerd op \'Training from the Back of the Room\': deelnemers leren actief en ervaringsgericht door zelf te ontdekken, te doen en samen te werken, i.p.v. passief kennis te ontvangen'
  ],
  details: {
    duration: '4 dagdelen, 3.5 uur per dagdeel met tijd tussen dag 1 en 2 voor toepassing',
    certificate: 'LCS certificering 1b (Facilitator in Obeya)',
    trainers: '1 vaste trainer die deelnemers ook na de opleiding coacht in de toepassing van Obeya',
    materials: 'Obeya facilitator toolkit en implementatie materialen (digitaal gedeeld)'
  },
  practicalDetails: {
    requirements: [
      'Als facilitator heb je de Obeya kickstart (met je team) gevolgd',
      'Je hebt ontwikkelruimte en tijd beschikbaar voor deze rol en ontwikkeling',
      'Facilitator word je niet in één training. Zorg dus dat je je persoonlijke ontwikkeling actief laat terugkomen in je R&O'
    ],
    requirementsTitle: 'Deze training is geschikt voor jou wanneer',
    additionalInfo: 'Na afloop van de training ontvang je een certificaat van deelname (LCS certificering 1b). Daarnaast ontvang je het trainingsmateriaal digitaal.'
  },
  price: {
    basePrice: 1414,
    baseParticipants: 5,
    maxParticipants: 12,
    note: 'Prijs gebaseerd op 5 deelnemers. Wanneer er meer deelnemers zijn wordt de prijs lager, deze wordt namelijk doorgerekend voor het aantal deelnemers.'
  }
};

export const facilitatorInObeyaMetadata: CourseMetadata = {
  title: 'Facilitator in Obeya - Politie',
  description: 'Leer hoe je Obeya teams effectief kunt faciliteren. 4 dagdelen praktijkgerichte Obeya facilitator training speciaal voor de politie.',
  keywords: [
    'Facilitator in Obeya politie',
    'Obeya facilitator training',
    'team faciliteren',
    'Obeya dialoog',
    'LCS certificering 1b'
  ],
  openGraph: {
    title: 'Facilitator in Obeya - Politie',
    description: 'Leer hoe je Obeya teams effectief kunt faciliteren. 4 dagdelen praktijkgerichte Obeya facilitator training.',
    type: 'website',
  },
};

export const agileCoachMetadata: CourseMetadata = {
  title: 'Agile Coach Opleiding - Politie',
  description: 'Word een ervaren Agile Coach die duurzame verandering kan begeleiden. 8 dagdelen praktijkgerichte Agile Coach training speciaal voor de politie.',
  keywords: [
    'Agile Coach opleiding politie',
    'Agile Coach training',
    'ICAgile coaching',
    'team coaching politie',
    'agile transformatie'
  ],
  openGraph: {
    title: 'Agile Coach Opleiding - Politie',
    description: 'Word een ervaren Agile Coach die duurzame verandering kan begeleiden. 8 dagdelen praktijkgerichte Agile Coach training.',
    type: 'website',
  },
};
