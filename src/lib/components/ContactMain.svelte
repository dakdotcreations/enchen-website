<script lang="ts">
	import FaqList from "$lib/components/FaqList.svelte"

	let submitLabel = $state("Send Enquiry")
	function handleSubmit(e: SubmitEvent) {
		e.preventDefault()
		submitLabel = "✓ Enquiry Sent"
		setTimeout(() => {
			submitLabel = "Send Enquiry"
		}, 3500)
	}

	const faqs = [
		{
			q: "What happens after I submit the form?",
			a: "Within one business day, a member of the Enchen team will review your enquiry and respond personally. If your project is a good fit, we will propose a time for an initial consultation — either in person or by video call — at no charge.",
		},
		{
			q: "How quickly do you respond to enquiries?",
			a: "We aim to respond to every enquiry within one business day. For urgent project requirements, please call us directly or note your timeline in the enquiry form.",
		},
		{
			q: "Do you take on small projects?",
			a: "Yes. We work on projects of all sizes, from single-room redesigns to full commercial fit-outs. The same design process and commitment to quality applies to every engagement, regardless of scale or budget.",
		},
	]
</script>

<!-- Contact Main -->
<div class="contact-page-grid">
	<!-- Info Panel -->
	<div class="contact-info-panel">
		<div class="cip-label">Our Details</div>
		<div class="cip-title">We Would Love to Hear From You</div>
		<p class="cip-body">
			Whether you have a fully formed brief or just an idea, we are happy to talk. Reach us by
			phone, email, or fill in the form we respond to every enquiry personally.
		</p>
		<div class="cip-details">
			<div class="cip-item">
				<div>
					<div class="cip-key">Address</div>
					<div class="cip-val">Nakasero, Uganda</div>
				</div>
			</div>
			<div class="cip-item">
				<div>
					<div class="cip-key">Email</div>
					<div class="cip-val">
						<a href="mailto:hello@enchencreativehub.com">hello@enchencreativehub.com</a>
					</div>
				</div>
			</div>
			<div class="cip-item">
				<div>
					<div class="cip-key">Phone</div>
					<div class="cip-val"><a href="tel:+256752606904">+256 752 606 904</a></div>
				</div>
			</div>
			<div class="cip-item">
				<div>
					<div class="cip-key">Office Hours</div>
					<div class="cip-val">
						Monday - Friday: 8:00am - 6:00pm<br />Saturday: 9:00am - 2:00pm
					</div>
				</div>
			</div>
		</div>
		<!-- <div class="cip-social">
			<a
				href="https://www.instagram.com"
				class="cip-soc-link"
				title="Instagram"
				target="_blank"
				rel="noopener noreferrer">IG</a>
			<a
				href="https://www.linkedin.com"
				class="cip-soc-link"
				title="LinkedIn"
				target="_blank"
				rel="noopener noreferrer">LI</a>
			<a
				href="https://www.facebook.com"
				class="cip-soc-link"
				title="Facebook"
				target="_blank"
				rel="noopener noreferrer">FB</a>
			<a
				href="https://www.houzz.com"
				class="cip-soc-link"
				title="Houzz"
				target="_blank"
				rel="noopener noreferrer">HZ</a>
		</div> -->
	</div>

	<!-- Form Panel -->
	<div class="contact-form-panel">
		<div class="cip-label-gold">Project Enquiry</div>
		<div class="cfp-title">Tell Us About Your Project</div>
		<p class="cfp-sub">
			We will review your enquiry and respond with a tailored proposal and consultation
			invitation within one business day.
		</p>
		<form id="contactForm" onsubmit={handleSubmit}>
			<div class="form-row">
				<div class="form-group">
					<label class="form-label" for="c-fname">First Name *</label><input
						id="c-fname"
						type="text"
						class="form-input"
						placeholder="Your first name"
						required />
				</div>
				<div class="form-group">
					<label class="form-label" for="c-lname">Last Name *</label><input
						id="c-lname"
						type="text"
						class="form-input"
						placeholder="Your last name"
						required />
				</div>
			</div>
			<div class="form-row">
				<div class="form-group">
					<label class="form-label" for="c-email">Email Address *</label><input
						id="c-email"
						type="email"
						class="form-input"
						placeholder="you@example.com"
						required />
				</div>
				<div class="form-group">
					<label class="form-label" for="c-phone">Phone Number</label><input
						id="c-phone"
						type="tel"
						class="form-input"
						placeholder="+256 700 000 000" />
				</div>
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
				<textarea
					id="c-message"
					class="form-input form-textarea"
					placeholder="Describe your project, the location, any key requirements, and anything else you think would help us understand what you need."
					rows="5"
					required></textarea>
			</div>
			<button type="submit" class="btn primary btn-full">{submitLabel}</button>
		</form>
	</div>
</div>

<!-- Map Placeholder -->
<!-- <div class="contact-map">
	<div class="map-placeholder">
		<div class="map-ph-inner">
			<div class="map-ph-mark">◎</div>
			<div class="map-ph-label">Enchen Creative Hub</div>
			<div class="map-ph-sub">Ntinda Shopping Centre, Kampala, Uganda</div>
			<a href="https://maps.google.com/?q=Ntinda+Shopping+Centre+Kampala+Uganda" target="_blank" rel="noopener noreferrer" class="map-ph-link">Open in Maps</a>
		</div>
	</div>
</div> -->

<!-- FAQ -->
<div class="contact-faq-section">
	<div class="s-label centered">Before You Reach Out</div>
	<h2 class="s-title" style="text-align:center;">
		Quick <span class="h-blue">Answers</span>
	</h2>
	<div class="contact-faq-inner">
		<FaqList items={faqs} />
	</div>
</div>

<style>
	.contact-page-grid {
		display: grid;
		grid-template-columns: 1fr 1.4fr;
		background: var(--off-white);
	}
	.contact-info-panel {
		background: var(--black);
		padding: 80px 56px;
	}
	.cip-label {
		font-size: 10px;
		letter-spacing: 3px;
		text-transform: uppercase;
		color: var(--accent);
		margin-bottom: 20px;
	}
	.cip-title {
		font-family: var(--font-heading);
		font-size: clamp(22px, 2.2vw, 30px);
		font-weight: 700;
		letter-spacing: -0.04em;
		color: white;
		margin-bottom: 16px;
		line-height: 1.2;
	}
	.cip-body {
		font-size: 14px;
		line-height: 1.8;
		color: rgba(255, 255, 255, 0.45);
		margin-bottom: 40px;
	}
	.cip-details {
		display: flex;
		flex-direction: column;
		gap: 24px;
		margin-bottom: 40px;
	}
	.cip-item {
		display: flex;
		gap: 16px;
		align-items: flex-start;
	}
	.cip-key {
		font-size: 9px;
		letter-spacing: 2px;
		text-transform: uppercase;
		color: var(--accent);
		margin-bottom: 4px;
		opacity: 0.7;
	}
	.cip-val {
		font-size: 13px;
		color: rgba(255, 255, 255, 0.65);
		line-height: 1.6;
	}
	.cip-val :global(a) {
		color: rgba(255, 255, 255, 0.65);
		text-decoration: none;
		transition: color 0.2s;
	}
	.cip-val :global(a:hover) {
		color: var(--accent);
	}
	.cip-social {
		display: flex;
		gap: 12px;
	}
	.cip-soc-link {
		width: 36px;
		height: 36px;
		border: 1px solid rgba(255, 255, 255, 0.12);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 9px;
		letter-spacing: 1px;
		color: rgba(255, 255, 255, 0.3);
		text-decoration: none;
		transition:
			border-color 0.3s,
			color 0.3s;
	}
	.cip-soc-link:hover {
		border-color: var(--accent);
		color: var(--accent);
	}
	.contact-form-panel {
		background: white;
		padding: 80px 56px;
	}
	.cip-label-gold {
		font-size: 10px;
		letter-spacing: 3px;
		text-transform: uppercase;
		color: var(--accent);
		margin-bottom: 16px;
	}
	.cfp-title {
		font-family: var(--font-heading);
		font-size: clamp(24px, 2.5vw, 32px);
		font-weight: 700;
		letter-spacing: -0.04em;
		color: var(--black);
		margin-bottom: 8px;
		line-height: 1.2;
	}
	.cfp-sub {
		font-size: 14px;
		color: var(--text-mid);
		margin-bottom: 36px;
		line-height: 1.7;
	}
	.form-row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 16px;
	}
	.form-group {
		display: flex;
		flex-direction: column;
		gap: 6px;
		margin-bottom: 16px;
	}
	.form-label {
		font-size: 10px;
		letter-spacing: 2px;
		text-transform: uppercase;
		color: var(--text-mid);
	}
	.form-input {
		height: 46px;
		border: 1px solid var(--border);
		background: var(--off-white);
		padding: 0 16px;
		font-size: 14px;
		color: var(--black);
		outline: none;
		transition: border-color 0.2s;
		font-family: inherit;
		appearance: none;
		-webkit-appearance: none;
	}
	.form-input:focus {
		border-color: var(--accent);
	}
	.form-textarea {
		height: auto;
		padding: 14px 16px;
		resize: vertical;
	}
	.form-select {
		cursor: pointer;
	}
	.btn-full {
		width: 100%;
		display: block;
		text-align: center;
	}
	.contact-map {
		height: 360px;
		background: var(--dark-mid);
		position: relative;
		overflow: hidden;
	}
	.map-placeholder {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background: radial-gradient(circle at 50% 50%, #2c2729 0%, #1a1618 100%);
	}
	.map-ph-inner {
		text-align: center;
	}
	.map-ph-mark {
		font-size: 40px;
		color: var(--accent);
		margin-bottom: 12px;
		opacity: 0.6;
	}
	.map-ph-label {
		font-family: var(--font-heading);
		font-size: 18px;
		font-weight: 700;
		color: white;
		letter-spacing: -0.02em;
	}
	.map-ph-sub {
		font-size: 12px;
		color: rgba(255, 255, 255, 0.3);
		margin-top: 6px;
	}
	.map-ph-link {
		display: inline-block;
		margin-top: 20px;
		font-size: 10px;
		letter-spacing: 2px;
		text-transform: uppercase;
		color: var(--accent);
		border: 1px solid var(--accent);
		padding: 8px 20px;
		text-decoration: none;
		transition:
			background 0.3s,
			color 0.3s;
	}
	.map-ph-link:hover {
		background: var(--accent);
		color: white;
	}
	.contact-faq-section {
		background: var(--off-white);
		padding: 100px 64px 120px;
	}
	.contact-faq-inner {
		margin-top: 48px;
		max-width: 800px;
		margin-left: auto;
		margin-right: auto;
	}
	@media (max-width: 1024px) {
		.contact-page-grid {
			grid-template-columns: 1fr;
		}
		.contact-info-panel,
		.contact-form-panel {
			padding: 60px 32px;
		}
		.contact-faq-section {
			padding: 64px 32px 80px;
		}
	}
	@media (max-width: 640px) {
		.contact-info-panel,
		.contact-form-panel {
			padding: 48px 20px;
		}
		.form-row {
			grid-template-columns: 1fr;
		}
		.contact-faq-section {
			padding: 56px 20px 64px;
		}
	}
</style>
