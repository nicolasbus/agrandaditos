import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom";

const Container = styled.div`
align-items:center;
margin:0px;
padding:0px;
position:relative;
display:flex;
bottom:100px;

`;
const Wrapper = styled.div`
margin:20px

`;
const Button = styled.button`
flex:1;
width:300px;
margin:150px;
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
border-radius:50px;
&:hover{
background-color: #EEEDED;
border:2px solid #grey;
}
`;

const ButtonMenu = () => {
  return (
    <Container>
        <Wrapper>
        <Link to="/ubicacion"><Button>Donde estamos?</Button></Link>
        </Wrapper>
        <Wrapper>
            <Button>Tienda virtual</Button>
        </Wrapper>
        <Wrapper>
            <Button>Envio y cambios </Button>
        </Wrapper>
    </Container>
  )
}

export default ButtonMenu