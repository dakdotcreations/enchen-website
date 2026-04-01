<script lang="ts">
	let { eyebrow, title, body, primaryHref = '/contact', primaryLabel = 'Start a Project', secondaryHref = '/portfolio', secondaryLabel = 'View Our Work' }: {
		eyebrow: string;
		title: string;
		body: string;
		primaryHref?: string;
		primaryLabel?: string;
		secondaryHref?: string;
		secondaryLabel?: string;
	} = $props();
</script>

<div class="cta-strip">
	<div class="s-label">{eyebrow}</div>
	<h2 class="cta-title">{@html title}</h2>
	<p class="cta-body">{body}</p>
	<div class="cta-actions">
		<a href={primaryHref} class="btn primary">{primaryLabel}</a>
		<a href={secondaryHref} class="btn outline">{secondaryLabel}</a>
	</div>
</div>

<style>
	.cta-strip {
		background: var(--black);
		padding: 120px 64px;
		text-align: center;
	}
	.cta-strip :global(.s-label) {
		justify-content: center;
	}
	.cta-strip :global(.s-label::before) {
		display: none;
	}
	.cta-title {
		font-family: var(--font-heading);
		font-size: clamp(32px, 4vw, 54px);
		font-weight: 700;
		letter-spacing: -0.05em;
		color: var(--white);
		margin-bottom: 24px;
		line-height: 1.05;
	}
	.cta-title :global(em) {
		color: var(--accent);
		font-style: normal;
	}
	.cta-body {
		font-size: var(--text-body);
		line-height: 1.9;
		color: rgba(255, 255, 255, 0.32);
		max-width: 440px;
		margin: 0 auto 48px;
	}
	.cta-actions {
		display: flex;
		gap: 16px;
		justify-content: center;
		align-items: center;
	}
	@media (max-width: 1024px) {
		.cta-strip { padding: 88px 32px; }
	}
	@media (max-width: 640px) {
		.cta-actions { flex-direction: column; }
	}
</style>
