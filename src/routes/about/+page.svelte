<script lang="ts">
	import PageHero from "$lib/components/PageHero.svelte"
	import StatsBar from "$lib/components/StatsBar.svelte"
	import AboutStory from "$lib/components/AboutStory.svelte"
	import MissionVision from "$lib/components/MissionVision.svelte"
	import WhyEnchen from "$lib/components/WhyEnchen.svelte"
	import TeamSection from "$lib/components/TeamSection.svelte"
	import OurTimeline from "$lib/components/OurTimeline.svelte"
	import HomeProcess from "$lib/components/HomeProcess.svelte"
	import CtaStrip from "$lib/components/CtaStrip.svelte"
</script>

<svelte:head>
	<title>About — Enchen Creative Hub</title>
</svelte:head>

<PageHero
	breadcrumb="About"
	eyebrow="Our Story"
	title="The Studio Behind<br><em>the Ideas</em>"
	sub="Founded in the heart of Kampala, Enchen Creative Hub is an architectural and interior design firm built on the belief that great spaces do more than look beautiful — they elevate how people live, work, and connect."
	hasOrb={true} />
<AboutStory />
<MissionVision />
<WhyEnchen />
<OurTimeline />
<HomeProcess />
<CtaStrip
	eyebrow="Ready to Begin?"
	title="Let's Create Something<br><em>Remarkable Together</em>"
	body="Tell us about your project we'll respond within one business day."
	primaryHref="/contact"
	primaryLabel="Start a Project"
	secondaryHref="/portfolio"
	secondaryLabel="View Our Work" />
