import React, { useContext, useEffect } from 'react'
import { GlobalContextPeliculas } from '../../../context/GlobalPeliculasContext';
import { Header } from '../../header/Header';
import { ItemList } from './ItemList/ItemList';

export const ItemListContainer = () => {
    const {obtenerPeliculasPopulares,dataApi}= useContext(GlobalContextPeliculas)
    

   


    useEffect(() => {
      
        obtenerPeliculasPopulares()
    
      return () => {
      }
    }, [])
    

  return (
    <div>
        <Header/>
        <ItemList
            arrayPeliculas={dataApi}
        />
    </div>
  )
}
