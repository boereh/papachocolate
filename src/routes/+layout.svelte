<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import 'virtual:uno.css';
	import { ScrollState, ElementSize } from 'runed';
	import { fade } from 'svelte/transition';

	let { children } = $props();
	let landingpic = $state<HTMLDivElement>();
	const scroll = new ScrollState({
		element: () => document,
	});
	const size = new ElementSize(() => landingpic);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav class="transition-all fixed w-full top-0 p-2">
	<div
		class={[
			'mx-auto container backdrop-blur-lg p-4 px-8 rounded-full border border-neutral/25 flex items-center gap-4 transition duration-750',
			(scroll.y || 0) > size.height ? 'bg-white/75' : 'bg-white',
		]}
	>
		<a href="/" aria-label="Home">
			<img src="/logo.png" alt="logo" class="h-14" />
		</a>

		<span class="grow"></span>

		<a href="/about" class="font-serif text-lg transition duration-150 hover:text-[#f92634]">
			About
		</a>
		<span>•</span>
		<a href="/contact" class="font-serif text-lg transition duration-150 hover:text-[#f92634]">
			Contact
		</a>
		<span>•</span>
		<a href="/menu" class="font-serif text-lg transition duration-150 hover:text-[#f92634]">Menu</a>

		<span class="grow"></span>

		<a
			href="https://order.online/business/papa-chocolate-11682065"
			class="border border-[#f92634]/50 text-[#f92634] hover:bg-[#f92634]/10 transition h-10 px-4 rounded-full flex items-center"
			transition:fade={{ duration: 150 }}
		>
			Catering
		</a>

		<a
			href="https://order.online/business/papa-chocolate-11682065"
			class="bg-[#f92634] text-white h-10 px-4 rounded-full flex items-center"
			transition:fade={{ duration: 150 }}
		>
			Order Online
		</a>
	</div>
</nav>

<div
	bind:this={landingpic}
	class="h-screen bg-cover bg-[url(/landing-picture.jpg)] grid place-items-center"
></div>

{@render children()}

{#each { length: 50 }, idx (idx)}
	<p class="h">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dolores voluptate. Quod
		asperiores dolorum, provident non aliquam dolor, unde quia perspiciatis saepe ad, a dignissimos
		veniam quae pariatur sapiente animi?
	</p>
{/each}
