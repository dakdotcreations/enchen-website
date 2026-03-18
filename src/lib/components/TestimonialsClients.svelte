<script lang="ts">
	let { clients }: {
		clients: { src: string; alt: string }[]
	} = $props();
</script>

<section class="test-clients-section">
	<div class="s-label centered reveal">Our Clients</div>
	<h2 class="s-title reveal" style="text-align:center;">Trusted by Leading<br><span class="h-blue">Organisations</span></h2>
	<div class="clients-four-grid reveal">
		{#each clients as c}
			<div class="cl-item"><img src={c.src} alt={c.alt} /></div>
		{/each}
	</div>
</section>

<style>
	.test-clients-section {
		background: var(--off-white);
		padding: 100px 64px;
	}
	.clients-four-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1px;
		background: var(--border);
		margin-top: 56px;
	}
	.cl-item {
		background: white;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 36px 28px;
		transition: background 0.3s;
	}
	.cl-item:hover { background: var(--off-white); }
	.cl-item :global(img) {
		max-height: 36px;
		max-width: 110px;
		object-fit: contain;
		filter: grayscale(1) opacity(0.45);
		transition: filter 0.3s;
	}
	.cl-item:hover :global(img) { filter: grayscale(0) opacity(0.85); }
	@media (max-width: 1024px) {
		.test-clients-section { padding: 64px 32px; }
		.clients-four-grid { grid-template-columns: repeat(3, 1fr); }
	}
	@media (max-width: 640px) {
		.clients-four-grid { grid-template-columns: repeat(2, 1fr); }
	}
</style>
