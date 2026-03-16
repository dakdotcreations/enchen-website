<script lang="ts">
	let activeFilter = $state('All');
	const filters = ['All', 'Corporate', 'Residential', 'Commercial'];

	const projects = [
		{ num: '01', cat: 'Corporate',    name: 'Executive Headquarters',     loc: 'Nakasero, Kampala',       label: 'Executive HQ' },
		{ num: '02', cat: 'Residential',  name: 'Luxury Lakeside Villa',       loc: 'Munyonyo, Kampala',       label: 'Lakeside Villa' },
		{ num: '03', cat: 'Commercial',   name: "Premium Members' Lounge",     loc: 'Kololo, Kampala',         label: 'Premium Lounge' },
		{ num: '04', cat: 'Residential',  name: 'Penthouse Suite Redesign',    loc: 'Naguru, Kampala',         label: 'Penthouse Suite' },
		{ num: '05', cat: 'Corporate',    name: 'C-Suite Boardroom Redesign',  loc: 'Kampala CBD',             label: 'Boardroom' },
		{ num: '06', cat: 'Commercial',   name: 'Boutique Hotel Lobby',        loc: 'Entebbe Road, Kampala',   label: 'Hotel Lobby' },
		{ num: '07', cat: 'Residential',  name: 'Contemporary Apartment',      loc: 'Bugolobi, Kampala',       label: 'Contemporary Apt' },
		{ num: '08', cat: 'Corporate',    name: 'Regional Office Fit-Out',     loc: 'Ntinda, Kampala',         label: 'Office Fit-Out' },
		{ num: '09', cat: 'Commercial',   name: 'Restaurant &amp; Bar',        loc: 'Kisementi, Kampala',      label: 'Restaurant &amp; Bar' }
	];
</script>

<svelte:head>
	<title>Portfolio — Enchen Creative Hub</title>
</svelte:head>

<!-- Page Hero -->
<div class="page-hero">
	<div class="page-hero-grid"></div>
	<div class="ph-content">
		<div class="ph-breadcrumb"><a href="/">Home</a><span class="ph-breadcrumb-sep">/</span>Portfolio</div>
		<div class="ph-eyebrow">Our Work</div>
		<h1 class="ph-title">150+ Projects.<br><em>One Standard.</em></h1>
		<p class="ph-sub">Every project in our portfolio represents a brief understood, a challenge solved, and a space transformed. Browse our work across corporate, residential, and commercial sectors.</p>
	</div>
</div>

<!-- Stats Bar -->
<div class="stats-bar-wrap">
	<div class="stats-bar reveal">
		<div class="sb-item"><div class="sb-num">150<em>+</em></div><div class="sb-lbl">Projects Completed</div></div>
		<div class="sb-item"><div class="sb-num">3</div><div class="sb-lbl">Design Sectors</div></div>
		<div class="sb-item"><div class="sb-num">12<em>+</em></div><div class="sb-lbl">Industry Clients</div></div>
		<div class="sb-item"><div class="sb-num">2022</div><div class="sb-lbl">Est. Kampala, Uganda</div></div>
	</div>
</div>

<!-- Portfolio Full Grid -->
<div class="port-full-section">
	<div class="s-label reveal">Selected Projects</div>
	<div class="port-filter reveal">
		{#each filters as f}
			<button class="f-btn" class:active={activeFilter === f} onclick={() => (activeFilter = f)}>{f}</button>
		{/each}
	</div>
	<div class="port-full-grid reveal">
		{#each projects as p}
			{#if activeFilter === 'All' || activeFilter === p.cat}
				<div class="port-full-item">
					<div class="port-full-img">
						<div class="port-full-badge">{p.cat}</div>
						<div class="port-item-placeholder">
							<div class="pip-code">{p.num}</div>
							<div class="pip-label">{@html p.label}</div>
						</div>
						<div class="port-full-overlay">
							<div class="port-full-cat">{p.cat}</div>
							<div class="port-full-name">{@html p.name}</div>
							<div class="port-full-loc">{p.loc}</div>
						</div>
					</div>
				</div>
			{/if}
		{/each}
	</div>
</div>

<!-- CTA Strip -->
<div class="cta-strip">
	<div class="s-label reveal">Start Your Project</div>
	<h2 class="cta-title reveal">Ready to Add Your Space<br><em>to This Portfolio?</em></h2>
	<p class="cta-body reveal">Get in touch to discuss your vision — we'll respond within one business day with a tailored proposal.</p>
	<div class="cta-actions reveal">
		<a href="/contact" class="btn-primary">Start a Project</a>
		<a href="/services" class="btn-outline">Our Services</a>
	</div>
</div>
