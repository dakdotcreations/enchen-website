<script lang="ts">
	
	import PortfolioGrid from "$lib/components/PortfolioGrid.svelte"
	import CtaStrip from "$lib/components/CtaStrip.svelte"
	import { projects } from "$lib/projects/index"
	import { loadGsap } from '$lib/utils/useGsap'

	
</script>

<svelte:head>
	<title>Portfolio, Enchen Creative Hub</title>
</svelte:head>


<PortfolioGrid items={projects} />
<CtaStrip
	eyebrow="Start Your Project"
	title="Ready to Add Your Space<br><em>to This Portfolio?</em>"
	body="Get in touch to discuss your vision we'll respond within one business day with a tailored proposal."
	primaryHref="/contact"
	primaryLabel="Start a Project"
	secondaryHref="/services"
	secondaryLabel="Our Services" />
