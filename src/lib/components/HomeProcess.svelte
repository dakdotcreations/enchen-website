<section id="process">
	<div class="s-label reveal">How We Work</div>
	<h2 class="s-title reveal">Our Design <span class="h-mag">Process</span></h2>
	<div class="process-steps reveal">
		<div class="p-step"><div class="p-num">01</div><div class="p-title">Discovery</div><div class="p-desc">A deep-dive consultation to understand your vision, needs, and desired outcomes.</div></div>
		<div class="p-step"><div class="p-num">02</div><div class="p-title">Concept Design</div><div class="p-desc">Creative concepts delivered with 3D visualizations and curated mood boards.</div></div>
		<div class="p-step"><div class="p-num">03</div><div class="p-title">Development</div><div class="p-desc">Refined designs, material selections, and technical drawings submitted for your approval.</div></div>
		<div class="p-step"><div class="p-num">04</div><div class="p-title">Delivery</div><div class="p-desc">Full project management and on-site supervision through to a perfect handover.</div></div>
	</div>
</section>

<style>
	#process {
		background: var(--white);
		padding: 120px 64px;
	}
	.process-steps {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		margin-top: 72px;
		position: relative;
	}
	.process-steps::after {
		content: "";
		position: absolute;
		top: 29px;
		left: 12.5%;
		right: 12.5%;
		height: 1px;
		background: var(--border);
	}
	.p-step {
		padding: 0 24px;
		text-align: center;
	}
	.p-num {
		width: 58px;
		height: 58px;
		border: 1px solid var(--border);
		background: var(--white);
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 28px;
		font-family: var(--font-heading);
		font-size: 18px;
		font-weight: 700;
		letter-spacing: -0.04em;
		color: var(--text-mid);
		position: relative;
		z-index: 1;
		transition: all 0.3s;
	}
	.p-step:hover .p-num {
		background: var(--accent);
		border-color: var(--accent);
		color: var(--white);
	}
	.p-title {
		font-size: 10px;
		letter-spacing: 2.5px;
		text-transform: uppercase;
		color: var(--text);
		margin-bottom: 12px;
		font-weight: 500;
	}
	.p-desc {
		font-size: 12px;
		line-height: 1.8;
		color: var(--muted);
	}
	@media (max-width: 1024px) {
		#process { padding: 80px 32px; }
		.process-steps { grid-template-columns: 1fr 1fr; gap: 44px; }
		.process-steps::after { display: none; }
	}
	@media (max-width: 640px) {
		.process-steps { grid-template-columns: 1fr; }
	}
</style>
