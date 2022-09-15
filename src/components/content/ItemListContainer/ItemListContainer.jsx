import React, { useContext, useEffect} from 'react'
import { useState } from 'react';
import { GlobalContextPeliculas } from '../../../context/GlobalPeliculasContext';
import { Header } from '../../header/Header';
import { Sidebar } from '../../sidebar/Sidebar';
import { ItemList } from './ItemList/ItemList';
import './layout.scss'

export const ItemListContainer = () => {
    const {obtenerPeliculasPopulares,dataApi,ratings}= useContext(GlobalContextPeliculas);
    

    
    let obtenerIndex= ratings.indexOf(true)
      

    let filtrado = dataApi.filter(filtrar => {
      if (obtenerIndex === 0 ) {
        return (filtrar.vote_average > 8)
      }
      if (obtenerIndex === 1) {
        return ((filtrar.vote_average <= 8) && (filtrar.vote_average > 6) )
      }
      if (obtenerIndex === 2) {
        return ((filtrar.vote_average <= 6) && (filtrar.vote_average > 4))
      }
      if (obtenerIndex === 3) {
        return ((filtrar.vote_average <= 4 )&& (filtrar.vote_average > 3));
      }
      if (obtenerIndex === 4) {
        return (filtrar.vote_average <= 3 ) ;
      }
      
    })
    
   
    
    useEffect(() => {
      
        obtenerPeliculasPopulares();
    
      return () => {
      }
    }, [])
    
    
  return (
    <div>
        <Header/>
        <div className='d-flex w-100'>
            <Sidebar/>
            {
              filtrado.length > 0 ?
              <ItemList
              arrayPeliculas={filtrado}/>
              :
              <ItemList
              arrayPeliculas={dataApi}
              />
            }
        </div>
    </div>
  )
}
