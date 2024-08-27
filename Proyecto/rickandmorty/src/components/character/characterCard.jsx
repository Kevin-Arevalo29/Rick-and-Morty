import React from "react";
import Titulo from "../titulo/tituloComponente";
import Imagen from "../imagen/imagenComponente";
import Descripcion from "../description/descripcionComponente";

function CharacterCard(props){
 console.log(props, "Props")
    return(
        <div className='card'>
 
        <div className='img'><Imagen url={props.image} /></div>
        <div className='circule'><Descripcion status={props.status} /></div>
        <div className='contenido'><Titulo titulo={props.name} /></div>
        <div className='details'><Descripcion genero={props.genre} /></div>
        </div>
    )
}
export default CharacterCard