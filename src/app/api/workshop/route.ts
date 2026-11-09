import { NextRequest, NextResponse } from 'next/server';

const escapeHtml = (value: unknown) =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.role || !body.eenheid) {
      return NextResponse.json(
        { error: 'Naam, e-mailadres, functie en eenheid zijn verplicht' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Ongeldig e-mailadres' },
        { status: 400 }
      );
    }

    if (!process.env.SMTP2GO_API_KEY) {
      throw new Error('SMTP2GO_API_KEY environment variable is not set');
    }

    const workshop = escapeHtml(body.workshop || 'Workshop Grip op capaciteit en werkvoorraad');

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #1e40af; color: white; padding: 15px; border-radius: 8px; margin-bottom: 20px; text-align: center;">
          <h2 style="margin: 0; font-size: 18px;">Nieuwe aanmelding workshop</h2>
        </div>

        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #1e40af;">
          <h3 style="color: #1e40af; margin-top: 0;">${workshop}</h3>
          <p><strong>Naam:</strong> ${escapeHtml(body.name)}</p>
          <p><strong>E-mail:</strong> ${escapeHtml(body.email)}</p>
          ${body.phone ? `<p><strong>Telefoon:</strong> ${escapeHtml(body.phone)}</p>` : ''}
          <p><strong>Functie:</strong> ${escapeHtml(body.role)}</p>
          <p><strong>Eenheid:</strong> ${escapeHtml(body.eenheid)}</p>
          ${body.team ? `<p><strong>Team / sector:</strong> ${escapeHtml(body.team)}</p>` : ''}
          ${body.session ? `<p><strong>Sessie:</strong> ${escapeHtml(body.session)}</p>` : ''}
          ${body.message ? `<p><strong>Vraagstuk:</strong> ${escapeHtml(body.message)}</p>` : ''}
          <p><strong>Datum:</strong> ${new Date().toLocaleString('nl-NL')}</p>
        </div>

        <p style="color: #64748b; font-size: 14px;">
          Deze aanmelding is verzonden via de workshoppagina op leanagilegroep.nl.
        </p>
      </div>
    `;

    const response = await fetch('https://api.smtp2go.com/v3/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: process.env.SMTP2GO_API_KEY,
        sender: 'noreply@leanagilegroep.nl',
        to: ['info@leansixsigmagroep.nl'],
        subject: `Nieuwe aanmelding: ${body.workshop || 'Workshop Grip op capaciteit en werkvoorraad'}`,
        html_body: htmlBody,
      }),
    });

    const result = await response.json();

    if (!response.ok || result.data?.error) {
      throw new Error(result.data?.error || `API request failed: ${response.statusText}`);
    }

    console.log('Workshop registration sent:', {
      name: body.name,
      email: body.email,
      workshop: body.workshop,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json(
      { success: true, message: 'Aanmelding succesvol ontvangen.' },
      { status: 200 }
    );

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Workshop submission error:', errorMessage);

    return NextResponse.json(
      {
        error: 'Er is een fout opgetreden bij het verzenden van de aanmelding. Probeer het opnieuw.',
        details: process.env.NODE_ENV === 'development' ? errorMessage : undefined
      },
      { status: 500 }
    );
  }
}
