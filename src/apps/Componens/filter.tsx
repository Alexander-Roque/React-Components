import * as React from "react"
import pokemons from "../../data/pokemons.json";

interface pokemon {
    id : number,
    name: string,
    types: string[]
    image_url: string
}

export default function Filter (){
    const pokemones:pokemon[] = pokemons

    const singleType = Array.from(
        new Set(pokemones.flatMap((p)=>p.types))
    )

    const [select, setSelect] = React.useState ("all")

    const pokemonFilter = select === "all" ? pokemones : pokemones.filter((p)=>p.types.includes(select))

    return (
        <div className="container-pokemon">
            <div className="container-texts">
            <p className="text-filter">Filter by Type</p>
            <select className="select-type"
            value={select}
            name = "select"
            onChange={(event)=> setSelect(event.target.value)}
            >
                <option value="all">All</option>
                {
                    singleType.map((type)=>(
                        <option key={type} value={type}>
                            {type}
                        </option>
                    ))
                }
            </select>
            </div>
            <div className="container-cards">
                {pokemonFilter.map(pokemon =>(
                    <div className="pokemons" key = {pokemon.id}>
                        <img className="img-pokemon" src= {pokemon.image_url} alt={pokemon.name}/>
                        <p className="pokemon-text">{pokemon.name}</p>
                        <p className="pokemon-text-type">{pokemon.types.join(", ")}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}