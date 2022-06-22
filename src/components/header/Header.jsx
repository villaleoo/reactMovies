import React, { useContext, useState } from 'react'
import { GlobalContextPeliculas } from '../../context/GlobalPeliculasContext';

export const Header = () => {

  const {obtenerPeliculasPorBusqueda,handleChange}= useContext(GlobalContextPeliculas);
 
  
  return (
    <div>
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand">Navbar</a>
            <form className="form-inline" onSubmit={obtenerPeliculasPorBusqueda}>
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
