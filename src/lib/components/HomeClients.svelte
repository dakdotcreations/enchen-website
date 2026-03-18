<div id="clients">
	<div class="clients-row reveal">
		<span class="clients-label">Trusted By</span>
		<div class="clients-rule"></div>
	</div>
	<div class="clients-grid reveal">
		<div class="cl-item"><img src="/images/clients/stanbic-bank.webp" alt="Stanbic Bank" /></div>
		<div class="cl-item"><img src="/images/clients/mtn.webp" alt="MTN" /></div>
		<div class="cl-item"><img src="/images/clients/airtel.webp" alt="Airtel" /></div>
		<div class="cl-item"><img src="/images/clients/caa.webp" alt="CAA" /></div>
		<div class="cl-item"><img src="/images/clients/united-nations.webp" alt="United Nations" /></div>
		<div class="cl-item"><img src="/images/clients/nita.webp" alt="NITA" /></div>
		<div class="cl-item"><img src="/images/clients/fao.webp" alt="FAO" /></div>
	</div>
</div>

<style>
	#clients {
		background: var(--white);
		padding: 88px 64px;
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
		color: var(--muted);
		white-space: nowrap;
	}
	.clients-rule {
		flex: 1;
		height: 1px;
		background: var(--border);
	}
	.clients-grid {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
	}
	.cl-item {
		padding: 36px 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid var(--border);
		margin: -0.5px;
		transition: all 0.3s;
		cursor: none;
	}
	.cl-item:hover { background: var(--white); }
	.cl-item img {
		max-height: 72px;
		width: auto;
		max-width: 160px;
		object-fit: contain;
		filter: grayscale(100%) opacity(0.4);
		transition: filter 0.3s, transform 0.3s;
	}
	.cl-item:hover img {
		filter: grayscale(0%) opacity(1);
		transform: scale(1.08);
	}
	@media (max-width: 1024px) {
		#clients { padding: 60px 32px; }
		.clients-grid { grid-template-columns: repeat(4, 1fr); }
	}
	@media (max-width: 640px) {
		.clients-grid { grid-template-columns: repeat(2, 1fr); }
	}
</style>
