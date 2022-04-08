import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SingleProduct from './screens/single-product'
import Home from './screens/home-screen'
import ProductList from './screens/product-list/index.js'
import Cart from './screens/cart'
import Login from './screens/login'
import Register from './screens/register'

const App = () => {
  const user = true
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/products/:category" element={<ProductList />}/>
        <Route exact path="/product/:id" element={ <SingleProduct /> }/>
        <Route exact path="/cart" element={<Cart />}/>
        <Route exact path="/register" element={<Register />}/>
        <Route exact path="/login" element={<Login />}/>
      </Routes>
    </Router>
    // <>
    //   <Cart />
    // </>
  )
}

export default App
