import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContextPeliculas } from '../../../context/GlobalPeliculasContext'
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
    < div>
    
       { masDetalles !== '' ? 
        <ItemDetail
        pelicula={masDetalles}/>
        :
        <h2>cargandoo</h2>
       }
    </div>
  )
}
