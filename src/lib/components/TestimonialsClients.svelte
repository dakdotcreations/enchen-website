<script lang="ts">
	let { clients }: {
		clients: { src: string; alt: string }[]
	} = $props();
</script>

<section class="test-clients-section">
	<div class="s-label centered">Our Clients</div>
	<h2 class="s-title" style="text-align:center;">Trusted by Leading<br><span class="h-blue">Organisations</span></h2>
	<div class="clients-four-grid">
		{#each clients as c}
			<div class="cl-item"><img src={c.src} alt={c.alt} /></div>
		{/each}
	</div>
</section>

<style>
	.test-clients-section {
		background: var(--off-white);
		padding: var(--space-28) var(--space-16);
	}
    @media (max-width: 1024px) {
		.test-clients-section {
			padding: 64px 32px 80px;
		}
	}
	@media (max-width: 640px) {
		.test-clients-section {
			padding: 56px 20px 64px;
		}
	}
	.clients-four-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
		gap: 1px;
		margin-top: var(--space-14);
	}
	.cl-item {
		background: var(--white);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: var(--space-9) var(--space-7);
		transition: background 0.3s;
	}
	.cl-item:hover { background: white; }
	.cl-item :global(img) {
		max-height: var(--space-20);
		object-fit: contain;
		filter: grayscale(1) opacity(0.45);
		transition: filter 0.3s;
	}
	.cl-item:hover :global(img) { filter: grayscale(0) opacity(0.85); }
</style>
