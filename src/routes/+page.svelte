<script lang="ts">
	import DubaiStrawberries from '$lib/assets/images/dubai-strawberries-cup.jpeg';
	import MixLokma from '$lib/assets/images/mix-lokma.jpeg';
	import BananaSplit from '$lib/assets/images/dubai-banana-split.jpg';
	import PizzaWaffle from '$lib/assets/images/pizza-waffle.jpg';
	import FettuccineCrepe from '$lib/assets/images/fettuccine-crepe.jpg';
	import PistachiosCrepe from '$lib/assets/images/pistachios-crepe.jpg';
	import ClassicCrepe from '$lib/assets/images/classic-crepe.jpg';

	const FEATURED = [
		{
			img: MixLokma,
			name: 'Mix Lokma',
			text: 'Fresh Made Dough Filled and Topped With your choice of Chocolate',
		},
		{
			img: BananaSplit,
			name: 'Dubai Banana Split',
			text: ' Two bananas garnish with our Special pistachio Kunafah dough topped with ice cream drizzle with milk chocolate',
		},
		{
			img: DubaiStrawberries,
			name: 'Dubai Strawberries Cup',
			text: 'Fresh strawberries garnish with our Pistachio kunafah dough topped with milk chocolate garnish with pistachios nuts',
		},
	];

	const CHEF_SELECTION = {
		'Pizza Waffle': PizzaWaffle,
		'Fettuccine Crepe': FettuccineCrepe,
		'Pistachios Crepe': PistachiosCrepe,
		'Classic Crepe': ClassicCrepe,
	};
</script>

<div class="p-4">
	<div class="container mx-auto">
		<div class="flex justify-between py-16">
			{#each FEATURED as item (item.name)}
				<div class="w-1/4 space-y-8 text-center">
					<img src={item.img} alt={item.name} />

					<h1 class="text-3xl font-serif">{item.name}</h1>

					<p class="text-black/75">{item.text}</p>
				</div>
			{/each}
		</div>

		<h1 class="text-center text-xl text-brand-orange py-8 pt-16">CHEF SELECTION</h1>

		<div class="flex justify-between py-16 gap-16">
			{#each Object.entries(CHEF_SELECTION) as [name, img] (name)}
				<div class="space-y-8 text-center">
					<img src={img} alt={name} />

					<p class="text-2xl font-serif">{name}</p>
				</div>
			{/each}
		</div>
	</div>
</div>
