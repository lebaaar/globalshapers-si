<script lang="ts">
	import { onMount } from 'svelte';
	import logo from '$lib/assets/logo.png';

	// Phase 2: import Nav and restore full-site navigation links
	const FORM_URL =
		'https://docs.google.com/forms/d/1C3Niai_lcougUfLNecKx7BAbfg4dMUTPac46vsorGQc/viewform';

	let scrolled = $state(false);

	onMount(() => {
		const onScroll = () => (scrolled = window.scrollY > 56);
		onScroll(); // set correct state immediately (handles F5 mid-page restore)
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<header class="header" class:scrolled>
	<div class="inner">
		<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
		<a href="/" class="logo">
			<img src={logo} alt="Global Shapers Ljubljana" class="logo-img" />
			<span class="sep" aria-hidden="true">·</span>
			<span class="sub">Shapers Academy</span>
		</a>
		<a href={FORM_URL} target="_blank" rel="noopener noreferrer" class="cta">Apply now →</a>
	</div>
</header>

<style>
	.header {
		position: fixed;
		inset: 0 0 auto 0;
		z-index: 50;
		padding: 20px 24px;
		transition:
			background 0.35s ease,
			padding 0.35s ease,
			box-shadow 0.35s ease;
	}
	.header.scrolled {
		background: linear-gradient(to bottom, rgba(26, 48, 82, 0.97) 0%, rgba(30, 58, 95, 0.91) 100%);
		backdrop-filter: blur(14px);
		-webkit-backdrop-filter: blur(14px);
		padding: 14px 24px;
		box-shadow:
			0 1px 0 rgba(255, 255, 255, 0.06),
			0 4px 20px rgba(0, 0, 0, 0.14);
	}

	.inner {
		max-width: 72rem;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.logo {
		display: flex;
		align-items: center;
		gap: 8px;
		text-decoration: none;
	}
	.logo-img {
		height: 40px;
		width: auto;
		display: block;
	}
	.header.scrolled .logo-img {
		filter: brightness(0) invert(1);
	}
	.sep {
		font-size: 13px;
		color: rgba(30, 58, 95, 0.45);
		transition: color 0.35s;
	}
	.sub {
		font-size: 13px;
		color: rgba(30, 58, 95, 0.55);
		transition: color 0.35s;
	}
	.header.scrolled .sep {
		color: rgba(147, 197, 253, 0.6);
	}
	.header.scrolled .sub {
		color: #93c5fd;
	}

	.cta {
		font-size: 13px;
		font-weight: 600;
		padding: 8px 16px;
		border-radius: 6px;
		background: var(--gs-accent);
		color: #fff;
		text-decoration: none;
		transition: opacity 0.2s;
	}
	.cta:hover {
		opacity: 0.88;
	}
</style>
