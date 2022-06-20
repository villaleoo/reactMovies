import React from 'react'
import {Link} from 'react-router-dom'

export const Item = ({id,titulo,descripcion,imagenPrincipal}) => {
    console.log(imagenPrincipal);
  
  return (
    <>
        <div className='bg-success my-2 w-50'>
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
            <img src={imagenPrincipal} alt="peliculas" />
        </div>

    </>
  )
}
