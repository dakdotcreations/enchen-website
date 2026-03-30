<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { afterNavigate, beforeNavigate } from '$app/navigation';

	import Footer from '$lib/components/sections/footer.svelte';
	import Lenis from 'lenis';
	import gsap from 'gsap';
	import { setLenisInstance } from '$lib/lenis';

	let { children } = $props();

	let mobileOpen = $state(false);
	let scrolled = $state(false);
	let navHidden = $state(false);
	let curtain = $state<'idle' | 'cover' | 'lift'>('idle');

	// cursor
	let mx = $state(0), my = $state(0);
	let rx = $state(0), ry = $state(0);

	// loading screen
	let loading = $state(true);
	let progress = $state(0);

	function closeMob() { mobileOpen = false; }

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

    function initLenis() {
		const lenis = new Lenis();
		setLenisInstance(lenis);

		// GSAP ticker drives Lenis — cleaner than a manual rAF loop
		gsap.ticker.add((time) => lenis.raf(time * 1000));
		gsap.ticker.lagSmoothing(0);
    }

	onMount(() => {
		// ── Loading screen ──
		const startTime = Date.now();
		const MIN_DISPLAY = 1000;

		const slowTick = setInterval(() => {
			if (progress < 70) {
				progress = Math.min(70, progress + Math.floor(Math.random() * 3) + 2);
			} else if (progress < 90) {
				progress = progress + 1;
			} else {
				clearInterval(slowTick);
			}
		}, 30);

		function finishLoading() {
			clearInterval(slowTick);
			const elapsed = Date.now() - startTime;
			const remaining = Math.max(0, MIN_DISPLAY - elapsed);
			setTimeout(() => {
				const fastTick = setInterval(() => {
					if (progress < 100) {
						progress = Math.min(100, progress + 4);
					} else {
						clearInterval(fastTick);
						setTimeout(() => { loading = false; }, 350);
					}
				}, 16);
			}, remaining);
		}

		if (document.readyState === 'complete') {
			finishLoading();
		} else {
			window.addEventListener('load', finishLoading, { once: true });
		}

		// ── Scroll nav ──
		let lastY = 0;
		const THRESHOLD = 32; // ~2rem
		const onScroll = () => {
			const y = window.scrollY;
			scrolled = y > THRESHOLD;
			if (y < THRESHOLD) {
				navHidden = false;
			} else if (y > lastY) {
				navHidden = true;  // scrolling down
			} else {
				navHidden = false; // scrolling up
			}
			lastY = y;
		};
		window.addEventListener('scroll', onScroll, { passive: true });

        initLenis();

		// ── Initial reveal setup (fixes HMR vanish) ──
		requestAnimationFrame(setupReveal);

		return () => {
			window.removeEventListener('scroll', onScroll);
		};
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

	const navLinks = [
		{ href: '/about', label: 'About' },
		{ href: '/services', label: 'Services' },
		{ href: '/portfolio', label: 'Portfolio' },
		{ href: '/testimonials', label: 'Testimonials' },
		{ href: '/contact', label: 'Contact' }
	];
</script>

<!-- Loading screen -->
<div class="page-loader" class:loaded={!loading}>
	<img src="/images/full-logo.png" class="loader-logo" alt="Enchen Creative Hub" />
	<div class="loader-counter">{progress}<span class="loader-pct">%</span></div>
	<div class="loader-bar-track">
		<div class="loader-bar-fill" style="width:{progress}%"></div>
	</div>
</div>

<!-- Page transition curtain -->
<div class="curtain" class:cover={curtain === 'cover'} class:lift={curtain === 'lift'}></div>

<!-- Custom cursor -->
<div class="cursor" style="left:{mx}px;top:{my}px;"></div>
<div class="cursor-ring" style="left:{rx}px;top:{ry}px;"></div>

<!-- Mobile menu -->
<div class="mobile-menu" class:open={mobileOpen}>
	<button class="mobile-close" onclick={() => (mobileOpen = false)}>✕</button>
	{#each navLinks as link}
		<a href={link.href} onclick={closeMob}>{link.label}</a>
	{/each}
</div>

<!-- Nav -->
<nav id="navbar" class:scrolled class:nav-hidden={navHidden}>
    <div class="nav-container container">
        <a href="/" class="nav-logo">
            <img src="/images/icon-logo-white.svg" class="nav-logo-img" alt="Enchen Creative Hub" />
            <span class="nav-logo-text">ENCHEN<span>.</span></span>
        </a>
        <ul class="nav-links">
            {#each navLinks as link}
                <li>
                    <a href={link.href} class:active={$page.url.pathname === link.href}>{link.label}</a>
                </li>
            {/each}
        </ul>
        <a href="/contact" class="nav-cta">Start a Project</a>
        <button class="hamburger" aria-label="Open navigation menu" onclick={() => (mobileOpen = true)}>
            <span></span><span></span><span></span>
        </button>
    </div>
</nav>

{@render children()}

<Footer />
