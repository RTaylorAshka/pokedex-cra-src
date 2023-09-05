import React from "react";
import PokeCard from "./PokeCard"

const Pokedex = ({ pokemon }) => {
    return (<div className="Pokedex-container">
        <h3>test 2</h3>
        {pokemon.map(p => {
            return <PokeCard id={p.id} name={p.name} type={p.type} xp={p.base_experience} />
        })}
    </div>)

}




export default Pokedex;