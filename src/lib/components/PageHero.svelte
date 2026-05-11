<script lang="ts">
	let { title, sub, eyebrow, breadcrumb }: {
		title: string;
		sub: string;
		eyebrow?: string;
		breadcrumb?: string;
	} = $props();
</script>

<div class="page-hero">
	<div class="page-hero-grid"></div>
	<div class="ph-content">
		{#if eyebrow}
			<div class="ph-eyebrow">{eyebrow}</div>
		{/if}
		<h1 class="ph-title">{@html title}</h1>
		<p class="ph-sub">{sub}</p>
	</div>
	<div class="page-hero-illust">
	</div>
</div>

<style>
	.page-hero {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(320px, 460px);
		gap: var(--space-24);
		align-items: center;
		background: var(--black);
		padding: var(--space-44) var(--space-16) var(--space-24);
		position: relative;
		overflow: visible;
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
	.page-hero-illust {
		position: relative;
		width: 100%;
		max-width: 460px;
		height: auto;
		pointer-events: none;
		opacity: 0.24;
		margin-left: auto;
		transform: translateX(32px);
	}
	.illust-svg {
		width: 100%;
		height: 100%;
		color: var(--white);
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
		.page-hero {
			grid-template-columns: 1fr;
			padding: var(--space-36) var(--space-8) var(--space-18);
		}
		.page-hero-illust {
			max-width: 320px;
			margin: 0 auto var(--space-16);
		}
	}

	@media (max-width: 640px) {
		.page-hero-illust {
			display: none;
		}
	}
</style>
