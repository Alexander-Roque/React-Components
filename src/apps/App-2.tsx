import pokemons from "../data/pokemons.json";
import Filter from "./Componens/filter";

function AppTwo() {
  console.log(pokemons);
  return (
    <div className="container-filter">
      <h1 className="title-filter-app">Filter</h1>
      <p className="text-filter-app">Descripción: Feugiat enim fames odio ornare lectus at. Elit sit sit urna tempor. Egestas vitae orci porttitor placerat amet. Consectetur egestas et porta praesent. Ac aenean nunc ullamcorper morbi scelerisque.
Feugiat non dolor semper aliquet donec pellentesque dictum nunc pellentesque.</p>
      <article className="container-card">
        <div>{Filter()}</div>
      </article>
    </div>
  )
}

export default AppTwo;
