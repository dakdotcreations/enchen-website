<script lang="ts">
	import { onMount } from "svelte"
	import type { Project } from "$lib/types/project"

	let { slides }: { slides: Project[] } = $props()

	// Fallback gradient classes for slides without a thumbnail
	const piClasses = ["pi1", "pi2", "pi3", "pi4", "pi5", "pi6", "pi7", "pi8", "pi9"]

	function cap(s: string) {
		return s.charAt(0).toUpperCase() + s.slice(1)
	}

	let currentSlide = $state(0)
	function nextSlide() {
		currentSlide = (currentSlide + 1) % slides.length
	}
	function prevSlide() {
		currentSlide = (currentSlide - 1 + slides.length) % slides.length
	}

	onMount(() => {
		const interval = setInterval(nextSlide, 5500)
		return () => clearInterval(interval)
	})
</script>

<section id="hero">
	{#each slides as slide, i}
		<div class="hero-slide" class:active={currentSlide === i}>
			<div
				class="hero-slide-bg {slide.thumbnail ? '' : piClasses[i % piClasses.length]}"
				style={slide.thumbnail
					? `background-image: url('${slide.thumbnail}'); background-size: cover; background-position: center;`
					: ""}>
			</div>
			<div class="hero-slide-overlay"></div>
			<div class="hero-slide-info container">
				<div class="hero-slide-location">{slide.location}</div>
				<div class="hero-slide-name">
					<a href="/portfolio/{slide.slug}">
						{slide.title}
					</a>
				</div>
				<div class="hero-slide-cat">{cap(slide.tag)}</div>
			</div>
			<a href="/portfolio/{slide.slug}" class="hero-slide-cta">View Project →</a>
		</div>
	{/each}
	<div class="hero-dots">
		{#each slides as _, i}
			<button
				class="hero-dot"
				class:active={currentSlide === i}
				onclick={() => (currentSlide = i)}
				aria-label="Go to slide {i + 1}"></button>
		{/each}
	</div>
	<button class="hero-arrow hero-prev" onclick={prevSlide} aria-label="Previous slide">←</button>
	<button class="hero-arrow hero-next" onclick={nextSlide} aria-label="Next slide">→</button>
</section>

<style>
	#hero {
		position: relative;
		width: 100%;
		height: 100dvh;
		overflow: hidden;
		background: var(--black);

        .hero-slide {
            position: absolute;
            inset: 0;
            opacity: 0;
            transition: opacity 0.9s ease;
            pointer-events: none;

            &.active {
                opacity: 1;
                pointer-events: auto;

                .hero-slide-bg {
                    transform: scale(1.05);
                }

                .hero-slide-info {
                    opacity: 1;
                    transform: translateY(0);
                }

                .hero-slide-cta {
                    opacity: 1;
                }
            }

            .hero-slide-bg {
                position: absolute;
                inset: 0;
                transition: transform 8s ease;
            }
            
            .hero-slide-overlay {
                position: absolute;
                inset: 0;
                background: linear-gradient(
                    to top,
                    rgba(34, 30, 31, 0.92) 0%,
                    rgba(34, 30, 31, 0.35) 55%,
                    rgba(34, 30, 31, 0.15) 100%
                );
            }

            .hero-slide-info {
                position: absolute;
                bottom: var(--padding-global);
                left: 0;
                z-index: 3;
                opacity: 0;
                transition:
                    opacity 0.5s ease 0.3s,
                    transform 0.5s ease 0.3s;
                transform: translateY(12px);
        
                .hero-slide-location {
                    font-size: 0.75rem;
                    letter-spacing: 4px;
                    text-transform: uppercase;
                    color: rgba(255, 255, 255, 0.45);
                    margin-bottom: 10px;
                }
                .hero-slide-name a {
                    text-decoration: none;
                    font-family: var(--font-heading);
                    font-size: clamp(22px, 3.2vw, 44px);
                    font-weight: 700;
                    letter-spacing: -0.04em;
                    color: var(--white);
                    line-height: 1.1;
                    text-transform: uppercase;
                }
                .hero-slide-cat {
                    font-size: 0.75rem;
                    letter-spacing: 3px;
                    text-transform: uppercase;
                    color: var(--accent);
                    margin-top: 10px;
                    opacity: 0.85;
                }
            }

            .hero-slide-cta {
                position: absolute;
                bottom: 68px;
                right: 64px;
                z-index: 3;
                font-size: 0.75rem;
                letter-spacing: 2.5px;
                text-transform: uppercase;
                color: var(--white);
                background: transparent;
                border: 1px solid rgba(255, 255, 255, 0.3);
                padding: 10px 26px;
                text-decoration: none;
                display: inline-block;
                border-radius: 24px;
                opacity: 0;
                transition:
                    opacity 0.5s ease 0.5s,
                    background 0.3s,
                    border-color 0.3s;
        
                display: none;
                @media screen and (min-width: 640px) {
                    display: inline-block;
                }

                &:hover {
                    background: var(--accent);
                    border-color: var(--accent);
                }
            }
        }
        
        .hero-dots {
            position: absolute;
            bottom: var(--padding-global-sm);
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: var(--space-2);
            z-index: 4;
    
            .hero-dot {
                width: 0.375rem;
                height: 0.375rem;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.25);
                border: none;
                cursor: none;
                transition: all 0.35s;
                padding: 0;
    
                &.active {
                    background: var(--accent);
                    width: var(--space-7);
                    border-radius: var(--radius-full);
                }
            }
        }
        
        .hero-arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 4;
            background: transparent;
            border: 1px solid rgba(255, 255, 255, 0.18);
            color: white;
            width: 48px;
            height: 48px;
            cursor: none;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 15px;
            transition: all 0.3s;
    
            &:hover {
                border-color: var(--accent);
                color: var(--accent);
                background: rgba(196, 34, 128, 0.08);
            }
        
            &.hero-prev {
                left: var(--padding-global-sm);
            }
    
            &.hero-next {
                right: var(--padding-global-sm);
            }
        }
	}
</style>
