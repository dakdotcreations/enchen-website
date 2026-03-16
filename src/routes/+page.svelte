<script lang="ts">
	let activeFilter = $state('All');
	const filters = ['All', 'Corporate', 'Residential', 'Commercial'];

	const portfolioItems = [
		{ cat: 'Corporate', name: 'Executive Headquarters', label: 'OFFICE', cls: 'pi1', span: 7 },
		{ cat: 'Residential', name: 'Luxury Lakeside Villa', label: 'VILLA', cls: 'pi2', span: 5 },
		{ cat: 'Commercial', name: 'Premium Lounge', label: 'LOUNGE', cls: 'pi3', span: 4 },
		{ cat: 'Residential', name: 'Penthouse Suite', label: 'SUITE', cls: 'pi4', span: 4 },
		{ cat: 'Corporate', name: 'Boardroom Redesign', label: 'BOARD', cls: 'pi5', span: 4 }
	];

	let submitLabel = $state('Send Enquiry →');
	function handleSubmit(e: Event) {
		e.preventDefault();
		submitLabel = '✓ Enquiry Sent';
		setTimeout(() => { submitLabel = 'Send Enquiry →'; }, 3500);
	}
</script>

<svelte:head>
	<title>Enchen Creative Hub — Architectural &amp; Interior Design | Commercial Spaces</title>
</svelte:head>

<!-- Hero -->
<section id="hero">
	<div class="hero-bg-gradient"></div>
	<div class="hero-grid"></div>
	<div class="hero-orb-1"></div>
	<div class="hero-orb-2"></div>
	<div class="hero-content">
		<div class="hero-eyebrow">Architectural &amp; Interior Design</div>
		<h1 class="hero-title">
			Precision <span class="accent">Design.</span><br>
			Commercial <span class="accent-m">Excellence.</span>
		</h1>
		<p class="hero-sub">We transform spaces into inspiring, functional environments — from luxury residences and corporate headquarters to commercial developments that define your brand on the world stage.</p>
		<div class="hero-actions">
			<a href="/portfolio" class="btn-primary">Explore Our Work</a>
			<a href="/services" class="btn-outline">Our Services</a>
		</div>
	</div>
	<div class="hero-scroll"><div class="scroll-line"></div>Scroll to explore</div>
	<div class="hero-stats">
		<div><div class="stat-num">150+</div><div class="stat-lbl">Projects Done</div></div>
		<div><div class="stat-num">1</div><div class="stat-lbl">Year Strong</div></div>
		<div><div class="stat-num">3</div><div class="stat-lbl">Core Markets</div></div>
	</div>
</section>

<!-- Marquee -->
<div class="marquee-wrap">
	<div class="marquee-track">
		{#each [1, 2] as _}
			<span class="m-item">Residential Design</span><span class="m-item"><span class="m-dot">◆</span></span>
			<span class="m-item">Corporate Offices</span><span class="m-item"><span class="m-dot">◆</span></span>
			<span class="m-item">Luxury Villas</span><span class="m-item"><span class="m-dot">◆</span></span>
			<span class="m-item">Interior Fit-Out</span><span class="m-item"><span class="m-dot">◆</span></span>
			<span class="m-item">3D Visualization</span><span class="m-item"><span class="m-dot">◆</span></span>
			<span class="m-item">Smart Homes</span><span class="m-item"><span class="m-dot">◆</span></span>
			<span class="m-item">Sustainable Design</span><span class="m-item"><span class="m-dot">◆</span></span>
			<span class="m-item">Project Management</span><span class="m-item"><span class="m-dot">◆</span></span>
		{/each}
	</div>
</div>

<!-- About -->
<section id="about">
	<div class="s-label reveal">About Enchen</div>
	<div class="about-grid">
		<div class="about-visual reveal">
			<div class="about-card-main">
				<div class="about-card-bg"></div>
				<div class="about-card-text">ECH</div>
			</div>
			<div class="about-badge">
				<div class="badge-top">Based In</div>
				<div class="badge-main">KLA</div>
				<div class="badge-sub">Ntinda, Uganda</div>
			</div>
		</div>
		<div>
			<div class="about-tag">Enchen Creative Hub</div>
			<h2 class="s-title reveal">Spaces That <span class="h-blue">Inspire</span><br>&amp; Endure</h2>
			<p class="s-body reveal">Enchen Creative Hub is an architectural and interior design firm delivering bold, functional, and inspiring environments. We work with residential, corporate, and commercial clients — providing tailored design solutions that convert ideas into remarkable real spaces.</p>
			<p class="s-body reveal" style="margin-top:18px;">Our vision: to become the leading turnkey interior design company recognized globally for quality, innovation, and designs that elevate brands.</p>
			<div class="about-values reveal">
				<div class="v-card"><div class="v-icon blue">◈</div><div class="v-name">Innovation</div><div class="v-desc">Advanced technology and bold thinking in every brief.</div></div>
				<div class="v-card"><div class="v-icon mag">◈</div><div class="v-name">Sustainability</div><div class="v-desc">Green, responsible design built for the future.</div></div>
				<div class="v-card"><div class="v-icon pur">◈</div><div class="v-name">Precision</div><div class="v-desc">Every detail considered, nothing left to chance.</div></div>
				<div class="v-card"><div class="v-icon teal">◈</div><div class="v-name">Client First</div><div class="v-desc">Your vision is the blueprint for everything we do.</div></div>
			</div>
		</div>
	</div>
</section>

<!-- Services -->
<section id="services">
	<div class="services-intro">
		<div>
			<div class="s-label reveal">What We Do</div>
			<h2 class="s-title light reveal">Design Services<br><span class="h-blue">Tailored</span> to You</h2>
		</div>
		<p class="s-body reveal" style="max-width:340px;">From initial concept to final handover — end-to-end design solutions for every space and budget.</p>
	</div>
	<div class="services-grid reveal">
		<div class="svc-card">
			<div class="svc-num">01</div>
			<div class="svc-icon-wrap">🏢</div>
			<div class="svc-name">Corporate &amp; Office Design</div>
			<div class="svc-desc">Workplaces that inspire performance, reinforce brand identity, and prioritise employee wellbeing.</div>
			<ul class="svc-items"><li>Open plan &amp; private offices</li><li>Conference &amp; meeting rooms</li><li>Lounge &amp; wellness zones</li><li>Boardroom design</li><li>Brand-aligned interiors</li></ul>
		</div>
		<div class="svc-card">
			<div class="svc-num">02</div>
			<div class="svc-icon-wrap">🏡</div>
			<div class="svc-name">Residential Design</div>
			<div class="svc-desc">From luxury villas to contemporary homes — spaces crafted around how you truly live.</div>
			<ul class="svc-items"><li>Luxury villas &amp; mansions</li><li>Modern &amp; contemporary homes</li><li>Traditional &amp; heritage residences</li><li>Smart home integration</li><li>Space planning &amp; furnishing</li></ul>
		</div>
		<div class="svc-card">
			<div class="svc-num">03</div>
			<div class="svc-icon-wrap">🏬</div>
			<div class="svc-name">Commercial Spaces</div>
			<div class="svc-desc">Retail, hospitality, and commercial developments designed to drive results and express brand identity.</div>
			<ul class="svc-items"><li>Interior fit-out</li><li>Custom furniture</li><li>3D visualization &amp; virtual tours</li><li>Sustainable &amp; green building</li><li>Construction supervision</li></ul>
		</div>
	</div>
</section>

<!-- Process -->
<section id="process">
	<div class="s-label reveal">How We Work</div>
	<h2 class="s-title reveal">Our Design <span class="h-mag">Process</span></h2>
	<div class="process-steps reveal">
		<div class="p-step"><div class="p-num">01</div><div class="p-title">Discovery</div><div class="p-desc">A deep-dive consultation to understand your vision, needs, and desired outcomes.</div></div>
		<div class="p-step"><div class="p-num">02</div><div class="p-title">Concept Design</div><div class="p-desc">Creative concepts delivered with 3D visualizations and curated mood boards.</div></div>
		<div class="p-step"><div class="p-num">03</div><div class="p-title">Development</div><div class="p-desc">Refined designs, material selections, and technical drawings submitted for your approval.</div></div>
		<div class="p-step"><div class="p-num">04</div><div class="p-title">Delivery</div><div class="p-desc">Full project management and on-site supervision through to a perfect handover.</div></div>
	</div>
</section>

<!-- Portfolio -->
<section id="portfolio">
	<div class="s-label reveal">Our Work</div>
	<h2 class="s-title light reveal">Featured <span class="h-blue">Projects</span></h2>
	<div class="port-filter reveal">
		{#each filters as f}
			<button class="f-btn" class:active={activeFilter === f} onclick={() => (activeFilter = f)}>{f}</button>
		{/each}
	</div>
	<div class="port-grid reveal">
		{#each portfolioItems as item}
			{#if activeFilter === 'All' || activeFilter === item.cat}
				<div class="port-item" style="grid-column:span {item.span};">
					<div class="port-img"><div class="port-inner {item.cls}"><div class="pi-label">{item.label}</div></div></div>
					<div class="port-badge">{item.cat}</div>
					<div class="port-overlay"><div><div class="port-cat">{item.cat}</div><div class="port-name">{item.name}</div></div></div>
				</div>
			{/if}
		{/each}
	</div>
	<div class="port-cta reveal">
		<a href="/contact" class="btn-outline" style="color:rgba(255,255,255,0.7)">Discuss Your Project →</a>
	</div>
</section>

<!-- Clients -->
<div id="clients">
	<div class="clients-row reveal">
		<span class="clients-label">Trusted By</span>
		<div class="clients-rule"></div>
	</div>
	<div class="clients-grid reveal">
		<div class="cl-item"><div class="cl-name">Victoria</div></div>
		<div class="cl-item"><div class="cl-name">Airtel</div></div>
		<div class="cl-item"><div class="cl-name">PwC</div></div>
		<div class="cl-item"><div class="cl-name">Telecom Co.</div></div>
		<div class="cl-item"><div class="cl-name">Partners +</div></div>
	</div>
</div>

<!-- Testimonials -->
<section id="testimonials">
	<div class="s-label reveal">Client Voices</div>
	<h2 class="s-title light reveal">What Our Clients <span class="h-mag">Say</span></h2>
	<div class="test-grid reveal">
		<div class="test-card">
			<div class="q-mark">"</div>
			<p class="test-text">Enchen transformed our headquarters into a space that perfectly embodies our brand. The attention to detail was extraordinary, and the team was professional from concept to completion.</p>
			<div class="test-div"></div>
			<div class="test-author">James Mwangi</div>
			<div class="test-role">CEO, Telecom East Africa</div>
		</div>
		<div class="test-card">
			<div class="q-mark">"</div>
			<p class="test-text">Working with Enchen Creative Hub was a revelation. They understood our vision immediately and delivered a home that exceeds every expectation. Truly bold, beautiful design.</p>
			<div class="test-div"></div>
			<div class="test-author">Amara Osei</div>
			<div class="test-role">Homeowner, Luxury Residence</div>
		</div>
		<div class="test-card">
			<div class="q-mark">"</div>
			<p class="test-text">From first meeting to final handover, Enchen brought creativity, discipline, and genuine passion. Our office now reflects who we are — modern, dynamic, and client-focused.</p>
			<div class="test-div"></div>
			<div class="test-author">Sarah Nakigozi</div>
			<div class="test-role">Managing Partner, Professional Services</div>
		</div>
	</div>
</section>

<!-- Contact -->
<section id="contact">
	<div class="s-label reveal">Get In Touch</div>
	<h2 class="s-title reveal">Start Your <span class="h-blue">Project</span></h2>
	<div class="contact-grid">
		<div class="reveal">
			<div class="c-detail"><div class="c-icon">📍</div><div><div class="c-title">Our Studio</div><div class="c-val">Enchen Creative Hub<br>Ntinda, Kampala, Uganda</div></div></div>
			<div class="c-detail"><div class="c-icon">✉️</div><div><div class="c-title">Email Us</div><div class="c-val">hello@enchencreativehub.com</div></div></div>
			<div class="c-detail"><div class="c-icon">📞</div><div><div class="c-title">Call Us</div><div class="c-val">+256 700 000 000</div></div></div>
			<div class="c-detail"><div class="c-icon">🕐</div><div><div class="c-title">Studio Hours</div><div class="c-val">Mon – Fri: 8:00 am – 6:00 pm<br>Saturday: 9:00 am – 2:00 pm</div></div></div>
		</div>
		<div class="reveal rd2">
			<div class="form-row">
				<div class="f-field"><label for="h-fname">First Name</label><input id="h-fname" type="text" placeholder="James" /></div>
				<div class="f-field"><label for="h-lname">Last Name</label><input id="h-lname" type="text" placeholder="Mwangi" /></div>
			</div>
			<div class="f-field"><label for="h-email">Email Address</label><input id="h-email" type="email" placeholder="you@company.com" /></div>
			<div class="f-field">
				<label for="h-project">Project Type</label>
				<select id="h-project">
					<option value="" disabled selected>Select a service</option>
					<option>Corporate / Office Design</option>
					<option>Residential Design</option>
					<option>Commercial Space</option>
					<option>Renovation &amp; Fit-Out</option>
					<option>3D Visualization</option>
					<option>Other</option>
				</select>
			</div>
			<div class="f-field"><label for="h-message">Tell Us About Your Project</label>
				<textarea id="h-message" placeholder="Describe your vision, timeline, and any specific requirements..."></textarea>
			</div>
			<button class="f-submit" type="button" onclick={handleSubmit}>{submitLabel}</button>
		</div>
	</div>
</section>
