<script lang="ts">
	import { page } from "$app/stores"
	import { onMount } from "svelte"
	import { loadGsap } from "$lib/utils/useGsap"
    import { ArrowRight, Handshake } from "@lucide/svelte";

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
		// { href: "/testimonials", label: "Testimonials" },
		// { href: "/contact", label: "Contact" },
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
		<a href="/contact" class="mob-cta btn" onclick={closeMenu}>
            <Handshake size={16} />
            <span>Get in touch</span>
        </a>
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
		<a href="/contact" class="nav-cta btn primary">
            <Handshake size={16} />
            <span>Get in touch</span>
        </a>
		<button class="hamburger" aria-label="Open navigation menu" onclick={openMenu}>
			<span bind:this={span1}></span>
			<span bind:this={span2}></span>
			<span bind:this={span3}></span>
		</button>
	</div>
</nav>

<style>
    #navbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        padding: var(--space-7) 0;
        transition: all 0.4s ease;

        &.scrolled {
            background: var(--black-60);
            backdrop-filter: blur(1rem);
            padding: var(--space-2) var(--space-16);
            /* border-bottom: 1px solid var(--black-80); */
        }

        &.nav-hidden {
            transform: translateY(-100%);
        }

        & .nav-container {
            display: flex;
            align-items: center;
            justify-content: space-between;

            & .nav-logo {
                display: flex;
                align-items: center;
                gap: var(--space-3);
                text-decoration: none;

                & .nav-logo-img {
                    height: 2.25rem;
                    width: auto;
                    object-fit: contain;
                    display: block;
                }
            }

            & .nav-links {
                display: none;
                gap: var(--space-8);
                list-style: none;

                & a {
                    font-size: var(--text-base);
                    letter-spacing: var(--tracking-xs);
                    text-transform: uppercase;
                    color: var(--white-80);
                    text-decoration: none;
                    transition: color 0.3s;
                    position: relative;

                    &::after {
                        content: "";
                        position: absolute;
                        bottom: -0.1875rem;
                        left: 0;
                        width: 0;
                        height: 1px;
                        background: var(--accent);
                        transition: width 0.35s ease;
                    }

                    &:hover,
                    &.active {
                        color: var(--white);
                    }

                    &:hover::after,
                    &.active::after {
                        width: 100%;
                    }
                }
            }

            & .nav-cta {
                display: none;
            }

            & .hamburger {
                display: flex;
                flex-direction: column;
                gap: 0.3125rem;
                background: none;
                border: none;
                padding: var(--space-1);

                & span {
                    width: 1.375rem;
                    height: 1px;
                    background: var(--white-60);
                    transition: all 0.3s;
                }
            }
        }
    }

    @media (min-width: 1024px) {
        #navbar {
            &.scrolled {
                padding: var(--space-4) var(--space-8);
            }

            & .nav-container {
                & .nav-links,
                & .nav-cta {
                    display: flex;
                }
                & .hamburger {
                    display: none;
                }
            }
        }
    }

    .nav-logo-text {
        font-family: var(--font-heading);
        font-size: 0.9375rem;
        font-weight: 700;
        letter-spacing: var(--tracking-wider);
        color: var(--white);
        text-transform: uppercase;

        & span {
            color: var(--accent);
        }
    }

    /* ── Mobile menu ── */
    .mobile-menu {
        position: fixed;
        inset: 0;
        background: var(--dark);
        z-index: 1001;
        display: none;
        flex-direction: column;
        padding: var(--space-7) var(--space-8) var(--space-9);
        overflow: hidden;

        & .mob-topbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-shrink: 0;
        }

        & .mob-close-btn {
            width: 2.75rem;
            height: 2.75rem;
            border-radius: 50%;
            border: 1px solid var(--white-20);
            background: transparent;
            cursor: pointer;
            position: relative;
            flex-shrink: 0;
            transition: border-color 0.3s;

            & span {
                position: absolute;
                width: 1rem;
                height: 1px;
                background: var(--white-60);
                top: 50%;
                left: 50%;
                transform-origin: center;
                transition: background 0.3s;

                &:first-child {
                    transform: translate(-50%, -50%) rotate(45deg);
                }

                &:last-child {
                    transform: translate(-50%, -50%) rotate(-45deg);
                }
            }

            &:hover {
                border-color: var(--accent);

                & span {
                    background: var(--accent);
                }
            }
        }

        & .mob-links {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;

            & .mob-link {
                display: flex;
                align-items: baseline;
                gap: var(--space-4);
                text-decoration: none;
                padding: var(--space-4) 0;
                border-bottom: 1px solid var(--white-20);

                &:first-child {
                    border-top: 1px solid var(--white-20);
                }

                & .mob-link-num {
                    font-size: var(--text-xs);
                    color: var(--accent);
                    font-family: var(--font-heading);
                    letter-spacing: var(--tracking-wider);
                    min-width: 1.5rem;
                }

                & .mob-link-label {
                    font-family: var(--font-heading);
                    font-size: clamp(1.75rem, 7vw, 3rem);
                    font-weight: 700;
                    color: var(--white-80);
                    letter-spacing: var(--tracking-snug);
                    text-transform: uppercase;
                    transition: color 0.3s;
                }

                &:hover .mob-link-label,
                &.active .mob-link-label {
                    color: var(--accent);
                }
            }
        }

        & .mob-footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-top: var(--space-6);
            flex-shrink: 0;

            & .mob-tagline {
                font-size: var(--text-xs);
                color: var(--white-40);
                letter-spacing: var(--tracking-xs);
                text-transform: uppercase;
            }

            & .mob-cta {
                font-size: var(--text-sm);
                letter-spacing: var(--tracking-wider);
                text-transform: uppercase;
                color: var(--accent);
                text-decoration: none;
                font-family: var(--font-heading);
                transition: opacity 0.3s;

                &:hover {
                    opacity: 0.7;
                }
            }
        }
    }
</style>