import * as React from 'react';

interface ToCompanyEmailProps {
    fullName: string;
    email: string;
    mobileNumber: string;
    city: string;
    currentStage: string;
    isRegistered: boolean;
    industry: string;
    description: string;
    support: string[];
    preferredMode: string;
    preferredTimeSlot: string;
}

export const ToCompanyEmail: React.FC<ToCompanyEmailProps> = ({
    fullName, email, mobileNumber, city, currentStage, isRegistered, industry, description, support, preferredMode, preferredTimeSlot
}) => {
    return (
        <html>
            <head>
                                <style>
                                        {`
                        :root{color-scheme: light dark}
                        body{font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;}
                        .container{max-width:600px;width:100%;background-color:#ffffff;border-radius:8px;overflow:hidden;margin:20px 0;border:1px solid #e6e6e6}
                        .header{background:#000;padding:28px 20px;text-align:center;color:#fff}
                        .logo{max-width:220px;height:auto;display:block;margin:0 auto 8px}
                        .content{padding:36px}
                        .label{color:#666;width:40%}
                        .muted{color:#666;font-size:13px}
                        @media only screen and (max-width:600px){
                            .container{margin:12px;padding:0}
                            .content{padding:20px}
                            .label{display:block;width:100%;padding-top:8px}
                            td{display:block;width:100%}
                        }
                    `}
                                </style>
            </head>
            <body style={{ margin: 0, padding: 0, backgroundColor: '#f4f4f4', fontFamily: 'Arial, sans-serif' }}>
                <table width="100%" cellPadding="0" cellSpacing="0" style={{ backgroundColor: '#f4f4f4' }}>
                    <tr>
                        <td align="center">
                            <table className="container" width="600" cellPadding="0" cellSpacing="0" style={{ maxWidth: '600px', width: '100%', backgroundColor: '#ffffff', borderRadius: '8px', overflow: 'hidden', margin: '20px 0', border: '1px solid #e0e0e0' }}>
                                {/* Header */}
                                <tr>
                                    <td style={{ backgroundColor: '#000000', padding: '30px', textAlign: 'center' }}>
                                        <img className="logo" src="https://static.wixstatic.com/media/c4fbc9_eb4b40d3a43e47048f600f6119cce635~mv2.png/v1/fill/w_392,h_120,al_c,q_85,enc_avif,quality_auto/rabinnson%20(2).png" alt="RABINNSON" />
                                        <h2 style={{ color: '#ffffff', margin: 0, fontSize: '22px', letterSpacing: '1px' }}>RABINNSON</h2>
                                        <p className="muted" style={{ margin: '6px 0 0', fontSize: '12px', textTransform: 'uppercase' }}>Private Limited</p>
                                    </td>
                                </tr>

                                {/* Body */}
                                <tr>
                                    <td className="content" style={{ padding: '40px' }}>
                                        <h1 style={{ color: '#333333', fontSize: '22px', margin: '0 0 20px', borderBottom: '2px solid #000000', paddingBottom: '10px' }}>New Idea Submission</h1>

                                        <div style={{ marginBottom: '30px' }}>
                                            <h3 style={{ color: '#000000', fontSize: '16px', margin: '0 0 15px', textTransform: 'uppercase' }}>Personal Details</h3>
                                            <table width="100%" cellPadding="0" cellSpacing="0">
                                                <tr>
                                                    <td style={{ padding: '8px 0', borderBottom: '1px solid #eeeeee', width: '40%', color: '#666666' }}>Full Name:</td>
                                                    <td style={{ padding: '8px 0', borderBottom: '1px solid #eeeeee', fontWeight: 'bold', color: '#333333' }}>{fullName}</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ padding: '8px 0', borderBottom: '1px solid #eeeeee', color: '#666666' }}>Email:</td>
                                                    <td style={{ padding: '8px 0', borderBottom: '1px solid #eeeeee', fontWeight: 'bold', color: '#333333' }}>
                                                        <a href={`mailto:${email}`} style={{ color: '#333333', textDecoration: 'none' }}>{email}</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style={{ padding: '8px 0', borderBottom: '1px solid #eeeeee', color: '#666666' }}>Mobile:</td>
                                                    <td style={{ padding: '8px 0', borderBottom: '1px solid #eeeeee', fontWeight: 'bold', color: '#333333' }}>{mobileNumber}</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ padding: '8px 0', borderBottom: '1px solid #eeeeee', color: '#666666' }}>City:</td>
                                                    <td style={{ padding: '8px 0', borderBottom: '1px solid #eeeeee', fontWeight: 'bold', color: '#333333' }}>{city || '-'}</td>
                                                </tr>
                                            </table>
                                        </div>

                                        <div style={{ marginBottom: '30px' }}>
                                            <h3 style={{ color: '#000000', fontSize: '16px', margin: '0 0 15px', textTransform: 'uppercase' }}>Startup Info</h3>
                                            <table width="100%" cellPadding="0" cellSpacing="0">
                                                <tr>
                                                    <td style={{ padding: '8px 0', borderBottom: '1px solid #eeeeee', width: '40%', color: '#666666' }}>Stage:</td>
                                                    <td style={{ padding: '8px 0', borderBottom: '1px solid #eeeeee', fontWeight: 'bold', color: '#333333' }}>{currentStage}</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ padding: '8px 0', borderBottom: '1px solid #eeeeee', color: '#666666' }}>Industry:</td>
                                                    <td style={{ padding: '8px 0', borderBottom: '1px solid #eeeeee', fontWeight: 'bold', color: '#333333' }}>{industry || '-'}</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ padding: '8px 0', borderBottom: '1px solid #eeeeee', color: '#666666' }}>Registered:</td>
                                                    <td style={{ padding: '8px 0', borderBottom: '1px solid #eeeeee', fontWeight: 'bold', color: '#333333' }}>{isRegistered ? 'Yes' : 'No'}</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={2} style={{ padding: '15px 0 5px', color: '#666666' }}>Description:</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={2} style={{ padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '4px', color: '#333333', fontStyle: 'italic', lineHeight: '1.5' }}>
                                                        "{description}"
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>

                                        <div>
                                            <h3 style={{ color: '#000000', fontSize: '16px', margin: '0 0 15px', textTransform: 'uppercase' }}>Support Info</h3>
                                            <table width="100%" cellPadding="0" cellSpacing="0">
                                                <tr>
                                                    <td style={{ padding: '8px 0', borderBottom: '1px solid #eeeeee', width: '40%', color: '#666666' }}>Assistance Needed:</td>
                                                    <td style={{ padding: '8px 0', borderBottom: '1px solid #eeeeee', fontWeight: 'bold', color: '#333333' }}>{support.join(', ')}</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ padding: '8px 0', borderBottom: '1px solid #eeeeee', color: '#666666' }}>Preferred Mode:</td>
                                                    <td style={{ padding: '8px 0', borderBottom: '1px solid #eeeeee', fontWeight: 'bold', color: '#333333' }}>{preferredMode}</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ padding: '8px 0', borderBottom: '1px solid #eeeeee', color: '#666666' }}>Time Slot:</td>
                                                    <td style={{ padding: '8px 0', borderBottom: '1px solid #eeeeee', fontWeight: 'bold', color: '#333333' }}>{preferredTimeSlot}</td>
                                                </tr>
                                            </table>
                                        </div>

                                    </td>
                                </tr>

                                {/* Footer */}
                                <tr>
                                    <td style={{ backgroundColor: '#f9f9f9', padding: '30px', borderTop: '1px solid #eeeeee' }}>
                                        <table width="100%" cellPadding="0" cellSpacing="0">
                                            <tr>
                                                <td style={{ color: '#333333', fontSize: '14px', fontWeight: 'bold', paddingBottom: '10px' }}>
                                                    RABINNSON PRIVATE LIMITED
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ color: '#666666', fontSize: '13px', lineHeight: '1.6', paddingBottom: '20px' }}>
                                                    WeWork, 13th Floor, Building No 9, IT Park,<br />
                                                    Shaikpet, Hi Tech City, Hyderabad - 500081,<br />
                                                    Telangana State
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ paddingBottom: '5px' }}>
                                                    <span style={{ color: '#888888', fontSize: '13px' }}>Cell No: </span>
                                                    <a href="tel:+916372904670" style={{ color: '#333333', textDecoration: 'none', fontSize: '13px' }}>+91 63729 04670</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ paddingBottom: '5px' }}>
                                                    <span style={{ color: '#888888', fontSize: '13px' }}>Helpdesk: </span>
                                                    <a href="tel:+919668901241" style={{ color: '#333333', textDecoration: 'none', fontSize: '13px' }}>+91 966890 1241</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ paddingBottom: '5px' }}>
                                                    <span style={{ color: '#888888', fontSize: '13px' }}>e-Mail: </span>
                                                    <a href="mailto:krishna@rabinnson.in" style={{ color: '#333333', textDecoration: 'none', fontSize: '13px' }}>krishna@rabinnson.in</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span style={{ color: '#888888', fontSize: '13px' }}>Web: </span>
                                                    <a href="https://www.rabinnson.com" style={{ color: '#333333', textDecoration: 'none', fontSize: '13px' }}>www.rabinnson.com</a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </body>
        </html>
    );
};

export default ToCompanyEmail;
