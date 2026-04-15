<script lang="ts">
	import { MapPin, Mail, Phone, Clock } from '@lucide/svelte';

	let submitLabel = $state("Send Enquiry")
	let submitError = $state("")
	let isSubmitting = $state(false)

	let firstName = $state("")
	let lastName = $state("")
	let email = $state("")
	let projectType = $state("")
	let message = $state("")

	async function handleSubmit(e: Event) {
		e.preventDefault()
		if (isSubmitting) return

		isSubmitting = true
		submitLabel = "Sending…"
		submitError = ""

		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ firstName, lastName, email, projectType, message, source: "homepage" }),
			})

			if (!res.ok) {
				const data = await res.json()
				submitError = data.error ?? "Something went wrong. Please try again."
				submitLabel = "Send Enquiry"
			} else {
				submitLabel = "Enquiry Sent"
				setTimeout(() => { submitLabel = "Send Enquiry" }, 3500)
			}
		} catch {
			submitError = "Network error. Please check your connection and try again."
			submitLabel = "Send Enquiry"
		} finally {
			isSubmitting = false
		}
	}
</script>

<section id="contact">
	<div class="s-label">Get In Touch</div>
	<h2 class="s-title">Start Your <span class="h-blue">Project</span></h2>
	<div class="contact-grid">
		<div class="">
			<div class="c-detail">
				<div class="c-icon"><MapPin size={16} /></div>
				<div>
					<div class="c-title">Our Studio</div>
					<div class="c-val">Enchen Creative Hub<br />Nakasero, Kampala, Uganda</div>
				</div>
			</div>
			<div class="c-detail">
				<div class="c-icon"><Mail size={16} /></div>
				<div>
					<div class="c-title">Email Us</div>
					<div class="c-val">hello@enchencreative.com</div>
				</div>
			</div>
			<div class="c-detail">
				<div class="c-icon"><Phone size={16} /></div>
				<div>
					<div class="c-title">Call Us</div>
					<div class="c-val">+256 752 606 904</div>
				</div>
			</div>
			<div class="c-detail">
				<div class="c-icon"><Clock size={16} /></div>
				<div>
					<div class="c-title">Studio Hours</div>
					<div class="c-val">
						Mon - Fri: 8:00 am - 6:00 pm<br />Saturday: 9:00 am - 2:00 pm
					</div>
				</div>
			</div>
		</div>
		<div class="">
			<div class="form-row">
				<div class="f-field">
					<label for="h-fname">First Name</label><input
						id="h-fname"
						type="text"
						bind:value={firstName} />
				</div>
				<div class="f-field">
					<label for="h-lname">Last Name</label><input
						id="h-lname"
						type="text"
						bind:value={lastName} />
				</div>
			</div>
			<div class="f-field">
				<label for="h-email">Email Address</label><input
					id="h-email"
					type="email"
					bind:value={email} />
			</div>
			<div class="f-field">
				<label for="h-project">Project Type</label>
				<select id="h-project" bind:value={projectType}>
					<option value="" disabled selected>Select a service</option>
					<option>Corporate / Office Design</option>
					<option>Residential Design</option>
					<option>Commercial Space</option>
					<option>Renovation &amp; Fit-Out</option>
					<option>3D Visualisation</option>
				</select>
			</div>
			<div class="f-field">
				<label for="h-message">Brief Message</label><textarea
					id="h-message"
					rows="4"
					placeholder="Tell us about your project..."
					bind:value={message}></textarea>
			</div>
			{#if submitError}
				<p class="f-error">{submitError}</p>
			{/if}
			<button class="f-submit" type="button" onclick={handleSubmit} disabled={isSubmitting}>{submitLabel}</button>
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
        border-radius: var(--space-8);
	}
	.c-title {
		font-size: var(--text-sm);
		/* letter-spacing: 3px; */
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
		margin-bottom: var(--space-4);
	}
	.f-field label {
		display: block;
		font-size: var(--text-base);
		text-transform: uppercase;
		color: var(--black-60);
		margin-bottom: var(--space-2);
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
        border-radius: var(--space-2);
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
		color: var(--white);
		font-family: "DM Sans", sans-serif;
		font-size: 10px;
		letter-spacing: 3px;
		text-transform: uppercase;
		padding: 15px;

		transition:
			background 0.3s,
			color 0.3s;
		margin-top: 6px;
        border-radius:  var(--space-2);
	}
	.f-submit:hover {
		background: var(--accent);
		color: var(--black);
	}
	.f-submit:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
	.f-error {
		font-size: 13px;
		color: #c0392b;
		margin-bottom: 10px;
	}
	@media (max-width: 1024px) {
		#contact {
			padding: 80px 32px;
		}
		.contact-grid {
			grid-template-columns: 1fr;
			gap: 44px;
		}
	}
	@media (max-width: 640px) {
		.form-row {
			grid-template-columns: 1fr;
		}
	}
</style>
