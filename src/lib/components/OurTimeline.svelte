<div class="timeline-section">
	<div class="s-label reveal">Our Journey</div>
	<h2 class="s-title reveal">Built <span class="h-blue">Milestone</span><br />by Milestone</h2>
	<div class="tl-grid reveal">
		<div class="tl-list">
			<div class="tl-item">
				<div class="tl-year">2022</div>
				<div class="tl-content">
					<div class="tl-title">Enchen Creative Hub Founded</div>
					<p class="tl-desc">
						The studio opens its doors in Ntinda, Kampala, with a founding team of three
						and a mission to redefine interior design in Uganda.
					</p>
				</div>
			</div>
			<div class="tl-item">
				<div class="tl-year">2023</div>
				<div class="tl-content">
					<div class="tl-title">First Major Corporate Commission</div>
					<p class="tl-desc">
						Enchen delivers a full-floor headquarters redesign for a regional
						telecommunications company — establishing our reputation in the corporate
						sector.
					</p>
				</div>
			</div>
			<div class="tl-item">
				<div class="tl-year">2023</div>
				<div class="tl-content">
					<div class="tl-title">Luxury Residential Division Launched</div>
					<p class="tl-desc">
						Growing demand leads us to formalise our residential offering, with a
						specialist team dedicated to high-end homes, villas, and penthouses.
					</p>
				</div>
			</div>
			<div class="tl-item">
				<div class="tl-year">2024</div>
				<div class="tl-content">
					<div class="tl-title">100+ Projects Milestone</div>
					<p class="tl-desc">
						We celebrate completing over 100 projects — spanning corporate offices,
						luxury residences, commercial venues, and boutique hospitality spaces.
					</p>
				</div>
			</div>
			<div class="tl-item">
				<div class="tl-year">2025</div>
				<div class="tl-content">
					<div class="tl-title">3D Visualisation &amp; Smart Homes</div>
					<p class="tl-desc">
						Enchen invests in advanced rendering technology and smart home integration
						partnerships, expanding what we can offer every client at concept stage and
						beyond.
					</p>
				</div>
			</div>
		</div>
		<div>
			<div class="tl-visual reveal">
				<div class="tl-visual-text">ECH</div>
				<div class="tl-visual-badge">
					<div class="tl-visual-badge-text">Kampala · Uganda · Est. 2022</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.timeline-section {
		background: var(--white);
		padding: var(--space-30) var(--space-16);
	}
	.tl-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-20);
		align-items: start;
		margin-top: var(--space-18);
	}
	.tl-list {
		display: flex;
		flex-direction: column;
		gap: 0;
	}
	.tl-item {
		display: grid;
		grid-template-columns: var(--space-20) 1fr;
		gap: 0;
		padding: var(--space-8) 0;
		border-bottom: 1px solid var(--border);
		transition: background 0.3s;
		cursor: none;
	}
	.tl-item:first-child {
		border-top: 1px solid var(--border);
	}
	.tl-year {
		font-family: var(--font-heading);
		font-size: var(--text-lg);
		font-weight: 700;
		letter-spacing: -0.03em;
		color: var(--accent);
		opacity: 0.7;
		padding-top: 3px;
	}
	.tl-title {
		font-size: var(--text-body);
		font-weight: 500;
		color: var(--text);
		margin-bottom: var(--space-2);
		letter-spacing: 0.3px;
	}
	.tl-desc {
		font-size: var(--text-md);
		line-height: 1.8;
		color: var(--black-60);
	}
	.tl-visual {
		background: var(--dark);
		aspect-ratio: 4/5;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		overflow: hidden;
	}
	.tl-visual-text {
		font-family: var(--font-heading);
		font-size: 88px;
		font-weight: 700;
		color: rgba(255, 255, 255, 0.04);
		line-height: 1;
		letter-spacing: -0.06em;
	}
	.tl-visual-badge {
		position: absolute;
		bottom: var(--white-7);
		left: var(--white-7);
		right: var(--white-7);
		border-top: 1px solid rgba(196, 34, 128, 0.2);
		padding-top: 16px;
	}
	.tl-visual-badge-text {
		font-size: var(--text-xs);
		letter-spacing: 3px;
		text-transform: uppercase;
		color: var(--white-20);
	}
	@media (max-width: 1024px) {
		.timeline-section {
			padding: var(--space-20) var(--space-8);
		}
		.tl-grid {
			grid-template-columns: 1fr;
			gap: var(--space-12);
		}
	}
</style>
