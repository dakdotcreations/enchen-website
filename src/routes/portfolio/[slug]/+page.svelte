<script lang="ts">
	import type { PageData } from './$types';
	import { projects } from '$lib/projects/index';

	let { data }: { data: PageData } = $props();

	// Find neighbours for prev/next navigation
	const idx = projects.findIndex((p) => p.slug === data.project.slug);
	const prev = idx > 0 ? projects[idx - 1] : null;
	const next = idx < projects.length - 1 ? projects[idx + 1] : null;

	function cap(s: string) {
		return s.charAt(0).toUpperCase() + s.slice(1);
	}
</script>

<svelte:head>
	<title>{data.project.title} — Enchen Creative Hub</title>
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
			<a href="/portfolio" class="proj-back">← All Projects</a>
			<div class="proj-tag-label">{cap(data.project.tag)}</div>
			<h1 class="proj-title">{data.project.title}</h1>
			<div class="proj-loc">{data.project.location}</div>
		</div>
	</div>
</section>

<!-- Content blocks -->
<div class="proj-content">
	{#each data.project.content as block}
		{#if block.type === 'text'}
			<div class="proj-block pblock-text reveal">
				{#if block.heading}<h2 class="pblock-heading">{block.heading}</h2>{/if}
				<div class="pblock-body">{@html block.body}</div>
			</div>

		{:else if block.type === 'image'}
			<figure class="proj-block pblock-image reveal">
				{#if block.src}
					<img src={block.src} alt={block.alt} />
				{:else}
					<div class="pblock-img-placeholder" aria-label={block.alt}></div>
				{/if}
				{#if block.caption}<figcaption class="pblock-caption">{block.caption}</figcaption>{/if}
			</figure>

		{:else if block.type === 'video'}
			<figure class="proj-block pblock-video reveal">
				<div class="pblock-video-wrap">
					<iframe src={block.src} title="Project video" allowfullscreen loading="lazy"></iframe>
				</div>
				{#if block.caption}<figcaption class="pblock-caption">{block.caption}</figcaption>{/if}
			</figure>

		{:else if block.type === 'columns'}
			<div class="proj-block pblock-columns reveal">
				{#each block.items as col}
					<div class="pblock-col">
						{#if col.type === 'text'}
							{#if col.heading}<h3 class="pblock-heading pblock-heading--sm">{col.heading}</h3>{/if}
							<div class="pblock-body">{@html col.body}</div>

						{:else if col.type === 'image'}
							<figure class="pblock-col-fig">
								{#if col.src}
									<img src={col.src} alt={col.alt} />
								{:else}
									<div class="pblock-img-placeholder pblock-img-placeholder--col" aria-label={col.alt}></div>
								{/if}
								{#if col.caption}<figcaption class="pblock-caption">{col.caption}</figcaption>{/if}
							</figure>

						{:else if col.type === 'video'}
							<figure class="pblock-col-fig">
								<div class="pblock-video-wrap">
									<iframe src={col.src} title="Project video" allowfullscreen loading="lazy"></iframe>
								</div>
								{#if col.caption}<figcaption class="pblock-caption">{col.caption}</figcaption>{/if}
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
				<span class="proj-nav-dir">← Previous</span>
				<span class="proj-nav-name">{prev.title}</span>
			</a>
		{:else}
			<span></span>
		{/if}

		<a href="/portfolio" class="proj-nav-all">All Projects</a>

		{#if next}
			<a href="/portfolio/{next.slug}" class="proj-nav-link proj-nav-link--next">
				<span class="proj-nav-dir">Next →</span>
				<span class="proj-nav-name">{next.title}</span>
			</a>
		{:else}
			<span></span>
		{/if}
	</div>
</nav>
