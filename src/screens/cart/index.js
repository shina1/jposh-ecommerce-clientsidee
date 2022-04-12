import React, { useEffect, useState } from 'react'
import { Modal } from 'antd';
import Footer from '../../Components/Footer'
import ResponsiveHeader from '../../Components/Header-component/ResponsiveHeader'
import { Add, Remove } from '@material-ui/icons'
import styledComponents from 'styled-components'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout';

import './style.css'
import logo from '../../assets/images/logo.ico'
import { userRequest } from '../../utils/requestMethods.js';

const Hr = styledComponents.hr`
background-color: #eee;
border: none;
height: 1px;
`

const {REACT_APP_JPOSH_STRIPE_TEST_KEY , REACT_APP_JPOSH_STRIPE_KEY, NODE_ENV } = process.env;
const KEY =  NODE_ENV === 'production' ?  REACT_APP_JPOSH_STRIPE_KEY : REACT_APP_JPOSH_STRIPE_TEST_KEY;

const Cart = () => {
    const [cartQuantity, setCartQuantity] = useState(1)
    const [stripeToken, setStripeToken] = useState(null)
   
    const cartState = useSelector(state => state.cart)
    const navigate = useNavigate()
    

    const handleCartQuantity = (params) =>{
            if(params === "add"){
                setCartQuantity(cartQuantity + 1)
            }
            else{
                cartQuantity > 0 && setCartQuantity(cartQuantity - 1)
            }
    }

    function success() {
        Modal.success({
          content: 'Payment Successfull',
        });
      }

      function error(message) {
        Modal.error({
          title: 'Error',
          content: message,
        });
      }
    // stripe ontoekn function

    const onToken = (token) => {
            setStripeToken(token) 
    }
  useEffect(() =>{
    const makeRequest = async () => {
        try {
            const res = await userRequest.post("checkout/payment", {
                tokenId: stripeToken.id,
                amount: cartState.total * 100,
            });

            if(res){
             success()
            }else{
                error("Payment Failed")
            }
            navigate("/success", {state : {data: res.data,  cart: cartState}})
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    };
    stripeToken && cartState.total >= 1 && makeRequest() ;
  }, [stripeToken, cartState.total, navigate])
  return (
    <main className='cart-main-cont'>
        <ResponsiveHeader />
        <section className='cart-container'>
            <div className='title-container'><h2>Your Bag</h2></div>
            {/* <div className='cart-body'> */}
               <div className='cart-top'>
                    <div className='top-btn'>
                            <Link to={"/products"}>
                                <button className='left-btn'>CONTINUE SHOPPING
                                </button>
                            </Link>
                        </div>
                            <div className='top-texts'>
                                <span>Your bag(2)</span>
                                <span>Your wishlist (0)</span>
                            </div>
                        <div className=' top-btn'>
                        <StripeCheckout
                            name="JPOSH COLLECTIONS"
                            image={logo}
                            billingAddress
                            shippingAddress
                            description={`Your total is £${cartState.total} proceed to payment`}
                            amount={cartState.total * 100}
                            token={onToken}
                            stripeKey={KEY}
                        >
                       {
                           cartState.total > 0 ?  <button className='right-btn' >CHECKOUT NOW</button>
                           :
                           <button disabled="disabled" className='right-btn' >CHECKOUT NOW</button>
                       }
                    </StripeCheckout>
                        </div>
                </div>
            {/* </div> */}
            <div className='cart-bottom'>
                <div className='cart-info'>

                    {
                     cartState.products.map(product => (
                        <div className='product' key={product._id + Math.random()}>
                            <div className='product-details'>
                                <img src={product.img} alt='product'/>
                                <div className='details'>
                                    <span className='pro-name'><b>Product</b>: {product.title}</span>
                                    <span className='pro-id'><b>Color</b>: {product.color}</span>
                                    <span className='pro-size'><b>Size</b>: {product.size}</span>
                                </div>
                            </div>
                            <div className='price-details'>
                                <div className='product-amount-container'>
                                    <Add onClick={() => handleCartQuantity("add")}/>
                                        <div className='product-amount'><span>{product.quantity}</span></div>
                                    <Remove onClick={() => handleCartQuantity("rem")}/>
                                </div>
                                <div className='product-price'><span>£ {product.price * product.quantity}</span></div>
                            </div>
                   </div>
                     ))   
                    }
                   <Hr />
                  
                </div>
                <div className='cart-summary'>
                    <h2>Order Summary</h2>
                    <div className='summary-item'>
                        <h4>Subtotal</h4>
                        <span>£ {cartState.total}</span>
                    </div>
                    {/* <div className='summary-item'>
                        <h4>Estimated Shipping</h4>
                        <span>£ 300</span>
                    </div>
                    <div className='summary-item'>
                        <h4>Shipping Discount</h4>
                        <span>£ -5.99</span>
                    </div> */}
                    <div className='summary-item'>
                        <h4 className='total'>Total</h4>
                        <span>£ {cartState.total}</span>
                    </div>
                    <StripeCheckout
                    data-currency='gbp'
                    name="JPOSH COLLECTIONS"
                    image={logo}
                    billingAddress
                    shippingAddress
                    description={`Your total is £${cartState.total} proceed to payment`}
                    amount={cartState.total * 100}
                    token={onToken}
                    stripeKey={KEY}
                    >
                        {
                            cartState.total > 0 ? <button  className='checkout-btn' >CHECKOUT NOW
                            </button> :
                            <button disabled="disabled" className='checkout-btn' >CHECKOUT NOW
                            </button>
                        }
                    </StripeCheckout>
                </div>
            </div>
        </section>
        <Footer />
    </main>
  )
}

export default Cart
