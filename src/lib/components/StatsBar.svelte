<script lang="ts">
	let { stats }: { stats: { num: string; suffix?: string; label: string }[] } = $props();
</script>

<div class="stats-bar-wrap">
	<div class="stats-bar reveal">
		{#each stats as s}
			<div class="sb-item">
				<div class="sb-num">{s.num}{#if s.suffix}<em>{s.suffix}</em>{/if}</div>
				<div class="sb-lbl">{s.label}</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.stats-bar-wrap {
		background: var(--black);
		padding: 0 64px 80px;
	}
	.stats-bar {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1px;
		background: rgba(255, 255, 255, 0.04);
	}
	.sb-item {
		background: var(--black);
		padding: 48px 40px;
		text-align: center;
		border-top: 1px solid rgba(255, 255, 255, 0.04);
	}
	.sb-num {
		font-family: var(--font-heading);
		font-size: 44px;
		font-weight: 700;
		letter-spacing: -0.05em;
		color: var(--white);
		line-height: 1;
		margin-bottom: 12px;
	}
	.sb-num :global(em) {
		color: var(--gold);
		font-style: normal;
	}
	.sb-lbl {
		font-size: 9px;
		letter-spacing: 3px;
		text-transform: uppercase;
		color: rgba(255, 255, 255, 0.28);
	}
	@media (max-width: 1024px) {
		.stats-bar-wrap { padding: 0 32px 64px; }
		.stats-bar { grid-template-columns: 1fr 1fr; }
	}
	@media (max-width: 640px) {
		.stats-bar { grid-template-columns: 1fr 1fr; }
	}
</style>
