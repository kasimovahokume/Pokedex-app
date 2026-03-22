import PropTypes from "prop-types";
import styles from "./Pokecard.module.css"
import ButtonCustom from "../ButtonCustom"


export function Pokecard({id, name, type, base_experience}) {
    const idThreeDigits = id.toString().padStart(3, '0');

    const imgSrc = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${idThreeDigits}.png`
    return(
        <div className={styles.card}>
            <h3 className={styles.name}>{name}</h3>
            <img src={imgSrc} alt={name} className={styles.image}/>
            <p className={styles.info}>Type:{type}</p>
            <p className={styles.info}>EXP{base_experience}</p>
            <ButtonCustom text="Read more"/>
        </div>
    );
}


Pokecard.PropTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    base_experience: PropTypes.number.isRequired,
}