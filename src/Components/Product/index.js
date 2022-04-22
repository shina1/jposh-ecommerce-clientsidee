
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined, StarRateOutlined, } from '@material-ui/icons'
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
            <img src={product.img} alt="Popular Products"/>
            <div className='productWrapper-footer'>
              <div className='inner'>
                  <div className='ratings'>
                    <div >
                    <Rating 
                      value={product.avgRating}
                    />
                    </div>
                    <div className='reviews'>
                     
                      <span>{product.numReviews} reviews</span>
                     
                      </div>
                  </div>
                <div className='footer-icons'>
                    <ShoppingCartOutlined/>
                    <Link to={`/product/${product._id}`}>
                        <SearchOutlined />
                    </Link>
                    <FavoriteBorderOutlined />
                </div>
              </div>
             <div className='product-details-foot'>
               <h4>{product.title}</h4>
               <h4>£{product.price}</h4>
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


