<script lang="ts">
	let openFaq = $state<number | null>(null);
	function toggleFaq(i: number) { openFaq = openFaq === i ? null : i; }

	let submitLabel = $state('Send Enquiry');
	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		submitLabel = '✓ Enquiry Sent';
		setTimeout(() => { submitLabel = 'Send Enquiry'; }, 3500);
	}

	const faqs = [
		{ q: 'What happens after I submit the form?', a: 'Within one business day, a member of the Enchen team will review your enquiry and respond personally. If your project is a good fit, we will propose a time for an initial consultation — either in person or by video call — at no charge.' },
		{ q: 'Is the initial consultation free?', a: 'Yes. Our initial consultation — whether in person or by video call — is completely free of charge and without obligation. We use that conversation to understand your project, assess fit, and outline how we can help.' },
		{ q: 'How quickly do you respond to enquiries?', a: 'We aim to respond to every enquiry within one business day. For urgent project requirements, please call us directly or note your timeline in the enquiry form.' },
		{ q: 'Do you take on small projects?', a: 'Yes. We work on projects of all sizes, from single-room redesigns to full commercial fit-outs. The same design process and commitment to quality applies to every engagement, regardless of scale or budget.' }
	];
</script>

<svelte:head>
	<title>Contact — Enchen Creative Hub</title>
</svelte:head>

<!-- Page Hero -->
<div class="page-hero">
	<div class="page-hero-grid"></div>
	<div class="ph-content">
		<div class="ph-breadcrumb"><a href="/">Home</a><span class="ph-breadcrumb-sep">/</span>Contact</div>
		<div class="ph-eyebrow">Get in Touch</div>
		<h1 class="ph-title">Let's Start<br><em>Something</em></h1>
		<p class="ph-sub">Tell us about your project and we will respond within one business day. Every great space begins with a conversation.</p>
	</div>
</div>

<!-- Contact Main -->
<div class="contact-page-grid">

	<!-- Info Panel -->
	<div class="contact-info-panel">
		<div class="cip-label">Our Details</div>
		<div class="cip-title">We Would Love to Hear From You</div>
		<p class="cip-body">Whether you have a fully formed brief or just an idea, we are happy to talk. Reach us by phone, email, or fill in the form — we respond to every enquiry personally.</p>
		<div class="cip-details">
			<div class="cip-item">
				<div><div class="cip-key">Address</div><div class="cip-val">Ntinda Shopping Centre,<br>Ntinda, Kampala, Uganda</div></div>
			</div>
			<div class="cip-item">
				<div><div class="cip-key">Email</div><div class="cip-val"><a href="mailto:hello@enchencreativehub.com">hello@enchencreativehub.com</a></div></div>
			</div>
			<div class="cip-item">
				<div><div class="cip-key">Phone</div><div class="cip-val"><a href="tel:+256700000000">+256 700 000 000</a></div></div>
			</div>
			<div class="cip-item">
				<div><div class="cip-key">Office Hours</div><div class="cip-val">Monday – Friday: 8:00am – 6:00pm<br>Saturday: 9:00am – 2:00pm</div></div>
			</div>
		</div>
		<div class="cip-social">
		<a href="https://www.instagram.com" class="cip-soc-link" title="Instagram" target="_blank" rel="noopener noreferrer">IG</a>
		<a href="https://www.linkedin.com" class="cip-soc-link" title="LinkedIn" target="_blank" rel="noopener noreferrer">LI</a>
		<a href="https://www.facebook.com" class="cip-soc-link" title="Facebook" target="_blank" rel="noopener noreferrer">FB</a>
		<a href="https://www.houzz.com" class="cip-soc-link" title="Houzz" target="_blank" rel="noopener noreferrer">HZ</a>
		</div>
	</div>

	<!-- Form Panel -->
	<div class="contact-form-panel">
		<div class="cip-label" style="color:var(--gold);">Project Enquiry</div>
		<div class="cip-title" style="color:var(--black); font-size:clamp(24px,2.5vw,32px);">Tell Us About Your Project</div>
		<p style="font-size:14px; color:var(--text-mid); margin:8px 0 36px; line-height:1.7;">We will review your enquiry and respond with a tailored proposal and consultation invitation within one business day.</p>
		<form id="contactForm" onsubmit={handleSubmit}>
			<div class="form-row">
				<div class="form-group"><label class="form-label" for="c-fname">First Name *</label><input id="c-fname" type="text" class="form-input" placeholder="Your first name" required /></div>
				<div class="form-group"><label class="form-label" for="c-lname">Last Name *</label><input id="c-lname" type="text" class="form-input" placeholder="Your last name" required /></div>
			</div>
			<div class="form-row">
				<div class="form-group"><label class="form-label" for="c-email">Email Address *</label><input id="c-email" type="email" class="form-input" placeholder="you@example.com" required /></div>
				<div class="form-group"><label class="form-label" for="c-phone">Phone Number</label><input id="c-phone" type="tel" class="form-input" placeholder="+256 700 000 000" /></div>
			</div>
			<div class="form-group">
				<label class="form-label" for="c-project">Project Type *</label>
				<select id="c-project" class="form-input form-select" required>
					<option value="" disabled selected>Select a project type</option>
					<option>Corporate &amp; Office Design</option>
					<option>Residential Design</option>
					<option>Commercial Spaces</option>
					<option>3D Visualisation &amp; Rendering</option>
					<option>Project Management</option>
					<option>Renovation &amp; Fit-Out</option>
					<option>Not sure — I'd like to discuss</option>
				</select>
			</div>
			<div class="form-row">
				<div class="form-group">
					<label class="form-label" for="c-budget">Approximate Budget</label>
					<select id="c-budget" class="form-input form-select">
						<option value="" disabled selected>Select a range</option>
						<option>Under UGX 10,000,000</option>
						<option>UGX 10,000,000 – 50,000,000</option>
						<option>UGX 50,000,000 – 150,000,000</option>
						<option>UGX 150,000,000 – 500,000,000</option>
						<option>Above UGX 500,000,000</option>
					</select>
				</div>
				<div class="form-group">
					<label class="form-label" for="c-start">Preferred Start</label>
					<select id="c-start" class="form-input form-select">
						<option value="" disabled selected>When are you hoping to start?</option>
						<option>As soon as possible</option>
						<option>Within 1–3 months</option>
						<option>Within 3–6 months</option>
						<option>Planning for 6+ months away</option>
					</select>
				</div>
			</div>
			<div class="form-group">
				<label class="form-label" for="c-message">Tell Us About Your Project *</label>
				<textarea id="c-message" class="form-input form-textarea" placeholder="Describe your project, the location, any key requirements, and anything else you think would help us understand what you need." rows="5" required></textarea>
			</div>
			<button type="submit" class="btn-primary" style="width:100%; display:block; text-align:center;">{submitLabel}</button>
		</form>
	</div>

</div>

<!-- Map Placeholder -->
<div class="contact-map">
	<div class="map-placeholder">
		<div class="map-ph-inner">
			<div class="map-ph-mark">◎</div>
			<div class="map-ph-label">Enchen Creative Hub</div>
			<div class="map-ph-sub">Ntinda Shopping Centre, Kampala, Uganda</div>
			<a href="https://maps.google.com/?q=Ntinda+Shopping+Centre+Kampala+Uganda" target="_blank" rel="noopener noreferrer" class="map-ph-link">Open in Maps</a>
		</div>
	</div>
</div>

<!-- FAQ -->
<div class="faq-section">
	<div class="s-label centered reveal">Before You Reach Out</div>
	<h2 class="s-title reveal" style="text-align:center;">Quick <span class="h-blue">Answers</span></h2>
	<div class="faq-list reveal" style="margin-top:48px; max-width:800px; margin-left:auto; margin-right:auto;">
		{#each faqs as faq, i}
			<div class="faq-item" class:open={openFaq === i}>
				<button class="faq-q" onclick={() => toggleFaq(i)}>
					{faq.q}
					<span class="faq-icon">+</span>
				</button>
				<div class="faq-a"><div class="faq-a-inner"><p>{faq.a}</p></div></div>
			</div>
		{/each}
	</div>
</div>
