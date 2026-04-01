<section id="services">
	<div class="services-intro">
		<div>
			<div class="s-label reveal">What We Do</div>
			<h2 class="s-title light reveal">
				Design Services<br /><span class="h-blue">Tailored</span> to You
			</h2>
		</div>
		<p class="s-body light reveal" style="max-width:340px;">
			From initial concept to final handover — end-to-end design solutions for every space and
			budget.
		</p>
	</div>
	<div class="services-grid reveal">
		<div class="svc-img-card">
			<img src="/images/home/Corporate & Office Design.webp" alt=" " class="svc-img-placeholder" />
			<div class="svc-img-footer">
				<div>
					<div class="svc-img-num">01</div>
					<div class="svc-img-name">Corporate &amp; Office Design</div>
				</div>
				<div class="svc-img-arrow">↗</div>
			</div>
			<div class="svc-img-overlay">
				<div class="svc-hover-num">01</div>
				<div class="svc-hover-name">Corporate &amp; Office Design</div>
				<p class="svc-hover-desc">
					Workplaces that inspire performance, reinforce brand identity, and prioritise
					employee wellbeing.
				</p>
				<ul class="svc-hover-items">
					<li>Open plan &amp; private offices</li>
					<li>Conference &amp; meeting rooms</li>
					<li>Lounge &amp; wellness zones</li>
					<li>Brand-aligned interiors</li>
				</ul>
			</div>
		</div>
		<div class="svc-img-card">
			<img src="/images/home/Residential Design.webp" alt="Luxury residential interior" class="svc-img-placeholder" />
			<div class="svc-img-footer">
				<div>
					<div class="svc-img-num">02</div>
					<div class="svc-img-name">Residential Design</div>
				</div>
				<div class="svc-img-arrow">↗</div>
			</div>
			<div class="svc-img-overlay">
				<div class="svc-hover-num">02</div>
				<div class="svc-hover-name">Residential Design</div>
				<p class="svc-hover-desc">
					From luxury villas to contemporary homes — spaces crafted around how you truly
					live.
				</p>
				<ul class="svc-hover-items">
					<li>Luxury villas &amp; mansions</li>
					<li>Modern &amp; contemporary homes</li>
					<li>Smart home integration</li>
					<li>Space planning &amp; furnishing</li>
				</ul>
			</div>
		</div>
		<div class="svc-img-card">
			<img src="/images/home/Commercial Spaces.webp" alt="Boutique hotel commercial space" class="svc-img-placeholder" />
			<div class="svc-img-footer">
				<div>
					<div class="svc-img-num">03</div>
					<div class="svc-img-name">Commercial Spaces</div>
				</div>
				<div class="svc-img-arrow">↗</div>
			</div>
			<div class="svc-img-overlay">
				<div class="svc-hover-num">03</div>
				<div class="svc-hover-name">Commercial Spaces</div>
				<p class="svc-hover-desc">
					Retail, hospitality, and commercial developments designed to drive results and
					express brand identity.
				</p>
				<ul class="svc-hover-items">
					<li>Interior fit-out</li>
					<li>3D visualization &amp; virtual tours</li>
					<li>Sustainable &amp; green building</li>
					<li>Construction supervision</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<style>
	#services {
		background: var(--dark);
		padding: var(--space-30) var(--padding-global);
	}
	.services-intro {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: var(--space-16);
		flex-wrap: wrap;
		gap: var(--space-6);
	}
	.services-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-2);
	}
	.svc-img-card {
		position: relative;
		overflow: hidden;
		
		aspect-ratio: 3/4;
		background: var(--dark-mid);
	}
	.svc-img-placeholder {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.6s ease;
	}
	.svc-img-card:hover .svc-img-placeholder {
		transform: scale(1.05);
	}
	.svc-img-footer {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		padding: var(--space-8) var(--space-7) var(--space-7);
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
		font-size: var(--text-lg);
		color: var(--white);
		font-weight: 700;
		letter-spacing: -0.03em;
		line-height: 1.2;
	}
	.svc-img-num {
		font-size: var(--text-sm);
		letter-spacing: 3px;
		text-transform: uppercase;
		color: var(--accent);
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
		transition:
			opacity 0.4s ease,
			transform 0.4s ease;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		z-index: 3;
		border-top: 2px solid var(--accent);
	}
	.svc-img-card:hover .svc-img-overlay {
		opacity: 1;
		transform: translateY(0);
	}
	.svc-hover-num {
		font-size: var(--text-sm);
		letter-spacing: 3px;
		text-transform: uppercase;
		color: var(--accent);
		margin-bottom: var(--space-2);
		opacity: 0.8;
	}
	.svc-hover-name {
		font-family: var(--font-heading);
		font-size: var(--text-xl);
		color: var(--white);
		font-weight: 700;
		letter-spacing: -0.03em;
		margin-bottom: 14px;
	}
	.svc-hover-desc {
		font-size: var(--text-body);
		line-height: 1.8;
		color: var(--white);
        opacity: 0.8;
		margin-bottom: 20px;
	}
	.svc-hover-items {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	.svc-hover-items li {
		font-size: var(--text-md);
		color: var(--white);
        opacity: 0.6;
		display: flex;
		align-items: center;
		gap: var(--space-2);
		letter-spacing: 0.2px;
	}
	.svc-hover-items li::before {
		content: "";
		width: 10px;
		height: 1px;
		flex-shrink: 0;
		background: var(--accent);
		opacity: 0.6;
	}
	@media (max-width: 1024px) {
		.services-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
