import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components"

const Container = styled.div`
  // display:flex;
  // flex: 1;
  padding: 5px;
  margin: 0px;
  height: 70vh;
  position: relative;
  right:70px;
  top:20px;
  flex-wrap:wrap;
`;
const Image = styled.img`
flex:1;
width:400px;
height:100%;
objet-fit:cover;
// position:relative;
// right:150px;
border-radius:10px;
text-align: center;
`;

const Info = styled.div`
  position: absolute;
  top: 150px;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
    font-weight: 700;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: rgb(223, 15, 15);
    color:white;
    cursor: pointer;
    font-weight: 600;

    &:hover {
      background-color: white;
      color: rgb(223, 15, 15);
`;


const CategoryItem = ({ item }) => {
    return (
      <Container>
        <Link to={`/productos/${item.category}`}>
        <Image src={item.img} />
        <Info>
        
          <Title>{item.title}</Title>
          <Button>COMPRAR AHORA</Button>
        </Info>
        </Link>
      </Container>
    );
  };
  
  export default CategoryItem;