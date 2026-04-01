<script lang="ts">
	import { SquareDashedMousePointer, MessageCircleMore, Rocket, Leaf } from '@lucide/svelte';
	import { onMount, onDestroy } from 'svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { getLenisInstance } from '$lib/lenis';

	let mm: ReturnType<typeof gsap.matchMedia>;

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		const lenis = getLenisInstance();
		if (lenis) lenis.on('scroll', ScrollTrigger.update);

		mm = gsap.matchMedia();
		mm.add('(min-width: 1025px)', () => {
			ScrollTrigger.create({
				trigger: '.about-grid',
				start: 'top top',
				end: 'bottom bottom',
				pin: '.about-visual',
				pinSpacing: false,
                markers: true,
			});
		});
	});

	onDestroy(() => {
		const lenis = getLenisInstance();
		if (lenis) lenis.off('scroll', ScrollTrigger.update);
		mm?.revert();
	});
</script>

<div id="story" style="background: var(--off-white);">
	<div class="s-label container">Who We Are</div>
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
			<h2 class="s-title">
				Designing Spaces<br />That <span class="h-blue">Endure</span>
			</h2>
			<div class="about-body">
				<p class="s-body">
					Enchen Creative Hub is an architectural interior design firm dedicated to
					crafting inspiring and functional spaces. With a passion for innovation and
					sustainability, we deliver tailored solutions across private residences,
					corporate environments, and commercial developments, turning visions into
					reality.
				</p>
				<p class="s-body">
					We are a multidisciplinary team of architects, interior designers, and project
					managers united by a passion for craft. We believe the best design begins with
					listening — understanding how you live, how you work, and what you aspire to
					create.
				</p>
				<p class="s-body">
					Our approach is grounded in precision and guided by aesthetics. We take projects
					from initial concept through to construction completion, acting as a single
					trusted partner for every stage of the journey.
				</p>
			</div>
			<div class="about-values" style="margin-top:44px;">
				<div class="v-card">
					<div class="v-icon blue">
                        <SquareDashedMousePointer size={16} />
                    </div>
					<div class="v-name">Precision</div>
					<div class="v-desc">
						Every measurement, every material, every decision considered with
						meticulous care.
					</div>
				</div>
				<div class="v-card">
					<div class="v-icon mag">
                        <MessageCircleMore size={16} />
                    </div>
					<div class="v-name">Collaboration</div>
					<div class="v-desc">
						We work alongside our clients, not for them. Your input shapes every stage.
					</div>
				</div>
				<div class="v-card">
					<div class="v-icon pur">
                        <Rocket size={16} />
                    </div>
					<div class="v-name">Innovation</div>
					<div class="v-desc">
						We embrace advanced technology and fresh thinking to solve complex design
						challenges.
					</div>
				</div>
				<div class="v-card">
					<div class="v-icon teal">
                        <Leaf size={16} />
                    </div>
					<div class="v-name">Sustainability</div>
					<div class="v-desc">
						Responsible design that balances beauty with environmental accountability.
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
    #story {
        padding-top: var(--space-30);
    }
	.about-grid {
        padding-bottom: var(--space-30);
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--padding-global);
		align-items: start;
		margin-top: 80px;

        & .about-content {
            padding-right: var(--padding-global);
        }

		& .about-body {
			display: grid;
			gap: var(--space-6);
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
		width: 32px;
		height: 32px;
		margin-bottom: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 14px;
		border: 1px solid var(--border);
		background: var(--white);
	}
	.v-name {
		font-size: var(--text-sm);
		letter-spacing: 2px;
		text-transform: uppercase;
		color: var(--text);
		margin-bottom: 6px;
		font-weight: 500;
	}
	.v-desc {
		font-size: var(--text-md);
		line-height: 1.7;
		color: var(--black-60);
	}
	@media (max-width: 1024px) {
		.about-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
