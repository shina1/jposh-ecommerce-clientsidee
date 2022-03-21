import React from 'react'
import styledComponents from 'styled-components'
import { categories } from '../../data'
import Divider from '../Divider'
import CategoryItem from './CategoryItem'
import './style.css'


const Box = styledComponents.div`
margin:100px auto;
`

const Categories = () => {
  return (
    <Box>
      <Divider section={'CATEGORIES'}/>
      <div className='category-container'>
        {
            categories.map(category => (
                <CategoryItem  category={category} key={category.id}/>
            ))
        }
      </div>
    </Box>
  )
}

export default Categories
