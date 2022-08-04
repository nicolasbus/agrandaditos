import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom";

const Container = styled.div`
display:flex;
align-items:center;
bottom:50px;
margin:0px;
padding:0px;
`;
const Wrapper = styled.div`
margin:20px
`;
const Button = styled.button`
flex:1;
width:300px;
margin:30px;
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
border-radius:50px;
&:hover{
background-color: #69d03a;
color: white;
border:2px solid #f0f0f0;
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