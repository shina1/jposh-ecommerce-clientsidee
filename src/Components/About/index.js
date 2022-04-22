import React from 'react'
import { Link } from 'react-router-dom'
import styledComponents from 'styled-components'
import { devices } from '../../assets/screenSizes'
import Divider from '../Divider/index'

import './style.css'





const Button = styledComponents.button`
width: 30%;
padding:10px;
border: 1px solid #C09621;
border-radius: 10px;
background: transparent;
color: #C09621;
font-size:14px;
font-weight:500;
margin: 10px 0;
cursor: pointer;

@media ${devices.mobileL} {
  width: 70%;
  margin: 0 auto;
}
`
const Box = styledComponents.div`
margin:50px auto
`
const About = () => {
  return (
    <Box>
      <Divider section={'ABOUT'}/>
        <div className='about-container' id='about'>
          <p>
              <span className='about-enph'>Jposh collection</span> a ready to wear fashion trend was founded in 2020 by a Nigerian fashion designer and content creator, <span className='about-enph'>Jumai Usman-Ibrahim</span> in London, U.K.
              The fashion store has created many <b>ready to wear</b> outfits leaning heavily on the influnce of culture and lifestyle. Some of these outfits includes Aso-Ebi, costume wears, Bridal wears.
              Every our wears are carefully made to suit our customers and are ordered widely both in London and accross the globe.
          </p>
          <Button> <Link to={'/about-us'} style={{color: '#C09621'}}>READ MORE</Link></Button>
        </div>
    </Box>
  )
}

export default About
