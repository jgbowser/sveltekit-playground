export type Pokemon = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: PokemonAbility[];
  forms: NamedAPIResource[];
  game_indices: VersionGameIndex[];
  held_items: PokemonHeldItem[];
  location_area_encounters: string;
  moves: PokemonMove[];
  past_types: PokemonTypePast[];
  sprites: PokemonSprites;
  species: NamedAPIResource;
  stats: PokemonStat[];
  types: PokemonType[];
};

export type PokemonAbility = {
  is_hidden: boolean;
  slot: number;
  ability: NamedAPIResource;
};

export type PokemonHeldItem = {
  item: NamedAPIResource;
  version_details: PokemonHeldItemVersion[];
};

export type PokemonHeldItemVersion = {
  version: NamedAPIResource;
  rarity: number;
}

export type PokemonMove = {
  move: NamedAPIResource;
  version_group_details: PokemonMoveVersion[];
};

export type PokemonMoveVersion = {
  move_learn_method: NamedAPIResource;
  version_group: NamedAPIResource;
  level_learned_at: number;
};

export type PokemonSprites = {
  front_default: string | null;
  front_shiny: string | null;
  front_female: string | null;
  front_shiny_female: string | null;
  back_default: string | null;
  back_shiny: string | null;
  back_female: string | null;
  back_shiny_female: string | null;
  other?: Record<string, unknown>;
}

export type PokemonStat = {
  stat: NamedAPIResource;
  effort: number;
  base_stat: number;
}

export type PokemonType = {
  slot: number;
  type: NamedAPIResource;
};

export type PokemonTypePast = {
  generation: NamedAPIResource;
  types: PokemonType[];
}

export type NamedAPIResource = {
  name: string;
  url: string;
};

export type NamedAPIResourceList = {
  count: number;
  next: string;
  previous: string;
  results: NamedAPIResource[];
}

export type VersionGameIndex = {
  game_index: number;
  version: NamedAPIResource;
}