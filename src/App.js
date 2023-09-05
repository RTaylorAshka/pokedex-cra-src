import React from 'react';
import './App.css';
import Pokedex from "./Pokedex"
import defaultPokemon from './pokemon';

function App() {
  return (

    <div className="App">
      <h1>TEST</h1>
      {<Pokedex pokemon={defaultPokemon} />}
    </div>
  );
}


export default App;
