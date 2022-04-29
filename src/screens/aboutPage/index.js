import React from 'react'
import ResponsiveHeader from '../../Components/Header-component/ResponsiveHeader'
import Newsletter from '../../Components/Newsletter'
import Footer from '../../Components/Footer'
import { Link } from 'react-router-dom'

import "./style.css"

import jposhceo from "../../assets/images/ceo.jpeg"

const AboutScreen = () => {
  return (
      <div>
          {/* <ResponsiveHeader /> */}
          <main className='aboutscreen_container'>
        
        <div className='aboutscreen-inner'>
            <div className='aboutscreen-title-box'>
                <h3>About Us</h3>
                <h1><b>Our Story</b></h1>
            </div>
            <div className='aboutscreen-text-box text-box-top'>
                <p>
                Jposh collection was founded by Nigerian fashion designer and content creator, Jumai Usman-Ibrahim who moved to U.K in 2019. Had her HND in SLT (Science Laboratory Technology) And went further to study MLT (Medical Laboratory Technology) where she had her first degree. She’s also a certified travelling agent on both Sabre And Amadeurs. Jumai went on to study fashion under her sister’s fashion school In Nigeria and graduated after 3yrs in 2017 with a diploma degree. After Interning for few years under established fashion brands in Nigeria and also attempted series of online fashion courses, In 2020, Jumai launched her first ready to wear collection’s in London, U.K and she was amazed on how people accepted it in London. 

                Since then, she has created many outfits including Aso-Ebi, costume wears, Bridal wears with heavy influence on culture and lifestyle.
                </p>
            </div>
            <div className='aboutscreen-img-box'>
                    <img src={jposhceo} alt='ceo'/>
            </div>
            <div className='aboutscreen-text-box text-box-bottom'>
                <h3>Our Mission</h3>
                <p>
                   Our mission is to style our customers with lasted fashion trend without loosing the touch of culture and lifestyle.

                   Every Jposh collection’ wears are carefully made to order in London and all across the globe by Jumai Usman-Ibrahim
                </p>
            </div>
            <div className='aboutscreen-ceo-det'>
                <h4>Jumai Usman-Ibrahim</h4>
                <p>Creative Director, Jposh Collection</p>
            </div>
            <Link to='/'>
                <button className='shop-now-btn'>Shop Now</button>
            </Link>
        </div>
    </main>
    <Newsletter />
        {/* <Footer /> */}
      </div>
   
  )
}

export default AboutScreen
