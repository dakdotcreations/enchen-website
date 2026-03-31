<script lang="ts">
	import { onMount } from 'svelte';

	let { progress, loading }: { progress: number; loading: boolean } = $props();

	type Milestone = { main: string; sub: string };

	const milestones: Milestone[] = [
		{ main: 'Kampala, Uganda',            sub: 'Est. 2018'      },
		{ main: 'Corporate & Commercial',     sub: 'Interiors'      },
		{ main: 'Residential & Hospitality',  sub: 'Design'         },
		{ main: 'Architectural Fit-Outs',     sub: 'Craftsmanship'  },
	];

	const CYCLE = 2600;  // ms each milestone is shown
	const FADE  = 380;   // ms for fade out/in

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
		<span class="milestone-sub">{milestones[milestoneIndex].sub}</span>
		<span class="milestone-main">{milestones[milestoneIndex].main}</span>
	</div>

	<div class="loader-track">
		<div class="loader-fill" style="width:{progress}%">
			{#if progress >= 2}
				<span class="loader-label">{progress}<span class="loader-pct">%</span></span>
			{/if}
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
		gap: 2.5rem;
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
		min-height: 3.25rem;
		opacity: 0;
		transition: opacity 0.38s ease;
	}

	.loader-milestone.visible {
		opacity: 1;
	}

	.milestone-sub {
		font-size: 0.625rem;
		font-family: var(--font-heading);
		font-weight: 400;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--accent);
		line-height: 1;
	}

	.milestone-main {
		font-size: 1.625rem;
		font-family: var(--font-heading);
		font-weight: 400;
		letter-spacing: var(--tracking-tight);
		color: var(--dark);
		line-height: 1.1;
	}

	/* ── Progress bar ── */
	.loader-track {
		width: min(70vw, 54rem);
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
		position: absolute;
		right: 0;
		bottom: calc(100% + 9px);
		transform: translateX(50%);
		font-family: var(--font-heading);
		font-size: 0.6875rem;
		font-weight: 700;
		letter-spacing: var(--tracking-tight);
		color: var(--dark);
		white-space: nowrap;
		line-height: 1;
	}

	.loader-pct {
		font-size: 0.5625rem;
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
