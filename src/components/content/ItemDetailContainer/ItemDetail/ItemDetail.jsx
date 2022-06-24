import React, { useContext } from 'react'
import { GlobalContextPeliculas } from '../../../../context/GlobalPeliculasContext';
import {Link} from 'react-router-dom'

export const ItemDetail = ({pelicula}) => {
    const {urlImagenes}= useContext(GlobalContextPeliculas);
  return (
    <div className='w-100 bg-danger h-100'>
        <div>
            <Link to='/' className='btn btn-info'>Volver a inicio</Link>
        </div>
        <div>
            <h1>{pelicula.title}</h1>
            <h4>{pelicula.original_title}</h4>
            <img src={`${urlImagenes}${pelicula.poster_path}`} alt="peli-img" />
            <p>{pelicula.overview}</p>
            <p>valoracion: {pelicula.vote_average}</p>
            <p>Lanzamiento: {pelicula.release_date}</p>
            <img src={`${urlImagenes}${pelicula.backdrop_path}`} alt="peli-img-secundaria" />
        </div>
    </div>
  )
}
