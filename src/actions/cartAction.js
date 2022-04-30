import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS } from "../constants/cartConstant";
import { PRODUCTION_BASE_URL } from "../utils/requestMethods";



export const addToCart = (id, qty, color, size) => async(dispatch, getState) => {
 
  const {data} = await axios.get(`${PRODUCTION_BASE_URL}products/find/${id}`)
  
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.title,
            desc: data.desc,
            image: data.img,
            discount: data.discount,
            discoutPrice: data.discoutPrice,
            price: data.price,
            category: data.category,
            size: size,
            color: color,
            countInStock: data.countInStock,
            reviews: data.reviews,
            qty,
            vat: data.price * qty * 0.2,
            total: data.discount ? data.discoutPrice * qty + data.discoutPrice * qty * 0.2 : data.price * qty + data.price * qty * 0.2,
        }
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
      type: CART_REMOVE_ITEM,
      payload: id,
    })
  
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
  }

  export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({
      type: CART_SAVE_SHIPPING_ADDRESS,
      payload: data,
    })
  
    localStorage.setItem('shippingAddress', JSON.stringify(data))
  }
  
  export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({
      type: CART_SAVE_PAYMENT_METHOD,
      payload: data,
    })
  
    localStorage.setItem('paymentMethod', JSON.stringify(data))
  }
