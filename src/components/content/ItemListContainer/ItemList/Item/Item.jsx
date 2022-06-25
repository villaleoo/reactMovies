import React from 'react'
import {Link} from 'react-router-dom'
import './item.scss'

export const Item = ({id,titulo,valoracion,imagenPrincipal}) => {
 
  return (
    <>
        <div className="container m-1">
          <div className="cardcontainer">
              <div className="photo">
                  <img src={imagenPrincipal} alt='portada'/>
                  <div className="photos">Pelicula</div>
              </div>
              <div className="content">
                  <p className="txt4 text-center w-100">{titulo}</p>
                  <div>
                    <p className='text-center pt-3 valoration'>Valoracion: {valoracion}</p>
                  </div>
              </div>
              <div className="footer d-flex justify-content-center">
                  <Link to={`/pelicula/${id}`} className='my-1 btn btn-outline-dark'>Mas detalles</Link>
              </div>
          </div>
        </div>
    </>
  )
}
