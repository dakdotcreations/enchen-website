<section id="about">
	<div class="s-label reveal">About Enchen</div>
	<div class="about-grid">
		<div>
			<h2 class="s-title reveal">Spaces That <span class="h-blue">Inspire</span><br>&amp; Endure</h2>
			<p class="s-body reveal">Enchen Creative Hub is an architectural and interior design firm delivering bold, functional, and inspiring environments. We work with residential, corporate, and commercial clients — providing tailored design solutions that convert ideas into remarkable real spaces.</p>
			<p class="s-body reveal" style="margin-top:18px;">Our vision is to become the leading turnkey interior design company recognized globally for quality, innovation, and designs that elevate brands.</p>
		</div>
		<div class="about-values reveal">
			<div class="v-card"><div class="v-icon blue">◈</div><div class="v-name">Innovation</div><div class="v-desc">Advanced technology and bold thinking in every brief.</div></div>
			<div class="v-card"><div class="v-icon mag">◈</div><div class="v-name">Sustainability</div><div class="v-desc">Green, responsible design built for the future.</div></div>
			<div class="v-card"><div class="v-icon pur">◈</div><div class="v-name">Precision</div><div class="v-desc">Every detail considered, nothing left to chance.</div></div>
			<div class="v-card"><div class="v-icon teal">◈</div><div class="v-name">Client First</div><div class="v-desc">Your vision is the blueprint for everything we do.</div></div>
		</div>
	</div>
</section>

<!-- About – wide image strip -->
<div class="about-wide-strip">
	<div class="about-wide-inner">
		<div class="about-wide-label">ENCHEN</div>
	</div>
	<div class="about-wide-overlay"></div>
	<div class="about-wide-caption">Precision Design · <em>Commercial Excellence</em> · Kampala, Uganda</div>
</div>

<style>
	#about {
		background: var(--off-white);
		padding: 120px 64px;
	}
	.about-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 88px;
		align-items: center;
		margin-top: 80px;
	}
	.about-values {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1px;
		background: var(--border);
		margin-top: 44px;
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
	/* Wide strip */
	.about-wide-strip {
		width: 100%;
		height: 480px;
		background: var(--dark);
		position: relative;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.about-wide-inner {
		position: absolute;
		inset: 0;
		background: linear-gradient(135deg, #2c2729 0%, #1a1618 50%, #2c2729 100%);
		display: flex;
		align-items: center;
		justify-content: center;
		transition: transform 0.6s ease;
	}
	.about-wide-strip:hover .about-wide-inner { transform: scale(1.02); }
	.about-wide-label {
		font-family: var(--font-heading);
		font-size: clamp(80px, 12vw, 180px);
		font-weight: 700;
		color: rgba(255, 255, 255, 0.035);
		letter-spacing: -0.06em;
		line-height: 1;
		user-select: none;
	}
	.about-wide-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			to right,
			rgba(34, 30, 31, 0.5) 0%,
			transparent 30%,
			transparent 70%,
			rgba(34, 30, 31, 0.5) 100%
		);
	}
	.about-wide-caption {
		position: absolute;
		bottom: 36px;
		left: 64px;
		z-index: 2;
		font-size: 9px;
		letter-spacing: 4px;
		text-transform: uppercase;
		color: rgba(255, 255, 255, 0.28);
	}
	.about-wide-caption em {
		color: var(--gold);
		font-style: normal;
	}
	@media (max-width: 1024px) {
		#about { padding: 80px 32px; }
		.about-grid { grid-template-columns: 1fr; gap: 44px; }
	}
	@media (max-width: 640px) {
		.about-values { grid-template-columns: 1fr; }
	}
</style>
