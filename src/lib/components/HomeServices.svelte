<script lang="ts">
	import { slideIn } from '$lib/animations/anims';
    import { ArrowUp } from "@lucide/svelte";

	const services = [
		{
			num: '01',
			name: 'Office Spaces',
			img: '/images/home/Corporate & Office Design.webp',
			alt: ' ',
			desc: 'Workplaces that inspire performance, reinforce brand identity, and prioritise employee wellbeing.',
			items: ['Open plan & private offices', 'Conference & meeting rooms', 'Lounge & wellness zones', 'Brand-aligned interiors'],
		},
		{
			num: '02',
			name: 'Commercial Properties',
			img: '/images/home/Residential Design.webp',
			alt: 'Luxury residential interior',
			desc: 'Upscale residential developments crafted for lasting value, from boutique apartments to sprawling estates and luxury villas.',
			items: ['Apartment complexes & condominiums', 'Gated estates & villa communities', 'Mixed-use residential developments', 'Space planning & furnishing'],
		},
		{
			num: '03',
			name: 'Diplomatic Spaces',
			img: '/images/home/Diplomatic Spaces.webp',
			alt: 'Diplomatic mission interior',
			desc: 'Embassies, missions, and high commissions designed with decorum spaces that project authority and make every visitor feel the weight of place.',
			items: ['Chanceries & public halls', 'Conference & briefing rooms', 'Official residences'],
		},
	];

	let grid: HTMLElement;

	$effect(() => { slideIn(grid); });
</script>

<section id="services">
	<div class="services-intro">
		<div>
			<div class="s-label">What We Do</div>
			<h2 class="s-title light">
				Design Services<br /><span class="h-blue">Tailored</span> to You
			</h2>
		</div>
		<p class="s-body light" style="max-width:340px;">
			From initial concept to final handover, end-to-end design solutions for every space and
			budget.
		</p>
	</div>
	<div class="services-grid" bind:this={grid}>
		{#each services as svc}
			<div class="svc-img-card slide-in">
				<img src={svc.img} alt={svc.alt} class="svc-img-placeholder" />
				<div class="svc-img-footer">
					<div>
						<div class="svc-img-num">{svc.num}</div>
						<div class="svc-img-name">{svc.name}</div>
					</div>
					<div class="svc-img-arrow">
                        <ArrowUp size={16} />
                    </div>
				</div>
				<div class="svc-img-overlay">
					<div class="svc-hover-num">{svc.num}</div>
					<div class="svc-hover-name">{svc.name}</div>
					<p class="svc-hover-desc">{svc.desc}</p>
					<ul class="svc-hover-items">
						{#each svc.items as item}
							<li>{item}</li>
						{/each}
					</ul>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	#services {
		background: var(--dark);
		padding: var(--space-30) var(--padding-global);
	}

	.services-intro {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: var(--space-16);
		flex-wrap: wrap;
		gap: var(--space-6);
	}

	.services-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-4);

		@media (max-width: 1024px) {
			grid-template-columns: 1fr;
		}
	}

	.svc-img-card {
		position: relative;
		overflow: hidden;
		aspect-ratio: 3/4;
		background: var(--dark-mid);
		border-radius: var(--space-8);

		&:hover .svc-img-placeholder { transform: scale(1.05); }
		&:hover .svc-img-footer { opacity: 0; }
		&:hover .svc-img-overlay {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.svc-img-placeholder {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.6s ease;
	}

	.svc-img-footer {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		padding: var(--space-8) var(--space-7) var(--space-7);
		background: linear-gradient(to top, rgba(34, 30, 31, 0.95) 0%, transparent 100%);
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		z-index: 2;
		transition: opacity 0.35s ease;
	}

	.svc-img-name {
		font-family: var(--font-heading);
		font-size: var(--text-lg);
		color: var(--white);
		font-weight: 700;
		letter-spacing: -0.03em;
		line-height: 1.2;
	}

	.svc-img-num {
		font-size: var(--text-sm);
		letter-spacing: 3px;
		text-transform: uppercase;
		color: var(--accent);
		margin-bottom: 8px;
		opacity: 0.8;
	}

	.svc-img-arrow {
		width: 36px;
		height: 36px;
		flex-shrink: 0;
		border: 1px solid rgba(255, 255, 255, 0.2);
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		font-size: 13px;
		transition: all 0.3s;
		margin-bottom: 2px;
	}

	.svc-img-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(to top, rgba(12, 12, 12, 0.9) 0%, rgba(12, 12, 12, 0.8) 45%, transparent 100%);
		padding: 36px 28px;
		opacity: 0;
		transform: translateY(16px);
		transition:
			opacity 0.4s ease,
			transform 0.4s ease;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		z-index: 3;
	}

	.svc-hover-num {
		font-size: var(--text-sm);
		letter-spacing: 3px;
		text-transform: uppercase;
		color: var(--accent);
		margin-bottom: var(--space-2);
		opacity: 0.8;
	}

	.svc-hover-name {
		font-family: var(--font-heading);
		font-size: var(--text-xl);
		color: var(--white);
		font-weight: 700;
		letter-spacing: -0.03em;
		margin-bottom: 14px;
	}

	.svc-hover-desc {
		font-size: var(--text-body);
		line-height: 1.8;
		color: var(--white);
		opacity: 0.8;
		margin-bottom: 20px;
	}

	.svc-hover-items {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 8px;

		li {
			font-size: var(--text-md);
			color: var(--white);
			opacity: 0.6;
			display: flex;
			align-items: center;
			gap: var(--space-2);
			letter-spacing: 0.2px;

			&::before {
				content: "";
				width: 10px;
				height: 1px;
				flex-shrink: 0;
				background: var(--accent);
				opacity: 0.6;
			}
		}
	}
</style>
