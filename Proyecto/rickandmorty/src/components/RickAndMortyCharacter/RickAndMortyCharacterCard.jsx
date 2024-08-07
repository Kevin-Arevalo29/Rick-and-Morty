import React, {useState,useEffect} from 'react'
import CharacterCard from "../character/characterCard";

function RickAndMortyCharacterCard({ id }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [genre, setGenre] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((result) => {
        console.log(result,'result')
        setName(result.name);
        setImage(result.image);
        setGenre(result.gender);
        setStatus(result.status);
    
      })
  }, [id]);

  return (
    <CharacterCard 
      name={name}
      image={image}
      genre={genre}
      status={status}
    />
  );
}

export default RickAndMortyCharacterCard;