<div class="marquee-wrap">
	<div class="marquee-track">
		{#each [1, 2] as _}
			<span class="m-item">Residential Design</span><span class="m-item"
				><span class="m-dot">◆</span></span>
			<span class="m-item">Corporate Offices</span><span class="m-item"
				><span class="m-dot">◆</span></span>
			<span class="m-item">Luxury Villas</span><span class="m-item"
				><span class="m-dot">◆</span></span>
			<span class="m-item">Interior Fit-Out</span><span class="m-item"
				><span class="m-dot">◆</span></span>
			<span class="m-item">3D Visualization</span><span class="m-item"
				><span class="m-dot">◆</span></span>
			<span class="m-item">Smart Homes</span><span class="m-item"
				><span class="m-dot">◆</span></span>
			<span class="m-item">Sustainable Design</span><span class="m-item"
				><span class="m-dot">◆</span></span>
			<span class="m-item">Project Management</span><span class="m-item"
				><span class="m-dot">◆</span></span>
		{/each}
	</div>
</div>

<style>
	.marquee-wrap {
		background: #1a1618;
		border-top: 1px solid rgba(255, 255, 255, 0.04);
		border-bottom: 1px solid rgba(255, 255, 255, 0.04);
		padding: 1rem 0;
		overflow: hidden;
	}
	.marquee-track {
		display: flex;
		animation: marquee 32s linear infinite;
		white-space: nowrap;
	}
	.m-item {
		font-size: 0.75rem;
		letter-spacing: 4px;
		text-transform: uppercase;
		color: rgba(255, 255, 255, 0.22);
		padding: 0 52px;
		flex-shrink: 0;
	}
	.m-dot {
		color: var(--rose);
		opacity: 0.6;
	}
	@keyframes marquee {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
		}
	}
</style>
