import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SingleProduct from './screens/single-product'
import Home from './screens/home-screen'
import ProductList from './screens/product-list/index.js'
import Cart from './screens/cart'
import Login from './screens/login'
import Register from './screens/register'
import AllProductList from './screens/all-products'
import Success from './screens/success-screen'
import { useSelector } from 'react-redux'

const App = () => {
  const user = useSelector((state) => state.user.currentUser)
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path='/success' element={<Success />} />
        <Route  path="/products/:category" element={<ProductList />}/>
        <Route exact path="/product/:id" element={ <SingleProduct /> }/>
        <Route path='/products' element={< AllProductList />}></Route>
        <Route  path="/cart" element={user ? <Cart /> : <Login/>}> </Route>
        <Route  path="/register" element={<Register />}/>
        <Route  path="/login"  element={user ? <Home /> : <Login/>} />
      </Routes>
    </Router>
    // <>
    //   <Cart />
    // </>
  )
}

export default App
