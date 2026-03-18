<section id="story" style="background: var(--off-white);">
	<div class="s-label reveal">Who We Are</div>
	<div class="about-grid">
		<div class="about-visual reveal">
			<div class="about-card-main">
				<div class="about-card-bg"></div>
				<div class="about-card-text">ECH</div>
			</div>
			<div class="about-badge">
				<div class="badge-top">Est.</div>
				<div class="badge-main">2022</div>
				<div class="badge-sub">Kampala, Uganda</div>
			</div>
		</div>
		<div>
			<div class="about-tag">Enchen Creative Hub</div>
			<h2 class="s-title reveal">Designing Spaces<br>That <span class="h-blue">Endure</span></h2>
			<p class="s-body reveal">Enchen Creative Hub was born from a simple conviction: every space has the potential to inspire. From our studio in Ntinda, Kampala, we partner with clients across Uganda and the East African region to deliver architectural and interior design that is bold, functional, and deeply considered.</p>
			<p class="s-body reveal" style="margin-top:18px;">We are a multidisciplinary team of architects, interior designers, and project managers united by a passion for craft. We believe the best design begins with listening — understanding how you live, how you work, and what you aspire to create.</p>
			<p class="s-body reveal" style="margin-top:18px;">Our approach is grounded in precision and guided by aesthetics. We take projects from initial concept through to construction completion, acting as a single trusted partner for every stage of the journey.</p>
			<div class="about-values reveal" style="margin-top:44px;">
				<div class="v-card"><div class="v-icon blue">◈</div><div class="v-name">Precision</div><div class="v-desc">Every measurement, every material, every decision — considered with meticulous care.</div></div>
				<div class="v-card"><div class="v-icon mag">◈</div><div class="v-name">Collaboration</div><div class="v-desc">We work alongside our clients, not for them. Your input shapes every stage.</div></div>
				<div class="v-card"><div class="v-icon pur">◈</div><div class="v-name">Innovation</div><div class="v-desc">We embrace advanced technology and fresh thinking to solve complex design challenges.</div></div>
				<div class="v-card"><div class="v-icon teal">◈</div><div class="v-name">Sustainability</div><div class="v-desc">Responsible design that balances beauty with environmental accountability.</div></div>
			</div>
		</div>
	</div>
</section>

<style>
	#story {
		padding: 120px 64px;
	}
	.about-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 88px;
		align-items: center;
		margin-top: 80px;
	}
	.about-visual {
		position: relative;
	}
	.about-card-main {
		width: 100%;
		aspect-ratio: 3/4;
		background: var(--dark);
		position: relative;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.about-card-bg {
		position: absolute;
		inset: 0;
		background: linear-gradient(135deg, #2c2729 0%, #1a1618 100%);
	}
	.about-card-text {
		font-family: var(--font-heading);
		font-size: 88px;
		font-weight: 700;
		color: rgba(255, 255, 255, 0.04);
		letter-spacing: -4px;
		position: relative;
		z-index: 1;
	}
	.about-badge {
		position: absolute;
		bottom: -24px;
		right: -24px;
		background: var(--gold);
		padding: 28px 32px;
		text-align: center;
	}
	.badge-top {
		font-size: 8px;
		letter-spacing: 3px;
		text-transform: uppercase;
		color: rgba(255, 255, 255, 0.65);
		margin-bottom: 4px;
	}
	.badge-main {
		font-family: var(--font-heading);
		font-size: 36px;
		font-weight: 700;
		color: white;
		letter-spacing: -0.04em;
		line-height: 1;
	}
	.badge-sub {
		font-size: 8px;
		letter-spacing: 2px;
		text-transform: uppercase;
		color: rgba(255, 255, 255, 0.55);
		margin-top: 4px;
	}
	.about-tag {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		border: 1px solid var(--border);
		background: transparent;
		color: var(--text-mid);
		font-size: 9px;
		letter-spacing: 3px;
		text-transform: uppercase;
		padding: 6px 16px;
		margin-bottom: 28px;
	}
	.about-values {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1px;
		background: var(--border);
	}
	.v-card {
		background: var(--off-white);
		padding: 24px 20px;
		transition: background 0.3s;
	}
	.v-card:hover { background: var(--white); }
	.v-icon {
		width: 32px;
		height: 32px;
		margin-bottom: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 14px;
		border: 1px solid var(--border);
		background: var(--white);
	}
	.v-name {
		font-size: 10px;
		letter-spacing: 2px;
		text-transform: uppercase;
		color: var(--text);
		margin-bottom: 6px;
		font-weight: 500;
	}
	.v-desc {
		font-size: 12px;
		line-height: 1.7;
		color: var(--muted);
	}
	@media (max-width: 1024px) {
		#story { padding: 80px 32px; }
		.about-grid { grid-template-columns: 1fr; gap: 44px; }
	}
	@media (max-width: 640px) {
		.about-values { grid-template-columns: 1fr; }
	}
</style>
