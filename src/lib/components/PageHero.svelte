<script lang="ts">
	let { breadcrumb, eyebrow, title, sub, hasOrb = false }: {
		breadcrumb: string;
		eyebrow: string;
		title: string;
		sub: string;
		hasOrb?: boolean;
	} = $props();
</script>

<div class="page-hero">
	<div class="page-hero-grid"></div>
	{#if hasOrb}<div class="page-hero-orb"></div>{/if}
	<div class="ph-content">
		<div class="ph-eyebrow">{eyebrow}</div>
		<h1 class="ph-title">{@html title}</h1>
		<p class="ph-sub">{sub}</p>
	</div>
</div>

<style>
	.page-hero {
		background: var(--black);
		padding: var(--space-44) var(--space-16) var(--space-24);
		position: relative;
		overflow: hidden;
	}
	.page-hero-grid {
		position: absolute;
		inset: 0;
		pointer-events: none;
		background-image:
			linear-gradient(rgba(255, 255, 255, 0.016) 1px, transparent 1px),
			linear-gradient(90deg, rgba(255, 255, 255, 0.016) 1px, transparent 1px);
		background-size: 88px 88px;
	}
	.page-hero-orb {
		position: absolute;
		width: 600px;
		height: 600px;
		border-radius: 50%;
		right: -120px;
		top: -120px;
		background: radial-gradient(circle, rgba(196, 34, 128, 0.04) 0%, transparent 60%);
		pointer-events: none;
	}
	.ph-content {
		position: relative;
		z-index: 2;
		max-width: 800px;
	}
	.ph-eyebrow {
		display: inline-flex;
		align-items: center;
		gap: 14px;
		font-size: var(--text-xs);
		letter-spacing: 4.5px;
		text-transform: uppercase;
		color: var(--accent);
		margin-bottom: 24px;
	}
	.ph-eyebrow::before {
		content: "";
		display: block;
		width: 30px;
		height: 1px;
		background: var(--accent);
		opacity: 0.7;
	}
	.ph-title {
		font-family: var(--font-heading);
		font-size: clamp(var(--text-4xl), 5vw, var(--text-7xl));
		font-weight: 700;
		line-height: 1.05;
		color: var(--white);
		margin-bottom: var(--space-6);
		letter-spacing: -0.04em;
	}
	.ph-title :global(em) {
		color: var(--accent);
		font-style: normal;
	}
	.ph-sub {
		font-size: var(--text-md);
		line-height: 1.9;
		color: var(--white-60);
		max-width: 560px;
	}
	@media (max-width: 1024px) {
		.page-hero { padding: var(--space-36) var(--space-8) var(--space-18); }
	}
</style>
