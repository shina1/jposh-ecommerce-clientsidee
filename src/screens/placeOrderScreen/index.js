import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { createOrder } from '../../actions/orderActions'
import ResponsiveHeader from '../../Components/Header-component/ResponsiveHeader'
import { ORDER_CREATE_RESET } from '../../constants/orderConstants'
import { USER_DETAILS_RESET } from '../../constants/userConstants'

import "./style.css"

const PlaceOrderScreen = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [savePay, setSavePay] = useState()
    const orderCreate = useSelector((state) => state.orderCreate)
    const user = useSelector((state) => state.userLogin)
    const cart = useSelector((state) => state.cart)
    
    const userDets = user.userInfo

   if(!cart.shippingAddress.address) {
        navigate('/shipping')
   } else if(!cart.paymentMethod){
       navigate('/payment')
   }

   const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }
cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.total, 0)
)
cart.itemsNumber = cart.cartItems.length
cart.totalPrice = (
    Number(cart.itemsPrice)
).toFixed(2)
// persisting payment method
useEffect(() => {
    setSavePay(cart.paymentMethod)
}, [cart])

useEffect(() => {
    if(orderCreate.success){
        navigate(`/order/${orderCreate.order._id}`)
        dispatch({type: USER_DETAILS_RESET})
        dispatch({type: ORDER_CREATE_RESET})
    }
}, [navigate, orderCreate])


const placeOrderHandler = () => {
    dispatch(
        createOrder({
            orderItems: cart.cartItems,
            shippingAddress: cart.shippingAddress,
            paymentMethod: savePay,
            itemsPrice: cart.itemsPrice,
            itemsNumber: cart.itemsNumber,
            totalPrice: cart.totalPrice
        })
    )
}
  return (
    <main className='palce-order-container'>
      {/* <ResponsiveHeader /> */}
      <div className='place-order-inner-cont'>
            <div className='place-order-inner-left'>
                <div className='place-order-title'>
                    <h2>ORDER REVIEW</h2>
                </div>
                <div className='review-box'>
                    <div className='box-det'>
                        <h3>SHIPPING</h3>
                        <div className='box-item'>
                            <h4>Name : <span>{userDets.name}</span></h4>
                        </div>
                        <div className='box-item'>
                            <h4>Email : <span>{userDets.email}</span></h4>
                        </div>
                        <div className='box-item'>
                            <h4>Address : 
                                <span>
                                {cart.shippingAddress.address}, {cart.shippingAddress.city}{' '}
                                {cart.shippingAddress.postalCode},{' '}
                                {cart.shippingAddress.country}
                                </span>
                            </h4>
                        </div>
                    </div>
                    <hr />
                    <div className='box-det'>
                        <h3>PAYMENT METHOD</h3>
                        <div className='box-item'>
                           {
                               savePay ?  <h4>Method : <span>{savePay}</span></h4>
                               :
                               <Link to='/payment'>
                                   <h4>Click to select a payment method</h4>
                               </Link>
                           }
                        </div>
                        
                    </div>
                    <hr />
                    <div className='box-det'>
                        <h3>ORDER ITEMS</h3>
                        {
                           cart.cartItems &&  cart.cartItems.map((item) => {
                           return <div className='placeOrdeItems' key={item._id}>
                                <img src={item.image} alt={item.name} />
                                <div><h4>{item.name}</h4></div>
                                <div><h4> {`${item.qty} x ${item.price}`} = {item.qty * item.price} </h4></div>
                            </div>
                        })
                        }
                        
                    </div>
                </div>
            </div>
            <div className='place-order-inner-right'>
                <div className='place-order-title'>
                    <h3>ORDER SUMMARY</h3>
                </div>
                <hr />
                <div className='order-review-box'>
                    <h4>Total Itmes</h4> <span>{cart.itemsNumber}</span>
                </div>
                <hr />
                <div className='order-review-box'>
                    <h4>Total Price</h4> <span>{cart.totalPrice}</span>
                </div>
                <button className='placeorder-btn' onClick={placeOrderHandler}>
                    Place Order
                </button>
            </div>
      </div>
    </main>
  )
}

export default PlaceOrderScreen
