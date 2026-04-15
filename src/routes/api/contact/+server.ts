import { json } from '@sveltejs/kit';
import { sendContactEmail, type ContactFormData } from '$lib/server/mailer';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	let body: Record<string, string>;

	try {
		body = await request.json();
	} catch {
		return json({ error: 'Invalid request body.' }, { status: 400 });
	}

	const { firstName, lastName, email, phone, projectType, budget, startDate, message, source } = body;

	if (!firstName || !lastName || !email || !message) {
		return json({ error: 'Required fields are missing.' }, { status: 400 });
	}

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		return json({ error: 'Invalid email address.' }, { status: 400 });
	}

	const validSources = ['contact-page', 'homepage'] as const;
	const safeSource: ContactFormData['source'] = validSources.includes(source as ContactFormData['source'])
		? (source as ContactFormData['source'])
		: 'contact-page';

	const data: ContactFormData = {
		firstName: firstName.slice(0, 100),
		lastName: lastName.slice(0, 100),
		email: email.slice(0, 254),
		phone: phone?.slice(0, 50),
		projectType: projectType?.slice(0, 100),
		budget: budget?.slice(0, 100),
		startDate: startDate?.slice(0, 100),
		message: message.slice(0, 5000),
		source: safeSource,
	};

	try {
		await sendContactEmail(data);
		return json({ success: true });
	} catch (err) {
		console.error('[contact] Failed to send email:', err);
		return json({ error: 'Failed to send message. Please try again later.' }, { status: 500 });
	}
};
