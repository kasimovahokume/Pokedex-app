import PropTypes from "prop-types";
import styles from "./Pokecard.module.css";
import {getPokemonImageUrl} from "../../helpers/PokemonHelper";
export function Pokecard({ id, name, type, base_experience }) {
  
  const imgSrc = getPokemonImageUrl(id)
  return (
    <div className={styles.card}>
      <div className={styles.cardInfo}>
        <h3 className={styles.name}>{name}</h3>
        <img src={imgSrc} alt={name} className={styles.image} />
        <p className={styles.info}>Type: {type}</p>
        <p className={styles.info}>EXP {base_experience}</p>
      </div>
    </div>
  );
}

Pokecard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  base_experience: PropTypes.number.isRequired,
};
