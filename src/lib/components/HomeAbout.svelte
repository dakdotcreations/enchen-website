<script lang="ts">
	import { Lightbulb, Leaf, Crosshair, HandHeart } from '@lucide/svelte';
	import { onMount, onDestroy } from 'svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { getLenisInstance } from '$lib/lenis';
	import { slideIn } from '$lib/animations/anims';

	let valuesGrid: HTMLElement;
	let st: gsap.core.Tween | null = null;

	$effect(() => {
		gsap.registerPlugin(ScrollTrigger);

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

		slideIn(valuesGrid);
	});

	onDestroy(() => {
		const lenis = getLenisInstance();
		if (lenis) lenis.off('scroll', ScrollTrigger.update);
		st?.kill();
	});
</script>

<section id="about">
	<div class="s-label">About Enchen</div>
	<div class="about-grid">
		<div bind:this={valuesGrid}>
			<h2 class="s-title">
				Spaces That <span class="h-blue">Inspire</span><br />& Endure
			</h2>
			<p class="s-body slide-in">
				Enchen Creative Hub is an architectural and interior design firm delivering bold,
				functional, and inspiring environments. We work with residential, corporate, and
				commercial clients — providing tailored design solutions that convert ideas into
				remarkable real spaces.
			</p>
			<p class="s-body slide-in" style="margin-top:18px;">
				Our vision is to become the leading turnkey interior design company recognized
				globally for quality, innovation, and designs that elevate brands.
			</p>
		</div>
		<div class="about-values">
			<div class="v-card">
				<div class="v-icon"><Lightbulb size={16} /></div>
				<div class="v-name">Innovation</div>
				<div class="v-desc">Advanced technology and bold thinking in every brief.</div>
			</div>
			<div class="v-card">
				<div class="v-icon"><Leaf size={16} /></div>
				<div class="v-name">Sustainability</div>
				<div class="v-desc">Green, responsible design built for the future.</div>
			</div>
			<div class="v-card">
				<div class="v-icon"><Crosshair size={16} /></div>
				<div class="v-name">Precision</div>
				<div class="v-desc">Every detail considered, nothing left to chance.</div>
			</div>
			<div class="v-card">
				<div class="v-icon"><HandHeart size={16} /></div>
				<div class="v-name">Client First</div>
				<div class="v-desc">Your vision is the blueprint for everything we do.</div>
			</div>
		</div>
	</div>
</section>

<!-- About – wide image strip -->
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
	#about {
		background: var(--off-white);
		padding: var(--space-30) var(--padding-global);

		.about-grid {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: var(--space-22);
			align-items: center;
			margin-top: var(--space-20);
		}

		.about-values {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 1px;
			background: var(--border);
			margin-top: var(--space-11);

			.v-card {
				background: var(--off-white);
				padding: var(--space-6) var(--space-5);
				transition: background 0.3s;

				&:hover {
					background: var(--white);
				}

				.v-icon {
					width: var(--space-8);
					height: var(--space-8);
					margin-bottom: var(--space-3);
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: var(--text-md);
					border: 1px solid var(--border);
					background: var(--white);
                    border-radius: var(--space-8);
				}

				.v-name {
					font-size: var(--text-sm);
					letter-spacing: 2px;
					text-transform: uppercase;
					color: var(--text);
					margin-bottom: var(--space-2);
					font-weight: 500;
				}

				.v-desc {
					font-size: var(--text-md);
					line-height: 1.7;
					color: var(--black-60);
				}
			}
		}

		@media (max-width: 1024px) {
			.about-grid {
				grid-template-columns: 1fr;
				gap: var(--space-11);
			}
		}

		/* @media (max-width: 640px) {
			.about-values {
				grid-template-columns: 1fr;
			}
		} */
	}

	/* Wide strip */
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
                    /* transparent 50%, */
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
