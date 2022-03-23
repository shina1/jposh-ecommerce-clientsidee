import React from 'react'
import ResponsiveHeader from '../../Components/Header-component/ResponsiveHeader'
import Products from '../../Components/Product/Products'
import Newsletter from '../../Components/Newsletter'
import Footer from '../../Components/Footer/index.js'

import './style.css'

const ProductList = () => {
  return (
    <div className='container'>
      <ResponsiveHeader />
      <div className='inner-container'>
        <div className='title'><h2>Collections</h2></div>
        <div className='filter-container'>
          <div className='filter-right'>
             <span className='filter-text'>Filter Products:</span> 
             <div className='select-filter'>
               <select>
                 <option disabled selected>color</option>
                 <option>white</option>
                 <option>Black</option>
                 <option>Red</option>
                 <option>Blue</option>
               </select>
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
          <div className='filter'>
            <span className='filter-text'>Sort Products:</span>
            <div className='select'>
               <select>
                 <option disabled selected>Newest</option>
                 <option>Price (asc)</option>
                 <option>Price (Desc)</option>
               </select>
             </div>
          </div>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default ProductList
