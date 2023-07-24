import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../screens/Home'
import Products from '../screens/Products'
import Collections from '../screens/Collections'
import Illustrators from '../screens/Illustrators'


export default function RouterPage() {
  return (

    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/collections' element={<Collections />} />
        <Route path='/illustrators' element={<Illustrators />} />
      </Routes>
    </Router>

  )
}
