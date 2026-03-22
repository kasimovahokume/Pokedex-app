
import './App.css'
import { Pokecard } from './components/Pokecard/Pokecard'
import { Pokedex } from './components/Pokedex/Pokedex';
import { pokemonData } from "./mock/pokemons";

function App() {
const testPoke = pokemonData[0];
  return (
    <>
    <h1>Pokedex App</h1>
     <Pokecard
        id={testPoke.id} 
        name={testPoke.name} 
        type={testPoke.type} 
        base_experience={testPoke.base_experience}
     />
     <div className="App">
      <Pokedex />
    </div>
    </>
  )
}

export default App
