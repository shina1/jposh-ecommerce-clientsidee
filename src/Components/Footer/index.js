import React from 'react'
import styledComponents from 'styled-components'
import { devices } from '../../assets/screenSizes'

import logo from '../../assets/images/logo.ico'
import { Facebook, Instagram, Twitter } from '@material-ui/icons'

const Container = styledComponents.div`
    height: 45vh;
    display: flex;
    flex-wrap: wrap;



    @media ${devices.mobileL} {
        width: 100%;
    }
`
const Left = styledComponents.div`
width: 30%;
height: 100%;
padding:20px;
border: 2px solid red;


@media ${devices.mobileL} {
    width: 100%;
    padding:10px;
}
`
const Center = styledComponents.div`
width: 40%;
height: 100%;
border: 2px solid red;

@media ${devices.mobileL} {
    width: 100%;
    padding:10px;
}
`
const Right = styledComponents.div`
width: 30%;
height: 100%;
border: 2px solid red;


// small screen styling
@media ${devices.mobileL} {
    width: 100%;
    padding:10px;
}
`

const Logo = styledComponents.div``

const LogoImage = styledComponents.img``
const Desc = styledComponents.div``
const Paragraph = styledComponents.p``
const SocialContainer = styledComponents.div``
const SocialIcon = styledComponents.div``
const Box = styledComponents.div`
    margin:0 auto
`
const Footer = () => {
  return (
    <Box>
        <Container>
            <Left>
                <Logo>
                    <LogoImage src={logo} alt='jposh logo'/>
                </Logo>
                <Desc>
                    <Paragraph>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                    </Paragraph>
                </Desc>
                <SocialContainer>
                    <SocialIcon>
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon>
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon>
                        <Instagram /> 
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center></Center>
            <Right></Right>
        </Container>
    </Box>
  )
}

export default Footer
