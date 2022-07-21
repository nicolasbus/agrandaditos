import React from 'react';
import FormGroup from '../components/FormGroup';
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://s1.1zoom.me/b5050/48/Toys_White_background_Infants_Three_3_Smile_521614_1920x1080.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Checkout =()=>{
    return(

        <Container>
     <form>
    <h2>Datos del cliente</h2>
    <FormGroup label="Nombre" type="text" />
    <FormGroup label="Apellido" type="text" />
    <FormGroup label="Direccion" type="text" />
    <FormGroup label="Ciudad" type="text" value="rio grande"/>
    <FormGroup label="Telefono" type="number" />
    <FormGroup label="Email" type="email" />
    <br/>
    <h2>Es para regalar?</h2>
    <FormGroup type="checkbox" />
    <FormGroup label="Direccion a enviar" type="text" />
    <FormGroup label="Ciudad" type="text" />
    <FormGroup label="Nombre del receptor" type="text" />





    <button type="submit">Pagar</button>
    </form>
    </Container>
)
}

export default Checkout