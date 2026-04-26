<script lang="ts">
	import 'virtual:uno.css';
	import { ScrollState, ElementSize } from 'runed';
	import { fade } from 'svelte/transition';
	import logo from '$lib/assets/images/logo.png';

	let { children } = $props();
	let landing_el = $state<HTMLDivElement>();
	const scroll = new ScrollState({
		element: () => document,
	});
	const size = new ElementSize(() => landing_el);
</script>

<svelte:head>
	<title>Papa Chocolate</title>
</svelte:head>

<nav class="transition-all fixed w-full top-0 p-2">
	<div
		class={[
			'mx-auto container backdrop-blur-lg p-4 px-8 rounded-full border border-neutral/5 flex items-center gap-4 transition duration-750',
			(scroll.y || 0) > size.height ? 'bg-white/75' : 'bg-white',
		]}
	>
		<a href="/" aria-label="Home">
			<img src={logo} alt="logo" class="h-14" />
		</a>

		<span class="grow"></span>

		{#each ['about', 'contact', 'menu'] as href (href)}
			<a
				href="/{href}"
				class="font-serif text-xl transition duration-150 hover:text-brand-red capitalize"
			>
				{href}
			</a>

			{#if href !== 'menu'}
				<span>•</span>
			{/if}
		{/each}

		<span class="grow"></span>

		<a
			href="https://order.online/business/papa-chocolate-11682065"
			class="border border-brand-red/50 text-brand-red hover:bg-brand-red/10 transition h-10 px-4 rounded-full flex items-center"
			transition:fade={{ duration: 150 }}
		>
			Catering
		</a>

		<a
			href="https://order.online/business/papa-chocolate-11682065"
			class="bg-brand-red text-white h-10 px-4 rounded-full flex items-center"
			transition:fade={{ duration: 150 }}
		>
			Order Online
		</a>
	</div>
</nav>

<div
	bind:this={landing_el}
	class="h-screen bg-cover bg-[url(/landing-picture.jpg)] grid place-items-center"
></div>

{@render children()}
