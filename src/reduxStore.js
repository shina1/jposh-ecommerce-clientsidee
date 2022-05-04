import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import { userDeleteReducer, userDetailsReducer, userListNewReducer, userListReducer, userListStatsReducer, userLoginReducer , userRegisterReduceder, userUpdateProfileReducer, userUpdateReducer} from "./reducer/userReducers";
import { cartReducer } from "./reducer/cartReducers";
import { listPorpularProductsReducer, listProductByCategoryReducer, productCreateReducer, productDeleteReducer, productDetailsReducer, productListReducer, productReviewCreateReducer, productTopRatedReducer, productUpdateReducer } from "./reducer/productReducers";
import {orderAnalysisReducer, orderCreateReducer, OrderDeleteReducer, orderDeliverReducer, orderDetailsReducer, orderListMyReducer, orderListNewReducer, orderListReducer, orderPayReducer} from './reducer/orderReducer'
// import { listNewOrders } from "./actions/orderActions";


const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReduceder,
    userDetials: userDetailsReducer,
    userList: userListReducer,
    userNewList: userListNewReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
    userProfileUpdate: userUpdateProfileReducer,
    userStats: userListStatsReducer,
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
    orderList: orderListReducer,
    orderListNew: orderListNewReducer,
    orderAnalysis: orderAnalysisReducer,
    orderDelete: OrderDeleteReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

  const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {}

  const userInfoFromLocalStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
  const paymentMethodFromLS = localStorage.getItem('paymentMethod') ? JSON.parse(localStorage.getItem('paymentMethod')) : null


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