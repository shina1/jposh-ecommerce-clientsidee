import React from 'react'
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
        <div className='about-container'>
          <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis.
          </p>
          <Button>READ MORE</Button>
        </div>
    </Box>
  )
}

export default About
