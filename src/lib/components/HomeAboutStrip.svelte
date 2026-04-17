<script lang="ts">
	import { onDestroy } from 'svelte';
	import { loadGsap } from '$lib/utils/useGsap';
	import { getLenisInstance } from '$lib/lenis';

	let st: any = null;
	let _ScrollTrigger: any = null;

	$effect(() => {
		loadGsap().then(({ gsap, ScrollTrigger }) => {
			_ScrollTrigger = ScrollTrigger;

			const lenis = getLenisInstance();
			if (lenis) lenis.on('scroll', ScrollTrigger.update);

			st = gsap.fromTo(
				'.about-wide-img',
				{ yPercent: -12 },
				{
					yPercent: 12,
					ease: 'none',
					scrollTrigger: {
						trigger: '.about-wide-strip',
						start: 'top bottom',
						end: 'bottom top',
						scrub: true,
					},
				}
			);
		});
	});

	onDestroy(() => {
		const lenis = getLenisInstance();
		if (lenis && _ScrollTrigger) lenis.off('scroll', _ScrollTrigger.update);
		st?.kill();
	});
</script>

<div class="about-wide-strip">
	<div class="about-wide-inner">
		<img src="/images/home/office-lobby-desk.webp" alt="Enchen interior design project" class="about-wide-img" />
		<div class="about-wide-label">ENCHEN</div>
		<div class="about-wide-overlay"></div>
	</div>
	<div class="about-wide-caption">
		Precision Design · <em>Commercial Excellence</em> · Kampala, Uganda
	</div>
</div>

<style>
	.about-wide-strip {
		width: 100%;
		height: 30rem;
		background: var(--dark);
		position: relative;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;

		&:hover .about-wide-inner {
			transform: scale(1.02);
		}

		.about-wide-inner {
			position: absolute;
			inset: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			transition: transform 0.6s ease;

			.about-wide-img {
				position: absolute;
				left: 0;
				width: 100%;
				height: 130%;
				top: -15%;
				object-fit: cover;
				object-position: center;
				will-change: transform;
			}

			.about-wide-label {
				font-family: var(--font-heading);
				font-size: clamp(var(--space-20), 12vw, 8.5rem);
				font-weight: 700;
				color: var(--white);
				z-index: 2;
				opacity: 0.8;
				letter-spacing: -0.06em;
				line-height: 1;
				user-select: none;
			}

			.about-wide-overlay {
				position: absolute;
				inset: 0;
				background: linear-gradient(
					to top right,
					rgba(34, 30, 31, 1) 0%,
					transparent 70%,
					rgba(34, 30, 31, 0.5) 100%
				);
			}
		}

		.about-wide-caption {
			position: absolute;
			bottom: var(--space-9);
			left: var(--space-16);
			z-index: 2;
			font-size: var(--text-xs);
			text-transform: uppercase;
			color: var(--white);
			opacity: 0.6;

			em {
				color: var(--accent);
				font-style: normal;
			}
		}
	}
</style>
