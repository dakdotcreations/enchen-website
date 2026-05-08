<script lang="ts">
    import { Target, Eye } from '@lucide/svelte';
</script>

<section>
	<h2 class="s-title light">Our <span class="h-blue">Direction</span></h2>
	<div class="mv-grid">
		<div class="mv-card">
            <div class="mv-icon">
                <Target size={18} />
            </div>
			<div class="mv-title">Mission</div>
			<p class="mv-body">
                To harness creativity and advanced technology to deliver standout design solutions that exceed expectations and keep our clients ahead of the curve.
            </p>
		</div>
		<div class="mv-card">
            <div class="mv-icon">
                <Eye size={18} />
            </div>
			<div class="mv-title">Vision</div>
			<p class="mv-body">
                To set the global standard for turnkey interior design, creating spaces that elevate brands, inspire people, and stand the test of time.
            </p>
		</div>
	</div>
</section>

<style>
    section {
        background-color: var(--dark-mid);
        padding: var(--padding-global);
    }
	.mv-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1px;
        border-radius: 16px;
        overflow: hidden;
    }

    .mv-card {
        background: var(--dark);
        padding: 2rem 2rem 2.25rem;
        position: relative;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: var(--accent);
            opacity: 0;
            transition: opacity 0.3s;
        }

        &:hover::before {
            opacity: 1;
        }

        .mv-icon {
            width: 36px;
            height: 36px;
            border-radius: 8px;
            background: var(--accent-20);
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.25rem;
            color: var(--accent);
        }
    
        .mv-title {
            font-size: var(--text-lg);
            font-weight: 500;
            color: var(--white);
            margin-bottom: 0.75rem;
        }
    
        .mv-body {
            font-size: var(--text-body);
            line-height: 1.7;
            color: var(--white-60);
            margin: 0;
        }
    }
	@media (max-width: 1024px) {
		.mv-grid { grid-template-columns: 1fr; }
	}
</style>
