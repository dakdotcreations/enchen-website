<script lang="ts">
	let { loading }: { loading: boolean } = $props();
    import { useGsap } from '$lib/utils/useGsap';
	import gsap from 'gsap';

    let loaderLogo: HTMLImageElement;
    let loaderContainer: HTMLDivElement;
    let loadedTimeline: any;
    let line1: HTMLSpanElement;
    let line2: HTMLSpanElement;

    useGsap(() => {
        let navLogo = document.getElementById('nav-logo-img') as HTMLImageElement;
        
        // get the width, height, and position of the nav logo
        const logoRect = navLogo.getBoundingClientRect();
        const posX = logoRect.left + logoRect.width / 2; // center X of the logo
        const posY = logoRect.top + logoRect.height / 2; // center Y of the logo
        const logoWidth = logoRect.width;
        const logoHeight = logoRect.height;

        console.log('Nav logo position:', posX, posY, 'size:', logoWidth, logoHeight);

        loadedTimeline = gsap.timeline({ paused: true });

        gsap.set(line2, {
            left: posX,
            bottom: loaderLogo.getBoundingClientRect().bottom,
        })

        loadedTimeline
            .to(line1, {
                left: loaderLogo.getBoundingClientRect().right, // move to just past the right edge of the logo
                ease: 'power2.inOut',
                duration: 0.8,
            }, 0) // start at time 0
            // resize the loaderLogo to match the nav logo's size only
            .to(loaderLogo, {
                width: logoWidth,
                height: logoHeight,
                ease: 'power2.inOut',
                duration: 0.8,
            }, '<')
            // move the loaderLogo to the nav logo's X position
            .to(loaderLogo, {
                left: posX,
                ease: 'power2.inOut',
                duration: 0.8,
            })
            // move line1 to just past the left edge of the logo
            .to(line1, {
                left: logoRect.right + 20,
                ease: 'power2.inOut',
                duration: 0.9,
            }, '<')
            // move line2 y to the top of the page
            .to(line2, {
                top: 0,
                ease: 'power2.inOut',
                duration: 0.8,
            })
            // shrink line1 to 0 width
            .to(line1, {
                width: 0,
                ease: 'power2.inOut',
                duration: 0.8,
            }, '<')
            // move the loaderLogo to the nav logo's Y position
            .to(loaderLogo, {
                top: posY,
                ease: 'power2.inOut',
                duration: 0.8,
            })
            // shrink line2 to 0 height at the center of the logo
            .to(line2, {
                height: 0,
                ease: 'power2.inOut',
                duration: 0.8,
            }, '<')
            // move the bottom of the loader container
            .to(loaderContainer, {
                bottom: "100%",
                ease: 'power2.inOut',
                duration: 0.8,
            });
    });

    $effect(() => {
        if (!loading && loadedTimeline) {
            loadedTimeline.play();
        }
    });
</script>

<div class="loader" class:loaded={!loading} bind:this={loaderContainer}>
    <img class="logo" bind:this={loaderLogo} src="/images/white-nav-logo-color.svg" alt="">
    <span class="line one" bind:this={line1}></span>
    <span class="line two" bind:this={line2}></span>

    <div class="box-loader">
        <div class="box one"></div>
        <div class="box two"></div>
        <div class="box three"></div>
    </div>
</div>

<style>
	/* ── Loader shell ── */
	.loader {
		position: fixed;
		inset: 0;
		z-index: 9999;
		overflow: hidden;
		transition: opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s;
        background-color: var(--white);

        .logo {
            width: 16rem;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        .line {
            --line-width: .1rem;
            position: absolute;
            min-height: 1;
            min-width: 1;
            background-color: var(--black);
            
            &.one {
                top: 50%;
                transform: translate(0, -50%);
                height: var(--line-width);
                right: 0;
            }
            
            &.two {
                left: 0;
                width: var(--line-width);
            }
        }
	}

	/* .loader.loaded {
		opacity: 0;
		transform: translateY(-20px);
		pointer-events: none;
	} */
</style>
