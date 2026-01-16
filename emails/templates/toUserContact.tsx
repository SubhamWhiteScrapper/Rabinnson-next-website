import * as React from 'react';

interface ToUserContactProps {
  firstName: string;
}

export const ToUserContact: React.FC<ToUserContactProps> = ({ firstName }) => {
  return (
    <html>
      <head>
        <style>{`
          body { margin:0; padding:0; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif }
          .container { max-width:600px; margin:20px auto; background:#fff; border-radius:8px; overflow:hidden; border:1px solid #e6e6e6 }
          .header { background:#000; padding:24px 20px; text-align:center; color:#fff }
          .logo{max-width:200px;height:auto;display:block;margin:0 auto 8px}
          .content { padding:30px }
          @media only screen and (max-width:600px){ .content{padding:18px} .logo{max-width:160px} }
        `}</style>
      </head>
      <body style={{ backgroundColor: '#f4f4f4', margin: 0 }}>
        <div className="container">
          <div className="header">
            <img className="logo" src="https://static.wixstatic.com/media/c4fbc9_eb4b40d3a43e47048f600f6119cce635~mv2.png/v1/fill/w_392,h_120,al_c,q_85,enc_avif,quality_auto/rabinnson%20(2).png" alt="RABINNSON" />
            <h2 style={{ margin: 0 }}>Thanks for contacting Rabinnson</h2>
          </div>
          <div className="content">
            <h1 style={{ marginTop: 0 }}>Hi {firstName},</h1>
            <p style={{ color: '#666' }}>We received your message and our team will get back to you shortly. In the meantime, feel free to explore our website or reply to this email if you need immediate assistance.</p>
            <p style={{ marginTop: 24 }}>Best regards,<br/>Rabinnson Private Limited</p>
          </div>
        </div>
      </body>
    </html>
  );
};

export default ToUserContact;
