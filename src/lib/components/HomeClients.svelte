<script lang="ts">
	const clients = [
		{ src: '/images/clients/wilken-telecom.webp', alt: 'Wilken Telecom' },
		{ src: '/images/clients/padre-pio.webp', alt: 'Padre Pio Insurance' },
		{ src: '/images/clients/nita.webp', alt: 'NITA' },
		{ src: '/images/clients/pride-bank.webp', alt: 'Pride Bank' },
		{ src: '/images/clients/apa-insurance.webp', alt: 'APA Insurance' },
		{ src: '/images/clients/fao.webp', alt: 'FAO' },
		{ src: '/images/clients/finance-trust-bank.webp', alt: 'Finance Trust Bank' },
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

	.clients-grid {
		display: grid;
        gap: var(--space-4);
		grid-template-columns: repeat(2, 1fr);

        @media (min-width: 720px) {
            grid-template-columns: repeat(4, 1fr);
        }

        @media (min-width: 1440px) {
            grid-template-columns: repeat(8, 1fr);
        }
	}

	.cl-item {
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.3s;
        padding: 0 var(--space-4);
        
		img {
            max-height: var(--space-32);
			max-width: 100%;
			object-fit: contain;
			filter: grayscale(10%) opacity(0.8);
			transition:
            filter 0.3s,
            transform 0.3s;
		}

        &:hover { 
            background: #fff; 

            img {
                filter: grayscale(0%) opacity(1);
                transform: scale(1.2);
            }
        }
	}
</style>
