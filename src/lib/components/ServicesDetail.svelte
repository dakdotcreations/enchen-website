<script lang="ts">
	import { onDestroy } from 'svelte';
	import { loadGsap } from '$lib/utils/useGsap';
	import { getLenisInstance } from '$lib/lenis';

	const services = [
		{
			num: '01',
			name: 'Interior Design and Execution',
			tag: 'Concept · Planning · Delivery',
			image: '/images/home/service-interior.webp',
			descs: [
				'We take interior design from the initial concept through to final delivery, marrying aesthetic intent with functional detail. Every scheme is developed with careful spatial planning, material selection, and construction-ready documentation to ensure the design is realised exactly as envisioned.',
			],
			features: [
				'Space planning & layout development',
				'Design concept and mood curation',
				'Material and finish specification',
				'Furniture and lighting selection',
				'Construction-level documentation',
				'On-site execution support',
			],
		},
		{
			num: '02',
			name: 'Project Management and Consultancy',
			tag: 'Coordination · Strategy · Delivery',
			image: '/images/home/service-project-management.webp',
			descs: [
				'Our project management and consultancy service provides structured oversight across every phase of the build. We coordinate consultants, contractors, budgets and schedules so the design intent stays intact and project delivery is efficient, transparent and dependable.',
			],
			features: [
				'Contractor and consultant coordination',
				'Procurement and tender management',
				'Programme scheduling and milestone tracking',
				'Quality review and site supervision',
				'Budget monitoring and cost control',
				'Client advisory and decision support',
			],
		},
		{
			num: '03',
			name: '3D Rendering and Animation',
			tag: 'Visualisation · Motion · Experience',
			image: '/images/home/service-3d.webp',
			descs: [
				'We create high-fidelity 3D visuals and animated walkthroughs that bring design concepts to life. This service helps clients understand space, lighting and materiality before work begins, while producing powerful presentation assets for stakeholders and contractors.',
			],
			features: [
				'Photorealistic 3D rendering',
				'Animated walkthroughs and sequences',
				'Material and lighting simulation',
				'Camera direction and scene styling',
				'Client review and revision rounds',
				'Presentation-ready visual assets',
			],
		},
		{
			num: '04',
			name: 'Company Branding',
			tag: 'Identity · Strategy · Visuals',
			image: '/images/home/service-branding.webp',
			descs: [
				'We develop strong company branding that aligns your visual identity with your market position and business goals. From brand strategy to assets, we craft cohesive systems that make your brand feel confident, memorable and consistent across every touchpoint.',
			],
			features: [
				'Brand strategy and positioning',
				'Visual identity and logo design',
				'Typography and colour systems',
				'Brand guidelines and asset libraries',
				'Marketing collateral and digital layouts',
				'Brand rollout and implementation support',
			],
		},
	];

	let sectionEl: HTMLElement;
	let imageSlides: HTMLElement[] = [];
	let triggers: any[] = [];
	let currentIndex = 0;
	let _gsap: any = null;
	let _ScrollTrigger: any = null;

	function transitionTo(next: number) {
		if (!_gsap || next === currentIndex) return;

		_gsap.to(imageSlides[currentIndex], {
			opacity: 0,
			scale: 1.04,
			duration: 0.75,
			ease: 'power2.inOut',
		});
		_gsap.fromTo(
			imageSlides[next],
			{ opacity: 0, scale: 0.97 },
			{ opacity: 1, scale: 1, duration: 0.75, ease: 'power2.inOut' }
		);
		currentIndex = next;
	}

	$effect(() => {
		loadGsap().then(({ gsap, ScrollTrigger }) => {
			_gsap = gsap;
			_ScrollTrigger = ScrollTrigger;

			const lenis = getLenisInstance();
			if (lenis) lenis.on('scroll', ScrollTrigger.update);

			gsap.set(imageSlides[0], { opacity: 1, scale: 1 });
			gsap.set(imageSlides.slice(1), { opacity: 0, scale: 0.97 });

			const panels = sectionEl.querySelectorAll<HTMLElement>('.svc-panel');
			panels.forEach((panel, i) => {
				// Transition trigger
				const st = ScrollTrigger.create({
					trigger: panel,
					start: 'top 55%',
					end: 'bottom 55%',
					onEnter: () => transitionTo(i),
					onEnterBack: () => transitionTo(i),
				});
				triggers.push(st);

				// Ken Burns scroll zoom on the image
				const img = imageSlides[i]?.querySelector('img');
				if (img) {
					const zoom = gsap.fromTo(
						img,
						{ scale: 1 },
						{
							scale: 1.1,
							ease: 'none',
							scrollTrigger: {
								trigger: panel,
								start: 'top bottom',
								end: 'bottom top',
								scrub: true,
							},
						}
					);
					triggers.push(zoom.scrollTrigger);
				}
			});
		});
	});

	onDestroy(() => {
		const lenis = getLenisInstance();
		if (lenis && _ScrollTrigger) lenis.off('scroll', _ScrollTrigger.update);
		triggers.forEach((t) => t?.kill());
		triggers = [];
	});
</script>

<section id="services-detail" bind:this={sectionEl}>
	<div class="svc-sticky-col">
		<div class="svc-img-stack">
			{#each services as svc, i}
				<div class="svc-img-slide" bind:this={imageSlides[i]}>
					<img src={svc.image} alt={svc.name} />
					<div class="svc-img-badge">
						<span class="svc-img-num">{svc.num}</span>
						<span class="svc-img-name">{svc.name}</span>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<div class="svc-scroll-col">
		{#each services as svc, i}
			<div class="svc-panel" data-index={i}>
				<div class="svc-panel-inner">
					<div class="svc-panel-num">{svc.num}</div>
					<div class="svc-panel-tag">{svc.tag}</div>
					<h3 class="svc-panel-name">{svc.name}</h3>
					{#each svc.descs as desc}
						<p class="svc-panel-desc">{desc}</p>
					{/each}
					<div class="svc-panel-features">
						{#each svc.features as feat}
							<div class="svc-panel-feat">{feat}</div>
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	#services-detail {
		display: grid;
		grid-template-columns: 1fr 1fr;
		background: var(--dark);
        padding: 0;

		@media (max-width: 1024px) {
			grid-template-columns: 1fr;
		}
	}

	.svc-sticky-col {
		position: sticky;
		top: 0;
		height: 100svh;
		overflow: hidden;
		align-self: start;

		@media (max-width: 1024px) {
			height: 40vh;
			z-index: 2;
		}
	}

	.svc-img-stack {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.svc-img-slide {
		position: absolute;
		inset: 0;
		will-change: opacity, transform;
		overflow: hidden;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center;
			display: block;
			will-change: transform;
		}
	}

	.svc-img-badge {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		padding: var(--space-14) var(--space-8) var(--space-8);
		background: linear-gradient(to top, rgba(22, 18, 20, 0.88) 0%, transparent 100%);
		display: flex;
		flex-direction: column;
		gap: var(--space-1);

		@media (max-width: 1024px) {
			padding: var(--space-10) var(--space-6) var(--space-5);
		}
	}

	.svc-img-num {
		font-size: var(--text-sm);
		letter-spacing: 3px;
		text-transform: uppercase;
		color: var(--accent);
		opacity: 0.8;
	}

	.svc-img-name {
		font-family: var(--font-heading);
		font-size: var(--text-2xl);
		font-weight: 700;
		letter-spacing: -0.04em;
		color: var(--white);
		line-height: 1.15;

		@media (max-width: 1024px) {
			font-size: var(--text-xl);
		}
	}

	.svc-scroll-col {
		display: flex;
		flex-direction: column;
	}

	.svc-panel {
		min-height: 100svh;
		display: flex;
		align-items: center;
		border-bottom: 1px solid rgba(255, 255, 255, 0.05);

		&:last-child {
			border-bottom: none;
		}

		@media (max-width: 1024px) {
			min-height: auto;
		}
	}

	.svc-panel-inner {
		padding: var(--padding-global);

		@media (max-width: 1024px) {
			padding: var(--space-10) var(--space-8) var(--space-12);
		}
	}

	.svc-panel-num {
		font-family: var(--font-heading);
		font-size: var(--text-5xl);
		font-weight: 700;
		letter-spacing: -0.07em;
		line-height: 1;
		color: rgba(255, 255, 255, 0.07);
		margin-bottom: var(--space-4);
	}

	.svc-panel-tag {
		font-size: var(--text-sm);
		font-weight: 700;
		letter-spacing: 3px;
		text-transform: uppercase;
		color: var(--accent);
		opacity: 0.7;
		margin-bottom: var(--space-4);
	}

	.svc-panel-name {
		font-family: var(--font-heading);
		font-size: clamp(var(--text-2xl), 3vw, var(--text-4xl));
		font-weight: 700;
		letter-spacing: -0.04em;
		color: var(--white);
		margin-bottom: var(--space-8);
		line-height: 1.1;
	}

	.svc-panel-desc {
		font-size: var(--text-body);
		line-height: 1.75;
		color: rgba(255, 255, 255, 0.55);
		margin-bottom: var(--space-4);

		&:last-of-type {
			margin-bottom: var(--space-10);
		}
	}

	.svc-panel-features {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-3) var(--space-8);

		@media (max-width: 640px) {
			grid-template-columns: 1fr;
		}
	}

	.svc-panel-feat {
		font-size: var(--text-md);
		color: rgba(255, 255, 255, 0.35);
		display: flex;
		align-items: center;
		gap: var(--space-3);

		&::before {
			content: '';
			width: var(--space-3);
			height: 2px;
			background: var(--accent);
			opacity: 0.4;
			flex-shrink: 0;
		}
	}
</style>

