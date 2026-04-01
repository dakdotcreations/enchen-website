<section style="background: var(--dark); padding: 120px 64px;">
	<div class="s-label">Our Direction</div>
	<h2 class="s-title light">Mission &amp; <span class="h-blue">Vision</span></h2>
	<div class="mv-grid">
		<div class="mv-card">
			<div class="mv-title">Our Mission</div>
			<p class="mv-body">
                To harness creativity and advanced technology to deliver standout design solutions that exceed expectations and keep our clients ahead of the curve.
            </p>
		</div>
		<div class="mv-card">
			<div class="mv-title">Our Vision</div>
			<p class="mv-body">
                To become the top choice turnkey Interior design company recognized for quality, bold, innovative design solutions that elevates brands to new heights.
            </p>
		</div>
	</div>
</section>

<style>
	.mv-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--padding-global);
		margin-top: var(--space-20);
	}
	.mv-card {
		background: var(--black-80);
		padding: 56px 52px;
        border-radius: var(--space-8);
	}
	.mv-title {
		font-family: var(--font-heading);
		font-size: var(--text-2xl);
		font-weight: 700;
		letter-spacing: -0.04em;
		color: var(--white);
		margin-bottom: 20px;
	}
	.mv-body {
		font-size: var(--text-body);
		line-height: 1.9;
		color: var(--white-60);
	}
	@media (max-width: 1024px) {
		.mv-grid { grid-template-columns: 1fr; }
	}
</style>
