<script lang="ts">
	const clients = [
		{ src: '/images/clients/wilken-telecom.webp', alt: 'Wilken Telecom' },
		{ src: '/images/clients/padre-pio.webp', alt: 'Padre Pio Insurance' },
		{ src: '/images/clients/nita.webp', alt: 'NITA' },
		{ src: '/images/clients/finance-trust-bank.webp', alt: 'Finance Trust Bank' },
		{ src: '/images/clients/fao.webp', alt: 'FAO' },
		{ src: '/images/clients/pride-bank.webp', alt: 'Pride Bank' },
		{ src: '/images/clients/apa-insurance.webp', alt: 'APA Insurance' },
		{ src: '/images/clients/morocan-consulate.webp', alt: 'Moroccan Consulate' },
	];
</script>

<div id="clients">
	<div class="clients-row">
		<span class="s-label">Partners</span>
	</div>
	<div class="clients-grid">
		{#each clients as client}
			<div class="cl-item">
				<img src={client.src} alt={client.alt} />
			</div>
		{/each}
	</div>
</div>

<style>
	#clients {
		background: var(--white);
		padding: 88px 64px;

		@media (max-width: 1024px) { padding: 60px 32px; }
	}

	.clients-row {
		display: flex;
		align-items: center;
		gap: 24px;
		margin-bottom: 52px;
	}

	.clients-label {
		font-size: 9px;
		letter-spacing: 4px;
		text-transform: uppercase;
		color: var(--black-60);
		white-space: nowrap;
	}

	.clients-rule {
		flex: 1;
		height: 1px;
		background: var(--border);
	}

	.clients-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
	}

	.cl-item {
		padding: 36px 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: -0.5px;
		transition: all 0.3s;

		&:hover { background: #fff; }

		img {
			max-height: 72px;
			width: auto;
			max-width: 160px;
			object-fit: contain;
			filter: grayscale(10%) opacity(0.8);
			transition:
				filter 0.3s,
				transform 0.3s;
		}

		&:hover img {
			filter: grayscale(0%) opacity(1);
			transform: scale(1.08);
		}
	}
</style>
