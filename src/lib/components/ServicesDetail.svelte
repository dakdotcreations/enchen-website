<script lang="ts">
	import { onDestroy } from 'svelte';
	import { loadGsap } from '$lib/utils/useGsap';
	import { getLenisInstance } from '$lib/lenis';

	const services = [
		{
			num: '01',
			name: 'Design Brief & Concept Development',
			tag: 'Brief · Concept · Direction',
			image: '/images/home/service-brief.webp',
			descs: [
				'Every project begins with listening. We conduct structured client consultations to define the brief capturing spatial requirements, lifestyle or operational needs, aesthetic preferences, and budget parameters. From that foundation we develop initial concept schemes: mood boards, reference imagery, and a clear design direction for client sign-off before any design work advances.',
			],
			features: [
				'Client consultation & brief writing',
				'Site visit & existing conditions review',
				'Mood board & reference curation',
				'Concept scheme development',
				'Design direction presentation',
				'Brief sign-off & scope confirmation',
			],
		},
		{
			num: '02',
			name: 'Space Planning & Technical Drawing',
			tag: 'Layouts · Drawings · Documentation',
			image: '/images/home/service-space-planning.webp',
			descs: [
				'With a confirmed brief, we develop the spatial plan allocating zones, resolving circulation, and testing furniture arrangements against real dimensions. This is where design decisions become buildable: we produce measured floor plans, elevations, sections, and joinery detail drawings that contractors and trades can work directly from.',
				'Every drawing package is reviewed with the client before issue, ensuring what is built matches precisely what was designed.',
			],
			features: [
				'Measured floor plan & zoning layout',
				'Furniture placement planning',
				'Elevation & section drawing',
				'Joinery & detail design',
				'Drawing package coordination',
				'Contractor-ready documentation',
			],
		},
		{
			num: '03',
			name: 'Material, Furniture & Lighting Specification',
			tag: 'FF&E · Finishes · Sourcing',
			image: '/images/home/service-ffe.webp',
			descs: [
				'Selecting the right materials, furniture, and lighting is as much a technical exercise as an aesthetic one. We build comprehensive FF&E schedules specifying every finish, fixture, and furniture piece with supplier references, lead times, and budget figures so procurement is structured and nothing is left to guesswork.',
				'We arrange physical material samples for client review, coordinate supplier quotations, and manage the approval process so that every selection is confirmed before orders are placed.',
			],
			features: [
				'FF&E schedule preparation',
				'Material & finish selection',
				'Physical sample coordination',
				'Lighting fixture specification',
				'Supplier sourcing & quotation management',
				'Bill of Quantities preparation',
			],
		},
		{
			num: '04',
			name: '3D Visualisation & Rendering',
			tag: 'Visualisation · Walkthroughs',
			image: '/images/home/service-3d.webp',
			descs: [
				'We build accurate 3D models from your confirmed drawings and specifications mapping real materials, simulating natural and artificial lighting, and composing scenes that reflect actual design decisions rather than generic mood imagery.',
				'Client review rounds are built into the process: we iterate on camera angles, adjust finishes, and refine spatial compositions until the render is a faithful representation of what will be built. The approved visuals then become a reference document for contractors throughout the build.',
			],
			features: [
				'3D modelling from confirmed drawings',
				'Material & texture mapping',
				'Lighting condition simulation',
				'Client review & revision rounds',
				'Scene & walkthrough production',
				'Contractor reference image package',
			],
		},
		{
			num: '05',
			name: 'Project Management',
			tag: 'Coordination · Supervision',
			image: '/images/home/service-project-management.webp',
			descs: [
				'Before works begin, we prepare tender packages, evaluate contractor submissions, and build a detailed construction programme with phased milestones. We chair pre-start meetings, issue design information to trades, and set the quality benchmarks that all works are measured against.',
				'On-site, we conduct regular inspections, manage variations and change orders, and keep a live record of budget spend and programme status. At handover, we compile a defects list, confirm snagging resolution, and sign off the completed space against the original design intent.',
			],
			features: [
				'Tender preparation & contractor selection',
				'Construction programme & milestone scheduling',
				'Pre-start coordination & information issue',
				'Regular site inspections & progress reporting',
				'Variation & change order management',
				'Defects inspection & handover sign-off',
			],
		},
		{
			num: '06',
			name: 'Renovation & Fit-Outs',
			tag: 'Refurbishment · Upgrades',
			image: '/images/home/service-fitouts.webp',
			descs: [
				'We begin with a thorough survey of existing conditions identifying what is structurally sound, what must be removed, and what can be enhanced. From that assessment we define the full scope of works, develop design solutions within the real constraints of the building, and produce a phased plan that keeps disruption to a minimum.',
			],
			features: [
				'Full & partial interior renovations',
				'Office refurbishment',
				'Residential upgrade projects',
				'Commercial fit-outs',
				'Structural interventions',
				'Phased renovation planning',
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

