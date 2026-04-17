import nodemailer from 'nodemailer';
import { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_EMAIL_TO, CONTACT_EMAIL_FROM } from '$env/static/private';

export interface ContactFormData {
	firstName: string;
	lastName: string;
	email: string;
	phone?: string;
	projectType?: string;
	budget?: string;
	startDate?: string;
	message: string;
	source: 'contact-page' | 'homepage';
}

function buildEmailHtml(data: ContactFormData): string {
	const rows = [
		['Name', `${data.firstName} ${data.lastName}`],
		['Email', `<a href="mailto:${data.email}" style="color:#C42280;">${data.email}</a>`],
		data.phone ? ['Phone', data.phone] : null,
		data.projectType ? ['Project Type', data.projectType] : null,
		data.budget ? ['Approximate Budget', data.budget] : null,
		data.startDate ? ['Preferred Start', data.startDate] : null,
	]
		.filter(Boolean)
		.map(
			(row) => `
			<tr>
				<td style="padding:12px 16px;font-size:13px;color:#888888;font-family:'DM Sans',Arial,sans-serif;white-space:nowrap;border-bottom:1px solid #EDEAE3;">${row![0]}</td>
				<td style="padding:12px 16px;font-size:13px;color:#161616;font-family:'DM Sans',Arial,sans-serif;border-bottom:1px solid #EDEAE3;">${row![1]}</td>
			</tr>`
		)
		.join('');

	const sourceLabel = data.source === 'homepage' ? 'Homepage Quick Enquiry' : 'Contact Page';

	return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Enquiry – Enchen Creative Hub</title>
</head>
<body style="margin:0;padding:0;background:#F6F3EE;font-family:'DM Sans',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F6F3EE;padding:48px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#FAFAF8;border-radius:4px;overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="background:#221E1F;padding:40px 48px;">
              <p style="margin:0 0 8px;font-size:10px;letter-spacing:3px;text-transform:uppercase;color:#C42280;font-family:'DM Sans',Arial,sans-serif;">New Enquiry</p>
              <h1 style="margin:0;font-size:26px;font-weight:700;letter-spacing:-0.04em;color:#FAFAF8;font-family:Arial,sans-serif;">Enchen Creative Hub</h1>
            </td>
          </tr>

          <!-- Subheader -->
          <tr>
            <td style="background:#2C2729;padding:16px 48px;">
              <p style="margin:0;font-size:13px;color:rgba(255,255,255,0.5);font-family:'DM Sans',Arial,sans-serif;">
                Submitted via <strong style="color:rgba(255,255,255,0.8);">${sourceLabel}</strong>
              </p>
            </td>
          </tr>

          <!-- Details Table -->
          <tr>
            <td style="padding:40px 48px 0;">
              <p style="margin:0 0 20px;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#888888;font-family:'DM Sans',Arial,sans-serif;">Contact Details</p>
              <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border:1px solid #EDEAE3;border-radius:4px;overflow:hidden;">
                ${rows}
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding:32px 48px 0;">
              <p style="margin:0 0 12px;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#888888;font-family:'DM Sans',Arial,sans-serif;">Message</p>
              <div style="background:#F6F3EE;border:1px solid #EDEAE3;border-radius:4px;padding:20px 24px;">
                <p style="margin:0;font-size:14px;line-height:1.8;color:#161616;font-family:'DM Sans',Arial,sans-serif;white-space:pre-wrap;">${data.message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
              </div>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding:32px 48px;">
              <a href="mailto:${data.email}" style="display:inline-block;background:#C42280;color:#FAFAF8;text-decoration:none;font-size:13px;font-family:'DM Sans',Arial,sans-serif;font-weight:600;letter-spacing:0.5px;padding:14px 28px;border-radius:2px;">Reply to ${data.firstName}</a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="border-top:1px solid #EDEAE3;padding:24px 48px;">
              <p style="margin:0;font-size:12px;color:#888888;font-family:'DM Sans',Arial,sans-serif;">
                This message was sent from the Enchen Creative Hub website enquiry form.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function createTransport() {
	return nodemailer.createTransport({
		host: SMTP_HOST,
		port: Number(SMTP_PORT),
		secure: Number(SMTP_PORT) === 465,
		auth: {
			user: SMTP_USER,
			pass: SMTP_PASS,
		},
	});
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
	const transporter = createTransport();

	await transporter.sendMail({
		from: `"Enchen Creative Hub Website" <${CONTACT_EMAIL_FROM}>`,
		to: CONTACT_EMAIL_TO,
		replyTo: data.email,
		subject: `New Enquiry from ${data.firstName} ${data.lastName} – ${data.projectType ?? 'General'}`,
		html: buildEmailHtml(data),
	});
}
