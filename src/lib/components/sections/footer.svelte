<script lang="ts">
</script>

<!-- Footer -->
<footer>
	<div class="foot-top">
		<div class="foot-logo">
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
		<div class="foot-services">
			<div class="foot-col-title">Services</div>
			<ul class="foot-links">
				<li><a href="/services/#svc-01">Office Design and Branding</a></li>
				<li><a href="/services/#svc-02">Project Management</a></li>
				<li><a href="/services/#svc-03">3D Visualization</a></li>
				<li><a href="/services/#svc-04">Commercial Spaces</a></li>
			</ul>
		</div>
		<div class="foot-company">
			<div class="foot-col-title">Company</div>
			<ul class="foot-links">
				<li><a href="/about">About Us</a></li>
				<li><a href="/portfolio">Portfolio</a></li>
				<li><a href="/">Homepage</a></li>
				<li><a href="/contact">Get in touch</a></li>
			</ul>
		</div>
	</div>
	<div class="foot-bottom">
		<div class="foot-copy">
            <div>
                &copy; 2026 <span class="accent">Enchen Creative Hub</span>. All rights reserved.
            </div>
		</div>
		<div class="foot-location">
            <div>
                Powered by <a class="accent" href="https://dakdot.com" target="_blank" rel="noopener noreferrer">DakDot Creations</a>
            </div>
        </div>
	</div>
</footer>

<style>
	footer {
		background: var(--black);
		border-top: 1px solid var(--white-20);
		padding: var(--space-22) var(--padding-global) var(--space-11);
	}
	.foot-top {
		display: grid;
		gap: var(--space-8);
		margin-bottom: var(--space-12);
	}
    @media (min-width: 640px) {
        .foot-top {
            grid-template-columns: 1fr 1fr;
        }
    }
    @media (min-width: 1024px) {
        .foot-top {
            grid-template-columns: 1fr 1fr 1fr;
            column-gap: var(--space-12);
        }
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

	.foot-col-title {
		font-size: var(--text-sm);
		text-transform: uppercase;
		color: var(--white-20);
		margin-bottom: var(--space-5);
	}
	.foot-links {
		list-style: none;
		display: grid;
        grid-template-columns: 1fr 1fr;
		flex-direction: column;
		gap: var(--space-3);
	}
	.foot-links a {
		font-size: var(--text-base);
		color: var(--white-40);
		text-decoration: none;
		transition: all 0.3s;

        &::before {
            content: "> ";
        }

        &:hover {
            color: var(--white-80);
            text-decoration: wavy underline var(--accent);
        }
	}
	.foot-bottom {
		display: flex;
		align-items: center;
		justify-content: space-around;
		padding-top: var(--space-9);
		border-top: 1px solid var(--white-20);
	}
	.foot-copy {
		font-size: var(--text-sm);
		color: var(--white-20);
	}
	.foot-location {
		display: none;
		align-items: center;
		gap: var(--space-2);
		font-size: var(--text-sm);
		color: var(--white-20);
	}
</style>
