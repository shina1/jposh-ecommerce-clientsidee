import React, { useState } from 'react'
import styled from 'styled-components'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import './style.css'
import { customerTestimonials } from '../../data'
import { devices } from '../../assets/screenSizes'


const Container = styled.div`
    width: 99.6%;
    height: 35vh;
    display: flex; 
    margin:0 auto;
    position: relative;
    overflow: hidden;



    @media ${devices.mobileL} {
        width: 99.6%;
        height: 90vh;
    }
`

const Arrow = styled.div`
    display: flex;
    width: 25px;
    height: 25px;
    background-color: #C09621;
    justify-content: center;
    border-radius: 50px;
    align-items: center;
    box-shadow: 10px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`
const Wrapper = styled.div`
    display: flex;
    height: 100%;
    padding: 10px;
    margin: 0 auto;
    transition: all 1.5s ease-out;
    transform: translateX(${(props) => props.slideIndex * -100}vw); 


    @media ${devices.mobileL} {
        height: 100%; 
    }
`
const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 50vw;
    align-items: center;
    text-align: center;
    margin: 0 10px;


    @media ${devices.mobileL} {
       height: 100%;
       width: 97vw;
    }
`
const ImageContainer = styled.div`
    padding:10px 5px;
    width: 60%;
    height: 55%;

    @media ${devices.mobileL} {
        width: 100%;
    }
`
const InfoContainer = styled.div`
    width: 100%;
    height: auto;
    padding: 50px;

    @media ${devices.mobileL} {
        width: 100%;
        height: 100%;
    }
`
const Image =  styled.img`
width: 100%;
max-width: 100%;
display: block;
border: 0;
height: 80%;
`
const Title = styled.h3`
    font-size: 20px;
`
const Desc = styled.p`
    margin: 10px 0;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 2px;

`


const Slidder = () => {
    const [slideIndex, setSlideIndex] = useState(0)
   const handleClick = (direction) =>{
    if(direction === 'left'){
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : customerTestimonials.length - 1)
    }else{
        setSlideIndex(slideIndex < customerTestimonials.length - 1 ? slideIndex + 1 : 0)
    }
   }
  return (
   <Container>
       <Arrow direction="left" onClick={() => handleClick("left")}>
            <ArrowLeftOutlined  style={{fontSize:'25px',color:'#fff' }}/>
       </Arrow>
      <Wrapper slideIndex={slideIndex}>
      {
          customerTestimonials.map(item => (
            <Card key={item.id}>
                <InfoContainer>
                    <Title>{item.name}</Title>
                    <Desc>"{item.desc}"</Desc>
                </InfoContainer>
           </Card>
          ))
      }
      </Wrapper>
       <Arrow direction="right" onClick={() =>handleClick("right")}>
            <ArrowRightOutlined  style={{fontSize:'25px',color:'#fff' }}/>
       </Arrow>
   </Container>
  )
}

export default Slidder
