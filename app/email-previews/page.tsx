import React from 'react';
import ToCompanyEmail from '@/emails/templates/toCompany';
import ToUserEmail from '@/emails/templates/toUser';
import ToCompanyContact from '@/emails/templates/toCompanyContact';
import ToUserContact from '@/emails/templates/toUserContact';

export default async function EmailPreviewsPage() {
  // Render templates to full HTML using server renderer
  const { renderToStaticMarkup } = await import('react-dom/server');
  const ReactModule = await import('react');
  const ReactLib = (ReactModule as any).default || ReactModule;

  const ideaPayload = {
    fullName: 'Krishna Kumar Mahakul',
    email: '777777777777',
    mobileNumber: '77777777',
    city: 'Bhubaneswar',
    currentStage: 'Just an idea',
    isRegistered: true,
    industry: 'Technology / IT',
    description: 'This is a sample idea description to preview the email layout.',
    support: ['Idea validation', 'Business model'],
    preferredMode: 'Phone',
    preferredTimeSlot: 'Morning (10-1)'
  };

  const companyHtml = '<!doctype html>' + renderToStaticMarkup(ReactLib.createElement(ToCompanyEmail, ideaPayload as any));
  const userHtml = '<!doctype html>' + renderToStaticMarkup(ReactLib.createElement(ToUserEmail, { firstName: 'Krishna' } as any));

  const contactPayload = { firstName: 'Krishna', lastName: 'Mahakul', email: 'krishnakumarmahakul@gmail.com', message: 'Hello — I would like to learn more about your services.' };
  const companyContactHtml = '<!doctype html>' + renderToStaticMarkup(ReactLib.createElement(ToCompanyContact, contactPayload as any));
  const userContactHtml = '<!doctype html>' + renderToStaticMarkup(ReactLib.createElement(ToUserContact, { firstName: 'Krishna' } as any));

  const iframeStyle: React.CSSProperties = { width: '100%', maxWidth: 700, height: 800, border: '1px solid #e6e6e6', marginBottom: 24 };

  return (
    <div style={{ padding: 24, fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ marginBottom: 16 }}>Email Templates Preview</h1>

      <section style={{ marginBottom: 40 }}>
        <h2>Idea — Company (internal)</h2>
        <iframe title="Idea Company" srcDoc={companyHtml} style={iframeStyle} />
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2>Idea — User (acknowledgement)</h2>
        <iframe title="Idea User" srcDoc={userHtml} style={iframeStyle} />
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2>Contact — Company (internal)</h2>
        <iframe title="Contact Company" srcDoc={companyContactHtml} style={iframeStyle} />
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2>Contact — User (acknowledgement)</h2>
        <iframe title="Contact User" srcDoc={userContactHtml} style={iframeStyle} />
      </section>
    </div>
  );
}
