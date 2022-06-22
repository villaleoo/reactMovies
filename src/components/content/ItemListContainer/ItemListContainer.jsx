import React, { useContext, useEffect } from 'react'
import { GlobalContextPeliculas } from '../../../context/GlobalPeliculasContext';
import { Header } from '../../header/Header';
import { Sidebar } from '../../sidebar/Sidebar';

import { ItemList } from './ItemList/ItemList';

export const ItemListContainer = () => {
    const {obtenerPeliculasPopulares,dataApi,filtradoPorValoracion}= useContext(GlobalContextPeliculas)
 

    useEffect(() => {
      
        obtenerPeliculasPopulares();
  
    
      return () => {
      }
    }, [])
    

  return (
    <div>
        <Header/>
        <div className='d-flex w-100'>
          {
            filtradoPorValoracion.length >0 &&
            <ItemList
            arrayPeliculas={filtradoPorValoracion}
            />
          }
          
            <Sidebar
            peliculas={dataApi}
            />
            <ItemList
            arrayPeliculas={dataApi }
            />
            
        
        </div>
        
    </div>
  )
}
