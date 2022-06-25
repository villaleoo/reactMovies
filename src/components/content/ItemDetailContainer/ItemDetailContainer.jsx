import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContextPeliculas } from '../../../context/GlobalPeliculasContext'
import { Spinner } from '../../spinner/Spinner'
import { ItemDetail } from './ItemDetail/ItemDetail'

export const ItemDetailContainer = () => {
    const {obtenerMasInformacion,masDetalles}=useContext(GlobalContextPeliculas)
    const params = useParams()

    useEffect(() => {
        obtenerMasInformacion(params.id)
      return () => {
      }
    }, [])

  return (
    <div className='w-100 vh-100 d-flex justify-content-center align-items-center'>
       { masDetalles !== '' ? 

        <ItemDetail
        pelicula={masDetalles}/>

        :
        <Spinner/>

       }
    </div>
  )
}
