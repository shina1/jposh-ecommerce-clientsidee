import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import styledComponents from 'styled-components'
import PopularProducts from '.'
import { listAllProducts } from '../../actions/productActions'
import './style.css'


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

  // useEffect(() => {
  //   const getProducts = async()=> {
  //     try {
  //       const res = await axios.get("http://localhost:2600/api/v1/products" )
  //       setProducts(res.data)
  //     } catch (error) {
  //       throw new Error(error)
  //     }
  //   }

  //   getProducts()
  // }, [category])

 

  return (
    <Box>
        <div className='productContainer'>
          {
            loading && <Spin size='large' style={{color: "red", textAlign: "center !mportant"}}/>
          }
          {
            products.map(product => (
              <PopularProducts product={product} key={product._id} filters={filters} sort={sort} />
            ))  
          }
        </div>
    </Box>
  )

}

export default AllProductsComponent
