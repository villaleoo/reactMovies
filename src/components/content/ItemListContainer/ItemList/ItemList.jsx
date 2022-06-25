import React, { useContext } from 'react'
import { GlobalContextPeliculas } from '../../../../context/GlobalPeliculasContext';
import { Spinner } from '../../../spinner/Spinner';
import { Item } from './Item/Item';

export const ItemList = ({arrayPeliculas}) => {
    const {urlImagenes}= useContext(GlobalContextPeliculas);
   
  return (
    <div className=' w-100 d-flex flex-wrap justify-content-around'>
        {
            arrayPeliculas.length>0 ? (
                arrayPeliculas.map((item,index)=>(
                    <div key={index}>
                        <Item
                        id={item.id}
                        titulo={item.title}
                        valoracion={item.vote_average}
                        imagenPrincipal={`${urlImagenes}${item.poster_path}`}
                        />
                    </div>
                ))
            )
            :
            <Spinner/>
        }
    </div>
  )
}
