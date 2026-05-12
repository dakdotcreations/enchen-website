<script lang="ts">
	const testimonials = [
		{
			text: `Enchen transformed our offices into a space that truly embodies our brand.
			The attention to detail and commitment to schedule made the whole process smooth.`,
			author: 'James Ssemwogerere',
			role: '',
		},
		{
			text: `Working with Enchen Creative Hub was a amazing. They understood our vision immediately and executed it beautifully.`,
			author: 'Amara Akello',
			role: '',
		},
		{
			text: `From first meeting to final handover, Enchen brought creativity and genuine passion.
			Our office now reflects who we are: modern, dynamic, and deeply rooted in Uganda.`,
			author: 'Sarah Nakigozi',
			role: '',
		},
	]
</script>

<section id="testimonials">
	<div class="s-label">Client Voices</div>
	<h2 class="s-title light">What Our Clients <span class="h-mag">Say</span></h2>
	<div class="test-grid">
		{#each testimonials as testimonial}
			<div class="test-card">
				<div class="q-mark">"</div>
				<p class="test-text">{testimonial.text}</p>
				<div class="test-div"></div>
				<div class="test-author">{testimonial.author}</div>
				<div class="test-role">{testimonial.role}</div>
			</div>
		{/each}
	</div>
</section>

<style>
	#testimonials {
		background: #1a1618;
		padding: 120px 64px;
	}
	.test-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-4);
		margin-top: var(--space-10);
	}
	.test-card {
		background: var(--black-40);
		padding: var(--space-10);
		transition: background 0.3s;
        border-radius: var(--space-8);
        display: flex;
        flex-direction: column;
	}
	.test-card:hover {
		background: var(--black-80);
	}
	.q-mark {
		font-family: var(--font-heading);
		font-size: var(--text-6xl);
		line-height: 0.7;
		font-weight: 700;
		color: var(--accent);
		opacity: 0.35;
		margin-bottom: 20px;
	}
	.test-text {
		font-family: var(--font-heading);
		font-size: var(--text-body);
		font-style: normal;
		line-height: 1.85;
		color: var(--white-80);
		margin-bottom: 28px;
	}
	.test-div {
		width: var(--space-6);
		height: 1px;
		background: var(--accent);
		margin-bottom: var(--space-6);
        margin-top: auto;
		opacity: 0.5;
	}
	.test-author {
		font-size: var(--text-base);
		text-transform: uppercase;
		color: var(--white-60);
		margin-bottom: 5px;
	}
	.test-role {
		font-size: 11px;
		color: var(--white-40);
	}
	@media (max-width: 1024px) {
		#testimonials {
			padding: 80px 32px;
		}
		.test-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
