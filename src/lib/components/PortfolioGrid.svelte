<script lang="ts">
	let { items }: { items: { num: string; cat: string; name: string; loc: string; label: string }[] } = $props();
	const filters = ['All', 'Corporate', 'Residential', 'Commercial'];
	let activeFilter = $state('All');
</script>

<div class="port-full-section">
	<div class="s-label reveal">Selected Projects</div>
	<div class="port-filter reveal">
		{#each filters as f}
			<button class="f-btn" class:active={activeFilter === f} onclick={() => (activeFilter = f)}>{f}</button>
		{/each}
	</div>
	<div class="port-full-grid reveal">
		{#each items as p}
			{#if activeFilter === 'All' || activeFilter === p.cat}
				<div class="port-full-item">
					<div class="port-full-img">
						<div class="port-full-badge">{p.cat}</div>
						<div class="port-item-placeholder">
							<div class="pip-code">{p.num}</div>
							<div class="pip-label">{@html p.label}</div>
						</div>
						<div class="port-full-overlay">
							<div class="port-full-cat">{p.cat}</div>
							<div class="port-full-name">{@html p.name}</div>
							<div class="port-full-loc">{p.loc}</div>
						</div>
					</div>
				</div>
			{/if}
		{/each}
	</div>
</div>

<style>
	.port-full-section {
		background: var(--dark);
		padding: 80px 64px 120px;
	}
	.port-filter {
		display: flex;
		gap: 32px;
		margin-top: 44px;
		margin-bottom: 44px;
		flex-wrap: wrap;
	}
	.f-btn {
		font-size: 10px;
		letter-spacing: 3px;
		text-transform: uppercase;
		color: rgba(255, 255, 255, 0.3);
		background: none;
		border: none;
		cursor: none;
		padding: 6px 0;
		transition: color 0.3s;
		position: relative;
	}
	.f-btn.active,
	.f-btn:hover { color: rgba(255, 255, 255, 0.8); }
	.f-btn.active::after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 1px;
		background: var(--gold);
	}
	.port-full-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 10px;
	}
	.port-full-item {
		position: relative;
		overflow: hidden;
		cursor: none;
	}
	.port-full-img {
		width: 100%;
		aspect-ratio: 4/3;
		position: relative;
		overflow: hidden;
		background: var(--dark-card);
	}
	.port-item-placeholder {
		position: absolute;
		inset: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: linear-gradient(135deg, #2a2527 0%, #222 100%);
	}
	.pip-code {
		font-family: var(--font-heading);
		font-size: 56px;
		font-weight: 300;
		color: rgba(255, 255, 255, 0.06);
		line-height: 1;
	}
	.pip-label {
		font-size: 8px;
		letter-spacing: 4px;
		text-transform: uppercase;
		color: rgba(255, 255, 255, 0.18);
		margin-top: 10px;
	}
	.port-full-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(to top, rgba(12, 12, 12, 0.9) 0%, transparent 55%);
		opacity: 0;
		transition: opacity 0.4s ease;
		display: flex;
		align-items: flex-end;
		padding: 28px;
	}
	.port-full-item:hover .port-full-overlay { opacity: 1; }
	.port-full-overlay > div {
		display: flex;
		flex-direction: column;
	}
	.port-full-cat {
		font-size: 9px;
		letter-spacing: 3px;
		text-transform: uppercase;
		color: var(--gold);
		margin-bottom: 4px;
		opacity: 0.7;
	}
	.port-full-name {
		font-family: var(--font-heading);
		font-size: 19px;
		font-weight: 700;
		letter-spacing: -0.03em;
		color: white;
	}
	.port-full-loc {
		font-size: 11px;
		color: rgba(255, 255, 255, 0.35);
		margin-top: 4px;
	}
	.port-full-badge {
		position: absolute;
		top: 14px;
		left: 14px;
		background: var(--gold);
		font-size: 8px;
		letter-spacing: 2px;
		text-transform: uppercase;
		color: var(--black);
		padding: 4px 12px;
		opacity: 0;
		transition: opacity 0.3s;
		font-weight: 500;
		z-index: 2;
	}
	.port-full-item:hover .port-full-badge { opacity: 1; }
	@media (max-width: 1024px) {
		.port-full-section { padding: 64px 32px 80px; }
		.port-full-grid { grid-template-columns: 1fr 1fr; }
	}
	@media (max-width: 640px) {
		.port-full-grid { grid-template-columns: 1fr; }
	}
</style>
