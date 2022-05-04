import React, { useEffect, useState } from 'react'
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Modal, Button, Space } from 'antd';
import { createOrder, deliverOrder, getOrderDetails, payOrder,  } from '../../actions/orderActions'
import ResponsiveHeader from '../../Components/Header-component/ResponsiveHeader'
import { ORDER_CREATE_RESET, ORDER_DELIVER_RESET, ORDER_PAY_RESET } from '../../constants/orderConstants'
import { USER_DETAILS_RESET } from '../../constants/userConstants'
import Message from '../../Components/message/Message'
import logo from '../../assets/images/logo.ico'

import "./style.css"
// import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'
import OpenNotificationWithIcon from '../../Components/Notification'
import Loader from '../../Components/loader/Loader'
import { Alert } from 'antd'
import { PRODUCTION_BASE_URL } from '../../utils/requestMethods'
const {REACT_APP_JPOSH_STRIPE_TEST_KEY , REACT_APP_JPOSH_STRIPE_KEY, NODE_ENV } = process.env;
const KEY = REACT_APP_JPOSH_STRIPE_TEST_KEY;


const OrderScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [stripeToken, setStripeToken] = useState();

    const {id} = useParams();
    const [isOrderPaid, setIsOrderPaid ] = useState(false);
    const orderCreate = useSelector((state) => state.orderCreate);
    const user = useSelector((state) => state.userLogin);
    const cart = useSelector((state) => state.cart);
    const orderPay = useSelector((state) => state.orderPay)
    const orderDeliver = useSelector((state) => state.orderDelivery)
   const {loading, order, error} = useSelector((state) => state.orderDetails);
 
    
    const userDets = user.userInfo

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

// modal for displaying success payment
function info() {
    Modal.info({
      title: 'Payment succesfull',
      content: (
        <div>
          <p>Order has been created successfully. Your order number is <span style={{"color" : "#1890ff"}}>{id}</span>
          </p>
          <p>
              Thanks for shopping with us.
          </p>
        </div>
      ),
      onOk() {},
    });
  }

const onToken = (token) => {
    setStripeToken(token)
}

  useEffect(() => {
    const placeOrderHandler = async() => {
        
        const headers = {
            "Content-Type" : "application/json"
        }
        if(stripeToken){
             await axios.post(`${PRODUCTION_BASE_URL}checkout/payment`, {headers, stripeToken, amount: order.totalPrice, product: order.orderItems})
        .then(response => {
            if(!response){ return <Loader />}
            if(response.status === 200){
               dispatch(payOrder(id, response))
               setIsOrderPaid(true)
               info()
            }
        })
        .catch(err => {
            console.log(err);
           
        }
            )
        }
       
      };
    if(!order || order._id !== id){
        dispatch({type: ORDER_PAY_RESET});
        dispatch({type: ORDER_DELIVER_RESET});
        dispatch(getOrderDetails(id))
    }else if(!order.isPaid){
        placeOrderHandler() 
    }  
  }, [stripeToken, order, dispatch, id])


   const deliverHandler = () => {
       dispatch(deliverOrder(order))
   }   

  return (
        <main className='palce-order-container'>
      {/* <ResponsiveHeader /> */}
      {
          loading && <Loader />
      }
      {
          error && <Message type={"error"} message={"Something went wrong! Check your connection"} />
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
                            <h4>Name : <span>{userDets && userDets.name}</span></h4>
                        </div>
                        <div className='box-item'>
                            <h4>Email : <span>{userDets && userDets.email}</span></h4>
                        </div>
                        <div className='box-item'>
                            <h4>Address : 
                                <span>
                                {cart && cart.shippingAddress.address}, {cart && cart.shippingAddress.city}{' '}
                                {cart && cart.shippingAddress.postalCode},{' '}
                                {cart && cart.shippingAddress.country}
                                </span>
                            </h4>
                            <div>
                           {
                            order && isOrderPaid ?<div> <Message type={'success'} message={`Payment succesfull`}/>
                            <Link to='/my-orders'>
                                <button className='view-order-btn'>View Your Orders</button></Link>
                             </div>: <Message type={'error'} message={`Not yet paid`} />
                            }
                        </div>
                        </div>
                    </div>
                    <hr />
                    <div className='box-det'>
                        <h3>PAYMENT METHOD</h3>
                        <div className='box-item'>
                           {
                               cart && cart.paymentMethod ?  <h4>Method : <span>{cart.paymentMethod}</span></h4>
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
                    order &&   <div className='card'>
                            {/* stripe checkout button */}
                               
                            <StripeCheckout 
                                 name="JPOSH COLLECTIONS"
                                //  image={logo}
                                 description={`Your total is £ ${order && order.totalPrice} proceed to payment`}
                                 amount={order && order.totalPrice * 100}
                                 token={onToken}
                                 stripeKey={KEY}
                                 currency='GBP'
                            >
                                    <button className='placeorder-btn'>
                                        Make Payment
                                    </button>
                            </StripeCheckout>
                    </div>
                }
                
            </div>
      </div>
    </main>
  )
}

export default OrderScreen
