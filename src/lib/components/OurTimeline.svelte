<script lang="ts">
	import { onDestroy } from 'svelte';
	import gsap from 'gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import { getLenisInstance } from '$lib/lenis';
	import { slideIn } from '$lib/animations/anims';

	let tlList: HTMLDivElement;
	let tlVisual: HTMLDivElement;
	let st: gsap.core.Tween | null = null;

	$effect(() => {
		gsap.registerPlugin(ScrollTrigger);
		const lenis = getLenisInstance();
		if (lenis) lenis.on('scroll', ScrollTrigger.update);

		slideIn(tlList);

		st = gsap.fromTo(
			tlVisual.querySelector('.tl-visual-img'),
			{ yPercent: -10 },
			{
				yPercent: 10,
				ease: 'none',
				scrollTrigger: {
					trigger: tlVisual,
					start: 'top bottom',
					end: 'bottom top',
					scrub: true,
				},
			}
		);
	});

	onDestroy(() => {
		const lenis = getLenisInstance();
		if (lenis) lenis.off('scroll', ScrollTrigger.update);
		st?.kill();
	});
	const items = [
		{
			num: '01',
			title: 'Banking Institution',
			desc: 'Designed a reception and banking hall concept that was adopted as a prototype for rollout across multiple branches.',
		},
		{
			num: '02',
			title: 'Consulate Office',
			desc: 'Successfully designed and executed a fully functional Consulate space, meeting both aesthetic and operational requirements.',
		},
		{
			num: '03',
			title: 'Insurance Company',
			desc: 'Delivered a complete interior design and fit-out for an empty shell, transforming it into a fully operational office environment.',
		},
		{
			num: '04',
			title: 'Telecommunications Company',
			desc: 'Designed and executed a full interior fit-out from shell, creating a modern and functional workspace aligned with brand standards.',
		},
	];
</script>

<div class="timeline-section">
	<div class="s-label">Key Projects</div>
	<h2 class="s-title">Work That <span class="h-blue">Defines</span><br />Our Standard</h2>
	<div class="tl-grid">
		<div class="tl-list" bind:this={tlList}>
			{#each items as item}
				<div class="tl-item slide-in">
					<div class="tl-num">{item.num}</div>
					<div class="tl-content">
						<div class="tl-title">{item.title}</div>
						<p class="tl-desc">{item.desc}</p>
					</div>
				</div>
			{/each}
		</div>
		<div>
			<div class="tl-visual" bind:this={tlVisual}>
				<img src="/images/home/milestones.webp" alt="Enchen key project" class="tl-visual-img" />
				<div class="tl-visual-bottom">
					<div class="tl-visual-text">ECH</div>
					<div class="tl-visual-badge">
						<div class="tl-visual-badge-text">Kampala · Uganda · Est. 2022</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.timeline-section {
		background: var(--white);
		padding: var(--space-30) var(--space-16);
	}
	.tl-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-20);
		align-items: start;
		margin-top: var(--space-18);
	}
	.tl-list {
		display: flex;
		flex-direction: column;
		gap: 0;
	}
	.tl-item {
		display: grid;
		grid-template-columns: var(--space-10) 1fr;
		gap: 0;
		padding: var(--space-8) 0;
		border-bottom: 1px solid var(--border);
		transition: background 0.3s;
		
	}
	.tl-item:first-child {
		border-top: 1px solid var(--border);
	}
	.tl-num {
		font-size: var(--text-sm);
		letter-spacing: 2px;
		color: var(--accent);
		opacity: 0.7;
		padding-top: 3px;
		font-weight: 500;
	}
	.tl-title {
		font-size: var(--text-body);
		font-weight: 500;
		color: var(--text);
		margin-bottom: var(--space-2);
		letter-spacing: 0.3px;
	}
	.tl-desc {
		font-size: var(--text-md);
		line-height: 1.8;
		color: var(--black-60);
	}
	.tl-visual {
		background: var(--dark);
		aspect-ratio: 3/3;
		position: relative;
		overflow: hidden;
	}
	.tl-visual-img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 120%;
		top: -10%;
		object-fit: cover;
		object-position: center;
		will-change: transform;
	}
	.tl-visual-bottom {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		padding: var(--space-14) var(--space-7) var(--space-7);
		background: linear-gradient(to top, rgba(34, 30, 31, 0.92) 0%, transparent 100%);
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
	}
	.tl-visual-text {
		font-family: var(--font-heading);
		font-size: 72px;
		font-weight: 700;
		color: var(--white);
		opacity: 0.12;
		line-height: 1;
		letter-spacing: -0.06em;
	}
	.tl-visual-badge {
		border-top: 1px solid rgba(196, 34, 128, 0.3);
		padding-top: var(--space-3);
	}
	.tl-visual-badge-text {
		font-size: var(--text-xs);
		letter-spacing: 3px;
		text-transform: uppercase;
		color: var(--white-40);
	}
	@media (max-width: 1024px) {
		.timeline-section {
			padding: var(--space-20) var(--space-8);
		}
		.tl-grid {
			grid-template-columns: 1fr;
			gap: var(--space-12);
		}
	}
</style>
