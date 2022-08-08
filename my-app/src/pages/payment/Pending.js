import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom";

const Container = styled.div`
padding:150px;
text-align:center;

`;
const Wrapper = styled.div`
`;
const Img = styled.img`
height:300px;
`;
const Text = styled.h2`
margin:25px;
font-size:30px;
`;
const Subtext = styled.h3`
font-size:15px;
`;
const Button = styled.button`
margin:20px;
padding: 15px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
border-radius:20px;
&:hover{
  border:2px solid #grey;
  font-size: 21px;
`

const Pending = () => {
  return (
    <Container>
      <Wrapper>
        <Img src="https://i.ibb.co/0Z5qVpy/warning-256.png" />
        <Text>PAGO PENDIENTE</Text>
        <Subtext>Comuniquese a nuestro <a href="https://wa.me/5492964419063">WhatsApp</a></Subtext>
        <Link to="/"><Button>Seguir comprando</Button></Link>
      </Wrapper>

    </Container>
  )
}
export default Pending