import { FunctionComponent, useEffect, useState } from "react";
import { MASTERS } from "../../App";
import { fetchPokemon, PokemonResponse } from "../../services";

const MasterItem: FunctionComponent<{ pokemonName: string, master: string }> = ({ pokemonName, master }) => {
  const [pokemon, setPokemon] = useState<PokemonResponse>();
  const PLACEHOLD_IMG = "https://placehold.co/50x50?text=?";


  useEffect(() => {
    (async () => {
      await fetchPokemon(pokemonName).then(response => setPokemon(response));
    })()
  },[pokemonName]);

  return (
    <li className="item">
      <div>
        <div className="image big">
          <img src={MASTERS[master]} alt="masters avatar" />
        </div>
        <div className="image small">
          <img src={`${pokemon ? pokemon.sprites.other.dream_world.front_default : PLACEHOLD_IMG}`} alt="pokemon avatar"/>
        </div>
      </div>
      <div>
        <h3>{master} & {pokemon?.name} - {pokemon?.id}</h3>
      </div>
    </li>
  )
}

export default MasterItem;
