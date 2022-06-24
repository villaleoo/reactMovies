import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ItemDetailContainer } from '../components/content/ItemDetailContainer/ItemDetailContainer'
import { ItemListContainer } from '../components/content/ItemListContainer/ItemListContainer'


export const Rutas = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route>
                <Route index element={<ItemListContainer/>}/>
                <Route path='/pelicula/:id' element={<ItemDetailContainer/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}
