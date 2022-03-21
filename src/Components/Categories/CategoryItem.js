import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
flex:1;
margin:3px;
height:70vh;
position: relative;
cursor: pointer;
`
const Image = styled.img`
width:100%;
height:100%;
object-fit: cover;
`
const InfoCont = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background : rgba(0, 0, 0, 0.3)
`
const Title = styled.h2`
color: #fff;
margin-bottom: 20px;
font-size: 5rem;
font-weight: 600;
text-align:center;
`
const ItemCat = styled.h3`
color: #fff;
font-size: 2rem;
margin-bottom: 20px;
font-weight: 600;
text-align: center;
`
const Button = styled.button`
width: 50%;
margin: 0 auto;
padding:10px;
border: none;
border-radius: 10px;
background: #C09621;
color: #fff;
font-size:14px;
font-weight:600;
cursor: pointer;
opacity: 0.85;
`
const CategoryItem = ({category}) => {
  return (
    <Container>
            <Image src={category.img} alt='categories'/>
            <InfoCont>
                <Title>{category.title}</Title>
                <ItemCat>{category.cat}</ItemCat>
                <Button>SHOP NOW</Button>
            </InfoCont>
    </Container>
  )
}

export default CategoryItem
