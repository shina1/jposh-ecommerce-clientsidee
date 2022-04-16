import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styledComponents from 'styled-components'
import FilteredProducts from './filteredProducts'
import { listProductByCategory } from '../../actions/productActions'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'


const Box = styledComponents.div`
margin:100px auto;
`


const FilteredProductsDisp = ({category, filters, sort}) => {
  // const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const dispatch = useDispatch()
  const productCategory = useSelector((state) => state.productCategory)

  const {loading, products, error} = productCategory
  
  useEffect(() => {
    dispatch(listProductByCategory(category))
  }, [dispatch, category])
 

  useEffect(() => {
    category && setFilteredProducts(
      products.filter(item => Object.entries(filters).every(([key, value]) => item[key].includes(value)
      ))
    )
  }, [products, category, filters])

  useEffect(() => {
      if(sort === 'newest'){
          setFilteredProducts((prev) => 
            [...prev].sort((a,b) => a.createdAt - b.createdAt)
          )
      }else if(sort === 'asc'){
          setFilteredProducts((prev) => [...prev].sort((a,b) => a.price - b.price))
      }else{
          setFilteredProducts((prev) => [...prev].sort((a,b) => b.price - a.price))
      }
  }, [sort]);

  return (
    <Box>
        <div className='productContainer'>
          {
            filteredProducts.map(product => (
              <FilteredProducts product={product} key={product._id} />
            ))  
          }
        </div>
    </Box>
  )

}

export default FilteredProductsDisp
