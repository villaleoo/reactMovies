import React, { createContext, useState } from 'react';

export const GlobalContextPeliculas = createContext('');


export const GlobalPeliculasContext = ({children}) => {
    const [dataApi, setDataApi]= useState([]);
    

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

   

  return (
    <GlobalContextPeliculas.Provider value={{dataApi,obtenerPeliculasPopulares,urlImagenes}}>
        {children}
    </GlobalContextPeliculas.Provider>
  )
}

export default GlobalPeliculasContext