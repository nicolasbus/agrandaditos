import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components"

const Container = styled.div`
  flex: 1;
  margin:20px;

`;
const Image = styled.img`
width:350px;
height:100%;
align-items:center;
object-fit:cover;
border-radius:10px;
text-align: center;
`;

const Info = styled.div`
  position: absolute;
  top: 1200px;
  /* left: 0;
  width: 100%;
  height: 100%; */
  /* display: flex; */
  flex:1;
  margin:90px;
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
      color: rgb(223, 15, 15);}
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