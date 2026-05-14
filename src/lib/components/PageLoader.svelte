<script lang="ts">
	let { loading }: { loading: boolean } = $props();
    
</script>

<div class="loader" class:loaded={!loading}>
    <img class="logo" src="/images/white-nav-logo-color.svg" alt="">
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
	}

	/* .loader.loaded {
		opacity: 0;
		transform: translateY(-20px);
		pointer-events: none;
	} */
</style>
