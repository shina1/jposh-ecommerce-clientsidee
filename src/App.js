import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SingleProduct from './screens/single-product'
import Home from './screens/home-screen'
import ProductList from './screens/product-list/index.js'
import Cart from './screens/cart'
import Login from './screens/login'
import Register from './screens/register'
import AllProductList from './screens/all-products'

const App = () => {
  const user = true
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route  path="/products/:category" element={<ProductList />}/>
        <Route exact path="/product/:id" element={ <SingleProduct /> }/>
        <Route path='/products' element={< AllProductList />}></Route>
        <Route  path="/cart" element={<Cart />}/>
        <Route  path="/register" element={<Register />}/>
        <Route  path="/login" element={<Login />}/>
      </Routes>
    </Router>
    // <>
    //   <Cart />
    // </>
  )
}

export default App
