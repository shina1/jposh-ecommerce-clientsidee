import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import styledComponents from 'styled-components'
import PopularProducts from '.'
import { listAllProducts } from '../../actions/productActions'
import './style.css'
import Loader from '../loader/Loader';
import Divider from '../Divider';


const Box = styledComponents.div`
margin:100px auto;
`


const AllProductsComponent = ({category, filters, sort}) => {

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)

  const {loading, error, products} = productList

  useEffect(() => {
    dispatch(listAllProducts())
  },[dispatch])


  return (
    <Box>
      {/* <Divider section={'LATEST FASHION'} /> */}
        <div className='productContainer'>
          {
            loading && <div className="loader-box">
            <Loader />
         </div>
          }
          {
            products ? products.map(product => (
              <PopularProducts product={product} key={product._id} filters={filters} sort={sort} />
            )) :
            <div className="loader-box">
                <Loader />
            </div>  
          }
        </div>
    </Box>
  )

}

export default AllProductsComponent
