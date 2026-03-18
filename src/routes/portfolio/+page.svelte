<script lang="ts">
import PageHero from '$lib/components/PageHero.svelte';
import StatsBar from '$lib/components/StatsBar.svelte';
import PortfolioGrid from '$lib/components/PortfolioGrid.svelte';
import CtaStrip from '$lib/components/CtaStrip.svelte';

const stats = [
{ num: '150', suffix: '+', label: 'Projects Completed' },
{ num: '3', label: 'Design Sectors' },
{ num: '12', suffix: '+', label: 'Industry Clients' },
{ num: '2022', label: 'Est. Kampala, Uganda' }
];

const projects = [
{ num: '01', cat: 'Corporate',   name: 'Executive Headquarters',    loc: 'Nakasero, Kampala',     label: 'Executive HQ' },
{ num: '02', cat: 'Residential', name: 'Luxury Lakeside Villa',      loc: 'Munyonyo, Kampala',     label: 'Lakeside Villa' },
{ num: '03', cat: 'Commercial',  name: "Premium Members' Lounge",    loc: 'Kololo, Kampala',       label: 'Premium Lounge' },
{ num: '04', cat: 'Residential', name: 'Penthouse Suite Redesign',   loc: 'Naguru, Kampala',       label: 'Penthouse Suite' },
{ num: '05', cat: 'Corporate',   name: 'C-Suite Boardroom Redesign', loc: 'Kampala CBD',           label: 'Boardroom' },
{ num: '06', cat: 'Commercial',  name: 'Boutique Hotel Lobby',       loc: 'Entebbe Road, Kampala', label: 'Hotel Lobby' },
{ num: '07', cat: 'Residential', name: 'Contemporary Apartment',     loc: 'Bugolobi, Kampala',     label: 'Contemporary Apt' },
{ num: '08', cat: 'Corporate',   name: 'Regional Office Fit-Out',    loc: 'Ntinda, Kampala',       label: 'Office Fit-Out' },
{ num: '09', cat: 'Commercial',  name: 'Restaurant &amp; Bar',       loc: 'Kisementi, Kampala',    label: 'Restaurant &amp; Bar' }
];
</script>

<svelte:head>
<title>Portfolio — Enchen Creative Hub</title>
</svelte:head>

<PageHero
breadcrumb="Portfolio"
eyebrow="Our Work"
title="150+ Projects.<br><em>One Standard.</em>"
sub="Every project in our portfolio represents a brief understood, a challenge solved, and a space transformed. Browse our work across corporate, residential, and commercial sectors."
/>
<StatsBar {stats} />
<PortfolioGrid items={projects} />
<CtaStrip
eyebrow="Start Your Project"
title="Ready to Add Your Space<br><em>to This Portfolio?</em>"
body="Get in touch to discuss your vision — we'll respond within one business day with a tailored proposal."
primaryHref="/contact"
primaryLabel="Start a Project"
secondaryHref="/services"
secondaryLabel="Our Services"
/>
