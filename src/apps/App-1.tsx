import pokemons from "../data/pokemons.json";
import Counter from "./Componens/counter";

function AppOne() {
  console.log(pokemons);
  return (
    <div className="container-div">
      <h2 className="title-counter-app">Counter</h2>
      <p className="text-counter-app">Descripción: Feugiat enim fames odio ornare lectus at. Elit sit sit urna tempor. Egestas vitae orci porttitor placerat amet. Consectetur egestas et porta praesent. Ac aenean nunc ullamcorper morbi scelerisque.
Feugiat non dolor semper aliquet donec pellentesque dictum nunc pellentesque.</p>
      <div className="container-counter-app">{Counter()} </div>
    </div>
  )
    

}

export default AppOne;
