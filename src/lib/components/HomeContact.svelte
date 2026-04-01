<script lang="ts">
	let submitLabel = $state('Send Enquiry →');
	function handleSubmit(e: Event) {
		e.preventDefault();
		submitLabel = '✓ Enquiry Sent';
		setTimeout(() => { submitLabel = 'Send Enquiry →'; }, 3500);
	}
</script>

<section id="contact">
	<div class="s-label reveal">Get In Touch</div>
	<h2 class="s-title reveal">Start Your <span class="h-blue">Project</span></h2>
	<div class="contact-grid">
		<div class="reveal">
			<div class="c-detail"><div class="c-icon">📍</div><div><div class="c-title">Our Studio</div><div class="c-val">Enchen Creative Hub<br>Ntinda, Kampala, Uganda</div></div></div>
			<div class="c-detail"><div class="c-icon">✉️</div><div><div class="c-title">Email Us</div><div class="c-val">hello@enchencreativehub.com</div></div></div>
			<div class="c-detail"><div class="c-icon">📞</div><div><div class="c-title">Call Us</div><div class="c-val">+256 700 000 000</div></div></div>
			<div class="c-detail"><div class="c-icon">🕐</div><div><div class="c-title">Studio Hours</div><div class="c-val">Mon – Fri: 8:00 am – 6:00 pm<br>Saturday: 9:00 am – 2:00 pm</div></div></div>
		</div>
		<div class="reveal rd2">
			<div class="form-row">
				<div class="f-field"><label for="h-fname">First Name</label><input id="h-fname" type="text" placeholder="James" /></div>
				<div class="f-field"><label for="h-lname">Last Name</label><input id="h-lname" type="text" placeholder="Mwangi" /></div>
			</div>
			<div class="f-field"><label for="h-email">Email Address</label><input id="h-email" type="email" placeholder="you@company.com" /></div>
			<div class="f-field">
				<label for="h-project">Project Type</label>
				<select id="h-project">
					<option value="" disabled selected>Select a service</option>
					<option>Corporate / Office Design</option>
					<option>Residential Design</option>
					<option>Commercial Space</option>
					<option>Renovation &amp; Fit-Out</option>
					<option>3D Visualisation</option>
				</select>
			</div>
			<div class="f-field"><label for="h-message">Brief Message</label><textarea id="h-message" rows="4" placeholder="Tell us about your project..."></textarea></div>
			<button class="f-submit" type="button" onclick={handleSubmit}>{submitLabel}</button>
		</div>
	</div>
</section>

<style>
	#contact {
		background: var(--off-white);
		padding: 120px 64px;
	}
	.contact-grid {
		display: grid;
		grid-template-columns: 1fr 1.2fr;
		gap: 88px;
		margin-top: 80px;
	}
	.c-detail {
		display: flex;
		gap: 20px;
		margin-bottom: 36px;
		padding-bottom: 36px;
		border-bottom: 1px solid var(--border);
	}
	.c-detail:last-child {
		border-bottom: none;
		margin-bottom: 0;
	}
	.c-icon {
		width: 40px;
		height: 40px;
		flex-shrink: 0;
		border: 1px solid var(--border);
		background: var(--white);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 14px;
	}
	.c-title {
		font-size: 8px;
		letter-spacing: 3px;
		text-transform: uppercase;
		color: var(--accent);
		margin-bottom: 6px;
		opacity: 0.9;
	}
	.c-val {
		font-size: 13px;
		line-height: 1.75;
		color: var(--text-mid);
	}
	.form-row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 12px;
	}
	.f-field {
		margin-bottom: 12px;
	}
	.f-field label {
		display: block;
		font-size: 8px;
		letter-spacing: 3px;
		text-transform: uppercase;
		color: var(--black-60);
		margin-bottom: 8px;
	}
	.f-field input,
	.f-field textarea,
	.f-field select {
		width: 100%;
		border: 1px solid var(--border);
		background: var(--white);
		color: var(--text);
		padding: 13px 16px;
		font-family: "DM Sans", sans-serif;
		font-size: 13px;
		outline: none;
		transition: border-color 0.3s;
		
		appearance: none;
	}
	.f-field input:focus,
	.f-field textarea:focus,
	.f-field select:focus {
		border-color: var(--accent);
	}
	.f-field textarea {
		resize: vertical;
		min-height: 110px;
	}
	.f-submit {
		width: 100%;
		border: none;
		background: var(--dark);
		color: white;
		font-family: "DM Sans", sans-serif;
		font-size: 10px;
		letter-spacing: 3px;
		text-transform: uppercase;
		padding: 15px;
		
		transition: background 0.3s, color 0.3s;
		margin-top: 6px;
	}
	.f-submit:hover {
		background: var(--accent);
		color: var(--black);
	}
	@media (max-width: 1024px) {
		#contact { padding: 80px 32px; }
		.contact-grid { grid-template-columns: 1fr; gap: 44px; }
	}
	@media (max-width: 640px) {
		.form-row { grid-template-columns: 1fr; }
	}
</style>
