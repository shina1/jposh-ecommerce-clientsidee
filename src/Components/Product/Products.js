import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styledComponents from 'styled-components'
import PopularProducts from '.'
// import { popularProducts } from '../../data'
import Divider from '../Divider'
import './style.css'


const Box = styledComponents.div`
margin:100px auto;
`


const Products = ({category}) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async()=> {
      try {
        const res = await axios.get("http://localhost:2600/api/v1/products/porpular" )
        setProducts(res.data)
      } catch (error) {
        throw new Error(error)
      }
    }

    getProducts()
  }, [category])

 

  return (
    <Box>
      <Divider section={'PORPULAR PRODUCTS'} />
        <div className='productContainer'>
          {
            products.map(product => (
              <PopularProducts product={product} key={product._id} />
            ))  
          }
        </div>
    </Box>
  )

}

export default Products
