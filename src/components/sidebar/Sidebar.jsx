import React, { useContext, useState } from 'react'
import { GlobalContextPeliculas } from '../../context/GlobalPeliculasContext'
import './sidebar.scss'


export const Sidebar = ({peliculas}) => {
const {checkValue, handleFiltrarPorValoracion}= useContext(GlobalContextPeliculas);
//   const [checkValue, setCheckValue]= useState(true);
  


// function pruebaki (numeroMin,numeroMax){
//     let pruebita= peliculas.filter(peli => (parseInt(peli.vote_average) > numeroMin ) && (parseInt(peli.vote_average)<= numeroMax));
//     if(checkValue == true){
//       console.log(checkValue, "es el valor");
//       console.log(pruebita);
//     }else{
//       pruebita=false
//       console.log(pruebita);
//     }
//     setCheckValue(!checkValue)
//   }

  return (
    <div className='w-50'>
      
        <div className="rating">

          <input type="checkbox" name="rating" id="r1" value={checkValue} onChange={()=>handleFiltrarPorValoracion(8,10)}/>
          <label htmlFor="r1"></label>

          <input type="checkbox" name="rating" id="r2" value={checkValue} onChange={()=>handleFiltrarPorValoracion(6,8)}/>
          <label htmlFor="r2"></label>

          <input type="checkbox" name="rating" id="r3" value={checkValue} onChange={()=>handleFiltrarPorValoracion(4,6)}/>
          <label htmlFor="r3"></label>

          <input type="checkbox" name="rating" id="r4" value={checkValue} onChange={()=>handleFiltrarPorValoracion(2,4)} />
          <label htmlFor="r4"></label>

          <input type="checkbox" name="rating" id="r5" value={checkValue} onChange={()=>handleFiltrarPorValoracion(0,2)}/>
          <label htmlFor="r5"></label>

        </div>
    </div>
  )
}
