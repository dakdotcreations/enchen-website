<script lang="ts">
	import { slideIn } from "$lib/animations/anims";

	const steps = [
		{
			num: '01',
			title: 'Discovery Phase',
			desc: "Define the client's requirements, budget, and project scope, including site measurements and assessment."
		},
		{
			num: '02',
			title: 'Concept Development',
			desc: 'Create mood boards and concept designs to establish the overall look, feel, and direction of the space.'
		},
		{
			num: '03',
			title: 'Design Development',
			desc: 'Produce detailed 3D renderings, architectural drawings, and Bills of Quantities (BOQs) for project execution.'
		},
		{
			num: '04',
			title: 'Procurement',
			desc: 'Source and procure all required furniture, materials, and finishes in line with the approved design.'
		},
		{
			num: '05',
			title: 'Execution & Supervision',
			desc: 'Manage and supervise on-site works to ensure construction aligns with approved drawings and 3D visualizations.'
		},
		{
			num: '06',
			title: 'Installation & Handover',
			desc: 'Install furniture and décor, address any final defects, and formally hand over the completed project.'
		}
	];

	let stepsContainer: HTMLDivElement;

    $effect(() => {
        slideIn(stepsContainer, { top: 100, start: 'top 90%', end: 'top 30%', markers: false });
    });
	
</script>

<section id="process">
	<div class="s-label">How We Work</div>
	<h2 class="s-title">Our <span class="h-mag">Process</span></h2>

	<div class="process-track" bind:this={stepsContainer}>
		{#each steps as step, idx}
			<div class="p-step slide-in">
				<h3 class="p-title">
                    <span class="p-num">{step.num}.</span>
                    {step.title}
                </h3>
				<p class="p-desc">{step.desc}</p>
			</div>
		{/each}
	</div>
</section>

<style>
	#process {
		background: var(--off-white);
		padding: var(--padding-global);
	}

	.process-track {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-8);
		margin-top: 4.5rem;
	}

	.p-step {
		position: relative;
		overflow: hidden;
		display: flex;
		flex-direction: column;
        gap: var(--space-4);

		&:hover{
            .p-num {
                color: var(--accent);
            }
        }

	}

	.p-num {
		position: relative;
		font-family: var(--font-heading);
		font-weight: 700;
		color: var(--black-60);
		transition: color 0.3s ease;
	}

	.p-title {
		position: relative;
		z-index: 1;
		font-family: var(--font-heading);
		font-size: var(--text-xl);
		font-weight: 700;
		letter-spacing: var(--tracking-tight);
		color: var(--text);
		line-height: 1.2;
	}

	.p-desc {
		position: relative;
		z-index: 1;
		font-size: var(--text-md);
		line-height: 1.8;
		color: var(--black-60);
	}

	/* ── Tablet ── */
	@media (max-width: 1024px) {
		#process {
			padding: 5rem 2.5rem;
		}

		.process-track {
			grid-template-columns: repeat(2, 1fr);
		}

		.p-step {
			padding: 2rem;
		}
	}

	/* ── Mobile ── */
	@media (max-width: 640px) {
		#process {
			padding: 4rem 1.5rem;
		}

		.process-track {
			grid-template-columns: 1fr;
		}

		.p-step {
			padding: 1.75rem;
		}
	}
</style>


