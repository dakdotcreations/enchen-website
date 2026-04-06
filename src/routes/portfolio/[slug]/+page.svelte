<script lang="ts">
	import type { PageData } from "./$types"
	import { projects } from "$lib/projects/index"

	import { MoveLeft, MoveRight } from "@lucide/svelte"

	let { data }: { data: PageData } = $props()

	// Find neighbours for prev/next navigation
	const idx = projects.findIndex((p) => p.slug === data.project.slug)
	const prev = idx > 0 ? projects[idx - 1] : null
	const next = idx < projects.length - 1 ? projects[idx + 1] : null

	function cap(s: string) {
		return s.charAt(0).toUpperCase() + s.slice(1)
	}
</script>

<svelte:head>
	<title>{data.project.title}, Enchen Creative Hub</title>
</svelte:head>

<!-- Hero -->
<section class="proj-hero">
	{#if data.project.thumbnail}
		<img src={data.project.thumbnail} alt={data.project.title} class="proj-hero-img" />
	{:else}
		<div class="proj-hero-placeholder"></div>
	{/if}
	<div class="proj-hero-overlay">
		<div class="proj-hero-inner">
			<a href="/portfolio" class="proj-back"><MoveLeft size={16} /> All Projects</a>
			<div class="proj-tag-label">{cap(data.project.tag)}</div>
			<h1 class="proj-title">{data.project.title}</h1>
			<div class="proj-loc">{data.project.location}</div>
		</div>
	</div>
</section>

<!-- Content blocks -->
<div class="proj-content">
	{#each data.project.content as block}
		{#if block.type === "text"}
			<div class="proj-block pblock-text">
				{#if block.heading}<h2 class="pblock-heading">{block.heading}</h2>{/if}
				<div class="pblock-body">{@html block.body}</div>
			</div>
		{:else if block.type === "image"}
			<figure class="proj-block pblock-image">
				{#if block.src}
					<img src={block.src} alt={block.alt} />
				{:else}
					<div class="pblock-img-placeholder" aria-label={block.alt}></div>
				{/if}
				{#if block.caption}<figcaption class="pblock-caption">
						{block.caption}
					</figcaption>{/if}
			</figure>
		{:else if block.type === "video"}
			<figure class="proj-block pblock-video">
				<div class="pblock-video-wrap">
					<iframe src={block.src} title="Project video" allowfullscreen loading="lazy"
					></iframe>
				</div>
				{#if block.caption}<figcaption class="pblock-caption">
						{block.caption}
					</figcaption>{/if}
			</figure>
		{:else if block.type === "columns"}
			<div class="proj-block pblock-columns">
				{#each block.items as col}
					<div class="pblock-col">
						{#if col.type === "text"}
							{#if col.heading}<h3 class="pblock-heading pblock-heading--sm">
									{col.heading}
								</h3>{/if}
							<div class="pblock-body">{@html col.body}</div>
						{:else if col.type === "image"}
							<figure class="pblock-col-fig">
								{#if col.src}
									<img src={col.src} alt={col.alt} />
								{:else}
									<div
										class="pblock-img-placeholder pblock-img-placeholder--col"
										aria-label={col.alt}>
									</div>
								{/if}
								{#if col.caption}<figcaption class="pblock-caption">
										{col.caption}
									</figcaption>{/if}
							</figure>
						{:else if col.type === "video"}
							<figure class="pblock-col-fig">
								<div class="pblock-video-wrap">
									<iframe
										src={col.src}
										title="Project video"
										allowfullscreen
										loading="lazy"></iframe>
								</div>
								{#if col.caption}<figcaption class="pblock-caption">
										{col.caption}
									</figcaption>{/if}
							</figure>
						{/if}
					</div>
				{/each}
			</div>
		{/if}
	{/each}
</div>

<!-- Prev / Next navigation -->
<nav class="proj-nav">
	<div class="proj-nav-inner">
		{#if prev}
			<a href="/portfolio/{prev.slug}" class="proj-nav-link proj-nav-link--prev">
				<span class="proj-nav-dir"><MoveLeft size={16} /> Previous</span>
				<span class="proj-nav-name">{prev.title}</span>
			</a>
		{:else}
			<span></span>
		{/if}

		<a href="/portfolio" class="proj-nav-all">All Projects</a>

		{#if next}
			<a href="/portfolio/{next.slug}" class="proj-nav-link proj-nav-link--next">
				<span class="proj-nav-dir">Next <MoveRight size={16} /></span>
				<span class="proj-nav-name">{next.title}</span>
			</a>
		{:else}
			<span></span>
		{/if}
	</div>
</nav>

<style>
	/* ─────────────────────────────────────────────
   Project detail page
───────────────────────────────────────────── */
	.proj-hero {
		position: relative;
		height: 80vh;
		min-height: 30rem;
		overflow: hidden;
		background: var(--dark);

		& .proj-hero-img {
			position: absolute;
			inset: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
			opacity: 0.55;
		}

		& .proj-hero-placeholder {
			position: absolute;
			inset: 0;
			background: linear-gradient(135deg, var(--dark-mid) 0%, var(--dark) 100%);
		}

		& .proj-hero-overlay {
			position: absolute;
			inset: 0;
			background: linear-gradient(
				to top,
				var(--overlay-88) 0%,
				var(--overlay-0) 60%,
				transparent 100%
			);
			display: flex;
			align-items: flex-end;
		}

		@media (max-width: 40rem) {
			height: 70vh;
		}
	}

	.proj-hero-inner {
		padding: var(--space-16);
		width: 100%;

		@media (max-width: 64rem) {
			padding: var(--space-12) var(--space-8);
		}

		@media (max-width: 40rem) {
			padding: var(--space-8) var(--space-5);
		}
	}

	.proj-back {
		display: flex;
        align-items: center;
        gap: var(--space-1);
		font-size: var(--text-xs);
		letter-spacing: var(--tracking-sm);
		text-transform: uppercase;
		color: var(--white-60);
		text-decoration: none;
		margin-bottom: var(--space-7);
		transition: color 0.2s;

		&:hover {
			color: var(--accent);
		}
	}

	.proj-tag-label {
		font-size: var(--text-sm);
		letter-spacing: var(--tracking-sm);
		text-transform: uppercase;
		color: var(--accent);
		margin-bottom: var(--space-3);
        background-color: var(--black-80);
        width: fit-content;
        padding: var(--space-1) var(--space-2);
	}

	.proj-title {
		font-family: var(--font-heading);
		font-size: clamp(2.125rem, 5vw, 4.25rem);
		font-weight: 700;
		letter-spacing: var(--tracking-tight);
		color: var(--white);
		line-height: 1;
		margin: 0 0 var(--space-3);
	}

	.proj-loc {
		font-size: var(--text-base);
		color: var(--white-40);
		letter-spacing: 0.02em;
	}

	/* Content area */
	.proj-content {
        --max-width: 60rem;
        
		background: var(--off-white);
		padding: var(--space-24) var(--space-16) var(--space-30);
		display: flex;
		flex-direction: column;
		gap: var(--space-20);

		@media (max-width: 64rem) {
			padding: var(--space-16) var(--space-8) var(--space-20);
		}

		@media (max-width: 40rem) {
			padding: var(--space-12) var(--space-5) var(--space-12);
			gap: var(--space-12);
		}
	}

	.proj-block {
		max-width: var(--max-width);
	}

	/* Text block */
	.pblock-heading {
		font-family: var(--font-heading);
		font-size: clamp(1.375rem, 2.5vw, 2.125rem);
		font-weight: 700;
		letter-spacing: var(--tracking-tight);
		color: var(--text);
		margin: 0 0 var(--space-5);

		&--sm {
			font-size: clamp(1.0625rem, 1.8vw, 1.375rem);
			margin-bottom: var(--space-3);
		}
	}

	.pblock-body {
		font-size: var(--text-body);
		line-height: 1.8;
		color: var(--text-mid);

		& p {
			margin: 0 0 1em;

			&:last-child {
				margin: 0;
			}
		}
	}

	/* Image block */
	.pblock-image {
		width: 100%;
		margin: 0;

		& img {
			max-width: var(--max-width);
			width: 100%;
			height: auto;
			display: block;
			aspect-ratio: 16/9;
			object-fit: cover;
		}
	}

	.pblock-img-placeholder {
		max-width: var(--max-width);
		width: 100%;
		aspect-ratio: 16/9;
		background: var(--dark-card);

		&--col {
			aspect-ratio: 4/3;
		}
	}

	/* Video block */
	.pblock-video {
		max-width: var(--max-width);
		width: 100%;
		margin: 0;
	}

	.pblock-video-wrap {
		position: relative;
		padding-bottom: 56.25%;
		height: 0;
		overflow: hidden;
		background: var(--dark-card);

		& iframe {
			position: absolute;
			inset: 0;
			width: 100%;
			height: 100%;
			border: none;
		}
	}

	/* Columns block */
	.pblock-columns {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-12);
		max-width: var(--max-width);

		@media (max-width: 40rem) {
			grid-template-columns: 1fr;
			gap: var(--space-8);
		}
	}

	.pblock-col-fig {
		margin: 0;

		& img {
			width: 100%;
			height: auto;
			display: block;
			aspect-ratio: 4/3;
			object-fit: cover;
		}
	}

	/* Caption */
	.pblock-caption {
		font-size: var(--text-sm);
		color: var(--black-60);
		margin-top: var(--space-2);
		letter-spacing: 0.02em;
		display: block;
	}

	/* Prev / Next navigation */
	.proj-nav {
		background: var(--dark);
		padding: var(--space-16);
		border-top: 1px solid var(--white-20);
        width: 100%;

		@media (max-width: 64rem) {
			padding: var(--space-12) var(--space-8);
		}

		@media (max-width: 40rem) {
			padding: var(--space-10) var(--space-5);
		}
	}

	.proj-nav-inner {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		align-items: center;
		gap: var(--space-8);
        width: 100%;
		/* max-width: var(--max-width); */
		margin: 0 auto;

		@media (max-width: 40rem) {
			grid-template-columns: 1fr 1fr;
			grid-template-rows: auto auto;
		}
	}

	.proj-nav-link {
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
		text-decoration: none;
        
		&:hover {
            & .proj-nav-dir {
                color: var(--accent);
			}
            
			& .proj-nav-name {
                color: var(--white);
			}
		}
	}

    .proj-nav-link--next {
        align-items: flex-end;
    }

	.proj-nav-dir {
		font-size: var(--text-sm);
		letter-spacing: var(--tracking-sm);
		text-transform: uppercase;
		color: var(--white-40);
		transition: color 0.2s;
		display: flex;
		align-items: center;
		gap: var(--space-1);
	}

	.proj-nav-name {
		font-family: var(--font-heading);
		font-size: var(--text-lg);
		font-weight: 700;
		letter-spacing: var(--tracking-snug);
		color: var(--white-80);
		transition: color 0.2s;
	}

	.proj-nav-all {
		font-size: var(--text-sm);
		letter-spacing: var(--tracking-sm);
		text-transform: uppercase;
		color: var(--white-40);
		text-decoration: none;
		text-align: center;
		transition: color 0.2s;
		white-space: nowrap;

		&:hover {
			color: var(--accent);
		}

		@media (max-width: 40rem) {
			grid-column: 1 / -1;
			order: -1;
			margin-bottom: var(--space-2);
		}
	}
</style>
