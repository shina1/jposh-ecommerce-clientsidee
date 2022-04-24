import React, { Suspense, lazy }  from 'react'

// import Footer from '../../Components/Footer'
// import ResponsiveHeader from '../../Components/Header-component/ResponsiveHeader'
import Loader from '../../Components/loader/Loader'
import AllProductsComponent from '../../Components/Product/allProducts';
// import Newsletter from '../../Components/Newsletter'
// import Products from '../../Components/Product/Products'
// import CarouselSlider from '../../Components/SlidderComponent/Carousel'
// import Testimonial from '../../Components/Testimonials'
import './style.css'

const ResponsiveHeader = React.lazy(() => import('../../Components/Header-component/ResponsiveHeader'));
const CarouselSlider = React.lazy(() => import('../../Components/SlidderComponent/Carousel'));
const About= React.lazy(() => import('../../Components/About'));
const Categories = React.lazy(() => import('../../Components/Categories'));
const Newsletter = React.lazy(() => import('../../Components/Newsletter'));
const Products = React.lazy(() => import('../../Components/Product/Products'));
const Testimonial= React.lazy(() => import('../../Components/Testimonials'));
const Footer = React.lazy(() => import('../../Components/Footer'));
// import About from '../../Components/About'
// import Categories from '../../Components/Categories'

// import Slidder from '../../Components/SlidderComponent/index.js'



const Home = () => {
  return (
    <div className='container'>
      <Suspense fallback={<Loader />}>
        <ResponsiveHeader />
        <CarouselSlider />
        <About />
        <Categories />
        <AllProductsComponent />
        <Products />
        <Testimonial />
        <Newsletter />
        <Footer />
      </Suspense>
    </div>
  )
}

export default Home



