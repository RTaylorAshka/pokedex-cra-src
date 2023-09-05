import React from "react";

const PokeCard = ({ id, name, type, xp }) => {
    let imgSource = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    console.log(imgSource);
    return (
        <>
            <h2 className="PokeCard-header">{name}</h2>
            <img className="PokeCard-img" src={imgSource} alt=""></img>
            <p>Type: {type}</p>
            <p>EXP: {xp}</p>
        </>
    )
}




export default PokeCard;