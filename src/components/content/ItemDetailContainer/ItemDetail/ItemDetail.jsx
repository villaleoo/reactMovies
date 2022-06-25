import React, { useContext, useEffect } from 'react'
import { GlobalContextPeliculas } from '../../../../context/GlobalPeliculasContext';
import {Link} from 'react-router-dom'
import './itemDetail.scss'

export const ItemDetail = ({pelicula}) => {
  const {urlImagenes}= useContext(GlobalContextPeliculas);
  
  let imagenFondo={
    background:`url(${urlImagenes}${pelicula.backdrop_path})`,
    backgroundPosition:'center',
    //aqui no utilizo 'background-size:cover' por el hecho de que la imagen backdrop_path es muy pequeña y se pixelea
  }
 
  return (
    <div className='w-100 vh-100 d-flex align-items-center justify-content-center'>
        <Link to='/' className='btn btn-outline-danger botonInicio'>Regresar al menú↩</Link>
        <div className="movie-card w-100">
          <div className="containerDetail w-75">
              <img src={`${urlImagenes}${pelicula.poster_path}`} alt="peli-img" className='cover'/>
            <div className="hero" style={imagenFondo}>
              <div className="details">
                <h2 className="title1">{pelicula.title}</h2>
                <h5 className="title2">{pelicula.original_title}</h5>    
              </div> 
            </div> 
            <div className="description">
              <div className="column1">
                <span className="tag">Valoracion: {pelicula.vote_average}</span>
                <span className="tag">Lanzamiento: {pelicula.release_date}</span>
              </div> 
              <div className="column2">
                <p>{pelicula.overview}</p>
              </div> 
            </div> 
          </div> 
        </div> 
    </div>
  )
}
