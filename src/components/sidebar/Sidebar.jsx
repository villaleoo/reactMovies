import React, { useContext } from 'react';
import { GlobalContextPeliculas } from '../../context/GlobalPeliculasContext';
import './sidebar.scss';

export const Sidebar = () => {
const {ratings, handleCheckbox}= useContext(GlobalContextPeliculas);

  return (
    <div className='contenedorSidebar w-25'>
      <div className='tituloFiltro pl-2'>
        <h4>Filtrar por valoracion</h4>
      </div>
      <div className= "d-flex justify-content-center align-items-center">
        <div className='rating w-100  '>
          {
            ratings.map((rate,index)=>(
              <>
              
              <input type="checkbox" key={`${index}Input`} id={index} name="ratings" value={index} checked={ratings[index]} onChange={handleCheckbox}/>
              <label key={`${index}key`} htmlFor={index}></label>
              </>
            ))
          }
        </div>
      </div>
    </div>
  )
}
