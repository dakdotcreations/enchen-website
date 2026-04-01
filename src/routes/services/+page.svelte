<script lang="ts">
	import PageHero from "$lib/components/PageHero.svelte"
	import ServicesDetail from "$lib/components/ServicesDetail.svelte"
	import ServicesProcess from "$lib/components/ServicesProcess.svelte"
	import FaqList from "$lib/components/FaqList.svelte"
	import CtaStrip from "$lib/components/CtaStrip.svelte"

	const faqs = [
		{
			q: "How do I start a project with Enchen Creative Hub?",
			a: "The simplest way is to fill in our contact form or call us directly. We'll arrange an initial consultation — either in person at your site or by video call — to understand your project, discuss your vision, and outline how we can help. There is no obligation at this stage.",
		},
		{
			q: "How long does a typical project take?",
			a: "Project timelines vary significantly depending on the scope. A single-room interior redesign might be completed in 4–6 weeks. A full corporate office fit-out typically takes 3–5 months. New-build architectural projects can run 8–18 months. During your initial consultation, we will give you a specific programme estimate based on your project's requirements.",
		},
		{
			q: "Do you work outside of Kampala?",
			a: "Yes. While our studio is based in Ntinda, Kampala, we have delivered projects across Uganda and in neighbouring East African markets. For projects outside Kampala, we structure our involvement to suit the project's location — combining remote design management with scheduled on-site visits at key project milestones.",
		},
		{
			q: "What is your fee structure?",
			a: "Our fees are structured to reflect the scope and complexity of each project. Depending on the engagement, we work on a fixed-fee, percentage-of-project-cost, or retainer basis. We are transparent about our fees from the outset and present a clear fee proposal before any work begins. There are no hidden charges.",
		},
		{
			q: "Do you provide 3D visualisations as a standalone service?",
			a: "Yes. Our visualisation team can produce photorealistic renders and virtual walkthroughs for designs created either by us or by an external architect or designer. This service is particularly useful for property developers, real estate marketing campaigns, and client presentation materials.",
		},
	]
</script>

<svelte:head>
	<title>Services — Enchen Creative Hub</title>
</svelte:head>

<PageHero
	breadcrumb="Services"
	eyebrow="What We Do"
	title="End-to-End<br><em>Design Excellence</em>"
	sub="From the first concept sketch to the final walk-through, we provide a complete range of architectural and interior design services each one delivered with the same standard of precision and care." />

<ServicesDetail />

<div class="svc-faq-section">
	<div class="s-label centered">Common Questions</div>
	<h2 class="s-title" style="text-align:center;">
		Everything You<br />Need to <span class="h-blue">Know</span>
	</h2>
	<div class="svc-faq-inner">
		<FaqList items={faqs} />
	</div>
</div>

<CtaStrip
	eyebrow="Let's Talk"
	title="Ready to Discuss<br><em>Your Project?</em>"
	body="Tell us what you have in mind we will respond within one business day with an initial consultation proposal."
	primaryHref="/contact"
	primaryLabel="Get in Touch"
	secondaryHref="/portfolio"
	secondaryLabel="See Our Work" />

<style>
	.svc-faq-section {
		background: var(--off-white);
		padding: 100px 64px 120px;
	}
	.svc-faq-inner {
		margin-top: 56px;
	}
	@media (max-width: 1024px) {
		.svc-faq-section {
			padding: 64px 32px 80px;
		}
	}
	@media (max-width: 640px) {
		.svc-faq-section {
			padding: 56px 20px 64px;
		}
	}
</style>
