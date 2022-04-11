import React, { useState } from 'react'
import Footer from '../../Components/Footer'
import ResponsiveHeader from '../../Components/Header-component/ResponsiveHeader'
import './style.css'

import productImage from '../../assets/images/slider-image2.jpg'
import { Add, Remove } from '@material-ui/icons'
import styledComponents from 'styled-components'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Hr = styledComponents.hr`
background-color: #eee;
border: none;
height: 1px;
`
const Cart = () => {
    const [cartQuantity, setCartQuantity] = useState(1)
    const cartState = useSelector(state => state.cart)
    console.log(cartState);
    const handleCartQuantity = (params) =>{
            if(params === "add"){
                setCartQuantity(cartQuantity + 1)
            }
            else{
                cartQuantity > 0 && setCartQuantity(cartQuantity - 1)
            }
    }
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
                        <div className=' top-btn'><button className='right-btn'>CHECKOUT NOW</button>
                        </div>
                </div>
            {/* </div> */}
            <div className='cart-bottom'>
                <div className='cart-info'>

                    {
                     cartState.products.map(product => (
                        <div className='product' key={product._id}>
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
                    <div className='summary-item'>
                        <h4>Estimated Shipping</h4>
                        <span>£ 300</span>
                    </div>
                    <div className='summary-item'>
                        <h4>Shipping Discount</h4>
                        <span>£ -5.99</span>
                    </div>
                    <div className='summary-item'>
                        <h4 className='total'>Total</h4>
                        <span>£ {cartState.total}</span>
                    </div>
                    <button className='checkout-btn'>CHECKOUT NOW</button>
                </div>
            </div>
        </section>
        <Footer />
    </main>
  )
}

export default Cart
