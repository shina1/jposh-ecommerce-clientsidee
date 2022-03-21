import { Send } from '@material-ui/icons'
import React from 'react'
import styledComponents from 'styled-components'
import Divider from '../Divider'
import { devices } from '../../assets/screenSizes'

const Container = styledComponents.div`
    height: 60vh;
    background-color: lightgrey;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media ${devices.mobileL} {
        width: 100%;
        text-align: center;
        padding: 5px 10px;
    }
`
const Description = styledComponents.p`
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 20px;
`
const Input = styledComponents.input`
padding:5px 10px 5px 20px;
border: none;
flex: 8;
height: 60%;
border-radius: 10px;
font-size: 15px;
color: grey;
font-weight: 600;


@media ${devices.mobileL} {
    width: 100%;
    margin: 5px auto;
    padding: 10px;
}
`
const InputContainer = styledComponents.div`
padding: 10px;
margin:10px;
width: 50%;
height: 15vh;
display: flex;
justify-content: space-between;
border: 1px solid lightgrey;
border-radius: 10px;
align-items: center;

@media ${devices.mobileL} {
    width: 100%;
    display: flex;
    flex-direction: column;
}
`
const Button = styledComponents.button`
padding: 5px 10px;
border: 1px solid #C09621;
background: transparent;
flex: 2;
height: 60%;
margin: 0 10px;
border-radius: 10px;
cursor: pointer;


@media ${devices.mobileL} {
    width: 50%;
    margin: 5px auto;
}
`

const Box = styledComponents.div`
margin:50px auto
`
const Newsletter = () => {
  return (
   <Box>
        <Divider section={'NEWS LETTER'}/>
        <Container>
            <Description>Get timely update from your favorite products.</Description>
            <InputContainer>
                <Input type='text' placeholder='Enter your email address'/>
                <Button>
                    <Send/>
                </Button>
            </InputContainer>
        </Container>
   </Box>
  )
}

export default Newsletter
