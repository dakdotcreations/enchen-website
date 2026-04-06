<section style="background: var(--dark); padding: 120px 64px;">
	<div class="s-label">How We Work</div>
	<h2 class="s-title light">Our <span class="h-blue">Process</span></h2>
	<p class="s-body light" style="max-width:540px; margin: 16px 0 56px;">
		We follow a structured, transparent process that keeps you informed and in control at every
		step, from first conversation to final handover.
	</p>
	<div class="process-grid">
		<div class="proc-item">
			<div class="proc-num">01</div>
			<div class="proc-info">
				<div class="proc-name">Discovery &amp; Brief</div>
				<div class="proc-desc">
					We begin with an in-depth consultation to understand your objectives, lifestyle
					or business requirements, preferences, and budget. This forms the foundation of
					every design decision that follows.
				</div>
			</div>
		</div>
		<div class="proc-item">
			<div class="proc-num">02</div>
			<div class="proc-info">
				<div class="proc-name">Concept Design</div>
				<div class="proc-desc">
					Our designers develop initial concepts, including spatial layouts, mood boards,
					material palettes, and preliminary 3D visualisations, for your review and
					feedback. We iterate until the concept perfectly captures your vision.
				</div>
			</div>
		</div>
		<div class="proc-item">
			<div class="proc-num">03</div>
			<div class="proc-info">
				<div class="proc-name">Design Development</div>
				<div class="proc-desc">
					Once the concept is approved, we develop full technical drawings, detailed
					specifications, and a comprehensive procurement schedule. Every element is
					resolved before a single piece of work begins on site.
				</div>
			</div>
		</div>
		<div class="proc-item">
			<div class="proc-num">04</div>
			<div class="proc-info">
				<div class="proc-name">Delivery &amp; Handover</div>
				<div class="proc-desc">
					We manage the construction and fit-out phase, coordinating all trades and
					suppliers to ensure flawless execution. The project is complete only when every
					detail meets our standard, and yours.
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.process-grid {
		display: flex;
		flex-direction: column;
		gap: 0;
	}
	.proc-item {
		display: grid;
		grid-template-columns: 80px 1fr;
		padding: 36px 0;
		border-bottom: 1px solid rgba(255, 255, 255, 0.05);
	}
	.proc-item:first-child {
		border-top: 1px solid rgba(255, 255, 255, 0.05);
	}
	.proc-num {
		font-family: var(--font-heading);
		font-size: 36px;
		font-weight: 700;
		letter-spacing: -0.05em;
		color: var(--accent);
		opacity: 0.45;
		line-height: 1;
	}
	.proc-name {
		font-size: 11px;
		letter-spacing: 2px;
		text-transform: uppercase;
		color: var(--white);
		margin-bottom: 10px;
		font-weight: 500;
	}
	.proc-desc {
		font-size: 13px;
		line-height: 1.85;
		color: rgba(255, 255, 255, 0.3);
		max-width: 560px;
	}
	@media (max-width: 1024px) {
		section {
			padding: 80px 32px !important;
		}
	}
</style>
