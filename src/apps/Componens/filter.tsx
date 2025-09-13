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

    const [select, setSelect] = React.useState ("")

    return (
        <div>
            <p>Filter by Type</p>
            <select>
                <option>All</option>
            </select>
            <article>
                <div></div>
            </article>
        </div>
    )

}