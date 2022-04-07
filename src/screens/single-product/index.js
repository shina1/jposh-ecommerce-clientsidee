import React from 'react'
import Footer from '../../Components/Footer'
import ResponsiveHeader from '../../Components/Header-component/ResponsiveHeader'
import Newsletter from '../../Components/Newsletter'
import Products from '../../Components/Product/Products'
import './style.css'

import productImg from '../../assets/images/slider-image6.jpg'
import { Add, Remove } from '@material-ui/icons'

const SingleProduct = () => {
  return (
    <div className='container'>
        <ResponsiveHeader/>
        <section className='inner-container'>
            <div className='image-cont'>
                <img src={productImg} alt='single product'/>
            </div>
            <div className='product-desc'>
                <h3>Jump Suit</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis 
                </p>
                <span>£ 20</span>
                <div className='filter-cotainer'>
                    <div className='color-filter filter-box'>
                        <select>
                            <option disabled selected>color</option>
                            <option value='white'>white</option>
                            <option value='black'>Black</option>
                            <option value='gray'>Red</option>
                            <option value='blue'>Blue</option>
                        </select>
                    </div>
                    <div className='size-filter filter-box'>
                        <select>
                            <option disabled selected>Size</option>
                            <option>XS</option>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                        </select>
                    </div>
                </div>
                <div className='addContainer'>
                    <div className='amount-container'>
                        <Remove />
                        <span className='amount'>1</span>
                        <Add />
                    </div>
                    <button className='add-to-cart'>ADD TO CART</button>
                </div>
            </div>
        </section>
        <Products />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default SingleProduct
