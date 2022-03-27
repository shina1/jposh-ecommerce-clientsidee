import React, { useState } from 'react'
import Footer from '../../Components/Footer'
import ResponsiveHeader from '../../Components/Header-component/ResponsiveHeader'
import './style.css'

import productImage from '../../assets/images/slider-image2.jpg'
import { Add, Remove } from '@material-ui/icons'
import styledComponents from 'styled-components'


const Hr = styledComponents.hr`
background-color: #eee;
border: none;
height: 1px;
`
const Cart = () => {
    const [proCount, setProCount] = useState(1)

    const handleIncrease =()=>{
        setProCount(proCount + 1)
    }
    const handleDecrease =()=>{
        setProCount(proCount - 1)
    }
  return (
    <main>
        <ResponsiveHeader />
        <section className='cart-container'>
            <div className='title-container'><h2>Your Bag</h2></div>
            {/* <div className='cart-body'> */}
               <div className='cart-top'>
                    <div className='top-btn'>
                            <button className='left-btn'>CONTINUE SHOPPING</button>
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
                   <div className='product'>
                        <div className='product-details'>
                            <img src={productImage} alt='product'/>
                            <div className='details'>
                                <span className='pro-name'><b>Product</b>: Denim Jeans Jumpsuit</span>
                                <span className='pro-id'><b>ID</b>: 4567832678</span>
                                <span className='pro-size'><b>Size</b>: M</span>
                            </div>
                        </div>
                        <div className='price-details'>
                            <div className='product-amount-container'>
                                <Add onClick={handleIncrease}/>
                                    <div className='product-amount'><span>{proCount}</span></div>
                                <Remove onClick={handleDecrease}/>
                            </div>
                            <div className='product-price'><span>£ {proCount * 50}</span></div>
                        </div>
                   </div>
                   <Hr />
                   <div className='product'>
                        <div className='product-details'>
                            <img src={productImage} alt='product'/>
                            <div className='details'>
                                <span className='pro-name'><b>Product</b>: Denim Jeans Jumpsuit</span>
                                <span className='pro-id'><b>ID</b>: 4567832678</span>
                                <span className='pro-size'><b>Size</b>: M</span>
                            </div>
                        </div>
                        <div className='price-details'>
                            <div className='product-amount-container'>
                                <Add onClick={handleIncrease}/>
                                    <div className='product-amount'><span>{proCount}</span></div>
                                <Remove onClick={handleDecrease}/>
                            </div>
                            <div className='product-price'><span>£ {proCount * 50}</span></div>
                        </div>
                   </div>
                   <Hr />
                   <div className='product'>
                        <div className='product-details'>
                            <img src={productImage} alt='product'/>
                            <div className='details'>
                                <span className='pro-name'><b>Product</b>: Denim Jeans Jumpsuit</span>
                                <span className='pro-id'><b>ID</b>: 4567832678</span>
                                <span className='pro-size'><b>Size</b>: M</span>
                            </div>
                        </div>
                        <div className='price-details'>
                            <div className='product-amount-container'>
                                <Add onClick={handleIncrease}/>
                                    <div className='product-amount'><span>{proCount}</span></div>
                                <Remove onClick={handleDecrease}/>
                            </div>
                            <div className='product-price'><span>£ {proCount * 50}</span></div>
                        </div>
                   </div>
                </div>
                <div className='cart-summary'>
                    <h2>Order Summary</h2>
                    <div className='summary-item'>
                        <h4>Subtotal</h4>
                        <span>£ 300</span>
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
                        <span>£ 300</span>
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
