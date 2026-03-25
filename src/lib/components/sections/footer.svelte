<script lang="ts">
</script>

<!-- Footer -->
<footer>
	<div class="foot-top">
		<div>
			<a href="/" class="foot-logo-wrap">
				<img
					src="/images/white-nav-logo.svg"
					class="foot-logo-img"
					alt="Enchen Creative Hub" />
				<!-- <span class="foot-logo-text">ENCHEN<span>.</span></span> -->
			</a>
			<div class="foot-tag">Precision Design. Commercial Excellence.</div>
			<!-- <div class="foot-social">
				<a
					class="soc-link"
					href="https://www.instagram.com"
					target="_blank"
					rel="noopener noreferrer"
					title="Instagram">IG</a>
				<a
					class="soc-link"
					href="https://ug.linkedin.com/in/enchen-creative-hub-b7032739a"
					target="_blank"
					rel="noopener noreferrer"
					title="LinkedIn">LI</a>
				<a
					class="soc-link"
					href="https://www.facebook.com"
					target="_blank"
					rel="noopener noreferrer"
					title="Facebook">FB</a>
				<a
					class="soc-link"
					href="https://www.houzz.com"
					target="_blank"
					rel="noopener noreferrer"
					title="Houzz">HZ</a>
			</div> -->
		</div>
		<div>
			<div class="foot-col-title">Services</div>
			<ul class="foot-links">
				<li><a href="/services">Corporate Design</a></li>
				<li><a href="/services">Residential Design</a></li>
				<li><a href="/services">Commercial Spaces</a></li>
				<li><a href="/services">3D Visualization</a></li>
				<li><a href="/services">Project Management</a></li>
			</ul>
		</div>
		<div>
			<div class="foot-col-title">Company</div>
			<ul class="foot-links">
				<li><a href="/about">About Us</a></li>
				<li><a href="/portfolio">Portfolio</a></li>
				<li><a href="/testimonials">Testimonials</a></li>
				<li><a href="/contact">Contact</a></li>
			</ul>
		</div>
		<div>
			<div class="foot-col-title">Connect</div>
			<ul class="foot-links">
				<li>
					<a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
						>Instagram</a>
				</li>
				<li>
					<a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"
						>LinkedIn</a>
				</li>
				<li>
					<a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
						>Facebook</a>
				</li>
				<li>
					<a href="https://www.houzz.com" target="_blank" rel="noopener noreferrer"
						>Houzz</a>
				</li>
			</ul>
		</div>
	</div>
	<div class="foot-bottom">
		<div class="foot-copy">
			© 2026 <span>Enchen Creative Hub</span>. All rights reserved. | Powered by
            <a href="https://dakdot.com" target="_blank" rel="noopener noreferrer">DakDot Creations</a>
			.
		</div>
		<div class="foot-location">Nakasero, Uganda</div>
	</div>
</footer>

<style>
	footer {
		background: var(--black);
		border-top: 1px solid var(--white-20);
		padding: var(--space-22) var(--space-16) var(--space-11);
	}
	.foot-top {
		display: grid;
		grid-template-columns: 2fr 1fr 1fr 1fr;
		gap: var(--space-14);
		margin-bottom: var(--space-12);
	}
	.foot-logo-wrap {
		display: flex;
		align-items: center;
		gap: var(--space-3);
		margin-bottom: var(--space-4);
		text-decoration: none;
	}
	.foot-logo-img {
		height: var(--space-24);
		width: auto;
		object-fit: contain;
		display: block;
	}
	.foot-tag {
		font-size: var(--text-sm);
		color: var(--white-20);
		text-transform: uppercase;
		margin-bottom: var(--space-7);
	}

	.foot-social {
		display: flex;
		gap: var(--space-2);
	}
	.soc-link {
		width: var(--space-8);
		height: var(--space-8);
		border: 1px solid var(--white-20);
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--white-20);
		text-decoration: none;
		font-size: var(--text-xs);
		font-weight: 500;
		transition: all 0.3s;
	}
	.soc-link:hover {
		border-color: var(--accent);
		color: var(--accent);
	}

	.foot-col-title {
		font-size: var(--text-sm);
		text-transform: uppercase;
		color: var(--white-20);
		margin-bottom: var(--space-5);
	}
	.foot-links {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
	}
	.foot-links a {
		font-size: var(--text-base);
		color: var(--white-40);
		text-decoration: none;
		transition: color 0.3s;
	}
	.foot-links a:hover {
		color: var(--white-80);
	}
	.foot-bottom {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: var(--space-9);
		border-top: 1px solid var(--white-20);
	}
	.foot-copy {
		font-size: var(--text-sm);
		color: var(--white-20);

        & span, & a{
            color: var(--accent);
            opacity: 0.6;
            text-decoration: none;
        }

	}
	.foot-location {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		font-size: var(--text-sm);
		color: var(--white-20);
	}
	.foot-location::before {
		content: "◦";
		color: var(--accent);
		opacity: 0.5;
	}
</style>
