<script lang="ts">
	import PageHero from "$lib/components/PageHero.svelte"
	import StatsBar from "$lib/components/StatsBar.svelte"
	import PortfolioGrid from "$lib/components/PortfolioGrid.svelte"
	import CtaStrip from "$lib/components/CtaStrip.svelte"
	import { projects } from "$lib/projects/index"

	const stats = [
		{ num: "150", suffix: "+", label: "Projects Completed" },
		{ num: "3", label: "Design Sectors" },
		{ num: "12", suffix: "+", label: "Industry Clients" },
		{ num: "2022", label: "Est. Kampala, Uganda" },
	]
</script>

<svelte:head>
	<title>Portfolio — Enchen Creative Hub</title>
</svelte:head>

<PageHero
	breadcrumb="Portfolio"
	eyebrow="Our Work"
	title="150+ Projects.<br><em>One Standard.</em>"
	sub="Every project in our portfolio represents a brief understood, a challenge solved, and a space transformed. Browse our work across corporate, residential, and commercial sectors." />
<!-- <StatsBar {stats} /> -->
<PortfolioGrid items={projects} />
<CtaStrip
	eyebrow="Start Your Project"
	title="Ready to Add Your Space<br><em>to This Portfolio?</em>"
	body="Get in touch to discuss your vision we'll respond within one business day with a tailored proposal."
	primaryHref="/contact"
	primaryLabel="Start a Project"
	secondaryHref="/services"
	secondaryLabel="Our Services" />
