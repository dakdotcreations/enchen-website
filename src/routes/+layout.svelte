<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';

	let { children } = $props();

	let mobileOpen = $state(false);
	let scrolled = $state(false);

	// cursor
	let mx = $state(0), my = $state(0);
	let rx = $state(0), ry = $state(0);

	function closeMob() { mobileOpen = false; }

	onMount(() => {
		// scroll nav
		const onScroll = () => { scrolled = window.scrollY > 60; };
		window.addEventListener('scroll', onScroll);

		// cursor
		const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
		document.addEventListener('mousemove', onMove);

		let raf: number;
		const loop = () => {
			rx += (mx - rx) * 0.12;
			ry += (my - ry) * 0.12;
			raf = requestAnimationFrame(loop);
		};
		loop();

		return () => {
			window.removeEventListener('scroll', onScroll);
			document.removeEventListener('mousemove', onMove);
			cancelAnimationFrame(raf);
		};
	});

	afterNavigate(() => {
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
			el.classList.remove('visible');
			obs.observe(el);
		});
	});

	const navLinks = [
		{ href: '/about', label: 'About' },
		{ href: '/services', label: 'Services' },
		{ href: '/portfolio', label: 'Portfolio' },
		{ href: '/testimonials', label: 'Testimonials' },
		{ href: '/contact', label: 'Contact' }
	];
</script>

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
<nav id="navbar" class:scrolled>
	<a href="/" class="nav-logo">
		<img src="/images/icon-logo.webp" class="nav-logo-img" alt="Enchen Creative Hub" />
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
</nav>

{@render children()}

<!-- Footer -->
<footer>
	<div class="foot-top">
		<div>
			<a href="/" class="foot-logo-wrap">
			<img src="/images/icon-logo.webp" class="foot-logo-img" alt="Enchen Creative Hub" />
			<span class="foot-logo-text">ENCHEN<span>.</span></span>
		</a>
		<div class="foot-tag">Precision Design. Commercial Excellence.</div>
			<div class="foot-social">
				<a class="soc-link" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">IG</a>
				<a class="soc-link" href="https://ug.linkedin.com/in/enchen-creative-hub-b7032739a" target="_blank" rel="noopener noreferrer" title="LinkedIn">LI</a>
				<a class="soc-link" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">FB</a>
				<a class="soc-link" href="https://www.houzz.com" target="_blank" rel="noopener noreferrer" title="Houzz">HZ</a>
			</div>
		</div>
		<div>
			<div class="foot-col-title">Services</div>
			<ul class="foot-links">
				<li><a href="/services">Corporate Design</a></li>
				<li><a href="/services">Residential Design</a></li>
				<li><a href="/services">Commercial Spaces</a></li>
				<li><a href="/services">3D Visualization</a></li>
				<li><a href="/services">Project Management</a></li>
			</ul>
		</div>
		<div>
			<div class="foot-col-title">Company</div>
			<ul class="foot-links">
				<li><a href="/about">About Us</a></li>
				<li><a href="/portfolio">Portfolio</a></li>
				<li><a href="/testimonials">Testimonials</a></li>
				<li><a href="/contact">Contact</a></li>
			</ul>
		</div>
		<div>
			<div class="foot-col-title">Connect</div>
			<ul class="foot-links">
				<li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
				<li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
				<li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
				<li><a href="https://www.houzz.com" target="_blank" rel="noopener noreferrer">Houzz</a></li>
			</ul>
		</div>
	</div>
	<div class="foot-bottom">
		<div class="foot-copy">© 2026 <span>DakDot Creations Ltd</span>. All rights reserved.</div>
		<div class="foot-location">Ntinda, Kampala, Uganda</div>
	</div>
</footer>
