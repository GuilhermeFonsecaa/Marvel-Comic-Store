import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App.jsx'
import Home from './Pages/Home'
import Comic from './Pages/Comic'
import Cart from './Pages/Cart'
import Search from './Pages/Search'

import './index.css'
import { CartProvider } from './Context/CartContext.jsx'

const savedCart = JSON.parse(localStorage.getItem('cart')) || [];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <CartProvider initialCart={savedCart}>
      <BrowserRouter>
        <Routes>
          <Route element={<App />} >
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='comic/:id' element={<Comic />} />
            <Route path='/search' element={<Search />} />
            <Route path='/search/comic/:id' element={<Comic />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>,
)
