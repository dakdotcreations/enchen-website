<script lang="ts">
	import { Lightbulb, Leaf, Crosshair, HandHeart } from '@lucide/svelte';
	import { onMount, onDestroy } from 'svelte';
	import { loadGsap } from '$lib/utils/useGsap';
	import { getLenisInstance } from '$lib/lenis';

	let mm: any;
	let lenisCleanup: (() => void) | null = null;

	onMount(async () => {
		const { gsap, ScrollTrigger } = await loadGsap();

		const lenis = getLenisInstance();
		if (lenis) {
			lenis.on('scroll', ScrollTrigger.update);
			lenisCleanup = () => lenis.off('scroll', ScrollTrigger.update);
		}

		mm = gsap.matchMedia();
		mm.add('(min-width: 1025px)', () => {
			ScrollTrigger.create({
				trigger: '.about-grid',
				start: 'top top',
				end: 'bottom bottom',
				pin: '.about-visual',
				pinSpacing: false,
                markers: false,
			});
		});
	});

	onDestroy(() => {
		lenisCleanup?.();
		mm?.revert();
	});
</script>

<div id="story" style="background: var(--off-white);">
	<div class="about-grid">
		<div class="about-visual">
			<img src="/images/home/space.webp" alt="Enchen interior design project" class="about-story-img" />
			<div class="about-badge">
				<div class="badge-top">Est.</div>
				<div class="badge-main">2025</div>
				<div class="badge-sub">Kampala, Uganda</div>
			</div>
		</div>
		<div class="about-content">
            <div class="about-text">
                <h2 class="s-title">
                    Designing Spaces<br />That <span class="h-blue">Endure</span>
                </h2>
                <div class="about-body">
                    <p>
                        Enchen Creative Hub is a full-service architectural interior design firm that takes projects from blank page to finished space for clients who refuse to settle for ordinary. We work across corporate and commercial environments, delivering bold, purposeful design that doesn't just meet a brief, it exceeds it.
                    </p>
                    <p>
                        We are a multidisciplinary team of architects, interior designers, and project managers united by a passion for craft. We believe the best design begins with listening and understanding how you work, how you want to be perceived, and what you aspire to create. Your vision is the only brief that matters.
                    </p>
                    <p>
                        From first concept to final handover, we own every stage. One team, one vision, zero compromise. Our approach is grounded in precision and guided by aesthetics, every material chosen deliberately, every detail considered, nothing left to chance. We don't hand you a design and walk away. We stay until the key turns.
                    </p>
                </div>
            </div>
			<div class="about-values">
				<div class="v-card">
                    <div class="v-icon"><HandHeart size={16} /></div>
                    <div class="v-name">Client First</div>
                    <div class="v-desc">We listen first, design second, because your vision is the only brief that matters.</div>
                </div>
                <div class="v-card">
                    <div class="v-icon"><Leaf size={16} /></div>
                    <div class="v-name">Sustainability</div>
                    <div class="v-desc">Designing with conscience, spaces that are as responsible as they are beautiful.</div>
                </div>
                <div class="v-card">
                    <div class="v-icon"><Crosshair size={16} /></div>
                    <div class="v-name">Precision</div>
                    <div class="v-desc">Every detail considered. Every decision intentional. Nothing left to chance.</div>
                </div>
                <div class="v-card">
                    <div class="v-icon"><Lightbulb size={16} /></div>
                    <div class="v-name">Innovation</div>
                    <div class="v-desc">Pushing boundaries of form, function, and possibility, one brief at a time.</div>
                </div>
			</div>
		</div>
	</div>
</div>

<style>
    #story {
        padding-top: 0;
    }
	.about-grid {
		display: grid;
		grid-template-columns: 1fr 1.5fr;
		gap: 0;
		align-items: start;

        & .about-content {
            padding: var(--padding-global);
        }

		& .about-body {
			display: grid;
			gap: var(--space-6);

            & p {
                font-size: var(--text-body);
                color: var(--black-60);
                text-align: justify;
            }
		}
	}
	.about-visual {
		position: relative;
		width: 100%;
        height: 100vh;
        overflow: hidden;
        & .about-story-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
        & .about-badge {
            position: absolute;
            bottom: var(--space-4);
            right: var(--space-4);
            background: var(--accent);
            padding: 28px 32px;
            text-align: center;
            & .badge-top {
                font-size: 8px;
                letter-spacing: 3px;
                text-transform: uppercase;
                color: rgba(255, 255, 255, 0.65);
                margin-bottom: 4px;
            }
            & .badge-main {
                font-family: var(--font-heading);
                font-size: 36px;
                font-weight: 700;
                color: white;
                letter-spacing: -0.04em;
                line-height: 1;
            }
            & .badge-sub {
                font-size: 8px;
                letter-spacing: 2px;
                text-transform: uppercase;
                color: rgba(255, 255, 255, 0.55);
                margin-top: 4px;
            }
        }
	}
	.about-values {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1px;
		background: var(--border);
        margin-top: var(--space-16);
	}
	.v-card {
		background: var(--off-white);
		padding: 24px 20px;
		transition: background 0.3s;
	}
	.v-card:hover {
		background: var(--white);
	}
	.v-icon {
		width: var(--space-8);
		height: var(--space-8);
		margin-bottom: var(--space-2);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: var(--space-4);
		border: 1px solid var(--border);
		background: var(--white);
        border-radius: var(--space-8);
	}
	.v-name {
		font-size: var(--text-md);
		text-transform: uppercase;
		color: var(--text);
		margin-bottom: var(--space-4);
		font-weight: 500;
	}
	.v-desc {
		font-size: var(--text-body);
		line-height: 1.7;
		color: var(--black-60);
	}
	@media (max-width: 1024px) {
		.about-grid {
			grid-template-columns: 1fr;

            & .about-visual {
                height: 50vh;
            }

            & .about-content {
                display: grid;
                padding: var(--padding-global);
                grid-template-columns: 1fr 1fr;
                gap: var(--space-8);
            }
		}
	}
	@media (max-width: 720px) {
		.about-grid {
            & .about-content {
                display: grid;
                grid-template-columns: 1fr;
                gap: 0;
            }
		}
	}
</style>
