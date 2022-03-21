import React from 'react'
import { Carousel } from 'antd';
import {sliderItems} from '../../data.js'
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
{/* <h3 style={contentStyle}>1</h3> */}
const Slide = () => {
  return (
    <Carousel effect="fade">
        {
            sliderItems.map(item => (
               
            ))
        }
  </Carousel>
  )
}

export default Slide





