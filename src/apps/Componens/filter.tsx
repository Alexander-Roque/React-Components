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
        <div>
            <p>Filter by Type</p>
            <select
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
            <div>
                {pokemonFilter.map(pokemon =>(
                    <div key = {pokemon.id}>
                        <img src= {pokemon.image_url} alt={pokemon.name}/>
                        <p>{pokemon.name}</p>
                        <p>{pokemon.types.join(", ")}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}