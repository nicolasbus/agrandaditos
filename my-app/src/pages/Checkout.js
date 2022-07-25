import { useState } from "react";
import FormGroup from '../components/FormGroup';
import styled from "styled-components";
import { useSelector } from "react-redux";
const axios = require("axios");


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
  const cart = useSelector(state=>state.cart)
  const [total, setTotal] = useState(cart.total);

  const handleClick =()=>{
    const url = "http://localhost:3000/mercadopago/payment";
  
    const body = 
  //       payer_email: "test_user_46945293@testuser.com",
      {
        title: "name",
        description: "Dummy description",
        picture_url: "img",
        category_id: "category123",
        quantity: parseInt(1),
        unit_price: parseFloat(total)
      }
  ;
  
  const payment = axios.post(url, body, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${"TEST-6173558116885974-050817-63983ffe9c3d8473d5023f9e61ccdcd6-26763240"}`
    }
  })
  .catch((err)=>{console.log("err",err)})
  .then(response => {
      console.log(response.data)
  })
  }
    return(

        <Container>
       {cart.products.map((products)=>(

     <form>
    <h2>Datos del cliente</h2>
    <FormGroup label="Nombre completo" type="text" />
    <FormGroup label="Direccion" type="text" />
    <FormGroup label="Ciudad" type="text" value="rio grande"/>
    <FormGroup label="Telefono" type="number" />
    <FormGroup label="Email" type="email" />
    <br/>
    <h2>Es para regalo?</h2>
    <FormGroup type="checkbox" />
    <FormGroup label="Direccion a enviar" type="text" />
    <FormGroup label="Ciudad" type="text" />
    <FormGroup label="Nombre del receptor" type="text" />

      


<h2>Total a pagar:{cart.total}</h2>

    <button type="submit" onClick={()=>handleClick()}>Pagar</button>
    </form>
       ))}

    </Container>
)
}

export default Checkout