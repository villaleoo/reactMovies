import React, { useContext, useEffect, useState } from 'react'
import { GlobalContextPeliculas } from '../../../context/GlobalPeliculasContext';
import { Header } from '../../header/Header';
import { Sidebar } from '../../sidebar/Sidebar';
import './layout.scss'

import { ItemList } from './ItemList/ItemList';

export const ItemListContainer = () => {
    const {obtenerPeliculasPopulares,dataApi,ratings}= useContext(GlobalContextPeliculas);

    let indexOfRating=ratings.indexOf(true);

    let filtrado = dataApi.filter(filtrar => {
      if (indexOfRating === 0 ) {
        return (parseInt(filtrar.vote_average) > 8 ) && (parseInt(filtrar.vote_average)<= 10);
      }
      if (indexOfRating === 1) {
        return (parseInt(filtrar.vote_average) > 6 ) && (parseInt(filtrar.vote_average)<= 8);
      }
      if (indexOfRating === 2) {
        return (parseInt(filtrar.vote_average) > 4 ) && (parseInt(filtrar.vote_average)<= 6);
      }
      if (indexOfRating === 3) {
        return (parseInt(filtrar.vote_average) > 2 ) && (parseInt(filtrar.vote_average)<= 4);
      }
      if (indexOfRating === 4) {
        return (parseInt(filtrar.vote_average) > 0 ) && (parseInt(filtrar.vote_average)<= 2);
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
