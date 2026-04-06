<script lang="ts">
	import HeroSlideshow from "$lib/components/HeroSlideshow.svelte"
	import Marquee from "$lib/components/Marquee.svelte"
	import HomeServices from "$lib/components/HomeServices.svelte"
	import HomeAbout from "$lib/components/HomeAbout.svelte"
	import HomePortfolio from "$lib/components/HomePortfolio.svelte"
	import HomeClients from "$lib/components/HomeClients.svelte"
	import HomeTestimonials from "$lib/components/HomeTestimonials.svelte"
	import HomeContact from "$lib/components/HomeContact.svelte"
	import { projects } from "$lib/projects/index"

	const featuredSlugs = [
		'wilken-telecom-offices',
		'padre-pio-insurance',
		'finance-trust-bank',
	];
	const featuredSlides = projects.filter((p) => featuredSlugs.includes(p.slug));
</script>

<svelte:head>
	<title>Enchen Creative Hub, Architectural &amp; Interior Design | Commercial Spaces</title>
</svelte:head>

<HeroSlideshow slides={featuredSlides} />
<Marquee />
<HomeServices />
<HomeAbout />
<HomePortfolio />
<HomeClients />
<HomeTestimonials />
<HomeContact />
