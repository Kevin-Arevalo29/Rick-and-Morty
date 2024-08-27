import React, {useState,useEffect} from 'react'
import CharacterCard from "../../components/character/characterCard";

function RickAndMortyCharacterCard() {
  const [characterList, setCharacterList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationInfo, setPaginationInfo] = useState({});



  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data,'data')
        setPaginationInfo(data.info)
        setCharacterList(data.results)
      })
      .catch((error)=> console.error("Tienes un error", error))
  }, [currentPage]);

  return (

    <div className="position">
      <div className='title1'><h1>Personajes de Ric and Morty</h1></div>
      <br />
      {characterList.map((charater)=>(
        <CharacterCard
        name={charater.name}
        image={charater.image}
        genre={charater.genre}
        status={charater.status}
        />
      ))}
      <div >
    <button className='button'
        onClick={() => setCurrentPage(currentPage - 1)} 
        disabled={!paginationInfo.prev}
    >
        Anterior
    </button>
    <span className='textb'>Página {currentPage} de {paginationInfo.pages}</span>
    <button className='button'
        onClick={() => setCurrentPage(currentPage + 1)} 
        disabled={!paginationInfo.next}
    >
        Siguiente
    </button>
</div>
      
      </div>

  );
}

export default RickAndMortyCharacterCard;