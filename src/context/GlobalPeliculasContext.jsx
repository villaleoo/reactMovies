import React, { createContext, useState } from 'react';

export const GlobalContextPeliculas = createContext('');


export const GlobalPeliculasContext = ({children}) => {
    const [dataApi, setDataApi]= useState([]);
    const [busquedaPelis, setBusquedaPelis]= useState([]);
    const [busqueda, setBusqueda]= useState('');
    

    const URLBase= 'https://api.themoviedb.org/3';
    const apiKeyV3='28bd1c085c3b143b58f3929377d14de7';
    const idiomaEsp= '&language=es-AR';
    const urlImagenes=`https://image.tmdb.org/t/p/w500/`;

    
    
    async function obtenerPeliculasPopulares (){
        const urlPopulares= '/movie/popular?api_key=';
        const urlDiscover= '/discover/movie?api_key=';
        const URL = `${URLBase}${urlPopulares}${apiKeyV3}${idiomaEsp}`;

        try {
            const respuesta = await fetch (URL);
            const data = await respuesta.json();
            setTimeout(() => {
                const {results} = data;
                setDataApi(results);
                
            }, 2000);
            
        } catch (error) {
            console.log(error);
            
        }
        
        
    }

    async function obtenerPeliculasPorBusqueda (e){
        e.preventDefault();
        const urlBusquedaPeliculas= `https://api.themoviedb.org/3/search/movie?api_key=28bd1c085c3b143b58f3929377d14de7&language=es-AR&page=1&query=${busqueda}`;
        try {
            const respuesta = await fetch (urlBusquedaPeliculas);
            const data = await respuesta.json();
            const {Search} = data ;
            console.log(data);
            setBusquedaPelis(Search);
        } catch (error) {
            console.log(error);
        }
      }

    function handleChange (e){
        setBusqueda(e.target.value);
      }
    

   

  return (
    <GlobalContextPeliculas.Provider value={{dataApi,obtenerPeliculasPopulares,urlImagenes,obtenerPeliculasPorBusqueda, handleChange}}>
        {children}
    </GlobalContextPeliculas.Provider>
  )
}

export default GlobalPeliculasContext