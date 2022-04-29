import React from 'react'
import { Link } from 'react-router-dom'
import Loader from '../loader/Loader'
import Rating from '../Ratings'
import './style.css'


const PopularProducts = ({product}) => {
  return (
        <div className='popularProduct-container'>
          {
            product ?
            <div className='productWrapper'>
            <div className='prod-img-wrapper'>
            <Link to={`/product/${product._id}`}>
                <img src={product.img} alt="Popular Products"/>
            </Link>
            </div>
            
            <div className='productWrapper-footer'>
              <div className='inner'>
                  <div className='ratings'>
                    <div >
                    <Rating 
                      value={product.avgRating}
                    />
                    </div>
                  </div>
                  <div className='reviews'>
                     
                     <span>{product.numReviews} reviews</span>
                    
                    </div>
              </div>
              <div className='product-details-foot'>
               <div className='foot-prod-name'><h4>{product.title}</h4></div>
               {
                 product.discount ? <div className='foot-prod-price disc-price'><h4>£{product.price}</h4> <h4>£{product.discoutPrice}</h4></div> :
                   <div className='foot-prod-price'><h4>£{product.price}</h4></div>  
               }
             </div>
            </div>
          </div>  :
            <div className="loader-box">
                <Loader />
            </div> 
          }
          
        </div>
  )
}

export default PopularProducts


