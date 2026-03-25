<script lang="ts">
	let { text, name, role }: { text: string; name: string; role: string } = $props();
</script>

<div class="featured-quote">
	<div class="fq-mark">"</div>
	<p class="fq-text">{text}</p>
	<div class="fq-div"></div>
	<div class="fq-name">{name}</div>
	<div class="fq-role">{role}</div>
</div>

<style>
	.featured-quote {
		background: var(--black);
		padding: 100px 64px;
		text-align: center;
		position: relative;
	}
	.fq-mark {
		font-family: var(--font-heading);
		font-size: 160px;
		line-height: 0.5;
		color: var(--accent);
		opacity: 0.15;
		margin-bottom: 24px;
	}
	.fq-text {
		font-family: var(--font-heading);
		font-size: clamp(20px, 2.5vw, 30px);
		letter-spacing: -0.03em;
		color: white;
		max-width: 900px;
		margin: 0 auto;
		line-height: 1.5;
		font-style: italic;
	}
	.fq-div {
		width: 48px;
		height: 2px;
		background: var(--accent);
		margin: 40px auto 24px;
	}
	.fq-name {
		font-family: var(--font-heading);
		font-size: 15px;
		font-weight: 700;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: white;
	}
	.fq-role {
		font-size: 12px;
		color: rgba(255, 255, 255, 0.4);
		margin-top: 4px;
	}
	@media (max-width: 640px) {
		.featured-quote { padding: 64px 24px; }
		.fq-mark { font-size: 100px; }
	}
</style>
