<script lang="ts">
	let { items }: { items: { q: string; a: string }[] } = $props();
	let openFaq = $state<number | null>(null);
	function toggle(i: number) { openFaq = openFaq === i ? null : i; }
</script>

<div class="faq-list">
	{#each items as faq, i}
		<div class="faq-item" class:open={openFaq === i}>
			<button class="faq-q" onclick={() => toggle(i)}>
				{faq.q}
				<span class="faq-icon">+</span>
			</button>
			<div class="faq-a"><div class="faq-a-inner"><p>{faq.a}</p></div></div>
		</div>
	{/each}
</div>

<style>
	.faq-list {
		display: flex;
		flex-direction: column;
		gap: 0;
	}
	.faq-item {
		border-bottom: 1px solid var(--border);
		overflow: hidden;
	}
	.faq-item:first-child {
		border-top: 1px solid var(--border);
	}
	.faq-q {
		width: 100%;
		text-align: left;
		padding: 22px 0;
		background: none;
		border: none;
		cursor: none;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 24px;
		font-family: "DM Sans", sans-serif;
		font-size: 14px;
		color: var(--text);
		font-weight: 400;
		transition: color 0.3s;
	}
	.faq-q:hover {
		color: var(--accent);
	}
	.faq-icon {
		font-size: 20px;
		color: var(--accent);
		flex-shrink: 0;
		transition: transform 0.3s;
		line-height: 1;
		opacity: 0.6;
		font-weight: 300;
	}
	.faq-item.open .faq-icon {
		transform: rotate(45deg);
	}
	.faq-a {
		max-height: 0;
		overflow: hidden;
		transition: max-height 0.4s ease, padding 0.3s ease;
	}
	.faq-a-inner {
		padding: 0 0 24px 0;
		font-size: 13px;
		line-height: 1.9;
		color: var(--muted);
		max-width: 680px;
	}
	.faq-item.open .faq-a {
		max-height: 300px;
	}
</style>
