import { Pokecard } from "../Pokecard/Pokecard";
import { pokemonData } from "../../mock/pokemons";
import styles from "./Pokedex.module.css"

export function Pokedex() {
    return(
        <div className={styles.pokedex}>
            <h2 className={styles.title}>Pokedex list</h2>

            <div className={styles.container}>
                {pokemonData.map((pokemon)=>(
                <Pokecard
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                type={pokemon.type}
                base_experience={pokemon.base_experience}
                />
                ))}
            </div>
        </div>
    )
}