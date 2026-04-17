<script lang="ts">
	import '../app.css';
	import { afterNavigate, beforeNavigate } from '$app/navigation';

	import Footer from '$lib/components/sections/footer.svelte';
	import Navbar from '$lib/components/sections/Navbar.svelte';
	import PageLoader from '$lib/components/PageLoader.svelte';
	import Lenis from 'lenis';
	import { loadGsap } from '$lib/utils/useGsap';
	import { setLenisInstance } from '$lib/lenis';
	import { fadeIn } from '$lib/animations/anims';


	let { children } = $props();

	let curtain = $state<'idle' | 'cover' | 'lift'>('idle');

	// loading screen
	let loading = $state(true);

	function setupReveal() {
		const obs = new IntersectionObserver(
			(entries) => entries.forEach((e) => {
				if (e.isIntersecting) {
					e.target.classList.add('visible');
					obs.unobserve(e.target);
				}
			}),
			{ threshold: 0.08 }
		);
		document.querySelectorAll('.reveal').forEach((el) => {
			if (!el.classList.contains('visible')) {
				obs.observe(el);
			}
		});
	}

    async function initLenis() {
		const { gsap } = await loadGsap();
		const lenis = new Lenis({
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
		setLenisInstance(lenis);

		// GSAP ticker drives Lenis, cleaner than a manual rAF loop
		gsap.ticker.add((time: number) => lenis.raf(time * 1000));
		gsap.ticker.lagSmoothing(0);
    }

	$effect(() => {
		// ── Loading screen ──
		const startTime = Date.now();
		const MIN_DISPLAY = 3200; // allow SVG animation to complete (~2.8s)

		function finishLoading() {
			const elapsed = Date.now() - startTime;
			const remaining = Math.max(0, MIN_DISPLAY - elapsed);
			setTimeout(() => { loading = false; }, remaining);
		}

		if (document.readyState === 'complete') {
			finishLoading();
		} else {
			window.addEventListener('load', finishLoading, { once: true });
		}

        initLenis();

		// ── Initial setup (fixes HMR vanish) ──
		requestAnimationFrame(setupReveal);
		fadeIn();
	});

	beforeNavigate(() => {
		curtain = 'cover';
	});

	afterNavigate(() => {
		window.scrollTo({ top: 0, behavior: 'instant' });
		// wait for cover animation (450ms) to finish before lifting
		setTimeout(() => { curtain = 'lift'; }, 500);
		setTimeout(() => { curtain = 'idle'; }, 1050);

		document.querySelectorAll('.reveal').forEach((el) => el.classList.remove('visible'));
		setupReveal();
	});


</script>

<PageLoader {loading} />

<!-- Page transition curtain -->
<div class="curtain" class:cover={curtain === 'cover'} class:lift={curtain === 'lift'}></div>

<Navbar />

{@render children()}

<Footer />
