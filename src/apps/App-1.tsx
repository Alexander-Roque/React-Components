import pokemons from "../data/pokemons.json";
import Counter from "./Componens/counter";

function App() {
  console.log(pokemons);
  return (
    <div>
      <h1>Happy Coding 🚀</h1>
      <p>{Counter()} </p>
    </div>
  )
    

}

export default App;
