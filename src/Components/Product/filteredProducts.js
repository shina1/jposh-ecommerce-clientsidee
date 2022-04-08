
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined, StarRateOutlined, } from '@material-ui/icons'
import React from 'react'
import './style.css'
import './filteredProducts.css'
import { Link } from 'react-router-dom'


const FilteredProducts = ({product}) => {
  return (
        <div className='filteredProduct-container'>
          <div className='productWrapper'>
            <img src={product.img} alt="filtered Products"/>
            <div className='productWrapper-footer'>
              <div className='inner'>
                  <div className='ratings'>
                    <div className='star-group'>
                    <StarRateOutlined/>
                    <StarRateOutlined />
                    <StarRateOutlined/>
                    <StarRateOutlined/>
                    <StarRateOutlined/>
                    </div>
                    <div className='reviews'><span>{product.review} reviews</span></div>
                  </div>
                <div className='footer-icons'>
                    <ShoppingCartOutlined/>
                    <Link to={`/product/${product._id}`}>
                        <SearchOutlined />
                    </Link>
                    <FavoriteBorderOutlined />
                </div>
              </div>
             <div className='product-details-foot'><h4>{product.title}</h4>
             </div>
            </div>
          </div>
        </div>
  )
}

export default FilteredProducts


