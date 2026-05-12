<script lang="ts">
	interface NavItem {
		label: string;
		href: string;
	}

	interface Props {
		items: NavItem[];
	}

	let { items }: Props = $props();
</script>

<nav class="flex items-center gap-6">
	{#each items as item (item.href)}
		<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
		<a href={item.href}>{item.label}</a>
	{/each}
</nav>

<style>
	a {
		color: #93c5fd;
		font-size: 13px;
		text-decoration: none;
	}
	a:hover {
		color: #fff;
	}
</style>
