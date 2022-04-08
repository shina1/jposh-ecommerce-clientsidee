import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styledComponents from 'styled-components'
import FilteredProducts from './filteredProducts'
import './style.css'


const Box = styledComponents.div`
margin:100px auto;
`


const FilteredProductsDisp = ({category, filters, sort}) => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    const getProducts = async()=> {
      try {
        const res = await axios.get(category ? `http://localhost:2600/api/v1/products?category=${category.toLowerCase()}` : "http://localhost:2600/api/v1/products" )
        setProducts(res.data)
      } catch (error) {
        throw new Error(error)
      }
    }

    getProducts()
  }, [category])

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
