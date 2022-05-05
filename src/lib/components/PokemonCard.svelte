<script lang="ts">
	import type { NamedAPIResource } from '$lib/types';
	export let pokemon: NamedAPIResource;
	export let index: number;
</script>

<div>
	<img src="./pikachu-img.png" alt="{pokemon.name} sprite" />
	<div>
		<p><span>{index + 1}. </span>{pokemon.name}</p>
	</div>
</div>
