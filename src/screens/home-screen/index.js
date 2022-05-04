import React, { Suspense, lazy }  from 'react'

import Loader from '../../Components/loader/Loader'
// import AllProductsComponent from '../../Components/Product/allProducts';
import './style.css'

// const ResponsiveHeader = React.lazy(() => import('../../Components/Header-component/ResponsiveHeader'));
const CarouselSlider = React.lazy(() => import('../../Components/SlidderComponent/Carousel'));
const About= React.lazy(() => import('../../Components/About'));
const Categories = React.lazy(() => import('../../Components/Categories'));
const Newsletter = React.lazy(() => import('../../Components/Newsletter'));
const Products = React.lazy(() => import('../../Components/Product/Products'));
const Testimonial= React.lazy(() => import('../../Components/Testimonials'));
const AllProductsComponent = React.lazy(() => import('../../Components/Product/allProducts'));
// const Footer = React.lazy(() => import('../../Components/Footer'));




const Home = () => {
  return (
    <div className='container'>
      <Suspense fallback={<Loader />}>
        <CarouselSlider />
        <About />
        <Categories />
        <AllProductsComponent />
        <Products />
        <Testimonial />
        <Newsletter />
        <div>
            <a
            href="https://wa.me/+447470708848"
            class="whatsapp_float"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa fa-whatsapp whatsapp-icon"></i>
          </a>
        </div>
      </Suspense>
    </div>
  )
}

export default Home



