import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SingleProduct from './screens/single-product'
import Home from './screens/home-screen'
import ProductList from './screens/product-list/index.js'
import Cart from './screens/cart'
import Login from './screens/login'
import Register from './screens/register'
import AllProductList from './screens/all-products'
import Success from './screens/success-screen'
import AdminHome from './adminDashboard/pages/home/Home'
import UserProfileDash from './adminDashboard/pages/user/User'
import NewuserDash from './adminDashboard/pages/newUser/NewUser'
import UserListDash from './adminDashboard/pages/userList/UserList'
import NewProduct from './adminDashboard/pages/newProduct/NewProduct'
import DashProduct from './adminDashboard/pages/product/Product'
import DashProductList from './adminDashboard/pages/productList/ProductList'

const App = () => {
  // const user = useSelector((state) => state.userLogin)
  return (
    <Router>
      <Routes>
        
        {/* admin dashboard Routes */}
        <Route path='/admin-home' element={<AdminHome />}/>
        <Route path='/user/:userId' element={<UserProfileDash />} />
        <Route path='/newUser' element={<NewuserDash />}/>
        <Route path='/users' element={<UserListDash />}/>
        <Route path='/newproduct' element={<NewProduct  />}/>
        <Route path='/dash-products' element={<DashProductList />} />
        <Route path='/dash-product/:productId' element={<DashProduct />}/>
        {/* admin dashboard Routes end */}
        <Route exact path="/" element={<Home/>}/>
        <Route path='/success' element={<Success />} />
        <Route  path="/products/:category" element={<ProductList />}/>
        <Route path="/product/:id" element={ <SingleProduct /> }/>
        <Route path='/products' element={< AllProductList />}></Route>
        <Route  path="/cart" element={ <Cart /> }> </Route>
        <Route  path="/register" element={<Register />}/>
        <Route  path="/login"  element={ <Login/>} />
      </Routes>
    </Router>
    // <>
    //   <Cart />
    // </>
  )
}

export default App
