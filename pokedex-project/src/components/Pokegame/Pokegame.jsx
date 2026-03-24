import { Pokedex } from "../Pokedex/Pokedex";
import { pokemonData } from "../../mock/pokemons";
import { calculateTotalExp } from "../../helpers/PokemonHelper";
import { BattleDivider } from "../BattleDivider/BattleDivider";

export function Pokegame() {
  let hand1 = [];
  let hand2 = [...pokemonData];


  while (hand1.length < hand2.length) {
    let randIdx = Math.floor(Math.random() * hand2.length);
    let randPokemon = hand2.splice(randIdx, 1)[0];
    hand1.push(randPokemon);
  }

  const exp1 = calculateTotalExp(hand1);
  const exp2 = calculateTotalExp(hand2);

  return (
    <div style={{ padding: "20px" }}>
      <Pokedex pokemonList={hand1} exp={exp1} isWinner={exp1 > exp2} />
        <BattleDivider/>
      <Pokedex pokemonList={hand2} exp={exp2} isWinner={exp2 > exp1} />
    </div>
  );
}