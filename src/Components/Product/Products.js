import React from 'react'
import styledComponents from 'styled-components'
import PopularProducts from '.'
import { popularProducts } from '../../data'
import Divider from '../Divider'
import './style.css'


const Box = styledComponents.div`
margin:100px auto;
`


const Products = () => {
  return (
    <Box>
      <Divider section={'POPULAR PRODUCTS'} />
        <div className='productContainer'>
          {
            popularProducts.map(product => (
                <PopularProducts product={product} key={product.id} />
            ))  
          }
        </div>
    </Box>
  )

}

export default Products
