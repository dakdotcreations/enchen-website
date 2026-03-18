<script lang="ts">
import PageHero from '$lib/components/PageHero.svelte';
import StatsBar from '$lib/components/StatsBar.svelte';
import AboutStory from '$lib/components/AboutStory.svelte';
import MissionVision from '$lib/components/MissionVision.svelte';
import WhyEnchen from '$lib/components/WhyEnchen.svelte';
import TeamSection from '$lib/components/TeamSection.svelte';
import OurTimeline from '$lib/components/OurTimeline.svelte';
import CtaStrip from '$lib/components/CtaStrip.svelte';

const stats = [
{ num: '150', suffix: '+', label: 'Projects Delivered' },
{ num: '3', suffix: '+', label: 'Years of Excellence' },
{ num: '3', label: 'Core Markets' },
{ num: '100', suffix: '%', label: 'Client Satisfaction' }
];
</script>

<svelte:head>
<title>About — Enchen Creative Hub</title>
</svelte:head>

<PageHero
breadcrumb="About"
eyebrow="Our Story"
title="The Studio Behind<br><em>the Ideas</em>"
sub="Founded in the heart of Kampala, Enchen Creative Hub is an architectural and interior design firm built on the belief that great spaces do more than look beautiful — they elevate how people live, work, and connect."
hasOrb={true}
/>
<StatsBar {stats} />
<AboutStory />
<MissionVision />
<WhyEnchen />
<TeamSection />
<OurTimeline />
<CtaStrip
eyebrow="Ready to Begin?"
title="Let's Create Something<br><em>Remarkable Together</em>"
body="Tell us about your project — we'll respond within one business day with a tailored proposal and initial consultation."
primaryHref="/contact"
primaryLabel="Start a Project"
secondaryHref="/portfolio"
secondaryLabel="View Our Work"
/>
