import pokemons from "../data/pokemons.json";
import Filter from "./Componens/filter";

function AppTwo() {
  console.log(pokemons);
  return (
    <div>
      <h1>Filter</h1>
      <article>
        <div>{Filter()}</div>
      </article>
    </div>
  )
}

export default AppTwo;
