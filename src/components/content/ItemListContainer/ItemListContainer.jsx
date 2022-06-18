import React from 'react'

export const ItemListContainer = () => {

   const apiKeyV4 ='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOGJkMWMwODVjM2IxNDNiNThmMzkyOTM3N2QxNGRlNyIsInN1YiI6IjYyYWUxOTFlMDljMjRjMDA2MWE3ZmM0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cKCk1RNb0vYCOEwCFC8nXTwBr5Gpw75avWjcrpXOeKc'
   const apiKeyV3='28bd1c085c3b143b58f3929377d14de7';
   const URLBase= 'https://api.themoviedb.org/3';
   const cantidadDePeliculas = '&page=5'
   const URLBasePeliculasPopulares= `${URLBase}/movie/popular?api_key=${apiKeyV3}`;
   
   console.log(URLBasePeliculasPopulares);

   const obtenerPeliculas = async (url)=>{
       fetch(url).then(res=>res.json()).then(data=>{
        console.log(data.results);
       })
    //    try {
    //     const data = await fetch (url);
    //     const resolve = data.json()
    //     console.log(resolve);
    //    } catch (error) {
    //     console.log(error);
    //    }
    }
    
    obtenerPeliculas(URLBasePeliculasPopulares)

  return (
    <div>
        <h1>hola mundo</h1>
    </div>
  )
}
