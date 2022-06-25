import React, { createContext, useState } from 'react';

export const GlobalContextPeliculas = createContext('');


export const GlobalPeliculasContext = ({children}) => {
    const [dataApi, setDataApi]= useState([]);
    const [busqueda, setBusqueda]= useState('');
    const [ratings, setRatings]= useState([false,false,false,false,false]);
    const [masDetalles, setMasDetalles]= useState('');

    const URLBase= 'https://api.themoviedb.org/3';
    const apiKeyV3='28bd1c085c3b143b58f3929377d14de7';
    const idiomaEsp='&language=es-AR';
    const urlImagenes=`https://image.tmdb.org/t/p/w300/`;
    
  
    async function obtenerPeliculasPopulares (){
        const urlPopulares= '/movie/popular?api_key=';
        const urlDiscover= '/discover/movie?api_key=';
        const URL = `${URLBase}${urlPopulares}${apiKeyV3}${idiomaEsp}`;
        try {
            const respuesta = await fetch (URL);
            const data = await respuesta.json();
            const {results} = data;
            setDataApi(results);
        } catch (error) {
            console.log(error);
        }
    }

    async function obtenerPeliculasPorBusqueda (e){
        e.preventDefault()
            if (busqueda === '') {
                obtenerPeliculasPopulares()
            }
            const urlBusquedaPeliculas= `https://api.themoviedb.org/3/search/movie?api_key=28bd1c085c3b143b58f3929377d14de7&language=es-AR&page=1&query=${busqueda}`;
            try {
                const respuesta = await fetch (urlBusquedaPeliculas);
                const data = await respuesta.json();
                const {results} = data ;
                if (results) {
                    setDataApi(results);
                }
                
            } catch (error) {
                console.log(error);
                
            }
      }
      
    async function obtenerMasInformacion(id) {
        setMasDetalles('')
        const urlMasDetalles= `${URLBase}/movie/${id}?api_key=${apiKeyV3}&language=es-ES`
        try {
            const respuesta = await fetch(urlMasDetalles);
            const data = await respuesta.json();
            setTimeout(() => {
                setMasDetalles(data);
            }, 2000);
        } catch (error) {
            console.log(error);
        }
        
    }

    function handleChange (e){
        setBusqueda((e.target.value));
      }

    function handleCheckbox(e) {
      const value = e.target.value;
      const nuevoRating= [...ratings];
      nuevoRating[value]= !nuevoRating[value];
      setRatings(nuevoRating)

    }


  return (
    <GlobalContextPeliculas.Provider 
    value={{
    dataApi,
    obtenerPeliculasPopulares,
    urlImagenes,
    obtenerPeliculasPorBusqueda,
    handleChange,
    ratings,
    handleCheckbox,
    obtenerMasInformacion,
    masDetalles
    }}>
        {children}
    </GlobalContextPeliculas.Provider>
  )
}

export default GlobalPeliculasContext