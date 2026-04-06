<script lang="ts">
	import { slideIn } from "$lib/animations/anims";

	let grid: HTMLDivElement;

	$effect(() => {
        slideIn(grid, { top: 50, start: 'top 90%', end: 'top 60%' });
    })
</script>

<section style="background: var(--off-white);">
	<div class="s-label">Why Choose Us</div>
	<h2 class="s-title">What Sets Us <span class="h-blue">Apart</span></h2>
	<div class="why-grid" bind:this={grid}>
		<div class="why-item slide-in">
			<div class="why-num">01</div>
			<div class="why-title">End-to-End Service</div>
			<div class="why-body">
				We handle every phase, from conceptual design and 3D visualisation through to
				procurement, construction supervision, and final handover. One team, complete
				accountability.
			</div>
		</div>
		<div class="why-item slide-in">
			<div class="why-num">02</div>
			<div class="why-title">Local Expertise</div>
			<div class="why-body">
				Rooted in Kampala, we understand the East African context, climate, culture,
				materials, and the regulatory environment, giving our projects depth that
				international firms cannot replicate.
			</div>
		</div>
		<div class="why-item slide-in">
			<div class="why-num">03</div>
			<div class="why-title">Tailored Approach</div>
			<div class="why-body">
				Every brief is addressed with fresh eyes
				and a design strategy built specifically around your goals, budget, and timeline.
			</div>
		</div>
		<div class="why-item slide-in">
			<div class="why-num">04</div>
			<div class="why-title">Transparent Process</div>
			<div class="why-body">
				We believe in clear communication and honest timelines. You will always know where
				your project stands, who is responsible for what, and what comes next.
			</div>
		</div>
	</div>
</section>

<style>
	.why-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
	}
	.why-item {
		padding: var(--space-8);
		margin: -0.5px;
		transition: background 0.3s;
        border-radius: var(--space-8);
	}
	.why-item:hover {
		background: var(--white);
	}
	.why-num {
		font-family: var(--font-heading);
		font-size: var(--text-2xl);
		font-weight: 300;
		color: var(--accent);
		opacity: 0.45;
		margin-bottom: 16px;
		line-height: 1;
	}
	.why-title {
		font-size: var(--text-base);
		text-transform: uppercase;
		color: var(--text);
		margin-bottom: var(--space-3);
		font-weight: 700;
	}
	.why-body {
		font-size: var(--text-md);
		line-height: 1.85;
		color: var(--black-60);
	}
	@media (max-width: 1024px) {
		.why-grid {
			grid-template-columns: 1fr 1fr;
		}
	}
	@media (max-width: 640px) {
		.why-grid {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
