<script lang="ts">
	// import { onMount } from 'svelte';
	import { pokemonData } from '$lib/exampleData';
	import PokemonCard from '$lib/components/PokemonCard.svelte';

	import type { NamedAPIResource, NamedAPIResourceList } from '../lib/types';

	let pokemonList: NamedAPIResource[] | null;

	// onMount(async (): Promise<void> => {
	// 	const res = await fetch('https://pokeapi.co/api/v2/pokemon');
	// 	const jsonRes = await res.json();
	// 	pokemonList = jsonRes.results;
	// });
</script>

<h2>All Pokémon</h2>
<input type="text" placeholder="Search" />
{#if pokemonData.results}
	<ul>
		{#each pokemonData.results as pokemon, index}
			<PokemonCard {index} {pokemon} />
		{/each}
	</ul>
{/if}
