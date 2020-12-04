export interface IPokeAPI {
  count?: number;
  limit?: number;
  offset?: number;
  pokemons: IPokemonCard[];
  total: number;
}

export interface IPokemons {
  total: number;
  data: IPokemonCard[];
}

export interface IPokemonCardStats {
  hp: number;
  attack: number;
  defense: number;
  'special-attack'?: number;
  'special-defense'?: number;
  speed: number;
}

// TODO: Maybe better to change type of abilities&types to enum type
export interface IPokemonCard {
  name_clean: string;
  abilities: string[];
  stats: IPokemonCardStats;
  types: string[];
  img: string;
  name: string;
  base_experience?: number;
  height?: number;
  id: number;
  is_default?: boolean;
  order: number;
  weight?: number;
}
