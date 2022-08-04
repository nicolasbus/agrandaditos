import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components"

const Container = styled.div`
  flex: 1;
  margin:20px;

`;
const Image = styled.img`
width:450px;
height:600px;
align-items:center;
object-fit:cover;
border-radius:10px;
text-align: center;
margin:70px;
`;

const Info = styled.div`
  position: relative;
  bottom: 200px;
  left: 100;
  width: 100%;
  height: 100%; 
  flex:1;
  flex-direction: column;
  align-items: center;
  justify-content: center;


`;

const Title = styled.h1`
    color:white;
    font-weight: 700;
`;

const Button = styled.button`
    padding: 10px;
    background-color: #188743;
    color:white;
    border:2px solid #fff;
    cursor: pointer;
    font-weight: 600;
    border-radius:8px;

    &:hover {
      background-color: #1DA652;
      color:#EEEEEE;
      border:2px solid #f0f0f0;
`;


const CategoryItem = ({ item }) => {
    return (
      <Container>

        <Image src={item.img} />
        <Info>
        
          <Title>{item.title}</Title>
          <Link to={`/productos/${item.category}`}><Button>IR A LA TIENDA</Button></Link>
        </Info>
        
      </Container>
    );
  };
  
  export default CategoryItem;