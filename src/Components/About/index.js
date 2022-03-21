import React from 'react'
import styledComponents from 'styled-components'
import Divider from '../Divider/index'



const Container = styledComponents.div`
width:80%;
text-align:center;
padding: 20px;
margin: 10px auto;
`
const Paragraph = styledComponents.p`
display:block;
font-size: 1.5rem;
font-weight: 400;
letter-spacing: 2px;
line-height: 1.5;
color: rgba(18,18,18,0.75)
`
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
`
const Box = styledComponents.div`
margin:50px auto
`
const About = () => {
  return (
    <Box>
      <Divider section={'ABOUT'}/>
        <Container>
          <Paragraph>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis.
          </Paragraph>
          <Button>READ MORE</Button>
        </Container>
    </Box>
  )
}

export default About
