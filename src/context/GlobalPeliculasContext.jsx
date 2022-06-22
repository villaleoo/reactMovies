import React, { createContext, useState } from 'react';

export const GlobalContextPeliculas = createContext('');


export const GlobalPeliculasContext = ({children}) => {
    const [dataApi, setDataApi]= useState([]);
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

    function handleChange (e){
        setBusqueda((e.target.value));
      }

const [checkValue, setCheckValue]= useState(true);
const [filtradoPorValoracion, setFiltradoPorValoracion]= useState([]);

// let pruebita= dataApi.filter(peli => (parseInt(peli.vote_average) > numeroMin ) && (parseInt(peli.vote_average)<= numeroMax));


function handleFiltrarPorValoracion (numeroMin,numeroMax){
   
   
    // let pruebita= peliculas.filter(peli => (parseInt(peli.vote_average) > numeroMin ) && (parseInt(peli.vote_average)<= numeroMax));
        if(checkValue == true){
          console.log(checkValue, "es el valor");
          
        }else{
          console.log(checkValue, 'este es el valor');
          
        }
        setCheckValue(!checkValue)
      }
    
  
    
  

   

  return (
    <GlobalContextPeliculas.Provider value={{dataApi,obtenerPeliculasPopulares,urlImagenes,obtenerPeliculasPorBusqueda,handleChange,checkValue,filtradoPorValoracion,handleFiltrarPorValoracion}}>
        {children}
    </GlobalContextPeliculas.Provider>
  )
}

export default GlobalPeliculasContext