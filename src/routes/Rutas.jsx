import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ItemListContainer } from '../components/content/ItemListContainer/ItemListContainer'


export const Rutas = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route>
                <Route index element={<ItemListContainer/>}/>
                <Route path='/valoracion/:min/:max' element={<ItemListContainer/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}
