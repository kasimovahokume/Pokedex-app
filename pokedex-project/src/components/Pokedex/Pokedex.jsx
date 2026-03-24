import { Pokecard } from "../Pokecard/Pokecard";
import styles from "./Pokedex.module.css";

export function Pokedex({ pokemonList, exp, isWinner }) {
    return (
       
        <section className={`${styles.pokedexSection} ${isWinner ? styles.winnerBg : styles.loserBg}`}>
            <h2 className={isWinner ? styles.winnerTitle : styles.loserTitle}>
                {isWinner ? "Winner" : "Lose"}
            </h2>
            <h3 className={styles.expCount}>{exp}</h3>

            <div className={styles.container}>
                {pokemonList.map((pokemon) => (
                    <Pokecard
                        key={pokemon.id}
                        {...pokemon}
                    />
                ))}
            </div>
        </section>
    );
}