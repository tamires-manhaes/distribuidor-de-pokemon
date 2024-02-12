import { useEffect, useState } from "react";
import MasterItem from "./components/MastersItem";
import { shuffle } from "./helpers/shuffle";
import { fetchPokemon } from "./services";

/*
  Treinadores pré-definidos
  **/
  export const MASTERS: { [key: string]: string } = {
    Ash: "https://i0.wp.com/gamingnewstime.de/wp-content/uploads/2022/11/ash-pokemon.png?resize=759%2C500&ssl=1",
    Misty:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIbPHbLhiM6gJTc_RtdF_M1lNP8tXkJ-aQww&usqp=CAU",
    Jessie:
      "https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2016/08/legiao_am9rSz6v4D_nPXgIHtjO1ACcTiWN3pBRdl0Q2F78G5.jpg.webp",
    Broky:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyESlcYYCm9yQ4LcXpwJ6jyx3PD9mS6lMu7g&usqp=CAU",
  };

export default function App() {
  const [shuffledPokemons, setShuffledPokemons] = useState<string[]>([])
  const pokemons = ["charmander", "squirtle", "bulbasaur", "Não Existo"];

  /** Esse exemplo de método que embaralha um array aleatóriamente */

  function distribuir() {
    setShuffledPokemons(shuffle(pokemons));
  }

  function limpar() {
    alert("Limpar");
  }

  useEffect(() => {
    (async () => {
      await fetchPokemon(shuffledPokemons[0]).then(res => console.log(res))
    })()
  },[shuffledPokemons]);

  return (
    <div className="App">
      <div className="action">
        <h1>Distribuidor de Pokemon</h1>
        <button className="principal" onClick={distribuir}>
          Distribuir
        </button>
        <button onClick={limpar}>Limpar</button>
      </div>
      <div className="container">
        <ul id="list" className="Column2">
          {Object.keys(MASTERS).map((master,i) => (
            <MasterItem 
              key={i}
              master={master}
              pokemonName={shuffledPokemons[i]}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
