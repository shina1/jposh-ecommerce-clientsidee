import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styledComponents from 'styled-components'
import PopularProducts from '.'
import { listPorpularProducts } from '../../actions/productActions'
// import { popularProducts } from '../../data'
import Divider from '../Divider'
import Loader from '../loader/Loader'
import Message from "../message/Message"
import './style.css'


const Box = styledComponents.div`
margin: 100px auto;
width: 100%;
`


const Products = ({category}) => {
  const dispatch = useDispatch()
  const porpularProducts = useSelector((state) => state.porpularProducts)
  
  const {loading, error, products } = porpularProducts

  useEffect(() => {
    dispatch(listPorpularProducts())
  }, [dispatch])

  return (
    <Box>
      <Divider section={'PORPULAR PRODUCTS'} />
      {loading && <div className="loader-box">
                      <Loader />
                 </div> 
      }
      {error && <Message type={'error'} message={"something went wrong!"}/>
      }
        <div className='productContainer'>
          {
           products ? products.map(product => (
              <PopularProducts product={product} key={product._id} />
            )) :
            <div className="loader-box">
            <Loader />
          </div> 
          }
        </div>
    </Box>
  )

}

export default Products
