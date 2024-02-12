export interface PokemonResponse {
  id: string;
  name: string;
  base_experience: number;
  order: number;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
}

export const fetchPokemon = async (name: string): Promise<PokemonResponse> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((r) => {
      if (r.ok) {
        return r.json();
      } else {
        return;
      }
    })
    .catch((e) => console.error(e));

  return response;
};
