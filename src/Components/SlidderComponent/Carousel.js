import React from 'react'
import { Carousel } from 'antd';
import {sliderItems} from '../../data.js'
import "./carousel.css"
import styledComponents from 'styled-components';

const Box = styledComponents.div`
    padding: 10px;
`
const CarouselSlider = () => {
  return (
  <Box>
        <Carousel autoplay effect="fade">
        {
            sliderItems.map(item => (
                <div key={item.id} className="content-style">
                    <div className='img-container'>
                        <img src={item.img} alt='slidder'/>
                    </div>
                    <div className='text-container'>
                        <h1>{item.title}</h1>
                        <h3>{item.desc}</h3>
                    </div>
                </div>
            ))
        }
    </Carousel>
  </Box>
  )
}

export default CarouselSlider





