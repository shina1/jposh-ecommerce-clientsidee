import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import ResponsiveHeader from '../../Components/Header-component/ResponsiveHeader'
import Products from '../../Components/Product/Products'
import Newsletter from '../../Components/Newsletter'
import Footer from '../../Components/Footer/index.js'

import './style.css'
import FilteredProductsDisp from '../../Components/Product/filteredProductDisplay'
import { listAllProducts } from '../../actions/productActions'
import { useDispatch, useSelector } from 'react-redux'


const ProductList = () => {
  const location = useLocation()
  const category = location.pathname.split("/")[2];
  const [filters, setFilter] = useState({})
  const [sort, setSort] = useState("Newest")

  const handleFilterChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFilter({
      ...filters,
      [name] : value
    })
  }
  const handleSortChange = (e) => {
    const sortPriceValue = e.target.value;
    setSort(sortPriceValue)
  }
  return (
    <div className='container'>
      {/* <ResponsiveHeader /> */}
      <div className='inner-container'>
        <div className='title'><h2>{category} Collections</h2></div>
        <div className='filter-container'>
          <div className='filter-right'>
             <span className='filter-text'>Filter Products:</span> 
             <div className='select-filter'>
               <select name='color' onChange={handleFilterChange}>
                 <option disabled selected>color</option>
                 <option>white</option>
                 <option>black</option>
                 <option>red</option>
                 <option>blue</option>
               </select>
               <select name="size" onChange={handleFilterChange}>
                 <option disabled selected>Size</option>
                 <option>XS</option>
                 <option>S</option>
                 <option>M</option>
                 <option>L</option>
                 <option>XL</option>
               </select>
             </div>
          </div>
          <div className='filter'>
            <span className='filter-text'>Sort Products:</span>
            <div className='select'>
               <select onChange={handleSortChange}>
                 <option value={'newest'}>Newest</option>
                 <option value={'asc'}>Price (asc)</option>
                 <option value={'desc'}>Price (Desc)</option>
               </select>
             </div>
          </div>
        </div>
      </div>
      <FilteredProductsDisp  category={category} filters={filters} sort = {sort}/>
      <Products category={category} filters={filters} sort = {sort}/>
      <Newsletter />
      {/* <Footer /> */}
    </div>
  )
}

export default ProductList
