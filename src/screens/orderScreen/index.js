import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { createOrder, getOrderDetails,  } from '../../actions/orderActions'
import ResponsiveHeader from '../../Components/Header-component/ResponsiveHeader'
import { ORDER_CREATE_RESET, ORDER_DELIVER_RESET, ORDER_PAY_RESET } from '../../constants/orderConstants'
import { USER_DETAILS_RESET } from '../../constants/userConstants'
import Message from '../../Components/message/Message'

import "./style.css"
// import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'
const KEY = process.env.REACT_APP_JPOSH_STRIPE_TEST_KEY

const OrderScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [stripeToken, setStripeToken] = useState();

    const {id} = useParams();
    const orderCreate = useSelector((state) => state.orderCreate);
    const user = useSelector((state) => state.userLogin);
    const cart = useSelector((state) => state.cart);
   const {loading, order, error} = useSelector((state) => state.orderDetails);
 
    
    const userDets = user.userInfo

    useEffect(() => {
        if(!order || order._id !== id){
            dispatch({type: ORDER_PAY_RESET});
            dispatch({type: ORDER_DELIVER_RESET});
            dispatch(getOrderDetails(id))
        }
    }, [dispatch, id])

// decimal converter
   const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }


cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
)

cart.itemsNumber = cart.cartItems.length

cart.totalPrice = (
    Number(cart.itemsPrice)
).toFixed(2)




const onToken = (token) => {
    setStripeToken(token)
}

  useEffect(() => {
    const placeOrderHandler = async() => {
        
        const headers = {
            "Content-Type" : "application/json"
        }
        console.log(stripeToken)
        if(stripeToken){
             await axios.post(`http://localhost:2600/api/v1/checkout/payment`, {headers, stripeToken, amount: order.totalPrice, product: order.orderItems})
        .then(response => {
            console.log('response',response)
            const {status} = response
        })
        .catch(err => {
            console.log(err);
            throw new Error(err)}
            )
        }
       
      };
      if(!order || order._id !== orderId)
      placeOrderHandler()
  }, [stripeToken, order])
      


console.log('the order',order);
  return (
        <main className='palce-order-container'>
      <ResponsiveHeader />
      {
          loading && <h2>loading...</h2>
      }
      <div className='place-order-inner-cont'>
            <div className='place-order-inner-left'>
                <div className='place-order-title'>
                    <h2>ORDER: {id}</h2>
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
                           <div>
                           {
                               order &&  order.isDelivered ? <Message type={'success'} message={`Order delivered on : ${order.updatedAt.substring(0, 16)}`}/> : <Message type={'error'} message={`Not yet delivered`} />
                            }
                           </div>
                        </div>
                    </div>
                    <hr />
                    <div className='box-det'>
                        <h3>PAYMENT METHOD</h3>
                        <div className='box-item'>
                           {
                               cart.paymentMethod ?  <h4>Method : <span>{cart.paymentMethod}</span></h4>
                               :
                               <Link to='/payment'>
                                   <h4>Click to select a payment method</h4>
                               </Link>
                           }
                        </div>
                        <div>
                           {
                               order &&  order.isPaid ? <Message type={'success'} message={`Order payed on : ${order.paidAt.substring(0, 16)}`}/> : <Message type={'error'} message={`Not yet paid`} />
                            }
                           </div>
                        
                    </div>
                    <hr />
                    <div className='box-det'>
                        <h3>ORDER ITEMS</h3>
                        {
                           order &&  order.orderItems.map((item) => {
                           return <div className='ordeItems' key={item._id}>
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
                    <h4>Total Itmes</h4> <span>{order && order.orderItems.length}</span>
                </div>
                <hr />
                <div className='order-review-box'>
                    <h4>Total Price</h4> <span>{order && order.totalPrice}</span>
                </div>
                {
                    order ?  <div className='card'>
                            {/* stripe checkout button */}
                               
                            <StripeCheckout 
                                 name="JPOSH COLLECTIONS"
                                //  image={logo}
                                 description={`Your total is £ ${order.totalPrice} proceed to payment`}
                                 amount={order.totalPrice * 100}
                                 token={onToken}
                                 stripeKey={KEY}
                            >
                                    <button className='placeorder-btn' >
                                        Make Payment
                                    </button>
                            </StripeCheckout>
                    </div>
                    :
                    <h3>You have no order</h3>
                }
                
            </div>
      </div>
    </main>
  )
}

export default OrderScreen
