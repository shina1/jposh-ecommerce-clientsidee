import React from 'react'
import About from '../../Components/About'
import Categories from '../../Components/Categories'
import Footer from '../../Components/Footer'
import ResponsiveHeader from '../../Components/Header-component/ResponsiveHeader'
import Newsletter from '../../Components/Newsletter'
import Products from '../../Components/Product/Products'
import CarouselSlider from '../../Components/SlidderComponent/Carousel'
import Testimonial from '../../Components/Testimonials'
// import Slidder from '../../Components/SlidderComponent/index.js'

import './style.css'

const Home = () => {
  return (
    <div className='container'>
        <ResponsiveHeader />
        <CarouselSlider />
        <About />
        <Categories />
        <Products />
        <Testimonial />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Home
