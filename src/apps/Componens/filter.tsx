import * as React from "react"
import pokemons from "../data/pokemons.json";

interface pokemon {
    id : number,
    name: string,
    types: string[]
    image_url: string
}[]

export default function Filter (){
    const pokemones:pokemon = pokemons

    return (
        <div>
            <p>Filter by Type</p>
            <select>
                <option>All</option>
            </select>
            
        </div>
    )

}