import React from 'react'
import { NavLink } from 'react-router-dom'


const HomePage = () => {
  return (
    <div className='title1'>
        <h1>Bienvenidos a la Pagina de Rick And Morty</h1>

        <h3>Enlaces Rapidos </h3>

        <div className='positionNav'>
        <ul>
        <li>
                <NavLink to='/'className={({isActive})=> (isActive ?'active':'')}>HomePages</NavLink>
            </li>
            <li>
                <NavLink to='./Personajes'className={({isActive})=> (isActive ?'active':'')}>Personajes</NavLink>
            </li>
            
        </ul>
    </div>
  
    </div>
  )
}

export default HomePage