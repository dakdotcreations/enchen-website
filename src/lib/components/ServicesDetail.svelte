<script lang="ts">
	import { onDestroy } from 'svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { getLenisInstance } from '$lib/lenis';

	const services = [
		{
			num: '01',
			name: 'Corporate & Office Design',
			tag: 'Commercial · B2B',
			image: '/images/home/service-corporate.webp',
			descs: [
				'Your office is a direct reflection of your brand. We design corporate environments — headquarters, boardrooms, executive suites, and open-plan workspaces — that communicate authority, foster productivity, and make a lasting impression on every visitor.',
				"Our corporate design process begins with a deep understanding of your organisation's culture, workflow, and brand identity. We then craft a spatial strategy that balances aesthetics with the functional demands of a modern workplace.",
			],
			features: [
				'Brand-aligned spatial design',
				'Open plan & private office configurations',
				'Executive suite fitouts',
				'Boardroom & conference room design',
				'Reception & lobby design',
				'FF&E specification & procurement',
			],
		},
		{
			num: '02',
			name: 'Residential Design',
			tag: 'Villas · Apartments · Penthouses',
			image: '/images/home/service-residential.webp',
			descs: [
				'Your residence is the most personal space you will ever inhabit. We work closely with clients to design villas, apartments, and penthouses that are as refined as they are liveable — spaces that reflect your personality, support your lifestyle, and feel distinctly yours.',
				'From full architectural collaboration on new builds to complete interior redesigns of existing properties, our residential service covers every detail: spatial planning, material curation, bespoke furniture, lighting design, and final styling.',
			],
			features: [
				'Luxury villa & penthouse design',
				'Apartment & condominium interiors',
				'New build architectural collaboration',
				'Bespoke furniture & joinery',
				'Lighting design & specification',
				'Material & finish curation',
			],
		},
		{
			num: '03',
			name: 'Commercial Spaces',
			tag: 'Retail · Hospitality · Leisure',
			image: '/images/home/service-commercial.webp',
			descs: [
				'Commercial spaces must work harder than any other type of environment. They need to attract customers, communicate brand values, create the right atmosphere, and support high volumes of activity — all simultaneously.',
				'Our commercial portfolio includes restaurants, bars, hotels, lounges, retail showrooms, and mixed-use developments. We understand the commercial imperatives that drive these projects and design spaces that deliver on both aesthetics and business performance.',
			],
			features: [
				'Restaurant & bar design',
				'Hotel lobbies & guest rooms',
				'Retail & showroom fitouts',
				'Lounge & VIP space design',
				'Brand experience environments',
				'Mixed-use development interiors',
			],
		},
		{
			num: '04',
			name: '3D Visualisation & Rendering',
			tag: 'Visualisation · Walkthroughs',
			image: '/images/home/service-3d.webp',
			descs: [
				'Before a single wall is plastered or a single tile is laid, you should be able to see exactly what your finished space will look like. Our 3D visualisation service produces photorealistic renders and immersive virtual walkthroughs that bring designs to life at concept stage.',
				'Reviewing a photorealistic render allows clients to confirm material choices, adjust spatial layouts, and refine lighting schemes before any physical work begins.',
			],
			features: [
				'Photorealistic interior renders',
				'Architectural exterior visualisation',
				'Virtual 360° walkthroughs',
				'Material & finish mood boards',
				'Spatial planning diagrams',
				'Presentation decks for approvals',
			],
		},
		{
			num: '05',
			name: 'Project Management',
			tag: 'Coordination · Supervision',
			image: '/images/home/service-project-management.webp',
			descs: [
				'Design is only as good as its execution. Our project management service ensures your design is delivered exactly as intended — to the right quality, within budget, and on schedule. We act as your representative on-site, coordinating contractors, suppliers, and specialist trades throughout the build.',
			],
			features: [
				'Contractor procurement & vetting',
				'On-site quality inspections',
				'Budget monitoring & cost reporting',
				'Programme management',
				'Supplier & materials coordination',
				'Handover & snagging management',
			],
		},
		{
			num: '06',
			name: 'Renovation & Fit-Outs',
			tag: 'Refurbishment · Upgrades',
			image: '/images/home/service-fitouts.webp',
			descs: [
				'Transforming an existing space often demands more skill than designing from scratch. Our renovation and fit-out service is designed for clients who want to dramatically upgrade their environment without starting over — maximising the value of existing structures while introducing new design thinking.',
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
	let triggers: ScrollTrigger[] = [];
	let currentIndex = 0;

	function transitionTo(next: number) {
		if (next === currentIndex) return;

		gsap.to(imageSlides[currentIndex], {
			opacity: 0,
			scale: 1.04,
			duration: 0.75,
			ease: 'power2.inOut',
		});
		gsap.fromTo(
			imageSlides[next],
			{ opacity: 0, scale: 0.97 },
			{ opacity: 1, scale: 1, duration: 0.75, ease: 'power2.inOut' }
		);
		currentIndex = next;
	}

	$effect(() => {
		gsap.registerPlugin(ScrollTrigger);
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
				triggers.push(zoom.scrollTrigger!);
			}
		});
	});

	onDestroy(() => {
		const lenis = getLenisInstance();
		if (lenis) lenis.off('scroll', ScrollTrigger.update);
		triggers.forEach((t) => t.kill());
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

