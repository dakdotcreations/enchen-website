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
		<div class="ph-breadcrumb">
			<a href="/">Home</a>
			<span class="ph-breadcrumb-sep">/</span>
			{breadcrumb}
		</div>
		<div class="ph-eyebrow">{eyebrow}</div>
		<h1 class="ph-title">{@html title}</h1>
		<p class="ph-sub">{sub}</p>
	</div>
</div>

<style>
	.page-hero {
		background: var(--black);
		padding: 180px 64px 96px;
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
	.ph-breadcrumb {
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 9px;
		letter-spacing: 3px;
		text-transform: uppercase;
		color: rgba(255, 255, 255, 0.22);
		margin-bottom: 32px;
	}
	.ph-breadcrumb :global(a) {
		color: rgba(255, 255, 255, 0.28);
		text-decoration: none;
		transition: color 0.3s;
	}
	.ph-breadcrumb :global(a):hover {
		color: var(--gold);
	}
	.ph-breadcrumb-sep {
		color: var(--gold);
		opacity: 0.35;
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
		font-size: 10px;
		letter-spacing: 4.5px;
		text-transform: uppercase;
		color: var(--gold);
		margin-bottom: 24px;
	}
	.ph-eyebrow::before {
		content: "";
		display: block;
		width: 30px;
		height: 1px;
		background: var(--gold);
		opacity: 0.7;
	}
	.ph-title {
		font-family: var(--font-heading);
		font-size: clamp(36px, 5vw, 68px);
		font-weight: 700;
		line-height: 1.05;
		color: var(--white);
		margin-bottom: 24px;
		letter-spacing: -0.04em;
	}
	.ph-title :global(em) {
		color: var(--gold);
		font-style: normal;
	}
	.ph-sub {
		font-size: 14px;
		line-height: 1.9;
		color: rgba(255, 255, 255, 0.38);
		max-width: 560px;
	}
	@media (max-width: 1024px) {
		.page-hero { padding: 140px 32px 72px; }
	}
</style>
