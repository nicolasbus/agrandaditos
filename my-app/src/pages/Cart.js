import React from 'react'
import { useState } from "react";
import styled from "styled-components"
import { Add, Remove } from "@material-ui/icons";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";

const axios = require("axios");


const Container = styled.div`
`;
const Wrapper = styled.div`
padding:20px;
`;
const Title = styled.h1`
font-weight:300;
text-align:center;
`;
const Top = styled.div`
display:flex;
align-items:center;
justify-content: space-between;
padding:20px;
`;

const TopButton = styled.button`
padding:10px;
font-weight: 600;
cursor: pointer;
border: ${props=>props.type === "filled" && "none"};
background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
color: ${props=>props.type === "filled" && "white"};


`;
const TopTexts = styled.div`
`;
const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin:0 10px;
`;
const Bottom = styled.div`
display:flex;
justify-content:space-between;
`;
const Info = styled.div`
flex:3;
`;


const Product = styled.div`
display:flex;
justify-content:space-between;
`;

const ProductDetail = styled.div`
flex:2;
display:flex; 
`;
const Image = styled.img`
width:200px;
`;
const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;

const ProductColor = styled.div`
width:20px;
height:20px;
border-radius: 50%;
background-color: ${props=>props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
flex:1;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const ProductAmountContainer = styled.div`
display:flex;
align-items:center;
margin-bottom:30px;
`;
const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
`;
const ProductPrice = styled.div`
font-size:30px;
font-weight:200;

`;

const Hr = styled.hr`
background-color:#eee;
border:none;
height:1px;
`;

const Summary = styled.div`
flex:1;
border:0.5px solid lightgray;
padding:20px;
height:50vh;
`;

const SummaryTitle = styled.h1`
font-weight:200;
`;
const SummaryItem = styled.div`
margin: 20px 0px;
display:flex;
justify-content:space-between;
font-weight: ${props=>props.type === "total" && "500"};
font-size: ${props=>props.type === "total" && "24px"};

`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
width:100%;
padding:10px;
background-color: black;
color:white;
font-weight: 600;
`;



const Cart = () => {
  const cart = useSelector(state=>state.cart)
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(cart.total);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

 
const handleClick =()=>{
  const url = "http://localhost:3000/mercadopago/payment";

  const body = 
//       payer_email: "test_user_46945293@testuser.com",
    {
      title: "Agrandaditos",
      description: "Indumentaria infantil",
      picture_url: "img",
      category_id: "chicos",
      quantity: parseInt(1),
      unit_price: parseFloat(toPay)
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
  if(response.data){
    // response.data.init_point
    window.open(response.data.init_point, '_blank');
    console.log(response.data)
    console.log(response.data.init_point)

  }
})
}
  
 const shipping = 500
 const summary = total>10000 ? 0 : shipping 
 const toPay = total + summary

  return (
    <Container>
      <Wrapper>
        <Title>Carro</Title>
        <Top>
          <TopButton>CONTINUAR COMPRANDO</TopButton>
          <TopTexts>
            <TopText>CARRO(2)</TopText>
          </TopTexts>
          <TopButton type="filled">FINALIZAR COMPRA</TopButton>

        </Top>
        <Bottom>
          <Info>
            {cart.products.map((products,index)=>(
            <Product key={index}>
              <ProductDetail>
                <Image src={products.img} />
                <Details>
                  <ProductName>
                    <b>Producto:</b> {products.title}
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> {products._id}
                  </ProductId>
                  <ProductColor color={products.color}/>
                  <ProductSize>
                    <b>Talle:</b> {products.size}
                  </ProductSize>

                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                <Remove onClick={() => handleQuantity("dec")}/>
                  <ProductAmount>{products.quantity}</ProductAmount>
                  <Add  onClick={() => handleQuantity("inc")}/>
                </ProductAmountContainer>
                <ProductPrice>${products.price*products.quantity}</ProductPrice>
              </PriceDetail>
            </Product>
))}
            <Hr/>

            </Info>
          <Summary>
            <SummaryTitle>MI PEDIDO ♥</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal:</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Envio</SummaryItemText>
              <SummaryItemPrice>${summary}</SummaryItemPrice>
            </SummaryItem>           
            <SummaryItem>
              <SummaryItemText type="total">Total</SummaryItemText>
              <SummaryItemPrice>${toPay}</SummaryItemPrice>
            </SummaryItem>
            <Link to="/checkout"><Button>CONTINUAR</Button></Link>
            <Button id="checkout" className="button-checkout" onClick={()=>handleClick()}>PAGAR</Button>

          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  )
}


export default Cart;

