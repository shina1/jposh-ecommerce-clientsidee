import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import Loader from './Components/loader/Loader';
import ErrorBoundary from "./Components/errorBoundary/index";
import ResponsiveHeader from './Components/Header-component/ResponsiveHeader';
import Footer from './Components/Footer';


const Home = lazy(() => import('./screens/home-screen'));
const SingleProduct = lazy(() => import('./screens/single-product'));
const ProductList = lazy(() => import('./screens/product-list/index.js'));
const Cart = lazy(() => import('./screens/cart'));
const Login = lazy(() => import('./screens/login'));
const Register = lazy(() => import('./screens/register'));
const AllProductList = lazy(() => import('./screens/all-products'));
const Success = lazy(() => import('./screens/success-screen'));
const AdminHome = lazy(() => import('./adminDashboard/pages/home/Home'));
const UserProfileDash = lazy(() => import('./adminDashboard/pages/user/User'));
const NewuserDash = lazy(() => import('./adminDashboard/pages/newUser/NewUser'));
const UserListDash = lazy(() => import('./adminDashboard/pages/userList/UserList'));
const NewProduct = lazy(() => import('./adminDashboard/pages/newProduct/NewProduct'));
const DashProduct = lazy(() => import('./adminDashboard/pages/product/Product'));
const DashProductList = lazy(() => import('./adminDashboard/pages/productList/ProductList'));
const Shipping  = lazy(() => import('./screens/shippingScreen'));
const PaymentMethod = lazy(() => import('./screens/paymentMethod'));
const PlaceOrderScreen  = lazy(() => import('./screens/placeOrderScreen'));
const OrderScreen = lazy(() => import('./screens/orderScreen'));
const DashOrderList = lazy(() => import('./adminDashboard/pages/orderList/orderList'));
const AboutScreen = lazy(() => import('./screens/aboutPage'));
const Categories = lazy(() => import('./Components/Categories/index'))
const MyOrders  = lazy(() => import('./screens/myOrders'))
const DashOrderInfo  = lazy(() => import('./adminDashboard/pages/order'))



const App = () => {
  // const user = useSelector((state) => state.userLogin)
  return (
    <Router>
      <ErrorBoundary>
      <Suspense fallback={<Loader />}>
      <ResponsiveHeader />
      <Routes>
      <Route exact path="/" element={<Home/>}/>
        {/* admin dashboard Routes */}
        <Route path='/admin-home' element={<AdminHome />}/>
        <Route path='/user/:userId' element={<UserProfileDash />} />
        <Route path='/newUser' element={<NewuserDash />}/>
        <Route path='/users' element={<UserListDash />}/>
        <Route path='/newproduct' element={<NewProduct  />}/>
        <Route path='/dash-products' element={<DashProductList />} />
        <Route path='/dash-product/:productId' element={<DashProduct />}/>
        <Route path='/dash-orders' element={<DashOrderList />} />
        <Route path='/dash-order/:orderId' element={<DashOrderInfo />} />
        {/* admin dashboard Routes end */}
        
        <Route path='/success' element={<Success />} />
        <Route  path="/products/:category" element={<ProductList />}/>
        <Route path="/product/:id" element={ <SingleProduct /> }/>
        <Route path='/products' element={< AllProductList />}></Route>
        <Route  path="/cart" element={ <Cart /> }> </Route>
        <Route  path="/register" element={<Register />}/>
        <Route  path="/login"  element={ <Login/>} />
        <Route path='/shipping' element={<Shipping />} />
        <Route path='/payment' element={<PaymentMethod />} />
        <Route path='/placeoder' element={<PlaceOrderScreen />} />
        <Route path='/order/:id' element={<OrderScreen />} />
        <Route path='/about-us' element={<AboutScreen />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/my-orders' element={<MyOrders />} />
      </Routes>
      <Footer />
      </Suspense>
      </ErrorBoundary>
    </Router>
  )
}

export default App


