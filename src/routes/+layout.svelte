<script lang="ts">
	import '../app.css';
	import { afterNavigate, onNavigate } from '$app/navigation';
	import { page } from '$app/state';

	import Footer from '$lib/components/sections/footer.svelte';
	import Navbar from '$lib/components/sections/Navbar.svelte';
	import PageLoader from '$lib/components/PageLoader.svelte';
	import VideoLoader from '$lib/components/VideoLoader.svelte';
	import Lenis from 'lenis';
	import { loadGsap } from '$lib/utils/useGsap';
	import { setLenisInstance } from '$lib/lenis';
	import { fadeIn } from '$lib/animations/anims';

	const SITE_URL = 'https://www.enchencreative.com';
	const SITE_NAME = 'Enchen Creative Hub';
	const DEFAULT_TITLE = 'Enchen Creative Hub, Architectural & Interior Design | Commercial Spaces';
	const DEFAULT_DESCRIPTION =
		'Enchen Creative Hub is a Kampala-based architectural and interior design studio crafting commercial and residential spaces with end-to-end execution.';
	const DEFAULT_OG_IMAGE = `${SITE_URL}/images/full-logo.png`;

	function humanizePathSegment(segment: string): string {
		return segment
			.replace(/-/g, ' ')
			.split(' ')
			.filter(Boolean)
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');
	}

	const currentPath = $derived.by(() => {
		const pathname = page.url.pathname;
		if (pathname === '/') return '/';
		return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
	});

	const canonicalUrl = $derived(`${SITE_URL}${currentPath === '/' ? '' : currentPath}`);

	const pageTitle = $derived.by(() => {
		if (currentPath === '/') return DEFAULT_TITLE;
		const segments = currentPath.split('/').filter(Boolean);
		const last = segments[segments.length - 1];
		return `${humanizePathSegment(last)} | ${SITE_NAME}`;
	});

	const breadcrumbSchema = $derived.by(() => {
		const segments = currentPath.split('/').filter(Boolean);
		const list = [
			{
				'@type': 'ListItem',
				position: 1,
				name: 'Home',
				item: SITE_URL
			}
		];

		segments.forEach((segment, index) => {
			list.push({
				'@type': 'ListItem',
				position: index + 2,
				name: humanizePathSegment(segment),
				item: `${SITE_URL}/${segments.slice(0, index + 1).join('/')}`
			});
		});

		return JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'BreadcrumbList',
			itemListElement: list
		});
	});

	const websiteSchema = $derived(
		JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'WebSite',
			name: SITE_NAME,
			url: SITE_URL,
			description: DEFAULT_DESCRIPTION,
			inLanguage: 'en'
		})
	);

	let { children } = $props();

	let curtain = $state<'idle' | 'cover' | 'lift'>('idle');

	// loading screen
	let loading = $state(true);
	let isFirstLoad = $state(true);

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
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
		});
		setLenisInstance(lenis);

		// GSAP ticker drives Lenis, cleaner than a manual rAF loop
		gsap.ticker.add((time: number) => lenis.raf(time * 1000));
		gsap.ticker.lagSmoothing(0);
	}

	$effect(() => {
		// ── Loading screen ──
		const startTime = Date.now();
		const MIN_DISPLAY = 800;

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

	onNavigate(() => {
		curtain = 'cover';
		// hold navigation until the cover animation completes (450ms)
		return new Promise<void>(resolve => setTimeout(resolve, 450));
	});

	afterNavigate(() => {
		window.scrollTo({ top: 0, behavior: 'instant' });
		if (!isFirstLoad) {
			curtain = 'lift';
			setTimeout(() => { curtain = 'idle'; }, 500);
		}
		isFirstLoad = false;

		document.querySelectorAll('.reveal').forEach((el) => el.classList.remove('visible'));
		setupReveal();
	});
</script>

<svelte:head>
	<link rel="canonical" href={canonicalUrl} />

	<meta name="description" content={DEFAULT_DESCRIPTION} />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={SITE_NAME} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={DEFAULT_DESCRIPTION} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:image" content={DEFAULT_OG_IMAGE} />
	<meta property="og:image:alt" content="Enchen Creative Hub architectural and interior design" />
	<meta property="og:locale" content="en_US" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={DEFAULT_DESCRIPTION} />
	<meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
	<meta name="twitter:site" content="@enchencreative" />

	<script type="application/ld+json">{@html websiteSchema}</script>
	<script type="application/ld+json">{@html breadcrumbSchema}</script>
</svelte:head>

<!-- <PageLoader {loading} /> -->

<VideoLoader />

<!-- Page transition curtain -->
<div class="curtain" class:cover={curtain === 'cover'} class:lift={curtain === 'lift'}></div>

<Navbar />

{@render children()}

<Footer />
