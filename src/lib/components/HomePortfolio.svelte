<script lang="ts">
	const filters = ['All', 'Corporate', 'Residential', 'Commercial'];
	const portfolioItems = [
		{ cat: 'Corporate', name: 'Executive Headquarters', label: 'OFFICE', cls: 'pi1', span: 7 },
		{ cat: 'Residential', name: 'Luxury Lakeside Villa', label: 'VILLA', cls: 'pi2', span: 5 },
		{ cat: 'Commercial', name: 'Premium Lounge', label: 'LOUNGE', cls: 'pi3', span: 4 },
		{ cat: 'Residential', name: 'Penthouse Suite', label: 'SUITE', cls: 'pi4', span: 4 },
		{ cat: 'Corporate', name: 'Boardroom Redesign', label: 'BOARD', cls: 'pi5', span: 4 }
	];

	let activeFilter = $state('All');
</script>

<section id="portfolio">
	<div class="s-label reveal">Our Work</div>
	<h2 class="s-title light reveal">Featured <span class="h-blue">Projects</span></h2>
	<div class="port-filter reveal">
		{#each filters as f}
			<button class="f-btn" class:active={activeFilter === f} onclick={() => (activeFilter = f)}>{f}</button>
		{/each}
	</div>
	<div class="port-grid reveal">
		{#each portfolioItems as item}
			{#if activeFilter === 'All' || activeFilter === item.cat}
				<div class="port-item" style="grid-column:span {item.span};">
					<div class="port-img"><div class="port-inner {item.cls}"><div class="pi-label">{item.label}</div></div></div>
					<div class="port-badge">{item.cat}</div>
					<div class="port-overlay"><div><div class="port-cat">{item.cat}</div><div class="port-name">{item.name}</div></div></div>
				</div>
			{/if}
		{/each}
	</div>
	<div class="port-cta reveal">
		<a href="/contact" class="btn-outline" style="color:rgba(255,255,255,0.7)">Discuss Your Project →</a>
	</div>
</section>

<style>
	#portfolio {
		background: var(--dark);
		padding: 120px 64px;
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
	.f-btn:hover {
		color: rgba(255, 255, 255, 0.8);
	}
	.f-btn.active::after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 1px;
		background: var(--accent);
	}
	.port-grid {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		gap: 10px;
	}
	.port-item {
		position: relative;
		overflow: hidden;
		cursor: none;
	}
	.port-img {
		width: 100%;
		aspect-ratio: 16/10;
		position: relative;
		overflow: hidden;
	}
	.port-inner {
		position: absolute;
		inset: 0;
		transition: transform 0.6s ease;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.port-item:hover .port-inner { transform: scale(1.04); }
	.pi1 { background: linear-gradient(150deg, #2c2729 0%, #1a1618 100%); }
	.pi2 { background: linear-gradient(150deg, #1c2232 0%, #0e1522 100%); }
	.pi3 { background: linear-gradient(150deg, #2a1c22 0%, #1a1218 100%); }
	.pi4 { background: linear-gradient(150deg, #1e2618 0%, #131a0f 100%); }
	.pi5 { background: linear-gradient(150deg, #28202c 0%, #1a1420 100%); }
	.pi-label {
		font-family: var(--font-heading);
		font-size: 38px;
		font-weight: 700;
		color: rgba(255, 255, 255, 0.05);
		letter-spacing: -0.05em;
	}
	.port-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(to top, rgba(12, 12, 12, 0.88) 0%, transparent 55%);
		opacity: 0;
		transition: opacity 0.4s ease;
		display: flex;
		align-items: flex-end;
		padding: 24px;
	}
	.port-item:hover .port-overlay { opacity: 1; }
	.port-cat {
		font-size: 9px;
		letter-spacing: 3px;
		text-transform: uppercase;
		color: var(--accent);
		margin-bottom: 5px;
		opacity: 0.75;
	}
	.port-name {
		font-family: var(--font-heading);
		font-size: 17px;
		font-weight: 700;
		letter-spacing: -0.03em;
		color: white;
	}
	.port-badge {
		position: absolute;
		top: 14px;
		left: 14px;
		background: var(--accent);
		font-size: 8px;
		letter-spacing: 2px;
		text-transform: uppercase;
		color: var(--black);
		padding: 4px 12px;
		opacity: 0;
		transition: opacity 0.3s;
		font-weight: 500;
	}
	.port-item:hover .port-badge { opacity: 1; }
	.port-cta {
		text-align: center;
		margin-top: 56px;
	}
	@media (max-width: 1024px) {
		#portfolio { padding: 80px 32px; }
		.port-grid { grid-template-columns: 1fr 1fr; }
		.port-item { grid-column: span 1 !important; }
	}
	@media (max-width: 640px) {
		.port-grid { grid-template-columns: 1fr; }
	}
</style>
