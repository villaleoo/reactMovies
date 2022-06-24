import React, { useContext, useState } from 'react'
import { GlobalContextPeliculas } from '../../context/GlobalPeliculasContext';
import {Link} from 'react-router-dom'

export const Header = () => {

  const {obtenerPeliculasPorBusqueda,handleChange}= useContext(GlobalContextPeliculas);
 
  let logo={
    width:'80px',
    heigth:'80px'
  }
  
  return (
    <div>
        <nav className="navbar navbar-dark bg-dark">
            <Link to='/' className="navbar-brand"><img src="https://i.pinimg.com/originals/3e/dc/22/3edc22756408dbcf3ac895b54d527fc4.png" style={logo} alt="logo"/></Link>
            <form className="form-inline " onSubmit={obtenerPeliculasPorBusqueda}>
              <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Buscar titulos..."
              aria-label="Search"
              onChange={handleChange}
              />
              <button
              className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
    </div>
  )
}
