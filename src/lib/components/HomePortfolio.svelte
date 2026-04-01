<script lang="ts">
	import { projects } from '$lib/projects';
    import { slideIn } from "$lib/animations/anims";

	const featuredSlugs = [
		'wilken-telecom-offices',
		'padre-pio-insurance',
	];
	const featured = featuredSlugs.map((slug) => projects.find((p) => p.slug === slug)!);

	const filters = ['All', 'corporate', 'residential', 'commercial'];
	let activeFilter = $state('All');
    let portfolioGrid: HTMLElement;

    $effect(() => {
        slideIn(portfolioGrid, { top: 50, start: 'top 90%', end: 'top 60%' });
    });
</script>

<section id="portfolio">
	<div class="s-label">Our Work</div>
	<h2 class="s-title light">Featured <span class="h-blue">Projects</span></h2>
	<div class="port-filter">
		{#each filters as f}
			<button class="f-btn" class:active={activeFilter === f} onclick={() => (activeFilter = f)}>
				{f === 'All' ? 'All' : f[0].toUpperCase() + f.slice(1)}
			</button>
		{/each}
	</div>
	<div class="port-grid" bind:this={portfolioGrid}>
		{#each featured as item, i}
			{#if activeFilter === 'All' || activeFilter === item.tag}
				<a href="/portfolio/{item.slug}" class="port-item slide-in">
					<div class="port-img">
						<div class="port-inner" style="background-image:url({item.thumbnail});"></div>
					</div>
					<div class="port-badge">{item.tag}</div>
					<div class="port-overlay">
						<div>
							<!-- <div class="port-cat">{item.tag}</div> -->
							<div class="port-name">{item.title}</div>
						</div>
					</div>
				</a>
			{/if}
		{/each}
	</div>
	<div class="port-cta">
		<a href="/contact" class="btn outline" style="color:rgba(255,255,255,0.7)">Discuss Your Project →</a>
	</div>
</section>

<style>
	#portfolio {
		background: var(--dark);
		padding: 7.5rem 4rem;

		@media (max-width: 1024px) { padding: 5rem 2rem; }
	}

	.port-filter {
		display: flex;
		gap: 2rem;
		margin-top: 2.75rem;
		margin-bottom: 2.75rem;
		flex-wrap: wrap;
	}

	.f-btn {
		font-size: 0.625rem;
		letter-spacing: 0.1875rem;
		text-transform: uppercase;
		color: rgba(255, 255, 255, 0.3);
		background: none;
		border: none;
		padding: 0.375rem 0;
		transition: color 0.3s;
		position: relative;

		&.active,
		&:hover {
			color: rgba(255, 255, 255, 0.8);
		}

		&.active::after {
			content: "";
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			height: 1px;
			background: var(--accent);
		}
	}

	.port-grid {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: 28rem 20rem;
		grid-template-areas:
			"p1 p1 p1 p1 p1 p1 p1 p2 p2 p2 p2 p2"
			"p3 p3 p3 p3 p4 p4 p4 p4 p5 p5 p5 p5";
		gap: var(--space-4);

		& > :nth-child(1) { grid-area: p1; }
		& > :nth-child(2) { grid-area: p2; }
		& > :nth-child(3) { grid-area: p3; }
		& > :nth-child(4) { grid-area: p4; }
		& > :nth-child(5) { grid-area: p5; }

		@media (max-width: 1024px) {
			grid-template-columns: 1fr 1fr;
			grid-template-rows: repeat(3, 18rem);
			grid-template-areas:
				"p1 p2"
				"p3 p4"
				"p5 p5";
		}

		@media (max-width: 640px) {
			grid-template-columns: 1fr;
			grid-template-rows: repeat(5, 16rem);
			grid-template-areas: "p1" "p2" "p3" "p4" "p5";
		}
	}

	.port-item {
		position: relative;
		overflow: hidden;
		display: block;
		text-decoration: none;
		border-radius: var(--space-8);

		&:hover .port-inner { transform: scale(1.04); }
		&:hover .port-overlay { opacity: 1; }
		&:hover .port-badge { opacity: 1; }
	}

	.port-img {
		width: 100%;
		height: 100%;
		position: relative;
		overflow: hidden;
	}

	.port-inner {
		position: absolute;
		inset: 0;
		transition: transform 0.6s ease;
		background-size: cover;
		background-position: center;
	}

	.port-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(to top, rgba(12, 12, 12, 0.88) 0%, transparent 55%);
		opacity: 0;
		transition: opacity 0.4s ease;
		display: flex;
		align-items: flex-end;
		padding: 1.5rem;
	}

	.port-name {
		font-family: var(--font-heading);
		font-size: 1.0625rem;
		font-weight: 700;
		letter-spacing: -0.03em;
		color: white;
	}

	.port-badge {
		position: absolute;
		top: 0.875rem;
		left: 0.875rem;
		background: var(--accent);
		font-size: 0.5rem;
		letter-spacing: 0.125rem;
		text-transform: uppercase;
		color: var(--black);
		padding: 0.25rem 0.75rem;
		opacity: 0;
		transition: opacity 0.3s;
		font-weight: 500;
        border-radius: var(--space-8);
	}

	.port-cta {
		text-align: center;
		margin-top: 3.5rem;
	}
</style>
