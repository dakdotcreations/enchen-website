<script lang="ts">
	let video: HTMLVideoElement;
	let visible = $state(true);

	function onEnded() {
		visible = false;
	}
</script>

<div class="video-loader" class:visible>
	<video bind:this={video} autoplay muted onended={onEnded} class="background-video">
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
		opacity: 1;
		transition: opacity 1s ease;
		background: black; /* optional, in case video doesn't cover */
	}

	.video-loader:not(.visible) {
		opacity: 0;
		pointer-events: none;
	}

	.background-video {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>