import React, { useEffect, useState } from 'react'
import { Modal } from 'antd';
import Footer from '../../Components/Footer'
import ResponsiveHeader from '../../Components/Header-component/ResponsiveHeader'
import { Add, Remove, Delete } from '@material-ui/icons'
import styledComponents from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import './style.css'
import { removeFromCart } from '../../actions/cartAction';
import Message from '../../Components/message/Message';

const Hr = styledComponents.hr`
background-color: #eee;
border: none;
height: 1px;
`

// const {REACT_APP_JPOSH_STRIPE_TEST_KEY , REACT_APP_JPOSH_STRIPE_KEY, NODE_ENV } = process.env;
// const KEY =  NODE_ENV === 'production' ?  REACT_APP_JPOSH_STRIPE_KEY : REACT_APP_JPOSH_STRIPE_TEST_KEY;

const Cart = () => {
    const [cartQuantity, setCartQuantity] = useState(1)
    const navigate = useNavigate()
    // const [stripeToken, setStripeToken] = useState(null)
    const  dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)
    const userLogin = useSelector((state) => state.userLogin)

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

   
    
    let total = cart.cartItems.reduce((acc, val) => acc + val.total ,0);
    // let vat = subTotal * 0.2;
    

    const handleCheckout = () => {
        if(userLogin.userInfo !== null){
            navigate('/shipping')
        }
        else(
            navigate('/login')
        )
    };
    
    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
      };
  return (
      
    <main className='cart-main-cont'>
        {/* <ResponsiveHeader /> */}
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
                                <span>Your bag({cart.cartItems.reduce((acc, item) => acc + item.qty, 0)})</span>
                                {/* <span>Your wishlist (0)</span> */}
                            </div>
                        <div className=' top-btn'>
                             {
                                <button className='right-btn' disabled={total <= 0 } onClick={handleCheckout}>CHECKOUT NOW</button>
                             }   
                        </div>
                </div>
            {/* </div> */}
            <div className='cart-bottom'>
                <div className='cart-info'>
                    {
                        total <= 0  && <Message type={'error'} message={'Your cart is empty'} />
                    }

                    {
                     cart.cartItems.map(product => (
                         
                        <div className='product' key={product + Math.random()}>
                            <div className='product-details'>
                                <img src={product.image} alt='product'/>
                                <div className='details'>
                                    <span className='pro-name'><b>Product</b>: {product.name}</span>
                                    <span className='pro-id'><b>Color</b>: {product.color}</span>
                                    <span className='pro-size'><b>Size</b>: {product.size}</span>
                                </div>
                            </div>
                            <div className='price-details'>
                                <div className='product-amount-container'>
                                    <Add onClick={() => handleCartQuantity("add")}/>
                                        <div className='product-amount'><span>{product.qty}</span></div>
                                    <Remove onClick={() => handleCartQuantity("rem")}/>
                                    <Delete onClick={()=> removeFromCartHandler(product.product)}/>
                                </div>
                                <div className='product-price'><span>£ {product.discount ? product.discoutPrice * product.qty : product.price * product.qty}</span></div>
                            </div>
                            
                   </div>
                   
                     ))   
                    }
                   <Hr />
                  
                </div>
                <div className='cart-summary'>
                    <h2>Order Summary</h2>
                    <div className='summary-item'>
                        <h4>Subtotal Items</h4>
                        <span>{cart.cartItems.reduce((acc, item) => acc + item.qty, 0)}</span>
                    </div>
                    <div className='summary-item'>
                        <h4>Tax/VAT</h4>
                        <span>£ {cart.cartItems.reduce((acc, item) => acc + item.vat ,0)}</span>
                    </div>
                    <div className='summary-item'>
                        <h4 className='total'>Total</h4>
                        <span>£ {total}</span>
                    </div>
                    {
                            <button className='checkout-btn' disabled={total <= 0 } onClick={handleCheckout}>CHECKOUT NOW</button>
                    }
                </div>
            </div>
        </section>
        {/* <Footer /> */}
    </main>
  )
}

export default Cart
