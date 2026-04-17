<script lang="ts">
	import { Lightbulb, Leaf, Crosshair, HandHeart } from '@lucide/svelte';
	import { onDestroy } from 'svelte';
	import { loadGsap } from '$lib/utils/useGsap';
	import { getLenisInstance } from '$lib/lenis';
	import { slideIn } from '$lib/animations/anims';

	let valuesGrid: HTMLElement;
	let _ScrollTrigger: any = null;

	$effect(() => {
		loadGsap().then(({ gsap, ScrollTrigger }) => {
			_ScrollTrigger = ScrollTrigger;

			const lenis = getLenisInstance();
			if (lenis) lenis.on('scroll', ScrollTrigger.update);

			slideIn(valuesGrid);
		});
	});

	onDestroy(() => {
		const lenis = getLenisInstance();
		if (lenis && _ScrollTrigger) lenis.off('scroll', _ScrollTrigger.update);
	});
</script>

<section id="about">
	<div class="s-label">About Enchen</div>
	<div class="about-grid">
		<div bind:this={valuesGrid}>
			<h2 class="s-title">
				Bold <span class="h-blue">Ideas</span><br />Bold Creations
			</h2>
			<p class="s-body slide-in">
				Enchen Creative Hub is a design and build architectural interior design turnkey firm delivering bold, functional, and inspiring environments. We work with corporate, and commercial clients, providing tailored design solutions that convert ideas into remarkable real spaces.
			</p>
			<p class="s-body slide-in" style="margin-top:18px;">
				Our vision is to become the leading turnkey architectural interior design company recognized
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

</style>
