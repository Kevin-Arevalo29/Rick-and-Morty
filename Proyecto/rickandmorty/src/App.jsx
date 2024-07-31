import React from 'react';
import Titulo from './components/titulo/tituloComponente';
import Imagen from './components/imagenes/imagenComponente';
import Descripcion from './components/descripcion/descripcionComponente';
import './App.css'

function App() {
  return (
  <div className='card'>
 
      <div className='img'><Imagen url='./Rick.jpg' /></div>
      <div className='circule'>Alive</div>
      <div className='title'><Titulo titulo='Rick Sanchez' /></div>
      <div className='details'><Descripcion genero='HUMAN' /></div>
  </div>
  );
}

export default App;
