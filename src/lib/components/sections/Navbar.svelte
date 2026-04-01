<script lang="ts">
	import { page } from "$app/stores"
	import { onMount } from "svelte"
	import { loadGsap } from "$lib/utils/useGsap"

	let scrolled = $state(false)
	let navHidden = $state(false)
	let isOpen = $state(false)

	let menuEl: HTMLElement
	let closeBtnEl: HTMLElement
	let mobFooterEl: HTMLElement
	let linkEls: HTMLElement[] = []
	let span1: HTMLElement
	let span2: HTMLElement
	let span3: HTMLElement
	let tl: any = null

	const navLinks = [
		{ href: "/about", label: "About" },
		{ href: "/services", label: "Services" },
		{ href: "/portfolio", label: "Portfolio" },
		{ href: "/testimonials", label: "Testimonials" },
		{ href: "/contact", label: "Contact" },
	]

	async function openMenu() {
		if (isOpen) return
		isOpen = true
		document.body.style.overflow = "hidden"
		const { gsap } = await loadGsap()
		tl?.kill()
		tl = gsap.timeline()
		// Show overlay
		tl.set(menuEl, { display: "flex" })
		tl.fromTo(menuEl, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.4, ease: "power2.out" }, 0)
		// Hamburger → X
		tl.to(span1, { y: 6, rotate: 45, duration: 0.35, ease: "power2.inOut" }, 0)
		tl.to(span2, { scaleX: 0, duration: 0.2, ease: "power2.in" }, 0)
		tl.to(span3, { y: -6, rotate: -45, duration: 0.35, ease: "power2.inOut" }, 0)
		// Top elements fade in
		tl.fromTo(
			[closeBtnEl, mobFooterEl],
			{ opacity: 0, y: 10 },
			{ opacity: 1, y: 0, stagger: 0.06, duration: 0.4, ease: "power2.out" },
			0.1,
		)
		// Links stagger in
		tl.fromTo(
			linkEls,
			{ y: 50, opacity: 0 },
			{ y: 0, opacity: 1, stagger: 0.08, duration: 0.55, ease: "power3.out" },
			0.15,
		)
	}

	async function closeMenu() {
		if (!isOpen) return
		isOpen = false
		document.body.style.overflow = ""
		const { gsap } = await loadGsap()
		tl?.kill()
		tl = gsap.timeline({
			onComplete: () => gsap.set(menuEl, { display: "none" }),
		})
		// Links stagger out
		tl.to(linkEls, { y: -30, opacity: 0, stagger: 0.04, duration: 0.28, ease: "power2.in" }, 0)
		// Overlay out
		tl.to(menuEl, { autoAlpha: 0, duration: 0.32, ease: "power2.in" }, 0.1)
		// X → Hamburger
		tl.to(span1, { y: 0, rotate: 0, duration: 0.3, ease: "power2.out" }, 0)
		tl.to(span2, { scaleX: 1, duration: 0.25, ease: "power2.out", delay: 0.1 }, 0)
		tl.to(span3, { y: 0, rotate: 0, duration: 0.3, ease: "power2.out" }, 0)
	}

	onMount(() => {
		menuEl.style.display = "none"
		let lastY = 0
		const THRESHOLD = 32
		const onScroll = () => {
			const y = window.scrollY
			scrolled = y > THRESHOLD
			if (y < THRESHOLD) {
				navHidden = false
			} else if (y > lastY) {
				navHidden = true
			} else {
				navHidden = false
			}
			lastY = y
		}
		window.addEventListener("scroll", onScroll, { passive: true })
		return () => window.removeEventListener("scroll", onScroll)
	})
</script>

<!-- Mobile menu overlay -->
<div class="mobile-menu" bind:this={menuEl}>
	<div class="mob-topbar">
		<a href="/" class="nav-logo" onclick={closeMenu}>
			<img src="/images/icon-logo-white.svg" class="nav-logo-img" alt="Enchen Creative Hub" />
			<span class="nav-logo-text">ENCHEN<span>.</span></span>
		</a>
		<button
			class="mob-close-btn"
			onclick={closeMenu}
			aria-label="Close navigation menu"
			bind:this={closeBtnEl}>
			<span></span>
			<span></span>
		</button>
	</div>
	<nav class="mob-links">
		{#each navLinks as link, i}
			<a
				href={link.href}
				class="mob-link"
				class:active={$page.url.pathname === link.href}
				onclick={closeMenu}
				bind:this={linkEls[i]}>
				<span class="mob-link-num">0{i + 1}</span>
				<span class="mob-link-label">{link.label}</span>
			</a>
		{/each}
	</nav>
	<div class="mob-footer" bind:this={mobFooterEl}>
		<span class="mob-tagline">Kampala &middot; Uganda &middot; Est. 2022</span>
		<a href="/contact" class="mob-cta" onclick={closeMenu}>Start a Project &rarr;</a>
	</div>
</div>

<!-- Desktop navbar -->
<nav id="navbar" class:scrolled class:nav-hidden={navHidden}>
	<div class="nav-container container">
		<a href="/" class="nav-logo">
			<img src="/images/icon-logo-white.svg" class="nav-logo-img" alt="Enchen Creative Hub" />
			<span class="nav-logo-text">ENCHEN<span>.</span></span>
		</a>
		<ul class="nav-links">
			{#each navLinks as link}
				<li>
					<a href={link.href} class:active={$page.url.pathname === link.href}
						>{link.label}</a>
				</li>
			{/each}
		</ul>
		<a href="/contact" class="nav-cta">Start a Project</a>
		<button class="hamburger" aria-label="Open navigation menu" onclick={openMenu}>
			<span bind:this={span1}></span>
			<span bind:this={span2}></span>
			<span bind:this={span3}></span>
		</button>
	</div>
</nav>
