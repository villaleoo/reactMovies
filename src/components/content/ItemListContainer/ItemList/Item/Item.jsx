import React from 'react'
import {Link} from 'react-router-dom'
import './item.scss'

export const Item = ({id,titulo,descripcion,imagenPrincipal}) => {
 
  
  return (
    <>
        <div class="container m-1">
          <div class="cardcontainer">
              <div class="photo">
                  <img src={imagenPrincipal} alt='portada'/>
                  <div class="photos">Pelicula</div>
              </div>
              <div class="content">
                  <p class="txt4 text-center w-100">{titulo}</p>
              </div>
              <div class="footer d-flex justify-content-center">
                  <Link to={`/pelicula/${id}`} className='btn btn-info'>ver mas</Link>
              </div>
          </div>
        </div>
    </>
  )
}
