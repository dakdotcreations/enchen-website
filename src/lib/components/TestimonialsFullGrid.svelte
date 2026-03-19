<script lang="ts">
	let { items }: {
		items: { initials: string; body: string; name: string; role: string }[]
	} = $props();
</script>

<div class="test-full-section">
	<div class="s-label reveal">What Our Clients Say</div>
	<h2 class="s-title reveal">Client <span class="h-blue">Experiences</span></h2>
	<div class="test-full-grid reveal">
		{#each items as t}
			<div class="test-full-card">
				<div class="test-stars">
					<span class="test-star">★</span><span class="test-star">★</span><span class="test-star">★</span><span class="test-star">★</span><span class="test-star">★</span>
				</div>
				<p class="test-full-body">"{t.body}"</p>
				<div class="test-full-author">
					<div class="test-full-avatar">{t.initials}</div>
					<div>
						<div class="test-full-name">{t.name}</div>
						<div class="test-full-role">{t.role}</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.test-full-section {
		background: var(--off-white);
		padding: 100px 64px 120px;
	}
	.test-full-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 24px;
		margin-top: 56px;
	}
	.test-full-card {
		background: white;
		padding: 44px;
		border: 1px solid var(--border);
	}
	.test-stars {
		display: flex;
		gap: 3px;
		margin-bottom: 20px;
	}
	.test-star {
		color: var(--accent);
		font-size: 14px;
	}
	.test-full-body {
		font-size: 14px;
		line-height: 1.8;
		color: var(--text-mid);
		margin-bottom: 28px;
		font-style: italic;
	}
	.test-full-author {
		display: flex;
		align-items: center;
		gap: 14px;
	}
	.test-full-avatar {
		width: 44px;
		height: 44px;
		border-radius: 50%;
		background: var(--accent);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 12px;
		font-weight: 700;
		color: white;
		flex-shrink: 0;
	}
	.test-full-name {
		font-family: var(--font-heading);
		font-size: 14px;
		font-weight: 700;
		letter-spacing: -0.01em;
		color: var(--black);
	}
	.test-full-role {
		font-size: 11px;
		color: var(--muted);
		margin-top: 2px;
	}
	@media (max-width: 1024px) {
		.test-full-section { padding: 64px 32px 80px; }
		.test-full-grid { grid-template-columns: 1fr; }
	}
	@media (max-width: 640px) {
		.test-full-section { padding: 56px 20px 64px; }
		.test-full-card { padding: 28px 20px; }
	}
</style>
