<div class="team-section">
	<div class="s-label reveal">The Team</div>
	<h2 class="s-title reveal">The People Behind<br><span class="h-blue">Every Project</span></h2>
	<p class="s-body reveal" style="margin-top:12px;">A small, focused team of dedicated professionals — each one chosen for their craft, their commitment, and their passion for excellence.</p>
	<div class="team-grid reveal">
		<div class="team-card">
			<div class="team-photo"><div class="team-photo-inner"><div class="team-photo-placeholder">EK</div></div><div class="team-photo-grad"></div></div>
			<div class="team-info">
				<div class="team-name">Enoch Kabuye</div>
				<div class="team-role">Founder &amp; Principal Architect</div>
				<p class="team-bio">Enoch brings over a decade of architectural practice across Uganda, Kenya, and Rwanda. He founded Enchen with a vision to bring world-class design to East Africa, combining classical training with a deep sensitivity to local culture and context.</p>
			</div>
		</div>
		<div class="team-card">
			<div class="team-photo"><div class="team-photo-inner"><div class="team-photo-placeholder">LN</div></div><div class="team-photo-grad"></div></div>
			<div class="team-info">
				<div class="team-name">Lydia Namubiru</div>
				<div class="team-role">Lead Interior Designer</div>
				<p class="team-bio">Lydia specialises in luxury residential and high-end commercial interiors. With a background in fine arts and interior architecture, she brings an innate sense of proportion, palette, and material to every project she leads.</p>
			</div>
		</div>
		<div class="team-card">
			<div class="team-photo"><div class="team-photo-inner"><div class="team-photo-placeholder">DO</div></div><div class="team-photo-grad"></div></div>
			<div class="team-info">
				<div class="team-name">David Omondi</div>
				<div class="team-role">Head of Projects &amp; Construction</div>
				<p class="team-bio">David oversees the delivery of every project from the moment designs are approved. A qualified quantity surveyor and project manager, he ensures each build is delivered to specification, on time, and within budget — without compromise.</p>
			</div>
		</div>
	</div>
</div>

<style>
	.team-section {
		background: var(--off-white);
		padding: 120px 64px;
	}
	.team-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1px;
		background: var(--border);
		margin-top: 64px;
	}
	.team-card {
		background: var(--white);
		overflow: hidden;
		transition: background 0.3s;
		cursor: none;
	}
	.team-card:hover { background: var(--off-white); }
	.team-photo {
		width: 100%;
		aspect-ratio: 3/4;
		background: var(--dark);
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}
	.team-photo-inner {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: transform 0.5s ease;
	}
	.team-card:hover .team-photo-inner { transform: scale(1.03); }
	.team-photo-placeholder {
		font-family: var(--font-heading);
		font-size: 88px;
		font-weight: 300;
		color: rgba(255, 255, 255, 0.04);
		letter-spacing: -2px;
	}
	.team-photo-grad {
		position: absolute;
		inset: 0;
		background: linear-gradient(to top, rgba(12, 12, 12, 0.4) 0%, transparent 50%);
	}
	.team-info {
		padding: 28px 32px 36px;
	}
	.team-name {
		font-family: var(--font-heading);
		font-size: 22px;
		font-weight: 700;
		letter-spacing: -0.04em;
		color: var(--text);
		margin-bottom: 4px;
	}
	.team-role {
		font-size: 9px;
		letter-spacing: 2.5px;
		text-transform: uppercase;
		color: var(--accent);
		margin-bottom: 14px;
		opacity: 0.8;
	}
	.team-bio {
		font-size: 12px;
		line-height: 1.85;
		color: var(--black-60);
	}
	@media (max-width: 1024px) {
		.team-section { padding: 80px 32px; }
		.team-grid { grid-template-columns: 1fr 1fr; }
	}
	@media (max-width: 640px) {
		.team-grid { grid-template-columns: 1fr; }
	}
</style>
