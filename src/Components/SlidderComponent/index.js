import React, { useState } from 'react'
import styled from 'styled-components'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import './style.css'
import { sliderItems } from '../../data'


const Container = styled.div`
    width: 99.6%;
    height: 90vh;
    display: flex; 
    margin:0 auto;
    position: relative;
    overflow: hidden;
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
    transition: all 1.5s ease-out;
    transform: translateX(${(props) => props.slideIndex * -100}vw); 
`
const Slide = styled.div`
    display: flex;
    height: 100%;
    width: 95vw;
    align-items: center;
`
const ImageContainer = styled.div`
    flex: 1;
    height: 100%;
`
const InfoContainer = styled.div`
    flex: 1;
    height: 100%;
    padding: 50px;
`
const Image =  styled.img`
width: 100%;
max-width: 100%;
display: block;
border: 0;
height: 90%;
`
const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 2px;
`


const Slidder = () => {
    const [slideIndex, setSlideIndex] = useState(0)
   const handleClick = (direction) =>{
    if(direction === 'left'){
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    }else{
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
   }
  return (
   <Container>
       <Arrow direction="left" onClick={() => handleClick("left")}>
            <ArrowLeftOutlined  style={{fontSize:'25px',color:'#fff' }}/>
       </Arrow>
      <Wrapper slideIndex={slideIndex}>
      {
          sliderItems.map(item => (
            <Slide key={item.id}>
                <ImageContainer>
                    <Image src={item.img} alt="slider-one"/>
                </ImageContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <button className='btn slider-btn'>SHOP NOW</button>
                </InfoContainer>
           </Slide>
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
