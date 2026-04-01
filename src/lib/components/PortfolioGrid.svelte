<script lang="ts">
	import type { Project } from '$lib/types/project';

	let { items }: { items: Project[] } = $props();
	const filters = ['All', 'Corporate', 'Residential', 'Commercial'];
	let activeFilter = $state('All');

	function cap(s: string) {
		return s.charAt(0).toUpperCase() + s.slice(1);
	}
</script>

<div class="port-full-section">
	<div class="s-label">Selected Projects</div>
	<div class="port-filter">
		{#each filters as f}
			<button class="f-btn" class:active={activeFilter === f} onclick={() => (activeFilter = f)}>{f}</button>
		{/each}
	</div>
	<div class="port-full-grid">
		{#each items as p, i}
			{#if activeFilter === 'All' || activeFilter.toLowerCase() === p.tag}
				<a href="/portfolio/{p.slug}" class="port-full-item">
					<div class="port-full-img">
						<div class="port-full-badge">{cap(p.tag)}</div>
						{#if p.thumbnail}
							<img src={p.thumbnail} alt={p.title} class="port-thumb-img" />
						{:else}
							<div class="port-item-placeholder">
								<div class="pip-code">{String(i + 1).padStart(2, '0')}</div>
								<div class="pip-label">{p.title}</div>
							</div>
						{/if}
						<div class="port-full-overlay">
							<div>
                                <div class="port-full-name">{p.title}</div>
                                <div class="port-full-loc">{p.location}</div>
                            </div>
						</div>
					</div>
				</a>
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
		background: var(--accent);
	}
	.port-full-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 10px;
	}
	.port-full-item {
		position: relative;
		overflow: hidden;
		
		display: block;
		text-decoration: none;
		color: inherit;
	}
	.port-thumb-img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
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
		display: grid;
		align-items: end;
		padding: var(--space-6);
	}
	.port-full-item:hover .port-full-overlay { opacity: 1; }
	.port-full-overlay > div {
		display: flex;
		flex-direction: column;
	}
	.port-full-name {
		font-family: var(--font-heading);
		font-size: var(--text-xl);
		font-weight: 700;
		letter-spacing: -0.03em;
		color: white;
	}
	.port-full-loc {
		font-size: var(--text-sm);
		color: var(--white-40);
		margin-top: 4px;
	}
	.port-full-badge {
		position: absolute;
		top: var(--space-4);
		left: var(--space-4);
		background: var(--accent);
		font-size: var(--text-sm);
		letter-spacing: 2px;
		text-transform: uppercase;
		color: var(--black);
		padding: var(--space-1) var(--space-3);
		opacity: 0;
		transition: opacity 0.3s;
		font-weight: 700;
		z-index: 2;
	}
	.port-full-item:hover .port-full-badge { opacity: 1; }
	@media (max-width: 1024px) {
		.port-full-section { padding: var(--space-16) var(--space-8) var(--space-20); }
		.port-full-grid { grid-template-columns: 1fr 1fr; }
	}
	@media (max-width: 640px) {
		.port-full-grid { grid-template-columns: 1fr; }
	}
</style>
