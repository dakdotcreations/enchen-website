<script lang="ts">
	import { onMount } from 'svelte';

	let { progress, loading }: { progress: number; loading: boolean } = $props();

	type Milestone = { main: string; };

	const milestones: Milestone[] = [
		{ main: 'Kampala, Uganda'},
		{ main: 'Corporate & Commercial'},
		{ main: 'Residential & Hospitality'},
		{ main: 'Architectural Fit-Outs'},
	];

	const CYCLE = 1800;  // ms each milestone is shown
	const FADE  = 200;   // ms for fade out/in

	let milestoneVisible = $state(true);
	let milestoneIndex   = $state(0);

	onMount(() => {
		const interval = setInterval(() => {
			milestoneVisible = false;
			const t = setTimeout(() => {
				milestoneIndex = (milestoneIndex + 1) % milestones.length;
				milestoneVisible = true;
			}, FADE);
			return () => clearTimeout(t);
		}, CYCLE);
		return () => clearInterval(interval);
	});
</script>

<div class="loader" class:loaded={!loading}>
	<img src="/images/full-logo.png" class="loader-logo" alt="Enchen Creative Hub" />

	<div class="loader-milestone" class:visible={milestoneVisible}>
		<span class="milestone-main">{milestones[milestoneIndex].main}</span>
	</div>

	<div class="loader-track">
		<div class="loader-fill" style="width:{progress}%">
		</div>
	</div>
</div>

<style>
	.loader {
		position: fixed;
		inset: 0;
		z-index: 9999;
		background: var(--white);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--space-4);
		transition:
			opacity 0.7s ease,
			transform 0.7s ease;
	}

	.loader.loaded {
		opacity: 0;
		transform: translateY(-16px);
		pointer-events: none;
	}

	.loader-logo {
		width: 160px;
		height: auto;
		object-fit: contain;
	}

	/* ── Milestone text block ── */
	.loader-milestone {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.3rem;
		opacity: 0;
		transition: opacity 0.38s ease;
	}

	.loader-milestone.visible {
		opacity: 1;
	}

	.milestone-sub {
        display: none;
		font-size: var(--text-xs);
		font-family: var(--font-heading);
		font-weight: 400;
		text-transform: uppercase;
		color: var(--accent);
		line-height: 1;
	}

	.milestone-main {
		font-size: var(--text-body);
		font-family: var(--font-heading);
		font-weight: 400;
		color: var(--dark);
		line-height: 1.1;
	}

	/* ── Progress bar ── */
	.loader-track {
		width: min(80vw, 320px);
		height: 4px;
		border-radius: 99px;
		background: rgba(34, 30, 31, 0.1);
		overflow: visible;
		position: relative;
	}

	.loader-fill {
		position: relative;
		height: 100%;
		border-radius: 99px;
		background: var(--accent);
		transition: width 0.18s linear;
		overflow: visible;
	}

	/* ── Riding % label ── */
	.loader-label {
        display: none;
		position: absolute;
		right: 0;
		bottom: calc(100% + 9px);
		transform: translateX(50%);
		font-family: var(--font-heading);
		font-size: var(--text-xl);
		font-weight: 500;
		color: var(--dark);
		white-space: nowrap;
		line-height: 1;
	}

	.loader-pct {
        display: none;
		font-size: var(--text-xl);
		color: var(--accent);
		margin-left: 1px;
	}

	/* ── Mobile ── */
	@media (max-width: 640px) {
		.loader-logo {
			width: 120px;
		}

		.loader-track {
			width: 70vw;
		}

		.milestone-main {
			font-size: 1.25rem;
		}
	}
</style>
