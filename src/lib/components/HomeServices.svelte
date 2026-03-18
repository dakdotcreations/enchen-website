<section id="services">
	<div class="services-intro">
		<div>
			<div class="s-label reveal">What We Do</div>
			<h2 class="s-title light reveal">Design Services<br><span class="h-blue">Tailored</span> to You</h2>
		</div>
		<p class="s-body reveal" style="max-width:340px;">From initial concept to final handover — end-to-end design solutions for every space and budget.</p>
	</div>
	<div class="services-grid reveal">
		<div class="svc-img-card">
			<div class="svc-img-placeholder svc-placeholder-1"><div class="svc-placeholder-accent"></div></div>
			<div class="svc-img-footer">
				<div><div class="svc-img-num">01</div><div class="svc-img-name">Corporate &amp; Office Design</div></div>
				<div class="svc-img-arrow">↗</div>
			</div>
			<div class="svc-img-overlay">
				<div class="svc-hover-num">01</div>
				<div class="svc-hover-name">Corporate &amp; Office Design</div>
				<p class="svc-hover-desc">Workplaces that inspire performance, reinforce brand identity, and prioritise employee wellbeing.</p>
				<ul class="svc-hover-items"><li>Open plan &amp; private offices</li><li>Conference &amp; meeting rooms</li><li>Lounge &amp; wellness zones</li><li>Brand-aligned interiors</li></ul>
			</div>
		</div>
		<div class="svc-img-card">
			<div class="svc-img-placeholder svc-placeholder-2"><div class="svc-placeholder-accent"></div></div>
			<div class="svc-img-footer">
				<div><div class="svc-img-num">02</div><div class="svc-img-name">Residential Design</div></div>
				<div class="svc-img-arrow">↗</div>
			</div>
			<div class="svc-img-overlay">
				<div class="svc-hover-num">02</div>
				<div class="svc-hover-name">Residential Design</div>
				<p class="svc-hover-desc">From luxury villas to contemporary homes — spaces crafted around how you truly live.</p>
				<ul class="svc-hover-items"><li>Luxury villas &amp; mansions</li><li>Modern &amp; contemporary homes</li><li>Smart home integration</li><li>Space planning &amp; furnishing</li></ul>
			</div>
		</div>
		<div class="svc-img-card">
			<div class="svc-img-placeholder svc-placeholder-3"><div class="svc-placeholder-accent"></div></div>
			<div class="svc-img-footer">
				<div><div class="svc-img-num">03</div><div class="svc-img-name">Commercial Spaces</div></div>
				<div class="svc-img-arrow">↗</div>
			</div>
			<div class="svc-img-overlay">
				<div class="svc-hover-num">03</div>
				<div class="svc-hover-name">Commercial Spaces</div>
				<p class="svc-hover-desc">Retail, hospitality, and commercial developments designed to drive results and express brand identity.</p>
				<ul class="svc-hover-items"><li>Interior fit-out</li><li>3D visualization &amp; virtual tours</li><li>Sustainable &amp; green building</li><li>Construction supervision</li></ul>
			</div>
		</div>
	</div>
</section>

<style>
	#services {
		background: var(--dark);
		padding: 120px 64px;
	}
	.services-intro {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		margin-bottom: 64px;
		flex-wrap: wrap;
		gap: 24px;
	}
	.services-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 10px;
	}
	.svc-img-card {
		position: relative;
		overflow: hidden;
		cursor: none;
		aspect-ratio: 3/4;
		background: var(--dark-mid);
	}
	.svc-img-placeholder {
		position: absolute;
		inset: 0;
		transition: transform 0.6s ease;
	}
	.svc-img-card:hover .svc-img-placeholder {
		transform: scale(1.05);
	}
	.svc-placeholder-1 {
		background: linear-gradient(150deg, #2c2729 0%, #1a1618 40%, #221e1f 100%);
	}
	.svc-placeholder-2 {
		background: linear-gradient(150deg, #1c2230 0%, #111825 40%, #0e1520 100%);
	}
	.svc-placeholder-3 {
		background: linear-gradient(150deg, #2a1c21 0%, #1a1218 40%, #201620 100%);
	}
	.svc-placeholder-accent {
		position: absolute;
		width: 200px;
		height: 200px;
		border-radius: 50%;
		background: radial-gradient(circle, rgba(196, 34, 128, 0.12) 0%, transparent 70%);
		top: 20%;
		left: 20%;
	}
	.svc-img-footer {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 32px 28px 28px;
		background: linear-gradient(to top, rgba(34, 30, 31, 0.95) 0%, transparent 100%);
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		z-index: 2;
		transition: opacity 0.35s ease;
	}
	.svc-img-card:hover .svc-img-footer {
		opacity: 0;
	}
	.svc-img-name {
		font-family: var(--font-heading);
		font-size: 18px;
		color: white;
		font-weight: 700;
		letter-spacing: -0.03em;
		line-height: 1.2;
	}
	.svc-img-num {
		font-size: 9px;
		letter-spacing: 3px;
		text-transform: uppercase;
		color: var(--gold);
		margin-bottom: 8px;
		opacity: 0.8;
	}
	.svc-img-arrow {
		width: 36px;
		height: 36px;
		flex-shrink: 0;
		border: 1px solid rgba(255, 255, 255, 0.2);
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		font-size: 13px;
		transition: all 0.3s;
		margin-bottom: 2px;
	}
	.svc-img-overlay {
		position: absolute;
		inset: 0;
		background: rgba(34, 30, 31, 0.92);
		padding: 36px 28px;
		opacity: 0;
		transform: translateY(16px);
		transition: opacity 0.4s ease, transform 0.4s ease;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		z-index: 3;
		border-top: 2px solid var(--gold);
	}
	.svc-img-card:hover .svc-img-overlay {
		opacity: 1;
		transform: translateY(0);
	}
	.svc-hover-num {
		font-size: 9px;
		letter-spacing: 3px;
		text-transform: uppercase;
		color: var(--gold);
		margin-bottom: 10px;
		opacity: 0.8;
	}
	.svc-hover-name {
		font-family: var(--font-heading);
		font-size: 20px;
		color: white;
		font-weight: 700;
		letter-spacing: -0.03em;
		margin-bottom: 14px;
	}
	.svc-hover-desc {
		font-size: 12px;
		line-height: 1.8;
		color: rgba(255, 255, 255, 0.45);
		margin-bottom: 20px;
	}
	.svc-hover-items {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	.svc-hover-items li {
		font-size: 11px;
		color: rgba(255, 255, 255, 0.32);
		display: flex;
		align-items: center;
		gap: 10px;
		letter-spacing: 0.2px;
	}
	.svc-hover-items li::before {
		content: "";
		width: 10px;
		height: 1px;
		flex-shrink: 0;
		background: var(--gold);
		opacity: 0.6;
	}
	@media (max-width: 1024px) {
		#services { padding: 80px 32px; }
		.services-grid { grid-template-columns: 1fr; }
	}
</style>
