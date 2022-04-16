import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styledComponents from 'styled-components'
import PopularProducts from '.'
import { listPorpularProducts } from '../../actions/productActions'
// import { popularProducts } from '../../data'
import Divider from '../Divider'
import './style.css'


const Box = styledComponents.div`
margin:100px auto;
`


const Products = ({category}) => {
  const dispatch = useDispatch()
  const porpularProducts = useSelector((state) => state.porpularProducts)
  
  const {loading, eror, products } = porpularProducts

  useEffect(() => {
    dispatch(listPorpularProducts())
  }, [dispatch])

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
