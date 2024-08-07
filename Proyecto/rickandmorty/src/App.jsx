import React from "react";
import RickAndMortyCharacterCard from "./components/RickAndMortyCharacter/RickAndMortyCharacterCard";
import "./App.css";

function App() {
  return (
    <div>
      <h1 className="title1">Personajes de Rick And Morty</h1>
      <div className="position">
      <RickAndMortyCharacterCard id={1}/>
      <RickAndMortyCharacterCard id={2}/>
      <RickAndMortyCharacterCard id={3}/> 
      <RickAndMortyCharacterCard id={4}/>

      </div>
    </div>
  );
}

export default App;
