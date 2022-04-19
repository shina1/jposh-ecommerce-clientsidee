import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import { userLoginReducer , userRegisterReduceder} from "./reducer/userReducers";
import { cartReducer } from "./reducer/cartReducers";
import { listPorpularProductsReducer, listProductByCategoryReducer, productCreateReducer, productDeleteReducer, productDetailsReducer, productListReducer, productReviewCreateReducer, productTopRatedReducer, productUpdateReducer } from "./reducer/productReducers";
import {orderCreateReducer, orderDeliverReducer, orderDetailsReducer, orderListMyReducer, orderListReducer, orderPayReducer} from './reducer/orderReducer'


const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReduceder,
    cart: cartReducer,
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    productReview: productReviewCreateReducer,
    productTopRated: productTopRatedReducer,
    porpularProducts: listPorpularProductsReducer,
    productCategory: listProductByCategoryReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderDelivery: orderDeliverReducer,
    orderListMy: orderListMyReducer,
    orderList: orderListReducer
})

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

  const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {}

  const userInfoFromLocalStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
  const paymentMethodFromLS = localStorage.getItem('paymentMethod') ? JSON.parse(localStorage.getItem('paymentMethod')) : null
   console.log(paymentMethodFromLS)

const initialState = {
    cart: {
        cartItems: cartItemsFromStorage,
        shippingAddress: shippingAddressFromStorage,
        paymentMethod : paymentMethodFromLS,
      },
    userLogin: { userInfo: userInfoFromLocalStorage},
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store