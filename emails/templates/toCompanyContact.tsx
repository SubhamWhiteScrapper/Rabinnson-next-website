import * as React from 'react';

interface ToCompanyContactProps {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export const ToCompanyContact: React.FC<ToCompanyContactProps> = ({ firstName, lastName, email, message }) => {
  return (
    <html>
      <head>
        <style>{`
          body { margin:0; padding:0; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif }
          .container { max-width:600px; margin:20px auto; background:#fff; border-radius:8px; overflow:hidden; border:1px solid #e6e6e6 }
          .header { background:#000; padding:24px 20px; text-align:center; color:#fff }
          .logo{max-width:200px;height:auto;display:block;margin:0 auto 8px}
          .content { padding:28px }
          .label { color:#666; width:40% }
          @media only screen and (max-width:600px){ .content{padding:18px} .label{display:block;width:100%;padding-top:8px} td{display:block;width:100%} }
        `}</style>
      </head>
      <body style={{ backgroundColor: '#f4f4f4', margin: 0 }}>
        <div className="container">
          <div className="header">
            <img className="logo" src="https://static.wixstatic.com/media/c4fbc9_eb4b40d3a43e47048f600f6119cce635~mv2.png/v1/fill/w_392,h_120,al_c,q_85,enc_avif,quality_auto/rabinnson%20(2).png" alt="RABINNSON" />
            <h2 style={{ margin: 0 }}>New Contact Submission</h2>
          </div>
          <div className="content">
            <h3 style={{ marginTop: 0 }}>Contact Details</h3>
            <table width="100%" cellPadding={0} cellSpacing={0}>
              <tr>
                <td className="label">Name:</td>
                <td style={{ fontWeight: 700 }}>{firstName} {lastName}</td>
              </tr>
              <tr>
                <td className="label">Email:</td>
                <td style={{ fontWeight: 700 }}><a href={`mailto:${email}`} style={{ color: '#333', textDecoration: 'none' }}>{email}</a></td>
              </tr>
              <tr>
                <td className="label">Message:</td>
                <td style={{ paddingTop: 10, fontStyle: 'italic', color: '#333' }}>{message}</td>
              </tr>
            </table>
          </div>
        </div>
      </body>
    </html>
  );
};

export default ToCompanyContact;
