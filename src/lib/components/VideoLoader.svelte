<script lang="ts">
	import gsap from 'gsap';
	import { useGsap } from '$lib/utils/useGsap';

	let video: HTMLVideoElement;
	let videoLoader: HTMLDivElement;

	useGsap(() => {
		let tween: any;

		tween = gsap.to(videoLoader, {
			opacity: 0,
            pointerEvents: 'none',
			duration: 0.8,
			delay: 2,
			ease: 'power2.out'
		});

		return () => {
			tween?.kill?.();
		};
	});
</script>

<div class="video-loader" bind:this={videoLoader}>
	<video bind:this={video} autoplay muted class="background-video">
		<source src="/videos/video-1.mp4" type="video/mp4">
		Your browser does not support the video tag.
	</video>
</div>

<style>
	.video-loader {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 9999;
		background: black; /* optional, in case video doesn't cover */
	}

	.background-video {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>