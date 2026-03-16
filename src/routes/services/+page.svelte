<script lang="ts">
	let openFaq = $state<number | null>(null);
	function toggleFaq(i: number) { openFaq = openFaq === i ? null : i; }

	const faqs = [
		{
			q: 'How do I start a project with Enchen Creative Hub?',
			a: 'The simplest way is to fill in our contact form or call us directly. We\'ll arrange an initial consultation — either in person at your site or by video call — to understand your project, discuss your vision, and outline how we can help. There is no obligation at this stage.'
		},
		{
			q: 'How long does a typical project take?',
			a: 'Project timelines vary significantly depending on the scope. A single-room interior redesign might be completed in 4–6 weeks. A full corporate office fit-out typically takes 3–5 months. New-build architectural projects can run 8–18 months. During your initial consultation, we will give you a specific programme estimate based on your project\'s requirements.'
		},
		{
			q: 'Do you work outside of Kampala?',
			a: 'Yes. While our studio is based in Ntinda, Kampala, we have delivered projects across Uganda and in neighbouring East African markets. For projects outside Kampala, we structure our involvement to suit the project\'s location — combining remote design management with scheduled on-site visits at key project milestones.'
		},
		{
			q: 'What is your fee structure?',
			a: 'Our fees are structured to reflect the scope and complexity of each project. Depending on the engagement, we work on a fixed-fee, percentage-of-project-cost, or retainer basis. We are transparent about our fees from the outset and present a clear fee proposal before any work begins. There are no hidden charges.'
		},
		{
			q: 'Can I engage Enchen for design only, without construction services?',
			a: 'Absolutely. While many clients choose to engage us for the full end-to-end service, we are equally happy to provide design consultancy only — including concept design, developed drawings, specifications, and 3D visualisations — which you can then deliver through your own contractors.'
		},
		{
			q: 'Do you provide 3D visualisations as a standalone service?',
			a: 'Yes. Our visualisation team can produce photorealistic renders and virtual walkthroughs for designs created either by us or by an external architect or designer. This service is particularly useful for property developers, real estate marketing campaigns, and client presentation materials.'
		}
	];
</script>

<svelte:head>
	<title>Services — Enchen Creative Hub</title>
</svelte:head>

<!-- Page Hero -->
<div class="page-hero">
	<div class="page-hero-grid"></div>
	<div class="ph-content">
		<div class="ph-breadcrumb"><a href="/">Home</a><span class="ph-breadcrumb-sep">/</span>Services</div>
		<div class="ph-eyebrow">What We Do</div>
		<h1 class="ph-title">End-to-End<br><em>Design Excellence</em></h1>
		<p class="ph-sub">From the first concept sketch to the final walk-through, we provide a complete range of architectural and interior design services — each one delivered with the same standard of precision and care.</p>
	</div>
</div>

<!-- Services Detail -->
<section id="services-detail" style="background: var(--white); padding: 0 0 80px;">
	<div class="svc-detail-wrap">

		<div class="svc-row reveal">
			<div class="svc-row-left">
				<div class="svc-row-num">01</div>
				<div class="svc-row-name">Corporate &amp; Office Design</div>
				<div class="svc-row-tag">Commercial · B2B</div>
			</div>
			<div class="svc-row-right">
				<p class="svc-row-desc">Your office is a direct reflection of your brand. We design corporate environments — headquarters, boardrooms, executive suites, and open-plan workspaces — that communicate authority, foster productivity, and make a lasting impression on every visitor.</p>
				<p class="svc-row-desc" style="margin-top:14px;">Our corporate design process begins with a deep understanding of your organisation's culture, workflow, and brand identity. We then craft a spatial strategy that balances aesthetics with the functional demands of a modern workplace.</p>
				<div class="svc-row-features">
					<div class="svc-row-feat">Brand-aligned spatial design</div>
					<div class="svc-row-feat">Open plan &amp; private office configurations</div>
					<div class="svc-row-feat">Executive suite fitouts</div>
					<div class="svc-row-feat">Boardroom &amp; conference room design</div>
					<div class="svc-row-feat">Reception &amp; lobby design</div>
					<div class="svc-row-feat">FF&amp;E specification &amp; procurement</div>
				</div>
			</div>
		</div>

		<div class="svc-row reveal">
			<div class="svc-row-left">
				<div class="svc-row-num">02</div>
				<div class="svc-row-name">Residential Design</div>
				<div class="svc-row-tag">Homes · Villas · Penthouses</div>
			</div>
			<div class="svc-row-right">
				<p class="svc-row-desc">Your home is the most personal space you will ever design. We work closely with homeowners to create residences that are as beautiful as they are liveable — spaces that reflect your personality, support your lifestyle, and feel uniquely yours.</p>
				<p class="svc-row-desc" style="margin-top:14px;">From full architectural design for new builds to complete interior redesigns for existing properties, our residential service covers every element: layout planning, material selection, bespoke furniture, lighting design, and styling.</p>
				<div class="svc-row-features">
					<div class="svc-row-feat">Full interior design &amp; styling</div>
					<div class="svc-row-feat">New build &amp; architectural collaboration</div>
					<div class="svc-row-feat">Kitchen &amp; bathroom design</div>
					<div class="svc-row-feat">Bespoke furniture &amp; joinery</div>
					<div class="svc-row-feat">Lighting design &amp; specification</div>
					<div class="svc-row-feat">Material &amp; finish selection</div>
				</div>
			</div>
		</div>

		<div class="svc-row reveal">
			<div class="svc-row-left">
				<div class="svc-row-num">03</div>
				<div class="svc-row-name">Commercial Spaces</div>
				<div class="svc-row-tag">Retail · Hospitality · Leisure</div>
			</div>
			<div class="svc-row-right">
				<p class="svc-row-desc">Commercial spaces must work harder than any other type of environment. They need to attract customers, communicate brand values, create the right atmosphere, and support high volumes of activity — all simultaneously.</p>
				<p class="svc-row-desc" style="margin-top:14px;">Our commercial portfolio includes restaurants, bars, hotels, lounges, retail showrooms, and mixed-use developments. We understand the commercial imperatives that drive these projects and design spaces that deliver on both aesthetics and business performance.</p>
				<div class="svc-row-features">
					<div class="svc-row-feat">Restaurant &amp; bar design</div>
					<div class="svc-row-feat">Hotel lobbies &amp; guest rooms</div>
					<div class="svc-row-feat">Retail &amp; showroom fitouts</div>
					<div class="svc-row-feat">Lounge &amp; VIP space design</div>
					<div class="svc-row-feat">Brand experience environments</div>
					<div class="svc-row-feat">Mixed-use development interiors</div>
				</div>
			</div>
		</div>

		<div class="svc-row reveal">
			<div class="svc-row-left">
				<div class="svc-row-num">04</div>
				<div class="svc-row-name">3D Visualisation &amp; Rendering</div>
				<div class="svc-row-tag">Visualisation · Walkthroughs</div>
			</div>
			<div class="svc-row-right">
				<p class="svc-row-desc">Before a single wall is plastered or a single tile is laid, you should be able to see exactly what your finished space will look like. Our 3D visualisation service produces photorealistic renders and immersive virtual walkthroughs that bring designs to life at concept stage.</p>
				<p class="svc-row-desc" style="margin-top:14px;">Reviewing a photorealistic render allows clients to confirm material choices, adjust spatial layouts, and refine lighting schemes before any physical work begins.</p>
				<div class="svc-row-features">
					<div class="svc-row-feat">Photorealistic interior renders</div>
					<div class="svc-row-feat">Architectural exterior visualisation</div>
					<div class="svc-row-feat">Virtual 360° walkthroughs</div>
					<div class="svc-row-feat">Material &amp; finish mood boards</div>
					<div class="svc-row-feat">Spatial planning diagrams</div>
					<div class="svc-row-feat">Presentation decks for approvals</div>
				</div>
			</div>
		</div>

		<div class="svc-row reveal">
			<div class="svc-row-left">
				<div class="svc-row-num">05</div>
				<div class="svc-row-name">Project Management</div>
				<div class="svc-row-tag">Coordination · Supervision</div>
			</div>
			<div class="svc-row-right">
				<p class="svc-row-desc">Design is only as good as its execution. Our project management service ensures your design is delivered exactly as intended — to the right quality, within budget, and on schedule. We act as your representative on-site, coordinating contractors, suppliers, and specialist trades throughout the build.</p>
				<div class="svc-row-features">
					<div class="svc-row-feat">Contractor procurement &amp; vetting</div>
					<div class="svc-row-feat">On-site quality inspections</div>
					<div class="svc-row-feat">Budget monitoring &amp; cost reporting</div>
					<div class="svc-row-feat">Programme management</div>
					<div class="svc-row-feat">Supplier &amp; materials coordination</div>
					<div class="svc-row-feat">Handover &amp; snagging management</div>
				</div>
			</div>
		</div>

		<div class="svc-row reveal">
			<div class="svc-row-left">
				<div class="svc-row-num">06</div>
				<div class="svc-row-name">Renovation &amp; Fit-Out</div>
				<div class="svc-row-tag">Refurbishment · Upgrades</div>
			</div>
			<div class="svc-row-right">
				<p class="svc-row-desc">Transforming an existing space often demands more skill than designing from scratch. Our renovation and fit-out service is designed for clients who want to dramatically upgrade their environment without starting over — maximising the value of existing structures while introducing new design thinking.</p>
				<div class="svc-row-features">
					<div class="svc-row-feat">Full &amp; partial interior renovations</div>
					<div class="svc-row-feat">Office refurbishment</div>
					<div class="svc-row-feat">Residential upgrade projects</div>
					<div class="svc-row-feat">Commercial fit-outs</div>
					<div class="svc-row-feat">Structural interventions</div>
					<div class="svc-row-feat">Phased renovation planning</div>
				</div>
			</div>
		</div>

	</div>
</section>

<!-- Our Process -->
<section style="background: var(--dark); padding: 120px 64px;">
	<div class="s-label reveal">How We Work</div>
	<h2 class="s-title light reveal">Our <span class="h-blue">Process</span></h2>
	<p class="s-body light reveal" style="max-width:540px; margin: 16px 0 56px;">We follow a structured, transparent process that keeps you informed and in control at every step — from first conversation to final handover.</p>
	<div class="process-grid reveal">
		<div class="proc-item"><div class="proc-num">01</div><div class="proc-info"><div class="proc-name">Discovery &amp; Brief</div><div class="proc-desc">We begin with an in-depth consultation to understand your objectives, lifestyle or business requirements, preferences, and budget. This forms the foundation of every design decision that follows.</div></div></div>
		<div class="proc-item"><div class="proc-num">02</div><div class="proc-info"><div class="proc-name">Concept Design</div><div class="proc-desc">Our designers develop initial concepts — including spatial layouts, mood boards, material palettes, and preliminary 3D visualisations — for your review and feedback. We iterate until the concept perfectly captures your vision.</div></div></div>
		<div class="proc-item"><div class="proc-num">03</div><div class="proc-info"><div class="proc-name">Design Development</div><div class="proc-desc">Once the concept is approved, we develop full technical drawings, detailed specifications, and a comprehensive procurement schedule. Every element is resolved before a single piece of work begins on site.</div></div></div>
		<div class="proc-item"><div class="proc-num">04</div><div class="proc-info"><div class="proc-name">Delivery &amp; Handover</div><div class="proc-desc">We manage the construction and fit-out phase, coordinating all trades and suppliers to ensure flawless execution. The project is complete only when every detail meets our standard — and yours.</div></div></div>
	</div>
</section>

<!-- FAQ -->
<div class="faq-section">
	<div class="s-label centered reveal">Common Questions</div>
	<h2 class="s-title reveal" style="text-align:center;">Everything You<br>Need to <span class="h-blue">Know</span></h2>
	<div class="faq-list reveal" style="margin-top:56px;">
		{#each faqs as faq, i}
			<div class="faq-item" class:open={openFaq === i}>
				<button class="faq-q" onclick={() => toggleFaq(i)}>
					{faq.q}
					<span class="faq-icon">+</span>
				</button>
				<div class="faq-a"><div class="faq-a-inner"><p>{faq.a}</p></div></div>
			</div>
		{/each}
	</div>
</div>

<!-- CTA Strip -->
<div class="cta-strip">
	<div class="s-label reveal">Let's Talk</div>
	<h2 class="cta-title reveal">Ready to Discuss<br><em>Your Project?</em></h2>
	<p class="cta-body reveal">Tell us what you have in mind — we will respond within one business day with an initial consultation proposal.</p>
	<div class="cta-actions reveal">
		<a href="/contact" class="btn-primary">Get in Touch</a>
		<a href="/portfolio" class="btn-outline">See Our Work</a>
	</div>
</div>

<style>
	.s-body.light { color: rgba(255,255,255,0.38); }
	.process-grid { display: flex; flex-direction: column; gap: 0; }
	.proc-item {
		display: grid; grid-template-columns: 80px 1fr;
		padding: 36px 0; border-bottom: 1px solid rgba(255,255,255,0.05);
	}
	.proc-item:first-child { border-top: 1px solid rgba(255,255,255,0.05); }
	.proc-num {
		font-family: 'Cormorant Garamond', serif;
		font-size: 42px; font-weight: 300; color: var(--gold); opacity: 0.35; line-height: 1;
	}
	.proc-name { font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--white); margin-bottom: 10px; font-weight: 500; }
	.proc-desc { font-size: 13px; line-height: 1.85; color: rgba(255,255,255,0.3); max-width: 560px; }
</style>
