<script lang="ts">
	import HeroSlideshow from "$lib/components/HeroSlideshow.svelte"
	import Marquee from "$lib/components/Marquee.svelte"
	import HomeServices from "$lib/components/HomeServices.svelte"
	import HomeAbout from "$lib/components/HomeAbout.svelte"
	import HomePortfolio from "$lib/components/HomePortfolio.svelte"
	import HomeClients from "$lib/components/HomeClients.svelte"
	import HomeTestimonials from "$lib/components/HomeTestimonials.svelte"
	import HomeContact from "$lib/components/HomeContact.svelte"
	import HomeAboutStrip from "$lib/components/HomeAboutStrip.svelte"
	import { projects } from "$lib/projects/index"

	const featuredSlugs: { slug: string; image?: string }[] = [
		{ slug: 'wilken-telecom-offices', image: '/images/projects/wilkentel/1.webp' },
		{ slug: 'padre-pio-insurance', image: "/images/projects/padrepio/2.webp" },
		{ slug: 'finance-trust-bank', image: "/images/projects/finance-trust-bank/10.webp" },
		{ slug: 'nita-reception-lounge', image: "/images/projects/nita-reception-lounge/1.webp" },
	];
	const featuredSlides = featuredSlugs.flatMap(({ slug, image }) => {
		const project = projects.find((p) => p.slug === slug);
		if (!project) return [];
		return [image ? { ...project, thumbnail: image } : project];
	});
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
<HomeAboutStrip />
