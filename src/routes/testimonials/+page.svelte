<script lang="ts">
	import PageHero from "$lib/components/PageHero.svelte"
	import FeaturedQuote from "$lib/components/FeaturedQuote.svelte"
	import StatsBar from "$lib/components/StatsBar.svelte"
	import TestimonialsFullGrid from "$lib/components/TestimonialsFullGrid.svelte"
	import TestimonialsClients from "$lib/components/TestimonialsClients.svelte"
	import CtaStrip from "$lib/components/CtaStrip.svelte"

	const stats = [
		{ num: "100", suffix: "%", label: "On-Time Delivery" },
		{ num: "4.9", suffix: "/5", label: "Average Client Rating" },
		{ num: "150", suffix: "+", label: "Projects Completed" },
		{ num: "6", suffix: "+", label: "Industries Served" },
	]

	const testimonials = [
		{
			initials: "JM",
			body: "Enchen delivered our new headquarters on time, within budget, and beyond expectation. They handled every complexity with calm professionalism. The result is a space that our board, our staff, and our clients all comment on every single time they visit. I would not hesitate to recommend them to any serious organisation.",
			name: "James Mwangi",
			role: "CEO, TeleCom East Africa Ltd",
		},
		{
			initials: "AO",
			body: "Working with Enchen was a revelation. From the very first meeting, it was clear they genuinely cared about understanding what we wanted our home to feel like — not just what we wanted it to look like. The result is a home that feels perfectly designed for us. We are constantly receiving compliments from guests.",
			name: "Amara Osei",
			role: "Private Residential Client",
		},
		{
			initials: "SN",
			body: "The 3D visualisations Enchen produced for our development were extraordinary. They allowed us to make confident decisions about design long before construction began — and they made our sales presentations significantly more compelling. Revenue from pre-sales was up 40% compared to our previous project. A genuinely transformative service.",
			name: "Sarah Nakigozi",
			role: "Director, Nakigozi Property Development",
		},
		{
			initials: "RS",
			body: "We engaged Enchen to redesign our regional office ahead of a major expansion. They not only delivered a space we are proud of — they helped us think more carefully about how our physical environment reflects our brand and supports our culture. The project management was flawless. Every deadline met, every decision documented.",
			name: "Robert Ssebayiga",
			role: "Managing Director, Victoria Group",
		},
		{
			initials: "FH",
			body: "Enchen transformed our boutique hotel lobby from a forgettable arrival experience into a true destination. Guests now specifically comment on the lobby in their reviews — it has become part of our brand identity. The team understood the hospitality brief intuitively, and the level of detail in the execution is remarkable.",
			name: "Fatima Hassan",
			role: "Owner, The Kololo Boutique Hotel",
		},
		{
			initials: "MO",
			body: "I have worked with design firms across three countries, and Enchen compares very favourably with any of them. Their approach is genuinely collaborative — they listen carefully, they challenge constructively, and they deliver with precision. Our new regional headquarters has made a real difference to how we attract and retain talent.",
			name: "Michael Odongo",
			role: "Head of Operations, Pan-African Finance Group",
		},
	]

	const clients = [
		{ src: "/images/clients/stanbic-bank.webp", alt: "Stanbic Bank" },
		{ src: "/images/clients/mtn.webp", alt: "MTN" },
		{ src: "/images/clients/airtel.webp", alt: "Airtel" },
		{ src: "/images/clients/united-nations.webp", alt: "United Nations" },
		{ src: "/images/clients/fao.webp", alt: "FAO" },
		{ src: "/images/clients/nita.webp", alt: "NITA" },
		{ src: "/images/clients/caa.webp", alt: "CAA" },
		{ src: "/images/clients/pwc.webp", alt: "PwC" },
		{ src: "/images/clients/victoria-university.webp", alt: "Victoria University" },
		{ src: "/images/clients/finance-trust-bank.webp", alt: "Finance Trust Bank" },
		{ src: "/images/clients/pride-bank.webp", alt: "Pride Bank" },
		{ src: "/images/clients/ucc.webp", alt: "UCC" },
		{ src: "/images/clients/wilken-telecom.webp", alt: "Wilken Telecom" },
		{ src: "/images/clients/padre-pio.webp", alt: "Padre Pio" },
		{ src: "/images/clients/pmh.webp", alt: "PMH" },
		{ src: "/images/clients/client-1.webp", alt: "Client" },
	]
</script>

<svelte:head>
	<title>Testimonials — Enchen Creative Hub</title>
</svelte:head>

<PageHero
	breadcrumb="Testimonials"
	eyebrow="Client Stories"
	title="Voices That<br><em>Define Our Work</em>"
	sub="The measure of our work is not what we say about it — it is what our clients say. Here is what they have shared about their experience working with Enchen Creative Hub." />
<FeaturedQuote
	text="Enchen did not just redesign our office — they transformed how our entire team feels about coming to work. The space they created communicates exactly who we are as a company. It is simply exceptional."
	name="James Mwangi"
	role="CEO, TeleCom East Africa Ltd" />
<!-- <StatsBar {stats} /> -->
<TestimonialsFullGrid items={testimonials} />
<TestimonialsClients {clients} />
<CtaStrip
	eyebrow="Your Turn"
	title="Become Our Next<br><em>Success Story</em>"
	body="Join the growing number of organisations and homeowners who trust Enchen Creative Hub to transform their spaces. Get in touch to begin."
	primaryHref="/contact"
	primaryLabel="Start a Project"
	secondaryHref="/portfolio"
	secondaryLabel="View Our Work" />
