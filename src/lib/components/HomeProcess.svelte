<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { getLenisInstance } from '$lib/lenis';

	const steps = [
		{
			num: '01',
			title: 'Discovery Phase',
			desc: "Define the client's requirements, budget, and project scope, including site measurements and assessment."
		},
		{
			num: '02',
			title: 'Concept Development',
			desc: 'Create mood boards and concept designs to establish the overall look, feel, and direction of the space.'
		},
		{
			num: '03',
			title: 'Design Development',
			desc: 'Produce detailed 3D renderings, architectural drawings, and Bills of Quantities (BOQs) for project execution.'
		},
		{
			num: '04',
			title: 'Procurement',
			desc: 'Source and procure all required furniture, materials, and finishes in line with the approved design.'
		},
		{
			num: '05',
			title: 'Execution & Supervision',
			desc: 'Manage and supervise on-site works to ensure construction aligns with approved drawings and 3D visualizations.'
		},
		{
			num: '06',
			title: 'Installation & Handover',
			desc: 'Install furniture and décor, address any final defects, and formally hand over the completed project.'
		}
	];

	let stepEls = $state<(HTMLElement | undefined)[]>(new Array(6).fill(undefined));
	let triggers: ScrollTrigger[] = [];

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		stepEls.forEach((el) => {
			if (!el) return;
			gsap.set(el, { opacity: 0, y: 24 });
			const st = gsap.to(el, {
				opacity: 1,
				y: 0,
				duration: 0.65,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: el,
					start: 'top 84%',
					toggleActions: 'play none none reverse'
				}
			});
			triggers.push(st.scrollTrigger as ScrollTrigger);
		});

		const lenis = getLenisInstance();
		if (lenis) lenis.on('scroll', ScrollTrigger.update);
	});

	onDestroy(() => {
		const lenis = getLenisInstance();
		if (lenis) lenis.off('scroll', ScrollTrigger.update);
		triggers.forEach((t) => t?.kill());
		triggers = [];
	});
</script>

<section id="process">
	<div class="s-label">How We Work</div>
	<h2 class="s-title">Our <span class="h-mag">Process</span></h2>

	<div class="process-track">
		{#each steps as step, idx}
			<div class="p-step" bind:this={stepEls[idx]}>
				<div class="p-ghost" aria-hidden="true">{step.num}</div>
				<span class="p-num">{step.num}</span>
				<h3 class="p-title">{step.title}</h3>
				<p class="p-desc">{step.desc}</p>
			</div>
		{/each}
	</div>
</section>

<style>
	#process {
		background: var(--off-white);
		padding: 7.5rem 5rem;
	}

	.process-track {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-32);
		margin-top: 4.5rem;
	}

	.p-step {
		position: relative;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		transition:
			border-color 0.3s ease,
			box-shadow 0.3s ease;


		&:hover .p-num {
			color: var(--accent);
		}

		&:hover .p-ghost {
			opacity: 0.08;
		}
	}

	.p-ghost {
		position: absolute;
		bottom: -1rem;
		right: -0.5rem;
		font-family: var(--font-heading);
		font-size: clamp(5rem, 6vw, 8rem);
		line-height: 1;
		font-weight: 700;
		letter-spacing: -0.06em;
		color: var(--text);
		opacity: 0.04;
		pointer-events: none;
		user-select: none;
		transition: opacity 0.3s ease;
	}

	.p-num {
		position: relative;
		z-index: 1;
		display: block;
		font-family: var(--font-heading);
		font-size: var(--text-sm);
		font-weight: 700;
		letter-spacing: var(--tracking-xs);
		color: var(--black-60);
		margin-bottom: 1.5rem;
		transition: color 0.3s ease;
	}

	.p-title {
		position: relative;
		z-index: 1;
		font-family: var(--font-heading);
		font-size: var(--text-xl);
		font-weight: 700;
		letter-spacing: var(--tracking-tight);
		color: var(--text);
		margin-bottom: 0.875rem;
		line-height: 1.2;
	}

	.p-desc {
		position: relative;
		z-index: 1;
		font-size: var(--text-md);
		line-height: 1.8;
		color: var(--black-60);
	}

	/* ── Tablet ── */
	@media (max-width: 1024px) {
		#process {
			padding: 5rem 2.5rem;
		}

		.process-track {
			grid-template-columns: repeat(2, 1fr);
		}

		.p-step {
			padding: 2rem;
		}
	}

	/* ── Mobile ── */
	@media (max-width: 640px) {
		#process {
			padding: 4rem 1.5rem;
		}

		.process-track {
			grid-template-columns: 1fr;
		}

		.p-step {
			padding: 1.75rem;
		}
	}
</style>


