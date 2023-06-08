import React from 'react'
import Homep from './Homep'
import { Route, Routes } from 'react-router-dom'
import Cuisine from './Cuisine'


function Pages() {
  return (
   
      <Routes>
          <Route path='/' element={<Homep/>} />
          <Route path='/cuisine: type' element={<Cuisine/>} />
      </Routes>
   
  )
}

export default Pages
