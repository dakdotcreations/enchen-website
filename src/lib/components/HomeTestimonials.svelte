<section id="testimonials">
	<div class="s-label">Client Voices</div>
	<h2 class="s-title light">What Our Clients <span class="h-mag">Say</span></h2>
	<div class="test-grid">
		<div class="test-card">
			<div class="q-mark">"</div>
			<p class="test-text">Enchen transformed our headquarters into a space that perfectly embodies our brand. The attention to detail was extraordinary, and the team was professional from concept to completion.</p>
			<div class="test-div"></div>
			<div class="test-author">James Mwangi</div>
			<div class="test-role">CEO, Telecom East Africa</div>
		</div>
		<div class="test-card">
			<div class="q-mark">"</div>
			<p class="test-text">Working with Enchen Creative Hub was a revelation. They understood our vision immediately and delivered a home that exceeds every expectation. Truly bold, beautiful design.</p>
			<div class="test-div"></div>
			<div class="test-author">Amara Osei</div>
			<div class="test-role">Homeowner, Luxury Residence</div>
		</div>
		<div class="test-card">
			<div class="q-mark">"</div>
			<p class="test-text">From first meeting to final handover, Enchen brought creativity, discipline, and genuine passion. Our office now reflects who we are — modern, dynamic, and client-focused.</p>
			<div class="test-div"></div>
			<div class="test-author">Sarah Nakigozi</div>
			<div class="test-role">Managing Partner, Professional Services</div>
		</div>
	</div>
</section>

<style>
	#testimonials {
		background: #1a1618;
		padding: 120px 64px;
	}
	.test-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1px;
		background: rgba(255, 255, 255, 0.04);
		margin-top: 72px;
	}
	.test-card {
		background: #252225;
		padding: 48px 40px;
		transition: background 0.3s;
	}
	.test-card:hover { background: #2e292b; }
	.q-mark {
		font-family: var(--font-heading);
		font-size: 56px;
		line-height: 0.7;
		font-weight: 700;
		color: var(--accent);
		opacity: 0.35;
		margin-bottom: 20px;
	}
	.test-text {
		font-family: var(--font-heading);
		font-size: 15px;
		font-style: normal;
		line-height: 1.85;
		color: rgba(255, 255, 255, 0.7);
		margin-bottom: 28px;
	}
	.test-div {
		width: 20px;
		height: 1px;
		background: var(--accent);
		margin-bottom: 20px;
		opacity: 0.5;
	}
	.test-author {
		font-size: 10px;
		letter-spacing: 2.5px;
		text-transform: uppercase;
		color: rgba(255, 255, 255, 0.7);
		margin-bottom: 5px;
	}
	.test-role {
		font-size: 11px;
		color: rgba(255, 255, 255, 0.28);
	}
	@media (max-width: 1024px) {
		#testimonials { padding: 80px 32px; }
		.test-grid { grid-template-columns: 1fr; }
	}
</style>
