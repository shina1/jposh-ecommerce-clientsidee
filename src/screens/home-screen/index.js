import React from 'react'
import About from '../../Components/About'
import Categories from '../../Components/Categories'
import Footer from '../../Components/Footer'
// import Header from '../../Components/Header-component'
import HeaderRes from '../../Components/Header-component/Header'
import Newsletter from '../../Components/Newsletter'
import Products from '../../Components/Product/Products'
import CarouselSlider from '../../Components/SlidderComponent/Carousel'
// import Slidder from '../../Components/SlidderComponent/index.js'

const Home = () => {
  return (
    <div className='container'>
        <HeaderRes/>
        <CarouselSlider />
        <About />
        <Categories />
        <Products />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Home
