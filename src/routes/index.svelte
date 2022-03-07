<script lang="ts">
	import { onMount } from 'svelte';

	import type { NamedAPIResource, NamedAPIResourceList } from '../lib/types';

	let pokemonList: NamedAPIResource[] | null;

	onMount(async (): Promise<void> => {
		const res = await fetch('https://pokeapi.co/api/v2/pokemon');
		const jsonRes = await res.json();
		pokemonList = jsonRes.results;
	});
</script>

<h2>All Pokémon</h2>
<input type="text" placeholder="Search" />
{#if pokemonList}
	<ul>
		{#each pokemonList as pokemon, i}
			<li>{i + 1}: {pokemon.name}</li>
		{/each}
	</ul>
{/if}
