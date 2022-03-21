import React from 'react'
import styledComponents from 'styled-components'
import { devices } from '../../assets/screenSizes'

import logo from '../../assets/images/logo.ico'
import payment from '../../assets/images/payment.png'
import { Facebook, Instagram, MailOutlined, Phone, Room, Twitter } from '@material-ui/icons'

import './style.css'

const Container = styledComponents.div`
    height: 45vh;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;



    @media ${devices.mobileL} {
        width: 100%;
        margin: 0 auto;
    }
`
const Left = styledComponents.div`
width: 30%;
height: 100%;
padding:20px;
margin: 10px auto;


@media ${devices.mobileL} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding:10px 20px;
    text-align: center;
    margin: 0 auto;
}
`
const Center = styledComponents.div`
width: 40%;
height: 100%;
margin: 10px auto;

@media ${devices.mobileL} {
    width: 100%;
    padding:10px;
    margin: 0 auto;
}
`
const Right = styledComponents.div`
width: 30%;
height: auto;
margin: 10px auto;
paddin: 10px 5px;


// small screen styling
@media ${devices.mobileL} {
    width: 100%;
    padding:20px 10px;
    margin: 0 auto;
}
`

const Logo = styledComponents.div`
margin-bottom: 20px;
padding: 10px 0;
`

const LogoImage = styledComponents.img``
const Desc = styledComponents.div`
margin: 10px 5px;
`
const Paragraph = styledComponents.p`





@media ${devices.mobileL} {
    margin: 0 auto;
    font-size:1rem;
    font-weight: 500;
    color: rgba(18, 18, 18, 0.75)
  }
`
const SocialContainer = styledComponents.div`
display: flex;
justify-content: space-around;
margin: 10px 5px;


@media ${devices.mobileL} {
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 10px 5px;
}
`
const SocialIcon = styledComponents.div``
const Box = styledComponents.div`
    margin:0 auto
`
// center content
const Title = styledComponents.h3`
margin-bottom: 30px;
font-weight: bold;
font-size: 20px;
`
const List = styledComponents.ul`
margin: 0;
padding: 0;
display: flex;
flex-wrap: wrap;
`
const ListItem = styledComponents.li`
list-style-type: none;
margin: 5px 0;
width: 50%;
font-size: 17px;
font-weight: 500;
cursor: pointer;


&:hover{
    color:#C09621;
}
`

const ContactItem = styledComponents.div`
display: flex;
justify-content: left;
align-items: center;
font-size: 20px;
font-weight: 500;
margin: 5px 0;
width: 100%;


&p{
    color: red;
}
`
const Payment = styledComponents.img`
width: 90%;
max-width:90%;
height: auto;
margin:10px auto;
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
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>About</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Terms and Conditions</ListItem>
                    <ListItem>Contact Us</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room/> <p>10 JhonDoe Street, Block 12a, 123456</p></ContactItem>
                <ContactItem><Phone/> <p>+2-567-89012-45</p></ContactItem>
                <ContactItem><MailOutlined/> <p>contact@jposh-collection.co.uk</p> </ContactItem>
                <Payment src={payment} alt='payment'/>
            </Right>
        </Container>
    </Box>
  )
}

export default Footer
