
import { StarRateOutlined, } from '@material-ui/icons'
import React from 'react'
import './style.css'
import './filteredProducts.css'
import { Link } from 'react-router-dom'
import Loader from '../loader/Loader'

// className='productContainer'
const FilteredProductsByCategory = ({product}) => {
  return (
        <div className='filteredProduct-category-container'>
          {
            product ? 
            <div className='productcategoryWrapper'>
              <div className='productcategoryImgWrapper'>
                <Link to={`/product/${product._id}`}>
                    <img src={product.img} alt="filtered Products"/>  
                </Link>
              </div>
            <div className='productcategoryWrapper-footer'>
              <div className='inner'>
                  <div className='ratings'>
                    <div className='star-group'>
                    <StarRateOutlined/>
                    <StarRateOutlined />
                    <StarRateOutlined/>
                    <StarRateOutlined/>
                    <StarRateOutlined/>
                    </div>
                  </div>
                  <div className='reviews'><span>{product.review} reviews</span></div>
              </div>
             <div className='product-details-foot'>
               <div className='foot-prod-name'><h4>{product.title}</h4></div>
               {
                 product.discount ? <div className='foot-prod-price disc-price'><h4>£{product.price}</h4> <h4>£{Number(product.discoutPrice)}</h4></div> :
                   <div className='foot-prod-price'><h4>£{product.price}</h4></div>  
               }
             </div>
            </div>
          </div>
            : 
            <div className="loader-box">
              <Loader />
            </div>
          }
         
        </div>
  )
}

export default FilteredProductsByCategory


